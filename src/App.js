// in src/App.tsx
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

import { dataProvider } from "./api/dataprovider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="albums" list={ListGuesser} edit={EditGuesser} />
    <Resource name="artists" list={ListGuesser} edit={EditGuesser} />
    <Resource name="music" list={ListGuesser} edit={EditGuesser} /> 
  </Admin>
);

export default App;
