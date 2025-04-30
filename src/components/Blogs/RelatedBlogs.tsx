import BlogCardBasic from "./BlogCardBasic";

export default function RelatedBlogs({
    relatedBlogs,
}: {
    relatedBlogs: any[];
}) {
    return (
        <>
        {relatedBlogs.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">You Might Also Like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedBlogs.slice(0, 2).map((b) => (
                  <BlogCardBasic key={b.id} blog={b} variant="default"/>
                ))}
              </div>
            </div>
          )}
        </>
    )
}