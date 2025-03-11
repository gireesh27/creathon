"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SearchIcon } from "lucide-react"

// Mock data for leaderboard
const leaderboardData = [
  {
    rank: 1,
    user: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "sarahc",
    },
    points: 2450,
    completedChallenges: 42,
    badges: ["Python Expert", "Algorithm Master"],
    streak: 15,
  },
  {
    rank: 2,
    user: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "mrodriguez",
    },
    points: 2320,
    completedChallenges: 38,
    badges: ["JavaScript Guru", "Database Wizard"],
    streak: 12,
  },
  {
    rank: 3,
    user: {
      name: "Aisha Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "aishap",
    },
    points: 2180,
    completedChallenges: 35,
    badges: ["Full Stack Dev", "UI Master"],
    streak: 9,
  },
  {
    rank: 4,
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "davidk",
    },
    points: 2050,
    completedChallenges: 33,
    badges: ["Database Wizard", "Backend Pro"],
    streak: 7,
  },
  {
    rank: 5,
    user: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "emmaw",
    },
    points: 1980,
    completedChallenges: 31,
    badges: ["Frontend Ninja", "React Expert"],
    streak: 14,
  },
  {
    rank: 6,
    user: {
      name: "Jamal Ahmed",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "jamala",
    },
    points: 1920,
    completedChallenges: 30,
    badges: ["Python Wizard", "Data Science Pro"],
    streak: 8,
  },
  {
    rank: 7,
    user: {
      name: "Sofia Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "sofiag",
    },
    points: 1850,
    completedChallenges: 28,
    badges: ["Mobile Dev", "UI/UX Designer"],
    streak: 6,
  },
  {
    rank: 8,
    user: {
      name: "Raj Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "rajp",
    },
    points: 1780,
    completedChallenges: 27,
    badges: ["Cloud Expert", "DevOps Pro"],
    streak: 11,
  },
  {
    rank: 9,
    user: {
      name: "Olivia Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "oliviaj",
    },
    points: 1720,
    completedChallenges: 26,
    badges: ["Security Specialist", "Network Pro"],
    streak: 5,
  },
  {
    rank: 10,
    user: {
      name: "Wei Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "weic",
    },
    points: 1650,
    completedChallenges: 25,
    badges: ["Machine Learning Expert", "AI Enthusiast"],
    streak: 10,
  },
]

export function LeaderboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [timeFilter, setTimeFilter] = useState("weekly")

  const filteredLeaderboard = leaderboardData.filter(
    (entry) =>
      entry.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.user.username.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground">See who's leading the pack in our learning community.</p>
        </div>
      </div>

      <Tabs defaultValue="global" className="mt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList>
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="category">By Category</TabsTrigger>
          </TabsList>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="w-full pl-8 sm:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">This Week</SelectItem>
                <SelectItem value="monthly">This Month</SelectItem>
                <SelectItem value="alltime">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="global" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Rankings</CardTitle>
              <CardDescription>
                Top performers across all categories{" "}
                {timeFilter === "weekly" ? "this week" : timeFilter === "monthly" ? "this month" : "of all time"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredLeaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
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
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={entry.user.avatar} alt={entry.user.name} />
                        <AvatarFallback>{entry.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{entry.user.name}</p>
                        <p className="text-sm text-muted-foreground">@{entry.user.username}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-medium">{entry.points}</p>
                        <p className="text-xs text-muted-foreground">Points</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-medium">{entry.completedChallenges}</p>
                        <p className="text-xs text-muted-foreground">Challenges</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-medium">{entry.streak} days</p>
                        <p className="text-xs text-muted-foreground">Streak</p>
                      </div>
                      <div className="hidden sm:flex sm:flex-wrap sm:gap-1">
                        {entry.badges.map((badge, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                {filteredLeaderboard.length === 0 && (
                  <div className="mt-10 flex flex-col items-center justify-center text-center">
                    <p className="text-lg font-medium">No users found</p>
                    <p className="text-muted-foreground">Try adjusting your search to find what you're looking for.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="friends">
          <div className="mt-10 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium">Connect with friends</p>
            <p className="text-muted-foreground">Add friends to see how you compare on the leaderboard.</p>
          </div>
        </TabsContent>

        <TabsContent value="category">
          <div className="mt-10 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium">Category rankings coming soon</p>
            <p className="text-muted-foreground">We're working on category-specific leaderboards.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

