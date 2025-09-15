import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SalesFeature {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  expanded?: boolean;
}

@Component({
    selector: 'app-included',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './included.component.html',
    styleUrl: './included.component.scss'
  })
export class IncludedComponent {
  features: SalesFeature[] = [
    {
      title: 'Sales Routes & Planning',
      shortDescription: 'Salesync uses advanced Route Planning management including Outlet Proximity',
      fullDescription: 'Salesync uses advanced Route Planning management including Outlet Proximity, traffic optimization, visit frequency, and intelligent scheduling to maximize sales efficiency and reduce travel costs.',
      image: 'https://picsum.photos/id/1081/800/600',
      expanded: false
    },
    {
      title: 'Smart Order Management',
      shortDescription: 'Streamline sales orders with automated processing.',
      fullDescription: 'Streamline sales orders with automated processing, error reduction, real-time validation, and seamless integration with your ERP for smoother operations and faster deliveries.',
      image: 'https://picsum.photos/id/1011/800/600',
      expanded: false
    },
    {
      title: 'Performance Analytics',
      shortDescription: 'Track KPIs and sales performance in real-time.',
      fullDescription: 'Track KPIs and sales performance in real-time with detailed dashboards, predictive insights, and actionable recommendations to help teams meet and exceed sales targets.',
      image: 'https://picsum.photos/id/1021/800/600',
      expanded: false
    }
  ];
  toggleExpand(feature: SalesFeature) {
    feature.expanded = !feature.expanded;
  }

}
