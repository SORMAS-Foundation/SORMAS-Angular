import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardTransmissionChainComponent } from './dashboard-transmission-chain.component';

describe('DashboardTransmissionChainComponent', () => {
  let component: DashboardTransmissionChainComponent;
  let fixture: ComponentFixture<DashboardTransmissionChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTransmissionChainComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransmissionChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
