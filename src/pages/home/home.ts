import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Angular firebase
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocatas:Observable<any[]>
  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {
    this.bocatas = afDB.list('bocatas').valueChanges();
  }

}
