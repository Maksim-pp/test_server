import { useState } from "react"

export const  useFetching =  (callback) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState('')
    const fetching = async (...arg) =>{
        try{
            setIsLoading(true)
            await callback(...arg)
        } catch(e) {
            setIsError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, isError]
}