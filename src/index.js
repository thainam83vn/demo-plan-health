import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PlanContainer from './containers/PlanContainer';
import PlanActions from './data/PlanActions';

fetch("/database/data.json")
    .then(res => res.json())
    .then((res) => {
        console.log("Data:", res);
        PlanActions.onData(res.plan);
    }).catch(err => {
        console.log("Error:", err);
    });

ReactDOM.render(<PlanContainer />, document.getElementById('root'));
registerServiceWorker();
