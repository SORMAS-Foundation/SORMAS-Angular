import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { PipesModule } from '../../_pipes/pipes.module';
import { ShareDetailsComponent } from './share-details.component';

describe('ShareDetailsComponent', () => {
  let component: ShareDetailsComponent;
  let fixture: ComponentFixture<ShareDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareDetailsComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), MaterialModule, PipesModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
