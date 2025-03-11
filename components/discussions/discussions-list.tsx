import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquareIcon, EyeIcon, ThumbsUpIcon } from "lucide-react"
import Link from "next/link"

interface DiscussionsListProps {
  searchQuery: string
  categoryFilter: string
  tagFilter: string | null
  sortBy: "latest" | "popular" | "unanswered"
}

// Mock data for discussions
const discussionsData = [
  {
    id: 1,
    title: "Best practices for React state management in 2024",
    content:
      "I've been using Redux for a while, but I'm curious about other state management solutions like Zustand, Jotai, and React Query. What are your experiences?",
    category: "Frontend",
    tags: ["React", "State Management", "JavaScript"],
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "alexj",
    },
    createdAt: "2 hours ago",
    views: 156,
    likes: 24,
    replies: 12,
    isAnswered: true,
  },
  {
    id: 2,
    title: "How to optimize PostgreSQL queries for large datasets?",
    content:
      "I'm working with a database that has grown to several million rows, and some of my queries are starting to slow down. What are some strategies for optimization?",
    category: "Databases",
    tags: ["PostgreSQL", "Performance", "SQL"],
    author: {
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "mariag",
    },
    createdAt: "Yesterday",
    views: 89,
    likes: 15,
    replies: 8,
    isAnswered: true,
  },
  {
    id: 3,
    title: "Getting started with TensorFlow for image classification",
    content:
      "I'm new to machine learning and want to build an image classifier. What's the best way to get started with TensorFlow for this task?",
    category: "Machine Learning",
    tags: ["TensorFlow", "Image Classification", "Python"],
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "davidk",
    },
    createdAt: "2 days ago",
    views: 210,
    likes: 32,
    replies: 18,
    isAnswered: true,
  },
  {
    id: 4,
    title: "Microservices vs Monolith: When to choose which?",
    content:
      "I'm designing a new system and trying to decide between a microservices architecture and a monolith. What factors should I consider?",
    category: "System Design",
    tags: ["Microservices", "Architecture", "Backend"],
    author: {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "priyap",
    },
    createdAt: "3 days ago",
    views: 175,
    likes: 28,
    replies: 22,
    isAnswered: true,
  },
  {
    id: 5,
    title: "How to implement authentication in a Next.js app?",
    content:
      "I'm building a Next.js application and need to add user authentication. What are the recommended approaches?",
    category: "Frontend",
    tags: ["Next.js", "Authentication", "React"],
    author: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "jamesw",
    },
    createdAt: "4 days ago",
    views: 132,
    likes: 19,
    replies: 0,
    isAnswered: false,
  },
  {
    id: 6,
    title: "Best practices for CI/CD pipelines",
    content: "I want to improve our deployment process. What are some best practices for setting up CI/CD pipelines?",
    category: "DevOps",
    tags: ["CI/CD", "DevOps", "Automation"],
    author: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "emmaw",
    },
    createdAt: "5 days ago",
    views: 98,
    likes: 14,
    replies: 0,
    isAnswered: false,
  },
]

export function DiscussionsList({ searchQuery, categoryFilter, tagFilter, sortBy }: DiscussionsListProps) {
  // Filter discussions based on search query, category, and tag
  let filteredDiscussions = discussionsData.filter((discussion) => {
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || discussion.category === categoryFilter

    const matchesTag = !tagFilter || discussion.tags.includes(tagFilter)

    return matchesSearch && matchesCategory && matchesTag
  })

  // Sort discussions based on sortBy parameter
  if (sortBy === "latest") {
    // Already sorted by date in our mock data
  } else if (sortBy === "popular") {
    filteredDiscussions = [...filteredDiscussions].sort((a, b) => b.likes - a.likes)
  } else if (sortBy === "unanswered") {
    filteredDiscussions = filteredDiscussions.filter((discussion) => !discussion.isAnswered)
  }

  if (filteredDiscussions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg font-medium">No discussions found</p>
        <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {filteredDiscussions.map((discussion) => (
        <Link href={`/discussions/${discussion.id}`} key={discussion.id}>
          <div className="rounded-lg border p-4 transition-all hover:bg-muted/50">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">{discussion.title}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{discussion.content}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <Badge>{discussion.category}</Badge>
                  {discussion.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {!discussion.isAnswered && (
                <Badge variant="secondary" className="ml-2 whitespace-nowrap">
                  Unanswered
                </Badge>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                  <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">
                  {discussion.author.name} • {discussion.createdAt}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-4 w-4" />
                  <span>{discussion.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUpIcon className="h-4 w-4" />
                  <span>{discussion.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquareIcon className="h-4 w-4" />
                  <span>{discussion.replies}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

