import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-week-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-week-leaderboard.component.html',
  styleUrl: './current-week-leaderboard.component.scss',
})
export class CurrentWeekLeaderboardComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentWeekLeaderboardData().subscribe((data) => {
      this.data = data['result' as keyof object];
    });
  }
  formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = ('0' + date.getDate()).slice(-2);
    const monthAbbrev = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${monthAbbrev} ${year}`;
    return formattedDate;
  }
  calculateDelay(index: number): string {
    const delay = (index + 1) * 0.05;
    return `${delay}s`;
  }
}
