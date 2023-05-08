import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    /* --font-main: 'Roboto','Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif; */

    --font-main: 'Roboto', sans-serif;
    --font-secondary: 'Roboto', sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --white: #fff;
    --black: #1d1d1f;
    --gray: #6e6e73;
    --primary: #ed1d24;

    // Other
    --max-width: 90%;
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;
