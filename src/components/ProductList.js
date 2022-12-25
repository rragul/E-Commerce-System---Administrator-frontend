import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const ProductList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <TextField source="subCategory" />
            <EditButton basePath="/products" />
            <DeleteButton basePath="/products" />
        </Datagrid>
    </List>
  )
}

export default ProductList;