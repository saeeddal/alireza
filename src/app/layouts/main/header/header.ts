import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  language = signal<'fa' | 'en'>('en');
  onLanguageChange(event: Event) {
    const selectedLang = (event.target as HTMLSelectElement).value as
      | 'fa'
      | 'en';
    this.language.set(selectedLang);

    // You can now use selectedLang to update a signal, service, or anything else
  }

  exitApp() {
    console.log('Exit clicked');
    // TODO: trigger logout or navigation
  }
}
