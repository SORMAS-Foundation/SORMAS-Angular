import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycloakService } from 'keycloak-angular';
import { UserProfileComponent } from './user-profile.component';

const mockRoles = ['admin', 'role-A'];

class MockKeycloakService extends KeycloakService {
  getUsername(): string {
    return 'test-user';
  }
  getUserRoles(): string[] {
    return mockRoles;
  }
}

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      providers: [{ provide: KeycloakService, useValue: new MockKeycloakService() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user name', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('p[data-test-id="user-name"]').textContent).toBe(
      ' User name: test-user'
    );

    mockRoles.forEach((role) => {
      expect(compiled.innerHTML).toContain(role);
    });
  });
});
