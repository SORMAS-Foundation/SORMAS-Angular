import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCaseModalComponent } from './choose-case-modal.component';

describe('ChooseCaseModalComponent', () => {
  let component: ChooseCaseModalComponent;
  let fixture: ComponentFixture<ChooseCaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCaseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
