import { NestFactory } from "@nestjs/core";
import AppModule from "./AppModule";

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}

main();
