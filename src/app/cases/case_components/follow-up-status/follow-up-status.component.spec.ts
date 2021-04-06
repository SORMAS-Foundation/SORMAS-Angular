/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material.module';

import { FollowUpStatusComponent } from './follow-up-status.component';

describe('FollowUpStatusComponent', () => {
  let component: FollowUpStatusComponent;
  let fixture: ComponentFixture<FollowUpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowUpStatusComponent],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
