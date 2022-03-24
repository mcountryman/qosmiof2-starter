import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import AppController from "./AppController";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./data/dev.db",
    }),
  ],
  controllers: [AppController],
})
export default class AppModule {}
