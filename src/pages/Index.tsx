
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import CastCrewDirectory from "@/components/CastCrewDirectory";
import ContestSection from "@/components/ContestSection";
import FilmLibrary from "@/components/FilmLibrary";
import WritersRoom from "@/components/WritersRoom";
import CommunityFeed from "@/components/CommunityFeed";
import Inbox from "@/components/Inbox";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-teal-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="home" className="mt-0">
          <Hero />
          <FeaturesSection />
          <SubscriptionPlans />
        </TabsContent>
        
        <TabsContent value="directory" className="mt-0">
          <CastCrewDirectory />
        </TabsContent>
        
        <TabsContent value="contests" className="mt-0">
          <ContestSection />
        </TabsContent>
        
        <TabsContent value="scripts" className="mt-0">
          <WritersRoom />
        </TabsContent>
        
        <TabsContent value="films" className="mt-0">
          <FilmLibrary />
        </TabsContent>
        
        <TabsContent value="inbox" className="mt-0">
          <Inbox />
        </TabsContent>
        
        <TabsContent value="feed" className="mt-0">
          <CommunityFeed />
        </TabsContent>
      </Tabs>
      
      <Footer />
    </div>
  );
};

export default Index;
