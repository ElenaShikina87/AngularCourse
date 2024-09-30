import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule, FormsModule, PasswordModule,InputMaskModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  closeDialog() {
      this.visible = false;
  }

  private _fb = inject(FormBuilder)

  public form = this._fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  private _http = inject(HttpClient)
  public login(){
    this._http
    .post<string>('http://dzitskiy.ru:5000/Auth/Login', this.form.getRawValue())
    .pipe(
      tap((token) => {localStorage.setItem('Token', token)}
    ))
    .subscribe()
  }
}
