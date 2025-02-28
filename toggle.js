const translations = {
  en: {
    home: "Home",
    projects: "My Projects",
    about: "About Me",
    contact: "Contact Me",
    heroSubtitle: " Designing with Purpose, Developing with Precision",
    whoAmI: "Who Am I?",
    whatLookingFor: "What I'm Looking For?",
    howAddValue: "How I Can Add Value?",

    aboutText: "I am a Multimedia Design student at Københavns ErhvervsAkademi with a strong passion for frontend development and UI/UX design. Creativity, problem-solving, and user-centered design are at the core of my approach, and I am always eager to learn and push my skills further.",
    lookingForText: "I am looking for an internship where I can refine my frontend development skills while also applying my UX/UI knowledge in real-world projects. My goal is to contribute to a dynamic team, gain hands-on experience, and grow as a professional by working on meaningful and user-friendly digital solutions.",
    valueText: "As an intern, I bring a fresh perspective, a positive approach, and creative ideas that can add value to your company. My background in frontend development ensures that I can contribute effectively to building engaging, functional, and user-friendly websites, while my UX/UI expertise allows me to enhance user experiences with well-structured and visually appealing designs.",
  },
  dk: {
    home: "Hjem",
    projects: "Mine Projekter",
    about: "Om Mig",
    contact: "Kontakt Mig",
    heroSubtitle: "Designer med formål, udvikler med præcision",
    whoAmI: "Hvem er jeg?",
    whatLookingFor: "Hvad leder jeg efter?",
    howAddValue: "Hvordan kan jeg tilføre værdi?",
    aboutText: "Jeg er en Multimedia Design-studerende på Københavns ErhvervsAkademi med en stærk passion for frontend-udvikling og UI/UX-design. Kreativitet, problemløsning og brugercentreret design er kernen i min tilgang, og jeg er altid ivrig efter at lære og udvikle mine færdigheder yderligere",
    lookingForText: "Jeg leder efter en praktikplads, hvor jeg kan forfine mine frontend-udviklingsfærdigheder, samtidig med at jeg anvender min UX/UI-viden i virkelige projekter. Mit mål er at bidrage til et dynamisk team, få praktisk erfaring og vokse som professionel ved at arbejde på meningsfulde og brugervenlige digitale løsninger.",
    valueText: "Som praktikant bringer jeg et frisk perspektiv, en positiv tilgang og kreative idéer, der kan tilføre værdi til jeres virksomhed. Min baggrund inden for frontend-udvikling sikrer, at jeg kan bidrage effektivt til at bygge engagerende, funktionelle og brugervenlige websites, mens min UX/UI-ekspertise giver mig mulighed for at forbedre brugeroplevelser med velstrukturerede og visuelt appellerende design.",
  },
};
function updateText() {
  const translatableElements = document.querySelectorAll(".translatable");
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
}

updateText();

// let currentLang = "en"; // Default language

// function toggleLanguage() {
//   currentLang = currentLang === "en" ? "dk" : "en";
//   document.getElementById("language-btn").innerText = currentLang === "en" ? "Dansk" : "English";

//   document.querySelector(".menu li:nth-child(1) a").innerText = translations[currentLang].home;
//   document.querySelector(".menu li:nth-child(2) a").innerText = translations[currentLang].projects;
//   document.querySelector(".menu li:nth-child(3) a").innerText = translations[currentLang].about;
//   document.querySelector(".menu li:nth-child(4) a").innerText = translations[currentLang].contact;

//   document.querySelector(".hero-info h2").innerText = translations[currentLang].heroSubtitle;
//   document.querySelector(".about-container:nth-child(1) h3").innerText = translations[currentLang].whoAmI;
//   document.querySelector(".about-container:nth-child(2) h3").innerText = translations[currentLang].whatLookingFor;
//   document.querySelector(".about-container:nth-child(3) h3").innerText = translations[currentLang].howAddValue;
//   document.querySelector(".about-container .about-text").innerText = translations[currentLang].aboutText;
//   document.querySelector(".about-container .looking-for-text").innerText = translations[currentLang].lookingForText;
//   document.querySelector(".about-container .value-text").innerText = translations[currentLang].valueText;
// }
