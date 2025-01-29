import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: Hassan Mir</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/HassanMeer213?tab=repositories">
          Visit my GitHub
        </Link>
      </p>
    </div>
  );
}