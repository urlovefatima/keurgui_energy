import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueConsComponent } from './historique-cons.component';

describe('HistoriqueConsComponent', () => {
  let component: HistoriqueConsComponent;
  let fixture: ComponentFixture<HistoriqueConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueConsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
