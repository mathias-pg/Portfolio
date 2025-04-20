module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adaptez les chemins selon votre projet
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require("daisyui"), // Ajoutez DaisyUI comme plugin
    ],
    daisyui: {
      themes: "all", // Activez tous les thèmes DaisyUI
    },
  };