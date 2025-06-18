document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {

      document.querySelectorAll(".card").forEach((c) => {
        if (c !== card) {
          c.classList.remove("is-flipped");
        }
      });

      this.classList.toggle("is-flipped");
    });
  });

  const navCards = document.getElementById("nav-cards");
  const navCredits = document.getElementById("nav-credits");
  const cardsSection = document.getElementById("cards-section");
  const creditsSection = document.getElementById("credits-section");

  navCards.addEventListener("click", () => {
    cardsSection.classList.add("active-section");
    creditsSection.classList.remove("active-section");
    navCards.classList.add("active");
    navCredits.classList.remove("active");
  });

  navCredits.addEventListener("click", () => {
    creditsSection.classList.add("active-section");
    cardsSection.classList.remove("active-section");
    navCredits.classList.add("active");
    navCards.classList.remove("active");
  });

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");
  const infoButtons = document.querySelectorAll(".info-btn");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  const mitosisInfo = {
    profase: {
      title: "Profase",
      content: `
        <p>A profase é a primeira fase da mitose, caracterizada por:</p>
        <ul>
          <li>Condensação dos cromossomos, que se tornam visíveis ao microscópio</li>
          <li>Desaparecimento do nucléolo</li>
          <li>Início da formação do fuso mitótico</li>
          <li>Migração dos centríolos para os polos opostos da célula</li>
        </ul>
        <p>Esta fase é crucial para preparar o material genético para a divisão celular.</p>
      `,
    },
    prometafase: {
      title: "Prometáfase",
      content: `
        <p>A prometáfase é uma fase de transição entre a profase e a metáfase:</p>
        <ul>
          <li>Desintegração da membrana nuclear</li>
          <li>Ligação das fibras do fuso aos cinetócoros dos cromossomos</li>
          <li>Início do movimento dos cromossomos em direção ao centro da célula</li>
        </ul>
        <p>Durante esta fase, os cromossomos começam a se organizar para o alinhamento equatorial.</p>
      `,
    },
    metafase: {
      title: "Metáfase",
      content: `
        <p>Na metáfase, os cromossomos atingem sua máxima condensação e:</p>
        <ul>
          <li>Alinham-se no plano equatorial da célula</li>
          <li>Formam a chamada "placa metafásica" ou "placa equatorial"</li>
          <li>As fibras do fuso estão completamente ligadas aos cinetócoros</li>
        </ul>
        <p>Esta fase é importante para garantir a distribuição igual do material genético.</p>
      `,
    },
    anafase: {
      title: "Anáfase",
      content: `
        <p>A anáfase é caracterizada pela separação das cromátides-irmãs:</p>
        <ul>
          <li>As cromátides-irmãs se separam e são puxadas para polos opostos</li>
          <li>Movimento causado pelo encurtamento das fibras do fuso</li>
          <li>É a fase mais rápida da mitose</li>
        </ul>
        <p>Esta fase garante que cada célula-filha receba o mesmo conjunto de cromossomos.</p>
      `,
    },
    telofase: {
      title: "Telófase",
      content: `
        <p>A telófase é a última fase da mitose:</p>
        <ul>
          <li>Os cromossomos chegam aos polos da célula</li>
          <li>Reconstrução da membrana nuclear ao redor de cada conjunto de cromossomos</li>
          <li>Reaparecimento do nucléolo</li>
          <li>Descondensação dos cromossomos</li>
        </ul>
        <p>Ao final desta fase, formam-se dois núcleos idênticos ao núcleo original.</p>
      `,
    },
    citocinese: {
      title: "Citocinese",
      content: `
        <p>A citocinese é o processo de divisão do citoplasma que ocorre após a telófase:</p>
        <ul>
          <li>Em células animais: formação de um anel contrátil que estrangula a célula</li>
          <li>Em células vegetais: formação da placa celular que cresce do centro para as extremidades</li>
          <li>Resulta na separação física das duas células-filhas</li>
        </ul>
        <p>Embora não seja tecnicamente parte da mitose, a citocinese completa o processo de divisão celular.</p>
      `,
    },
    importancia: {
      title: "Importância da Mitose",
      content: `
        <p>A mitose é um processo fundamental para os organismos por várias razões:</p>
        <ul>
          <li>Crescimento dos organismos multicelulares</li>
          <li>Regeneração de tecidos danificados</li>
          <li>Cicatrização de feridas</li>
          <li>Reprodução assexuada em organismos unicelulares</li>
          <li>Manutenção da estabilidade genética</li>
        </ul>
        <p>Sem a mitose, seria impossível o desenvolvimento e a manutenção dos organismos vivos como os conhecemos.</p>
      `,
    },
    curiosidades: {
      title: "Curiosidades sobre a Mitose",
      content: `
        <p>Alguns fatos interessantes sobre a mitose:</p>
        <ul>
          <li>Aproximadamente 2 trilhões de mitoses ocorrem diariamente no corpo humano adulto</li>
          <li>A duração da mitose varia entre diferentes tipos celulares (de 30 minutos a várias horas)</li>
          <li>As células da medula óssea são algumas das que se dividem mais rapidamente no corpo humano</li>
          <li>O câncer é caracterizado por mitoses descontroladas</li>
          <li>Alguns medicamentos quimioterápicos funcionam interrompendo a mitose em células cancerígenas</li>
        </ul>
        <p>A mitose é um processo fascinante que continua sendo estudado intensamente pelos cientistas.</p>
      `,
    },
  };

  infoButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      const infoType = this.getAttribute("data-info");
      const info = mitosisInfo[infoType];

      if (info) {
        modalTitle.textContent = info.title;
        modalBody.innerHTML = info.content;
        modal.style.display = "block";
      } else {
        Swal.fire({
          title: "Informações sobre a Mitose",
          html: "A mitose é a divisão celular que forma duas células iguais à original. Nos multicelulares, permite o crescimento e a regeneração. Nos unicelulares, serve para a reprodução assexuada. É essencial para manter o número de cromossomos e garantir a continuidade da vida.",
          icon: "info",
          confirmButtonText: "Entendi!",
          confirmButtonColor: "#4ccc6a",
        });
      }
    });
  });
});
