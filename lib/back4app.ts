import Parse from 'parse/node';

Parse.initialize(process.env.BACK4APP_APPLICATION_ID!, process.env.BACK4APP_JAVASCRIPT_KEY!);
Parse.serverURL = 'https://parseapi.back4app.com/';

export async function getRecipes() {
    const Recipes = Parse.Object.extend('Recipes');
    const query = new Parse.Query(Recipes);
    const results = await query.find();
    return results.map((recipe) => ({
        id: recipe.id,
        title: recipe.get('title'),
        description: recipe.get('description'),
        prepTime: recipe.get('prepTime'),
        cookTime: recipe.get('cookTime'),
        servings: recipe.get('servings'),
        difficulty: recipe.get('difficulty'),
        imageUrl: recipe.get('imageUrl') || '/placeholder.svg',
    }));
}

export async function getRecipeById(id: string) {
    const Recipes = Parse.Object.extend('Recipes');
    const query = new Parse.Query(Recipes);
    const recipe = await query.get(id);
    return {
        id: recipe.id,
        title: recipe.get('title'),
        description: recipe.get('description'),
        prepTime: recipe.get('prepTime'),
        cookTime: recipe.get('cookTime'),
        servings: recipe.get('servings'),
        difficulty: recipe.get('difficulty'),
        imageUrl: recipe.get('imageUrl') || '/placeholder.svg',
        ingredients: recipe.get('ingredients'),
        instructions: recipe.get('instructions'),
        notesAndTips: recipe.get('notes'),
    };
}