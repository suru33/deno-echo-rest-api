import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {
  if (ctx.request.hasBody) {
    const requestBody = ctx.request.body();
    const value = await requestBody.value;
    ctx.response.body = value;
    console.log(value);
  } else {
    ctx.response.body = "Hello World!";
  }
});

await app.listen({ port: 8080 });
