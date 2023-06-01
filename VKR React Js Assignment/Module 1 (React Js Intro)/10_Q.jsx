// How to Create a List View in React Js? 

// React Listview demo for creating a simple list of items. Add stripes for alternating background colors of list items. For React and Ionic React.

import React, { Component } from 'react';
const fruits = [
    'Use Array.Map',
    'Not a For Loop',
    'Give each item a unique key',
    'Avoid using array indices as keys'
  ];

  const styles = {
    
    backgroundColor: 'white',
    // background:'green',
    width: '250px',
    marginBottom: '10px',
    padding: '30px',
    color: 'black',
    boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
  };
class Map extends Component {

    
    render() {
        return (
            
                fruits.map(fruit =><div key={fruit} 
                style={styles}>{fruit}</div>)
      
            
        );
    }
}

export default Map;