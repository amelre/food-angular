import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecipesService } from "../../core/services/recipes.service";
import { UtilService } from "../../core/utils/util.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  searchSubscription: Subscription;
  randomSubscription: Subscription;

  recipes: any[] = [];
  constructor(public _recipes: RecipesService, public _utils: UtilService) {}

  ngOnInit(): void {
    this.randomSubscription = this._recipes
      .randomRecipes(12)
      .subscribe((res: any) => {
        this.recipes = res.recipes;
      });
    // this._recipes.search(
    //   {
    //     cuisine: 'mexican',
    //     number: 5,
    //     diet: 'vegan',
    //     intolerances: 'diary',
    //     query: 'pasta'
    //   }
    // ).subscribe(res =>  console.log(res));
    // this._recipes.getRecipe(723984).subscribe(res => console.log(res));
  }

  selectFilter($e: any): void {
    this.searchSubscription = this._recipes
      .search(this._utils.transformToQuery($e))
      .subscribe((res: any) => (this.recipes = res.results));
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) this.searchSubscription.unsubscribe();
    this.randomSubscription.unsubscribe();
  }
}
