"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { AccountSettings } from "@/components/settings/account-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { AppearanceSettings } from "@/components/settings/appearance-settings"
import { IntegrationSettings } from "@/components/settings/integration-settings"

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader className="border-b px-6">
            <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="p-6">
          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} >
            <TabsContent value="profile" className="mt-0">
              <ProfileSettings />
            </TabsContent>
          </Tabs>
          <Tabs  value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="account" className="mt-0">
              <AccountSettings />
            </TabsContent>
          </Tabs>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="notifications" className="mt-0">
              <NotificationSettings />
            </TabsContent>
          </Tabs>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="appearance" className="mt-0">
              <AppearanceSettings />
            </TabsContent>
          </Tabs>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="integrations" className="mt-0">
              <IntegrationSettings />
            </TabsContent>
          </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

