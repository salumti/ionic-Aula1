import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';

/**
 * Generated class for the ProdutoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhePage {

  produto : Produto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = this.navParams.get('produto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoDetalhePage');
  }

}
