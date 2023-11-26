import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import {useQuery} from "@tanstack/react-query"

const usePremiumUser = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {data: isPremium, isPending: isPremiumLoading} = useQuery({
        queryKey: [user?.email, 'isPremium'],
        enabled: !loading,
        queryFn: async() => {
            console.log('Checking ', user);
            const res = await axiosPublic.get(`/users/premium/${user.email}`);
            return res.data?.premium;
        }
    })
    return [isPremium, isPremiumLoading]
};

export default usePremiumUser;