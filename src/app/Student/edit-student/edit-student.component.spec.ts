import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtStudentComponent } from './edit-student.component';

describe('EidtStudentComponent', () => {
  let component: EidtStudentComponent;
  let fixture: ComponentFixture<EidtStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EidtStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EidtStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
