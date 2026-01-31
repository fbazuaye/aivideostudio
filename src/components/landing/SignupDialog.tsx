import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { Play, Loader2, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

interface SignupDialogProps {
  children: React.ReactNode;
}

export const SignupDialog = forwardRef<HTMLDivElement, SignupDialogProps>(({ children }, ref) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("training_signups")
        .insert({ email: email.trim().toLowerCase() });

      if (error) {
        if (error.code === "23505") {
          toast.error("This email is already registered!");
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast.success("You're registered! Check your email for details.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form when closing
      setTimeout(() => {
        setEmail("");
        setIsSuccess(false);
      }, 300);
    }
  };

  return (
    <div ref={ref}>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {isSuccess ? "You're In! 🎉" : "Reserve Your Free Seat"}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {isSuccess 
              ? "Check your inbox for the training details and calendar invite."
              : "Enter your email to join the free live AI video training."}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-6 gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <p className="text-center text-muted-foreground">
              We've sent you an email with all the details for the training session.
            </p>
            <Button 
              onClick={() => handleOpenChange(false)}
              className="mt-2"
            >
              Got it!
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
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
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary text-primary-foreground font-semibold py-6 rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Reserving...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Reserve My Free Seat
                </>
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              100% free • No credit card required • Instant access
            </p>
          </form>
        )}
        </DialogContent>
      </Dialog>
    </div>
  );
});

SignupDialog.displayName = "SignupDialog";
