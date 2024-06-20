
export interface IStateValid {
    valid : boolean
}
const intialState: IStateValid = {
    valid: false
} 
export interface IActionValid {
    type: string,
    data: IStateValid
}

export default function(state = intialState, action:IActionValid){
    switch (action.type) {
        case "SET_VALID":
            return {...state,...action.data}
        default: 
            return state
        }
    
}