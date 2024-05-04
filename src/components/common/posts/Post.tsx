import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../../constants/index";
import PostsCards from "./components/PostsCards";
import Loading from "../Loading";

const Post = () => {
  const [posts, setPosts] = useState([]);
  // make hook for not use it in many places(proxy pattern) OR useAsyncState
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_ENDPOINTS.posts}`).then((res) => {
      setPosts(res.data.posts);
    }).catch((err) => {
      console.log(err);
    }).finally(() => setLoading(false));
  }, [])
  return (
    <div>
      {loading ? <Loading /> : <PostsCards posts={posts}>Post</PostsCards>}
    </div>
  )
}

export default Post