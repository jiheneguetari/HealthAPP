import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatchesComponent } from './coatches.component';

describe('CoatchesComponent', () => {
  let component: CoatchesComponent;
  let fixture: ComponentFixture<CoatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
