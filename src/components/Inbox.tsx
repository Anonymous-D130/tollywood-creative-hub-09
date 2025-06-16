
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Star, Archive, Trash2, MessageCircle } from "lucide-react";

const Inbox = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Actress",
      lastMessage: "Thanks for considering me for the role. I'm very interested!",
      time: "2 min ago",
      unread: true,
      avatar: "PS"
    },
    {
      id: 2,
      name: "Arjun Reddy", 
      role: "Director",
      lastMessage: "When can we schedule the audition?",
      time: "1 hour ago",
      unread: true,
      avatar: "AR"
    },
    {
      id: 3,
      name: "Meera Patel",
      role: "Cinematographer", 
      lastMessage: "I've reviewed your script and I love the concept.",
      time: "3 hours ago",
      unread: false,
      avatar: "MP"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Editor",
      lastMessage: "My rates are ₹2000 per day. Let me know if that works.",
      time: "Yesterday",
      unread: false,
      avatar: "VS"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Priya Sharma",
      message: "Hi! I saw your casting call for the lead actress role.",
      time: "10:30 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      message: "Hello Priya! Thanks for your interest. Could you share your portfolio?",
      time: "10:45 AM", 
      isMe: true
    },
    {
      id: 3,
      sender: "Priya Sharma",
      message: "Of course! Here's my profile link and some recent headshots.",
      time: "11:00 AM",
      isMe: false
    },
    {
      id: 4,
      sender: "Priya Sharma", 
      message: "Thanks for considering me for the role. I'm very interested!",
      time: "11:15 AM",
      isMe: false
    }
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-teal-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <MessageCircle className="inline-block mr-3 h-8 w-8 text-teal-600" />
              Inbox
            </h1>
            <p className="text-lg text-gray-600">
              Connect and collaborate with Telugu film creators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Chat List */}
            <Card className="lg:col-span-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Messages</CardTitle>
                  <Badge variant="secondary">{conversations.filter(c => c.unread).length} new</Badge>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="Search conversations..." 
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedChat(conv.id)}
                      className={`p-4 cursor-pointer border-b hover:bg-gray-50 transition-colors ${
                        selectedChat === conv.id ? "bg-teal-50 border-l-4 border-l-teal-500" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-gradient-to-br from-teal-100 to-orange-100 text-teal-700">
                            {conv.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{conv.name}</p>
                            <p className="text-xs text-gray-500">{conv.time}</p>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{conv.role}</p>
                          <p className={`text-sm truncate ${conv.unread ? "text-gray-900 font-medium" : "text-gray-600"}`}>
                            {conv.lastMessage}
                          </p>
                        </div>
                        {conv.unread && (
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="lg:col-span-2 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-gradient-to-br from-teal-100 to-orange-100 text-teal-700">
                            PS
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">Priya Sharma</CardTitle>
                          <CardDescription>Actress • Online now</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Star className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Archive className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              msg.isMe
                                ? "bg-gradient-to-r from-teal-600 to-orange-500 text-white"
                                : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                            <p className={`text-xs mt-1 ${msg.isMe ? "text-white/70" : "text-gray-500"}`}>
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex items-center space-x-2">
                      <Input
                        placeholder="Type your message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
