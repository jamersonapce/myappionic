import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Ionic App",
    data: "Agosto 14, 2018",
    descricao: "Criando um app com ionic",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h Ago"
  }
  public nome_usuario:string = "Nome do código";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert("Soma de " + num1 + " + " + num2 + " = " + (num1 + num2) );
  }
  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 5);
  }

}
