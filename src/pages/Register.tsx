import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, User, Mail, ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  referralCode: z.string().trim().min(1, "Please enter a referral code or 1 if not referred").max(50),
  acceptTerms: z.literal(true, { errorMap: () => ({ message: "You must accept the Terms and Conditions" }) }),
});

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = registerSchema.safeParse({ fullName, email, referralCode, acceptTerms });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("training_signups")
        .insert({ email: email.trim().toLowerCase(), full_name: fullName.trim(), referral_code: referralCode.trim() });

      if (error) {
        if (error.code === "23505") {
          toast.error("This email is already registered!");
        } else {
          throw error;
        }
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      toast.success("Registration successful! Redirecting to payment...");

      setTimeout(() => {
        window.location.href = "https://paystack.shop/pay/gef108i-z6";
      }, 2500);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <Link to="/" className="absolute top-6 left-6 z-20">
        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-6 gap-4 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Registration Successful! 🎉</h2>
              <p className="text-muted-foreground">
                You're being redirected to complete your payment...
              </p>
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Register Now</h1>
                <p className="text-muted-foreground">
                  Fill in your details to secure your spot
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="bg-secondary/50 border-border"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-secondary/50 border-border"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referralCode" className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Referral Code
                  </Label>
                  <Input
                    id="referralCode"
                    type="text"
                    placeholder="Enter referral code or 1 if not referred"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    required
                    className="bg-secondary/50 border-border"
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground">Enter N if you were not referred by anyone</p>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                    disabled={isLoading}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-snug cursor-pointer">
                    I accept the Terms and Conditions
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground font-semibold py-6 rounded-xl"
                  disabled={isLoading || !acceptTerms}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
