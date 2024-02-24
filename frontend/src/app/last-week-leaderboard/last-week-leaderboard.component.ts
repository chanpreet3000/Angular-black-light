import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-week-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-week-leaderboard.component.html',
  styleUrl: './last-week-leaderboard.component.scss',
})
export class LastWeekLeaderboardComponent implements OnInit {
  data: any[] = [];
  country: string = 'IN';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.dataService
      .getLastWeekLeaderboardData(this.country)
      .subscribe((data) => {
        this.data = data['result' as keyof object];
      });
  }
  onInputChange(event: any): void {
    this.country = event.target.value.toUpperCase();
    this.getData();
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
}
