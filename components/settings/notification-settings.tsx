"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export function NotificationSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Notification Settings</h2>
        <p className="text-sm text-muted-foreground">Manage how and when you receive notifications.</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <p className="text-sm text-muted-foreground">Choose what updates you want to receive in your inbox.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-challenges" className="flex flex-col space-y-1">
              <span>New Challenges</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive notifications about new challenges in your areas of interest.
              </span>
            </Label>
            <Switch id="email-challenges" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-comments" className="flex flex-col space-y-1">
              <span>Comments & Replies</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get notified when someone comments on your submissions or replies to your comments.
              </span>
            </Label>
            <Switch id="email-comments" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-achievements" className="flex flex-col space-y-1">
              <span>Achievements & Badges</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive notifications when you earn new achievements or badges.
              </span>
            </Label>
            <Switch id="email-achievements" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-learning" className="flex flex-col space-y-1">
              <span>Learning Path Updates</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get updates about new content in your enrolled learning paths.
              </span>
            </Label>
            <Switch id="email-learning" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-marketing" className="flex flex-col space-y-1">
              <span>Marketing & Promotions</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive promotional emails and special offers.
              </span>
            </Label>
            <Switch id="email-marketing" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">In-App Notifications</h3>
          <p className="text-sm text-muted-foreground">Configure notifications you see while using the platform.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="app-comments" className="flex flex-col space-y-1">
              <span>Comments & Mentions</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get notified when someone comments on your content or mentions you.
              </span>
            </Label>
            <Switch id="app-comments" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="app-likes" className="flex flex-col space-y-1">
              <span>Likes & Reactions</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive notifications when someone likes or reacts to your content.
              </span>
            </Label>
            <Switch id="app-likes" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="app-events" className="flex flex-col space-y-1">
              <span>Events & Reminders</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get reminders about upcoming events and deadlines.
              </span>
            </Label>
            <Switch id="app-events" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="app-system" className="flex flex-col space-y-1">
              <span>System Notifications</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive important system updates and announcements.
              </span>
            </Label>
            <Switch id="app-system" defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Notification Frequency</h3>
          <p className="text-sm text-muted-foreground">Choose how often you want to receive email digests.</p>
        </div>

        <RadioGroup defaultValue="daily">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="realtime" id="realtime" />
            <Label htmlFor="realtime" className="font-normal">
              Real-time
              <p className="text-sm text-muted-foreground">Receive emails as events happen.</p>
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily" className="font-normal">
              Daily digest
              <p className="text-sm text-muted-foreground">Receive a daily summary of all notifications.</p>
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly" className="font-normal">
              Weekly digest
              <p className="text-sm text-muted-foreground">Receive a weekly summary of all notifications.</p>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}

