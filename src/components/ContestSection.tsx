
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, DollarSign, Users, Clock } from "lucide-react";

const ContestSection = () => {
  const contests = [
    {
      id: 1,
      title: "Telugu Short Film Festival 2024",
      summary: "Annual celebration of Telugu short films with categories for drama, comedy, and thriller",
      prize: "₹50,000",
      fee: "₹500",
      deadline: "2024-12-31",
      participants: 45,
      status: "Open",
      category: "General",
      guidelines: "Max 15 minutes, original content, Telugu language",
      image: "https://images.unsplash.com/photo-1489599511986-ec2c6d83a017?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Youth Filmmaker Awards",
      summary: "Contest for filmmakers under 25 years showcasing fresh perspectives and innovative storytelling",
      prize: "₹25,000",
      fee: "₹300",
      deadline: "2024-11-15",
      participants: 28,
      status: "Open",
      category: "Youth",
      guidelines: "Under 25 age limit, max 10 minutes, any genre",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Women in Cinema Challenge",
      summary: "Celebrating female filmmakers and stories that highlight women's experiences and empowerment",
      prize: "₹30,000",
      fee: "₹400",
      deadline: "2024-10-30",
      participants: 32,
      status: "Closing Soon",
      category: "Women",
      guidelines: "Female director/producer, women-centric themes, max 12 minutes",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Rural Stories Competition",
      summary: "Short films that capture the essence of rural life, traditions, and contemporary challenges",
      prize: "₹40,000",
      fee: "₹450",
      deadline: "2025-01-20",
      participants: 18,
      status: "Open",
      category: "Rural",
      guidelines: "Rural setting, authentic portrayal, max 20 minutes",
      image: "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Comedy Short Film Awards",
      summary: "Best comedy short films that bring laughter while maintaining storytelling excellence",
      prize: "₹20,000",
      fee: "₹250",
      deadline: "2024-09-30",
      participants: 67,
      status: "Closed",
      category: "Comedy",
      guidelines: "Comedy genre, family-friendly content, max 8 minutes",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Social Message Film Contest",
      summary: "Films that address social issues and promote positive change in society",
      prize: "₹35,000",
      fee: "₹350",
      deadline: "2024-12-15",
      participants: 22,
      status: "Open",
      category: "Social",
      guidelines: "Social message theme, educational value, max 15 minutes",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=200&fit=crop"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-700";
      case "Closing Soon": return "bg-yellow-100 text-yellow-700";
      case "Closed": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Short Film Contests
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Participate in exciting contests, showcase your talent, and win amazing prizes
          </p>
        </div>

        {/* Featured Contest Banner */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex-1 mb-6 lg:mb-0">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  🏆 Featured Contest
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {contests[0].title}
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  {contests[0].summary}
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-2" />
                    Prize: {contests[0].prize}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Deadline: {formatDate(contests[0].deadline)}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {contests[0].participants} entries
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Submit Your Film
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.slice(1).map((contest) => (
            <Card key={contest.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${contest.image})` }}>
                <div className="h-full bg-black/30 flex items-end p-4">
                  <Badge className={getStatusColor(contest.status)}>
                    {contest.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      {contest.title}
                    </CardTitle>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {contest.category}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {contest.summary}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                    <span className="font-semibold text-green-600">{contest.prize}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Fee: {contest.fee}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                    <span>{formatDate(contest.deadline)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{contest.participants} entries</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium mb-1">Guidelines:</p>
                  <p className="text-xs text-gray-700">{contest.guidelines}</p>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-orange-500"
                    disabled={contest.status === "Closed"}
                  >
                    {contest.status === "Closed" ? "Closed" : "Submit Film"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 border-0 shadow-sm bg-gradient-to-r from-teal-50 to-orange-50">
          <CardContent className="text-center p-8">
            <Trophy className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to Showcase Your Film?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Join our community of filmmakers and get your work recognized by industry professionals.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-orange-500">
              Submit Your First Film
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContestSection;
