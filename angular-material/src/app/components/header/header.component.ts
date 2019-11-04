import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public toggle_icon = null;
  
  public resolution = null;

  public notif = false;

  @Input() opened: any;

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
       this.resolution = window.innerWidth;
       this.toggle_icon = window.innerWidth <= 850 ? 'menu' : null;
    }
  constructor() { 
    this.getScreenSize();
  }

  ngOnInit() {
  }

  openSidenav(){
    this.opened.toggle();
    this.toggleIcon();
  }

  toggleIcon(){
    this.toggle_icon = this.resolution <= 850 ? 'menu' : null;
  }
}
