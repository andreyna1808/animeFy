import React from "react";
import axios from "axios";

import { GetAllPlaylist, Headers } from "../constants/urlApi";
import { ButSearch, ButtDelete, ContAnyme, ContAnymes, ContAnymess, InputSearch, List, ListAnyme, ListAnymes, Row, SearchAnim, SearchAnime, TittleH2 } from "../components/syledAll";

export class IdPlaylist extends React.Component {

    //ENVIAR DADOS PARA O ARRAY E GURDAR URL
    state = {
        playlists: [],
    }
    componentDidMount() {
        this.getAllPlaylists();
    }
    //PODER DIGITAR NO INPUT
    onPlaylistTextChange = (event) => {
        this.setState({ playlistInput: event.target.value });
    };

    //CRIAR UMA NOVA PLAYLIST
    createPlaylist = () => {
        const body = {
            name: this.state.playlistInput
        };
        axios
            .post(GetAllPlaylist, body, Headers)
            .then((res) => {
                this.setState({ playlistInput: "" });
                this.getAllPlaylists();
            })
            .catch((err) => {
                this.setState({ playlistInput: "" });
            });
    };

    //DELETAR PLAYLIST SELECIONADA
    deletePlaylist = (id) => {
        const playlist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + id
        axios.delete(playlist, Headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list });
                this.getAllPlaylists();
            })
            .catch((err) => {
                console.log('Erro no get', err.res);
            });
    }

    //COLETAR AS INFORMAÇÕES REQUERIDAS DA API
    getAllPlaylists = () => {
        axios
            .get(GetAllPlaylist, Headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list });
            })
            .catch((err) => {
                console.log('Erro no get', err.res);
            });
    };

    render() {
        //FAZ TODA A LOGICA DE PEGAR O ID, MUDAR DE PAGINA E DELETAR BOTÃO
        const playlistComponents = this.state.playlists.map((play) => {
            return <Row>
                <div onClick={() => this.props.selectId(play.id)}>
                    <List key={play.id}>{play.name}</List>
                </div>
                <ButtDelete onClick={() => this.deletePlaylist(play.id)}>Delete</ButtDelete>
            </Row>
        });

        return (
            <ContAnyme>
                <ContAnymess>
                    <SearchAnime>
                        <TittleH2>Adicione uma nova playlist:</TittleH2>
                        <InputSearch
                            value={this.state.playlistInput}
                            onChange={this.onPlaylistTextChange}
                            placeholder="Criar nova Playlist"
                        />
                        <ButSearch onClick={this.createPlaylist}>Enviar</ButSearch>
                    </SearchAnime>

                    <ListAnymes>
                        <h3>Sua(s) lista(s) de playlists:</h3>
                        {playlistComponents}
                    </ListAnymes>
                </ContAnymess>
            </ContAnyme>
        )
    }
}