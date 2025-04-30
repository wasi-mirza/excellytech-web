import PreviousNextNav from "./PreviousNextNav";
import { blogsData } from "../../data/blog_data";
import parse from "html-react-parser";
import RelatedBlogs from "./RelatedBlogs";

export default function BlogDetailsPage({
  blog,
  previousPost,
  nextPost,
}: {
  blog: any;
  previousPost: any;
  nextPost: any;
}) {
  const relatedBlogs = blogsData.filter(
    (b) =>
      b.id !== blog.id &&
      b.categories?.some((cat: string) => blog.categories.includes(cat))
  );

  return (
    <div>
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-xl object-cover mb-6"
      />
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        {blog.title}
      </h1>

      {/* Divider */}
      <hr className="border-slate-300 dark:border-slate-700 mb-4" />

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {blog.categories.map((cat: string) => (
          <span
            key={cat}
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="prose dark:prose-invert max-w-none prose-a:text-primary prose-li:marker:text-primary">
        {parse(blog.description)}
      </div>
      {/* Previous / Next */}
      <PreviousNextNav previousBlog={previousPost} nextBlog={nextPost} />

      {/* Related Blogs */}
      <RelatedBlogs relatedBlogs={relatedBlogs} />
    </div>
  );
}
