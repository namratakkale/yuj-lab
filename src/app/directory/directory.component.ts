import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  public productProfiles: any;
  constructor(private productSrv: ApiService) {}

  ngOnInit(): void {
    this.productProfiles = this.productSrv.getProductList();
    console.log(this.productProfiles);
  }
}
