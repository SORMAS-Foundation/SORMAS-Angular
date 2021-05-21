import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { NewAddressComponent } from './new-address.component';

describe('NewAddressComponent', () => {
  let component: NewAddressComponent;
  let fixture: ComponentFixture<NewAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAddressComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
