import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @Output() navigate = new EventEmitter<string>();

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
