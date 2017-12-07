import { Component } from '@angular/core';



import { HomePage } from '../home/home';
// import { SettingPage } from '../setting/setting';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots:object[];

  // tab1Root = HomePage;
  // tab2Root = SettingPage;
  // tab3Root = ContactPage;

  constructor() {
    this.tabRoots=[
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: 'SettingPage',
        tabTitle: 'setting',
        tabIcon: 'settings'
      }
   ];

  }
}
