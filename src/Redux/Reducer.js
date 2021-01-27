import {  createForms } from "react-redux-form";
import { combineReducers } from "redux";
import * as forms from './Forms'
import * as actions from './actionTypes'
const picsReducer=(state={isLoading:false,photos:[]},action)=>{
switch (action.type) {
    case actions.PICSLOADING:
        return{
            ...state,
            isLoading:true,
            photos:[]
        }
        case actions.PICSLOADED:
        return{
            ...state,
            isLoading:false,
            photos:action.payload
        }
    default:
        return state;
}
}

export const Reducer =combineReducers({
    picsReducer:picsReducer,
    ...createForms({
        feedbackform:forms.FeedBackForm
    })
})


