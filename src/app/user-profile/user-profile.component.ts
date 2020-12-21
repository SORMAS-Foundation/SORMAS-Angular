import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user = '';
  roles: string[] = [];

  constructor(private authService: KeycloakService) {}

  ngOnInit(): void {
    this.user = this.authService.getUsername();
    this.roles = this.authService.getUserRoles();
  }

  async logout(): Promise<void> {
    await this.authService.logout();
  }
}
