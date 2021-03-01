import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseControllerService } from 'api-client';

import { CasesOverviewComponent } from './cases-overview.component';

describe('CasesOverviewComponent', () => {
  let component: CasesOverviewComponent;
  let fixture: ComponentFixture<CasesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasesOverviewComponent],
      providers: [CaseControllerService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
