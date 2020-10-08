import { Injectable } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";

@Injectable({
  providedIn: "root",
})
export class PrepareService {
  constructor() {}

  private _recipesToPrepare: Recipe[] = [];
  public currentRecipe = null;
  timer = null;

  get recipesToPrepare(): Recipe[] {
    return this._recipesToPrepare;
  }

  set recipesToPrepare(r) {
    this._recipesToPrepare = r;
  }

  addRecipe(recipe: Recipe) {
    if (this.recipeExists(recipe)) {
      return;
    }
    clearTimeout(this.timer);
    this.recipesToPrepare.push(recipe);
    this.currentRecipe = recipe;
    this.timer = setTimeout(() => {
      this.currentRecipe = null;
    }, 3000);
  }

  removeRecipe(id: number) {
    this.recipesToPrepare = this.recipesToPrepare.filter(
      (r: Recipe) => r.id !== id
    );
  }

  recipeExists(recipe: Recipe): boolean {
    const index = this.recipesToPrepare.findIndex((r) => r.id === recipe.id);
    return index !== -1;
  }
}
