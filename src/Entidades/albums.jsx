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
    TextInput, DateInput,
} from "react-admin";


  export const AlbumsList = () => (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="artist_id" reference="artists" />
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
        <ReferenceInput source="id" reference="artists" />
        <TextInput source="name" />
        <DateInput source="release_date"/>
      </SimpleForm>
    </Edit>
  );

export const AlbumsCreate = () => (
  <Create>
    <SimpleForm>
        <ReferenceInput source="artist_id" reference="artists" />
        <TextInput source="name" />
        <DateInput source="release_date"/>
    </SimpleForm>
  </Create>
);