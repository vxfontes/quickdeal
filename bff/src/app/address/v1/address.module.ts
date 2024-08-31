import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { User } from 'src/models/v1/user/user.entity';
import { Address } from 'src/models/v1/address/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Address,
    ]),
  ],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModuleV1 { }
