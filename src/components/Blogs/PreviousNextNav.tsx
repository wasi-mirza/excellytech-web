import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BlogDetailsPage({
  previousBlog,
  nextBlog,
}: {
  previousBlog: any;
  nextBlog: any;
}) {
  return (
    <div className="mt-16 border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Previous Post */}
      <div className="text-left">
        {previousBlog ? (
          <>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1 flex items-center">
              <FaArrowLeft className="mr-2 text-primary" />
              Previous Post
            </h3>
            <Link
              to={`/blogs/${previousBlog.slug}`}
              className="text-primary font-medium hover:underline"
            >
              {previousBlog.title}
            </Link>
          </>
        ) : (
          <div className="h-10" />
        )}
      </div>

      {/* Next Post */}
      <div className="text-right">
        {nextBlog ? (
          <>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1 flex items-center justify-end">
              Next Post
              <FaArrowRight className="ml-2 text-primary" />
            </h3>
            <Link
              to={`/blogs/${nextBlog.slug}`}
              className="text-primary font-medium hover:underline"
            >
              {nextBlog.title}
            </Link>
          </>
        ) : (
          <div className="h-10" />
        )}
      </div>
    </div>
  );
}
