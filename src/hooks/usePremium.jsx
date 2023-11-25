import useAxiosPublic from "./useAxiosPublic";
import {useQuery} from "@tanstack/react-query"
const usePremium = () => {
    const axiosPublic = useAxiosPublic()
    const {data: premium = []} = useQuery({
        queryKey: ['premium'],
        queryFn: async() => {
            const res = await axiosPublic.get('/premium');
            return res.data;
        }

        
    })
    return [premium]
}

export default usePremium;