import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  font-family: 'poppins', arial;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
}
section {
  padding: 4em 2em;
  text-align: center;
}`
