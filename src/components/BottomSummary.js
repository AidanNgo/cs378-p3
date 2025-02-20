import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './BottomSummary.css';

const BottomSummary = ({ totalPrice, clearAll, menuItems }) => {
    const [alertOn, setAlertOn] = useState(false);

    const openAlert = () => {
        setAlertOn(true);
    };

    const closeAlert = () => {
        setAlertOn(false);
    };

    return (
        <div>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-auto" id="subtotal">
                    Subtotal: ${totalPrice}
                </div>

                <button className="col-auto" id="order-button" onClick={openAlert}>
                    Order
                </button>

                <button className="col-auto" id="clear-all-button" onClick={clearAll}>
                    Clear All
                </button>
            </div>

            {alertOn && (
                <div className="order-alert-box">
                    {totalPrice !== 0 ? (
                        <div className="order-alert-text">
                            Order placed!
                        </div>
                    ) : (
                        <div className="order-alert-text">
                            No items in cart
                        </div>
                    )}

                    {/* Display items with count > 0 */}
                    {totalPrice !== 0 && (
                        <div>
                                {menuItems
                                    .filter(item => item.count > 0)
                                    .map(item => (
                                        <div key={item.id} className="order-alert-text">
                                            {item.title} - {item.count}
                                        </div>
                                    ))}
                        </div>
                    )}

                    <button className="ok-button order-alert-text" onClick={closeAlert}>
                        OK
                    </button>
                </div>
            )}
        </div>
    );
};

export default BottomSummary;
