import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DespesaProvider } from '../../providers/despesa/despesa';
import { Despesa } from '../../models/despesa';

import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  despesas: Despesa[] = new Array();

  constructor(public navCtrl: NavController,
              private desProv: DespesaProvider) {
    this.despesas = desProv.getAll();
  }

  add() {
    this.navCtrl.push(AddPage);
  }

  del(id)
   {
     for (var i=0; i < this.despesas.length; i++)
     {
       if (this.despesas[i].id == id)
       {
         this.despesas.splice(i, 1);
       }
     }
     this.localStorageService.set("despesas", JSON.stringify(this.despesas));
   }

}
