import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpOublieComponent } from './mdp-oublie.component';

describe('MdpOublieComponent', () => {
  let component: MdpOublieComponent;
  let fixture: ComponentFixture<MdpOublieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdpOublieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdpOublieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
