
import api from "./api"
import { useState, useEffect } from "react"
export function useFetch<T>(url: string, options?: any, monitor = []) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    api
      .get<T>(url, options)
      .then((response) => {
        setData(response.data)
        setLoading(false)
        setError(null)
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch Aborted")
        } else {
          setLoading(false)
          setError(err.message)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [...monitor])

  return { data, loading }
}