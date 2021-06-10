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

  it('should render header and card', () => {
    const card = document.getElementsByTagName('mat-card');
    const header = document.getElementsByTagName('h2');

    expect(card[0]).toBeDefined();
    expect(header[0].textContent).toBe('myProfile.userProfile');
  });

  it('renderes roles', async () => {
    const chips = await loader.getAllHarnesses(MatChipHarness);
    const rolesInChips = await Promise.all(chips.map((c) => c.getText()));

    expect(rolesInChips).toEqual(mockRoles);
  });
});
