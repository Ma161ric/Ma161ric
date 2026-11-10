// Portfolio Marcel Richter – Übersetzungen und Seitenlogik
// ============================================
// Translations
// ============================================
const translations = {
  de: {
    // Navigation
    navHome: "Portfolio",
    navCV: "Lebenslauf",
    navContact: "Kontakt",
    navLinkedIn: "LinkedIn",

    // Toggle Buttons
    darkModeLight: "Dark Mode",
    darkModeDark: "Light Mode",
    languageDE: "English",
    languageEN: "Deutsch",
    mobileMenuClose: "Schließen",

    // Hero
    heroGreeting: "Hi, ich bin",
    heroSubtitle: "Masterstudent der Informatik an der LMU München",
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

    // IoT Project (Automatic Light Controller)
    projectIoTTitle: "Automatic Light Controller",
    projectIoTSummary:
      "Automatische Lichtsteuerung basierend auf Umgebungshelligkeit. MQTT Telemetrie via HiveMQ, Auswertung und Visualisierung in Datacake.",
    projectIoTFeature1:
      "Helligkeit messen, Schwellwerte prüfen, Licht ein oder aus und Dimmen für Sunrise und Sunset",
    projectIoTFeature2:
      "MQTT Datenfluss: Arduino Nano sendet Payload an HiveMQ, Datacake decodiert und zeigt die Werte",

    projectMakeNowTitle: "DayFlow. GitHub Projekt",
    projectMakeNowSummary:
      "Open Source Projekt auf GitHub. Ein kleines Tool, das meinen Workflow automatisiert und wiederholbare Schritte vereinfacht.",
    projectMakeNowFeature1:
      "AI Extraktion und Dauer Schätzung über Groq API. Review und Confirm bleibt beim Nutzer",
    projectMakeNowFeature2:
      "Monorepo mit Core Package für Regeln, Scheduling Engine und Validierung. Tests mit Vitest",
    projectMakeNowFeature3:
      "Optional Firebase Auth und Firestore Sync. Security Headers, CSP und Firestore Rules",
    projectMakeNowH1: "DayFlow - KI-gestützter Tagesplaner",
    projectMakeNowOneliner: "Verwandle Notizen in strukturierte Tagespläne mit intelligenter Aufgabenextraktion und Planung.",
    projectMakeNowGoal: "DayFlow hilft dir, Gedanken mühelos zu erfassen und sie in umsetzbare Pläne umzuwandeln. Mit AI-gestützter Extraktion und intelligenter Planung erstellt es realistische Tagesplans, die du tatsächlich schaffen kannst. Das MVP fokussiert auf Kern-Funktionen: Inbox-Erfassung, AI-Extraktion, Review & Bestätigung, und intelligente tägliche Planung (1 Hauptaufgabe + 2 kleine Aufgaben).",
    projectMakeNowCoreFeatures: "Kern-Features",
    projectMakeNowFeatureInbox: "Inbox Capture - Schreib Notizen natürlich, ohne Formulare",
    projectMakeNowFeatureAI: "AI Extraction - Groq-powered AI extrahiert Aufgaben, Events und Ideen automatisch",
    projectMakeNowFeatureReview: "Review & Confirm - Du behältst die Kontrolle—überprüfe und bestätige alle Vorschläge",
    projectMakeNowFeaturePlanning: "Smart Planning - AI generiert fokussierte Tagesplans: 1 Hauptaufgabe + 2 kleine Aufgaben",
    projectMakeNowFeatureSync: "Real-time Sync - Firebase-powered Cloud-Sync über Geräte",
    projectMakeNowFeatureAuth: "Secure Auth - Email, Google und Apple Sign-in mit Firebase Authentication",
    projectMakeNowFeatureTheme: "Theme Support - Schöne Light und Dark Modes",
    projectMakeNowFeatureResponsive: "Responsive Design - Funktioniert nahtlos auf Desktop und Mobile",
    projectMakeNowContrib1: "AI-Integration - Groq API für intelligente Task-Extraktion und Duration-Estimation. Review und Bestätigung bleibt beim Nutzer",
    projectMakeNowContrib2: "Monorepo Architektur - Monorepo mit Core Package für Business-Logic, Scheduling Engine und Validierung. Tests mit Vitest",
    projectMakeNowContrib3: "Security & Cloud - Firebase Auth, Firestore für Real-time Sync, Security Headers, CSP und Firestore Rules",
    projectMakeNowContrib4: "Frontend - React + TypeScript Screens für Inbox, Today Planning und Daily Review",
    projectMakeNowImplArch: "Architektur: Das Projekt ist als Monorepo mit npm Workspaces strukturiert. Apps/Web enthält die Vite + React Anwendung mit den Screens (Inbox, Today, Review). Packages/Core enthält die Business-Logic: Datenmodelle, Scheduling Rules, State Transitions und Validierung.",
    projectMakeNowImplAI: "AI & Planung: Die Groq API wird für Task-Extraktion und Duration-Estimation genutzt. Der User überprüft alle AI-Vorschläge vor der Bestätigung. Die Scheduling Engine generiert dann fokussierte Tagesplans basierend auf den bestätigten Aufgaben.",
    projectMakeNowImplPersist: "Persistierung: Firebase Firestore speichert Tasks und Daily Plans. Firebase Auth handhabt Sign-in. Firestore Security Rules schützen Userdaten. Real-time Sync ermöglicht nahtlose Multi-Device Experience.",
    projectMakeNowImplDeploy: "Deployment: Vercel hostet Frontend + Serverless APIs. Firebase hostet Auth und Firestore. Environment Variables sind konfiguriert für beide Services.",
    projectMakeNowMVPTitle: "MVP Feature-Set",
    projectMakeNowMVP1: "App Inbox - Freeform Text Input direkt in der App",
    projectMakeNowMVP2: "Note → Structure - AI extrahiert Tasks, Events, Ideas",
    projectMakeNowMVP3: "Duration Estimation - AI schätzt Duration-Ranges mit Confidence",
    projectMakeNowMVP4: "Daily Plan - 1 Focus Task + 2 Mini Tasks + Buffer",
    projectMakeNowMVP5: "One-Tap Confirm - Erstellt Today-Liste ohne Calendar-Schreib-Zugriff",
    projectMakeNowMVP6: "Daily Review - Abend-Review: Done, Postponed, oder Open",
    projectMakeNowLesson1: "Local-first ist wichtig: Auch mit Cloud-Sync sollte die App offline funktionieren.",
    projectMakeNowLesson2: "AI-Output braucht Bestätigung: Nutzer-Review ist essentiell für Vertrauen und Kontrollgefühl.",
    projectMakeNowLesson3: "Monorepo mit Workspaces skaliert gut: Separation von Core-Logic und UI ermöglicht zuverlässiges Testing.",
    projectMakeNowLesson4: "Fokus auf MVP-Scope: Die Beschränkung auf 1+2 Task Format macht das Planing fokussiert und realistisch.",

    projectRaidTitle: "Firmware Simulation. RAID Benchmarks",
    projectRaidSummary:
      "Praxisprojekt aus meiner Zeit bei Hyperstone. Simulation und Performance Tests im Umfeld von RAID Konfigurationen.",
    projectRaidFeature1:
      "Simulation der Firmware, strukturierte Auswertung von Testergebnissen",
    projectRaidFeature2:
      "Implementierung verschiedener RAID Konfigurationen für Leistungstests",
    projectRaidFeature3: "Automatisierung von Test-Szenarien und Datensammlung",
    projectRaidFeature4: "Dokumentation der Ergebnisse und Performance-Analysen",
    projectRaidGoal: "Entwicklung einer Firmware-Simulation zur Durchführung von Performance Tests und Benchmarks für verschiedene RAID-Konfigurationen. Das Projekt sollte es ermöglichen, die Auswirkungen unterschiedlicher RAID-Setups auf die Performance zu verstehen und zu quantifizieren.",
    projectRaidImplementation: "Die Implementierung begann mit der Analyse der verschiedenen RAID-Level und deren Charakteristiken. Es wurde eine Simulationsumgebung aufgebaut, die es ermöglichte, realistische Szenarien zu testen. Anschließend wurden automatisierte Test-Läufe für verschiedene Konfigurationen durchgeführt und die Performance-Metriken systematisch erfasst. Die Ergebnisse wurden dokumentiert und analysiert, um Optimierungsmöglichkeiten zu identifizieren.",
    projectRaidLesson1: "Performance-Tests erfordern sorgfältige Planung und Kontrolle von Variablen.",
    projectRaidLesson2: "Automatisierung ist essentiell für reproduzierbare und zuverlässige Ergebnisse.",
    projectRaidLesson3: "Gute Dokumentation der Test-Ergebnisse ist für die Nachvollziehbarkeit wichtig.",

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
    contactBackHome: "Zurück zum Portfolio",
    contactHoneypotLabel: "Website",
    contactSuccessMessage: "Nachricht wurde gesendet. Weiterleitung läuft...",

    // Thank You Page
    thankYouTitle: "Danke für deine Nachricht",
    thankYouMessage:
      "Ich habe deine Nachricht erhalten und melde mich so bald wie möglich.",
    thankYouHome: "Zurück zum Portfolio",
    thankYouContact: "Noch eine Nachricht",
    thankYouLinkedIn: "LinkedIn",

    // CV Page
    cvTitle: "Lebenslauf",
    cvEducationTitle: "Ausbildung",
    cvEducationMasterDegree: "Master of Science - Informatik",
    cvEducationMasterDegreeShort: "Master of Science, Informatik",
    cvEducationMasterSchool: "LMU München",
    cvEducationMasterDescription:
      "Masterstudent der Informatik an der LMU München.",
    cvEducationBachelorDegree: "Bachelor of Science - Angewandte Informatik",
    cvEducationBachelorDegreeShort: "Bachelor of Science, Angewandte Informatik",
    cvEducationBachelorSchool: "HTWG Konstanz",
    cvEducationBachelorFocus: "Vertiefung: Embedded Systems",
    cvEducationBachelorDescription:
      "Abschluss in Angewandter Informatik mit Schwerpunkt auf Embedded Systems.",
    cvEducationDateBachelor: "02/2026",
    cvEduFhrDate: "2019",
    cvExperienceTitle: "Professionelle Erfahrung",
    cvExpWerkstudent: "Werkstudent",
    cvExpWerkstudentDate: "03/2023 - 02/2024",
    cvExpWerkstudentCompany: "Hyperstone GmbH, Konstanz",
    cvExpWerkstudentTask1: "RAID-Simulation und Konzeptüberarbeitung",
    cvExpWerkstudentTask2: "Simulation der Firmware",
    cvExpWerkstudentTask3: "Implementierung verschiedener RAID-Konfigurationen zum Leistungstest",
    cvExpWerkstudentDesc: "Schwerpunkt auf RAID Simulation und Konzeptüberarbeitung. Dazu habe ich die Firmware Simulation unterstützt und verschiedene RAID Konfigurationen implementiert, um Leistungsunterschiede messbar zu machen.",
    cvExpPraktikum: "Praktikum",
    cvExpPraktikumDate: "09/2022 - 02/2023",
    cvExpPraktikumCompany: "Hyperstone GmbH, Konstanz",
    cvExpPraktikumDesc: "Einstieg in das Firmware Umfeld. Fokus auf nachvollziehbares Testen, Dokumentation und sauberes Vorgehen im Team.",
    cvSkillsTitle: "Technische Skills",
    cvSkillC: "C",
    cvSkillCpp: "C++",
    cvSkillPython: "Python",
    cvSkillJava: "Java",
    cvSkillScala: "Scala",
    cvSkillVhdlBasics: "VHDL (Grundlagen)",
    cvSkillEmbeddedLinuxBasics: "Embedded Linux (Grundlagen)",
    cvSkillGit: "Git",
    cvSkillVSCode: "VS Code",
    cvSkillDebugging: "Debugging",
    cvEduFhrTitle: "Fachhochschulreife",
    cvEduFhrSchool: "Karl-Maybach-Gymnasium, Friedrichshafen",
    cvSkillCatSoftwareDev: "Softwareentwicklung",
    cvSkillGitVersioning: "Git Versionierung",
    cvSkillAgile: "Agiles Arbeiten",
    cvSkillCommunicationTech: "Kommunikationstechnik",
    cvSkillUbiquitousComputing: "Ubiquitous Computing",
    cvSkillDigitalSystems: "Digitale Systeme",
    cvSkillCatProgrammingLanguages: "Programmiersprachen",
    cvSkillCatEmbeddedSystems: "Embedded Systems",
    cvLanguagesTitle: "Sprachkenntnisse",
    cvLangGerman: "Deutsch",
    cvLangEnglish: "Englisch",
    cvLangFrench: "Französisch",
    cvLangSpanish: "Spanisch",
    cvDownload: "CV als PDF herunterladen",
    cvContactBtn: "Kontakt aufnehmen",
    cvPreviewTitle: "Lebenslauf",
    cvViewFull: "Vollständigen Lebenslauf ansehen",

    // Project Detail (shared)
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

    // IoT Project Details (Automatic Light Controller)
    projectIoTGoal:
      "Ziel des Projekts ist eine einfache, robuste Automatisierung für Raumlicht. Ein LDR misst die Umgebungshelligkeit. Bei niedriger Helligkeit schaltet das System das Licht ein, bei hoher Helligkeit wieder aus. Zusätzlich wird ein Sunrise und Sunset Use Case abgebildet, mit schrittweisem Dimmen bis aus oder bis volle Helligkeit.",
    projectIoTContrib1:
      "Sensoranbindung und Auslesen der Helligkeitswerte mit LDR am Arduino Nano",
    projectIoTContrib2:
      "Implementierung eines MQTT Clients und Versand strukturierter Payloads an einen HiveMQ Broker",
    projectIoTContrib3:
      "Schwellwertlogik, Dimmen für Sunrise und Sunset sowie einfache Fehlerfälle wie ungültige Messwerte",
    projectIoTImplementation:
      "Der Ablauf ist klar getrennt. Zuerst werden die Sensorwerte ausgelesen und plausibilisiert. Danach werden die Werte geprüft und als Payload per MQTT an den Broker gesendet. In Datacake wird die Payload decodiert und als Dashboard dargestellt. Auf Basis der Helligkeit wird der Lichtzustand gesetzt, inklusive Dimmverlauf für Sunrise und Sunset.",

    projectIoTImpl1:
      "Read and handle values: Messwertaufnahme und einfache Plausibilisierung",
    projectIoTImpl2:
      "Check values and send: Schwellwertprüfung, Payload erzeugen, MQTT Publish an HiveMQ",
    projectIoTImpl3:
      "Datacake decode: Payload decoding und Visualisierung als Dashboard",

    projectUseCaseTitle: "Use Case",
    projectIoTUseCase1:
      "Sunrise: Licht schrittweise dimmen, bis es komplett aus ist",
    projectIoTUseCase2:
      "Sunset: Licht einschalten und schrittweise auf volle Helligkeit dimmen",

    projectChallengesTitle: "Herausforderungen",
    projectIoTChallenge1:
      "Integration in ein Smart Home Setup mit mehreren Lampen war unerwartet aufwendig",
    projectIoTChallenge2:
      "Viele mögliche Komponenten und Ansätze. Zwei volle Tage gingen für Integrationsthemen verloren",

    projectIoTLesson1:
      "Systemintegration kostet oft mehr Zeit als die reine Sensorlogik. Eine klare Architektur spart Debugging",
    projectIoTLesson2:
      "Gute Dokumentation und eindeutige Schnittstellen sind entscheidend, wenn mehrere Tools zusammenspielen",

    projectFutureTitle: "Ausblick",
    projectIoTFuture1: "Integration in ioBroker weiterverfolgen",
    projectIoTFuture2:
      "Licht automatisch deaktivieren, wenn niemand zu Hause ist. Aktivieren bei Heimkehr",
    projectIoTFuture3:
      "Optionaler Weckmodus, z.B. sanftes Aufdimmen am Morgen",

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
    impressumTMGTitle: "Angaben gemäß § 5 TMG",
    impressumContactTitle: "Kontakt",

    // Datenschutz (existing)
    datenschutzTitle: "Datenschutz",

    // Shared legal buttons
    legalBackHome: "← Zurück zum Portfolio",

    // Impressum extra keys
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
    impressumExternalServicesIntro:
      "Diese Website nutzt folgende externe Dienste:",
    impressumServiceFormSubmit:
      "Kontaktformular-Service zur Übermittlung von Nachrichten",
    impressumServiceAOS: "JavaScript-Bibliothek für Scroll-Animationen",
    impressumServiceGitHubPages: "Hosting-Plattform für statische Websites",

    // Datenschutz page extra keys
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
    privacyLocalStorageItem1Text:
      "Speichert deine Präferenz für den Dark Mode",
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
    navHome: "Portfolio",
    navCV: "CV",
    navContact: "Contact",
    navLinkedIn: "LinkedIn",

    // Toggle Buttons
    darkModeLight: "Dark Mode",
    darkModeDark: "Light Mode",
    languageDE: "English",
    languageEN: "Deutsch",
    mobileMenuClose: "Close",

    // Hero
    heroGreeting: "Hi, I'm",
    heroSubtitle: "Master's student in Computer Science at LMU Munich",
    heroTagline:
      "I'm interested in low-level software, reliable systems, and device communication. Here I showcase projects and skills I've developed during my studies and personal work.",

    // About
    aboutTitle: "Profile",
    aboutItem1: "Embedded development with focus on C and C++",
    aboutItem2:
      "Fundamentals of digital systems and microprocessor technology",
    aboutItem3: "Sensors and peripherals, interrupts, timers, state machines",
    aboutItem4: "Embedded Linux fundamentals and everyday tooling",

    // Skills
    skillsTitle: "Skills & Tools",
    skillsHint:
      "Note: I only list things I've used practically. Depth and details are shown in the projects.",

    // Projects
    projectsTitle: "Projects",

    // IoT Project (Automatic Light Controller)
    projectIoTTitle: "Automatic Light Controller",
    projectIoTSummary:
      "Automatic lighting control based on ambient brightness. MQTT telemetry via HiveMQ, processing and visualization in Datacake.",
    projectIoTFeature1:
      "Measure brightness, check thresholds, switch light on or off, plus dimming for sunrise and sunset",
    projectIoTFeature2:
      "MQTT data flow: Arduino Nano publishes payload to HiveMQ, Datacake decodes and visualizes the values",

    projectMakeNowTitle: "DayFlow. GitHub Project",
    projectMakeNowSummary:
      "Open Source project on GitHub. A small tool that automates my workflow and simplifies repetitive steps.",
    projectMakeNowFeature1:
      "AI extraction and duration estimation via Groq API. Review and confirm remain with the user",
    projectMakeNowFeature2:
      "Monorepo with core package for rules, scheduling engine and validation. Tests with Vitest",
    projectMakeNowFeature3:
      "Optional Firebase Auth and Firestore Sync. Security Headers, CSP and Firestore Rules",
    projectMakeNowH1: "DayFlow - AI-powered Day Planner",
    projectMakeNowOneliner: "Transform notes into structured daily plans with intelligent task extraction and scheduling.",
    projectMakeNowGoal: "DayFlow helps you capture thoughts effortlessly and turn them into actionable plans. With AI-powered extraction and intelligent planning, it creates realistic daily plans that you can actually achieve. The MVP focuses on core features: inbox capture, AI extraction, review & confirmation, and intelligent daily planning (1 main task + 2 small tasks).",
    projectMakeNowCoreFeatures: "Core Features",
    projectMakeNowFeatureInbox: "Inbox Capture - Write notes naturally, without forms",
    projectMakeNowFeatureAI: "AI Extraction - Groq-powered AI automatically extracts tasks, events and ideas",
    projectMakeNowFeatureReview: "Review & Confirm - You stay in control—review and confirm all suggestions",
    projectMakeNowFeaturePlanning: "Smart Planning - AI generates focused daily plans: 1 main task + 2 smaller ones",
    projectMakeNowFeatureSync: "Real-time Sync - Firebase-powered cloud sync across devices",
    projectMakeNowFeatureAuth: "Secure Auth - Email, Google and Apple Sign-in with Firebase Authentication",
    projectMakeNowFeatureTheme: "Theme Support - Beautiful light and dark modes",
    projectMakeNowFeatureResponsive: "Responsive Design - Works seamlessly on desktop and mobile",
    projectMakeNowContrib1: "AI Integration - Groq API for intelligent task extraction and duration estimation. Review and confirmation remains with the user",
    projectMakeNowContrib2: "Monorepo Architecture - Monorepo with core package for business logic, scheduling engine and validation. Tests with Vitest",
    projectMakeNowContrib3: "Security & Cloud - Firebase Auth, Firestore for real-time sync, security headers, CSP and Firestore rules",
    projectMakeNowContrib4: "Frontend - React + TypeScript screens for Inbox, Today Planning and Daily Review",
    projectMakeNowImplArch: "Architecture: The project is structured as a monorepo with npm Workspaces. Apps/Web contains the Vite + React application with screens (Inbox, Today, Review). Packages/Core contains the business logic: data models, scheduling rules, state transitions and validation.",
    projectMakeNowImplAI: "AI & Planning: The Groq API is used for task extraction and duration estimation. The user reviews all AI suggestions before confirmation. The scheduling engine then generates focused daily plans based on confirmed tasks.",
    projectMakeNowImplPersist: "Persistence: Firebase Firestore stores tasks and daily plans. Firebase Auth handles sign-in. Firestore Security Rules protect user data. Real-time sync enables seamless multi-device experience.",
    projectMakeNowImplDeploy: "Deployment: Vercel hosts frontend + serverless APIs. Firebase hosts Auth and Firestore. Environment variables are configured for both services.",
    projectMakeNowMVPTitle: "MVP Feature Set",
    projectMakeNowMVP1: "App Inbox - Freeform text input directly in the app",
    projectMakeNowMVP2: "Note → Structure - AI extracts tasks, events, ideas",
    projectMakeNowMVP3: "Duration Estimation - AI estimates duration ranges with confidence",
    projectMakeNowMVP4: "Daily Plan - 1 focus task + 2 mini tasks + buffer",
    projectMakeNowMVP5: "One-Tap Confirm - Creates today list without calendar write access",
    projectMakeNowMVP6: "Daily Review - Evening review: Done, Postponed, or Open",
    projectMakeNowLesson1: "Local-first is important: The app should work offline even with cloud sync.",
    projectMakeNowLesson2: "AI output requires confirmation: User review is essential for trust and sense of control.",
    projectMakeNowLesson3: "Monorepo with workspaces scales well: Separation of core logic and UI enables reliable testing.",
    projectMakeNowLesson4: "Focus on MVP scope: The limitation to 1+2 task format makes planning focused and realistic.",

    projectRaidTitle: "Firmware Simulation. RAID Benchmarks",
    projectRaidSummary:
      "Practical project from my time at Hyperstone. Simulation and performance testing in the RAID configuration environment.",
    projectRaidFeature1:
      "Firmware simulation, structured evaluation of test results",
    projectRaidFeature2:
      "Implementation of various RAID configurations for performance testing",
    projectRaidFeature3: "Automation of test scenarios and data collection",
    projectRaidFeature4: "Documentation of results and performance analysis",
    projectRaidGoal: "Development of a firmware simulation for conducting performance tests and benchmarks for various RAID configurations. The project should enable understanding and quantifying the impact of different RAID setups on performance.",
    projectRaidImplementation: "Implementation began with analyzing various RAID levels and their characteristics. A simulation environment was built that enabled testing realistic scenarios. Subsequently, automated test runs for various configurations were performed and performance metrics systematically captured. Results were documented and analyzed to identify optimization opportunities.",
    projectRaidLesson1: "Performance tests require careful planning and control of variables.",
    projectRaidLesson2: "Automation is essential for reproducible and reliable results.",
    projectRaidLesson3: "Good documentation of test results is important for traceability.",

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
    contactBackHome: "Back to Portfolio",
    contactHoneypotLabel: "Website",
    contactSuccessMessage: "Message sent. Redirecting...",

    // Thank You Page
    thankYouTitle: "Thank You for Your Message",
    thankYouMessage:
      "I've received your message and will get back to you as soon as possible.",
    thankYouHome: "Back to Portfolio",
    thankYouContact: "Send Another Message",
    thankYouLinkedIn: "LinkedIn",

    // CV Page
    cvTitle: "Curriculum Vitae",
    cvEducationTitle: "Education",
    cvEducationMasterDegree: "Master of Science - Computer Science",
    cvEducationMasterDegreeShort: "Master of Science, Computer Science",
    cvEducationMasterSchool: "LMU Munich",
    cvEducationMasterDescription:
      "Master's student in Computer Science at LMU Munich.",
    cvEducationBachelorDegree: "Bachelor of Science - Applied Computer Science",
    cvEducationBachelorDegreeShort: "Bachelor of Science, Applied Computer Science",
    cvEducationBachelorSchool: "HTWG Konstanz",
    cvEducationBachelorFocus: "Focus: Embedded Systems",
    cvEducationBachelorDescription:
      "Bachelor's degree in Applied Computer Science with a focus on Embedded Systems.",
    cvEducationDateBachelor: "02/2026",
    cvEduFhrTitle: "Fachhochschulreife",
    cvEduFhrSchool: "Karl-Maybach-Gymnasium, Friedrichshafen",
    cvEduFhrDate: "2019",
    cvExperienceTitle: "Professional Experience",
    cvExpWerkstudent: "Working Student",
    cvExpWerkstudentDate: "03/2023 - 02/2024",
    cvExpWerkstudentCompany: "Hyperstone GmbH, Konstanz",
    cvExpWerkstudentTask1: "RAID simulation and concept revision",
    cvExpWerkstudentTask2: "Firmware simulation",
    cvExpWerkstudentTask3: "Implementation of various RAID configurations for performance testing",
    cvExpWerkstudentDesc: "Focus on RAID simulation and concept revision. I supported firmware simulation and implemented various RAID configurations to measure performance differences.",
    cvExpPraktikum: "Internship",
    cvExpPraktikumDate: "09/2022 - 02/2023",
    cvExpPraktikumCompany: "Hyperstone GmbH, Konstanz",
    cvExpPraktikumDesc: "Entry into the firmware field. Focus on comprehensible testing, documentation and clean teamwork.",
    cvSkillsTitle: "Technical Skills",
    cvSkillC: "C",
    cvSkillCpp: "C++",
    cvSkillPython: "Python",
    cvSkillJava: "Java",
    cvSkillScala: "Scala",
    cvSkillVhdlBasics: "VHDL (basics)",
    cvSkillEmbeddedLinuxBasics: "Embedded Linux (basics)",
    cvSkillGit: "Git",
    cvSkillVSCode: "VS Code",
    cvSkillDebugging: "Debugging",
    cvEduFhrTitle: "University entrance qualification",
    cvEduFhrSchool: "Karl-Maybach-Gymnasium, Friedrichshafen",
    cvSkillCatSoftwareDev: "Software Development",
    cvSkillGitVersioning: "Git version control",
    cvSkillAgile: "Agile work",
    cvSkillCommunicationTech: "Communication Technology",
    cvSkillUbiquitousComputing: "Ubiquitous Computing",
    cvSkillDigitalSystems: "Digital Systems",
    cvSkillCatProgrammingLanguages: "Programming Languages",
    cvSkillCatEmbeddedSystems: "Embedded Systems",
    cvLanguagesTitle: "Languages",
    cvLangGerman: "German",
    cvLangEnglish: "English",
    cvLangFrench: "French",
    cvLangSpanish: "Spanish",
    cvDownload: "Download CV as PDF",
    cvContactBtn: "Get in Touch",
    cvPreviewTitle: "Curriculum Vitae",
    cvViewFull: "View Full CV",

    // Project Detail (shared)
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

    // IoT Project Details (Automatic Light Controller)
    projectIoTGoal:
      "The goal of this project is a simple and robust room lighting automation. An LDR measures ambient brightness. When brightness is low, the system turns the light on, and when it is high, it turns it off. In addition, the project implements sunrise and sunset use cases with stepwise dimming either down to off or up to full brightness.",
    projectIoTContrib1:
      "Sensor integration and reading ambient brightness via an LDR on an Arduino Nano",
    projectIoTContrib2:
      "Implemented an MQTT client and published structured payloads to a HiveMQ broker",
    projectIoTContrib3:
      "Threshold logic, sunrise and sunset dimming, plus basic error handling such as invalid sensor readings",
    projectIoTImplementation:
      "The flow is clearly separated. First, sensor values are read and validated. Then values are evaluated and sent as an MQTT payload to the broker. In Datacake, the payload is decoded and shown on a dashboard. Based on brightness, the light state is set, including dimming behavior for sunrise and sunset.",

    projectIoTImpl1:
      "Read and handle values: capture readings and basic validation",
    projectIoTImpl2:
      "Check values and send: threshold check, build payload, MQTT publish to HiveMQ",
    projectIoTImpl3:
      "Datacake decode: payload decoding and dashboard visualization",

    projectUseCaseTitle: "Use case",
    projectIoTUseCase1:
      "Sunrise: dim the light step by step until it is fully off",
    projectIoTUseCase2:
      "Sunset: turn the light on and dim up step by step to full brightness",

    projectChallengesTitle: "Challenges",
    projectIoTChallenge1:
      "Integrating into a smart home setup with multiple lamps was unexpectedly time consuming",
    projectIoTChallenge2:
      "Many possible components and approaches. Two full days were lost due to integration topics",

    projectIoTLesson1:
      "System integration often takes more time than sensor logic. A clear architecture reduces debugging",
    projectIoTLesson2:
      "Good documentation and clear interfaces are essential when multiple tools interact",

    projectFutureTitle: "Next steps",
    projectIoTFuture1: "Continue the integration with ioBroker",
    projectIoTFuture2:
      "Automatically disable the light when nobody is home and enable it when returning",
    projectIoTFuture3:
      "Optional wake up mode, for example gentle dim up in the morning",

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
    impressumTMGTitle: "Information according to § 5 TMG",
    impressumContactTitle: "Contact",

    // Datenschutz (existing)
    datenschutzTitle: "Privacy Policy",

    // Shared legal buttons
    legalBackHome: "← Back to Portfolio",

    // Impressum extra keys
    impressumAddressPlaceholder: "[Address placeholder]",
    impressumCityPlaceholder: "78462 Constance",
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

    // Datenschutz page extra keys
    privacyIntroTitle: "Privacy policy",
    privacyIntroText:
      "Protecting your data is important to me. This privacy policy informs you about the processing of personal data when using this website.",
    privacyControllerTitle: "Controller",
    privacyHostingTitle: "Hosting",
    privacyHostingText:
      "This website is hosted on GitHub Pages. GitHub may collect technical log data such as IP addresses, browser type, and access times. For more information, see GitHub's privacy statement.",
    privacyGithubLinkText: "GitHub privacy statement",
    privacyContactFormTitle: "Contact form",
    privacyContactFormText:
      "The contact form uses the service FormSubmit.co. When you use the form, the following data is transmitted:",
    privacyContactFormItem1: "Name",
    privacyContactFormItem2: "Email address",
    privacyContactFormItem3: "Message content",
    privacyContactFormMoreText:
      "This data is used exclusively to process your request. FormSubmit.co forwards the message to my email address. For more information, see FormSubmit's privacy policy.",
    privacyFormSubmitLinkText: "FormSubmit privacy policy",
    privacyExternalResourcesTitle: "External resources",
    privacyExternalResourcesText:
      "This website uses external resources from content delivery networks (CDNs). When these resources are loaded, your IP address may be transmitted to the respective provider.",
    privacyExternalResourcesItem1: "AOS (Animate On Scroll) library",
    privacyLegalBasisText:
      "These resources are used based on legitimate interests pursuant to Art. 6(1)(f) GDPR to ensure optimal delivery of the website.",
    privacyLocalStorageTitle: "Local storage (LocalStorage)",
    privacyLocalStorageText:
      "This website uses your browser's local storage (LocalStorage) to store your settings. This data remains on your device and is not transmitted to servers.",
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

// ============================================
// Inhalte Startseite + Lebenslauf (Stand 11/2026)
// Überschreibt bzw. ergänzt die Einträge oben.
// ============================================
Object.assign(translations.de, {
  navHome: "Portfolio",
  navCV: "Lebenslauf",
  navContact: "Kontakt",

  heroEyebrow: "M.Sc. Informatik · LMU München",
  heroLead:
    "Ich entwickle Software nah an der Hardware: Firmware, Speichersysteme und parallele Systeme. Im Master an der LMU vertiefe ich Systems, Embedded und Security.",
  heroStatus: "Offen für Werkstudentenstellen in München · Embedded, Firmware, Security",
  heroBtnProjects: "Projekte ansehen",
  heroBtnCV: "Lebenslauf (PDF)",
  portraitTag: "München, DE",

  fact1Value: "1,5 Jahre",
  fact1Label: "Firmware-Erfahrung bei Hyperstone",
  fact2Value: "B.Sc.",
  fact2Label: "Angewandte Informatik, HTWG Konstanz",
  fact3Value: "M.Sc.",
  fact3Label: "Informatik, LMU München, seit 2026",
  fact4Value: "Tutor",
  fact4Label: "Digitaltechnik an der HTWG",

  focusTitle: "Schwerpunkte",
  focusIntro: "Woran ich arbeite und was ich gerade vertiefe.",
  focus1Title: "Embedded & Firmware",
  focus1Text:
    "Firmware-Simulation, NAND-Flash-Speicherarchitekturen und RAID aus der Praxis bei Hyperstone. Dazu Cross-Compilation und Testen von Firmware-Tools.",
  focus2Title: "Parallele & verteilte Systeme",
  focus2Text:
    "Parallel Computing im Bachelor und Master, aktuell Grid- und Cloud-Computing sowie die Verifikation paralleler Programme.",
  focus3Title: "Security & Programmanalyse",
  focus3Text:
    "Im Master vertiefe ich Programmanalyse für Security und will sie mit hardwarenaher Entwicklung zusammenbringen.",

  expTitle: "Erfahrung",
  expWsTitle: "Werkstudent",
  expWsOrg: "Hyperstone GmbH · Konstanz",
  expWs1: "Simulation der Firmware zur Analyse und Optimierung der RAID-Performance",
  expWs2: "Implementierung und Test verschiedener RAID-Konfigurationen",
  expWs3: "Entwicklung und Einsatz eines Python-Modells zur Evaluierung des Firmware-Verhaltens",
  expPrTitle: "Praktikum",
  expPrOrg: "Hyperstone GmbH · Konstanz",
  expPr1: "Cross-Compilation und Testing von Firmware-Tools (hsfmt)",
  expPr2: "Einarbeitung in NAND-Flash-basierte Speicherarchitekturen und RAID-Konzepte",
  expTuTitle: "Tutor Digitaltechnik",
  expTuOrg: "HTWG Konstanz",
  expTuDate: "Während des Bachelors",
  expTu1: "Betreuung von Studierenden in der Lehrveranstaltung Digitaltechnik",

  projectsTitle: "Projekte",
  projectsIntro: "Aus Beruf, Studium und eigener Initiative.",
  projectMore: "Details ansehen",
  kindWork: "Beruf",
  kindThesis: "Bachelorarbeit",
  kindOpenSource: "Eigenes Projekt",
  kindIoT: "IoT",
  projectRaidTitle: "Firmware-Simulation & RAID-Performance",
  projectRaidSummary:
    "Bei Hyperstone: Firmware-Simulation und ein Python-Modell, um verschiedene RAID-Konfigurationen auf NAND-Flash-Basis zu bewerten und zu vergleichen.",
  projectThesisTitle: "Automatisierte Bewertung von Chatnachrichten",
  projectThesisSummary:
    "Bachelorarbeit an der HTWG: klassische ML-Modelle bewerten Chatnachrichten, LLM-gestützte Datenerweiterung vergrößert die Trainingsbasis.",
  projectMakeNowTitle: "DayFlow – KI-Tagesplaner",
  projectMakeNowSummary:
    "Macht aus freien Notizen per KI Aufgaben und realistische Tagespläne, jeder Vorschlag wird vom Nutzer bestätigt. Monorepo mit getesteter Scheduling-Engine.",
  projectIoTTitle: "Automatic Light Controller",
  projectIoTSummary:
    "Lichtsteuerung nach Umgebungshelligkeit mit Sunrise- und Sunset-Dimmung. Sensordaten gehen per MQTT über HiveMQ an ein Datacake-Dashboard.",

  skillsTitle: "Skills",
  skillsIntro: "Was ich praktisch eingesetzt habe. Den Kontext dazu findest du bei Erfahrung und Projekten.",
  skRowLang: "Programmiersprachen",
  skRowLangSub: "Schwerpunkt C, C++ und Python",
  skRowSys: "Systems & Embedded",
  skRowSysSub: "Beruf und Studium",
  skRowData: "Daten & ML",
  skRowDataSub: "Bachelorarbeit",
  skRowTools: "Tools & Methoden",
  skRowToolsSub: "Alltag und Projekte",

  ctaTitle: "Lass uns sprechen",
  ctaText: "Ich suche eine Werkstudentenstelle in München, am liebsten in Embedded, Firmware oder Security.",
  ctaBtn: "Nachricht schreiben",

  // Lebenslauf
  cvTitle: "Lebenslauf",
  cvSub: "Marcel Richter · Stand November 2026",
  cvDownload: "PDF herunterladen",
  cvEducationTitle: "Ausbildung",
  cvExperienceTitle: "Erfahrung",
  cvSkillsTitle: "Skills",
  cvToday: "heute",
  cvMscTitle: "M.Sc. Informatik",
  cvMscOrg: "LMU München",
  cvMscText: "Schwerpunkte Systems, Embedded und Security. Ausgewählte Module:",
  cvBscTitle: "B.Sc. Angewandte Informatik",
  cvBscOrg: "HTWG Konstanz · Vertiefung Embedded Systems",
  cvBsc1: "Bachelorarbeit: automatisierte Bewertung von Chatnachrichten mit klassischen ML-Modellen und LLM-gestützter Datenerweiterung",
  cvBsc2: "Module u. a. Mikroprozessorsysteme, Digitale Systeme, Kommunikationstechnik, Ubiquitous Computing und Parallel Computing",
  cvBsc3: "Tutor für Digitaltechnik",
  cvEduFhrTitle: "Fachhochschulreife",
  cvEduFhrSchool: "Karl-Maybach-Gymnasium, Friedrichshafen",
  cvAsideContact: "Kontakt",
  cvAsideMessage: "Nachricht schreiben",
  cvLanguagesTitle: "Sprachen",
  cvLangGerman: "Deutsch",
  cvLangEnglish: "Englisch",
  cvLangFrench: "Französisch",
  cvLangSpanish: "Spanisch",
  cvLvlNative: "Muttersprache",
  cvInterestsTitle: "Interessen",
  cvInt1: "Wandern",
  cvInt2: "Rennradfahren",
  cvInt3: "Foto- und Videografie",
  cvInt4: "Digitale Innovationen",

  // Projektseite RAID
  projectRaidFeature1: "Simulation der Firmware zur Analyse und Optimierung der RAID-Performance",
  projectRaidFeature2: "Implementierung und Test verschiedener RAID-Konfigurationen",
  projectRaidFeature3: "Entwicklung und Einsatz eines Python-Modells zur Evaluierung des Firmware-Verhaltens",
  projectRaidFeature4: "Grundlage aus dem Praktikum: NAND-Flash-Speicherarchitekturen, RAID-Konzepte und Cross-Compilation von Firmware-Tools",
  projectRaidGoal:
    "Verstehen und messbar machen, wie sich unterschiedliche RAID-Konfigurationen auf die Performance von NAND-Flash-basierten Speichern auswirken, ohne dafür jedes Setup auf echter Hardware aufbauen zu müssen.",
  projectRaidImplementation:
    "Ausgangspunkt waren die RAID-Konzepte und die NAND-Flash-Architektur. Auf Basis der Firmware-Simulation habe ich verschiedene RAID-Konfigurationen umgesetzt und getestet und die Ergebnisse mit einem eigenen Python-Modell ausgewertet, um Leistungsunterschiede vergleichbar zu machen.",

  // Datenschutz/Impressum: AOS entfernt
  privacyExternalResourcesText:
    "Diese Website lädt keine Skripte, Schriften oder Stylesheets von externen Servern. Alle Ressourcen werden direkt über GitHub Pages ausgeliefert.",
  privacyStatusDate: "Stand: November 2026"
});

Object.assign(translations.en, {
  navHome: "Portfolio",
  navCV: "CV",
  navContact: "Contact",

  heroEyebrow: "M.Sc. Computer Science · LMU Munich",
  heroLead:
    "I build software close to the hardware: firmware, storage systems and parallel systems. In my Master's at LMU Munich I'm going deeper into systems, embedded and security.",
  heroStatus: "Open to working-student roles in Munich · Embedded, firmware, security",
  heroBtnProjects: "View projects",
  heroBtnCV: "CV (PDF)",
  portraitTag: "Munich, DE",

  fact1Value: "1.5 years",
  fact1Label: "Firmware experience at Hyperstone",
  fact2Value: "B.Sc.",
  fact2Label: "Applied Computer Science, HTWG Konstanz",
  fact3Value: "M.Sc.",
  fact3Label: "Computer Science, LMU Munich, since 2026",
  fact4Value: "Tutor",
  fact4Label: "Digital logic at HTWG",

  focusTitle: "Focus areas",
  focusIntro: "What I work on and what I'm digging into right now.",
  focus1Title: "Embedded & firmware",
  focus1Text:
    "Firmware simulation, NAND flash storage architectures and RAID from hands-on work at Hyperstone. Plus cross-compiling and testing firmware tools.",
  focus2Title: "Parallel & distributed systems",
  focus2Text:
    "Parallel computing in my Bachelor's and Master's, currently grid and cloud computing and the verification of parallel programs.",
  focus3Title: "Security & program analysis",
  focus3Text:
    "In my Master's I'm studying program analysis for security and want to combine it with low-level development.",

  expTitle: "Experience",
  expWsTitle: "Working Student",
  expWsOrg: "Hyperstone GmbH · Konstanz",
  expWs1: "Simulated firmware to analyse and optimise RAID performance",
  expWs2: "Implemented and tested different RAID configurations",
  expWs3: "Built and used a Python model to evaluate firmware behaviour",
  expPrTitle: "Intern",
  expPrOrg: "Hyperstone GmbH · Konstanz",
  expPr1: "Cross-compilation and testing of firmware tools (hsfmt)",
  expPr2: "Got up to speed on NAND flash storage architectures and RAID concepts",
  expTuTitle: "Tutor, Digital Logic",
  expTuOrg: "HTWG Konstanz",
  expTuDate: "During my Bachelor's",
  expTu1: "Supported students in the digital logic course",

  projectsTitle: "Projects",
  projectsIntro: "From work, university and my own initiative.",
  projectMore: "View details",
  kindWork: "Work",
  kindThesis: "Bachelor thesis",
  kindOpenSource: "Side project",
  kindIoT: "IoT",
  projectRaidTitle: "Firmware simulation & RAID performance",
  projectRaidSummary:
    "At Hyperstone: firmware simulation and a Python model to evaluate and compare RAID configurations on NAND flash.",
  projectThesisTitle: "Automated rating of chat messages",
  projectThesisSummary:
    "Bachelor thesis at HTWG: classical ML models rate chat messages, LLM-based data augmentation enlarges the training set.",
  projectMakeNowTitle: "DayFlow – AI day planner",
  projectMakeNowSummary:
    "Turns free-form notes into tasks and realistic day plans with AI, and the user confirms every suggestion. Monorepo with a tested scheduling engine.",
  projectIoTTitle: "Automatic Light Controller",
  projectIoTSummary:
    "Light control based on ambient brightness with sunrise and sunset dimming. Sensor data travels via MQTT and HiveMQ to a Datacake dashboard.",

  skillsTitle: "Skills",
  skillsIntro: "What I've actually used. You'll find the context under experience and projects.",
  skRowLang: "Programming languages",
  skRowLangSub: "Mainly C, C++ and Python",
  skRowSys: "Systems & embedded",
  skRowSysSub: "Work and university",
  skRowData: "Data & ML",
  skRowDataSub: "Bachelor thesis",
  skRowTools: "Tools & methods",
  skRowToolsSub: "Day-to-day and projects",

  ctaTitle: "Let's talk",
  ctaText: "I'm looking for a working-student role in Munich, ideally in embedded, firmware or security.",
  ctaBtn: "Send a message",

  cvTitle: "Curriculum Vitae",
  cvSub: "Marcel Richter · as of November 2026",
  cvDownload: "Download PDF",
  cvEducationTitle: "Education",
  cvExperienceTitle: "Experience",
  cvSkillsTitle: "Skills",
  cvToday: "present",
  cvMscTitle: "M.Sc. Computer Science",
  cvMscOrg: "LMU Munich",
  cvMscText: "Focus on systems, embedded and security. Selected modules:",
  cvBscTitle: "B.Sc. Applied Computer Science",
  cvBscOrg: "HTWG Konstanz · Specialisation: Embedded Systems",
  cvBsc1: "Thesis: automated rating of chat messages using classical ML models and LLM-based data augmentation",
  cvBsc2: "Modules include microprocessor systems, digital systems, communications engineering, ubiquitous computing and parallel computing",
  cvBsc3: "Tutor for digital logic",
  cvEduFhrTitle: "University entrance qualification (Fachhochschulreife)",
  cvEduFhrSchool: "Karl-Maybach-Gymnasium, Friedrichshafen",
  cvAsideContact: "Contact",
  cvAsideMessage: "Send a message",
  cvLanguagesTitle: "Languages",
  cvLangGerman: "German",
  cvLangEnglish: "English",
  cvLangFrench: "French",
  cvLangSpanish: "Spanish",
  cvLvlNative: "Native",
  cvInterestsTitle: "Interests",
  cvInt1: "Hiking",
  cvInt2: "Road cycling",
  cvInt3: "Photography and videography",
  cvInt4: "Digital innovation",

  projectRaidFeature1: "Simulated firmware to analyse and optimise RAID performance",
  projectRaidFeature2: "Implemented and tested different RAID configurations",
  projectRaidFeature3: "Built and used a Python model to evaluate firmware behaviour",
  projectRaidFeature4: "Foundation from my internship: NAND flash storage architectures, RAID concepts and cross-compiling firmware tools",
  projectRaidGoal:
    "Understand and measure how different RAID configurations affect the performance of NAND flash storage, without building every setup on real hardware.",
  projectRaidImplementation:
    "I started from the RAID concepts and the NAND flash architecture. On top of the firmware simulation I implemented and tested different RAID configurations and evaluated the results with my own Python model to make performance differences comparable.",

  privacyExternalResourcesText:
    "This website does not load scripts, fonts or stylesheets from external servers. All resources are served directly by GitHub Pages.",
  privacyStatusDate: "As of November 2026"
});

// Stand FlowCV-Export 11/2026
Object.assign(translations.de, {
 "heroLead": "Ich entwickle Software nah an der Hardware: Firmware für NAND-Flash-Controller, Mikrocontroller in C und Assembler, parallele Systeme. Im Master an der LMU vertiefe ich Systems und Security.",
 "heroStatus": "Ab sofort verfügbar · Werkstudent in München, bis 16 h/Woche",
 "focus1Text": "1,5 Jahre Firmware für NAND-Flash-Controller bei Hyperstone: Simulation, RAID, Cross-Compilation. Dazu Mikrocontroller in C und Assembler aus den Embedded-Laboren.",
 "focus3Text": "Program Analysis for Security im Master, dazu Grundlagen in Kryptographie, Secure Coding, Fuzzing und Pentesting.",
 "expWsTitle": "Werkstudent Software/Firmware",
 "expWs1": "Simulation von Controller-Firmware zur Analyse und Optimierung der RAID-Performance",
 "expWs2": "Implementierung und Test verschiedener RAID-Konfigurationen für NAND-Flash-Speicher",
 "expWs3": "Entwicklung eines Python-Modells zur Bewertung des Firmware-Verhaltens",
 "expPrTitle": "Praktikant (Praxissemester)",
 "expTuDate": "WiSe 2024/25",
 "kindLab": "Labor",
 "kindTeam": "Teamprojekt · 1,0",
 "projectLabTitle": "Embedded-Laborprojekte",
 "projectLabSummary": "Vertiefung Embedded Systems an der HTWG: MSP430-Mikrocontroller in C und Assembler, Peripherie über UART, SPI und I²C, Embedded Linux auf dem Raspberry Pi und Schaltungsentwurf in VHDL für FPGAs.",
 "projectFlowTitle": "flowculate – Kundenlaufweg-Analyse",
 "projectFlowSummary": "Web-App aus einem 5er-Team an der HTWG, mit 1,0 bewertet. Ich habe das Frontend mit Umfrage-Flow und Layout-Editor umgesetzt.",
 "projectThesisTitle": "ML-Pipeline zur Bewertung von Chatnachrichten",
 "projectThesisSummary": "Bachelorarbeit: leakage-freie Python-Pipeline für rund 2.500 Nachrichten mit 20 Kriterien. Synthetische Trainingsdaten mit lokalem LLM (Gemma 3 via Ollama), vier Modelle mit 6-facher Kreuzvalidierung verglichen.",
 "skRowLang": "Programmierung",
 "skRowSys": "Embedded & Systems",
 "skRowSysSub": "Beruf, Labor und Studium",
 "skRowSec": "Security",
 "skRowSecSub": "Grundlagen",
 "skRowTools": "Tools",
 "ctaText": "Ich suche ab sofort eine Werkstudentenstelle in München (bis 16 h/Woche), am liebsten in Embedded, Firmware oder Security.",
 "cvMscDate": "04/2026 – 09/2028 (vsl.)",
 "cvMscText": "Schwerpunkt Systems & Security. Ausgewählte Module:",
 "cvBsc1": "Bachelorarbeit: ML-Pipeline zur Bewertung von Chatnachrichten (scikit-learn, Sentence Transformers, synthetische Daten mit Gemma 3 via Ollama)",
 "cvBsc2": "Embedded-Labore: MSP430 in C und Assembler, UART/SPI/I²C, Embedded Linux auf dem Raspberry Pi, VHDL für FPGAs",
 "cvBsc3": "Tutor für Digitaltechnik (WiSe 2024/25)",
 "cvBsc4": "Teamprojekt flowculate (Note 1,0): Frontend in Next.js und TypeScript",
 "cvLvlEn": "fließend",
 "cvLvlFr": "Grundkenntnisse"
});
Object.assign(translations.en, {
 "heroLead": "I build software close to the hardware: firmware for NAND flash controllers, microcontrollers in C and assembly, parallel systems. In my Master's at LMU Munich I'm going deeper into systems and security.",
 "heroStatus": "Available now · working student in Munich, up to 16 h/week",
 "focus1Text": "1.5 years of firmware for NAND flash controllers at Hyperstone: simulation, RAID, cross-compilation. Plus microcontrollers in C and assembly from the embedded labs.",
 "focus3Text": "Program Analysis for Security in my Master's, plus basics in cryptography, secure coding, fuzzing and pentesting.",
 "expWsTitle": "Working Student, Software/Firmware",
 "expWs1": "Simulated controller firmware to analyse and optimise RAID performance",
 "expWs2": "Implemented and tested different RAID configurations for NAND flash storage",
 "expWs3": "Built a Python model to evaluate firmware behaviour",
 "expPrTitle": "Intern (practical semester)",
 "expTuDate": "Winter 2024/25",
 "kindLab": "Lab",
 "kindTeam": "Team project · 1.0",
 "projectLabTitle": "Embedded lab projects",
 "projectLabSummary": "Embedded systems specialisation at HTWG: MSP430 microcontrollers in C and assembly, peripherals via UART, SPI and I²C, embedded Linux on the Raspberry Pi and circuit design in VHDL for FPGAs.",
 "projectFlowTitle": "flowculate – customer path analysis",
 "projectFlowSummary": "Web app built by a team of five at HTWG, graded 1.0 (top grade). I built the frontend with the survey flow and layout editor.",
 "projectThesisTitle": "ML pipeline for rating chat messages",
 "projectThesisSummary": "Bachelor thesis: leakage-free Python pipeline for about 2,500 messages across 20 criteria. Synthetic training data from a local LLM (Gemma 3 via Ollama), four models compared with 6-fold cross-validation.",
 "skRowLang": "Programming",
 "skRowSys": "Embedded & systems",
 "skRowSysSub": "Work, labs and university",
 "skRowSec": "Security",
 "skRowSecSub": "Fundamentals",
 "skRowTools": "Tools",
 "ctaText": "I'm looking for a working-student role in Munich starting now (up to 16 h/week), ideally in embedded, firmware or security.",
 "cvMscDate": "04/2026 – 09/2028 (expected)",
 "cvMscText": "Focus on systems & security. Selected modules:",
 "cvBsc1": "Thesis: ML pipeline for rating chat messages (scikit-learn, Sentence Transformers, synthetic data with Gemma 3 via Ollama)",
 "cvBsc2": "Embedded labs: MSP430 in C and assembly, UART/SPI/I²C, embedded Linux on the Raspberry Pi, VHDL for FPGAs",
 "cvBsc3": "Tutor for digital logic (winter 2024/25)",
 "cvBsc4": "Team project flowculate (grade 1.0): frontend in Next.js and TypeScript",
 "cvLvlEn": "fluent",
 "cvLvlFr": "basic"
});

// ============================================
// Auto-Translation Dictionary
// ============================================
const autoTranslationDict = {
  // projekt-makenow.html
  "Schreib Notizen natürlich, ohne Formulare": "Write notes naturally, without forms",
  "Groq-powered AI extrahiert Aufgaben, Events und Ideen automatisch": "Groq-powered AI automatically extracts tasks, events and ideas",
  "Du behältst die Kontrolle—überprüfe und bestätige alle Vorschläge": "You stay in control—review and confirm all suggestions",
  "AI generiert fokussierte Tagesplans: 1 Hauptaufgabe + 2 kleine Aufgaben": "AI generates focused daily plans: 1 main task + 2 smaller ones",
  "Firebase-powered Cloud-Sync über Geräte": "Firebase-powered cloud sync across devices",
  "Email, Google und Apple Sign-in mit Firebase Authentication": "Email, Google and Apple Sign-in with Firebase Authentication",
  "Schöne Light und Dark Modes": "Beautiful light and dark modes",
  "Funktioniert nahtlos auf Desktop und Mobile": "Works seamlessly on desktop and mobile",
  "Groq API für intelligente Task-Extraktion und Duration-Estimation": "Groq API for intelligent task extraction and duration estimation",
  "Monorepo mit Core Package für Business-Logic, Scheduling Engine und Validierung": "Monorepo with core package for business logic, scheduling engine and validation",
  "Firebase Auth, Firestore für Real-time Sync, Security Headers, CSP und Firestore Rules": "Firebase Auth, Firestore for real-time sync, Security Headers, CSP and Firestore Rules",
  "React + TypeScript Screens für Inbox, Today Planning und Daily Review": "React + TypeScript screens for Inbox, Today Planning and Daily Review",
  "Auch mit Cloud-Sync sollte die App offline funktionieren": "The app should work offline even with cloud sync",
  "AI-Output braucht Bestätigung": "AI output requires confirmation",
  "Monorepo mit Workspaces skaliert gut": "Monorepo with workspaces scales well",
  
  // projekt-raid.html
  "Automatisierung von Test-Szenarien und Datensammlung": "Automation of test scenarios and data collection",
  "Automatisierung ist essentiell für reproduzierbare und zuverlässige Tests": "Automation is essential for reproducible and reliable tests",
  "Dokumentation der Ergebnisse und Performance-Analysen": "Documentation of results and performance analysis",
  
  // cv.html
  "Fachhochschulreife": "Fachhochschulreife",
  "Werkstudent": "Working Student",
  "Praktikum": "Internship",
  "RAID-Simulation und Konzeptüberarbeitung": "RAID simulation and concept revision",
  "Simulation der Firmware": "Firmware simulation",
  "Implementierung verschiedener RAID-Konfigurationen zum Leistungstest": "Implementation of various RAID configurations for performance testing",
  "Programmiersprachen": "Programming Languages",
  "Softwareentwicklung": "Software Development",
  "Kommunikationstechnik": "Communication Technology",
  "Ubiquitous Computing": "Ubiquitous Computing",
  "Digitale Systeme": "Digital Systems",
  "Sprachkenntnisse": "Languages",
  "Deutsch": "German",
  "Englisch": "English",
  "Französisch": "French",
  "Spanisch": "Spanish",
  
  // Verschiedenes
  "Kern-Features": "Core Features",
  "Mein Beitrag": "My Contribution",
  "MVP Feature-Set": "MVP Feature Set",
  "Architektur": "Architecture",
  "AI & Planung": "AI & Planning",
  "Persistierung": "Persistence",
  "Deployment": "Deployment",
  
  // CV Preview - Praxiserfahrung
  "Werkstudent, Hyperstone GmbH": "Working Student, Hyperstone GmbH",
  "Praktikum, Hyperstone GmbH": "Internship, Hyperstone GmbH",
  "03/2023 bis 02/2024, Konstanz": "03/2023 to 02/2024, Konstanz",
  "09/2022 bis 02/2023, Konstanz": "09/2022 to 02/2023, Konstanz",
  "Schwerpunkt auf RAID Simulation und Konzeptüberarbeitung. Dazu habe ich die Firmware Simulation unterstützt und verschiedene RAID Konfigurationen implementiert, um Leistungsunterschiede messbar zu machen.": "Focus on RAID simulation and concept revision. I supported firmware simulation and implemented various RAID configurations to measure performance differences.",
  "Einstieg in das Firmware Umfeld. Fokus auf nachvollziehbares Testen, Dokumentation und sauberes Vorgehen im Team.": "Entry into the firmware field. Focus on comprehensible testing, documentation and clean teamwork.",
};

// Automatische Text-Übersetzung für nicht-markierte Elemente (bidirektional)
function autoTranslatePageContent() {
  const currentLang = localStorage.getItem("language") || "de";

  // Erstelle inverse Dictionary für DE->EN und EN->DE
  const deToEn = autoTranslationDict;
  const enToDe = {};
  
  for (const [de, en] of Object.entries(autoTranslationDict)) {
    enToDe[en] = de;
  }

  const translationMap = currentLang === "en" ? deToEn : enToDe;

  // Hilfsfunktion zum Durchsuchen und Ersetzen von TextNodes
  function traverseText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();
      if (text.length > 5 && translationMap[text]) {
        node.textContent = translationMap[text];
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Überspringe bestimmte Tags
      if (["SCRIPT", "STYLE", "NOSCRIPT", "META", "LINK", "TITLE"].includes(node.tagName)) {
        return;
      }

      // Überspringe Elemente mit data-i18n
      if (node.hasAttribute("data-i18n")) {
        return;
      }

      // Durchsuche Kinder
      Array.from(node.childNodes).forEach(traverseText);

      // Übersetze title attribute
      if (node.title && translationMap[node.title]) {
        node.title = translationMap[node.title];
      }

      // Übersetze placeholder
      if (node.placeholder && translationMap[node.placeholder]) {
        node.placeholder = translationMap[node.placeholder];
      }
    }
  }

  traverseText(document.body);
}

// ============================================
// Laufzeit: Theme, Sprache, Header, Menü, Reveal
// ============================================
function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

function getCurrentLanguage() {
  return safeGet("language") === "en" ? "en" : "de";
}

function setLanguage(lang) {
  safeSet("language", lang);
  updatePageLanguage();
  autoTranslatePageContent();
  updateLanguageButton();
}

function updatePageLanguage() {
  const lang = getCurrentLanguage();
  const t = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key || !t[key]) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && t[key]) el.placeholder = t[key];
  });
}

