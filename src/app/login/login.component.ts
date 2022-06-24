import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string | null = null;
  submitDisabled = false;

  constructor(private authService: AuthService, private router: Router) {}

  form: UntypedFormGroup = new UntypedFormGroup({
    // todo - extra validations required for inputs / pws?
    username: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required),
  });

  async submit(): Promise<void> {
    this.error = '';
    if (this.form.valid) {
      this.submitDisabled = true;
      const username = this.form.get('username')?.value ?? '';
      const pw = this.form.get('password')?.value ?? '';
      const loginResult = await this.authService.loginUser(username, pw);
      if (loginResult) {
        this.router.navigate(['/']);
      } else {
        this.error = 'Invalid username or password'; // todo i18n
        this.submitDisabled = false;
      }
    }
  }
}
