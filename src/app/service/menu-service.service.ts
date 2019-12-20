import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getMenuList() {
    const menuList: MenuItem[] = [
      {
        group: { code: 'homework', name: 'Home Work', icon: '' },
        menus: []
      },
      {
        group: { code: 'lessons', name: 'Lessons', icon: '' },
        menus: []
      },
      {
        group: { code: 'tests', name: 'Tests', icon: '' },
        menus: []
      },
      {
        group: { code: 'practice', name: 'Practice', icon: '' },
        menus: []
      },
    ];
    return menuList;
  }

  getSubMenuName(menuCode: string) {
    const menuList = this.getMenuList();
    for (const group of menuList) {
      for (const menu of group.menus) {
        return ` > ${menu.name}`;
      }
    }
    return '';
  }
}

export interface MenuItem {
  group: Menu;
  menus: Menu[];
}

export interface Menu {
  code: string;
  name: string;
  icon: any;
}
