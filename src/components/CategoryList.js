import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'


const CategoryList = (props) => {
  return (
    <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="category" />
        <EditButton basePath="/subcategories" />
        <DeleteButton basePath="/subcategories" />
    </Datagrid>
</List>
  )
}

export default CategoryList