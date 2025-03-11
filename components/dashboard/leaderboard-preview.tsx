import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const leaderboardData = [
  {
    rank: 1,
    user: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "sarahc",
    },
    points: 2450,
    badge: "Python Expert",
  },
  {
    rank: 2,
    user: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "mrodriguez",
    },
    points: 2320,
    badge: "Algorithm Master",
  },
  {
    rank: 3,
    user: {
      name: "Aisha Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "aishap",
    },
    points: 2180,
    badge: "Full Stack Dev",
  },
  {
    rank: 4,
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "davidk",
    },
    points: 2050,
    badge: "Database Wizard",
  },
  {
    rank: 5,
    user: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "emmaw",
    },
    points: 1980,
    badge: "Frontend Ninja",
  },
]

export function LeaderboardPreview() {
  return (
    <div className="space-y-4">
      {leaderboardData.map((entry) => (
        <div key={entry.rank} className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                entry.rank === 1
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  : entry.rank === 2
                    ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    : entry.rank === 3
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                      : "bg-muted text-muted-foreground"
              }`}
            >
              {entry.rank}
            </div>
            <Avatar>
              <AvatarImage src={entry.user.avatar} alt={entry.user.name} />
              <AvatarFallback>{entry.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{entry.user.name}</p>
              <p className="text-xs text-muted-foreground">@{entry.user.username}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden sm:inline-flex">
              {entry.badge}
            </Badge>
            <div className="text-right">
              <p className="text-sm font-medium">{entry.points}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

