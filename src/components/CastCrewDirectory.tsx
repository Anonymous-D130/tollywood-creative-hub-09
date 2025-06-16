
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, MessageCircle, Heart, Users } from "lucide-react";

const CastCrewDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const talents = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Actor",
      location: "Hyderabad",
      experience: "5+ years",
      rate: "₹5,000/day",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
      skills: ["Drama", "Comedy", "Dance"],
      available: true,
      description: "Experienced actress with strong background in Telugu cinema"
    },
    {
      id: 2,
      name: "Ravi Kumar",
      role: "DOP",
      location: "Vijayawada",
      experience: "7+ years",
      rate: "₹8,000/day",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Cinematography", "Drone", "Color Grading"],
      available: true,
      description: "Award-winning cinematographer specializing in short films"
    },
    {
      id: 3,
      name: "Anitha Reddy",
      role: "Editor",
      location: "Hyderabad",
      experience: "4+ years",
      rate: "₹3,500/day",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Premiere Pro", "After Effects", "DaVinci"],
      available: false,
      description: "Creative editor with expertise in narrative storytelling"
    },
    {
      id: 4,
      name: "Suresh Babu",
      role: "Director",
      location: "Warangal",
      experience: "10+ years",
      rate: "₹12,000/day",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["Direction", "Screenwriting", "Production"],
      available: true,
      description: "Veteran director with multiple award-winning short films"
    },
    {
      id: 5,
      name: "Lakshmi Devi",
      role: "Actor",
      location: "Guntur",
      experience: "3+ years",
      rate: "₹4,000/day",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      skills: ["Method Acting", "Classical Dance", "Singing"],
      available: true,
      description: "Versatile actress with training in classical arts"
    },
    {
      id: 6,
      name: "Venkat Reddy",
      role: "Sound Engineer",
      location: "Hyderabad",
      experience: "6+ years",
      rate: "₹6,000/day",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      skills: ["Sound Design", "Mixing", "Foley"],
      available: true,
      description: "Professional sound engineer with state-of-the-art equipment"
    }
  ];

  const roles = ["all", "Actor", "Director", "DOP", "Editor", "Sound Engineer", "Producer"];
  const locations = ["all", "Hyderabad", "Vijayawada", "Warangal", "Guntur", "Tirupati"];

  const filteredTalents = talents.filter(talent => {
    return (
      (searchTerm === "" || talent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedRole === "all" || talent.role === selectedRole) &&
      (selectedLocation === "all" || talent.location === selectedLocation)
    );
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Cast & Crew
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with talented professionals in the Telugu film industry
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by name or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map(role => (
                    <SelectItem key={role} value={role}>
                      {role === "all" ? "All Roles" : role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results - Half Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTalents.map((talent) => (
            <Card key={talent.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
              <div className="flex">
                {/* Left side - Profile Image */}
                <div className="w-32 h-32 flex-shrink-0 relative">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage 
                      src={talent.image} 
                      alt={talent.name} 
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="rounded-none w-full h-full text-2xl">
                      {talent.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className={`absolute top-2 left-2 text-xs ${talent.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {talent.available ? "Available" : "Busy"}
                  </Badge>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{talent.name}</h3>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">{talent.role}</Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span>{talent.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-1">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {talent.description}
                  </p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-3 w-3 mr-1" />
                      {talent.location}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{talent.experience}</span>
                      <span className="font-semibold text-teal-600">{talent.rate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {talent.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs px-2 py-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      View Profile
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-teal-600 to-orange-500 text-xs">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredTalents.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No talents found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CastCrewDirectory;
