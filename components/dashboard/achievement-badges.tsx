import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AwardIcon, CodeIcon, FlameIcon, BrainIcon, ZapIcon, StarIcon } from "lucide-react"

const badges = [
  {
    icon: <FlameIcon className="h-6 w-6" />,
    name: "7-Day Streak",
    description: "Completed challenges for 7 consecutive days",
    earned: true,
  },
  {
    icon: <CodeIcon className="h-6 w-6" />,
    name: "Code Master",
    description: "Completed 10 coding challenges",
    earned: true,
  },
  {
    icon: <BrainIcon className="h-6 w-6" />,
    name: "Knowledge Seeker",
    description: "Completed 5 knowledge challenges",
    earned: true,
  },
  {
    icon: <ZapIcon className="h-6 w-6" />,
    name: "Quick Solver",
    description: "Solved a challenge in under 5 minutes",
    earned: false,
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    name: "Perfect Score",
    description: "Achieved 100% on a difficult challenge",
    earned: false,
  },
  {
    icon: <AwardIcon className="h-6 w-6" />,
    name: "Top Contributor",
    description: "Helped others in the community forum",
    earned: true,
  },
]

export function AchievementBadges() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div
                className={`flex h-14 w-14 flex-col items-center justify-center rounded-full border p-2 ${
                  badge.earned
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-muted bg-muted/50 text-muted-foreground opacity-50"
                }`}
              >
                {badge.icon}
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <div className="text-center">
                <p className="font-medium">{badge.name}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
                {!badge.earned && <p className="text-xs italic mt-1">Not yet earned</p>}
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

