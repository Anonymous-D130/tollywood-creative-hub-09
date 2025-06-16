
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "₹0",
      period: "14 days",
      description: "Perfect for exploring the platform",
      icon: <Star className="h-6 w-6 text-blue-500" />,
      gradient: "from-blue-100 to-blue-200",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      popular: false,
      features: [
        "Browse cast & crew directory",
        "View public profiles",
        "Read free scripts",
        "Watch film library",
        "Limited community posts (5/month)",
        "Basic profile creation"
      ],
      limitations: [
        "No direct messaging",
        "Cannot submit to contests",
        "Cannot sell scripts",
        "No premium support"
      ]
    },
    {
      name: "Monthly Creator",
      price: "₹499",
      period: "per month",
      description: "Full access for active creators",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      gradient: "from-orange-100 to-orange-200",
      buttonClass: "bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600",
      popular: true,
      features: [
        "Everything in Free Trial",
        "Unlimited messaging & chat",
        "Submit to contests",
        "Sell & buy scripts",
        "Upload short films",
        "Priority profile visibility",
        "Advanced search filters",
        "Create team collections",
        "Community post priority",
        "Email support"
      ],
      limitations: []
    },
    {
      name: "Annual Pro",
      price: "₹4,999",
      period: "per year",
      description: "Best value for serious filmmakers",
      icon: <Crown className="h-6 w-6 text-purple-500" />,
      gradient: "from-purple-100 to-purple-200",
      buttonClass: "bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600",
      popular: false,
      savings: "Save ₹990",
      features: [
        "Everything in Monthly Creator",
        "2 months free (14 months total)",
        "Priority contest entry",
        "Featured profile badge",
        "Advanced analytics",
        "White-label portfolio page",
        "Direct contact from producers",
        "Premium script templates",
        "Priority customer support",
        "Early access to new features"
      ],
      limitations: []
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-teal-100 to-orange-100 text-teal-700 border-teal-200">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Creative Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start for free and upgrade when you're ready to unlock the full potential 
            of our platform for your filmmaking career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                plan.popular ? 'ring-2 ring-orange-200 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              {plan.savings && (
                <Badge className="absolute -top-3 right-4 bg-green-600 text-white px-3 py-1">
                  {plan.savings}
                </Badge>
              )}

              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button className={`w-full ${plan.buttonClass} text-white py-3 text-lg font-semibold`}>
                  {plan.name === "Free Trial" ? "Start Free Trial" : "Get Started"}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    What's Included:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-600 text-sm uppercase tracking-wide">
                      Limitations:
                    </h4>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                        <span className="text-gray-600 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">
                Yes, you can upgrade or downgrade your subscription at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Is there a refund policy?</h4>
              <p className="text-gray-600 text-sm">
                We offer a 30-day money-back guarantee for all paid subscriptions if you're not satisfied.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">
                We accept all major credit cards, debit cards, UPI, and net banking through secure payment gateways.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer student discounts?</h4>
              <p className="text-gray-600 text-sm">
                Yes! Students get 40% off on all plans. Contact support with your student ID for verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
