import { useContext, useState } from "react"
import { useEffect } from "react"
import { GetRole } from "../api/auth"
import { AuthContext } from "../Provider/AuthProvider"

const useRole =() => {
    const {user} = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        GetRole(user?.email)
        .then(data => {
            setRole(data)
            setLoading(false)
        })
    }, [user])

    return [role, loading]
}

export default useRole;