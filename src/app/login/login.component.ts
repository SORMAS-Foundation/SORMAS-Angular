import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string | null = null;

  form: FormGroup = new FormGroup({
    // todo - extra validations required for inputs / pws?
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submit(): void {
    if (this.form.valid) {
      console.log('submit');
    }
  }
}
