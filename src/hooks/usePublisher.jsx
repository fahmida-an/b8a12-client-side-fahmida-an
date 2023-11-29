import {useQuery} from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const usePublisher = () => {
    const axiosPublic = useAxiosPublic()
    const {data: publisher=[], refetch} = useQuery({
        queryKey: ['publisher'],
        queryFn: async () => {
            const res = await axiosPublic.get('/publisher');
            return res.data;
        }
    })

    return [publisher, refetch]
}

export default usePublisher;