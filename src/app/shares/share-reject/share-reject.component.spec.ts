import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ShareRejectComponent } from './share-reject.component';

describe('ShareRejectComponent', () => {
  let component: ShareRejectComponent;
  let fixture: ComponentFixture<ShareRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareRejectComponent],
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
