import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My app for Web Dev Assignments</h1>
      <p><Link href="/week-2">Go to Week 2</Link></p>
      <p><Link href="/week-3">Go to Week 3</Link></p>
      <p><Link href="/week-4">Go to Week 4</Link></p>
      <p><Link href="/week-5">Go to Week 5</Link></p>
      <p><Link href="/week-6">Go to Week 6</Link></p>  
    </div>
  );
}
