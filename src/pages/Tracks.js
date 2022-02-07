import React from "react";
import axios from "axios";
import YouTube from "react-youtube";

import { Headers } from "../constants/urlApi";
import { ButSearch, Butt, ButtDelete, ContAnyme, ContAnymes, InputSearch, List, ListAnyme, Row, SearchAnim, Tittle, TittleH2, Width } from "../components/syledAll";

export default class Tracks extends React.Component {
    state = {
        tracks: [],
        name: "",
        artist: "",
        url: "",
        recibeUrl: '',
        count: 0,
    };

    componentDidMount() {
        this.getPlaylistTracks();
    }

    //PERMITE OS DIGITAR NOS INPUTS
    onTrackName = (event) => {
        this.setState({ name: event.target.value });
    };
    onTrackArtist = (event) => {
        this.setState({ artist: event.target.value });
    }
    onTrackUrl = (event) => {
        this.setState({ url: event.target.value });
    };

    //PEGAR DADOS SOBRE AS MUSICAS DA PLAYLIST ESCOLHIDADE CONFORME O ID           
    getPlaylistTracks = () => {                                                                // deve ser em ${}
        const getTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + this.props.id + "/tracks"
        axios
            .get(getTracks, Headers)
            .then((res) => {
                console.log('componet', res.data);
                console.log('dados', res.data.result.tracks);
                this.setState({ tracks: res.data.result.tracks });
            })
            .catch((err) => {
                console.log('Erro no get', err.res);
            });
    };

    //ADICIONAR NOVA MUSICA PARA A PLAYLIST
    addTracks = () => {                                                                           // deve ser em ${}                 
        const addTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + this.props.id + "/tracks"
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url,
        };
        axios
            .post(addTracks, body, Headers)
            .then((res) => {
                this.setState({ name: "", artist: "", url: '' });
                this.getPlaylistTracks();
            })
            .catch((err) => {
                this.setState({ name: "", artist: "", url: '' });
                alert('Não adicionado')
            });
    };

    deleteTracks = (id) => {
        const deletTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + id
        axios.delete(deletTracks, Headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list });
                this.getAllPlaylists();
            })
            .catch((err) => {
                console.log('Erro no get', err.res);
            });
    }

    //CONFIGURAÇÃO PARA PODER RODAR VIDEO DO YOUTUBE
    movie = (receberUrl) => {
        this.setState({ recibeUrl: receberUrl.split("v=")[1].substring(0, 11) })
    }

    render() {
        //IMPRIME NA TELA O NOME E O NOME DO(A) ARTIST + PODER APERTAR E VER O VIDEO
        const trackComponents = this.state.tracks.map((play) => {
            return <Row>
                <div onClick={() => this.movie(play.url)}>
                    <List key={play.id}>Nome: {play.name} por: {play.artist}</List>
                </div>
                <ButtDelete onClick={() => this.deleteTracks(play.id)}>Delete</ButtDelete>
            </Row>
        });

        return (
            <ContAnymes>
                <SearchAnim>
                    <TittleH2>Adicione uma nova musica:</TittleH2>
                    <InputSearch
                        required
                        value={this.state.name}
                        placeholder="Nome da música"
                        onChange={this.onTrackName}
                    />
                    <InputSearch
                        required
                        value={this.state.artist}
                        onChange={this.onTrackArtist}
                        placeholder="Nome do artista"
                    />
                    <InputSearch
                        required
                        value={this.state.url}
                        onChange={this.onTrackUrl}
                        placeholder="Url da musica"
                    />
                    <ButSearch onClick={this.addTracks}>Enviar</ButSearch>

                    <TittleH2>Sua(s) lista(s) de tracks:</TittleH2>
                    {trackComponents}

                </SearchAnim>

                <ListAnyme>

                    <Width>
                        <YouTube videoId={this.state.recibeUrl || 'zLaqAN5zYU8'} />
                        <Butt onClick={() => this.props.irInfoTrack()}>Voltar para as Playlist</Butt>
                    </Width>

                </ListAnyme>

            </ContAnymes>
        )
    }
}