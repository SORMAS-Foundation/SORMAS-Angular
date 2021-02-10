import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth-service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user = '';
  roles: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUsername();
    this.roles = this.authService.getUserRoles();
  }

  logout(): void {
    this.authService.logout();
  }
}
