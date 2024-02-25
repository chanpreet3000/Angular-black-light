import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  pageActive = 'page1';
  constructor(private router: Router) {}
  async goToLandingPage() {
    this.router.navigate(['']);
  }
  async goToWeeklyLeaderBoard() {
    this.router.navigate(['currentWeekLeaderboard']);
    this.pageActive = 'page1';
  }

  async goToLastWeekLeaderBoardByCountry() {
    this.router.navigate(['lastWeekLeaderboard']);
    this.pageActive = 'page2';
  }

  async goToUserLeaderBoardByRank() {
    this.router.navigate(['getUserRank']);
    this.pageActive = 'page3';
  }
}
