import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleGridComponent } from './wordle-grid.component';

describe('WordleGridComponent', () => {
  let component: WordleGridComponent;
  let fixture: ComponentFixture<WordleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
