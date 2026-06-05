# 💸 RecoverFlow

An AI-native, high-conversion Micro-SaaS mobile application designed for small businesses, creators, and indie startups to track, visualize, and automatically recover failed subscription payments.

Standard enterprise billing platforms are bloated and complex. **RecoverFlow** does exactly one thing perfectly: it Plugs revenue leaks by automating empathetic, high-conversion dunning workflows via mobile-first channels (WhatsApp/SMS) and email.

---

## 🚀 Core Features

*   **Financial Leak Dashboard:** Real-time visibility into *Total Recovered Revenue*, *Active Leakage (Outstanding Bounced Payments)*, and overall *Recovery Rate %* via clean visual charts.
*   **Automated Dunning Generation:** Instantly creates conversational, respectful, and high-converting copy optimized for both short-form mobile alerts (WhatsApp/SMS) and professional emails.
*   **Frictionless "Magic Links":** Directs customers to a single, secure, self-service link to refresh their billing details without forcing them to navigate complex account portals.
*   **Dual-Mode Simulation Engine:** Built-in client-side state machine allows the app to run completely offline with dynamic, interactive mock data—no live API keys required to explore or demo the platform.

---

## 🛠️ Tech Stack & Architecture

This application is built as a lightweight, cross-platform mobile solution optimized for instant compilation and deployment inside modern sandboxes like Replit:

*   **Framework:** React Native (Expo) / NativeWind (Tailwind CSS) *[or Flutter depending on your environment]*
*   **State Management:** Local Stateful React Context / Component State Hooks
*   **Theme:** Premium Dark Mode UI / Fintech Aesthetic (Slate & Emerald Green)
*   **Integrations Ready:** Modular brackets included for secure upstream connections to **Stripe Webhooks**, **Twilio SMS API**, and **WhatsApp Business Cloud API**.

---

## 📂 Project Structure

```text
├── components/          # Reusable UI widgets (Metric Cards, Progress Bars, List Items)
├── screens/             # Primary Viewports
│   ├── Dashboard.js     # Analytics, Revenue tracking, Line/Bar charts
│   ├── Recoveries.js    # Interactive feed of incidents & Bottom Sheet Modals
│   └── Settings.js      # API Hub & configuration panel
├── constants/           # Mock Simulation Datasets & Color Palette Configs
├── App.js               # Navigation & Global State Architecture
└── README.md            # Project Documentation
