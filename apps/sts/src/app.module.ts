import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import configuration from "./configuration";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
