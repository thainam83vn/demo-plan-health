import {Container} from 'flux/utils';
import PlanStore from "../data/PlanStore";
import PlanView from '../views/PlanView';
import PlanActions from '../data/PlanActions';

function getStores(){
    return [PlanStore];
}

function getState(){
    return {
        plan: PlanStore.getState(),

        onReveal: PlanActions.onReveal
    };
}

export default Container.createFunctional(PlanView, getStores, getState);