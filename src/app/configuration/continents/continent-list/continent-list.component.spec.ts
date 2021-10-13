import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentListComponent } from './continent-list.component';

describe('ContinentListComponent', () => {
  let component: ContinentListComponent;
  let fixture: ComponentFixture<ContinentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
