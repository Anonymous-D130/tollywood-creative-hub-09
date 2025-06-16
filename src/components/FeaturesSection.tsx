
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageCircle, 
  Award, 
  FileText, 
  Camera, 
  MessageSquare,
  CreditCard,
  Settings
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Cast & Crew Directory",
      description: "Find actors, directors, editors, and more. Filter by role, location, and budget.",
      badge: "Find Talent",
      gradient: "from-teal-100 to-teal-200"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: "Smart Messaging",
      description: "Connect with creators through our built-in chat system. Premium members get full access.",
      badge: "Connect",
      gradient: "from-blue-100 to-blue-200"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Film Contests",
      description: "Participate in exciting short film contests with cash prizes and recognition.",
      badge: "Compete",
      gradient: "from-orange-100 to-orange-200"
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Writer's Room",
      description: "Online script writing platform. Write, edit, and sell your scripts to the community.",
      badge: "Write",
      gradient: "from-purple-100 to-purple-200"
    },
    {
      icon: <Camera className="h-8 w-8 text-rose-600" />,
      title: "Film Library",
      description: "Showcase your short films and discover amazing content from other creators.",
      badge: "Showcase",
      gradient: "from-rose-100 to-rose-200"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Community Feed",
      description: "Ask questions, share updates, and learn from fellow filmmakers in our vibrant community.",
      badge: "Learn",
      gradient: "from-green-100 to-green-200"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-indigo-600" />,
      title: "Flexible Subscriptions",
      description: "Choose from free trial, monthly, or annual plans that fit your creative journey.",
      badge: "Subscribe",
      gradient: "from-indigo-100 to-indigo-200"
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      title: "Profile Management",
      description: "Build your professional profile with portfolio, skills, availability, and rates.",
      badge: "Profile",
      gradient: "from-gray-100 to-gray-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-teal-100 to-orange-100 text-teal-700 border-teal-200">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Create
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From finding the perfect cast to selling your scripts, our platform provides 
            all the tools you need for your creative journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:scale-105">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">{feature.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
