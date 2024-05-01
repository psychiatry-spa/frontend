import { deletePost } from "../../../../api/posts/requests/deletePost";
import PostContent from "./PostContent";
import Icon from "../../Icon";

const SinglePostCard = ({ post }: any) => {
  const formatDate = (date: any) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit'};
    return new Date(date).toLocaleDateString("ru-RU", options);
  }

  return (
    <div
      key={post._id}
      className="bg-slate-200 border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative cursor-pointer hover:shadow-xl"
    >
      <div className="flex justify-start books-center gap-x-2">
        <h2 className="my-1 text-red-500">Title:</h2>
        <h5 className="my-1">{post.title}</h5>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h2 className="my-1 text-red-500">Author:</h2>
        <h5 className="my-1">{post.author}</h5>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <img src={post.imageUrl}></img>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h2 className="my-1 text-red-500">Content:</h2>
        <PostContent content={post.content} />
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h2 className="my-1 text-red-500">Tags:</h2>
        <h5 className="my-1">{post.tags > 0 ? post.tags : "No tags"}</h5>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h2 className="my-1 text-red-500">Create at:</h2>
        <h5 className="my-1">{formatDate(post.createdAt)}</h5>
      </div>

      <button onClick={() => deletePost(post._id)}>
        <Icon name="bucket" styles="size-6" />
      </button>
    </div>
  )
}

export default SinglePostCard