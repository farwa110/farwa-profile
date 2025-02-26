const translations = {
  en: {
    home: "Home",
    projects: "My Projects",
    about: "About Me",
    contact: "Contact Me",
    heroSubtitle: "Dedicated to learning, creating, and innovating",
    whoAmI: "Who Am I?",
    whatLookingFor: "What I'm Looking For?",
    howAddValue: "How I Can Add Value?",
    aboutText: "I am a Multimedia Design student at Københavns ErhvervsAkademi...",
    valueText: "As an intern, I bring a fresh perspective...",
  },
  dk: {
    home: "Hjem",
    projects: "Mine Projekter",
    about: "Om Mig",
    contact: "Kontakt Mig",
    heroSubtitle: "Dedikeret til at lære, skabe og innovere",
    whoAmI: "Hvem er jeg?",
    whatLookingFor: "Hvad leder jeg efter?",
    howAddValue: "Hvordan kan jeg tilføre værdi?",
    aboutText: "Jeg er studerende i Multimediedesign på Københavns ErhvervsAkademi...",
    valueText: "Som praktikant bringer jeg et frisk perspektiv...",
  },
};

let currentLang = "en"; // Default language

function toggleLanguage() {
  currentLang = currentLang === "en" ? "dk" : "en";
  document.getElementById("language-btn").innerText = currentLang === "en" ? "Dansk" : "English";

  document.querySelector(".menu li:nth-child(1) a").innerText = translations[currentLang].home;
  document.querySelector(".menu li:nth-child(2) a").innerText = translations[currentLang].projects;
  document.querySelector(".menu li:nth-child(3) a").innerText = translations[currentLang].about;
  document.querySelector(".menu li:nth-child(4) a").innerText = translations[currentLang].contact;

  document.querySelector(".hero-info h2").innerText = translations[currentLang].heroSubtitle;
  document.querySelector(".about-container:nth-child(1) h3").innerText = translations[currentLang].whoAmI;
  document.querySelector(".about-container:nth-child(2) h3").innerText = translations[currentLang].whatLookingFor;
  document.querySelector(".about-container:nth-child(3) h3").innerText = translations[currentLang].howAddValue;
}
