import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
}

html {
    height: 100%;
    font-size: 1px;
}

body, #app {
    height: 100%;
    width: 100%;
}
body > * {
    // vertical-align: middle;
}

#app {
  background-color: #03a9f4;
}

  @keyframes sunset {
    0% {
      fill: #ffee58;
      r: 65;
    }
    100% {
      fill: #e0e0e0;
      r: 55;
    }
  }
  @keyframes sunset-detail {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes sunrise {
    0% {
      fill: #e0e0e0;
      r: 55;
    }
    100% {
      fill: #ffee58;
      r: 65;
    }
  }
  @keyframes sunrise-detail {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sky-sunset {
    0% {
      background: #03a9f4;
      fill: #03a9f4;
    }
    100% {
      background: #01579b;
      fill: #01579b;
    }
  }
  @keyframes sky-sunrise {
    0% {
      background: #01579b;
      fill: #01579b;
    }
    100% {
      background: #03a9f4;
      fill: #03a9f4;
    }
  }
  @keyframes skyline-sunset {
    0% {
      fill: #01579b;
      stroke: #01579b;
    }
    100% {
      fill: #263238;
      stroke: #263238;
    }
  }
  @keyframes skyline-sunrise {
    0% {
      fill: #263238;
      stroke: #263238;
    }
    100% {
      fill: #01579b;
      stroke: #01579b;
    }
  }
`;
