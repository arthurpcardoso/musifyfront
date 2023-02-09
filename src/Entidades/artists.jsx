import {
    List,
    Datagrid,
    TextField,
    DateField,
    Create,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    ImageField,
    ImageInput,
} from "react-admin";


export const ArtistsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="birth_date"/>
      <EditButton />  
    </Datagrid>
  </List>
);

export const ArtistsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <DateInput source="birth_date" />
      <ImageInput source="photo" label="Photo">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const ArtistsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <DateInput source="birth_date" />
    </SimpleForm>
  </Create>
);