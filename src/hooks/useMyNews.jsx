import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useMyNews = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)

    const {refetch, data: mynews=[]} = useQuery({
        queryKey: ['mynews', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/mynews?email=${user.email}`)
            return res.data;
        }
   })
   return [mynews, refetch]
  
};

export default useMyNews;