function updateLanguageButton() {
  const btn = document.getElementById("languageToggle");
  if (!btn) return;
  const lang = getCurrentLanguage();
  btn.textContent = lang === "de" ? "EN" : "DE";
  btn.setAttribute("aria-label", lang === "de" ? "Switch to English" : "Auf Deutsch wechseln");
}

function applyTheme() {
  const saved = safeGet("darkMode");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = saved === null ? prefersDark : saved === "true";
  document.body.classList.toggle("dark", dark);
}

function initControls() {
  const themeBtn = document.getElementById("darkModeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const dark = !document.body.classList.contains("dark");
      document.body.classList.toggle("dark", dark);
      safeSet("darkMode", String(dark));
    });
  }

  const langBtn = document.getElementById("languageToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(getCurrentLanguage() === "de" ? "en" : "de");
    });
  }

  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    const setOpen = open => {
      menu.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    };
    burger.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
    window.addEventListener("resize", () => { if (window.innerWidth > 760) setOpen(false); });
  }
}

function setActiveNavLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const isProject = current.startsWith("projekt-");
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a => {
    const href = a.getAttribute("href");
    const active = href === current || (isProject && href === "index.html");
    a.classList.toggle("active", active);
    if (active) a.setAttribute("aria-current", "page");
  });
}

function initReveal() {
  const items = document.querySelectorAll("[data-aos]");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  items.forEach(el => io.observe(el));
}

async function loadHeaderComponent() {
  const placeholder = document.getElementById("header-placeholder");
  if (!placeholder) return;
  try {
    const res = await fetch("_header.html");
    placeholder.outerHTML = await res.text();
  } catch (e) {
    console.warn("Header konnte nicht geladen werden:", e);
  }
}

document.documentElement.classList.add("js");
if (document.body) applyTheme();

document.addEventListener("DOMContentLoaded", async () => {
  applyTheme();
  initReveal();
  await loadHeaderComponent();
  initControls();
  setActiveNavLink();
  updatePageLanguage();
  autoTranslatePageContent();
  updateLanguageButton();
});
