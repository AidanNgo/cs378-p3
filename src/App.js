import './App.css';
// import React, { useState } from 'react';
import MenuAll from './components/MenuAll';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings, dumpling sauce',
    imageName: 'gyoza.png',
    price: 6,
    count: 0,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls, soy sauce',
    imageName: 'sushi.png',
    price: 7,
    count: 0,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup, pork broth',
    imageName: 'ramen.png',
    price: 8,
    count: 0,
  },
  {
    id: 4,
    title: 'Sashimi',
    description: 'Japanese raw fish, soy sauce',
    imageName: 'sashimi.png',
    price: 9,
    count: 0,
  },
  {
    id: 5,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork, pickled radish',
    imageName: 'katsu-curry.png',
    price: 10,
    count: 0,
  }
];

function App() {
  return (
    <div>
      <MenuAll
      menuItems={menuItems}
      />
    </div>
  );
}

export default App;
