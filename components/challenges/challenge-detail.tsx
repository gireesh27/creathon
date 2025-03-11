"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClockIcon, UsersIcon } from "lucide-react"
import { CodeEditor } from "@/components/challenges/code-editor"

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

interface ChallengeDetailProps {
  challenge: Challenge
  onBack: () => void
}

export function ChallengeDetail({ challenge, onBack }: ChallengeDetailProps) {
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

  const initialCode = `# Starter code
def solve():
    # Write your solution here
    pass

print(solve())
`

  return (
    <div className="flex flex-col gap-4">
      <Button variant="ghost" onClick={onBack}>
        &larr; Back to Challenges
      </Button>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <Badge variant="outline" className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
            <Badge variant="outline">{challenge.category}</Badge>
          </div>
          <CardTitle className="text-2xl font-bold">{challenge.title}</CardTitle>
          <CardDescription>{challenge.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              <span>{challenge.timeEstimate}</span>
            </div>
            <div className="flex items-center gap-1">
              <UsersIcon className="h-4 w-4" />
              <span>{challenge.completedBy.toLocaleString()} completed</span>
            </div>
          </div>

          <CodeEditor initialCode={initialCode} language="python" />
        </CardContent>
      </Card>
    </div>
  )
}

