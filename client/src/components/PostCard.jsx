// import { Link } from 'react-router-dom';

// export default function PostCard({ post }) {
//   return (
//     <div className="p-4 border rounded shadow hover:bg-gray-50">
//       <h2 className="text-xl font-semibold">
//         <Link to={`/posts/${post.slug}`}>{post.title}</Link>
//       </h2>
//       <p className="text-gray-600">{post.description?.substring(0, 100)}...</p>
//     </div>
//   );
// }
export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
      <span className="text-sm text-gray-600 italic">Category: {post.category}</span>
    </div>
  );
}
