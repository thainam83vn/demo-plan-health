import React from 'react';

const PlanHeader = (props)=>{
    return (
        <div className="plan-header">
            <span>{props.plan.planDetail.planName} Plan Details</span>
            <span>
                <input type='checkbox' checked={props.plan.reveal} onChange={()=>props.onReveal()} />
                Reveal
            </span>
        </div>
    );
};

export default PlanHeader;