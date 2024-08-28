import { Module } from "@nestjs/common";
import { AuthController } from "./v1/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import * as config from "config-yml";
import { AuthService } from "./v1/auth.service";

@Module({
    imports: [
        JwtModule.register({
            secret: config.security.jwtsecret,
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}