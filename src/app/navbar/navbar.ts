import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() activeSection = 'home';
  @Output() sectionChanged = new EventEmitter<string>();
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectSection(sectionId: string) {
    this.sectionChanged.emit(sectionId);
    this.isMenuOpen = false;
  }
}
