import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceaccueilComponent } from './pieceaccueil.component';

describe('PieceaccueilComponent', () => {
  let component: PieceaccueilComponent;
  let fixture: ComponentFixture<PieceaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceaccueilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
