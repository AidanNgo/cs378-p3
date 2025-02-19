import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const MenuHeader = () => {
    return( 

        <div>
            <div className="logo col-12 d-flex align-items-center justify-content-center">
                <img src={`./images/Titans-Cafe.png`} alt="cafe logo" id="cafe-icon"/>
            </div>

            <div className="col d-flex align-items-center justify-content-center" id="motto-one">
                The Best Food That Money Can Buy
            </div>

            <div className="col d-flex align-items-center justify-content-center" id="motto-two">
                Made Fresh Everyday!
            </div>

        </div>
        
        
        

    );
};

export default MenuHeader;
