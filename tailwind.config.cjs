module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-fixed-dim': '#c3c0ff',
        'error-container': '#ffdad6',
        'surface': '#f9f9ff',
        'secondary': '#5c5f61',
        'on-error': '#ffffff',
        'tertiary': '#3a495f',
        'surface-container-lowest': '#ffffff',
        'on-primary-container': '#dad7ff',
        'inverse-primary': '#c3c0ff',
        'on-secondary-container': '#626567',
        'on-primary': '#ffffff',
        'secondary-fixed': '#e0e3e5',
        'surface-container-highest': '#d8e3fb',
        'outline-variant': '#c7c4d8',
        'tertiary-fixed': '#d3e4fe',
        'outline': '#777587',
        'on-secondary': '#ffffff',
        'secondary-container': '#e0e3e5',
        'on-secondary-fixed': '#191c1e',
        'inverse-surface': '#263143',
        'on-tertiary-fixed': '#0b1c30',
        'on-error-container': '#93000a',
        'on-secondary-fixed-variant': '#444749',
        'error': '#ba1a1a',
        'on-surface-variant': '#464555',
        'on-tertiary-fixed-variant': '#38485d',
        'primary-fixed': '#e2dfff',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#516177',
        'tertiary-fixed-dim': '#b7c8e1',
        'surface-container-high': '#dee8ff',
        'on-tertiary-container': '#ccdcf7',
        'surface-variant': '#d8e3fb',
        'on-primary-fixed-variant': '#3323cc',
        'primary-container': '#4f46e5',
        'surface-dim': '#cfdaf2',
        'primary': '#3525cd',
        'inverse-on-surface': '#ecf1ff',
        'secondary-fixed-dim': '#c4c7c9',
        'on-background': '#111c2d',
        'surface-container': '#e7eeff',
        'background': '#f9f9ff',
        'surface-container-low': '#f0f3ff',
        'on-primary-fixed': '#0f0069',
        'on-surface': '#111c2d',
        'surface-tint': '#4d44e3',
        'surface-bright': '#f9f9ff'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        gutter: '1.5rem',
        lg: '1.5rem',
        '2xl': '3rem',
        sm: '0.5rem',
        xl: '2rem',
        'margin-mobile': '1rem',
        xs: '0.25rem',
        md: '1rem',
        'max-width-card': '400px'
      },
      maxWidth: {
        'max-width-card': '400px'
      },
      fontFamily: {
        'body-lg': ['Inter', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
        'display-lg-mobile': ['Inter', 'sans-serif'],
        'headline-sm': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'display-lg': ['Inter', 'sans-serif'],
        'headline-md': ['Inter', 'sans-serif']
      },
      fontSize: {
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0em', fontWeight: '400' }],
        'label-sm': ['11px', { lineHeight: '14px', letterSpacing: '0em', fontWeight: '500' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'display-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-md': ['14px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400' }],
        'display-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }]
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
