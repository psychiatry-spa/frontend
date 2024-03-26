import { MdOutlineDelete } from "react-icons/md";
import { deletePost } from "../../../../api/posts/requests/deletePost";
import PostContent from "./PostContent";

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
        <h1 className="my-1 text-red-500">Title:</h1>
        <h2 className="my-1">{post.title}</h2>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h1 className="my-1 text-red-500">Author:</h1>
        <h2 className="my-1">{post.author}</h2>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <img src={post.imageUrl}></img>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h1 className="my-1 text-red-500">Content:</h1>
        <PostContent content={post.content} />
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h1 className="my-1 text-red-500">Tags:</h1>
        <h2 className="my-1">{post.tags > 0 ? post.tags : "No tags"}</h2>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <h1 className="my-1 text-red-500">Create at:</h1>
        <h2 className="my-1">{formatDate(post.createdAt)}</h2>
      </div>
      <MdOutlineDelete onClick={() => deletePost(post._id)} className="text-2xl text-green-800 hover:text-black" />
    </div>
  )
}

export default SinglePostCard