import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    DateField,
    Create,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
  } from "react-admin";
  
  export const MusicList = () => (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="artist_id" reference="artist" />
        <ReferenceField source="album_id" reference="albums" />
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="lyrics" />
        <TextField source="language" />
        <EditButton />  
      </Datagrid>
    </List>
  );
  
  export const MusicEdit = () => (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="artist_id" reference="artist" />
        <ReferenceInput source="album_id" reference="albums" />
        <TextInput source="name" />
        <TextInput source="lyrics" />
        <TextInput source="language" />
      </SimpleForm>
    </Edit>
  );

export const MusicCreate = () => (
  <Create>
    <SimpleForm>
        <ReferenceInput source="artist_id" reference="artist" />
        <ReferenceInput source="album_id" reference="albums" />
        <TextInput source="name" />
        <TextInput source="lyrics" />
        <TextInput source="language" />
    </SimpleForm>
  </Create>
);