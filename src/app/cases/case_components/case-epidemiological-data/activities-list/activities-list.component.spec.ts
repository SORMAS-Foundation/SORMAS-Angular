import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { ActivitiesListComponent } from './activities-list.component';

describe('ActivitiesListComponent', () => {
  let component: ActivitiesListComponent;
  let fixture: ComponentFixture<ActivitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesListComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
