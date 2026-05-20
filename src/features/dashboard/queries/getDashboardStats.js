import { db } from "@/lib/db/client";

export async function getDashboardStats() {
  const events = await db.findMany("events");

  return {
    revenue: "$48.2K",
    activeUsers: "12,480",
    conversionRate: "8.7%",
    openIssues: "14",
    events,
    chart: [
      { label: "Mon", value: 38 },
      { label: "Tue", value: 52 },
      { label: "Wed", value: 47 },
      { label: "Thu", value: 68 },
      { label: "Fri", value: 74 },
      { label: "Sat", value: 61 },
      { label: "Sun", value: 82 }
    ]
  };
}
