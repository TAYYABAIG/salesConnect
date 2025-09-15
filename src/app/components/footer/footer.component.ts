import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  navItems = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Features', link: '/features' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Contact', link: '/contact' },
  ];

  socialIcons = [
    { icon: 'fa-brands fa-facebook-f', link: 'https://www.facebook.com' },
    { icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com' },
    { icon: 'fa-solid fa-envelope', link: 'https://www.gmail.com' },
  ];

}
