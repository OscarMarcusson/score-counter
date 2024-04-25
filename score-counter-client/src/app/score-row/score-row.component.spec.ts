import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRowComponent } from './score-row.component';

describe('ScoreRowComponent', () => {
  let component: ScoreRowComponent;
  let fixture: ComponentFixture<ScoreRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
