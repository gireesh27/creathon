import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ArrowRightIcon } from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Advanced Python Generators",
    date: "Tomorrow, 10:00 AM",
    difficulty: "Intermediate",
    category: "Python",
    points: 150,
  },
  {
    id: 2,
    title: "React Hooks Deep Dive",
    date: "Mar 13, 2:00 PM",
    difficulty: "Advanced",
    category: "JavaScript",
    points: 200,
  },
  {
    id: 3,
    title: "SQL Query Optimization",
    date: "Mar 14, 11:00 AM",
    difficulty: "Intermediate",
    category: "Databases",
    points: 150,
  },
  {
    id: 4,
    title: "Data Structures: Binary Trees",
    date: "Mar 15, 3:00 PM",
    difficulty: "Beginner",
    category: "Data Structures",
    points: 100,
  },
]

export function UpcomingChallenges() {
  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="space-y-1">
            <h4 className="font-medium">{challenge.title}</h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-3 w-3" />
                <span>{challenge.date}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {challenge.category}
              </Badge>
              <Badge
                variant="outline"
                className={`text-xs ${
                  challenge.difficulty === "Beginner"
                    ? "border-green-200 bg-green-100 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300"
                    : challenge.difficulty === "Intermediate"
                      ? "border-yellow-200 bg-yellow-100 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
                      : "border-red-200 bg-red-100 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
                }`}
              >
                {challenge.difficulty}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">{challenge.points} pts</div>
            <Button size="sm" className="gap-1">
              <span className="hidden sm:inline">Set Reminder</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

