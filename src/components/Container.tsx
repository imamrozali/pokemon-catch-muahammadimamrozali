import styled from "@emotion/styled"

export const Container = styled('div')`
font-family: 'Rubik', sans-serif;
align-items: start;
display: grid;
grid-gap: 5px;
grid-template-columns: repeat(auto-fit, 300px);
justify-content: center;
padding: 12px 12px 85px 12px;
@media (max-width: 280px) {
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, 125px);
}
@media (min-width: 281px) and (max-width: 320px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 140px);
}
@media (min-width: 321px) and (max-width: 360px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 160px);
}
@media (min-width: 361px) and (max-width: 376px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 170px);
}
@media (min-width: 377px) and (max-width: 480px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 175px);
}
@media (min-width: 481px) and (max-width: 540px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 165px);
}
@media (min-width: 541px) and (max-width: 768px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 177px);
}
@media (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 177px);
}
@media (min-width: 1025px) and (max-width: 1280px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 192px);
}
@media (min-width: 1281px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 200px);
}
`