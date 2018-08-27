import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

html {
    height: 100%;
    font-size: 1px;
}

body {
    display: flex;
    background: #9c6da4;
    align-items: center;
    justify-content: center;
    min-height: 100%;
}
body > * {
    vertical-align: middle;
}
`;
