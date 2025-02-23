import BlogCard from "@/components/base/blog-card"


export default function Home() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
      publishedDate: "2023-07-15",
      likes: 150,
      dislikes: 5,
      comments: 25,
      author: "John Doe",
      coverImage: "https://picsum.photos/seed/nextjs/800/600",
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can revolutionize your styling workflow and boost productivity.",
      publishedDate: "2023-07-16",
      likes: 120,
      dislikes: 3,
      comments: 18,
      author: "Jane Smith",
      coverImage: "https://picsum.photos/seed/tailwind/800/600",
    },
    {
      id: 3,
      title: "React Server Components Explained",
      excerpt: "Dive deep into React Server Components and learn how they can improve your app's performance.",
      publishedDate: "2023-07-17",
      likes: 200,
      dislikes: 8,
      comments: 32,
      author: "Alex Johnson",
      coverImage: "https://picsum.photos/seed/react/800/600",
    },
    // Add more blog posts as needed
  ]

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 w-full">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

