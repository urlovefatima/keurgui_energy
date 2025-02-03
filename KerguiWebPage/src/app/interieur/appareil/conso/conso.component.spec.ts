import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoComponent } from './conso.component';

describe('ConsoComponent', () => {
  let component: ConsoComponent;
  let fixture: ComponentFixture<ConsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
