# Portfolio Website - Marcel Richter

## 🎯 Überblick

Dies ist ein vollständig refactortes, statisches Portfolio. Es verwendet nur **HTML, CSS und Vanilla JavaScript** ohne Frameworks.

### ✨ Hauptfeatures

- **Multi-Page Website** mit klarer Navigation
- **Dark Mode** (persistent über localStorage)
- **Sprachumschalter** Deutsch/Englisch (persistent über localStorage)
- **Mobile-First** responsive Design
- **Accessibility** mit ARIA-Labels und Focus Styles
- **3 Projekt-Detailseiten** mit einheitlichem Template
- **Kontaktformular** mit FormSubmit.co Integration
- **Zusätzliche Seiten**: CV, Impressum, Datenschutz

---

## 📁 Dateistruktur

```
/
├── index.html              # Startseite (Landing Page)
├── projekt-iot.html        # IoT Sensor Projekt Detail
├── projekt-embedded.html   # Embedded Systems Projekt Detail
├── projekt-can.html        # CAN Bus Projekt Detail
├── cv.html                 # Lebenslauf Seite
├── kontakt.html            # Kontaktseite mit Formular
├── danke.html              # Danke-Seite nach Formular-Submit
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
├── style.css               # Alle Styles mit CSS Variablen
├── script.js               # JavaScript (Dark Mode, Sprache, Navigation)
└── assets/                 # Bilder und PDF
    ├── profilbild.jpg
    ├── profilbild@2x.jpg
    └── CV_Marcel_Richter.pdf (Platzhalter)
```

---

## 🌐 Navigation

Alle Seiten haben eine einheitliche Navigation im Header:
- **Start** → index.html
- **Projekte** → index.html#projects (Anker-Link)
- **Lebenslauf** → cv.html
- **Kontakt** → kontakt.html
- **LinkedIn** → Externer Link zu deinem Profil

Die Navigation zeigt automatisch die aktive Seite an (`active` Klasse).

---

## 🎨 Dark Mode

- Toggle-Button in der Navigation
- Speichert Präferenz in `localStorage`
- Funktioniert über alle Seiten hinweg

---

## 🌍 Sprachumschalter

- Toggle-Button neben Dark Mode
- Wechselt zwischen Deutsch (de) und Englisch (en)
- Speichert Präferenz in `localStorage`
- Verwendet `data-i18n` Attribute für Übersetzungen
- Alle Texte sind in `script.js` im `translations` Objekt definiert

### Texte hinzufügen/ändern

Öffne `script.js` und editiere das `translations` Objekt:

```javascript
const translations = {
  de: {
    navHome: "Start",
    // ... weitere deutsche Texte
  },
  en: {
    navHome: "Home",
    // ... weitere englische Texte
  }
};
```

Im HTML nutzt du dann:
```html
<a href="index.html" data-i18n="navHome">Start</a>
```

---

## 📧 Kontaktformular

Das Kontaktformular verwendet **FormSubmit.co**.

### Wichtige Einstellungen:
- **E-Mail Adresse**: `marcel.richter.fn@gmx.de`
- **Redirect nach Erfolg**: `danke.html`
- **Honeypot** gegen Spam aktiviert
- **Captcha** deaktiviert (via `_captcha=false`)

### FormSubmit Link anpassen

Falls du die E-Mail ändern möchtest, passe in `kontakt.html` an:
```html
<form action="https://formsubmit.co/DEINE-EMAIL@HIER.de" method="POST">
```

Und passe auch den `_next` Redirect an:
```html
<input type="hidden" name="_next" value="https://DEINE-DOMAIN/danke.html">
```

---

## 🎯 Projekt-Detailseiten

Es gibt 3 Template-Seiten für Projekte:
1. **projekt-iot.html** - IoT Sensor Projekt
2. **projekt-embedded.html** - Embedded Systems Projekt
3. **projekt-can.html** - CAN Bus Kommunikation

### Struktur jeder Detailseite:
- **Ziel** - Beschreibung des Projekts
- **Mein Beitrag** - 3 Bullet Points
- **Tech Stack** - Badges mit verwendeten Technologien
- **Umsetzung** - Beschreibender Text
- **Screenshots** - Platzhalter für Bilder
- **Lessons Learned** - 2 Bullet Points
- **Links** - GitHub Repo und Demo (Platzhalter)
- **Navigation** - Zurück zu Projekten und Kontakt CTA

### Inhalte anpassen

Öffne die jeweilige `projekt-*.html` Datei und ersetze die Platzhalter-Texte mit deinen echten Projekten.

