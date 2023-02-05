import { createGlobalStyle } from "styled-components";

const StyleReset = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, textarea {
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        outline:0;
        box-sizing: border-box;
    }
    ol, ul, li {
        list-style: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    input {
        outline: none;
        border: none;
    }
    p {
        line-height: 1.75;
    }
    a {
        text-decoration: none;
        outline: none;
    }
`;

export default StyleReset;
