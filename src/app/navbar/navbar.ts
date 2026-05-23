import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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
