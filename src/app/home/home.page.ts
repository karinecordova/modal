import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExampleModalPage } from '../example-modal/example-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataReturned:any;
 
  constructor(
    public modalController: ModalController
  ) { }
 
  async openModal() {
    const modal = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

}
