import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCurrentWeekLeaderboardData() {
    return this.http.get<any[]>('http://localhost:5000/currentWeekLeaderboard');
  }
  
  getLastWeekLeaderboardData(countryCode: string): Observable<any[]> {
    const body = { country: countryCode };
    return this.http.post<any[]>('http://localhost:5000/lastWeekLeaderboardByCountry', body);
  }

  getUserFromUid(uid: string): Observable<any[]> {
    const body = { uid: uid };
    return this.http.post<any[]>('http://localhost:5000/userLeaderboardRank', body);
  }
}
