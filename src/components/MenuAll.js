import '../App.css';
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import BottomSummary from './BottomSummary';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuAll = ({ menuItems: initialMenuItems }) => {
    const [menuItems, setMenuItems] = useState(initialMenuItems);
    const [totalPrice, setTotalPrice] = useState(0);

    const updateMenuItemCount = (itemId, countChange, priceChange) => {
        setMenuItems(prevMenuItems =>
            prevMenuItems.map(item =>
                item.id === itemId
                    ? { ...item, count: Math.max(0, item.count + countChange) }
                    : item
            )
        );
        setTotalPrice(prevTotal => Math.max(0, prevTotal + priceChange));
    };

    const clearAll = () => {
        setMenuItems(prevMenuItems =>
            prevMenuItems.map(item => ({ ...item, count: 0 }))
        );
        setTotalPrice(0);
    };

    return (
        <div>
            <MenuHeader />

            <div className="row" id="menu">
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        imageName={item.imageName}
                        price={item.price}
                        count={item.count}
                        setTotalPrice={setTotalPrice}
                        updateMenuItemCount={updateMenuItemCount}
                    />
                ))}
            </div>

            <BottomSummary 
                totalPrice={totalPrice}
                clearAll={clearAll}
                menuItems={menuItems}
            />

            {/* <h2>Updated Counts:</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>{item.title}: {item.count}</li>
                ))}
            </ul> */}

        </div>
    );
}

export default MenuAll;
