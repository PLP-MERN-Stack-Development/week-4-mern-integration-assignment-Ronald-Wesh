import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then(res => setPosts(res.data))
      .catch(err => console.error('Fetch posts failed:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
