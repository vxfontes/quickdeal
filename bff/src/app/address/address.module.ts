import { Module } from '@nestjs/common';
import { AddressModuleV1 } from './v1/address.module';

@Module({
  imports: [AddressModuleV1],
  controllers: [],
  providers: [],
})
export class AddressModule {}
