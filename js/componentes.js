// CARD PROGRAMACAO
const cardProgramacao = document.querySelectorAll(".card-programacao");

const programacaoSemana = {
   //  PRIMEIRA SEMANA 
  semana1: [
    {
      // --- INÍCIO DO DIA 20 ---
      dia: "20 de agosto (quinta-feira)",
      img: "assets/img/ingressos/semana1.jpg",
      alt: "cantores show 20 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- João Bosco & Vinícius" },
        { horario: "23:00h", artista: "- Fernando & Sorocaba" },
        { horario: "01:00h", artista: "- Diego & Arnaldo" }
      ],
    },

    {
      // --- INÍCIO DO DIA 21 ---
      dia: "21 de agosto (sexta-feira)",
      img: "assets/img/ingressos/semana1.jpg",
      alt: "cantores show 21 de agosto",
      shows: [
        { horario: "19:30h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:45h", artista: "- Zé Vaqueiro" },
        { horario: "23:15h", artista: "- Léo Foguete" },
        { horario: "01:00h", artista: "- Nattan" }
      ],
    },

    {
      // --- INÍCIO DO DIA 22 ---
      dia: "22 de agosto (sábado)",
      img: "assets/img/ingressos/semana1.jpg",
      alt: "cantores show 22 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- Jads & Jadson" },
        { horario: "22:30h", artista: "- Zé Neto & Cristiano" },
        { horario: "00:30h", artista: "- Bruno & Barreto" },
        { horario: "02:00h", artista: "- Country Beach" }
      ],
    },

    {
      // --- INÍCIO DO DIA 23 ---
      dia: "23 de agosto (domingo)",
      img: "assets/img/ingressos/semana1.jpg",
      alt: "cantores show 23 de agosto",
      shows: [
        { horario: "19:45h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- Nattanzinho Lima" },
        { horario: "22:30h", artista: "- Munhoz & Mariano" },
        { horario: "00:00h", artista: "- Gustavo Lima" },
        { horario: "02:00h", artista: "- Us Agroboy" }
      ],
    },

    {
      // --- INÍCIO DO DIA 24 ---
      dia: "24 de agosto (segunda-feira)",
      img: "assets/img/ingressos/semana1.jpg",
      alt: "cantores show 24 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- Gino & Geno" },
        { horario: "22:30h", artista: "- Rio Negro & Solimões" },
        { horario: "00:30h", artista: "- Leonardo" },
        { horario: "02:00h", artista: "- Zé Felipe" }
      ],
    }
  ],
  //  SEGUNDA SEMANA 
  semana2: [
    {
      // --- INÍCIO DO DIA 25 ---
      dia: "25 de agosto (terça-feira)",
      img: "assets/img/ingressos/semana2.jpg",
      alt: "cantores show 25 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- Lauana Prado" },
        { horario: "23:00h", artista: "- Bruno & Marrone" },
        { horario: "01:00h", artista: "- Edson & Hudson" },
        { horario: "01:00h", artista: "- Mateus & Kaun" }
      ],
    },
    
    {
      // --- INÍCIO DO DIA 26 ---
      dia: "26 de agosto (quarta-feira)",
      img: "assets/img/ingressos/semana2.jpg",
      alt: "cantores show 26 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "19:30h", artista: "- Wesley Safadão" },
        { horario: "21:45h", artista: "- Xandi Avião" },
        { horario: "23:15h", artista: "- Barões da Pisadinha" },
        { horario: "01:00h", artista: "- Felipe Amorim" }
      ],
    },

    {
      // --- INÍCIO DO DIA 27 ---
      dia: "27 de agosto (quinta-feira)",
      img: "assets/img/ingressos/semana2.jpg",
      alt: "cantores show 27 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- Matogrosso & Mathias" },
        { horario: "22:30h", artista: "- Bruno & Marrone" },
        { horario: "00:30h", artista: "- Ana Castela" },
        { horario: "02:00h", artista: "- Jiraya Uai" }
      ],
    },

    {
      // --- INÍCIO DO DIA 28 ---
      dia: "28 de agosto (sexta-feira)",
      img: "assets/img/ingressos/semana2.jpg",
      alt: "cantores show 28 de agosto",
      shows: [
        { horario: "19:45h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- César Menotti & Fabiano" },
        { horario: "22:30h", artista: "- Diego & Victor Hugo" },
        { horario: "00:00h", artista: "- João Gomes" },
        { horario: "02:00h", artista: "- Brenno & Matheus" }
      ],
    },

    {
      // --- INÍCIO DO DIA 29 ---
      dia: "29 de agosto (sábado)",
      img: "assets/img/ingressos/semana2.jpg",
      alt: "cantores show 29 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- Ícaro & Gilmar" },
        { horario: "22:30h", artista: "- João Neto & Frederico" },
        { horario: "00:30h", artista: "- Panda" },
        { horario: "02:00h", artista: "- Fiduma & Jeca" }
      ],
    },

    {
      // --- INÍCIO DO DIA 30 ---
      dia: "30 de agosto (domingo)",
      img: "assets/img/ingressos/semana2.jpg",
      alt: "cantores show 30 de agosto",
      shows: [
        { horario: "19:00h", artista: "- Finais Provas de Montaria e Rodeio" },
        { horario: "21:00h", artista: "- Gino & Geno" },
        { horario: "22:30h", artista: "- Rio Negro & Solimões" },
        { horario: "00:30h", artista: "- Leonardo" },
        { horario: "02:00h", artista: "- Zé Felipe" },
      ],
    }
  ]
};
