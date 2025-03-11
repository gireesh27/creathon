"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpenIcon, ClockIcon } from "lucide-react"
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

interface YourProgressProps {
  paths: LearningPath[]
}

export function YourProgress({ paths }: YourProgressProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {paths.map((path) => (
        <Card key={path.id} className="overflow-hidden">
          <div className="flex h-full">
            <div className="w-1/3">
              <img src={path.image || "/placeholder.svg"} alt={path.title} className="h-full w-full object-cover" />
            </div>
            <CardContent className="flex flex-1 flex-col p-4">
              <div>
                <h3 className="font-semibold">{path.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpenIcon className="h-3.5 w-3.5" />
                    <span>{path.modules} modules</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-3.5 w-3.5" />
                    <span>{path.duration}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <Badge>{path.level}</Badge>
                </div>
              </div>

              <div className="mt-auto space-y-1 pt-3">
                <div className="flex items-center justify-between text-xs">
                  <span>Progress</span>
                  <span>{path.progress}%</span>
                </div>
                <Progress value={path.progress} className="h-2" />
              </div>

              <Button asChild className="mt-3 w-full" size="sm">
                <Link href={`/learning-paths/${path.id}`}>Continue Learning</Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}

