import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getMenuList() {
    const menuList: MenuItem[] = [
      {
        group: { code: 'homework', name: 'Home Work', icon: '../../assets/homework.png' },
        menus: []
      },
      {
        group: { code: 'lessons', name: 'Lessons', icon: '../../assets/lessons.png' },
        menus: []
      },
      {
        group: { code: 'performance', name: 'Performance', icon: '../../assets/performancebades.png' },
        menus: []
      },
      {
        group: { code: 'announcements', name: 'Announcements', icon: '' },
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
