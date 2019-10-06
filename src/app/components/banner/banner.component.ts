import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  title: string;
  description: string;
  color: string = "red";
  backgroundColor: string;
  backgroundImage: string;

  @Input() inputTitle: string;
  @Input() inputDescription: string;
  @Input() inputColor: string;
  @Input() inputBackgroundColor: string;
  @Input() inputBackgroundImage: string;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inputTitle;
    this.description = this.inputDescription;
  }

}
