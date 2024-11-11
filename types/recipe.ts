export interface Recipe {
    id: string
    title: string
    description: string
    prepTime: number
    cookTime: number
    servings: number
    difficulty: 'Facile' | 'Moyen' | 'Difficile'
    imageUrl: string
    ingredients: string[]
    instructions: string[]
    notesAndTips: string
}

export type RecipePreview = Omit<Recipe, 'ingredients' | 'instructions' | 'notesAndTips'>