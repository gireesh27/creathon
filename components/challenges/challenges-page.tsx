"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon } from "lucide-react"
import { ChallengeCard } from "@/components/challenges/challenge-card"
import { ChallengeDetail } from "@/components/challenges/challenge-detail"

// Mock data for challenges
const challengesData = [
  {
    id: 1,
    title: "Python List Comprehensions",
    description: "Master the art of list comprehensions in Python to write more elegant and efficient code.",
    difficulty: "Beginner",
    category: "Python",
    points: 100,
    completedBy: 1245,
    timeEstimate: "30 min",
  },
  {
    id: 2,
    title: "JavaScript Promises",
    description: "Learn how to handle asynchronous operations in JavaScript using Promises.",
    difficulty: "Intermediate",
    category: "JavaScript",
    points: 150,
    completedBy: 987,
    timeEstimate: "45 min",
  },
  {
    id: 3,
    title: "Sorting Algorithms",
    description: "Implement and understand different sorting algorithms and their time complexities.",
    difficulty: "Advanced",
    category: "Algorithms",
    points: 200,
    completedBy: 654,
    timeEstimate: "60 min",
  },
  {
    id: 4,
    title: "React Hooks",
    description: "Understand and implement React Hooks to manage state and side effects in functional components.",
    difficulty: "Intermediate",
    category: "JavaScript",
    points: 150,
    completedBy: 876,
    timeEstimate: "45 min",
  },
  {
    id: 5,
    title: "SQL Basics",
    description: "Learn the fundamentals of SQL queries for data manipulation and retrieval.",
    difficulty: "Beginner",
    category: "Databases",
    points: 100,
    completedBy: 1532,
    timeEstimate: "30 min",
  },
  {
    id: 6,
    title: "Binary Search Trees",
    description: "Implement and understand the operations and properties of Binary Search Trees.",
    difficulty: "Advanced",
    category: "Data Structures",
    points: 200,
    completedBy: 543,
    timeEstimate: "60 min",
  },
]

export function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredChallenges = challengesData.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDifficulty = difficultyFilter === "all" || challenge.difficulty === difficultyFilter
    const matchesCategory = categoryFilter === "all" || challenge.category === categoryFilter

    return matchesSearch && matchesDifficulty && matchesCategory
  })

  const handleChallengeSelect = (id: number) => {
    setSelectedChallenge(id)
  }

  const handleBackToList = () => {
    setSelectedChallenge(null)
  }

  return (
    <div className="p-4 md:p-8">
      {selectedChallenge ? (
        <ChallengeDetail
          challenge={challengesData.find((c) => c.id === selectedChallenge)!}
          onBack={handleBackToList}
        />
      ) : (
        <>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Challenges</h1>
              <p className="text-muted-foreground">
                Explore and solve coding and knowledge challenges to earn points and badges.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                My Submissions
              </Button>
              <Button size="sm">Create Challenge</Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="mt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <TabsList>
                <TabsTrigger value="all">All Challenges</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
              </TabsList>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search challenges..."
                    className="w-full pl-8 sm:w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Difficulties</SelectItem>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Python">Python</SelectItem>
                      <SelectItem value="JavaScript">JavaScript</SelectItem>
                      <SelectItem value="Algorithms">Algorithms</SelectItem>
                      <SelectItem value="Data Structures">Data Structures</SelectItem>
                      <SelectItem value="Databases">Databases</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredChallenges.map((challenge) => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    onSelect={() => handleChallengeSelect(challenge.id)}
                  />
                ))}
              </div>
              {filteredChallenges.length === 0 && (
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <p className="text-lg font-medium">No challenges found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="in-progress">
              <div className="mt-10 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-medium">No challenges in progress</p>
                <p className="text-muted-foreground">Start a challenge to see it here.</p>
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="mt-10 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-medium">No completed challenges</p>
                <p className="text-muted-foreground">Complete a challenge to see it here.</p>
              </div>
            </TabsContent>

            <TabsContent value="bookmarked">
              <div className="mt-10 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-medium">No bookmarked challenges</p>
                <p className="text-muted-foreground">Bookmark a challenge to see it here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}

