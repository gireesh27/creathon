"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ClockIcon, UsersIcon } from "lucide-react"

interface Challenge {
  id: number
  title: string
  description: string
  difficulty: string
  category: string
  points: number
  completedBy: number
  timeEstimate: string
}

interface ChallengeCardProps {
  challenge: Challenge
  onSelect: () => void
}

export function ChallengeCard({ challenge, onSelect }: ChallengeCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
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
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className={getDifficultyColor(challenge.difficulty)}>
            {challenge.difficulty}
          </Badge>
          <Badge variant="outline">{challenge.category}</Badge>
        </div>
        <CardTitle className="line-clamp-1 text-lg">{challenge.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">{challenge.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            <span>{challenge.timeEstimate}</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon className="h-4 w-4" />
            <span>{challenge.completedBy.toLocaleString()} completed</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
        <div className="font-medium">{challenge.points} points</div>
        <Button size="sm" onClick={onSelect}>
          Start Challenge
        </Button>
      </CardFooter>
    </Card>
  )
}

