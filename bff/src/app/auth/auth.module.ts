import { Module } from "@nestjs/common";
import { AuthModuleV1 } from "./v1/auth.module";

@Module({
    imports: [AuthModuleV1],
    controllers: [],
    providers: []
})
export class AuthModule {}