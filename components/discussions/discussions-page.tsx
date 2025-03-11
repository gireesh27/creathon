"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, PlusIcon } from "lucide-react"
import { DiscussionsList } from "@/components/discussions/discussions-list"
import { DiscussionCategories } from "@/components/discussions/discussion-categories"
import { PopularTags } from "@/components/discussions/popular-tags"

export function DiscussionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag)
  }

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedTag(null)
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Discussions</h1>
          <p className="text-muted-foreground">Join conversations, ask questions, and share your knowledge.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="gap-1">
            <PlusIcon className="h-4 w-4" />
            <span>New Discussion</span>
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <DiscussionCategories selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <PopularTags selectedTag={selectedTag} onSelectTag={handleTagSelect} />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Browse Discussions</CardTitle>
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search discussions..."
                    className="w-full pl-8 sm:w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              {(selectedCategory !== "all" || selectedTag) && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Filters:</span>
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedCategory}
                    </Badge>
                  )}
                  {selectedTag && (
                    <Badge variant="outline" className="gap-1">
                      {selectedTag}
                    </Badge>
                  )}
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="latest">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  <TabsTrigger value="my-discussions">My Discussions</TabsTrigger>
                </TabsList>
                <TabsContent value="latest" className="mt-4">
                  <DiscussionsList
                    searchQuery={searchQuery}
                    categoryFilter={selectedCategory}
                    tagFilter={selectedTag}
                    sortBy="latest"
                  />
                </TabsContent>
                <TabsContent value="popular" className="mt-4">
                  <DiscussionsList
                    searchQuery={searchQuery}
                    categoryFilter={selectedCategory}
                    tagFilter={selectedTag}
                    sortBy="popular"
                  />
                </TabsContent>
                <TabsContent value="unanswered" className="mt-4">
                  <DiscussionsList
                    searchQuery={searchQuery}
                    categoryFilter={selectedCategory}
                    tagFilter={selectedTag}
                    sortBy="unanswered"
                  />
                </TabsContent>
                <TabsContent value="my-discussions" className="mt-4">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-lg font-medium">No discussions found</p>
                    <p className="text-muted-foreground">You haven't created any discussions yet.</p>
                    <Button className="mt-4">Create Your First Discussion</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

