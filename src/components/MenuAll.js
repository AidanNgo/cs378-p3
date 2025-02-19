import '../App.css';
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import BottomSummary from './BottomSummary';
import 'bootstrap/dist/css/bootstrap.min.css';



const MenuAll = ({menuItems}) => {

    const [totalCount, setTotalCount] = useState(0);

    return (
        <div>
        
        <div>
            <MenuHeader />
        </div>
        
        <div className="row" id="menu">
            {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
            {menuItems.map((item) => (

            <MenuItem 
            title={item.title}
            description={item.description} 
            imageName={item.imageName} 
            price={item.price}
            count ={item.count}
            />

            ))}
    
        </div>

        <div>
            <BottomSummary 
            totalCount={totalCount}
            />
        </div>

        </div>
    );
}

export default MenuAll;