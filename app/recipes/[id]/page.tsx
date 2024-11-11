import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getRecipeById } from '@/lib/back4app'

export default async function RecipePage({ params }: { params: { id: string } }) {
    const recipe = await getRecipeById(params.id)

    if (!recipe) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <Button asChild variant="outline" size="sm">
                    <Link href="/" className="flex items-center">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour aux recettes
                    </Link>
                </Button>
            </div>
            <Card>
                <Image
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-lg"
                />
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>{recipe.title}</CardTitle>
                        <Badge>{recipe.difficulty}</Badge>
                    </div>
                    <CardDescription>{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>Préparation : {recipe.prepTime} min</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>Cuisson : {recipe.cookTime} min</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            <span>Pour {recipe.servings} personnes</span>
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
                    <p>{recipe.notesAndTips}</p>
                </CardContent>
            </Card>
        </div>
    )
}