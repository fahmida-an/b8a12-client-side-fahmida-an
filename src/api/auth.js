import useAxiosPublic from "../hooks/useAxiosPublic";

export const SaveUser = async user => {
    const axiosPublic = useAxiosPublic()
    const currentUser = {
        email: user.email,
        role: 'normal',
        status: 'Verified'
    }
    const {data} = await axiosPublic.put(`/users/${user?.email}`, currentUser)
    return data;
}
