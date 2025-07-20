import PostForm from '../components/PostForm';

export default function CreatePost() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <PostForm />
    </div>
  );
}
