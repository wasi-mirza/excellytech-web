import { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogSidebar({
  allBlogs,
  setFilteredBlogs,
}: {
  allBlogs: any[];
  setFilteredBlogs: (blogs: any[]) => void;
}) {
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
    const filtered = allBlogs.filter((b) =>
      b.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <aside>
      {/* Search Input */}
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search blogs..."
          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-sm"
        />
      </div>

      {/* Recent Blogs */}
      <div>
        <h4 className="font-semibold text-lg mt-8 mb-4">Recent Blogs</h4>
        <ul className="space-y-4">
          {allBlogs.slice(0, 5).map((blog) => (
            <li key={blog.id} className="flex gap-4 items-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <Link
                to={`/blogs/${blog.slug}`}
                className="text-sm text-primary hover:underline font-medium"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
