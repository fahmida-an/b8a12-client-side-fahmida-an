import {useQuery} from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useTestimonial = () => {
    const axiosPublic = useAxiosPublic()
    const {data: testimonial=[], refetch} = useQuery({
        queryKey: ['testimonial'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonial');
            return res.data;
        }
    })

    return [testimonial, refetch]
}

export default useTestimonial;