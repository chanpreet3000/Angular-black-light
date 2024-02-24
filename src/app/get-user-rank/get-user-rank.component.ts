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
  uid: string = '92d7ff22-2a34-4a51-b81e-24ad0992cc61';
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
}
