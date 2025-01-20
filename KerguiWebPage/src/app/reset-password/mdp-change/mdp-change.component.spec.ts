import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpChangeComponent } from './mdp-change.component';

describe('MdpChangeComponent', () => {
  let component: MdpChangeComponent;
  let fixture: ComponentFixture<MdpChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdpChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdpChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
