import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Create,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
  } from "react-admin";


  export const MusicsList = () => (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="artist_id" reference="artists" />
        <ReferenceField source="album_id" reference="albums" />
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="lyrics" />
        <TextField source="language" />
        <EditButton />
      </Datagrid>
    </List>
  );
  
  export const MusicsEdit = () => (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="artist_id" reference="artists" />
        <ReferenceInput source="album_id" reference="albums" />
        <TextInput source="name" />
        <TextInput source="lyrics" />
        <TextInput source="language" />
      </SimpleForm>
    </Edit>
  );

export const MusicsCreate = () => (
  <Create>
    <SimpleForm>
        <ReferenceInput source="artist_id" reference="artists" />
        <ReferenceInput source="album_id" reference="albums" />
        <TextInput source="name" />
        <TextInput source="lyrics" />
        <TextInput source="language" />
    </SimpleForm>
  </Create>
);