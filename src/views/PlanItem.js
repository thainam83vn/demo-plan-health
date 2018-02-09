import React from 'react';
import NumberFormat from 'react-number-format';
const PlanItem = (props) => {
    let valueView = null;
    let v = 0;
    switch (props.type) {
        case "M":
            if (props.reveal) {
                v = Math.round(props.value / 10000) / 100;
                valueView = <div><NumberFormat value={v} displayType={'text'} thousandSeparator={true} prefix={'$'} />M</div>;
            } else {
                valueView = <div>$XXX M</div>;
            }
            break;
        case "$":
            if (props.reveal) {
                v = Math.round(props.value);
                valueView = <div><NumberFormat value={v} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
            } else {
                valueView = <div>$ XXX,XXX</div>
            }
            break;
        case "%":
            if (props.reveal) {
                v = Math.round(props.value * 10000) / 100;
                valueView = <div>{v}%</div>;
            } else {
                valueView = <div>XX.XX%</div>;
            }
            break;
    }
    return (
        <div className="plan-item">
            <div>{props.title}</div>
            <div>
                {valueView}
                {props.up ? <i className="fas fa-arrow-up plan-item-up"></i> : <i className="fas fa-arrow-down plan-item-down"></i>}
            </div>
        </div>
    );
};

export default PlanItem;