import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getRecipes } from '@/lib/back4app'
import type { RecipePreview } from '@/types/recipe'

export default async function Home() {
    const recipes = await getRecipes()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Mes dernières recettes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe: RecipePreview) => (
                    <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="block hover:shadow-lg transition-shadow duration-300">
                        <Card className="h-full flex flex-col">
                            <Image
                                src={recipe.imageUrl}
                                alt={recipe.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle>{recipe.title}</CardTitle>
                                    <Badge>{recipe.difficulty}</Badge>
                                </div>
                                <CardDescription>{recipe.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span>{recipe.prepTime} min</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span>{recipe.cookTime} min</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-2" />
                                    <span>{recipe.servings} personnes</span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}