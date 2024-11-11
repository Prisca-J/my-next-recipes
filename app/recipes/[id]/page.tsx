import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {ArrowLeft, ChefHat, Timer, Users} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

// Données statiques pour les recettes (à remplacer plus tard par des données de Back4App)
const recipes = [
    {
        id: 1,
        title: "Spaghetti Bolognaise",
        description: "Un classique italien délicieux",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: 4,
        difficulty: "Facile",
        image: "/placeholder.svg",
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
        ],
        notes: "Pour une sauce plus riche, vous pouvez ajouter un peu de vin rouge lors de la cuisson de la viande.",
        tips: "Réservez un peu d'eau de cuisson des pâtes pour ajuster la consistance de la sauce si nécessaire."
    },
    // Ajoutez d'autres recettes ici...
]

export default function RecipePage({ params }: { params: { id: string } }) {
    const recipe = recipes.find(r => r.id === parseInt(params.id))

    if (!recipe) {
        notFound()
    }

    return (
        <div className="container max-w-screen-md mx-auto p-4">
            <div className="mb-6">
                <Button asChild variant="outline" size="sm">
                    <Link href="/" className="flex items-center">
                        <ArrowLeft className="mr-2 h-4 w-4"/>
                        Retour aux recettes
                    </Link>
                </Button>
            </div>
            <Card>
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-lg"
                />
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl"><CardTitle>{recipe.title}</CardTitle></h2>
                    </div>
                    <CardDescription>{recipe.description}</CardDescription>
                    <div className="mt-2">
                        <Badge>{recipe.difficulty}</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex-grow mb-4">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center">
                                <Timer className="w-4 h-4 mr-2"/>
                                <span>{recipe.prepTime}</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2"/>
                                <span>{recipe.servings} personnes</span>
                            </div>
                            <div className="flex items-center">
                                <ChefHat className="w-4 h-4 mr-2"/>
                                <span>{recipe.cookTime}</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Ingrédients :</h2>
                    <ul className="list-disc pl-5 mb-4">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-semibold mb-2">Instructions :</h2>
                    <ol className="list-decimal pl-5 mb-4">
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index} className="mb-2">{instruction}</li>
                        ))}
                    </ol>
                    <h2 className="text-xl font-semibold mb-2">Notes et astuces :</h2>
                    <p className="mb-2"><strong>Note :</strong> {recipe.notes}</p>
                    <p><strong>Astuce :</strong> {recipe.tips}</p>
                </CardContent>
            </Card>
        </div>
    )
}