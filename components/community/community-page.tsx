"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SearchIcon, UsersIcon, UserPlusIcon } from "lucide-react"
import { CommunityMembers } from "@/components/community/community-members"
import { CommunityEvents } from "@/components/community/community-events"
import { CommunityActivity } from "@/components/community/community-activity"

export function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">Connect with other learners, join events, and share your knowledge.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <UsersIcon className="h-4 w-4" />
            <span className="hidden sm:inline">My Connections</span>
          </Button>
          <Button size="sm" className="gap-1">
            <UserPlusIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Find People</span>
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Community Feed</CardTitle>
            <CardDescription>Recent activity from the community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your Avatar" />
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
              <Input placeholder="Share something with the community..." className="flex-1" />
              <Button>Post</Button>
            </div>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <CommunityActivity />
              </TabsContent>
              <TabsContent value="discussions" className="mt-4">
                <CommunityActivity filter="discussions" />
              </TabsContent>
              <TabsContent value="challenges" className="mt-4">
                <CommunityActivity filter="challenges" />
              </TabsContent>
              <TabsContent value="events" className="mt-4">
                <CommunityActivity filter="events" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Join these community events</CardDescription>
            </CardHeader>
            <CardContent>
              <CommunityEvents />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Members</CardTitle>
              <CardDescription>People making an impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search members..."
                  className="mb-4 w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <CommunityMembers searchQuery={searchQuery} />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Members
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

