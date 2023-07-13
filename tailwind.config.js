/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-700": "#F5333F",
        "grey-50": "#F1F1F1",
        "grey-100": "#808080",
        "grey-200": "#E6E6E6",
        "grey-300": "#4D4D4D",
        "grey-900": "#012846"
      },
    },
  },
  plugins: [],
}
