import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  template: `
    <div class="upload-page">
      <a [routerLink]="['', 'data']">ver informacion</a>
      <div class="card">
        <input type="file" (change)="selectFile($event)" />
        <button (click)="uploadFile()" [disabled]="!file">Subir</button>
      </div>
    </div>
  `,
})
export class UploadComponent implements OnInit {
  url = environment.url;
  file: File = null;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  selectFile(event: any) {
    if (!event.target) {
      return;
    }
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (!this.file) {
      return;
    }

    const form = new FormData();
    form.append('file', this.file);
    this._http.post(`${this.url}/api/upload`, form, { responseType: 'text' }).subscribe((data) => {
      console.log(data);
    });
  }
}
