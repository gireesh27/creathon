import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserPlusIcon } from "lucide-react"

interface CommunityMembersProps {
  searchQuery: string
}

// Mock data for community members
const membersData = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    username: "sarahc",
    role: "Python Expert",
    isConnected: true,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    username: "mrodriguez",
    role: "Full Stack Developer",
    isConnected: false,
  },
  {
    id: 3,
    name: "Aisha Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    username: "aishap",
    role: "Data Scientist",
    isConnected: true,
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    username: "davidk",
    role: "ML Engineer",
    isConnected: false,
  },
  {
    id: 5,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    username: "emmaw",
    role: "UX Designer",
    isConnected: false,
  },
]

export function CommunityMembers({ searchQuery }: CommunityMembersProps) {
  const filteredMembers = membersData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (filteredMembers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <p className="text-sm font-medium">No members found</p>
        <p className="text-xs text-muted-foreground">Try a different search term</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {filteredMembers.map((member) => (
        <div key={member.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{member.name}</div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">@{member.username}</span>
                <Badge variant="outline" className="text-xs">
                  {member.role}
                </Badge>
              </div>
            </div>
          </div>
          <Button variant={member.isConnected ? "outline" : "default"} size="sm" className="h-8 w-8 p-0">
            <UserPlusIcon className="h-4 w-4" />
            <span className="sr-only">{member.isConnected ? "Connected" : "Connect"}</span>
          </Button>
        </div>
      ))}
    </div>
  )
}

