import { useParams } from "react-router-dom";
import BlogDetailsPage from "../../components/Blogs/BlogDetails";
import { blogsData } from "../../data/blog_data";

export default function BlogDetailsRoute() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) return <div className="p-10 text-center">Blog not found.</div>;

  // Find previous post
  const blogIndex = blogsData.findIndex((b) => b.slug === slug);
  const previousPost = blogIndex > 0 ? blogsData[blogIndex - 1] : null;
  const nextPost = blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1] : null;
  return (
    <BlogDetailsPage
      blog={blog}
      allBlogs={blogsData}
      previousPost={previousPost}
      nextPost={nextPost}
    />
  );
}
