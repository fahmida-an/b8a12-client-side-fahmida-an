import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import {useQuery} from "@tanstack/react-query"
const usePremiumPackage = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)
    const { data: premiumPackage = [] } = useQuery({
        queryKey: ['premiumPackage', user?.email],
        queryFn: async () => {
          try {
            const res = await axiosPublic.get(`/premiumPackage?email=${user?.email}`);
            return res.data;
          } catch (error) {
            console.error('Error fetching premium package:', error);
            throw error; // This will trigger the isError flag in useQuery
          }
        }
      });
    return [premiumPackage]
};

export default usePremiumPackage;