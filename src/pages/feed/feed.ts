
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
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

  public lista_filmes = new Array<any>();
  public nome_usuario:string = "Nome do código";

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert("Soma de " + num1 + " + " + num2 + " = " + (num1 + num2) );
  }
  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 5);
    this.movieProvider.getLatestMovies().subscribe(
      data =>{
        const response = (data as any);
        const objeto_retornado = JSON.parse(response._body);
        this.lista_filmes = objeto_retornado.results;
        console.log(objeto_retornado);
      }, 
      error =>{
        console.log(error);
      })
  }

}
