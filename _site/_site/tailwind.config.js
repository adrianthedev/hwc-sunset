// Please read the Theming.md file on Tweaking colors before applying changes to this file.
module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
      },
      colors: {
        smoke: 'rgba(0, 0, 0, 0.5)',
        'hero-black': '#3D3D3D',
        'cat-education': '#F82B2B',
        'cat-social-justice': '#FD813B',
        'cat-business-directory': '#8921DC',
        'cat-health': '#2987DE',
        'cat-wealth': '#12CFA1',
      },
      maxHeight: {
        '400px': '400px',
      },
      minHeight: {
        '400px': '400px',
      },
      boxShadow: {
        users: '0px 3px 16px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        xl: '1.5rem',
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: '"Lora", Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    width: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

