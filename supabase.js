
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oobanbwevubnytezbcqv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYmFuYndldnVibnl0ZXpiY3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MTM5MzIsImV4cCI6MjA1MTM4OTkzMn0.0w_p7CqFW8oX3sMWsCXJbqgmY0WdIMgFDkObNvrRIU8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
