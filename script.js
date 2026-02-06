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
    darkModeLight: "Dark Mode",
    darkModeDark: "Light Mode",
    languageDE: "English",
    languageEN: "Deutsch",

    // Hero
    heroGreeting: "Hi, ich bin",
    heroSubtitle: "Student der Angewandten Informatik an der HTWG Konstanz",
    heroFocus: "Schwerpunkt: Embedded Systems",
    heroTagline:
      "Ich interessiere mich für hardwarenahe Software, zuverlässige Systeme und Kommunikation zwischen Geräten. Hier zeige ich Projekte und Skills, die ich im Studium und in eigenen Arbeiten aufgebaut habe.",

    // About
    aboutTitle: "Kurzprofil",
    aboutItem1: "Embedded Entwicklung mit Fokus auf C und C++",
    aboutItem2: "Grundlagen digitaler Systeme und Mikroprozessortechnik",
    aboutItem3: "Sensorik und Peripherie, Interrupts, Timer, Zustandsmaschinen",
    aboutItem4: "Embedded Linux Grundlagen und Tooling im Alltag",

    // Skills
    skillsTitle: "Skills & Tools",
    skillsHint:
      "Hinweis: Ich liste hier nur Dinge, die ich praktisch genutzt habe. Tiefe und Details zeige ich in den Projekten.",

    // Projects
    projectsTitle: "Projekte",
    projectIoTTitle: "IoT Sensor Projekt",
    projectIoTSummary:
      "Sensorwerte erfassen, verarbeiten und übertragen. Fokus auf robuste Kommunikation und saubere Struktur.",
    projectIoTFeature1: "Messwerte, Status, einfache Fehlerfälle",
    projectIoTFeature2: "Mikrocontroller, Sensorik, C oder C++",

    projectEmbeddedTitle: "Embedded Systems Projekt",
    projectEmbeddedSummary:
      "Hardwarenahe Anwendung mit klar definiertem Timing. Fokus auf Interrupts, Timer und Zustandsmaschine.",
    projectEmbeddedFeature1: "Echtzeitnahes Verhalten und Debugging",
    projectEmbeddedFeature2: "C, Toolchain, Git",

    projectCANTitle: "CAN Bus Kommunikation",
    projectCANSummary:
      "Temperaturdaten erfassen und zwischen Knoten austauschen. Fokus auf Nachrichtenformat und nachvollziehbares Logging.",
    projectCANFeature1: "Protokoll, Payload, Fehlerszenarien",
    projectCANFeature2: "Embedded C, Schnittstellen, Debugging",

    // Footer
    footerContact: "Kontakt",
    footerLinkedIn: "LinkedIn",
    footerImpressum: "Impressum",
    footerDatenschutz: "Datenschutz",

    // Contact Page
    contactTitle: "Kontakt aufnehmen",
    contactIntro:
      "Schreib mir gern eine Nachricht oder nutze das Kontaktformular. Ich freue mich auf deine Nachricht.",
    contactEmail: "E-Mail",
    contactName: "Name",
    contactNamePlaceholder: "Dein Name",
    contactEmailPlaceholder: "Deine E-Mail",
    contactMessage: "Nachricht",
    contactMessagePlaceholder: "Deine Nachricht",
    contactSubmit: "Nachricht senden",
    contactSending: "Wird gesendet...",
    contactError:
      "Fehler beim Senden. Bitte versuche es später erneut oder schreibe mir direkt per E-Mail.",
    contactValidation:
      "Bitte prüfe deine Eingaben und fülle alle Pflichtfelder aus.",
    contactBackHome: "Zurück zur Startseite",

    // Thank You Page
    thankYouTitle: "Danke für deine Nachricht",
    thankYouMessage:
      "Ich habe deine Nachricht erhalten und melde mich so bald wie möglich.",
    thankYouHome: "Zur Startseite",
    thankYouContact: "Noch eine Nachricht",
    thankYouLinkedIn: "LinkedIn",

    // CV Page
    cvTitle: "Lebenslauf",
    cvEducationTitle: "Ausbildung",
    cvEducationDegree: "Bachelor of Science, Angewandte Informatik",
    cvEducationDate: "10/2022 - Heute",
    cvEducationSchool: "HTWG Konstanz",
    cvEducationFocus: "Schwerpunkt: Embedded Systems",
    cvEducationDescription:
      "Studium der Angewandten Informatik mit Fokus auf Embedded Systems. Relevante Module: Mikroprozessortechnik, Digitale Systeme, Embedded Linux, Softwareentwicklung in C/C++, Echtzeitsysteme und Kommunikationsprotokolle.",
    cvEducationHighlight1: "Hardwarenahe Programmierung in C und C++",
    cvEducationHighlight2:
      "Mikrocontroller-Entwicklung und Peripherie-Anbindung",
    cvEducationHighlight3:
      "Entwicklung von Embedded-Anwendungen mit Fokus auf Zuverlässigkeit",

    cvExperienceTitle: "Praxiserfahrung",
    cvExperience1Title: "Werkstudent Embedded Software",
    cvExperience1Date: "04/2024 - Heute",
    cvExperience1Company: "Technologie-Unternehmen, Konstanz",
    cvExperience1Task1:
      "Entwicklung von Firmware-Komponenten für Mikrocontroller-basierte Systeme",
    cvExperience1Task2:
      "Implementierung von Kommunikationsprotokollen (CAN, UART, SPI)",
    cvExperience1Task3:
      "Debugging und Testing mit Hardware-Debuggern und Logikanalysatoren",
    cvExperience1Task4:
      "Code-Reviews und Dokumentation nach Entwicklungsstandards",

    cvExperience2Title: "Praxissemester Embedded Entwicklung",
    cvExperience2Date: "09/2024 - 02/2025",
    cvExperience2Company: "Industrieunternehmen, Süddeutschland",
    cvExperience2Task1:
      "Entwicklung einer Steuerungssoftware für ein Embedded-System",
    cvExperience2Task2:
      "Anbindung von Sensoren und Aktuatoren über verschiedene Schnittstellen",
    cvExperience2Task3:
      "Implementierung von Fehlerbehandlung und Diagnosefunktionen",
    cvExperience2Task4:
      "Erstellung technischer Dokumentation und Testprotokolle",

    cvExperiencePlaceholder:
      "Praxissemester und berufliche Stationen (Platzhalter für eigene Inhalte)",
    cvExperiencePreview: "Praxissemester und berufliche Stationen",
    cvExperienceDescription:
      "Hier kannst du dein Praxissemester, Werkstudententätigkeiten oder andere berufliche Erfahrungen eintragen. Beschreibe kurz deine Aufgaben, verwendete Technologien und was du dabei gelernt hast.",

    cvSkillsTitle: "Technische Skills",
    cvSkillsProgramming: "Programmiersprachen",
    cvSkillsEmbedded: "Embedded Systems",
    cvSkillsProtocols: "Kommunikationsprotokolle",
    cvSkillsTools: "Tools & Entwicklungsumgebung",

    cvLanguagesTitle: "Sprachen",
    cvLanguageGerman: "Deutsch",
    cvLanguageGermanLevel: "Muttersprache",
    cvLanguageEnglish: "Englisch",
    cvLanguageEnglishLevel: "Fließend (C1)",

    cvDownload: "CV als PDF herunterladen",
    cvContactBtn: "Kontakt aufnehmen",
    cvPreviewTitle: "Lebenslauf",
    cvViewFull: "Vollständigen Lebenslauf ansehen",

    // Project Detail
    projectGoalTitle: "Ziel",
    projectContributionTitle: "Mein Beitrag",
    projectTechTitle: "Tech Stack",
    projectImplementationTitle: "Umsetzung",
    projectScreenshotsTitle: "Screenshots",
    projectLessonsTitle: "Lessons Learned",
    projectLinksTitle: "Links",
    projectBackToProjects: "← Zurück zu Projekten",
    projectContactCTA: "Kontakt",
    projectRepo: "GitHub Repository",
    projectDemo: "Live Demo",

    // IoT Project Details
    projectIoTGoal:
      "Das Projekt befasst sich mit der Erfassung von Sensordaten, ihrer Verarbeitung und Übertragung. Der Fokus liegt auf einer robusten Kommunikation und einer sauberen, wartbaren Code-Struktur. Das System soll Messwerte zuverlässig erfassen und Status-Informationen bereitstellen, auch bei einfachen Fehlerszenarien.",
    projectIoTContrib1: "Implementierung der Sensor-Schnittstelle und Datenerfassung",
    projectIoTContrib2:
      "Entwicklung eines Protokolls zur strukturierten Datenübertragung",
    projectIoTContrib3:
      "Fehlerbehandlung bei Sensor-Ausfällen und Kommunikationsfehlern",
    projectIoTImplementation:
      "Die Umsetzung erfolgte in mehreren Schritten. Zunächst wurde der Sensor angebunden und die Datenerfassung implementiert. Anschließend wurde ein einfaches Protokoll definiert, um die Daten strukturiert zu übertragen. Die Fehlerbehandlung umfasst Timeouts, Checksummen und defensive Programmierung. Der Code wurde modular aufgebaut, um Wartbarkeit und Erweiterbarkeit zu gewährleisten.",
    projectIoTLesson1:
      "Defensive Programmierung bei hardwarenaher Entwicklung zahlt sich aus.",
    projectIoTLesson2:
      "Strukturierte Fehlerbehandlung erleichtert das Debugging erheblich.",

    // Embedded Project Details
    projectEmbeddedGoal:
      "Entwicklung einer hardwarenahen Anwendung mit präzisem Timing. Das Projekt soll Interrupts, Timer und eine Zustandsmaschine nutzen, um echtzeitnahes Verhalten zu erreichen. Der Fokus liegt auf nachvollziehbarer Struktur und systematischem Debugging.",
    projectEmbeddedContrib1:
      "Design und Implementierung einer ereignisgesteuerten Zustandsmaschine",
    projectEmbeddedContrib2: "Konfiguration von Interrupts und Hardware-Timern",
    projectEmbeddedContrib3:
      "Systematisches Debugging mit Oszilloskop und Logausgaben",
    projectEmbeddedImplementation:
      "Die Umsetzung begann mit der Definition der Zustandsmaschine und der benötigten Events. Anschließend wurden die Hardware-Timer konfiguriert und Interrupt-Handler implementiert. Besonderes Augenmerk wurde auf minimale Interrupt-Laufzeiten und sichere Datenübergabe zwischen Interrupt- und Hauptkontext gelegt. Das Debugging erfolgte durch gezielte Logausgaben und Messungen mit dem Oszilloskop.",
    projectEmbeddedLesson1:
      "Klare Trennung zwischen Interrupt- und Hauptkontext ist essentiell.",
    projectEmbeddedLesson2:
      "Zustandsmaschinen machen komplexe Abläufe nachvollziehbar und testbar.",

    // CAN Project Details
    projectCANGoal:
      "Das Projekt beschäftigt sich mit der Erfassung von Temperaturdaten und deren Austausch zwischen mehreren Knoten über einen CAN-Bus. Der Fokus liegt auf einem strukturierten Nachrichtenformat, nachvollziehbarem Logging und sicherer Fehlerbehandlung bei Kommunikationsproblemen.",
    projectCANContrib1:
      "Definition eines strukturierten Nachrichtenformats für Sensordaten",
    projectCANContrib2: "Implementierung der CAN-Schnittstelle und Fehlerbehandlung",
    projectCANContrib3:
      "Logging-Mechanismus zur Nachvollziehbarkeit von Nachrichten und Fehlern",
    projectCANImplementation:
      "Die Umsetzung begann mit der Definition des Nachrichtenformats. Es wurde ein einfaches Protokoll definiert, das Sensor-ID, Temperaturwert und Checksumme enthält. Die CAN-Schnittstelle wurde konfiguriert und ein Empfangs- und Sendemechanismus implementiert. Besonderes Augenmerk wurde auf Fehlerszenarien wie verlorene Nachrichten und falsche Checksummen gelegt. Ein Logging-System protokolliert alle Nachrichten und Fehler für spätere Analyse.",
    projectCANLesson1:
      "Strukturierte Nachrichtenformate erleichtern Debugging und Wartung.",
    projectCANLesson2:
      "Logging ist unverzichtbar für die Analyse von Kommunikationsproblemen.",

    // Impressum (existing)
    impressumTitle: "Impressum",

    // Datenschutz (existing)
    datenschutzTitle: "Datenschutz",

    // New: Shared legal buttons
    legalBackHome: "← Zurück zur Startseite",

    // New: Impressum extra keys
    impressumAddressPlaceholder: "[Adresse Platzhalter]",
    impressumCityPlaceholder: "[PLZ Ort Platzhalter]",
    impressumDisclaimerTitle: "Haftungsausschluss",
    impressumContentLiabilityTitle: "Haftung für Inhalte",
    impressumContentLiabilityText:
      "Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
    impressumLinksLiabilityTitle: "Haftung für Links",
    impressumLinksLiabilityText:
      "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    impressumCopyrightTitle: "Urheberrecht",
    impressumCopyrightText:
      "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    impressumExternalServicesTitle: "Externe Dienste",
    impressumExternalServicesIntro: "Diese Website nutzt folgende externe Dienste:",
    impressumServiceFormSubmit:
      "Kontaktformular-Service zur Übermittlung von Nachrichten",
    impressumServiceAOS: "JavaScript-Bibliothek für Scroll-Animationen",
    impressumServiceGitHubPages: "Hosting-Plattform für statische Websites",

    // New: Datenschutz page extra keys
    privacyIntroTitle: "Datenschutzerklärung",
    privacyIntroText:
      "Der Schutz deiner Daten ist mir wichtig. Diese Datenschutzerklärung informiert dich über die Verarbeitung personenbezogener Daten bei der Nutzung dieser Website.",
    privacyControllerTitle: "Verantwortlicher",
    privacyHostingTitle: "Hosting",
    privacyHostingText:
      "Diese Website wird auf GitHub Pages gehostet. GitHub kann technische Logdaten wie IP-Adressen, Browser-Typ und Zugriffszeiten erfassen. Weitere Informationen findest du in der Datenschutzerklärung von GitHub.",
    privacyGithubLinkText: "Datenschutzerklärung von GitHub",
    privacyContactFormTitle: "Kontaktformular",
    privacyContactFormText:
      "Das Kontaktformular nutzt den Dienst FormSubmit.co. Wenn du das Formular verwendest, werden folgende Daten übermittelt:",
    privacyContactFormItem1: "Name",
    privacyContactFormItem2: "E-Mail-Adresse",
    privacyContactFormItem3: "Nachrichteninhalt",
    privacyContactFormMoreText:
      "Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet. FormSubmit.co leitet die Nachricht per E-Mail an meine Adresse weiter. Weitere Informationen findest du in der Datenschutzerklärung von FormSubmit.",
    privacyFormSubmitLinkText: "Datenschutzerklärung von FormSubmit",
    privacyExternalResourcesTitle: "Externe Ressourcen",
    privacyExternalResourcesText:
      "Diese Website nutzt externe Ressourcen von Content Delivery Networks (CDNs). Beim Laden dieser Ressourcen kann deine IP-Adresse an den jeweiligen Anbieter übermittelt werden.",
    privacyExternalResourcesItem1: "AOS (Animate On Scroll) Bibliothek",
    privacyLegalBasisText:
      "Die Nutzung dieser Ressourcen erfolgt auf Grundlage einer Interessenabwägung gemäß Art. 6 Abs. 1 lit. f DSGVO, um eine optimale Bereitstellung der Website zu gewährleisten.",
    privacyLocalStorageTitle: "Lokale Speicherung (LocalStorage)",
    privacyLocalStorageText:
      "Diese Website nutzt den lokalen Speicher deines Browsers (LocalStorage) zur Speicherung deiner Einstellungen. Diese Daten verbleiben auf deinem Gerät und werden nicht an Server übermittelt.",
    privacyLocalStorageItem1Title: "Dark Mode Einstellung",
    privacyLocalStorageItem1Text: "Speichert deine Präferenz für den Dark Mode",
    privacyLocalStorageItem2Title: "Spracheinstellung",
    privacyLocalStorageItem2Text: "Speichert deine bevorzugte Sprache",
    privacyLocalStorageDeleteText:
      "Du kannst diese Daten jederzeit über die Browser-Einstellungen löschen.",
    privacyExternalLinksTitle: "Externe Links",
    privacyExternalLinksText:
      "Diese Website enthält Links zu externen Websites. Für die Inhalte und Datenschutzpraktiken dieser externen Seiten ist der jeweilige Anbieter verantwortlich.",
    privacyRightsTitle: "Deine Rechte",
    privacyRightsText:
      "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch bezüglich deiner personenbezogenen Daten. Bei Fragen zum Datenschutz kannst du dich jederzeit an mich wenden.",
    privacyChangesTitle: "Änderungen der Datenschutzerklärung",
    privacyChangesText:
      "Diese Datenschutzerklärung kann gelegentlich angepasst werden, um Änderungen der Website oder gesetzlicher Anforderungen zu berücksichtigen. Die aktuelle Version findest du stets auf dieser Seite.",
    privacyStatusDate: "Stand: Februar 2026"
  },

  en: {
    // Navigation
    navHome: "Home",
    navProjects: "Projects",
    navCV: "CV",
    navContact: "Contact",
    navLinkedIn: "LinkedIn",

    // Toggle Buttons
    darkModeLight: "Dark Mode",
    darkModeDark: "Light Mode",
    languageDE: "English",
    languageEN: "Deutsch",

    // Hero
    heroGreeting: "Hi, I'm",
    heroSubtitle: "Applied Computer Science Student at HTWG Konstanz",
    heroFocus: "Focus: Embedded Systems",
    heroTagline:
      "I'm interested in low-level software, reliable systems, and device communication. Here I showcase projects and skills I've developed during my studies and personal work.",

    // About
    aboutTitle: "Profile",
    aboutItem1: "Embedded development with focus on C and C++",
    aboutItem2: "Fundamentals of digital systems and microprocessor technology",
    aboutItem3: "Sensors and peripherals, interrupts, timers, state machines",
    aboutItem4: "Embedded Linux fundamentals and everyday tooling",

    // Skills
    skillsTitle: "Skills & Tools",
    skillsHint:
      "Note: I only list things I've used practically. Depth and details are shown in the projects.",

    // Projects
    projectsTitle: "Projects",
    projectIoTTitle: "IoT Sensor Project",
    projectIoTSummary:
      "Capturing, processing, and transmitting sensor data. Focus on robust communication and clean structure.",
    projectIoTFeature1: "Measurements, status, basic error handling",
    projectIoTFeature2: "Microcontroller, sensors, C or C++",

    projectEmbeddedTitle: "Embedded Systems Project",
    projectEmbeddedSummary:
      "Hardware-oriented application with well-defined timing. Focus on interrupts, timers, and state machines.",
    projectEmbeddedFeature1: "Real-time behavior and debugging",
    projectEmbeddedFeature2: "C, toolchain, Git",

    projectCANTitle: "CAN Bus Communication",
    projectCANSummary:
      "Capturing temperature data and exchanging between nodes. Focus on message format and traceable logging.",
    projectCANFeature1: "Protocol, payload, error scenarios",
    projectCANFeature2: "Embedded C, interfaces, debugging",

    // Footer
    footerContact: "Contact",
    footerLinkedIn: "LinkedIn",
    footerImpressum: "Legal Notice",
    footerDatenschutz: "Privacy",

    // Contact Page
    contactTitle: "Get in Touch",
    contactIntro:
      "Feel free to send me a message or use the contact form. I'm looking forward to hearing from you.",
    contactEmail: "Email",
    contactName: "Name",
    contactNamePlaceholder: "Your Name",
    contactEmailPlaceholder: "Your Email",
    contactMessage: "Message",
    contactMessagePlaceholder: "Your Message",
    contactSubmit: "Send Message",
    contactSending: "Sending...",
    contactError:
      "Error sending message. Please try again later or email me directly.",
    contactValidation:
      "Please check your inputs and fill all required fields.",
    contactBackHome: "Back to Home",

    // Thank You Page
    thankYouTitle: "Thank You for Your Message",
    thankYouMessage:
      "I've received your message and will get back to you as soon as possible.",
    thankYouHome: "Back to Home",
    thankYouContact: "Send Another Message",
    thankYouLinkedIn: "LinkedIn",

    // CV Page
    cvTitle: "Curriculum Vitae",
    cvEducationTitle: "Education",
    cvEducationDegree: "Bachelor of Science, Applied Computer Science",
    cvEducationDate: "10/2022 - Present",
    cvEducationSchool: "HTWG Konstanz",
    cvEducationFocus: "Focus: Embedded Systems",
    cvEducationDescription:
      "Studies in Applied Computer Science with focus on Embedded Systems. Relevant courses: Microprocessor Technology, Digital Systems, Embedded Linux, Software Development in C/C++, Real-Time Systems, and Communication Protocols.",
    cvEducationHighlight1: "Low-level programming in C and C++",
    cvEducationHighlight2:
      "Microcontroller development and peripheral integration",
    cvEducationHighlight3:
      "Development of embedded applications with focus on reliability",

    cvExperienceTitle: "Experience",
    cvExperience1Title: "Working Student Embedded Software",
    cvExperience1Date: "04/2024 - Present",
    cvExperience1Company: "Technology Company, Konstanz",
    cvExperience1Task1:
      "Development of firmware components for microcontroller-based systems",
    cvExperience1Task2:
      "Implementation of communication protocols (CAN, UART, SPI)",
    cvExperience1Task3:
      "Debugging and testing with hardware debuggers and logic analyzers",
    cvExperience1Task4:
      "Code reviews and documentation according to development standards",

    cvExperience2Title: "Internship Embedded Development",
    cvExperience2Date: "09/2024 - 02/2025",
    cvExperience2Company: "Industrial Company, Southern Germany",
    cvExperience2Task1:
      "Development of control software for an embedded system",
    cvExperience2Task2:
      "Integration of sensors and actuators via various interfaces",
    cvExperience2Task3:
      "Implementation of error handling and diagnostic functions",
    cvExperience2Task4:
      "Creation of technical documentation and test protocols",

    cvExperiencePlaceholder:
      "Internship and professional experience (placeholder for your content)",
    cvExperiencePreview: "Internship and professional experience",
    cvExperienceDescription:
      "Here you can add your internship, working student positions, or other professional experiences. Briefly describe your tasks, technologies used, and what you learned.",

    cvSkillsTitle: "Technical Skills",
    cvSkillsProgramming: "Programming Languages",
    cvSkillsEmbedded: "Embedded Systems",
    cvSkillsProtocols: "Communication Protocols",
    cvSkillsTools: "Tools & Development Environment",

    cvLanguagesTitle: "Languages",
    cvLanguageGerman: "German",
    cvLanguageGermanLevel: "Native",
    cvLanguageEnglish: "English",
    cvLanguageEnglishLevel: "Fluent (C1)",

    cvDownload: "Download CV as PDF",
    cvContactBtn: "Get in Touch",
    cvPreviewTitle: "Curriculum Vitae",
    cvViewFull: "View Full CV",

    // Project Detail
    projectGoalTitle: "Goal",
    projectContributionTitle: "My Contribution",
    projectTechTitle: "Tech Stack",
    projectImplementationTitle: "Implementation",
    projectScreenshotsTitle: "Screenshots",
    projectLessonsTitle: "Lessons Learned",
    projectLinksTitle: "Links",
    projectBackToProjects: "← Back to Projects",
    projectContactCTA: "Contact",
    projectRepo: "GitHub Repository",
    projectDemo: "Live Demo",

    // IoT Project Details
    projectIoTGoal:
      "The project deals with capturing sensor data, processing, and transmission. The focus is on robust communication and clean, maintainable code structure. The system should reliably capture measurements and provide status information, even in simple error scenarios.",
    projectIoTContrib1: "Implementation of sensor interface and data acquisition",
    projectIoTContrib2:
      "Development of a protocol for structured data transmission",
    projectIoTContrib3:
      "Error handling for sensor failures and communication errors",
    projectIoTImplementation:
      "Implementation was done in several steps. First, the sensor was connected and data acquisition was implemented. Then a simple protocol was defined to transmit data in a structured way. Error handling includes timeouts, checksums, and defensive programming. The code was built modularly to ensure maintainability and extensibility.",
    projectIoTLesson1:
      "Defensive programming pays off in low-level development.",
    projectIoTLesson2:
      "Structured error handling significantly facilitates debugging.",

    // Embedded Project Details
    projectEmbeddedGoal:
      "Development of a hardware-oriented application with precise timing. The project uses interrupts, timers, and a state machine to achieve real-time behavior. The focus is on comprehensible structure and systematic debugging.",
    projectEmbeddedContrib1:
      "Design and implementation of an event-driven state machine",
    projectEmbeddedContrib2:
      "Configuration of interrupts and hardware timers",
    projectEmbeddedContrib3:
      "Systematic debugging with oscilloscope and log outputs",
    projectEmbeddedImplementation:
      "Implementation began with defining the state machine and required events. Then hardware timers were configured and interrupt handlers implemented. Special attention was paid to minimal interrupt runtimes and safe data transfer between interrupt and main context. Debugging was done through targeted log outputs and oscilloscope measurements.",
    projectEmbeddedLesson1:
      "Clear separation between interrupt and main context is essential.",
    projectEmbeddedLesson2:
      "State machines make complex processes comprehensible and testable.",

    // CAN Project Details
    projectCANGoal:
      "The project deals with capturing temperature data and exchanging it between multiple nodes via a CAN bus. The focus is on structured message format, traceable logging, and safe error handling for communication problems.",
    projectCANContrib1:
      "Definition of a structured message format for sensor data",
    projectCANContrib2: "Implementation of CAN interface and error handling",
    projectCANContrib3:
      "Logging mechanism for traceability of messages and errors",
    projectCANImplementation:
      "Implementation began with defining the message format. A simple protocol was defined containing sensor ID, temperature value, and checksum. The CAN interface was configured and a receive and transmit mechanism implemented. Special attention was paid to error scenarios like lost messages and incorrect checksums. A logging system records all messages and errors for later analysis.",
    projectCANLesson1:
      "Structured message formats facilitate debugging and maintenance.",
    projectCANLesson2:
      "Logging is indispensable for analyzing communication problems.",

    // Impressum (existing)
    impressumTitle: "Legal Notice",

    // Datenschutz (existing)
    datenschutzTitle: "Privacy Policy",

    // New: Shared legal buttons
    legalBackHome: "← Back to Home",

    // New: Impressum extra keys
    impressumAddressPlaceholder: "[Address placeholder]",
    impressumCityPlaceholder: "[ZIP City placeholder]",
    impressumDisclaimerTitle: "Disclaimer",
    impressumContentLiabilityTitle: "Liability for content",
    impressumContentLiabilityText:
      "The contents of these pages were created with great care. However, I cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with general laws.",
    impressumLinksLiabilityTitle: "Liability for links",
    impressumLinksLiabilityText:
      "This website contains links to external third-party websites. I have no influence on their content. Therefore, I cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.",
    impressumCopyrightTitle: "Copyright",
    impressumCopyrightText:
      "The content and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of exploitation beyond the limits of copyright law require the written consent of the respective author or creator.",
    impressumExternalServicesTitle: "External services",
    impressumExternalServicesIntro:
      "This website uses the following external services:",
    impressumServiceFormSubmit:
      "Contact form service for message delivery",
    impressumServiceAOS: "JavaScript library for scroll animations",
    impressumServiceGitHubPages: "Hosting platform for static websites",

    // New: Datenschutz page extra keys
    privacyIntroTitle: "Privacy policy",
    privacyIntroText:
      "Protecting your data is important to me. This privacy policy informs you about the processing of personal data when using this website.",
    privacyControllerTitle: "Controller",
    privacyHostingTitle: "Hosting",
    privacyHostingText:
      "This website is hosted on GitHub Pages. GitHub may collect technical log data such as IP addresses, browser type, and access times. For more information, see GitHub’s privacy statement.",
    privacyGithubLinkText: "GitHub privacy statement",
    privacyContactFormTitle: "Contact form",
    privacyContactFormText:
      "The contact form uses the service FormSubmit.co. When you use the form, the following data is transmitted:",
    privacyContactFormItem1: "Name",
    privacyContactFormItem2: "Email address",
    privacyContactFormItem3: "Message content",
    privacyContactFormMoreText:
      "This data is used exclusively to process your request. FormSubmit.co forwards the message to my email address. For more information, see FormSubmit’s privacy policy.",
    privacyFormSubmitLinkText: "FormSubmit privacy policy",
    privacyExternalResourcesTitle: "External resources",
    privacyExternalResourcesText:
      "This website uses external resources from content delivery networks (CDNs). When these resources are loaded, your IP address may be transmitted to the respective provider.",
    privacyExternalResourcesItem1: "AOS (Animate On Scroll) library",
    privacyLegalBasisText:
      "These resources are used based on legitimate interests pursuant to Art. 6(1)(f) GDPR to ensure optimal delivery of the website.",
    privacyLocalStorageTitle: "Local storage (LocalStorage)",
    privacyLocalStorageText:
      "This website uses your browser’s local storage (LocalStorage) to store your settings. This data remains on your device and is not transmitted to servers.",
    privacyLocalStorageItem1Title: "Dark mode setting",
    privacyLocalStorageItem1Text: "Stores your dark mode preference",
    privacyLocalStorageItem2Title: "Language setting",
    privacyLocalStorageItem2Text: "Stores your preferred language",
    privacyLocalStorageDeleteText:
      "You can delete this data at any time in your browser settings.",
    privacyExternalLinksTitle: "External links",
    privacyExternalLinksText:
      "This website contains links to external websites. The respective providers are responsible for the content and privacy practices of those sites.",
    privacyRightsTitle: "Your rights",
    privacyRightsText:
      "You have the right to access, rectification, erasure, restriction of processing, data portability, and objection regarding your personal data. If you have questions about privacy, you can contact me at any time.",
    privacyChangesTitle: "Changes to this privacy policy",
    privacyChangesText:
      "This privacy policy may be updated occasionally to reflect changes to the website or legal requirements. The current version is always available on this page.",
    privacyStatusDate: "Status: February 2026"
  }
};


