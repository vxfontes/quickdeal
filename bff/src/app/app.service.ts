import { Injectable } from '@nestjs/common';
import * as config from 'config-yml';

@Injectable()
export class AppService {
    getHello() {
        return {
            app: {
                envid: config.ENVID,
                path: config.app.path,
                port: config.app.port,
                timeout: config.app.timeout,
            },
        };
    }
}
