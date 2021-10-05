import { injectGlobal } from '@emotion/css'

injectGlobal`

    * {
        box-sizing: border-box;
    }
    body {
        padding:0;
        height:100%;
        width:100%;
        margin:0;
        background-color: rgba(255, 255, 255, 0.6);
    }
    a{
        text-decoration: none;
    }
`