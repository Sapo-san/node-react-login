import axios from 'axios'
import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

const Protected = () => {

  const [protectedContent, setProtectedContent] = useState("")

  useEffect(() => {
    if (protectedContent === "") {
      getProtectedContent()
    }
  }, [protectedContent])

  const getProtectedContent = async () => {
    let content = await axios.get(API_URL + "/protected")
    setProtectedContent(content.data)
  }

  return (
    <div className='border rounded m-3 p-3'>
        <h1>Protected Route</h1>
        <p>This shouldn&apos;t be visible unless logged in.</p>
        {protectedContent}
    </div>
  )
}

export default Protected