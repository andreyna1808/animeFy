import React from "react";
import styled from "styled-components";
import Page from '../assets/img/animeFy.jpg'
import Sound from '../assets/img/narut.mp3'

const Fundo = styled.div`
    background: url(${Page})no-repeat center;
    display: flex;
    width: 100%;
    height: 100vh;
    background-size: cover;
    justify-content: right;
    @media(max-width: 800px) {
        background: black;
    }
`

export default class Home extends React.Component {

    render() {

        return (
            <Fundo>
                <audio src={Sound} autoPlay></audio>
            </Fundo>
        )
    }
}