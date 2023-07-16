import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div>not found content</div>
      <div>
        <Link href="/">back to homepage</Link>
      </div>
    </>
  );
}
