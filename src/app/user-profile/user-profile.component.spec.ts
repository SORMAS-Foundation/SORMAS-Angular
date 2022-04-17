import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipHarness } from '@angular/material/chips/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './user-profile.component';
import { AuthService } from '../shared/auth/auth-service/auth.service';

const mockRoles = ['admin', 'role-A', 'role-B'];

class MockAuthService {
  getUsername(): string {
    return 'test-user';
  }
  getUserRoles(): string[] {
    return mockRoles;
  }
}

let loader: HarnessLoader;

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [UserProfileComponent],
      providers: [{ provide: AuthService, useValue: new MockAuthService() }],
    }).compileComponents();
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
