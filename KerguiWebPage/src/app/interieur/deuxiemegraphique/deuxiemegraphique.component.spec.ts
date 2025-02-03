import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxiemegraphiqueComponent } from './deuxiemegraphique.component';

describe('DeuxiemegraphiqueComponent', () => {
  let component: DeuxiemegraphiqueComponent;
  let fixture: ComponentFixture<DeuxiemegraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeuxiemegraphiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeuxiemegraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
