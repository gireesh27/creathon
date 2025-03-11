import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CodeIcon, TrophyIcon, MessageSquareIcon, ThumbsUpIcon } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "challenge_completed",
    title: "Completed 'Python List Comprehensions'",
    time: "2 hours ago",
    icon: <CodeIcon className="h-4 w-4" />,
    points: 100,
  },
  {
    id: 2,
    type: "badge_earned",
    title: "Earned 'Code Master' badge",
    time: "Yesterday",
    icon: <TrophyIcon className="h-4 w-4" />,
  },
  {
    id: 3,
    type: "comment",
    title: "Commented on 'JavaScript Promises'",
    time: "2 days ago",
    icon: <MessageSquareIcon className="h-4 w-4" />,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 4,
    type: "challenge_completed",
    title: "Completed 'Sorting Algorithms'",
    time: "3 days ago",
    icon: <CodeIcon className="h-4 w-4" />,
    points: 150,
  },
  {
    id: 5,
    type: "like",
    title: "Your solution was liked by 3 people",
    time: "4 days ago",
    icon: <ThumbsUpIcon className="h-4 w-4" />,
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">{activity.icon}</div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{activity.title}</p>
              {activity.points && (
                <span className="flex items-center text-xs font-medium text-primary">+{activity.points} pts</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
            {activity.user && (
              <div className="flex items-center gap-2 pt-1">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-xs">{activity.user.name}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

