import {
  darkGrey,
  medGrey,
  lightGrey,
  synthSunsetYellow,
  synthSunsetOrange,
  synthSunsetMagenta,
  synthSunsetPink,
  synthSunsetViolet,
  synthCyberLightBlue,
  synthCyberPink,
  synthCyberDarkBlue,
  synthCyberPurple,
  synthCyberPaleBlue,
  synthCyberBlack,
  anotherLightPink,
  themePurple,
  themeBackground,
  ambientLightBlue,
  shellDarkGrey,
  shellSpecularGrey,
  specularWhite,
} from './src/interactivity/resources/constants/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Greyscale
        'dark-grey':  darkGrey,
        'med-grey':   medGrey,
        'light-grey': lightGrey,

        // Synth Sunset palette
        'synth-yellow':  synthSunsetYellow,
        'synth-orange':  synthSunsetOrange,
        'synth-magenta': synthSunsetMagenta,
        'synth-pink':    synthSunsetPink,
        'synth-violet':  synthSunsetViolet,

        // Synth Cyber palette
        'cyber-light-blue': synthCyberLightBlue,
        'cyber-pink':       synthCyberPink,
        'cyber-dark-blue':  synthCyberDarkBlue,
        'cyber-purple':     synthCyberPurple,
        'cyber-pale-blue':  synthCyberPaleBlue,
        'cyber-black':      synthCyberBlack,

        // Misc
        'light-pink': anotherLightPink,

        // Theme
        'theme-purple':     themePurple,
        'theme-background': themeBackground,

        // Three.js scene colours (included for completeness, rarely needed in CSS)
        'ambient-light-blue':  ambientLightBlue,
        'shell-dark-grey':     shellDarkGrey,
        'shell-specular-grey': shellSpecularGrey,
        'specular-white':      specularWhite,
      },
    },
  },
};
