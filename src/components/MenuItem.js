import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuItem.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, count}) => {
    const [indvCount, setCount] = useState(0);

    return (
        
      <div className="row menu-item">
          <div className="col-4 d-flex align-items-center justify-content-end">
            <img src={`./images/${imageName}`} alt={title } className="menu-image"/>
          </div>

          <div className="col-6">
            <div className="row food-name">
              {title}
            </div>

            <div className="row food-description">
              {description}
            </div>

            <div className="row d-flex align-items-end justify-content-center">
              <div className="col-auto price">
                ${price}
              </div>

              <div className="col-auto d-flex align-items-center ms-auto">
                <button onClick={() => setCount(prevCount => Math.max(0, prevCount - 1))}  className="quantity-button"> - </button>
                <span className="count mx-2">{indvCount}</span>
                <button onClick={() => setCount(indvCount + 1)} className="quantity-button"> + </button>
              </div>
            </div>


          </div>
      </div>



    );
};

export default MenuItem;
