import { useState } from "react";
import BlogCard from "./BlogCard";
import BlogSidebar from "./BlogSidebar";
import PreviousNextNav from "./PreviousNextNav";

export default function BlogDetailsPage({
  blog,
  allBlogs,
  previousPost,
  nextPost,
}: {
  blog: any;
  allBlogs: any[];
  previousPost: any;
  nextPost: any;
}) {
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const relatedBlogs = allBlogs.filter(
    (b) =>
      b.id !== blog.id &&
      b.categories?.some((cat: string) => blog.categories.includes(cat))
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="md:col-span-2">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-xl object-cover mb-6"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {blog.title}
        </h1>
        <hr className="border-slate-300 dark:border-slate-700 mb-4" />

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.categories?.map((cat: string, idx: number) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Blog Content */}
        <div className="prose dark:prose-invert max-w-none prose-a:text-primary prose-li:marker:text-primary">
          {blog.description}
        </div>

        {/* Previous Post */}
        <PreviousNextNav previousBlog={previousPost} nextBlog={nextPost} />

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">You Might Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedBlogs.slice(0, 4).map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="space-y-8">
        <BlogSidebar
          allBlogs={allBlogs}
          setFilteredBlogs={setFilteredBlogs}
        />
      </div>
    </div>
  );
}
