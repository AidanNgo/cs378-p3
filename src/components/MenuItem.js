import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuItem.css';

const MenuItem = ({ id, title, description, imageName, price, count, setTotalPrice, updateMenuItemCount }) => {
    return (
        <div className="row menu-item">
            <div className="col-4 d-flex align-items-center justify-content-end">
                <img src={`./images/${imageName}`} alt={title} className="menu-image" />
            </div>

            <div className="col-6">
                <div className="row food-name">{title}</div>
                <div className="row food-description">{description}</div>

                <div className="row d-flex align-items-end justify-content-center">
                    <div className="col-auto price">${price}</div>

                    <div className="col-auto d-flex align-items-center ms-auto">
                        <button
                            onClick={() => {
                                updateMenuItemCount(id, -1, price * -1);
                            }}
                            className="quantity-button"
                        >
                            -
                        </button>
                        <span className="count mx-2">{count}</span>
                        <button
                            onClick={() => {
                                updateMenuItemCount(id, 1, price);
                            }}
                            className="quantity-button"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
