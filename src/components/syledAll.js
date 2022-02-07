import styled from "styled-components";

//DESIGNER O APP.JS
export const All = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const DesignerTop = styled.a `
    text-decoration: none;
    color: white;
    margin: 0 30px;
    text-decoration-color: black;
    &:hover {
        transition: 0.3s;
        text-shadow: 0 0 0.2em black, 0 0 0.2em white;
    }
    `
export const Nav = styled.nav `
    text-align: center;
    `

export const Head = styled.header `
    width: 100%;
    padding: 20px 0;
    background-color: black;
    opacity: 0.9;
    height: 50px;
    display: flex;
    justify-content: center;
    `

export const Foot = styled.footer `
    width: 100%;
    padding: 2px 0;
    height: 40px;
    background-color: black;
    opacity: 0.9;
    position: relative;
    bottom:0;
    left:0;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
`

export const SpanNone = styled.span `
    display: none;
`

// ---------- GERAIS -----------
export const Butt = styled.button `
margin: 5px;
padding: 0 90px;
height: 25px;
cursor: pointer;
&:hover {
  background-color: orangered;
  color: white;
  transition: 0.3s;
}
`

// ----------- HOME -------------
export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 3px auto;
    border: solid 2px black;
    padding: 7px;
    height: 100vh;
    align-items: center;
    `
export const Butto = styled.button `
    margin: 5px;
    height: 25px;
    cursor: pointer;
    &:hover {
    background-color: orangered;
    color: white;
    transition: 0.3s;
    }
`
export const ContainerSuperior = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 10px auto;
    align-items: center;
    `

// ------- LOGIN -----------
export const Margin = styled.input `
    margin: 5px;
    width: 40%;
    padding: 0 14px;
    height: 25px;
    `
export const ContainerLogin = styled.div `
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 1280px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    `
export const ContLogin = styled.div `
    width: 100%;
    text-align: center;
    height: 100vh;
    `

// ANYMEFYYY
export const ContAnyme = styled.div `
    width: 100%;
    display: flex;
    height: 100vh;
`
export const ContAnymes = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: column;
  }
`
export const SearchAnim = styled.div `
    margin: 10px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Tittle = styled.h1 `
    margin: 50px auto;
`
export const TittleH2 = styled.h2 `
    margin: 15px 0;
`
export const ButSearch = styled.button `
    height: 25px;
    width: 35%;
    margin: 3px;
    cursor: pointer;
    &:hover {
        background-color: blue;
        opacity: 0.5;
        color: white;
        border-radius: 70px;
        transition: 0.4s;
    }
    @media(min-width: 800px) {
        width: 60%;
        height: 28px;
  }
`
export const InputSearch = styled.input `
    height: 30px;
    width: 80%;
    padding: 3px 7px;
    margin: 40px auto;
    @media(min-width: 800px) {
        width: 60%;
        height: 28px;
        padding: 3px 7px;
        margin: 3px;
    }
`
export const ListAnyme = styled.div `
    margin: 10px 0;
`
export const List = styled.li `
    width: 100%;
    height: 40px;
    color: black;
    border: solid 2px blue;
    margin: 14px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #add8e6;
    }
    @media(min-width: 800px) {
        padding: 25px 90px;
        width: 400px;
        border: solid 2px blue;
        margin: 14px 7px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Width = styled.div `
    margin: 1px auto;
    padding: 0 50px;
    height: 470px;
    display: flex;
    flex-direction: column;
`

//PARTE DE ADICIONAR PLAYLIST

export const SearchAnime = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContAnymess = styled.div `
    width: 100%;
    height: 500px;
    margin: 20px 0;
    border: solid 2px black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
  }
  @media(min-width: 1800px) {
        display: flex;
        flex-direction: column;
        width: 50%;
        justify-content: center;
        align-items: center;
  }
`
export const ListAnymes = styled.div `
    margin: 20px 60px;
`
export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const ButtDelete = styled.button `
    height: 55px;
    margin: 0 3px;
    padding: 2px;
    cursor: pointer;
    &:hover{
        background-color: orangered;
        color: white;
        transition: 0.3s;
    }
`
export const Espace = styled.div`
    margin: 50px auto;
    text-align: center;
`