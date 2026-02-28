import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rnfhyxtxtbsuxjhirwrp.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = "sb_publishable_8Tg07FXSN26zYUb76t5cXQ_EbzvYsgR";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZmh5eHR4dGJzdXhqaGlyd3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NjYwMjcsImV4cCI6MjA4NzU0MjAyN30.2jJFAIeGpKLbmnDhIqTfX8uUJUotZOjKh6ugQMvyxtQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
