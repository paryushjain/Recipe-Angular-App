import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

     private recipes: Recipe[] = [
    new Recipe('Pizza','A cheese burst pizza recipe.',
    'https://c1.staticflickr.com/5/4137/4932649430_3797a80ff2_b.jpg',
    [
        new Ingredient('toppings',5),
        new Ingredient('cheese',1)
    ]),
    new Recipe('Burger','A vegatable cheese burger recipe.',
    'https://edge.alluremedia.com.au/m/l/2015/03/Burger1.gif',
    [
        new Ingredient('buns',2),
        new Ingredient('cheese',1)
    ])
  ];

  constructor(private slService: ShoppingListService){}
getRecipes(){
    return this.recipes.slice();
}

getRecipe(index: number){
    return this.recipes[index];
}

addRecipesToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
}

}