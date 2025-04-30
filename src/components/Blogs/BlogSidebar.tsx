import { Link } from "react-router-dom";

export default function BlogSidebar({
  searchTerm,
  setSearchTerm,
  recentBlogs,
}: {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  recentBlogs: any[];
}) {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search blogs..."
          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Recent */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Recent Blogs</h4>
        <ul className="space-y-4">
          {recentBlogs.map((blog) => (
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
