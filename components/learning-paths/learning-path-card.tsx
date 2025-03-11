import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpenIcon, ClockIcon, UsersIcon, StarIcon } from "lucide-react"
import Link from "next/link"

interface LearningPath {
  id: number
  title: string
  description: string
  level: string
  duration: string
  modules: number
  enrolledUsers: number
  rating: number
  image: string
  tags: string[]
  progress: number
}

interface LearningPathCardProps {
  path: LearningPath
}

export function LearningPathCard({ path }: LearningPathCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "border-green-200 bg-green-100 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300"
      case "Intermediate":
        return "border-yellow-200 bg-yellow-100 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
      case "Advanced":
        return "border-red-200 bg-red-100 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
      default:
        return ""
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <img src={path.image || "/placeholder.svg"} alt={path.title} className="h-48 w-full object-cover" />
        <Badge className={`absolute right-2 top-2 ${getLevelColor(path.level)}`}>{path.level}</Badge>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{path.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{path.description}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1 pb-3">
          {path.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {path.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{path.tags.length - 3} more
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
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
            <span>{path.enrolledUsers.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <span>{path.rating}</span>
          </div>
        </div>

        {path.progress > 0 && (
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Your progress</span>
              <span>{path.progress}%</span>
            </div>
            <Progress value={path.progress} className="h-1.5" />
          </div>
        )}
      </CardContent>

      <CardFooter className="border-t bg-muted/50 p-3">
        <Button asChild className="w-full">
          <Link href={`/learning-paths/${path.id}`}>{path.progress > 0 ? "Continue Learning" : "Enroll Now"}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

