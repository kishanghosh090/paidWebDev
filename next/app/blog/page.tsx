import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div>
      <Link href="/blog/1">Post 1</Link>
      <br />
      <Link href="/blog/2">Post 2</Link>
    </div>
  );
}

export default Blog;
