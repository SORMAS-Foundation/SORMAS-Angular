import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { ExposuresListComponent } from './exposures-list.component';

describe('ExposuresListComponent', () => {
  let component: ExposuresListComponent;
  let fixture: ComponentFixture<ExposuresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExposuresListComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposuresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
