import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { SuperordinateEventComponent } from './superordinate-event.component';

describe('SuperordinateEventComponent', () => {
  let component: SuperordinateEventComponent;
  let fixture: ComponentFixture<SuperordinateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperordinateEventComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperordinateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
