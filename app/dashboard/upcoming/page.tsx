"use client";

import { CalendarDemo } from "@/components/calendar";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  ListFilter,
  Plus,
} from "lucide-react";

export default function Upcoming() {
  const upcomingEvents = [
    {
      date: "Aug 25",
      time: "10:00 AM",
      title: "Design Team Sync",
      type: "Meeting",
      location: "Google Meet",
      description:
        "Reviewing the new landing page iterations and brand refresh.",
      color: "bg-blue-500",
    },
    {
      date: "Aug 25",
      time: "2:00 PM",
      title: "Q3 Budget Review",
      type: "Task",
      location: "Conference Room B",
      description: "Go through the final numbers with the finance team.",
      color: "bg-emerald-500",
    },
    {
      date: "Aug 26",
      time: "All Day",
      title: "Product Launch Day",
      type: "Event",
      location: "Global",
      description:
        "The big day! Monitor performance metrics and user feedback.",
      color: "bg-purple-500",
    },
    {
      date: "Aug 27",
      time: "11:30 AM",
      title: "Marketing Workshop",
      type: "Meeting",
      location: "Studio Loft",
      description: "Brainstorming session for the holiday campaign.",
      color: "bg-orange-500",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
          <div className="space-y-2 mt-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">
              Schedule Control
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Upcoming
            </h1>
            <p className="text-base text-muted-foreground">
              Keep track of your roadmaps and future commitments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-card border border-border rounded-xl p-1 gap-1">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="px-4 text-sm font-bold text-foreground">
                August 2023
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <button className="p-2.5 bg-primary text-primary-foreground rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: Mini Calendar Widget */}
          <div className="space-y-6">
            <div>
              <CalendarDemo />
            </div>

            <div className="bg-card p-6 rounded-3xl border border-border shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <ListFilter className="w-4 h-4 text-primary" />
                Categories
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Meetings", color: "bg-blue-500" },
                  { label: "Tasks", color: "bg-emerald-500" },
                  { label: "Personal", color: "bg-purple-500" },
                  { label: "Urgent", color: "bg-red-500" },
                ].map((cat) => (
                  <div
                    key={cat.label}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${cat.color}`}
                      ></div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {cat.label}
                      </span>
                    </div>
                    {/* <span className="text-[10px] font-bold text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      0{Math.floor(Math.random() * 5) + 1}
                    </span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline View */}
          <div className="lg:col-span-3 space-y-10">
            {/* Day Group 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                    Wednesday
                  </span>
                  <span className="text-2xl font-black text-foreground">
                    August 25
                  </span>
                </div>
                <Separator className="bg-border max-w-185"/>
                <div className="h-1px bg-border grow"></div>
              </div>

              <div className="space-y-4">
                {upcomingEvents
                  .filter((e) => e.date === "Aug 25")
                  .map((event, idx) => (
                    <div
                      key={idx}
                      className="group bg-card hover:bg-accent/30 p-5 rounded-3xl border border-border hover:border-primary/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center gap-6"
                    >
                      <div className="shrink-0 w-24">
                        <div className="flex items-center gap-2 text-primary font-bold text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <div className="grow space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${event.color} text-white rounded-lg`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xl">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-4 pt-1">
                          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Day Group 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                    Thursday
                  </span>
                  <span className="text-2xl font-black text-foreground grow">
                    August 26
                  </span>
                </div>
                <Separator className="bg-border max-w-185"/>
                <div className="h-1px bg-border grow"></div>
              </div>

              <div className="space-y-4">
                {upcomingEvents
                  .filter((e) => e.date === "Aug 26")
                  .map((event, idx) => (
                    <div
                      key={idx}
                      className="group bg-card hover:bg-accent/30 p-5 rounded-3xl border border-border hover:border-primary/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center gap-6"
                    >
                      <div className="shrink-0 w-24">
                        <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <div className="grow space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${event.color} text-white rounded-lg`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xl">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-4 pt-1">
                          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Day Group 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                    Friday
                  </span>
                  <span className="text-2xl font-black text-foreground">
                    August 27
                  </span>
                </div>
                <div className="h-px bg-border grow"></div>
              </div>

              <div className="space-y-4">
                {upcomingEvents
                  .filter((e) => e.date === "Aug 27")
                  .map((event, idx) => (
                    <div
                      key={idx}
                      className="group bg-card hover:bg-accent/30 p-5 rounded-3xl border border-border hover:border-primary/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center gap-6"
                    >
                      <div className="shrink-0 w-24">
                        <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <div className="grow space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${event.color} text-white rounded-lg`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xl">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-4 pt-1">
                          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
