import { useEffect, useState } from 'react'

const useFetch = (url) => {
    
    const [data, setData] = useState([])
    const [other,setOther]=useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await fetch(url)

                if(!res.ok){
                    setError('failed to fetch')
                  
                }
                const result = await res.json()
                setData(result.data)
                setOther(result.other)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        };
        fetchData()
        
    },[url])


  return {
    data,
    other,
    error,
    loading,
  }
  
}

export default useFetch
