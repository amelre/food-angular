import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  baseImage = "https://spoonacular.com/recipeImages/";
  baseUrl = "https://api.spoonacular.com/";
  apiKey = "59381bb809014d7283ad857ba71112bd";

  constructor(public http: HttpClient) {}

  randomRecipes(num: number = 10) {
    return this.getRequest("recipes/random", { number: num });
  }

  srcImage(name: string): string {
    return `${this.baseImage}${name}?apiKey=${this.apiKey}`;
  }

  search(params?: any) {
    return this.getRequest("recipes/complexSearch", params);
  }

  getRecipe(id: number) {
    return this.getRequest(`recipes/${id}/information`);
  }

  private getRequest(request: string, params?: any) {
    const url = this.baseUrl + request;

    params = {
      ...params,
      apiKey: this.apiKey,
    };

    const urlParameters = Object.entries(params)
      .map((e) => e.join("="))
      .join("&");
    return this.http.get(`${url}?${urlParameters}`);
  }
}
