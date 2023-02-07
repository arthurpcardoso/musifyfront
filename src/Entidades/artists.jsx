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
  
export const ArtistList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="birth_date"/>
      <EditButton />  
    </Datagrid>
  </List>
);

export const ArtistEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="birth_date" />
    </SimpleForm>
  </Edit>
);

export const ArtistCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="birth_date" />
    </SimpleForm>
  </Create>
);