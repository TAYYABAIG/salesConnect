import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { AdvanceFeatureComponent } from "./components/advance-feature/advance-feature.component";
import { FooterComponent } from './components/footer/footer.component';
import { TprComponent } from './components/tpr/tpr.component';
import { IncludedComponent } from "./components/included/included.component";
import { ReportManagmentComponent } from './components/report-managment/report-managment.component';
import { ClientComponent } from "./components/client/client.component";
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, AdvanceFeatureComponent, FooterComponent, TprComponent, IncludedComponent, ReportManagmentComponent, ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'salesConnect';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,     // animation duration (ms)
      easing: 'ease-in-out', // easing
      once: false,        // whether animation should happen only once
      mirror: true        // animate when scrolling back
    });
  }

  ngAfterViewInit(): void {
    // Refresh after Angular renders view
    setTimeout(() => AOS.refresh(), 100);
  }
}
