-- Create table for email signups
CREATE TABLE public.training_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.training_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can signup for training"
ON public.training_signups
FOR INSERT
WITH CHECK (true);

-- Only allow reading own signup (if needed later with auth)
CREATE POLICY "Signups are not publicly readable"
ON public.training_signups
FOR SELECT
USING (false);