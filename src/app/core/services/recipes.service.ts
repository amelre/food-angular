import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SETTINGS } from "../../constants/settings";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  constructor(public http: HttpClient) {}

  randomRecipes(num: number = 10) {
    return this.getRequest("recipes/random", { number: num });
  }

  srcImage(name: string): string {
    return `${SETTINGS.BASE_IMAGE}${name}?apiKey=${SETTINGS.API_KEY}`;
  }

  search(params?: any) {
    return this.getRequest("recipes/complexSearch", params);
  }

  getRecipe(id: number) {
    return this.getRequest(`recipes/${id}/information`);
  }

  private getRequest(request: string, params?: any) {
    const url = SETTINGS.BASE_URL + request;

    params = {
      ...params,
      apiKey: SETTINGS.API_KEY,
    };

    const urlParameters = Object.entries(params)
      .map((e) => e.join("="))
      .join("&");
    return this.http.get(`${url}?${urlParameters}`);
  }
}
