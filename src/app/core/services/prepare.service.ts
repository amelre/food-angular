import { Injectable } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";

@Injectable({
  providedIn: "root",
})
export class PrepareService {
  constructor() {}

  private recipesToPrepare: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    this.recipesToPrepare.push(recipe);
    console.log(this.recipesToPrepare);
  }

  removeRecipe(id: number) {
    console.log(id);
    this.recipesToPrepare = this.recipesToPrepare.filter(
      (r: Recipe) => r.id === id
    );
    console.log(this.recipesToPrepare);
  }
}
