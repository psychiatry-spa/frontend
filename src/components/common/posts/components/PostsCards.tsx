import SinglePostCard from "./SinglePostCard"

const PostsCards = ({ posts }: any) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {posts.map((item: any) => (
        <SinglePostCard key={item.id} post={item} />
      ))}
    </div>
  )
}

export default PostsCards