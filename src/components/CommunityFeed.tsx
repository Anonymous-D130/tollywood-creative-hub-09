
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MessageSquare, 
  Heart, 
  Bookmark, 
  Share, 
  Plus, 
  Camera, 
  Users,
  Calendar,
  MapPin,
  TrendingUp
} from "lucide-react";

const CommunityFeed = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const posts = [
    {
      id: 1,
      author: "Priya Sharma",
      avatar: "/placeholder-avatar.jpg",
      role: "Director",
      time: "2 hours ago",
      type: "question",
      content: "Looking for recommendations on affordable camera equipment for short film shoots. What's your go-to setup for indie filmmaking?",
      image: null,
      likes: 12,
      comments: 8,
      saves: 3,
      trending: true,
      tags: ["Equipment", "Filmmaking", "Budget"]
    },
    {
      id: 2,
      author: "Ravi Kumar",
      avatar: "/placeholder-avatar.jpg",
      role: "DOP",
      time: "5 hours ago",
      type: "update",
      content: "Just wrapped shooting for 'Urban Dreams' - 3 days of intense filming in Hyderabad streets. The energy of the cast and crew was incredible! Can't wait to share the final edit.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=300&fit=crop",
      likes: 24,
      comments: 15,
      saves: 7,
      trending: false,
      tags: ["BTS", "Hyderabad", "Filming"]
    },
    {
      id: 3,
      author: "Lakshmi Devi",
      avatar: "/placeholder-avatar.jpg",
      role: "Actor",
      time: "1 day ago",
      type: "casting",
      content: "🎬 CASTING CALL: Looking for a male lead (25-30 years) for a romantic short film shooting in Vijayawada next month. Must be fluent in Telugu. Interested actors, please DM with your portfolio!",
      image: null,
      likes: 18,
      comments: 22,
      saves: 12,
      trending: true,
      tags: ["Casting", "Romance", "Vijayawada"]
    },
    {
      id: 4,
      author: "Suresh Babu",
      avatar: "/placeholder-avatar.jpg",
      role: "Producer",
      time: "2 days ago",
      type: "achievement",
      content: "Proud to announce that our short film 'Village Tales' has been selected for the Chennai Short Film Festival! This wouldn't have been possible without our amazing team. Thank you everyone! 🏆",
      image: "https://images.unsplash.com/photo-1489599511986-ec2c6d83a017?w=500&h=300&fit=crop",
      likes: 56,
      comments: 31,
      saves: 18,
      trending: true,
      tags: ["Achievement", "Festival", "VillageTales"]
    },
    {
      id: 5,
      author: "Anitha Reddy",
      avatar: "/placeholder-avatar.jpg",
      role: "Editor",
      time: "3 days ago",
      type: "tip",
      content: "Pro tip for new editors: Always keep multiple versions of your timeline saved. I learned this the hard way when I lost 8 hours of work due to a software crash. Backup is your best friend!",
      image: null,
      likes: 29,
      comments: 14,
      saves: 23,
      trending: false,
      tags: ["Editing", "Tips", "Workflow"]
    },
    {
      id: 6,
      author: "Venkat Reddy",
      avatar: "/placeholder-avatar.jpg",
      role: "Sound Engineer",
      time: "4 days ago",
      type: "collaboration",
      content: "Working on an exciting horror short film project! The sound design opportunities are incredible. If anyone has experience with creating atmospheric horror sounds, would love to connect and collaborate.",
      image: null,
      likes: 16,
      comments: 9,
      saves: 5,
      trending: false,
      tags: ["Horror", "Sound", "Collaboration"]
    }
  ];

  const filters = [
    { value: "all", label: "All Posts", icon: <MessageSquare className="h-4 w-4" /> },
    { value: "question", label: "Questions", icon: <MessageSquare className="h-4 w-4" /> },
    { value: "casting", label: "Casting Calls", icon: <Users className="h-4 w-4" /> },
    { value: "update", label: "Updates", icon: <TrendingUp className="h-4 w-4" /> },
    { value: "tip", label: "Tips & Advice", icon: <MessageSquare className="h-4 w-4" /> }
  ];

  const filteredPosts = posts.filter(post => 
    selectedFilter === "all" || post.type === selectedFilter
  );

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case "question": return "bg-blue-100 text-blue-700";
      case "casting": return "bg-green-100 text-green-700";
      case "update": return "bg-purple-100 text-purple-700";
      case "achievement": return "bg-yellow-100 text-yellow-700";
      case "tip": return "bg-orange-100 text-orange-700";
      case "collaboration": return "bg-teal-100 text-teal-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Feed
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect, share, and learn from fellow Telugu film creators
          </p>
        </div>

        {/* Create Post */}
        <Card className="mb-8 border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Your profile" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                <Textarea 
                  placeholder="Share your thoughts, ask questions, or post casting calls..." 
                  className="min-h-[100px] border-gray-200"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Add Photo
                    </Button>
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Post Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="update">Update</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                        <SelectItem value="casting">Casting Call</SelectItem>
                        <SelectItem value="tip">Tip/Advice</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-500">
                    <Plus className="h-4 w-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={selectedFilter === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.value)}
                  className={selectedFilter === filter.value 
                    ? "bg-gradient-to-r from-indigo-600 to-purple-500" 
                    : ""
                  }
                >
                  {filter.icon}
                  <span className="ml-2">{filter.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.avatar} alt={post.author} />
                      <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.author}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Badge variant="outline" className="text-xs">{post.role}</Badge>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {post.trending && (
                      <Badge className="bg-red-100 text-red-700">
                        🔥 Trending
                      </Badge>
                    )}
                    <Badge className={getPostTypeColor(post.type)}>
                      {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{post.content}</p>

                {post.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-500">
                      <Bookmark className="h-4 w-4 mr-1" />
                      {post.saves}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-500">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Try adjusting your filter or be the first to post!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunityFeed;
