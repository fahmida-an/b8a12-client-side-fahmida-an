import {useQuery} from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useNews = () => {
    const axiosPublic = useAxiosPublic()
    const {data: news=[], refetch} = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await axiosPublic.get('/news');
            return res.data;
        }
    })

    return [news, refetch]
}

export default useNews;