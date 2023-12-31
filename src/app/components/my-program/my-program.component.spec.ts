import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProgramComponent } from './my-program.component';

describe('MyProgramComponent', () => {
  let component: MyProgramComponent;
  let fixture: ComponentFixture<MyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
