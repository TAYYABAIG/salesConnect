import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-report-managment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-managment.component.html',
  styleUrl: './report-managment.component.scss'
})
export class ReportManagmentComponent {
  reportItems: string[] = [
    "Primary Sale Report",
    "Target vs Achievement Secondary",
    "Master Distribution Details",
    "Zero Sale Report",
    "Month wise Secondary Sale",
    "Raw Sale Report",
    "Previous Day Activity"
  ];


  advanceReportItems: string[] = [
    "Sales hierarchy wise Reports",
    "Advance Target vs Achievement Reports",
    "SKU wise Sales Reports"
  ];

}
