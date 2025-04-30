import { Link } from "react-router-dom";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="block rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-800 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {/* Image with Gradient */}
      <div className="relative h-56">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {blog.title}
        </h2>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.categories?.map((category: string, index: number) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-5 mb-2">
          {blog.description}
        </p>

        {/* Optional footer text */}
        <span className="text-sm text-primary font-medium">
          Continue reading →
        </span>
      </div>
    </Link>
  );
}
