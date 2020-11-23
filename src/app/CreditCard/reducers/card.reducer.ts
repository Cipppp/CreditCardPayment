import { CardAction, CardActionTypes } from '../actions/card.actions';
import { CreditCard } from '../models/credit-card.model';


const initialState: Array<CreditCard> = [
    {
        card_number: '6231-8219-2853-1942',
        card_holder: 'John Smith',
        expiration_date: '11/23',
        security_code: '213',
        amount: 2230
    }
];

export function CardReducer(state: Array<CreditCard> = initialState, action: CardAction) {
    switch(action.type) {
        case CardActionTypes.ADD_CARD:
            return [...state, action.payload];
        default:
            return state;
    }
}