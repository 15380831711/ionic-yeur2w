import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-news',
    templateUrl: 'news.html',
})
export class NewsPage {

    newsType = '';
    newsTypeName = "";

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        this.newsType = this.navParams.get("newsType");
        if (this.newsType == '1') {
            this.newsTypeName = '新闻1';
        } else if (this.newsType == '2') {
            this.newsTypeName = '新闻2';
        }
    }

}