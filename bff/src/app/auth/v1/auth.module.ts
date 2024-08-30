import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import * as config from "config-yml";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/models/v1/user/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),
        JwtModule.register({
            secret: config.security.jwtsecret,
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModuleV1 {}