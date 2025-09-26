import { supabase } from "@/supabase/connection";

export async function getBarberos() {
    const {data , error} = await supabase.from('barberos').select('*')

    if(error){
        console.error('Error al fetch barberos' , error.message)
        return[]
    }

    return data ?? []
}