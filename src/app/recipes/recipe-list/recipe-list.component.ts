import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ice Cream', 'tasty fruit ice cream', 'https://i.ytimg.com/vi/-YiPQC-ocdQ/maxresdefault.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
