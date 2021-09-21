import { Component } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./app.article.html"


})

export class ArticleComponent {

  title:string = "This is my title string.";
  content:string = "This is the string that holds my content. I know, so detailed. Lorem, ipsum, and all that stuff.";
  isTechRelated:boolean = true;

  onSwapTechRelated() {
    this.isTechRelated = !this.isTechRelated;
  };


}
