import { useEffect, useState } from "react"

const useFetch = (url, query) => {
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      if (query) {
         try {
            fetch(url)
               .then(res => res.json())
               .then(data => {
                  console.log(data.results);
                  setData(data.results);
               })
         } catch (err) {
            setError(err)
         } finally {
            setLoading(false)
         }
      }
   }, [url, query])

   return { data, setData, error, loading }

}

export default useFetch