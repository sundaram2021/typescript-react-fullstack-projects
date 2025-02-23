"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"

export default function BlogPost({ params }: { params: { id: string } }) {
    const [comment, setComment] = useState("")

    // Mock data - replace with actual data fetching
    const post = {
        id: params.id,
        title: "Getting Started with Next.js",
        body: "Next.js is a powerful React framework that makes it easy to build fast, SEO-friendly web applications...",
        publishedDate: "2023-07-15",
        likes: 150,
        dislikes: 5,
        comments: [
            { id: 1, author: "Alice", content: "Great article!", date: "2023-07-16" },
            { id: 2, author: "Bob", content: "Very helpful, thanks!", date: "2023-07-17" },
        ],
    }

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Submit comment logic here
        console.log({ comment })
        setComment("")
    }

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-4">{post.publishedDate}</p>
            <div className="prose dark:prose-invert mb-6">{post.body}</div>
            <div className="flex space-x-4 mb-6">
                <Button variant="outline" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" /> {post.likes}
                </Button>
                <Button variant="outline" size="sm">
                    <ThumbsDown className="w-4 h-4 mr-2" /> {post.dislikes}
                </Button>
                <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" /> {post.comments.length}
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Comments</CardTitle>
                </CardHeader>
                <CardContent>
                    {post.comments.map((comment) => (
                        <div key={comment.id} className="mb-4">
                            <div className="flex items-center mb-2">
                                <Avatar className="w-6 h-6 mr-2">
                                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                                </Avatar>
                                <span className="font-semibold">{comment.author}</span>
                                <span className="text-muted-foreground text-sm ml-2">{comment.date}</span>
                            </div>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                </CardContent>
                <CardFooter>
                    <form onSubmit={handleCommentSubmit} className="w-full">
                        <Textarea
                            placeholder="Write a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="mb-2"
                        />
                        <Button type="submit">Post Comment</Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}

