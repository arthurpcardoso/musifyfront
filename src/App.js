// in src/App.tsx
import { Admin, Resource} from "react-admin";

import {customDataProvider} from "./api/customprovider";
import {AlbumsList, AlbumsEdit, AlbumsCreate} from "./Entidades/albums";
import {ArtistsList, ArtistsEdit, ArtistsCreate} from "./Entidades/artists";
import {MusicsCreate, MusicsEdit, MusicsList} from "./Entidades/musics";
import {Album, LibraryMusic, SpatialAudioOff} from "@mui/icons-material";


const App = () => (
  <Admin dataProvider={customDataProvider}>
    <Resource name="artists" list={ArtistsList} edit={ArtistsEdit} create={ArtistsCreate} recordRepresentation="name" icon={SpatialAudioOff} />
    <Resource name="albums" list={AlbumsList} edit={AlbumsEdit} create={AlbumsCreate} recordRepresentation="name" icon={Album} />
    <Resource name="musics" list={MusicsList} edit={MusicsEdit} create={MusicsCreate} icon={LibraryMusic} />
  </Admin>
);

export default App;
