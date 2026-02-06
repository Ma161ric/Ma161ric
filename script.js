// ============================================
// Translations
// ============================================
const translations = {
  de: {
    // Navigation
    navHome: "Start",
    navProjects: "Projekte",
    navCV: "Lebenslauf",
    navContact: "Kontakt",
    navLinkedIn: "LinkedIn",
    
    // Toggle Buttons
    darkModeLight: "🌙 Dark Mode",
    darkModeDark: "🌞 Light Mode",
    languageDE: "🇬🇧 English",
    languageEN: "🇩🇪 Deutsch",
    
    // Hero
    heroGreeting: "👋 Hi, ich bin",
    heroSubtitle: "🎓 Student der Angewandten Informatik an der HTWG Konstanz",
    heroFocus: "Schwerpunkt: Embedded Systems",
    heroTagline: "Ich interessiere mich für hardwarenahe Software, zuverlässige Systeme und Kommunikation zwischen Geräten. Hier zeige ich Projekte und Skills, die ich im Studium und in eigenen Arbeiten aufgebaut habe.",
    
    // About
    aboutTitle: "🧩 Kurzprofil",
    aboutItem1: "Embedded Entwicklung mit Fokus auf C und C++",
    aboutItem2: "Grundlagen digitaler Systeme und Mikroprozessortechnik",
    aboutItem3: "Sensorik und Peripherie, Interrupts, Timer, Zustandsmaschinen",
    aboutItem4: "Embedded Linux Grundlagen und Tooling im Alltag",
    
    // Skills
    skillsTitle: "🛠️ Skills & Tools",
    skillsHint: "Hinweis: Ich liste hier nur Dinge, die ich praktisch genutzt habe. Tiefe und Details zeige ich in den Projekten.",
    
    // Projects
    projectsTitle: "📂 Projekte",
    projectIoTTitle: "IoT Sensor Projekt",
    projectIoTSummary: "Sensorwerte erfassen, verarbeiten und übertragen. Fokus auf robuste Kommunikation und saubere Struktur.",
    projectIoTFeature1: "Messwerte, Status, einfache Fehlerfälle",
    projectIoTFeature2: "Mikrocontroller, Sensorik, C oder C++",
    
    projectEmbeddedTitle: "Embedded Systems Projekt",
    projectEmbeddedSummary: "Hardwarenahe Anwendung mit klar definiertem Timing. Fokus auf Interrupts, Timer und Zustandsmaschine.",
    projectEmbeddedFeature1: "Echtzeitnahes Verhalten und Debugging",
    projectEmbeddedFeature2: "C, Toolchain, Git",
    
    projectCANTitle: "CAN Bus Kommunikation",
    projectCANSummary: "Temperaturdaten erfassen und zwischen Knoten austauschen. Fokus auf Nachrichtenformat und nachvollziehbares Logging.",
    projectCANFeature1: "Protokoll, Payload, Fehlerszenarien",
    projectCANFeature2: "Embedded C, Schnittstellen, Debugging",
    
    // Footer
    footerContact: "📫 Kontakt",
    footerLinkedIn: "💼 LinkedIn",
    footerImpressum: "Impressum",
    footerDatenschutz: "Datenschutz",
    
    // Contact Page
    contactTitle: "📫 Kontakt aufnehmen",
    contactIntro: "Schreib mir gern eine Nachricht oder nutze das Kontaktformular. Ich freue mich auf deine Nachricht.",
    contactEmail: "E-Mail",
    contactName: "Name",
    contactNamePlaceholder: "Dein Name",
    contactEmailPlaceholder: "Deine E-Mail",
    contactMessage: "Nachricht",
    contactMessagePlaceholder: "Deine Nachricht",
    contactSubmit: "📨 Nachricht senden",
    contactSending: "⏳ Wird gesendet...",
    contactError: "❌ Fehler beim Senden. Bitte versuche es später erneut oder schreibe mir direkt per E-Mail.",
    contactValidation: "Bitte prüfe deine Eingaben und fülle alle Pflichtfelder aus.",
    contactBackHome: "🔙 Zurück zur Startseite",
    
    // Thank You Page
    thankYouTitle: "✅ Danke für deine Nachricht",
    thankYouMessage: "Ich habe deine Nachricht erhalten und melde mich so bald wie möglich.",
    thankYouHome: "🏠 Zur Startseite",
    thankYouContact: "📫 Noch eine Nachricht",
    thankYouLinkedIn: "💼 LinkedIn",
    
    // CV Page
    cvTitle: "📄 Lebenslauf",
    cvEducationTitle: "🎓 Ausbildung",
    cvEducationDegree: "Bachelor of Science, Angewandte Informatik",
    cvEducationSchool: "HTWG Konstanz",
    cvEducationFocus: "Schwerpunkt: Embedded Systems",
    cvExperienceTitle: "💼 Praxiserfahrung",
    cvExperiencePlaceholder: "Praxissemester und berufliche Stationen (Platzhalter für eigene Inhalte)",
    cvExperiencePreview: "Praxissemester und berufliche Stationen",
    cvExperienceDescription: "Hier kannst du dein Praxissemester, Werkstudententätigkeiten oder andere berufliche Erfahrungen eintragen. Beschreibe kurz deine Aufgaben, verwendete Technologien und was du dabei gelernt hast.",
    cvEducationDescription: "Ich studiere Angewandte Informatik an der HTWG Konstanz mit Fokus auf Embedded Systems. Im Studium beschäftige ich mich mit hardwarenaher Programmierung, Mikroprozessortechnik, digitalen Systemen und Embedded Linux.",
    cvSkillsTitle: "🛠️ Technische Skills",
    cvDownload: "📥 CV als PDF herunterladen",
    cvContactBtn: "📫 Kontakt aufnehmen",
    cvPreviewTitle: "📄 Lebenslauf",
    cvViewFull: "📄 Vollständigen Lebenslauf ansehen",
    
    // Project Detail
    projectGoalTitle: "🎯 Ziel",
    projectContributionTitle: "🔧 Mein Beitrag",
    projectTechTitle: "💻 Tech Stack",
    projectImplementationTitle: "⚙️ Umsetzung",
    projectScreenshotsTitle: "📸 Screenshots",
    projectLessonsTitle: "📚 Lessons Learned",
    projectLinksTitle: "🔗 Links",
    projectBackToProjects: "← Zurück zu Projekten",
    projectContactCTA: "📫 Kontakt",
    projectRepo: "GitHub Repository",
    projectDemo: "Live Demo",
    
    // IoT Project Details
    projectIoTGoal: "Das Projekt befasst sich mit der Erfassung von Sensordaten, ihrer Verarbeitung und Übertragung. Der Fokus liegt auf einer robusten Kommunikation und einer sauberen, wartbaren Code-Struktur. Das System soll Messwerte zuverlässig erfassen und Status-Informationen bereitstellen, auch bei einfachen Fehlerszenarien.",
    projectIoTContrib1: "Implementierung der Sensor-Schnittstelle und Datenerfassung",
    projectIoTContrib2: "Entwicklung eines Protokolls zur strukturierten Datenübertragung",
    projectIoTContrib3: "Fehlerbehandlung bei Sensor-Ausfällen und Kommunikationsfehlern",
    projectIoTImplementation: "Die Umsetzung erfolgte in mehreren Schritten. Zunächst wurde der Sensor angebunden und die Datenerfassung implementiert. Anschließend wurde ein einfaches Protokoll definiert, um die Daten strukturiert zu übertragen. Die Fehlerbehandlung umfasst Timeouts, Checksummen und defensive Programmierung. Der Code wurde modular aufgebaut, um Wartbarkeit und Erweiterbarkeit zu gewährleisten.",
    projectIoTLesson1: "Defensive Programmierung bei hardwarenaher Entwicklung zahlt sich aus.",
    projectIoTLesson2: "Strukturierte Fehlerbehandlung erleichtert das Debugging erheblich.",
    
    // Embedded Project Details
    projectEmbeddedGoal: "Entwicklung einer hardwarenahen Anwendung mit präzisem Timing. Das Projekt soll Interrupts, Timer und eine Zustandsmaschine nutzen, um echtzeitnahes Verhalten zu erreichen. Der Fokus liegt auf nachvollziehbarer Struktur und systematischem Debugging.",
    projectEmbeddedContrib1: "Design und Implementierung einer ereignisgesteuerten Zustandsmaschine",
    projectEmbeddedContrib2: "Konfiguration von Interrupts und Hardware-Timern",
    projectEmbeddedContrib3: "Systematisches Debugging mit Oszilloskop und Logausgaben",
    projectEmbeddedImplementation: "Die Umsetzung begann mit der Definition der Zustandsmaschine und der benötigten Events. Anschließend wurden die Hardware-Timer konfiguriert und Interrupt-Handler implementiert. Besonderes Augenmerk wurde auf minimale Interrupt-Laufzeiten und sichere Datenübergabe zwischen Interrupt- und Hauptkontext gelegt. Das Debugging erfolgte durch gezielte Logausgaben und Messungen mit dem Oszilloskop.",
    projectEmbeddedLesson1: "Klare Trennung zwischen Interrupt- und Hauptkontext ist essentiell.",
    projectEmbeddedLesson2: "Zustandsmaschinen machen komplexe Abläufe nachvollziehbar und testbar.",
    
    // CAN Project Details
    projectCANGoal: "Das Projekt beschäftigt sich mit der Erfassung von Temperaturdaten und deren Austausch zwischen mehreren Knoten über einen CAN-Bus. Der Fokus liegt auf einem strukturierten Nachrichtenformat, nachvollziehbarem Logging und sicherer Fehlerbehandlung bei Kommunikationsproblemen.",
    projectCANContrib1: "Definition eines strukturierten Nachrichtenformats für Sensordaten",
    projectCANContrib2: "Implementierung der CAN-Schnittstelle und Fehlerbehandlung",
    projectCANContrib3: "Logging-Mechanismus zur Nachvollziehbarkeit von Nachrichten und Fehlern",
    projectCANImplementation: "Die Umsetzung begann mit der Definition des Nachrichtenformats. Es wurde ein einfaches Protokoll definiert, das Sensor-ID, Temperaturwert und Checksumme enthält. Die CAN-Schnittstelle wurde konfiguriert und ein Empfangs- und Sendemechanismus implementiert. Besonderes Augenmerk wurde auf Fehlerszenarien wie verlorene Nachrichten und falsche Checksummen gelegt. Ein Logging-System protokolliert alle Nachrichten und Fehler für spätere Analyse.",
    projectCANLesson1: "Strukturierte Nachrichtenformate erleichtern Debugging und Wartung.",
    projectCANLesson2: "Logging ist unverzichtbar für die Analyse von Kommunikationsproblemen.",
    
    // Impressum
    impressumTitle: "Impressum",
    
    // Datenschutz
    datenschutzTitle: "Datenschutz"
  },
  
  en: {
    // Navigation
    navHome: "Home",
    navProjects: "Projects",
    navCV: "CV",
    navContact: "Contact",
    navLinkedIn: "LinkedIn",
    
    // Toggle Buttons
    darkModeLight: "🌙 Dark Mode",
    darkModeDark: "🌞 Light Mode",
    languageDE: "🇬🇧 English",
    languageEN: "🇩🇪 Deutsch",
    
    // Hero
    heroGreeting: "👋 Hi, I'm",
    heroSubtitle: "🎓 Applied Computer Science Student at HTWG Konstanz",
    heroFocus: "Focus: Embedded Systems",
    heroTagline: "I'm interested in low-level software, reliable systems, and device communication. Here I showcase projects and skills I've developed during my studies and personal work.",
    
    // About
    aboutTitle: "🧩 Profile",
    aboutItem1: "Embedded development with focus on C and C++",
    aboutItem2: "Fundamentals of digital systems and microprocessor technology",
    aboutItem3: "Sensors and peripherals, interrupts, timers, state machines",
    aboutItem4: "Embedded Linux fundamentals and everyday tooling",
    
    // Skills
    skillsTitle: "🛠️ Skills & Tools",
    skillsHint: "Note: I only list things I've used practically. Depth and details are shown in the projects.",
    
    // Projects
    projectsTitle: "📂 Projects",
    projectIoTTitle: "IoT Sensor Project",
    projectIoTSummary: "Capturing, processing, and transmitting sensor data. Focus on robust communication and clean structure.",
    projectIoTFeature1: "Measurements, status, basic error handling",
    projectIoTFeature2: "Microcontroller, sensors, C or C++",
    
    projectEmbeddedTitle: "Embedded Systems Project",
    projectEmbeddedSummary: "Hardware-oriented application with well-defined timing. Focus on interrupts, timers, and state machines.",
    projectEmbeddedFeature1: "Real-time behavior and debugging",
    projectEmbeddedFeature2: "C, toolchain, Git",
    
    projectCANTitle: "CAN Bus Communication",
    projectCANSummary: "Capturing temperature data and exchanging between nodes. Focus on message format and traceable logging.",
    projectCANFeature1: "Protocol, payload, error scenarios",
    projectCANFeature2: "Embedded C, interfaces, debugging",
    
    // Footer
    footerContact: "📫 Contact",
    footerLinkedIn: "💼 LinkedIn",
    footerImpressum: "Legal Notice",
    footerDatenschutz: "Privacy",
    
    // Contact Page
    contactTitle: "📫 Get in Touch",
    contactIntro: "Feel free to send me a message or use the contact form. I'm looking forward to hearing from you.",
    contactEmail: "Email",
    contactName: "Name",
    contactNamePlaceholder: "Your Name",
    contactEmailPlaceholder: "Your Email",
    contactMessage: "Message",
    contactMessagePlaceholder: "Your Message",
    contactSubmit: "📨 Send Message",
    contactSending: "⏳ Sending...",
    contactError: "❌ Error sending message. Please try again later or email me directly.",
    contactValidation: "Please check your inputs and fill all required fields.",
    contactBackHome: "🔙 Back to Home",
    
    // Thank You Page
    thankYouTitle: "✅ Thank You for Your Message",
    thankYouMessage: "I've received your message and will get back to you as soon as possible.",
    thankYouHome: "🏠 Back to Home",
    thankYouContact: "📫 Send Another Message",
    thankYouLinkedIn: "💼 LinkedIn",
    
    // CV Page
    cvTitle: "📄 Curriculum Vitae",
    cvEducationTitle: "🎓 Education",
    cvEducationDegree: "Bachelor of Science, Applied Computer Science",
    cvEducationSchool: "HTWG Konstanz",
    cvEducationFocus: "Focus: Embedded Systems",
    cvExperienceTitle: "💼 Experience",
    cvExperiencePlaceholder: "Internship and professional experience (placeholder for your content)",
    cvExperiencePreview: "Internship and professional experience",
    cvExperienceDescription: "Here you can add your internship, working student positions, or other professional experiences. Briefly describe your tasks, technologies used, and what you learned.",
    cvEducationDescription: "I study Applied Computer Science at HTWG Konstanz with a focus on Embedded Systems. During my studies, I work with low-level programming, microprocessor technology, digital systems, and Embedded Linux.",
    cvSkillsTitle: "🛠️ Technical Skills",
    cvDownload: "📥 Download CV as PDF",
    cvContactBtn: "📫 Get in Touch",
    cvPreviewTitle: "📄 Curriculum Vitae",
    cvViewFull: "📄 View Full CV",
    
    // Project Detail
    projectGoalTitle: "🎯 Goal",
    projectContributionTitle: "🔧 My Contribution",
    projectTechTitle: "💻 Tech Stack",
    projectImplementationTitle: "⚙️ Implementation",
    projectScreenshotsTitle: "📸 Screenshots",
    projectLessonsTitle: "📚 Lessons Learned",
    projectLinksTitle: "🔗 Links",
    projectBackToProjects: "← Back to Projects",
    projectContactCTA: "📫 Contact",
    projectRepo: "GitHub Repository",
    projectDemo: "Live Demo",
    
    // IoT Project Details
    projectIoTGoal: "The project deals with capturing sensor data, processing, and transmission. The focus is on robust communication and clean, maintainable code structure. The system should reliably capture measurements and provide status information, even in simple error scenarios.",
    projectIoTContrib1: "Implementation of sensor interface and data acquisition",
    projectIoTContrib2: "Development of a protocol for structured data transmission",
    projectIoTContrib3: "Error handling for sensor failures and communication errors",
    projectIoTImplementation: "Implementation was done in several steps. First, the sensor was connected and data acquisition was implemented. Then a simple protocol was defined to transmit data in a structured way. Error handling includes timeouts, checksums, and defensive programming. The code was built modularly to ensure maintainability and extensibility.",
    projectIoTLesson1: "Defensive programming pays off in low-level development.",
    projectIoTLesson2: "Structured error handling significantly facilitates debugging.",
    
    // Embedded Project Details
    projectEmbeddedGoal: "Development of a hardware-oriented application with precise timing. The project uses interrupts, timers, and a state machine to achieve real-time behavior. The focus is on comprehensible structure and systematic debugging.",
    projectEmbeddedContrib1: "Design and implementation of an event-driven state machine",
    projectEmbeddedContrib2: "Configuration of interrupts and hardware timers",
    projectEmbeddedContrib3: "Systematic debugging with oscilloscope and log outputs",
    projectEmbeddedImplementation: "Implementation began with defining the state machine and required events. Then hardware timers were configured and interrupt handlers implemented. Special attention was paid to minimal interrupt runtimes and safe data transfer between interrupt and main context. Debugging was done through targeted log outputs and oscilloscope measurements.",
    projectEmbeddedLesson1: "Clear separation between interrupt and main context is essential.",
    projectEmbeddedLesson2: "State machines make complex processes comprehensible and testable.",
    
    // CAN Project Details
    projectCANGoal: "The project deals with capturing temperature data and exchanging it between multiple nodes via a CAN bus. The focus is on structured message format, traceable logging, and safe error handling for communication problems.",
    projectCANContrib1: "Definition of a structured message format for sensor data",
    projectCANContrib2: "Implementation of CAN interface and error handling",
    projectCANContrib3: "Logging mechanism for traceability of messages and errors",
    projectCANImplementation: "Implementation began with defining the message format. A simple protocol was defined containing sensor ID, temperature value, and checksum. The CAN interface was configured and a receive and transmit mechanism implemented. Special attention was paid to error scenarios like lost messages and incorrect checksums. A logging system records all messages and errors for later analysis.",
    projectCANLesson1: "Structured message formats facilitate debugging and maintenance.",
    projectCANLesson2: "Logging is indispensable for analyzing communication problems.",
    
    // Impressum
    impressumTitle: "Legal Notice",
    
    // Datenschutz
    datenschutzTitle: "Privacy Policy"
  }
};

