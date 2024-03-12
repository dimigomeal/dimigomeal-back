import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule, MongooseModuleAsyncOptions } from "@nestjs/mongoose";

import { ConfigModule } from "./config.module";

export const Mongooseoptions: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>("MONGO_URI"),
    dbName: "dimigomeal",

    connectionFactory: (connection) => {
      return connection;
    },
  }),
  inject: [ConfigService],
};

@Module({ imports: [MongooseModule.forRootAsync(Mongooseoptions)] })
export class DatabaseModule {}
