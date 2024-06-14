import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: {
      default: string;
      lightGreen: string;
      darkGreen: string;
      lightYellow: string;
      yellow: string;
      red: string;
    };
    width: {
      medium: string;
      large: string;
    };
    height: {
      medium: string;
      large: string;
    };
  }
}
