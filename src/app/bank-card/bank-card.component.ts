import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bank-card',
  standalone: false,
  templateUrl: './bank-card.component.html',
  styleUrl: './bank-card.component.css'
})
export class BankCardComponent {
  @Input() bank: any;
  // @Input() logoUrl: string = '';

}
