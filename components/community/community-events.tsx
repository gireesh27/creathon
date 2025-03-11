import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, UsersIcon, ExternalLinkIcon } from "lucide-react"

// Mock data for community events
const eventsData = [
  {
    id: 1,
    title: "Intro to Machine Learning with TensorFlow",
    date: "Mar 15, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    attendees: 18,
    type: "Workshop",
  },
  {
    id: 2,
    title: "Web Development Hackathon",
    date: "Mar 20, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Tech Hub, Downtown",
    attendees: 45,
    type: "Hackathon",
  },
  {
    id: 3,
    title: "Career Panel: Tech Industry Insights",
    date: "Mar 25, 2024",
    time: "5:30 PM - 7:00 PM",
    location: "Virtual (Google Meet)",
    attendees: 32,
    type: "Panel Discussion",
  },
]

export function CommunityEvents() {
  return (
    <div className="space-y-4">
      {eventsData.map((event) => (
        <div key={event.id} className="rounded-lg border p-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium line-clamp-1">{event.title}</h3>
              <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  <span>
                    {event.date}, {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <UsersIcon className="h-3.5 w-3.5" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
            </div>
            <Badge variant="outline">{event.type}</Badge>
          </div>
          <div className="mt-3 flex justify-end">
            <Button size="sm" variant="outline" className="gap-1">
              <span>Join</span>
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

