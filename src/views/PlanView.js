import React from 'react';
import './plan.css';

import PlanHeader from './PlanHeader';
import PlanFooter from './PlanFooter';
import PlanItem from './PlanItem';
function calPerformance(planDetail, year){
    let performance = planDetail.performance[year];
    let avg = performance.reduce((total, month)=>{
        return {month:"avg", value:total.value+month.value}
    }).value/performance.length;
    return avg;
}
function PlainView(props) {
    console.log(props);
    if (props.plan.planDetail) {
        let {reveal, planDetail, year} = props.plan;
        console.log(reveal, planDetail, year);
        let ebaBalance = planDetail.balances.totalAccountBalance - planDetail.balances.loanBalance - planDetail.balances.forfeitureBalance;
        let avgPerformance = calPerformance(planDetail, year);
        let items = [
            { id: 1, title: 'Total Account Balance', value: planDetail.balances.totalAccountBalance, type: "M", up: true },
            { id: 2, title: 'Plan Performance', value: avgPerformance, type: "%", up: true },
            { id: 3, title: 'Loan Balance', value: planDetail.balances.loanBalance, type: "$", up: true },
            { id: 4, title: 'Forfeture Balance', value: planDetail.balances.forfeitureBalance, type: "$", up: true },
            { id: 5, title: 'EBA Balance', value: ebaBalance, type: "$", up: false },
        ];
        return (
            <div className="plan-view">
                <PlanHeader {...props} />
                <div className="plan-body">
                    {items.map(item =>
                        <PlanItem key={item.id} {...item} reveal={props.plan.reveal} />
                    )}
                </div>
                <PlanFooter />

            </div>
        );
    }
    return <div className="plan-view">Loading...</div>;
}

export default PlainView;