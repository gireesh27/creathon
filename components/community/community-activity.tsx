import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThumbsUpIcon, CodeIcon, CalendarIcon, ShareIcon, MessageCircleIcon, UsersIcon } from "lucide-react"

interface CommunityActivityProps {
  filter?: string
}

// Mock data for community activity
const activityData = [
  {
    id: 1,
    type: "discussion",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "alexj",
    },
    content:
      "Just completed the Advanced Python course! The final project was challenging but really helped solidify my understanding of decorators and metaclasses.",
    time: "10 minutes ago",
    likes: 12,
    comments: 3,
    tags: ["Python", "Learning"],
  },
  {
    id: 2,
    type: "challenge",
    user: {
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "mariag",
    },
    content:
      "I just published a new challenge: 'Building a RESTful API with FastAPI'. Check it out if you're interested in modern Python web frameworks!",
    challengeTitle: "Building a RESTful API with FastAPI",
    time: "2 hours ago",
    likes: 24,
    comments: 7,
    tags: ["API", "FastAPI", "Python"],
  },
  {
    id: 3,
    type: "event",
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "davidk",
    },
    content:
      "I'm hosting a virtual workshop on 'Intro to Machine Learning with TensorFlow' next Friday. All skill levels welcome!",
    eventTitle: "Intro to Machine Learning with TensorFlow",
    eventDate: "Fri, Mar 15, 2024",
    eventTime: "3:00 PM - 5:00 PM",
    time: "Yesterday",
    likes: 35,
    comments: 12,
    attendees: 18,
    tags: ["Workshop", "Machine Learning", "TensorFlow"],
  },
  {
    id: 4,
    type: "discussion",
    user: {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "priyap",
    },
    content:
      "What's your favorite resource for learning about system design? I'm preparing for interviews and would love recommendations!",
    time: "Yesterday",
    likes: 8,
    comments: 15,
    tags: ["System Design", "Interviews", "Career"],
  },
  {
    id: 5,
    type: "challenge",
    user: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "jamesw",
    },
    content: "Just solved the 'Binary Tree Traversal' challenge in O(n) time complexity. Here's my approach...",
    challengeTitle: "Binary Tree Traversal",
    time: "2 days ago",
    likes: 19,
    comments: 5,
    tags: ["Algorithms", "Data Structures", "Problem Solving"],
  },
]

export function CommunityActivity({ filter }: CommunityActivityProps) {
  const filteredActivity = filter ? activityData.filter((activity) => activity.type === filter) : activityData

  if (filteredActivity.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg font-medium">No activity found</p>
        <p className="text-muted-foreground">There's no recent activity in this category.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {filteredActivity.map((activity) => (
        <Card key={activity.id} className="overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{activity.user.name}</span>
                    <span className="text-muted-foreground"> @{activity.user.username}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
                <p>{activity.content}</p>

                {activity.type === "challenge" && (
                  <div className="mt-3 flex items-center rounded-md border bg-muted/50 p-2">
                    <CodeIcon className="mr-2 h-4 w-4 text-primary" />
                    <span className="font-medium">{activity.challengeTitle}</span>
                  </div>
                )}

                {activity.type === "event" && (
                  <div className="mt-3 rounded-md border p-3">
                    <div className="font-medium">{activity.eventTitle}</div>
                    <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{activity.eventDate}</span>
                      </div>
                      <div>{activity.eventTime}</div>
                      <div className="flex items-center gap-1">
                        <UsersIcon className="h-4 w-4" />
                        <span>{activity.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1">
                  {activity.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <ThumbsUpIcon className="h-4 w-4" />
                    <span>{activity.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <MessageCircleIcon className="h-4 w-4" />
                    <span>{activity.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <ShareIcon className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

