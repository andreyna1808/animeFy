import React from "react";
import { Link } from 'react-router-dom'

import { Butt, Margin, ContainerLogin, ContLogin } from "../components/syledAll";;

export default class Login extends React.Component {
    state = {
        name: '',
        email: '',
    }

    onInputName = (event) => {
        this.setState({ name: event.target.value });
    };
    onInputEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    render() {

        return (
            <ContLogin>
                <ContainerLogin>
                    <h1> Faça seu Login</h1>
                    <Margin required value={this.state.name}
                        onChange={this.onInputName} type='text' placeholder="Nome"></Margin>
                    <Margin required value={this.state.email}
                        onChange={this.onInputEmail} type='email' placeholder="Email"></Margin>
                    <Link to="/animefy"><Butt>Fazer Login</Butt></Link>
                </ContainerLogin>
            </ContLogin>
        )
    }
}