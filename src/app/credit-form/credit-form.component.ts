import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../CreditCard/models/app-state.model';
import { Observable } from 'rxjs';
import { AddCardAction } from '../CreditCard/actions/card.actions';
import { CreditCard } from '../CreditCard/models/credit-card.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {

  myForm: FormGroup;

  success = false;

  creditCard: Observable<Array<CreditCard>>;
  newCreditCard: CreditCard = { 
    card_number: '',
    card_holder: '',
    expiration_date: null,
    security_code: '',
    amount: null
  }

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creditCard = this.store.select(store => store.cards);

    this.myForm = this.fb.group({
      cardN: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{4}\-[0-9]{4}\-[0-9]{4}$')
      ]],
      cardH: ['',[
        Validators.required, 
        Validators.pattern('(?<! )[-a-zA-Z\' ]{2,26}')
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      cardED: ['',[
        Validators.required,
        Validators.pattern('^[0-9]{2}\/[0-9]{2}')
        // 10/24
      ]],
      securityCode: ['',[
        Validators.pattern('([0-9]{3})?')
      ]],
      cardAmount: ['',[
        Validators.required,
        Validators.pattern('[1-9]([0-9]+)?')
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    });
  }

  get cardN() {
    return this.myForm.get('cardN');
  }

  get cardH() {
    return this.myForm.get('cardH');
  }

  get cardED() {
    return this.myForm.get('cardED');
  }
  
  get securityCode() {
    return this.myForm.get('securityCode');
  }
  
  get cardAmount() {
    return this.myForm.get('cardAmount');
  }

  get agree() {
    return this.myForm.get('agree');
  }

  addCard() {
    this.success = true;
    this.store.dispatch(new AddCardAction(this.newCreditCard));
    this.newCreditCard = { 
      card_number: '',
      card_holder: '',
      expiration_date: null,
      security_code: '',
      amount: null
    }

  }

  
}
