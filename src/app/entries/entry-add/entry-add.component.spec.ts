import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAddComponent } from './entry-add.component';

describe('EntryAddComponent', () => {
  let component: EntryAddComponent;
  let fixture: ComponentFixture<EntryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryAddComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