---

## 📄 CV Seite (cv.html)

Die CV-Seite enthält:
- **Ausbildung** - LMU München, Informatik (Master) und HTWG Konstanz, Angewandte Informatik (Bachelor)
- **Praxiserfahrung** - Platzhalter für Praxissemester
- **Skills** - Badges mit Technologien
- **PDF Download Button** - Verweist auf `assets/CV_Marcel_Richter.pdf` (Platzhalter)

### CV PDF hinzufügen

Erstelle eine PDF-Version deines CVs und speichere sie unter:
```
assets/CV_Marcel_Richter.pdf
```

---

## ⚖️ Impressum & Datenschutz

### Impressum (impressum.html)
- Enthält Platzhalter für deine Adresse
- **Wichtig**: Füge deine echte Adresse ein!
- Haftungsausschluss und externe Dienste werden aufgelistet

### Datenschutz (datenschutz.html)
- DSGVO-konforme Datenschutzerklärung Template
- Listet verwendete Dienste:
  - GitHub Pages (Hosting)
  - FormSubmit.co (Kontaktformular)
  - unpkg.com (AOS CDN)
  - LocalStorage (Dark Mode & Sprache)

**Hinweis**: Dies ist ein Template, kein Rechtsrat. Lasse es ggf. von jemandem prüfen.

---

## 🎨 Styling Anpassungen

Alle Farben, Abstände und Typografie sind über **CSS Custom Properties** (Variablen) definiert.

### Farben anpassen

Öffne `style.css` und editiere im `:root` Bereich:

```css
:root {
  --color-primary: #2c6e91;      /* Hauptfarbe */
  --color-primary-hover: #1d4e6d;
  --color-accent: #91c0dc;
  /* ... weitere Farben */
}
```

Für Dark Mode Farben:
```css
body.dark {
  --color-primary: #91c0dc;
  /* ... Dark Mode Farben */
}
```

---

## 🚀 Deployment

### GitHub Pages

1. Committe alle Änderungen:
```bash
git add .
git commit -m "Portfolio Refactoring abgeschlossen"
git push origin main
```

2. Gehe zu GitHub Repository Settings → Pages
3. Wähle Branch `main` und Ordner `/ (root)`
4. Speichern

Deine Website ist dann verfügbar unter:
```
https://ma161ric.github.io/Ma161ric/
```

---

## ✅ Checkliste vor dem Live-Gang

- [ ] Alte HTML-Dateien durch neue ersetzen (siehe oben)
- [ ] Profilbild in `assets/` hochladen (`profilbild.jpg`)
- [ ] CV PDF in `assets/` hochladen (`CV_Marcel_Richter.pdf`)
- [ ] Impressum: Echte Adresse eintragen
- [ ] Kontaktformular: E-Mail testen
- [ ] Projekt-Detailseiten: Platzhalter mit echten Inhalten füllen
- [ ] Screenshot-Platzhalter durch echte Bilder ersetzen
- [ ] GitHub Repo und Demo Links aktualisieren (oder als Platzhalter #)
- [ ] Alle Seiten im Browser testen (Desktop & Mobile)
- [ ] Dark Mode auf allen Seiten testen
- [ ] Sprachumschalter auf allen Seiten testen
- [ ] Kontaktformular Submit testen

---

## 📱 Browser Support

- Chrome/Edge (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Mobile Browser (iOS Safari, Chrome Mobile)

---

## 🐛 Häufige Probleme

### Dark Mode funktioniert nicht
- Prüfe ob `script.js` korrekt geladen wird
- Öffne Browser Console und schaue nach Fehlern

### Sprachumschalter zeigt keine Übersetzung
- Prüfe ob alle Elemente das `data-i18n` Attribut haben
- Prüfe ob der Key im `translations` Objekt existiert

### Kontaktformular sendet nicht
- Prüfe Internetverbindung
- Öffne Browser Console und schaue nach Fehlern
- Prüfe ob FormSubmit.co erreichbar ist

### Navigation "active" State funktioniert nicht
- Prüfe ob `script.js` korrekt geladen wird
- Prüfe ob die Dateinamen in Links exakt mit den Dateinamen übereinstimmen

---

## 📞 Support

Bei Fragen oder Problemen:
- E-Mail: marcel.richter.fn@gmx.de
- LinkedIn: https://www.linkedin.com/in/marcel-ric/

---

## 📜 Lizenz

Dieses Portfolio ist für persönliche Nutzung erstellt. Alle Rechte vorbehalten.

---

**Viel Erfolg mit deinem Portfolio! 🚀**
