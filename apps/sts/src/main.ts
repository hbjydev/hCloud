import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogfmtConsoleLogger } from "@hCloud/nest-logfmt";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new LogfmtConsoleLogger(),
    });
    await app.listen(process.env['PORT'] ?? '4000');
}

void bootstrap();
