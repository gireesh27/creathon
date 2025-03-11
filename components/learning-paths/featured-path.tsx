import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpenIcon, ClockIcon, UsersIcon, StarIcon, CheckCircleIcon } from "lucide-react"
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

interface FeaturedPathProps {
  path: LearningPath
}

export function FeaturedPath({ path }: FeaturedPathProps) {
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

  // Mock data for modules
  const modules = [
    "Introduction to Web Development",
    "HTML & CSS Fundamentals",
    "JavaScript Basics",
    "React Fundamentals",
    "Building Components",
    "State Management",
  ]

  return (
    <Card className="overflow-hidden">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative h-full">
          <img src={path.image || "/placeholder.svg"} alt={path.title} className="h-full w-full object-cover" />
          <Badge className={`absolute left-4 top-4 ${getLevelColor(path.level)}`}>{path.level}</Badge>
        </div>

        <CardContent className="flex flex-col p-6">
          <div>
            <h2 className="text-2xl font-bold">{path.title}</h2>
            <p className="mt-2 text-muted-foreground">{path.description}</p>

            <div className="mt-4 flex flex-wrap gap-1">
              {path.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border bg-card p-3 text-center">
                <BookOpenIcon className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-1 text-sm font-medium">{path.modules} Modules</div>
              </div>
              <div className="rounded-lg border bg-card p-3 text-center">
                <ClockIcon className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-1 text-sm font-medium">{path.duration}</div>
              </div>
              <div className="rounded-lg border bg-card p-3 text-center">
                <UsersIcon className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-1 text-sm font-medium">{path.enrolledUsers.toLocaleString()} Enrolled</div>
              </div>
              <div className="rounded-lg border bg-card p-3 text-center">
                <StarIcon className="mx-auto h-5 w-5 text-yellow-500" />
                <div className="mt-1 text-sm font-medium">{path.rating} Rating</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium">What You'll Learn</h3>
              <ul className="mt-2 space-y-1">
                {modules.map((module, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-6">
            {path.progress > 0 && (
              <div className="mb-4 space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Your progress</span>
                  <span>{path.progress}%</span>
                </div>
                <Progress value={path.progress} className="h-2" />
              </div>
            )}

            <Button asChild className="w-full">
              <Link href={`/learning-paths/${path.id}`}>{path.progress > 0 ? "Continue Learning" : "Enroll Now"}</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

