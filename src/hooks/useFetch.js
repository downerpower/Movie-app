import { useEffect, useState } from "react"

const useFetch = (url, query) => {
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true);
      try {
         fetch(url)
            .then(res => res.json())
            .then(data => {
               setData(data);
               setLoading(false);
            })
      } catch (err) {
         setError(err)
         setLoading(false)
      } finally {
         // setLoading(false)
      }
   }, [url,])

   return { data, setData, error, loading }

}

export default useFetch