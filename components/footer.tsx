import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">À propos</h3>
                        <p className="text-gray-600">MesRecettes est votre source de délicieuses recettes faciles à préparer à la maison.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Accueil</Link></li>
                            <li><Link href="/categories" className="text-gray-600 hover:text-gray-900">Catégories</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">À propos</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-gray-500">
                    <p>&copy; 2024 MesRecettes. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}