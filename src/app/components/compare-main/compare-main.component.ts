import { Component, Input, input } from '@angular/core';
import { Product } from '../../Models/Product.model';
import { BankType, Institution } from '../../Models/Institution.model';
import { User } from '../../Models/user.model';

@Component({
  selector: 'app-compare-main',
  standalone: false,
  templateUrl: './compare-main.component.html',
  styleUrl: './compare-main.component.css'
})
export class CompareMainComponent {

   institutions: Institution[] = [];
   BankTypes: BankType[] = [];
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  selectedInstitutionId: number | null = null;
  selectedTypeId: number | null = null;
  selectedProductId: number | null = null;

  ngOnInit(): void {
    // Mocked Institutions
    this.institutions = [
      new Institution(1, 'Banques'),
      new Institution(2, 'Assurances'),
      new Institution(3, 'Micro Credit')
    ];


    this.BankTypes = [
      new BankType(1, 'Ethique'),
      new BankType(2, 'Conventionnelle')
    ];

    // Mocked Products
    this.allProducts = [
      new Product(1, 'Crédit de maison', 1),
      new Product(2, 'Crédit consommation', 1),
      new Product(3, 'Assurance auto', 2),
      new Product(4, 'Assurance santé', 2)
    ];
  }

  onInstitutionChange(): void {
    this.filteredProducts = this.allProducts.filter(p => p.institutionId === this.selectedInstitutionId);
    this.selectedProductId = null;
  }

 onSearch():void{
 this.filteredPrices = this.prices.filter(
      p => p.productId === this.selectedProductId
    );
 }

  prices = [
    { bank: { name: 'CIH Banque', logo: 'cih_logo.png' }, productId: 1, taux: 10, valeur: 10000, interet: 1500, total: 11500, CoutAssurance: 150 },
    { bank: { name: 'Banque Populaire', logo: 'bp_logo.png' }, productId: 1, taux: 12, valeur: 10000, interet: 1500, total: 11500, CoutAssurance: 150 },
    { bank: { name: 'Credit Agricole', logo: 'ca_logo.png' }, productId: 1, taux: 50, valeur: 10000, interet: 1500, total: 11500, CoutAssurance: 150 },
    { bank: { name: 'Banque Populaire', logo: 'bp_logo.png' }, productId: 2, taux: 50, valeur: 10000, interet: 1500, total: 11500, CoutAssurance: 150 },
    { bank: { name: 'CIH Banque', logo: 'cih_logo.png' }, productId: 3, taux: 50, valeur: 10000, interet: 1500, total: 11500, CoutAssurance: 150 },
  ];

  filteredPrices : any[] = [];

  user: User = new User();

}
