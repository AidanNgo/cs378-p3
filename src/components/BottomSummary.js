import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const BottomSummary = ({totalCount}) => {
    return( 

        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-auto">
                Subtotal: 
            </div>

            <button className="col-auto">
                Order
            </button>

            <button className="col-auto">
                Clear All
            </button>
        </div>
        
        

    );
};

export default BottomSummary;