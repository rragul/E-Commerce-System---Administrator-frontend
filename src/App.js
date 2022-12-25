import React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-simple-rest';
import ProductList from './components/ProductList.js';
import CategoryList from './components/CategoryList.js';


const App = () => {
  return (
    <Admin dataProvider={jsonServerProvider('http://localhost:3000')}>
      <Resource name="products" list={ProductList} />
      <Resource name="subcategories" list={CategoryList} />
    </Admin>
  );
}


export default App;
