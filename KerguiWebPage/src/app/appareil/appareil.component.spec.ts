import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilComponent } from './appareil.component';

describe('AppareilComponent', () => {
  let component: AppareilComponent;
  let fixture: ComponentFixture<AppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppareilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
