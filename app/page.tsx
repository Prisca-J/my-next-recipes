import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Données statiques pour les recettes (à remplacer plus tard par des données de Back4App)
const recipes = [
  { id: 1, title: "Spaghetti Bolognaise", description: "Un classique italien délicieux", time: "30 min" },
  { id: 2, title: "Salade César", description: "Une salade fraîche et croquante", time: "15 min" },
  { id: 3, title: "Poulet rôti", description: "Un plat familial savoureux", time: "1h 30 min" },
]

export default function Home() {
  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Mes Recettes de Cuisine</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
              <Card key={recipe.id}>
                <CardHeader>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Temps de préparation : {recipe.time}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">
                    Voir la recette
                  </Link>
                </CardFooter>
              </Card>
          ))}
        </div>
      </div>
  )
}