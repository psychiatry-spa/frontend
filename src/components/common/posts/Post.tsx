import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../../constants/index";
import PostsCards from "./components/PostsCards";
import Loading from "../Loading";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_ENDPOINTS.posts}`).then((res) => {
      setPosts(res.data.posts);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
  }, [])
  return (
    <div>
      {loading ? <Loading /> : <PostsCards posts={posts}>Post</PostsCards>}
    </div>
  )
}

export default Post