import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Router, RouterLink} from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIconButton} from '@angular/material/button';


@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    RouterLink,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatIconButton,
    MatMenuItem
  ]
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

  logout() {

  }
}
