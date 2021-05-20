import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { CasePortHealthComponent } from './case-port-health.component';

describe('CasePortHealthComponent', () => {
  let component: CasePortHealthComponent;
  let fixture: ComponentFixture<CasePortHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasePortHealthComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePortHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
