import { initialState } from "./store";

export const reducers = (state = initialState, action: any) => {
    const newState ={...state}
    switch(action.type) {
        case 'INSERT_PRESIDENT':
            return{
                ...newState, 
                presidentObject: action.payload.presidentObject,
                hasPresident: true    
            };
        default:
            return newState

    }
}