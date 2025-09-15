import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface TprType {
  number: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-tpr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tpr.component.html',
  styleUrl: './tpr.component.scss'
})
export class TprComponent {
  activeTab: 'quantity' | 'prompt' | 'nonreturnable' = 'quantity';

  tprGroups: Record<string, TprType[]> = {
    quantity: [
      { number: '01.', title: 'Basket TPRs', description: 'Discount on collective purchase of certain products in a single invoice' },
      { number: '02.', title: 'Multiple TPRs', description: 'Discount on collective purchase of certain products in a single invoice' },
      { number: '03.', title: 'Bulk Order TPRs', description: 'Discount on collective purchase of certain products in a single invoice' },
      { number: '04.', title: 'In Active SKU TPRs', description: 'Discount on collective purchase of certain products in a single invoice' },
      { number: '05.', title: 'Launch TPRs', description: 'Discount on collective purchase of certain products in a single invoice' },
      { number: '06.', title: 'Geographical TPRs', description: 'Discount on collective purchase of certain products in a single invoice' },
      { number: '07.', title: 'Budget Bond TPRs', description: 'Discount on collective purchase of certain products in a single invoice' },
    ],

    prompt: [
      { number: '01.', title: 'Early Payment Bonus', description: 'Special discount for invoices paid before the due date' },
      { number: '02.', title: 'Cash Settlement Rebate', description: 'Incentive provided for immediate cash payments' },
      { number: '03.', title: 'Advance Transfer Discount', description: 'Discount applied when payment is made in advance' },
      { number: '04.', title: 'Accelerated Invoice Discount', description: 'Reduced cost for settling invoices within a short window' },
      { number: '05.', title: 'Fast-Track Payment Incentive', description: 'Encouragement for partners making quick settlements' },
    ],

    nonreturnable: [
      { number: '01.', title: 'Final Sale Items', description: 'Discount applied to non-returnable inventory clearance items' },
      { number: '02.', title: 'Special Promo SKUs', description: 'Exclusive deals on products sold under no-return policy' },
      { number: '03.', title: 'Overstock Non-Returnables', description: 'Discounted rates for bulk clearance non-returnable stock' },
      { number: '04.', title: 'Seasonal Non-Returnables', description: 'Price reductions on seasonal items with no return policy' },
      { number: '05.', title: 'Limited Edition Non-Returnables', description: 'Special offers on unique products with non-return policy' },
    ],
  };


  setActive(tab: 'quantity' | 'prompt' | 'nonreturnable') {
    this.activeTab = tab;
  }

  get currentItems(): TprType[] {
    return this.tprGroups[this.activeTab];
  }
}
