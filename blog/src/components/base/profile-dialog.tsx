"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ProfileDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function ProfileDialog({ open, onOpenChange }: ProfileDialogProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [username, setUsername] = useState("JohnDoe")
    const [email, setEmail] = useState("johndoe@example.com")

    const handleSave = () => {
        // Save logic here
        setIsEditing(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Profile Information</DialogTitle>
                    <DialogDescription>View and edit your profile information here.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="col-span-3"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="col-span-3"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <DialogFooter>
                    {isEditing ? (
                        <Button onClick={handleSave}>Save Changes</Button>
                    ) : (
                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

