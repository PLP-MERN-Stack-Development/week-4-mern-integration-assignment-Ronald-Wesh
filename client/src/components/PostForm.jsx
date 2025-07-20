import { useEffect, useState } from 'react';
import { getCategories, createPost } from '../services/api';

export default function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(formData);
      alert('Post created!');
      setFormData({ title: '', content: '', category: '' });
    } catch (err) {
      console.error('Create error:', err);
      alert('Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 w-full"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        className="border p-2 w-full"
        required
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      >
        <option value="">-- Select Category --</option>
        {Array.isArray(categories) &&
          categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
