//GET DE VER A PLAYLIST PELO NOME, ID E QUANTIDADE DE PLAYLIST
export const GetAllPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

//GET PESQUISAR A PLAYLIST POR MEIO DO NOME OU PARTE DO NOME
export const SearchPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string"

//GET VER QUAIS MUSICAS ESTÃO NA PLAYLIST ESCOLHIDA PELO ID
export const GetPlaylistTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

//POST CRIAR A PLAYLIST APENAS O NOME 
export const CreatePlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

//POST ADICIONAR MUSICA NA PLAYLIST
export const AddTrack = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

//DELETE EXCLUIR PLAYLIST 
export const DeletPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"

//DELETE MUSICA DA PLAYLIST
export const DeleteTrack = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId"

//HEADERS OBRIGATORIO PARA ACESSAR 
export const Headers = {headers:{ Authorization: 'andreyna-carvalho-moreira'}}

//LINK OBRIGADORIO DO YOUTUBE + ID
