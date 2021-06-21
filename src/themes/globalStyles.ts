import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        color: ${(props: any) => props.theme.body.textColor};
        background-color: ${(props: any) => props.theme.body.backgroundColor}
    }

    a {
        color: ${(props: any) => props.theme.a.textColor};
    }

    .breadcrumb {
        background-color: ${(props: any) => props.theme.breadcrumb.backgroundColor};
    }

    .breadcrumb-item.active {
        color: ${(props: any) => props.theme.breadcrumb.active.textColor};
    }

    .breadcrumb-item+.breadcrumb-item::before {
        color: ${(props: any) => props.theme.breadcrumb.active.textColor};
    }

    .card {
        background-color: ${(props: any) => props.theme.card.backgroundColor};
    }
`;
