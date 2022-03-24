import { Controller, Get } from "@nestjs/common";

@Controller({})
export default class AppController {
  @Get()
  hello(): { message: string } {
    return {
      message: "hello there",
    };
  }
}
