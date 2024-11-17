import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("hello it's ice tea", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("ice tea is good option", { status: 200 });
    }
  },
  PORT: 3000,
  hostname: "127.0.0.1",
});
