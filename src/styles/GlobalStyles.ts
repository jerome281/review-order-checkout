import { createGlobalStyle } from 'styled-components';
import { colors, typography } from './tokens';

export const GlobalStyle = createGlobalStyle`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          border: 0;
        }
  
        *:focus-visible {
          outline: 1px solid ${colors.systemFocus};
        }
  
        html {
          scroll-behavior: smooth;
        }
  
        html,
        body {
          height: 100%;
        }
  
        body {
          -webkit-font-smoothing: antialiased;
        }
  
        img,
        picture,
        video,
        canvas,
        svg {
          display: block;
          max-width: 100%;
        }
  
        input,
        button,
        textarea,
        select {
          font: inherit;
        }
  
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          overflow-wrap: break-word;
        }
  
        #root,
        #__next {
          isolation: isolate;
        }
  
        ul,
        ol {
          list-style: none;
        }
  
        a {
          color: currentColor;
        }
  
        a[href^='tel:'] {
          text-decoration: none;
        }
  
        address {
          font-style: normal;
        }
  
        button {
          cursor: pointer;
          background: none;
          color: currentColor;
        }
  
        // Selection
  
        ::selection {
        }
  
        // Body
  
        body {
          ${typography.bodyMedium};
          min-height: 100vh;
          width: 100%;
          min-width: 320px;
          z-index: 0;
        }
    `;

export default GlobalStyle;
