import {useQuery} from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useNewsSearch = (search) => {
    const axiosPublic = useAxiosPublic()
    const {data: newsSearch=[], refetch} = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/news?search=${search}`);
            return res.data;
        }
    }, [search])

    return [newsSearch, refetch]
}

export default useNewsSearch;