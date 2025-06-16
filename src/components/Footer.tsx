
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Telugu Films</h3>
                <p className="text-gray-400 text-sm">Creator Marketplace</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The complete marketplace for Telugu short film creators. Connect, create, and collaborate 
              with talented professionals in the industry.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cast & Crew Directory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Film Contests</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Writer's Room</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Film Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Feed</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Messaging</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Filmmaker Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industry News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates on contests, opportunities, and platform features.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600">
                Subscribe
              </Button>
            </div>
            <div className="mt-6">
              <Badge className="bg-green-100 text-green-700 mb-2">✨ New Feature</Badge>
              <p className="text-sm text-gray-400">
                AI-powered script analysis now available in Writer's Room!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-teal-400" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400 text-sm">support@telugufilms.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <Phone className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-400 text-sm">+91 40 1234 5678</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="font-medium">Office</p>
                <p className="text-gray-400 text-sm">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Telugu Films Marketplace. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-700">🟢 All systems operational</Badge>
            <span className="text-gray-400 text-sm">v2.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
