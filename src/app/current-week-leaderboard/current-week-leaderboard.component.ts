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
    this.dataService.getData().subscribe((data) => {
      this.data = data['result' as keyof object];
    });
  }
  stringify(item: any): string {
    return JSON.stringify(item, null, 2); // 2 is for indentation
  }
}
