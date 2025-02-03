import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparComponent } from './appar.component';

describe('ApparComponent', () => {
  let component: ApparComponent;
  let fixture: ComponentFixture<ApparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApparComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
