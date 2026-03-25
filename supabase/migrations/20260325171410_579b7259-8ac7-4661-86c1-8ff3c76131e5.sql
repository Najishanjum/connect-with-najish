-- Create a simple visitor counter table
CREATE TABLE public.page_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.page_visits ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (anonymous visitors)
CREATE POLICY "Anyone can insert visits" ON public.page_visits FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Allow anyone to read the count
CREATE POLICY "Anyone can read visits" ON public.page_visits FOR SELECT TO anon, authenticated USING (true);