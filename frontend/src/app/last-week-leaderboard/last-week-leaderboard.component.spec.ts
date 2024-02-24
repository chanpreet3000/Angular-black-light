import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWeekLeaderboardComponent } from './last-week-leaderboard.component';

describe('LastWeekLeaderboardComponent', () => {
  let component: LastWeekLeaderboardComponent;
  let fixture: ComponentFixture<LastWeekLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastWeekLeaderboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastWeekLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
