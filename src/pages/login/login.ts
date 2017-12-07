import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ToastController } from 'ionic-angular';



import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  todo={
    username:'',
    password:'',
    susage:true
  };
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    console.log(this.todo);
    if(this.todo.username=='')
    {
      let toast = this.toastCtrl.create({
        message: '请输入用户名',
        duration: 100000,
        showCloseButton:true,
      
        closeButtonText:'',
        position: 'middle'       
      })
      toast.present();
    }
    else{
      this.navCtrl.push(TabsPage);
    }

    
  }


}
