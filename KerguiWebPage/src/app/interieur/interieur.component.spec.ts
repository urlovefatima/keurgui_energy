import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterieurComponent } from './interieur.component';

describe('InterieurComponent', () => {
  let component: InterieurComponent;
  let fixture: ComponentFixture<InterieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterieurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
