import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { MapLegendComponent } from './map-legend.component';

describe('MapLegendComponent', () => {
  let component: MapLegendComponent;
  let fixture: ComponentFixture<MapLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapLegendComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
