import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public resolution = null;
  
  public hasOpen = null;

  public sideNavMode = 'side';

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.resolution = window.innerWidth;
          this.sideNavMode = this.resolution <= 850 ? 'over' : 'side';
          this.hasOpen = this.resolution <= 850 ? false : true;
    }

  constructor() {
    this.getScreenSize();
   }

  ngOnInit() {
  }

}
