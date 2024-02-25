import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get-user-rank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-user-rank.component.html',
  styleUrl: './get-user-rank.component.scss',
})
export class GetUserRankComponent implements OnInit {
  data: any[] = [];
  uid: string = '';
  rank: Number = -1;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.dataService
      .getUserFromUid(this.uid)
      .subscribe((data) => {
        this.data = data['data' as keyof object];
        this.rank = data['rank' as keyof object];
      });
  }
  onInputChange(event: any): void {
    this.uid = event.target.value;
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
  calculateDelay(index: number): string {
    const delay = (index + 1) * 0.05;
    return `${delay}s`;
  }
}
