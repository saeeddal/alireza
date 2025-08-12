import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);

  captcha = signal({ a: this.rand(), b: this.rand() });

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    captcha: ['', Validators.required],
  });

  constructor() {}

  private rand(): number {
    return Math.floor(Math.random() * 10);
  }

  submit() {
    const expected = this.captcha().a + this.captcha().b;
    const actual = parseInt(this.form.value.captcha || '', 10);

    if (actual === expected) {
      alert('✅ Login successful!');
    } else {
      alert('❌ Captcha failed. Try again.');
      this.captcha.set({ a: this.rand(), b: this.rand() });
      this.form.patchValue({ captcha: '' });
    }
  }
}
