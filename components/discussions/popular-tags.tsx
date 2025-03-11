"use client"

import { Badge } from "@/components/ui/badge"

interface PopularTagsProps {
  selectedTag: string | null
  onSelectTag: (tag: string) => void
}

// Mock data for popular tags
const tagsData = [
  { id: "React", count: 42 },
  { id: "JavaScript", count: 38 },
  { id: "Python", count: 35 },
  { id: "SQL", count: 28 },
  { id: "DevOps", count: 24 },
  { id: "Machine Learning", count: 22 },
  { id: "Next.js", count: 20 },
  { id: "TensorFlow", count: 18 },
  { id: "PostgreSQL", count: 16 },
  { id: "Docker", count: 15 },
  { id: "Kubernetes", count: 14 },
  { id: "TypeScript", count: 12 },
]

export function PopularTags({ selectedTag, onSelectTag }: PopularTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tagsData.map((tag) => (
        <Badge
          key={tag.id}
          variant={selectedTag === tag.id ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onSelectTag(tag.id)}
        >
          {tag.id}
          <span className="ml-1 text-xs">({tag.count})</span>
        </Badge>
      ))}
    </div>
  )
}

