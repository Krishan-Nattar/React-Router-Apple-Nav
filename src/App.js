import React from 'react';
import './App.css';
import NavWrapper from './NavWrapper';
import {Route} from 'react-router-dom';
import SubNav from './SubNav';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

function App() {

  const navList = ['Mac', 'iPad', 'iPhone', 'Watch', 'Music'];
  const subNavList = [
    {
      id:0,
      list: ['MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac pro',
    'Mac mini', 'Pro Display XDR']
    },
    {
      id:1,
      list: ['iPad Pro', 'iPad Air', 'iPad mini', 'Apple Pencil', 'Smart Keyboard']
    },
    {
      id:2,
      list: ['iPhone Xs', 'iPhone Xr', 'iPhone 8', 'iPhone 7', 'Apple Card',
    'AirPods']
    },
    {
      id:3,
      list: ['Apple Watch Series 4', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Series 3', 'watchOS',
    'Bands']
    },
    {
      id:4,
      list: ['Apple Music', 'iTunes', 'HomePod', 'AirPods', 'iPod touch',
    'Gift Cards']
    }
    
  ]

  return (
    <div className="App">
      <NavWrapper list={navList} />
      
    <Route path="/:id" component={(props)=><SubNav {...props} list={subNavList}/>} />
      
    </div>
  );
}

export default App;
