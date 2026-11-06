import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveScoresComponent } from './live-scores.component';

describe('LiveScores', () => {
  let component: LiveScoresComponent;
  let fixture: ComponentFixture<LiveScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveScoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveScoresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
