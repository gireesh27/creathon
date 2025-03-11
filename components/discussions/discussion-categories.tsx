"use client"

import { Button } from "@/components/ui/button"
import { CodeIcon, DatabaseIcon, BrainIcon, LayoutIcon, ServerIcon, TerminalIcon, GlobeIcon } from "lucide-react"

interface DiscussionCategoriesProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

// Mock data for discussion categories
const categoriesData = [
  {
    id: "all",
    name: "All Categories",
    icon: GlobeIcon,
    count: 156,
  },
  {
    id: "Frontend",
    name: "Frontend",
    icon: LayoutIcon,
    count: 42,
  },
  {
    id: "Backend",
    name: "Backend",
    icon: ServerIcon,
    count: 35,
  },
  {
    id: "Databases",
    name: "Databases",
    icon: DatabaseIcon,
    count: 28,
  },
  {
    id: "DevOps",
    name: "DevOps",
    icon: TerminalIcon,
    count: 19,
  },
  {
    id: "Machine Learning",
    name: "Machine Learning",
    icon: BrainIcon,
    count: 24,
  },
  {
    id: "System Design",
    name: "System Design",
    icon: CodeIcon,
    count: 18,
  },
]

export function DiscussionCategories({ selectedCategory, onSelectCategory }: DiscussionCategoriesProps) {
  return (
    <div className="space-y-1">
      {categoriesData.map((category) => {
        const Icon = category.icon
        return (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSelectCategory(category.id)}
          >
            <Icon className="mr-2 h-4 w-4" />
            <span className="flex-1 text-left">{category.name}</span>
            <span className="text-xs text-muted-foreground">{category.count}</span>
          </Button>
        )
      })}
    </div>
  )
}

