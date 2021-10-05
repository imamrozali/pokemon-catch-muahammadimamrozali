import { injectGlobal } from '@emotion/css'

injectGlobal`

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;800&display=swap");

html,
body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #3d405c;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    font-family: inherit;
}
`