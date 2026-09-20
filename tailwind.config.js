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
        'dark-grey': darkGrey,
        'med-grey': medGrey,
        'light-grey': lightGrey,

        // Synth Sunset palette
        'synth-sunset-yellow': synthSunsetYellow,
        'synth-sunset-orange': synthSunsetOrange,
        'synth-sunset-magenta': synthSunsetMagenta,
        'synth-sunset-pink': synthSunsetPink,
        'synth-sunset-violet': synthSunsetViolet,

        // Synth Cyber palette
        'synth-cyber-light-blue': synthCyberLightBlue,
        'synth-cyber-pink': synthCyberPink,
        'synth-cyber-dark-blue': synthCyberDarkBlue,
        'synth-cyber-purple': synthCyberPurple,
        'synth-cyber-pale-blue': synthCyberPaleBlue,
        'synth-cyber-black': synthCyberBlack,

        // Misc
        'another-light-pink': anotherLightPink,

        // Theme
        'theme-purple': themePurple,
        'theme-background': themeBackground,

        // Three.js scene colours (included for completeness, rarely needed in CSS)
        'ambient-light-blue': ambientLightBlue,
        'shell-dark-grey': shellDarkGrey,
        'shell-specular-grey': shellSpecularGrey,
        'specular-white': specularWhite,
      },
    },
  },
};
