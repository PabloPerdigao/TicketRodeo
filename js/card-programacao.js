// dados da programação de shows
const programacaoSemana = {
  semana1: [
    {
      dia: "20 de agosto (quinta-feira)",
      img: "assets/images/programacao/atracao1.png",
      alt: "cantores show 20 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- João Bosco & Vinícius" },
        { horario: "23:00h", atracao: "- Fernando & Sorocaba" },
        { horario: "01:00h", atracao: "- Fiduma & Jeca" },
      ],
    },

    {
      dia: "21 de agosto (sexta-feira)",
      img: "assets/images/programacao/atracao2.png",
      alt: "cantores show 21 de agosto",
      shows: [
        { horario: "19:30h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:45h", atracao: "- Zé Vaqueiro" },
        { horario: "23:15h", atracao: "- Léo Foguete" },
        { horario: "01:00h", atracao: "- Nattan" },
      ],
    },

    {
      dia: "22 de agosto (sábado)",
      img: "assets/images/programacao/atracao3.png",
      alt: "cantores show 22 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- Jads & Jadson" },
        { horario: "22:30h", atracao: "- Zé Neto & Cristiano" },
        { horario: "00:30h", atracao: "- Bruno & Barreto" },
        { horario: "02:00h", atracao: "- Country Beach" },
      ],
    },

    {
      dia: "23 de agosto (domingo)",
      img: "assets/images/programacao/atracao4.png",
      alt: "cantores show 23 de agosto",
      shows: [
        { horario: "19:45h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- Nattanzinho Lima" },
        { horario: "22:30h", atracao: "- Munhoz & Mariano" },
        { horario: "00:00h", atracao: "- Gustavo Lima" },
        { horario: "02:00h", atracao: "- Us Agroboy" },
      ],
    },

    {
      dia: "24 de agosto (segunda-feira)",
      img: "assets/images/programacao/atracao5.png",
      alt: "cantores show 24 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- Gino & Geno" },
        { horario: "22:30h", atracao: "- Rio Negro & Solimões" },
        { horario: "00:30h", atracao: "- Leonardo" }
      ],
    },
  ],

  semana2: [
    {
      dia: "25 de agosto (terça-feira)",
      img: "assets/images/programacao/atracao6.png",
      alt: "cantores show 25 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- Lauana Prado" },
        { horario: "23:00h", atracao: "- Bruno & Marrone" },
        { horario: "01:00h", atracao: "- Edson & Hudson" },
        { horario: "01:00h", atracao: "- Mateus & Kaun" },
      ],
    },

    {
      dia: "26 de agosto (quarta-feira)",
      img: "assets/images/programacao/atracao7.png",
      alt: "cantores show 26 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "19:30h", atracao: "- Wesley Safadão" },
        { horario: "21:45h", atracao: "- Xandi Avião" },
        { horario: "23:15h", atracao: "- Barões da Pisadinha" },
        { horario: "01:00h", atracao: "- Felipe Amorim" },
      ],
    },

    {
      dia: "27 de agosto (quinta-feira)",
      img: "assets/images/programacao/atracao8.png",
      alt: "cantores show 27 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- Vitor & Leo" },
        { horario: "22:30h", atracao: "- Zezé Di Camargo & Luciano" },
        { horario: "00:30h", atracao: "- Ana Castela" },
        { horario: "02:00h", atracao: "- Jiraya Uai" },
      ],
    },

    {
      dia: "28 de agosto (sexta-feira)",
      img: "assets/images/programacao/atracao9.png",
      alt: "cantores show 28 de agosto",
      shows: [
        { horario: "19:45h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- César Menotti & Fabiano" },
        { horario: "22:30h", atracao: "- Diego & Victor Hugo" },
        { horario: "00:00h", atracao: "- Antony & Gabriel" },
        { horario: "02:00h", atracao: "- Brenno & Matheus" },
      ],
    },

    {
      dia: "29 de agosto (sábado)",
      img: "assets/images/programacao/atracao10.png",
      alt: "cantores show 29 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- Ícaro & Gilmar" },
        { horario: "22:30h", atracao: "- João Neto & Frederico" },
        { horario: "00:30h", atracao: "- Panda" },
        { horario: "02:00h", atracao: "- Diego & Arnaldo" },
      ],
    },

    {
      dia: "30 de agosto (domingo)",
      img: "assets/images/programacao/atracao11.png",
      alt: "cantores show 30 de agosto",
      shows: [
        { horario: "19:00h", atracao: "- Finais Provas de Montaria e Rodeio" },
        { horario: "21:00h", atracao: "- Clayton & Romário" },
        { horario: "22:30h", atracao: "- Jorge & Matheus" },
        { horario: "00:30h", atracao: "- Hugo & Guilherme" }
      ],
    },
  ],
};

// função para criar o card da programação
function criarCard(dadosDoDia) {
  return `
    <article class="card">
      <img src="${dadosDoDia.img}" alt="d${dadosDoDia.alt}" />
      <header>
        <h4>
          <time>${dadosDoDia.dia}</time>
        </h4>
        </header>
        <ul>
          ${dadosDoDia.shows
            .map(
              (show) =>
                `<li class="item-lista"><span>${show.horario}</span> ${show.atracao}</li>`,
            )
            .join("")}  
          </ul>
    </article>
  `;
}

// insere os cards na página

// 1ª semana
const containerSemana1 = document.querySelector(".card-container1");

const cardsProgramacao = programacaoSemana.semana1
  .map((diaAtual) => criarCard(diaAtual))
  .join("");

containerSemana1.innerHTML = cardsProgramacao;

// 2ª semana
const containerSemana2 = document.querySelector(".card-container2");

const cardsProgramacao2 = programacaoSemana.semana2
  .map((diaAtual) => criarCard(diaAtual))
  .join("");

containerSemana2.innerHTML += cardsProgramacao2;
