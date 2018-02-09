import PlanDispatcher from "./PlanDispatcher";
import PlanActionType from "./PlanActionType";

const Actions = {
    onReveal: ()=>{
        PlanDispatcher.dispatch({
            type:PlanActionType.REVEAL_PLAN
        })
    },
    onData:(data)=>{
        PlanDispatcher.dispatch({
            type:PlanActionType.DATA_PLAN, payload:data
        });
    }
}

export default Actions;