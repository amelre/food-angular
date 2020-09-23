import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import { RecipesService } from "src/app/core/services";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  baseUri = "https://spoonacular.com/recipeImages/";

  constructor(public _recipeService: RecipesService) {}

  ngOnInit() {}

  getImageUrl(name: String): String {
    return `${this.baseUri}${name}?apiKey=59381bb809014d7283ad857ba71112bd`;
  }
}
