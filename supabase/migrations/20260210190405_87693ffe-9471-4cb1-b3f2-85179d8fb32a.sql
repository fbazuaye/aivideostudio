
ALTER TABLE public.training_signups
ADD COLUMN full_name text NOT NULL DEFAULT '',
ADD COLUMN referral_code text NOT NULL DEFAULT '1';
