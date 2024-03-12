import { Module } from "@nestjs/common";
import {
  ConfigModule as NestConfigModule,
  ConfigModuleOptions,
} from "@nestjs/config";

export const options: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: process.env.NODE_ENV == "development" ? ".env.dev" : ".env",
};

@Module({ imports: [NestConfigModule.forRoot(options)] })
export class ConfigModule {}
