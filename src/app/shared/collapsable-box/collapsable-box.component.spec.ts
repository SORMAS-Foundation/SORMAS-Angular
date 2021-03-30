import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableBoxComponent } from './collapsable-box.component';

describe('CollapsableBoxComponent', () => {
  let component: CollapsableBoxComponent;
  let fixture: ComponentFixture<CollapsableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapsableBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
