"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PlusIcon, XIcon, UploadIcon } from "lucide-react"

export function ProfileSettings() {
  const [skills, setSkills] = useState<string[]>(["JavaScript", "React", "Node.js", "Python", "SQL"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Profile Information</h2>
        <p className="text-sm text-muted-foreground">
          Update your profile information and how others see you on the platform.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-1/3">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="outline" className="gap-2">
              <UploadIcon className="h-4 w-4" />
              Change Avatar
            </Button>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="johndoe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself"
              defaultValue="Full stack developer with a passion for learning new technologies."
              className="min-h-[100px]"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Professional Information</h3>
          <p className="text-sm text-muted-foreground">Share your professional background and expertise.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input id="title" defaultValue="Senior Developer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" defaultValue="Acme Inc." />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Select defaultValue="intermediate">
            <SelectTrigger id="experience">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Skills</Label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="gap-1">
                {skill}
                <button onClick={() => removeSkill(skill)}>
                  <XIcon className="h-3 w-3" />
                  <span className="sr-only">Remove {skill}</span>
                </button>
              </Badge>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <Input
              placeholder="Add a skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  addSkill()
                }
              }}
            />
            <Button type="button" onClick={addSkill} size="sm">
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">Add Skill</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}

