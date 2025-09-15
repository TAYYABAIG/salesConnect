import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  ngonInit() {
    AOS.init();
  }

}
