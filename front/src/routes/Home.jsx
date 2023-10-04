import axios from 'axios'
import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

const Home = () => {

  const [unprotectedContent, setUnprotectedContent] = useState("")

  useEffect(() => {
    if (unprotectedContent === "") {
      getUnprotectedContent()
    }
  }, [unprotectedContent])

  const getUnprotectedContent = async () => {
    let content = await axios.get(API_URL + "/unprotected")
    setUnprotectedContent(content.data)
  }

  return (
    <div className='border rounded m-3 p-3'>
      <h1>Home</h1>
      <p>This should be visible anytime</p>
      {unprotectedContent}
    </div>
  )
}

export default Home