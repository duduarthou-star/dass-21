const questions = [
  { id: 1, text: "Tive dificuldade em me acalmar/descomprimir.", scale: "E" },
  { id: 2, text: "Dei-me conta que tinha a boca seca.", scale: "A" },
  { id: 3, text: "Não consegui ter nenhum sentimento positivo.", scale: "D" },
  { id: 4, text: "Senti dificuldade em respirar (por exemplo, respiração excessivamente rápida ou falta de ar na ausência de esforço físico).", scale: "A" },
  { id: 5, text: "Foi-me difícil tomar iniciativa para fazer coisas.", scale: "D" },
  { id: 6, text: "Tive tendência para reagir exageradamente em certas situações.", scale: "E" },
  { id: 7, text: "Senti tremores (por exemplo, das mãos ou das pernas).", scale: "A" },
  { id: 8, text: "Senti-me muito nervoso(a).", scale: "A" },
  { id: 9, text: "Preocupei-me com situações em que poderia vir a sentir pânico e fazer um papel ridículo.", scale: "A" },
  { id: 10, text: "Senti que não havia nada que me fizesse andar para a frente (ter expectativas positivas).", scale: "D" },
  { id: 11, text: "Senti que estava agitado(a).", scale: "E" },
  { id: 12, text: "Senti dificuldades em relaxar.", scale: "E" },
  { id: 13, text: "Senti-me triste e deprimido(a).", scale: "D" },
  { id: 14, text: "Fui intolerante quando qualquer coisa me impedia de realizar o que estava a fazer.", scale: "E" },
  { id: 15, text: "Estive perto de entrar em pânico.", scale: "A" },
  { id: 16, text: "Não me consegui entusiasmar com nada.", scale: "D" },
  { id: 17, text: "Senti que não valia muito como pessoa.", scale: "D" },
  { id: 18, text: "Senti que andava muito irritável.", scale: "E" },
  { id: 19, text: "Senti o bater do meu coração mesmo quando não fazia esforço físico (ex.: sensação de aumento dos batimentos ou falhas no coração).", scale: "A" },
  { id: 20, text: "Tive medo sem uma boa razão para isso.", scale: "A" },
  { id: 21, text: "Senti que a vida não tinha nenhum sentido.", scale: "D" }
];

const options = [
  { label: "Nunca", value: 0 },
  { label: "Às vezes", value: 1 },
  { label: "Frequentemente", value: 2 },
  { label: "Quase sempre", value: 3 }
];

function renderQuestions() {
  const container = document.getElementById("questionsContainer");

  questions.forEach((q) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("p");
    title.className = "question-text";
    title.textContent = `${q.id}. ${q.text}`;
    card.appendChild(title);

    const optionsGroup = document.createElement("div");
    optionsGroup.className = "options-group";

    options.forEach((opt) => {
      const label = document.createElement("label");
      label.className = "option-label";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${q.id}`;
      input.value = opt.value;
      input.required = true;

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt.label));
      optionsGroup.appendChild(label);
    });

    card.appendChild(optionsGroup);
    container.appendChild(card);
  });
}

document.getElementById("dassForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let scores = { D: 0, A: 0, E: 0 };

  questions.forEach((q) => {
    const selectedOption = document.querySelector(`input[name="q_${q.id}"]:checked`);
    if (selectedOption) {
      scores[q.scale] += parseInt(selectedOption.value, 10);
    }
  });

  // Na norma original do DASS-21, multiplica-se os totais por 2 para corresponder à escala DASS-42
  document.getElementById("depressionScore").textContent = scores.D * 2;
  document.getElementById("anxietyScore").textContent = scores.A * 2;
  document.getElementById("stressScore").textContent = scores.E * 2;

  const resultBox = document.getElementById("result");
  resultBox.classList.remove("hidden");
  resultBox.scrollIntoView({ behavior: "smooth" });
});

// Renderizar as perguntas assim que a página carregar
document.addEventListener("DOMContentLoaded", renderQuestions);
