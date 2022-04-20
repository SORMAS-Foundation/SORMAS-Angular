import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { MergeDuplicatesCautionComponent } from './merge-duplicates-caution.component';

describe('MergeDuplicatesCautionComponent', () => {
  let component: MergeDuplicatesCautionComponent;
  let fixture: ComponentFixture<MergeDuplicatesCautionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeDuplicatesCautionComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDuplicatesCautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
