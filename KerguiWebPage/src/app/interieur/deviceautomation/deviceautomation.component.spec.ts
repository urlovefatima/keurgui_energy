import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceautomationComponent } from './deviceautomation.component';

describe('DeviceautomationComponent', () => {
  let component: DeviceautomationComponent;
  let fixture: ComponentFixture<DeviceautomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceautomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceautomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
