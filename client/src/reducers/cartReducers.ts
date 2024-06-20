import { IProduct } from "../components/productItem";

export interface IState extends IProduct{
    quantity: number
}
const intialState: IState[] = [];

export interface IAction {
    type: string,
    id?: number,
    data?: IState
}

export default function (state = intialState, action:IAction) {
    switch (action.type) {
        case 'ADD_CART':
            if (action.data) {
                // neu khong co
                if (state.reduce((res, curr) => (res && curr.data.id !== action.data?.data.id), true))
                    return [...state, action.data]
                else
                    return state.map(curr => curr.data.id === action.data?.data.id ? { data: curr.data, quantity: curr.quantity + action.data.quantity } : curr)
                }
            return state
        case 'UPDATE_CART':
            if (action.data)
               return state.map(curr => curr.data.id === action.data?.data.id ? action.data : curr)
            return state
        case 'REMOVE_CART':
            return state.filter(curr => curr.data.id !== action.id)
        case 'CLEAR_CART':
            return []
        default:
            return state;
    }
}