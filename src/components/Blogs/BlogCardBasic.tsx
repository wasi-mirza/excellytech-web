import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
  };
  variant?: "default" | "horizontal";
  onClick?: () => void;

}

export default function BlogCardBasic({ blog, variant = "default", onClick }: BlogCardProps) {
  const truncateText = (text: string, maxLength = 200) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  if (variant === "horizontal") {
    return (
      <Link
        to={`/blogs/${blog.slug}`}
        onClick={onClick}
        className="flex flex-col md:flex-row gap-4 rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-800 transition hover:scale-[1.01]"
      >
        <div className="md:w-1/4 h-48 md:h-auto relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-4 md:w-2/3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {truncateText(blog.description, 200)}
          </p>
          <span className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
            Continue Reading →
          </span>
        </div>
      </Link>
    );
  }

  // Default (recent blog card)
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="block max-w-sm rounded-lg overflow-hidden shadow bg-white dark:bg-slate-800 transition-transform hover:scale-[1.01]"
    >
      {/* Smaller Image */}
      <div className="relative h-28">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-3">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2">
          {blog.title}
        </h2>
      </div>
    </Link>
  );
}
