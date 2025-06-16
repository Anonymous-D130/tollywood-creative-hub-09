
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, MessageCircle, User, Settings, LogOut } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Telugu Films</h1>
              <p className="text-xs text-gray-500">Creator Marketplace</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <TabsList className="grid grid-cols-6 w-auto bg-gray-100/50">
            <TabsTrigger value="home" className="text-sm">Home</TabsTrigger>
            <TabsTrigger value="directory" className="text-sm">Cast & Crew</TabsTrigger>
            <TabsTrigger value="contests" className="text-sm">Contests</TabsTrigger>
            <TabsTrigger value="scripts" className="text-sm">Scripts</TabsTrigger>
            <TabsTrigger value="films" className="text-sm">Films</TabsTrigger>
            <TabsTrigger value="feed" className="text-sm">Community</TabsTrigger>
          </TabsList>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  {hasNotifications && (
                    <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500"></Badge>
                  )}
                </Button>

                {/* Messages */}
                <Button variant="ghost" size="sm" className="relative">
                  <MessageCircle className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-teal-500"></Badge>
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">Raj Kumar</p>
                        <p className="text-xs text-muted-foreground">raj@example.com</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600">
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
