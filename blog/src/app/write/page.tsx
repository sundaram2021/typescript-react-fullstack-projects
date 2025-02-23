"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function WritePage() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Submit logic here
        console.log({ title, body })
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Write a New Blog Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg" />
                </div>
                <div>
                    <Textarea
                        placeholder="Write your blog post here..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="min-h-[300px]"
                    />
                </div>
                <Button type="submit" className="w-full">
                    Publish
                </Button>
            </form>
        </div>
    )
}

