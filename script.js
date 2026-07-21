const perguntas=[
"Tive dificuldade em me acalmar/descomprimir.",
"Dei-me conta que tinha a boca seca.",
"Não consegui ter nenhum sentimento positivo.",
"Senti dificuldade em respirar.",
"Foi-me difícil tomar iniciativa para fazer coisas.",
"Tive tendência para reagir exageradamente.",
"Senti tremores.",
"Senti-me muito nervoso(a).",
"Preocupei-me com situações em que poderia sentir pânico.",
"Senti que não havia nada que me fizesse andar para a frente.",
"Senti que estava agitado(a).",
"Senti dificuldades em relaxar.",
"Senti-me triste e deprimido(a).",
"Fui intolerante quando algo me impedia de realizar o que fazia.",
"Estive perto de entrar em pânico.",
"Não me consegui entusiasmar com nada.",
"Senti que não valia muito como pessoa.",
"Senti que andava muito irritável.",
"Senti o bater do coração sem esforço físico.",
"Tive medo sem uma boa razão.",
"Senti que a vida não tinha nenhum sentido."
];

const opcoes=["Nunca","Às vezes","Frequentemente","Quase sempre"];

const form=document.getElementById("form");

perguntas.forEach((texto,i)=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML="<strong>"+(i+1)+". "+texto+"</strong>";

opcoes.forEach((op,j)=>{

card.innerHTML+=`
<label>
<input type="radio" name="q${i}" value="${j}">
${op}
</label>
`;

});

form.appendChild(card);

});

const dep=[2,4,9,12,15,16,20];
const ans=[1,3,6,8,14,18,19];
const est=[0,5,7,10,11,13,17];

document.getElementById("btn").onclick=function(e){

e.preventDefault();

let respostas=[];

for(let i=0;i<21;i++){

const r=document.querySelector("input[name=q"+i+"]:checked");

if(!r){
alert("Responda todas as perguntas.");
return;
}

respostas.push(Number(r.value));

}

function soma(lista){
return lista.reduce((s,i)=>s+respostas[i],0)*2;
}

const d=soma(dep);
const a=soma(ans);
const es=soma(est);

const div=document.getElementById("resultado");

div.style.display="block";

div.innerHTML=`
<h2>Resultado</h2>

<p><b>Depressão:</b> ${d}</p>

<p><b>Ansiedade:</b> ${a}</p>

<p><b>Estresse:</b> ${es}</p>

<hr>

<p>Este resultado é apenas um instrumento de rastreamento e não substitui avaliação por um profissional de saúde.</p>
`;

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

};
