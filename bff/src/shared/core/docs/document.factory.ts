import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DocumentConstants } from './document.constants';

export class DocumentFactory {
    static create(app: INestApplication) {
        const document = SwaggerModule.createDocument(app, this.getDocumentConfig());
        SwaggerModule.setup('swagger-ui', app, document);
    }

    private static getDocumentConfig() {
        return new DocumentBuilder()
            .setTitle(DocumentConstants.TITLE)
            .setDescription(DocumentConstants.DESCRIPTION)
            .setVersion(DocumentConstants.VERSION)
            .addBasicAuth()
            .build();
    }
}
