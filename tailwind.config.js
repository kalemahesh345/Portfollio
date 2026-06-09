/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: {
          900: '#0E0E11', // Obsidian Charcoal
          950: '#050507', // Deep Obsidian Black
        },
        primary: {
          50: '#FCF9F2',
          100: '#FAF3E3',
          200: '#F2E1C1',
          300: '#E5C396',
          400: '#D8A46B',
          500: '#C58B49', // Gold accent
          600: '#A67035',
          700: '#865725',
        },
        secondary: {
          50: '#FAF9F6',
          100: '#F4F1EA',
          200: '#E5E0D5',
          300: '#D0C7B7',
          400: '#B5A894',
          500: '#988A75', // Stone/Sand accent
          600: '#7E715D',
        },
        accent: {
          50: '#FAF7F2',
          100: '#F3ECE0',
          200: '#E6D7BE',
          300: '#D2BD95',
          400: '#BDA06E',
          500: '#A6834E', // Champagne accent
          600: '#8D6C3D',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'glowing': 'glowing 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowing: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'glass-glow': '0 8px 32px 0 rgba(20, 20, 25, 0.5)',
        'neon-purple': '0 0 15px rgba(197, 139, 73, 0.25)',
        'neon-cyan': '0 0 15px rgba(166, 131, 78, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
