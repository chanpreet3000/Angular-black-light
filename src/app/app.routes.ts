import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWeekLeaderboardComponent } from './current-week-leaderboard/current-week-leaderboard.component';
import { LastWeekLeaderboardComponent } from './last-week-leaderboard/last-week-leaderboard.component';
import { GetUserRankComponent } from './get-user-rank/get-user-rank.component';
import { LandingComponent } from './landing/landing.component';
export const routes: Routes = [
  {
    path: 'currentWeekLeaderboard',
    component: CurrentWeekLeaderboardComponent,
  },
  { path: 'lastWeekLeaderboard', component: LastWeekLeaderboardComponent },
  { path: 'getUserRank', component: GetUserRankComponent },
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
