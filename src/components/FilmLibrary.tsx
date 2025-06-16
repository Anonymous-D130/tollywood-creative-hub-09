
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Calendar, Eye, Heart, Share, Plus } from "lucide-react";

const FilmLibrary = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const films = [
    {
      id: 1,
      title: "Amma Tho Cheppina Katha",
      director: "Priya Sharma",
      genre: "Drama",
      year: "2024",
      duration: "12 min",
      views: "2.3K",
      likes: 187,
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "A heartwarming story about the unbreakable bond between a mother and daughter.",
      language: "Telugu",
      awards: ["Best Short Film 2024"],
      featured: true
    },
    {
      id: 2,
      title: "Hyderabad Nights",
      director: "Ravi Kumar",
      genre: "Thriller",
      year: "2024",
      duration: "15 min",
      views: "1.8K",
      likes: 142,
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      description: "A gripping thriller set in the busy streets of Hyderabad during late night hours.",
      language: "Telugu",
      awards: [],
      featured: false
    },
    {
      id: 3,
      title: "Village Comedy",
      director: "Lakshmi Devi",
      genre: "Comedy",
      year: "2023",
      duration: "8 min",
      views: "4.1K",
      likes: 298,
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
      description: "Hilarious situations from a Telugu village that will make you laugh out loud.",
      language: "Telugu",
      awards: ["Best Comedy 2023"],
      featured: true
    },
    {
      id: 4,
      title: "AI Dreams",
      director: "Suresh Babu",
      genre: "Sci-Fi",
      year: "2024",
      duration: "18 min",
      views: "1.2K",
      likes: 89,
      thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
      description: "A futuristic story exploring the relationship between artificial intelligence and humanity.",
      language: "Telugu",
      awards: [],
      featured: false
    },
    {
      id: 5,
      title: "Prema Katha",
      director: "Anitha Reddy",
      genre: "Romance",
      year: "2023",
      duration: "10 min",
      views: "3.7K",
      likes: 324,
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      description: "A beautiful love story that transcends time and societal boundaries.",
      language: "Telugu",
      awards: ["Best Romance 2023"],
      featured: true
    },
    {
      id: 6,
      title: "The Haunted Temple",
      director: "Venkat Reddy",
      genre: "Horror",
      year: "2024",
      duration: "14 min",
      views: "2.9K",
      likes: 201,
      thumbnail: "https://img.youtube.com/vi/y6120QOlsfU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/y6120QOlsfU",
      description: "A spine-chilling horror story rooted in Telugu folklore and ancient traditions.",
      language: "Telugu",
      awards: [],
      featured: false
    }
  ];

  const genres = ["all", "Drama", "Comedy", "Thriller", "Romance", "Horror", "Sci-Fi"];
  const years = ["all", "2024", "2023", "2022", "2021"];

  const filteredFilms = films.filter(film => {
    return (
      (selectedGenre === "all" || film.genre === selectedGenre) &&
      (selectedYear === "all" || film.year === selectedYear)
    );
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Telugu Short Films Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and watch amazing short films created by our talented community
          </p>
        </div>

        {/* Filters and Submit Button */}
        <Card className="mb-8 border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 flex flex-col md:flex-row gap-4">
                <Input placeholder="Search films..." className="flex-1" />
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map(genre => (
                      <SelectItem key={genre} value={genre}>
                        {genre === "all" ? "All Genres" : genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full md:w-[120px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>
                        {year === "all" ? "All Years" : year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-gradient-to-r from-rose-600 to-orange-500">
                <Plus className="h-4 w-4 mr-2" />
                Submit Film
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Featured Films */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Films</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.filter(film => film.featured).map((film) => (
              <Card key={film.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
                <div className="relative">
                  <img 
                    src={film.thumbnail} 
                    alt={film.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-rose-600">
                    Featured
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold group-hover:text-rose-600 transition-colors">
                    {film.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>by {film.director}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{film.genre}</Badge>
                      <span>{film.year}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {film.description}
                  </CardDescription>
                  
                  {film.awards.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {film.awards.map((award, index) => (
                        <Badge key={index} className="bg-yellow-100 text-yellow-700 text-xs">
                          🏆 {award}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {film.duration}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {film.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {film.likes}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-3 w-3 mr-1" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="h-3 w-3" />
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-rose-600 to-orange-500">
                      <Play className="h-3 w-3 mr-1" />
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Films */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Films</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFilms.filter(film => !film.featured).map((film) => (
              <Card key={film.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
                <div className="relative">
                  <img 
                    src={film.thumbnail} 
                    alt={film.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold group-hover:text-rose-600 transition-colors">
                    {film.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>by {film.director}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{film.genre}</Badge>
                      <span>{film.year}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {film.description}
                  </CardDescription>
                  
                  {film.awards.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {film.awards.map((award, index) => (
                        <Badge key={index} className="bg-yellow-100 text-yellow-700 text-xs">
                          🏆 {award}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {film.duration}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {film.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {film.likes}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-3 w-3 mr-1" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="h-3 w-3" />
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-rose-600 to-orange-500">
                      <Play className="h-3 w-3 mr-1" />
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredFilms.length === 0 && (
          <div className="text-center py-12">
            <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No films found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilmLibrary;
