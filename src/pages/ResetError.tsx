
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, RefreshCw, ArrowLeft } from "lucide-react";

const ResetError = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-red-600">Reset Link Invalid</CardTitle>
          <CardDescription className="text-base">
            The password reset link has expired or is invalid
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800 mb-2">
              <strong>This could happen if:</strong>
            </p>
            <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
              <li>The reset link has expired (links expire after 24 hours)</li>
              <li>The link has already been used</li>
              <li>The link was copied incorrectly</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <Button
              className="w-full bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600"
              asChild
            >
              <Link to="/forgot-password">
                <RefreshCw className="h-4 w-4 mr-2" />
                Request New Reset Link
              </Link>
            </Button>
            
            <Button variant="outline" className="w-full" asChild>
              <Link to="/login">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </Button>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              Need help?{" "}
              <a 
                href="mailto:support@telugufilms.com" 
                className="text-teal-600 hover:text-teal-700 font-medium hover:underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetError;
