import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuServiceService, MenuItem, Menu } from '../service/menu-service.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent  implements OnInit{
  menuGroupSelected: string;
  menuList: MenuItem[];
  selectedValue: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private auth:AuthService,
    private breakpointObserver: BreakpointObserver,
    private menuService: MenuServiceService
  ) {
    this.menuList = this.menuService.getMenuList();
  }

  selectMenu(menuGroup: Menu) {
    if (this.menuGroupSelected === menuGroup.code) {
      this.menuGroupSelected = null;
      return;
    }
    this.menuGroupSelected = menuGroup.code;
  }
  ngOnInit(){
    this.selectedValue = 'Mathematics'
  }
  signout(){
    this.auth.logout()
  }
}
