import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeekLeaderboardComponent } from './current-week-leaderboard.component';

describe('CurrentWeekLeaderboardComponent', () => {
  let component: CurrentWeekLeaderboardComponent;
  let fixture: ComponentFixture<CurrentWeekLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeekLeaderboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentWeekLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
