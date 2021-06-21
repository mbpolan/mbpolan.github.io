import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: {
      backgroundColor: string;
      textColor: string;
    };

    a: {
      textColor: string;
    }

    breadcrumb: {
      backgroundColor: string;
      active: {
        textColor: string;
      }
    };

    card: {
      backgroundColor: string;
    };
  }
}
