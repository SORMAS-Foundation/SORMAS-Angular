import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  form: FormGroup = new FormGroup({
    // todo - extra validations required for inputs / pws?
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  async submit(): Promise<void> {
    this.error = '';
    if (this.form.valid) {
      const username = this.form.get('username')?.value ?? '';
      const pw = this.form.get('password')?.value ?? '';
      const loginResult = await this.authService.loginUser(username, pw);
      if (loginResult) {
        this.router.navigate(['/']);
      } else {
        this.error = 'Invalid username or password'; // todo i18n
      }
    }
  }
}
