import React from "react";
import Sound from '../assets/img/dbz.mp3'
import styled from "styled-components";
import Page from '../assets/img/nuvem.gif'

const Container = styled.div`
    margin: 0 auto;
    text-align: center;
    background: url(${Page})no-repeat center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    justify-content: right;
`
const Text = styled.div`
    color: white;
    background-color: black;
    &:hover{
        background-color: orangered;
        opacity: 0.7;
        color: black;
    }

`

export default class Premium extends React.Component {

    render() {

        return (
            <Container>
                <Text>
                    <h1>Seja Premium!!</h1>
                    <audio src={Sound} autoPlay></audio>
                    <h3>Para os nossos assinantes garantimos acesso ilimitados, sem anúncios EE RESPONSIVO!!! </h3>
                </Text>
            </Container>
        )
    }
}