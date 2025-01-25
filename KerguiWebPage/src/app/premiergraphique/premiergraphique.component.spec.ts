import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiergraphiqueComponent } from './premiergraphique.component';

describe('PremiergraphiqueComponent', () => {
  let component: PremiergraphiqueComponent;
  let fixture: ComponentFixture<PremiergraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiergraphiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiergraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
