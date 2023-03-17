import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

export interface DatabaseConnectionOptions {
    primary: SqlServerConnectionOptions;
}