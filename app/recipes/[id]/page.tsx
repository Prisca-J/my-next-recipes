import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Données statiques pour les recettes (à remplacer plus tard par des données de Back4App)
const recipes = [
    {
        id: 1,
        title: "Spaghetti Bolognaise",
        description: "Un classique italien délicieux",
        time: "30 min",
        ingredients: [
            "400g de spaghetti",
            "500g de bœuf haché",
            "1 oignon",
            "2 gousses d'ail",
            "400g de tomates concassées",
            "2 cuillères à soupe de concentré de tomates",
            "1 cuillère à café d'origan séché",
            "Sel et poivre"
        ],
        instructions: [
            "Faire cuire les spaghetti selon les instructions du paquet.",
            "Pendant ce temps, faire revenir l'oignon et l'ail hachés dans une poêle avec un peu d'huile d'olive.",
            "Ajouter le bœuf haché et faire cuire jusqu'à ce qu'il soit bien doré.",
            "Ajouter les tomates concassées, le concentré de tomates et l'origan. Saler et poivrer.",
            "Laisser mijoter pendant 15-20 minutes.",
            "Servir la sauce sur les spaghetti cuits et égouttés."
        ]
    },
    // Ajoutez d'autres recettes ici...
]

export default function RecipePage({ params }: { params: { id: string } }) {
    const recipe = recipes.find(r => r.id === parseInt(params.id))

    if (!recipe) {
        notFound()
    }

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardDescription>{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Temps de préparation : {recipe.time}</p>
                    <h2 className="text-xl font-semibold mb-2">Ingrédients :</h2>
                    <ul className="list-disc pl-5 mb-4">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-semibold mb-2">Instructions :</h2>
                    <ol className="list-decimal pl-5">
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index} className="mb-2">{instruction}</li>
                        ))}
                    </ol>
                </CardContent>
            </Card>
        </div>
    )
}