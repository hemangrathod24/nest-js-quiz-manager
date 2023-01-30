import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Admin@123',
    database: 'Quiz-Manager',
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
  }
