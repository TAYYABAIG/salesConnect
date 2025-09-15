import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-advance-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advance-feature.component.html',
  styleUrl: './advance-feature.component.scss'
})
export class AdvanceFeatureComponent {
  ngonInit() {
    AOS.init();
  }

  featureItems = [
    { icon: 'assets/icons/order-receiving.svg', title: 'Sales Order', subtitle: 'Management' },
    { icon: 'assets/icons/inventory.svg', title: 'Inventory', subtitle: 'Management' },
    { icon: 'assets/icons/card.svg', title: 'Account', subtitle: 'Management' },
    { icon: 'assets/icons/log.svg', title: 'Inventory', subtitle: 'Management' },
    { icon: 'assets/icons/order-receiving.svg', title: 'Sales Order', subtitle: 'Management' },
    { icon: 'assets/icons/inventory.svg', title: 'Inventory', subtitle: 'Management' },
    { icon: 'assets/icons/card.svg', title: 'Account', subtitle: 'Management' },
    { icon: 'assets/icons/log.svg', title: 'Inventory', subtitle: 'Management' }
  ];


}
