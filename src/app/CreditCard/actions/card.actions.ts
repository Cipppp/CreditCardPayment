import { Action } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.model';

export enum CardActionTypes {
    ADD_CARD = '[CARD] Add Card'
}

export class AddCardAction implements Action {
    readonly type = CardActionTypes.ADD_CARD

    constructor(public payload: CreditCard) {}
}

export type CardAction = AddCardAction;