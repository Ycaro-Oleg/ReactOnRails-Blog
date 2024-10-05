import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants";

function PostEditForm () {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("Ocorreu um erro :", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch (`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title: post.title, body: post.body}),
      });
      if (response.ok) {
        const json = await response.json()
        console.log("Success", json)
        navigate(`/posts/${id}`)
      } else {
        throw response
      }
    } catch(e) {
      console.log("Error: " , e)
    }
  }

  if (!post) return <h2>Loading...</h2>

  return(
    <div>
      <h2>Edit psot</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title</label>
          <br/>
          <input type="text" id="post-title" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}></input>
        </div>
        <div>
          <label htmlFor="post-title">Body</label>
          <br/>
          <textarea id="post-body" value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}></textarea>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default PostEditForm