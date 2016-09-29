import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'recipe',
    outputs: ['onSubmitForm'],
    template: require('./recipe.component.html')
})
export class RecipeComponent {
    public recipes: Recipe[];
    public isBusy: boolean;
    constructor(http: Http) {
        http.get('/api/SampleData/GetRecipes').subscribe(result => {
            this.recipes = result.json();
        });
    }

    addRecipe() {
        this.isBusy = true;
        $http.post('/api/SampleData/recipes', this.newRecipe)
            .then(function () {
                //success
            }, function () {
                //failure
            })
            .finally(function () {
                this.isBusy = false;
            });
    }
}

interface Recipe {
    recipeId: number;
    name: string;
}