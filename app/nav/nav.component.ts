import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import 'owl.carousel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);




    
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const header = document.getElementById('header');
    if (header !== null) {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }
  };
}
