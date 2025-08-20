import Link from "next/link";
import React from "react";

export default function DashboardLayout(
    { feed,
        stats,
        tab1,
        tab2,
        children
    }: {
        feed: React.ReactNode;
        stats: React.ReactNode;
        tab1: React.ReactNode;
        tab2: React.ReactNode;
        children: React.ReactNode;
    }
) {
    return (
         <div>
      <nav style={{ marginBottom: "10px" }}>
        <Link href="/dashboard-new/tab1">Tab 1</Link> |{" "}
        <Link href="/dashboard-new/tab2">Tab 2</Link>
      </nav>
      <div>{children }</div>
     
    </div>
    )
}