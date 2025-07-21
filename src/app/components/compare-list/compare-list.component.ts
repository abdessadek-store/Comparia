import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compare-list',
  standalone: false,
  templateUrl: './compare-list.component.html',
  styleUrl: './compare-list.component.css'
})
export class CompareListComponent {
  services = [
    { id: 1, name: 'Ouverture de compte' },
    { id: 2, name: 'Demande de prêt' },
    { id: 3, name: 'Demande de carte de crédit' }
  ];

  prices = [
    { bank: { name: 'Banque A', logo: 'cih_logo.png' }, serviceId: 1, price: 10 },
    { bank: { name: 'Banque C', logo: 'bp_logo.png' }, serviceId: 1, price: 12 },
    { bank: { name: 'Banque D', logo: 'ca_logo.png' }, serviceId: 2, price: 50 },
  ];


  banks = [
    { name: 'Banque A', logo: 'assets/bank-a.png' },
    { name: 'Banque B', logo: 'assets/bank-b.png' },
    { name: 'Banque C', logo: 'assets/bank-c.png' }
  ];

  selectedService = this.services[0];
  @Input() filteredPrices: any[] = [];
  displayedColumns = ['bank', 'taux', 'valeur','interet','total','CoutAssurance'];
  ngOnInit() {
  }

  
}
