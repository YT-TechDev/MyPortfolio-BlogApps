import { Supabase } from './Supabase';

export const getAllData = async () => {
    const BlogData = await Supabase.from("BlogCardDB").select('*');
    return BlogData.data;
}
