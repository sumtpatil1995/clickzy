import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNav = false;
  constructor(private router: Router, private route:ActivatedRoute){
    router.events.forEach( event => {
      if(event instanceof NavigationEnd)
      event.url === 'login' || event.url === '/' ? this.showNav = false : this.showNav = true;
    } );
  }

  ngOnInit(){
   }
  title = 'clickzy';
}
