/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { InpageNavComponent } from './inpage-nav.component';

describe('InpageNavComponent', () => {
  let component: InpageNavComponent;
  let fixture: ComponentFixture<InpageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InpageNavComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InpageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