// ================================================================================
// Dark Mode
// ============================================
function initDarkMode() {
  const toggleButton = document.getElementById("darkModeToggle");
  if (!toggleButton) {
    updateMobileDarkModeButton();
    return;
  }

  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  if (savedDarkMode) document.body.classList.add("dark");

  updateDarkModeButton();

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", String(isDark));
    updateDarkModeButton();
  });
}

function updateDarkModeButton() {
  const toggleButton = document.getElementById("darkModeToggle");
  const isDark = document.body.classList.contains("dark");
  const currentLang = getCurrentLanguage();

  if (toggleButton) {
    toggleButton.textContent = isDark
      ? translations[currentLang].darkModeDark
      : translations[currentLang].darkModeLight;
  }

  updateMobileDarkModeButton();
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
  updateMobileLanguageButton();
  updateMobileDarkModeButton();
}

function initLanguageSwitcher() {
  const langButton = document.getElementById("languageToggle");

  const savedLang = getCurrentLanguage();
  updatePageLanguage();
  updateLanguageButton();
  updateMobileLanguageButton();

  if (!langButton) return;

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

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (!key || !t[key]) return;

    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      if (element.placeholder !== undefined) element.placeholder = t[key];
    } else {
      element.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (key && t[key]) element.placeholder = t[key];
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

    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "index.html" && href === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");

  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-links a");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");

  if (!hamburger || !mobileMenu) return;

  function setAria(open) {
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
  }

  function openMenu() {
    hamburger.classList.add("active");
    mobileMenu.classList.add("active");
    if (mobileOverlay) mobileOverlay.classList.add("active");
    document.body.classList.add("menu-open");
    setAria(true);
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    if (mobileOverlay) mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    setAria(false);
  }

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains("active");
    if (isOpen) closeMenu();
    else openMenu();
  }

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  mobileMenuLinks.forEach(link => link.addEventListener("click", closeMenu));

  if (mobileDarkToggle) {
    mobileDarkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("darkMode", String(isDark));
      updateDarkModeButton();
      updateMobileDarkModeButton();
    });
  }

  if (mobileLangToggle) {
    mobileLangToggle.addEventListener("click", () => {
      const currentLang = getCurrentLanguage();
      const newLang = currentLang === "de" ? "en" : "de";
      setLanguage(newLang);
      updateMobileLanguageButton();
    });
  }

  setAria(false);
  updateMobileDarkModeButton();
  updateMobileLanguageButton();
}

function updateMobileDarkModeButton() {
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  if (!mobileDarkToggle) return;

  const isDark = document.body.classList.contains("dark");
  const currentLang = getCurrentLanguage();

  mobileDarkToggle.textContent = isDark
    ? translations[currentLang].darkModeDark
    : translations[currentLang].darkModeLight;
}

function updateMobileLanguageButton() {
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  if (!mobileLangToggle) return;

  const currentLang = getCurrentLanguage();
  mobileLangToggle.textContent = currentLang === "de"
    ? translations.de.languageDE
    : translations.en.languageEN;
}

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initLanguageSwitcher();
  initMobileMenu();
  setActiveNavLink();

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
});
