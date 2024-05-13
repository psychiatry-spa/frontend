import React, { Suspense } from "react"
import LoadingDemo from "../../LoadingDemo"

const LazyComponent = React.lazy(() => import("./SinglePostCard"))

const PostsCards = ({ posts }: any) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <Suspense fallback={<LoadingDemo />}>
        {posts.map((item: any) => (
          <LazyComponent key={item.id} post={item} />
        ))}
      </Suspense>
    </div>
  )
}

export default PostsCards