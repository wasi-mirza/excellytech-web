
// pages/BlogsPage.jsx
import { useState } from "react";
import BlogCard from "../components/Blogs/BlogCard";
import { blogsData } from "../data/blog_data";
const extractCategories = (blogs: any) => {
  const categorySet = new Set();
  blogs.forEach((blog: any) => {
    blog.categories.forEach((cat: any) => categorySet.add(cat));
  });
  return Array.from(categorySet);
};

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const allCategories = extractCategories(blogsData);
  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.categories.includes(selectedCategory));

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-slate-50 via-blue-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Latest Blogs
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === "All"
              ? "bg-primary text-white"
              : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          All
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat as string}
            onClick={() => {
              setSelectedCategory(cat as string);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-primary text-white"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            {cat as string}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {paginatedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                num === currentPage
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
