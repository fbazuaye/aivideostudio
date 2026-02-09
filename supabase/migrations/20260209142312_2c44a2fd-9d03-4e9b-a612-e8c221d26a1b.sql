-- Drop the restrictive select policy and replace with one that allows service role reads
DROP POLICY IF EXISTS "Signups are not publicly readable" ON public.training_signups;

-- Re-create: still block anon reads (admin will use service role via edge function)
CREATE POLICY "Signups are not publicly readable"
ON public.training_signups
FOR SELECT
USING (false);
