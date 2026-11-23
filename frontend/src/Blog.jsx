
import { PostList } from './components/PostList.jsx'
import { CreatePost } from './components/CreatePost.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostSorting } from './components/PostSorting.jsx'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts.js'
import { useState } from 'react'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const postsQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })

  return (
    <div style={{ padding: 8 }}>
      <CreatePost />

      <br />
      <hr />

      Filter by:

      <PostFilter
        field="author"
        value={author}
        onChange={(value) => setAuthor(value)}
      />

      <br />

      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />

      <hr />

      {postsQuery.isLoading && <p>Loading posts...</p>}

      {postsQuery.isError && <p>Error: {postsQuery.error.message}</p>}

      {postsQuery.isSuccess && (
        <PostList posts={postsQuery.data} />
      )}
    </div>
  )
}

export default Blog
