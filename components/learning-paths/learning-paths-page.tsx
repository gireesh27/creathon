"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, BookOpenIcon, ClockIcon, UsersIcon, StarIcon } from "lucide-react"
import { LearningPathCard } from "@/components/learning-paths/learning-path-card"
import { FeaturedPath } from "@/components/learning-paths/featured-path"
import { YourProgress } from "@/components/learning-paths/your-progress"

// Mock data for learning paths
const learningPathsData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master modern web development from frontend to backend with React, Node.js, and MongoDB.",
    level: "Intermediate",
    duration: "12 weeks",
    modules: 24,
    enrolledUsers: 1245,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    progress: 65,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    description: "Learn the core concepts of machine learning, from basic algorithms to neural networks.",
    level: "Beginner",
    duration: "8 weeks",
    modules: 16,
    enrolledUsers: 987,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "TensorFlow", "Data Science", "Neural Networks"],
    progress: 30,
  },
  {
    id: 3,
    title: "DevOps & Cloud Engineering",
    description: "Master the tools and practices for modern DevOps and cloud infrastructure.",
    level: "Advanced",
    duration: "10 weeks",
    modules: 20,
    enrolledUsers: 756,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    progress: 0,
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native and JavaScript.",
    level: "Intermediate",
    duration: "8 weeks",
    modules: 16,
    enrolledUsers: 823,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "JavaScript", "Mobile", "iOS", "Android"],
    progress: 0,
  },
  {
    id: 5,
    title: "Data Engineering & Big Data",
    description: "Learn to build scalable data pipelines and work with big data technologies.",
    level: "Advanced",
    duration: "12 weeks",
    modules: 24,
    enrolledUsers: 645,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Apache Spark", "Hadoop", "Python", "SQL"],
    progress: 0,
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    description: "Master the principles of user interface and experience design for digital products.",
    level: "Beginner",
    duration: "6 weeks",
    modules: 12,
    enrolledUsers: 912,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Figma", "Design", "Prototyping", "User Research"],
    progress: 0,
  },
]

export function LearningPathsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")

  const featuredPath = learningPathsData[0] // Use the first path as featured
  const inProgressPaths = learningPathsData.filter((path) => path.progress > 0)

  const filteredPaths = learningPathsData.filter((path) => {
    const matchesSearch =
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesLevel = levelFilter === "all" || path.level === levelFilter

    return matchesSearch && matchesLevel
  })

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Learning Paths</h1>
          <p className="text-muted-foreground">Structured learning journeys to help you master new skills.</p>
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search learning paths..."
            className="w-full pl-8 md:w-[250px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {inProgressPaths.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Continue Learning</h2>
          <p className="text-muted-foreground">Pick up where you left off</p>
          <div className="mt-4">
            <YourProgress paths={inProgressPaths} />
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Featured Path</h2>
        <p className="text-muted-foreground">Our most popular learning journey</p>
        <div className="mt-4">
          <FeaturedPath path={featuredPath} />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold">Browse All Paths</h2>
          <div className="flex gap-2">
            <Button
              variant={levelFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setLevelFilter("all")}
            >
              All Levels
            </Button>
            <Button
              variant={levelFilter === "Beginner" ? "default" : "outline"}
              size="sm"
              onClick={() => setLevelFilter("Beginner")}
            >
              Beginner
            </Button>
            <Button
              variant={levelFilter === "Intermediate" ? "default" : "outline"}
              size="sm"
              onClick={() => setLevelFilter("Intermediate")}
            >
              Intermediate
            </Button>
            <Button
              variant={levelFilter === "Advanced" ? "default" : "outline"}
              size="sm"
              onClick={() => setLevelFilter("Advanced")}
            >
              Advanced
            </Button>
          </div>
        </div>

        <Tabs defaultValue="grid" className="mt-4">
          <div className="flex justify-end">
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="mt-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPaths.map((path) => (
                <LearningPathCard key={path.id} path={path} />
              ))}
            </div>
            {filteredPaths.length === 0 && (
              <div className="mt-10 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-medium">No learning paths found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="list" className="mt-4">
            <div className="space-y-4">
              {filteredPaths.map((path) => (
                <Card key={path.id}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4">
                      <img
                        src={path.image || "/placeholder.svg"}
                        alt={path.title}
                        className="h-full w-full object-cover sm:rounded-l-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="text-lg font-semibold">{path.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{path.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {path.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpenIcon className="h-4 w-4" />
                          <span>{path.modules} modules</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          <span>{path.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="h-4 w-4" />
                          <span>{path.enrolledUsers.toLocaleString()} enrolled</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-4 w-4 text-yellow-500" />
                          <span>{path.rating}</span>
                        </div>
                        <Badge>{path.level}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end p-4">
                      <Button>Enroll Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
              {filteredPaths.length === 0 && (
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <p className="text-lg font-medium">No learning paths found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

