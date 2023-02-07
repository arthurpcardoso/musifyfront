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
  
  export const AlbumsList = () => (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="artist_id" reference="artist" />
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="release_date" />
        <EditButton />  
      </Datagrid>
    </List>
  );
  
  export const AlbumsEdit = () => (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="artist_id" reference="albums" />
        <TextInput source="name" />
        <TextInput source="release_date"/>
        <TextInput source="artist_id"/>
      </SimpleForm>
    </Edit>
  );

export const AlbumsCreate = () => (
  <Create>
    <SimpleForm>
        <ReferenceInput source="artist_id" reference="albums" />
        <TextInput source="name" />
        <TextInput source="release_date"/>
        <TextInput source="artist_id"/>
    </SimpleForm>
  </Create>
);