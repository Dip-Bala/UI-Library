# Component Library with Storybook

This project is a small **React + TypeScript + Vite** setup that showcases reusable UI components with **Storybook**.
Currently, it includes:

* A styled **Input** component with multiple variants (dark/light, placeholder, label, sizes `sm`, `md`, `lg`)
* A **Data Table** component with sortable and customizable rows

The project is structured to be clean, modular, and easy to extend with new components.

---

## 🚀 Features

* ⚡ Built with **Vite** for fast development
* 📘 **Storybook** for interactive component previews
* 🎨 Multiple component variants & states (sizes, themes, placeholders, labels, etc.)
* ✅ TypeScript for type safety
* 🔎 Example usage stories for quick visualization

---

## 📂 Project Structure

```
.
├── eslint.config.js          # ESLint config
├── index.html                # Root HTML
├── package.json              # Dependencies & scripts
├── public/                   # Static assets
├── src/
│   ├── App.tsx               # App entry
│   ├── components/           # Reusable UI components
│   │   ├── Data-Table/
│   │   │   └── DataTable.tsx
│   │   └── Input/
│   │       └── Input.tsx
│   ├── stories/              # Storybook stories
│   │   ├── DataTable.stories.ts
│   │   └── Input.stories.ts
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
└── README.md                 # Project docs
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

The app will be live at:
👉 `http://localhost:5173`

### 4. Run Storybook

```bash
npm run storybook
```

This opens Storybook for interactive component previews.

---

## 🌐 Deployment

* You can deploy the app using **Vercel** or **Netlify**.
* For Storybook previews, use **Chromatic** (recommended).

---

## 📸 Preview

Here’s what you’ll see in Storybook:

* **Input Component**

  * Light & Dark themes
  * Sizes (`sm`, `md`, `lg`)
  * Placeholder + Label support
  * Variants (outlined, filled, etc.)

* **Data Table Component**

  * Sortable rows
  * Customizable columns
  * Responsive design

---

## 🤝 Contributing

If you’d like to add new components or improve existing ones:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-component`)
3. Commit changes (`git commit -m "Added MyComponent"`)
4. Push and open a PR

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use it however you like.

---

Would you like me to also **add GIFs/screenshots placeholders** in the README (so you can just drop them later), or keep it text-only?