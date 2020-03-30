import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
declare var Particles: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  checked = false;
  constructor(private router: Router) { }

  ngOnInit() {
    window.
      onload
      = function () {
        Particles.
          init
          ({
            selector:'.background',
            connectParticles: true,
            color: '#1e826f'

          });
      };
  }

  username: string;
  password: string;
  login(): void {
    this.router.navigate(['/analyze']);
    console.log("login successfull")
  }

  ngOnDestroy(){
    Particles.destroy()
  }
}
