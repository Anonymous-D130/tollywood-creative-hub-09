
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Plus, Edit, Eye, DollarSign, Download, Heart, Star } from "lucide-react";

const WritersRoom = () => {
  const [activeTab, setActiveTab] = useState("browse");

  const scripts = [
    {
      id: 1,
      title: "The Last Letter",
      author: "Priya Sharma",
      genre: "Drama",
      pages: 12,
      price: "₹2,500",
      type: "Paid",
      rating: 4.7,
      downloads: 23,
      description: "A heartwarming story about a daughter discovering her late father's letters.",
      tags: ["Family", "Emotional", "Short Film"],
      publishDate: "2024-03-15",
      featured: true
    },
    {
      id: 2,
      title: "Urban Chaos",
      author: "Ravi Kumar",
      genre: "Thriller",
      pages: 18,
      price: "Free",
      type: "Free",
      rating: 4.4,
      downloads: 87,
      description: "A gripping thriller set in the busy streets of Hyderabad.",
      tags: ["Action", "Urban", "Suspense"],
      publishDate: "2024-02-28",
      featured: false
    },
    {
      id: 3,
      title: "Village Stories",
      author: "Lakshmi Devi",
      genre: "Comedy",
      pages: 8,
      price: "₹1,200",
      type: "Paid",
      rating: 4.9,
      downloads: 34,
      description: "Hilarious tales from a Telugu village with colorful characters.",
      tags: ["Rural", "Comedy", "Cultural"],
      publishDate: "2024-03-20",
      featured: true
    },
    {
      id: 4,
      title: "Digital Dreams",
      author: "Suresh Babu",
      genre: "Sci-Fi",
      pages: 15,
      price: "₹3,000",
      type: "Paid",
      rating: 4.5,
      downloads: 19,
      description: "A futuristic story about AI and human relationships.",
      tags: ["Technology", "Future", "Drama"],
      publishDate: "2024-01-10",
      featured: false
    },
    {
      id: 5,
      title: "Love in Lockdown",
      author: "Anitha Reddy",
      genre: "Romance",
      pages: 10,
      price: "Free",
      type: "Free",
      rating: 4.3,
      downloads: 156,
      description: "A romantic story that bloomed during the pandemic.",
      tags: ["Romance", "Contemporary", "Hope"],
      publishDate: "2024-02-14",
      featured: false
    },
    {
      id: 6,
      title: "The Ritual",
      author: "Venkat Reddy",
      genre: "Horror",
      pages: 14,
      price: "₹1,800",
      type: "Paid",
      rating: 4.6,
      downloads: 41,
      description: "A spine-chilling horror story rooted in Telugu folklore.",
      tags: ["Horror", "Folklore", "Supernatural"],
      publishDate: "2024-03-01",
      featured: true
    }
  ];

  const myScripts = [
    {
      id: 1,
      title: "Untitled Project",
      lastEdited: "2024-03-22",
      status: "Draft",
      pages: 5,
      wordCount: 1250
    },
    {
      id: 2,
      title: "The Tea Seller",
      lastEdited: "2024-03-20",
      status: "Published",
      pages: 12,
      wordCount: 3200
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Writer's Room
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create, publish, and discover amazing scripts for Telugu short films
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="browse">Browse Scripts</TabsTrigger>
            <TabsTrigger value="my-scripts">My Scripts</TabsTrigger>
            <TabsTrigger value="editor">Script Editor</TabsTrigger>
          </TabsList>

          {/* Browse Scripts Tab */}
          <TabsContent value="browse" className="space-y-6">
            {/* Filters */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input placeholder="Search scripts..." className="flex-1" />
                  <Select>
                    <SelectTrigger className="w-full md:w-[150px]">
                      <SelectValue placeholder="Genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Genres</SelectItem>
                      <SelectItem value="drama">Drama</SelectItem>
                      <SelectItem value="comedy">Comedy</SelectItem>
                      <SelectItem value="thriller">Thriller</SelectItem>
                      <SelectItem value="romance">Romance</SelectItem>
                      <SelectItem value="horror">Horror</SelectItem>
                      <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full md:w-[150px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Featured Scripts */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Scripts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {scripts.filter(script => script.featured).map((script) => (
                  <Card key={script.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                            {script.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600 mb-2">by {script.author}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">{script.genre}</Badge>
                            <Badge className={script.type === "Free" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                              {script.type}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-600">
                        {script.description}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-1">
                        {script.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>Pages: {script.pages}</div>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          {script.rating}
                        </div>
                        <div>Downloads: {script.downloads}</div>
                        <div className="font-semibold text-green-600">{script.price}</div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-green-600 to-teal-500">
                          {script.type === "Free" ? (
                            <>
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </>
                          ) : (
                            <>
                              <DollarSign className="h-3 w-3 mr-1" />
                              Buy
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Scripts */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">All Scripts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scripts.filter(script => !script.featured).map((script) => (
                  <Card key={script.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                            {script.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600 mb-2">by {script.author}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">{script.genre}</Badge>
                            <Badge className={script.type === "Free" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                              {script.type}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-600">
                        {script.description}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-1">
                        {script.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>Pages: {script.pages}</div>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          {script.rating}
                        </div>
                        <div>Downloads: {script.downloads}</div>
                        <div className="font-semibold text-green-600">{script.price}</div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-green-600 to-teal-500">
                          {script.type === "Free" ? (
                            <>
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </>
                          ) : (
                            <>
                              <DollarSign className="h-3 w-3 mr-1" />
                              Buy
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* My Scripts Tab */}
          <TabsContent value="my-scripts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">My Scripts</h2>
              <Button className="bg-gradient-to-r from-green-600 to-teal-500">
                <Plus className="h-4 w-4 mr-2" />
                New Script
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myScripts.map((script) => (
                <Card key={script.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">{script.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge className={script.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                        {script.status}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {new Date(script.lastEdited).toLocaleDateString()}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Pages: {script.pages}</div>
                      <div>Words: {script.wordCount}</div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-green-600 to-teal-500">
                        <Eye className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Script Editor Tab */}
          <TabsContent value="editor" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Script Editor</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Save Draft</Button>
                    <Button size="sm" className="bg-gradient-to-r from-green-600 to-teal-500">
                      Publish
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Script Title</label>
                    <Input placeholder="Enter script title..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drama">Drama</SelectItem>
                        <SelectItem value="comedy">Comedy</SelectItem>
                        <SelectItem value="thriller">Thriller</SelectItem>
                        <SelectItem value="romance">Romance</SelectItem>
                        <SelectItem value="horror">Horror</SelectItem>
                        <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <Textarea 
                    placeholder="Brief description of your script..." 
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Script Content</label>
                  <Textarea 
                    placeholder="Start writing your script here..." 
                    className="min-h-[400px] font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (if paid)</label>
                    <Input placeholder="₹0" type="number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <Input placeholder="drama, family, emotional" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WritersRoom;
