import React, { useState } from 'react';
import { Heart, MessageCircle, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function RealEstateCard() {
  const [liked, setLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = {
    id: 1,
    title: "Villa Moderne avec Vue Mer",
    location: "Dakar, Almadies",
    price: "450M FCFA",
    bedrooms: 5,
    bathrooms: 4,
    surface: 350,
    likes: 234,
    comments: 18,
    images: [
      "/frontend/public/immo/modele-de-maison-de-villa-cle-et-dessin-sur-retro-bureau-concept-de-vente-immobilier.jpg",
      "/frontend/public/immo/modele-de-maison-de-villa-cle-et-dessin-sur-retro-bureau-concept-de-vente-immobilier.jpg",
      "/frontend/public/immo/paysage-analogique-de-la-ville-avec-des-batiments.jpg"
    ]
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {/* Carte principale */}
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 flex flex-col">
          {/* Carrousel d'images */}
          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800">
              <img 
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Bouton Like */}
            <button
              onClick={handleLike}
              className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform duration-200"
            >
              <Heart 
                className={`w-4 h-4 transition-colors ${
                  liked 
                    ? 'fill-red-500 text-red-500' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              />
            </button>

            {/* Contrôles carrousel */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-900 dark:text-gray-100" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-4 h-4 text-gray-900 dark:text-gray-100" />
                </button>
                
                {/* Indicateurs */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {property.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'w-4 bg-white' 
                          : 'w-1 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <CardContent className="p-3 flex-1 flex flex-col">
            {/* Prix */}
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">
              {property.price}
            </p>

            {/* Titre */}
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2 text-sm">
              {property.title}
            </h3>
            
            {/* Localisation */}
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="text-xs truncate">{property.location}</span>
            </div>

            {/* Caractéristiques */}
            <div className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300 mb-3">
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>{property.surface}m²</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800 mb-3">
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>{property.likes + (liked ? 1 : 0)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span>{property.comments}</span>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-2 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors text-xs font-medium text-gray-900 dark:text-gray-100">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Commenter</span>
              </button>
              <button className="flex-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-colors text-xs font-medium">
                Voir plus
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Cartes de démonstration supplémentaires */}
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 flex flex-col">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
                alt="Appartement"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <button className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform">
              <Heart className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <CardContent className="p-3 flex-1 flex flex-col">
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">285M FCFA</p>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2 text-sm">
              Appartement Luxueux Centre-Ville
            </h3>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="text-xs truncate">Dakar, Plateau</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300 mb-3">
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>3</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>150m²</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800 mb-3">
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>189</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span>12</span>
              </div>
            </div>
            <div className="flex gap-2 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors text-xs font-medium text-gray-900 dark:text-gray-100">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Commenter</span>
              </button>
              <button className="flex-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-colors text-xs font-medium">
                Voir plus
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 flex flex-col">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop"
                alt="Maison"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <button className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform">
              <Heart className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <CardContent className="p-3 flex-1 flex flex-col">
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">320M FCFA</p>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2 text-sm">
              Maison Familiale avec Jardin
            </h3>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="text-xs truncate">Dakar, Mermoz</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300 mb-3">
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>4</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>3</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                <span>220m²</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800 mb-3">
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>156</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span>24</span>
              </div>
            </div>
            <div className="flex gap-2 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors text-xs font-medium text-gray-900 dark:text-gray-100">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Commenter</span>
              </button>
              <button className="flex-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-colors text-xs font-medium">
                Voir plus
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}