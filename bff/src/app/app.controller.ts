import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('application')
export class AppController {
    constructor(private readonly appService: AppService) { }

    @ApiOkResponse({
        description: 'Retorna um objeto contendo informações da aplicação',
        schema: {
            properties: {
                app: {
                    properties: {
                        envid: { type: 'string', example: 'DEB' },
                        path: { type: 'string', example: 'api' },
                        port: { type: 'number', example: 3050 },
                        timeout: { type: 'number', example: 60000 },
                    },
                },
            },
        },
    })
    @Get('health')
    getHello() {
        return this.appService.getHello();
    }
}