// ================================================================================
// Dark Mode
// ============================================
function initDarkMode() {
  const toggleButton = document.getElementById("darkModeToggle");
  if (!toggleButton) return;
  
  // Load saved preference
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  if (savedDarkMode) {
    document.body.classList.add("dark");
  }
  
  updateDarkModeButton();
  
  // Toggle on click
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    updateDarkModeButton();
  });
}

function updateDarkModeButton() {
  const toggleButton = document.getElementById("darkModeToggle");
  if (!toggleButton) return;
  
  const isDark = document.body.classList.contains("dark");
  const currentLang = getCurrentLanguage();
  
  toggleButton.textContent = isDark 
    ? translations[currentLang].darkModeDark 
    : translations[currentLang].darkModeLight;
}

// ============================================
// Language Switcher
// ============================================
function getCurrentLanguage() {
  return localStorage.getItem("language") || "de";
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  updatePageLanguage();
  updateLanguageButton();
  updateDarkModeButton();
}

function initLanguageSwitcher() {
  const langButton = document.getElementById("languageToggle");
  if (!langButton) return;
  
  // Load saved preference
  const savedLang = getCurrentLanguage();
  updatePageLanguage();
  updateLanguageButton();
  
  // Toggle on click
  langButton.addEventListener("click", () => {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === "de" ? "en" : "de";
    setLanguage(newLang);
  });
}

function updateLanguageButton() {
  const langButton = document.getElementById("languageToggle");
  if (!langButton) return;
  
  const currentLang = getCurrentLanguage();
  langButton.textContent = currentLang === "de" 
    ? translations.de.languageDE 
    : translations.en.languageEN;
}

function updatePageLanguage() {
  const lang = getCurrentLanguage();
  const t = translations[lang];
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        if (element.placeholder !== undefined) {
          element.placeholder = t[key];
        }
      } else {
        element.textContent = t[key];
      }
    }
  });
  
  // Update placeholders separately
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      element.placeholder = t[key];
    }
  });
}

// ============================================
// Navigation Active State
// ============================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    
    if (href === currentPage || 
        (currentPage === "" && href === "index.html") ||
        (currentPage === "index.html" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initLanguageSwitcher();
  setActiveNavLink();
  
  // Initialize AOS if available
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
});
