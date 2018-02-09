import {ReduceStore} from 'flux/utils';
import PlanActionType from './PlanActionType';
import PlanDispatcher from './PlanDispatcher';

class PlanStore extends ReduceStore{
    constructor(){
        super(PlanDispatcher);
    }

    findPlan(dataSource, planId){

    }

    getInitialState(){
        let state = {
            reveal: true,
            planDetail: null,
            year: 2017
        }
        
        return state;
    }

    reduce(state, action){
        let st = {};
        Object.assign(st, state);
        switch(action.type){
            case PlanActionType.REVEAL_PLAN:
                st.reveal = !st.reveal;
                break;
            case PlanActionType.DATA_PLAN:
                st.planDetail = action.payload;
                break;
        }

        return st;
    }
}

export default new PlanStore();