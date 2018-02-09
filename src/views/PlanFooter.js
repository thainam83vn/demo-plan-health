import React from 'react';

const PlanFooter = (props)=>{
    return (
        <div className="plan-footer" onClick={()=>alert("View Plan Details")}>
            View Details
        </div>
    );
}

export default PlanFooter;