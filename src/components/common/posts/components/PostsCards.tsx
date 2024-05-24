import { lazy, Suspense } from "react"
import LoadingLayout from "../../../../layouts/LoadingLayout"

const LazyComponent = lazy(() => import("./SinglePostCard"))

const PostsCards = ({ posts }: any) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <Suspense fallback={<LoadingLayout />}>
        {posts.map((item: any) => (
          <LazyComponent key={item.id} post={item} />
        ))}
      </Suspense>
    </div>
  )
}

export default PostsCards