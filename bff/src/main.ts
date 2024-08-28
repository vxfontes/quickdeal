import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as config from 'config-yml';
import { json, urlencoded } from 'express';
import { DocumentFactory } from './shared/core/docs/document.factory';

async function bff() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
        logger: config.app?.log,
        bufferLogs: true,
    });
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.enableCors();
    app.setGlobalPrefix(config.app.path);
    app.use(urlencoded({ extended: true, limit: '2mb' }));
    app.use(json({ limit: '50mb' }));

    DocumentFactory.create(app);

    await app.listen(config.app.port, () => {
        Logger.debug('[ BFF ]  - successful started');
    });
}

bff();
