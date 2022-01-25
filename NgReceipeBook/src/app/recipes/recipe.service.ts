import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    private recipes: Recipe[]=[
        new Recipe('A Test Recipe',
        'This is tasty delicious',
        'https://www.simplyrecipes.com/thmb/UIpnKDZSVS4eIKgreoH6QauP0KQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('A Test 2 Recipe',
        'This is tasty 2 delicious',
        'https://www.simplyrecipes.com/thmb/UIpnKDZSVS4eIKgreoH6QauP0KQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
        [
            new Ingredient('Bread',2),
            new Ingredient('Meat',1)
        ])
      ];
    
    constructor(private slService: ShoppingListService){

    }  

    getRecipes(){
        return this.recipes.slice();        //return new array
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}