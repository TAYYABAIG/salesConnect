import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // 🚀 use signal instead of boolean
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  navLinks = [
    { name: 'Home', href: 'home', current: true },
    { name: 'Features', href: 'features', current: false },
    { name: 'Reports', href: 'reports', current: false },
    { name: 'About Us', href: 'about', current: false },
    { name: 'Contact Us', href: 'contact', current: false },
  ];


}
