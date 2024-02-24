import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  constructor(private router: Router) {}
  async goToWeeklyLeaderBoard() {
    this.router.navigate(['currentWeekLeaderboard']);
  }

  async goToLastWeekLeaderBoardByCountry() {
    this.router.navigate(['lastWeekLeaderboard']);
  }

  async goToUserLeaderBoardByRank() {
    this.router.navigate(['getUserRank']);
  }
}
