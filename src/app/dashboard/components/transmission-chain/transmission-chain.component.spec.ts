import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TransmissionChainComponent } from './transmission-chain.component';

describe('TransmissionChainComponent', () => {
  let component: TransmissionChainComponent;
  let fixture: ComponentFixture<TransmissionChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransmissionChainComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
