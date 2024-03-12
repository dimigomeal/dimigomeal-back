export * from "./swagger.module";
export * from "./config.module";
export * from "./database.module";
export * from "./schedule.module";

import { ConfigModule } from "./config.module";
import { DatabaseModule } from "./database.module";
import { CustomScheduleModule } from "./schedule.module";

export const EssentialModules = [
  ConfigModule,
  DatabaseModule,
  CustomScheduleModule,
];
