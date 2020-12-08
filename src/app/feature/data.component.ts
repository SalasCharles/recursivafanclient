import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data',
  template: `
    <div class="data-page" *ngIf="!loading">
      <div class="quantity">{{ quantity }}</div>
      <div class="average">{{ average }}</div>
      <div class="list">{{ list | json }}</div>
      <div class="common">{{ common | json }}</div>
      <div class="teams">{{ teams | json }}</div>
    </div>
    <div *ngIf="loading">loading...</div>
  `,
})
export class DataComponent implements OnInit {
  loading = false;
  url = environment.url;
  quantity = 0;
  average = 0;
  list: any[] = [];
  common: any[] = [];
  teams: any[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.loading = true;
    forkJoin([
      this._http.get(`${this.url}/api/socio/quantity`),
      this._http.get(`${this.url}/api/socio/average/Racing`),
      this._http.get(`${this.url}/api/socio/married/100`),
      this._http.get(`${this.url}/api/socio/mostcommon/River/5`),
      this._http.get(`${this.url}/api/socio/teams`),
    ]).subscribe(([quantity, average, list, common, teams]: any[]) => {
      this.loading = false;
      this.quantity = quantity;
      this.average = average;
      this.list = list;
      this.common = common;
      this.teams = teams;
    });
  }
}
