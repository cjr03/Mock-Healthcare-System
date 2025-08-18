import * as React from "react";

export function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-xl border bg-white ${className}`}>{children}</div>;
}

export function CardHeader({ children }: React.PropsWithChildren) {
  return <div className="p-4 border-b">{children}</div>;
}

export function CardTitle({ children }: React.PropsWithChildren) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
