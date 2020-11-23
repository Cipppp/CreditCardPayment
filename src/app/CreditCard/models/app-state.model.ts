import { CreditCard } from './credit-card.model';

export interface AppState {
    readonly cards: Array<CreditCard>;
}