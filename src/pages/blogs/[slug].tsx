import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import BlogDetailsPage from "../../components/Blogs/BlogDetails";
import BlogSidebar from "../../components/Blogs/BlogSidebar";
import { blogsData } from "../../data/blog_data";
import BlogCardBasic from "../../components/Blogs/BlogCardBasic";

export default function BlogDetailsRoute() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) return <div className="p-10 text-center">Blog not found.</div>;

  // Find previous and next blog posts
  const blogIndex = blogsData.findIndex((b) => b.slug === slug);
  const previousPost = blogIndex > 0 ? blogsData[blogIndex - 1] : null;
  const nextPost =
    blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1] : null;

  // Search State
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogs = useMemo(() => {
    if (!searchTerm) return [];
    return blogsData.filter((b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const isSearching = Boolean(searchTerm);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* LEFT PANE */}
      <div className="md:col-span-2">
        {isSearching ? (
          // —— Search results grid ——
          filteredBlogs.length ? (
            <div className="space-y-8">
              {filteredBlogs.map((b) => (
                <BlogCardBasic
                  key={b.id}
                  blog={b}
                  variant="horizontal"
                  onClick={() => {
                    setSearchTerm("");
                  }}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No blogs match “{searchTerm}”.
            </p>
          )
        ) : (
          // —— Single‐post detail view ——
          <BlogDetailsPage
            blog={blog}
            previousPost={previousPost}
            nextPost={nextPost}
          />
        )}
      </div>

      {/* RIGHT SIDEBAR */}
      <BlogSidebar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        recentBlogs={blogsData.slice(0, 5)}
      />
    </div>
  );
}
