import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown, MessageSquare, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogCardProps {
    blog: {
        id: number
        title: string
        excerpt: string
        publishedDate: string
        likes: number
        dislikes: number
        comments: number
        author: string
        coverImage: string
    }
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <Link href={`/post/${blog.id}`}>
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={blog.coverImage || "/placeholder.svg"}
                        alt={blog.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <CardHeader>
                    <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Avatar className="w-6 h-6 mr-2">
                            <AvatarImage src="/avatar.png" />
                            <AvatarFallback>{blog.author[0]}</AvatarFallback>
                        </Avatar>
                        <span>{blog.author}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{blog.publishedDate}</span>
                    </div>
                    <div className="flex space-x-3">
                        <span className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" /> {blog.likes}
                        </span>
                        <span className="flex items-center">
                            <ThumbsDown className="w-4 h-4 mr-1" /> {blog.dislikes}
                        </span>
                        <span className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" /> {blog.comments}
                        </span>
                    </div>
                </CardFooter>
            </Link>
        </Card>
    )
}

