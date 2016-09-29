import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'recipe',
    template: require('./recipe.component.html')
})
export class RecipeComponent {
    public recipes: Recipe[];

    constructor(http: Http) {
        http.get('/api/SampleData/GetRecipes').subscribe(result => {
            this.recipes = result.json();
        });
    }
}

interface Recipe {
    recipeId: number;
    name: string;
}