"use client";

import { useParams } from "next/navigation";

export default function AssetDetailPage() {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h1>Asset Detail</h1>
      <p>This is a placeholder page for Asset ID: {id}.</p>
    </div>
  );
}
