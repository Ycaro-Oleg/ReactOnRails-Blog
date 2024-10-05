// API_URL comes from the .env.development file
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants"

function PostList() {
    const [posts, setPosts] = useState([])
    const [, setLoading] = useState(true)
    const [, setError] = useState(null)
    useEffect(() => {
      async function loadPosts() {
        try {
          const response = await fetch (API_URL)
          if (response.ok) {
            const json = await response.json()
            setPosts(json)
          } else {
            throw response
          }
        } catch(e) {
          setError("Ocorreu um erro.")
          console.log("ERROR", e)
        } finally {
          setLoading(false);
        }
      }
      loadPosts()
    }, [])

  return(
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to = {`/posts/${post.id}`} className="post-title">
              {post.title}
            </Link>
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList;