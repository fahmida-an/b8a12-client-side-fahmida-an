import useAxiosPublic from "./useAxiosPublic";
import {useQuery} from "@tanstack/react-query"

const useUsersPublic = () => {
    const axiosPublic= useAxiosPublic()
    const {data: users=[], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await axiosPublic.get("/users")
          return res.data;
        }
    })

    return [users, refetch]
};

export default useUsersPublic;