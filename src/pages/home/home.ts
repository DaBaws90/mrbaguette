import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UploadPage } from '../upload/upload';

// Angular firebase
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocatas:Observable<any[]>

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, private modalCtrl: ModalController) {
    this.bocatas = afDB.list('bocata').valueChanges();
  }

  private showModal(){
    let modal = this.modalCtrl.create(UploadPage);
    modal.present();
  }
  
}
