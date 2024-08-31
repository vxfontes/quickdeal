import { Injectable, Logger } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address-input.dto';
import { Address } from 'src/models/v1/address/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseEntity } from 'src/shared/entities/response.entity';
import { User } from 'src/models/v1/user/user.entity';
import { UpdateAddressDto } from './dto/update-address-input.dto';

@Injectable()
export class AddressService {
    private logger = new Logger('AuthService');

    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,

        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    public async create(createAddressDto: CreateAddressDto): Promise<ResponseEntity> {
        const { street, number, complement, neighborhood, state, city, phone, user, zipCode, reference } = createAddressDto;

        try {
            const existingUser = await this.userRepository.findOne({ where: { id: user } });
            if (!existingUser) return ResponseEntity.error('Usuário não existe no sistema.');

            const data = { street, number, complement, neighborhood, city, phone, user: existingUser, zipCode, reference, state }

            const existingAddress = await this.addressRepository.findOne({ where: data });
            if (existingAddress) return ResponseEntity.error('Endereço já existe para este usuário.');

            const newAddress = this.addressRepository.create(data);

            const savedAddress = await this.addressRepository.save(newAddress);
            const { user: _, ...addressData } = savedAddress;

            return ResponseEntity.success('Endereço criado com sucesso!', addressData);
        } catch (error) {
            this.logger.error("Erro desconhecido: ", error.message);
            return ResponseEntity.error('Erro ao criar endereço.');
        }
    }

    public async findAllAddressesFromUser(userId: string): Promise<ResponseEntity> {
        try {
            const addresses = await this.addressRepository.find({
                where: { user: { id: userId } },
                relations: ['user'],
            });

            if (addresses.length === 0) {
                return ResponseEntity.error('Nenhum endereço encontrado para este usuário.');
            }

            addresses.forEach(address => {
                delete address.user.password;
                delete address.user.createdAt;
                delete address.user.updatedAt;
            });

            return ResponseEntity.success('Endereços encontrados com sucesso!', addresses);
        } catch (error) {
            this.logger.error("Erro ao buscar endereços: ", error.message);
            return ResponseEntity.error('Erro ao buscar endereços.');
        }
    }

    public async updateAddress(updateAddressDto: UpdateAddressDto): Promise<ResponseEntity> {
        try {
            const address = await this.addressRepository.findOne({ where: { id: updateAddressDto.id } });
            if (!address) return ResponseEntity.error('Endereço não encontrado.');

            const { id: _, ...updateData } = updateAddressDto;
            const updatedAddress = Object.assign(address, updateData); // Atualiza os campos existentes
            const savedAddress = await this.addressRepository.save(updatedAddress);

            return ResponseEntity.success('Endereço atualizado com sucesso!', savedAddress);
        } catch (error) {
            this.logger.error("Erro ao atualizar endereço: ", error.message);
            return ResponseEntity.error('Erro ao atualizar endereço.');
        }
    }

    public async removeAddress(addressId: string): Promise<ResponseEntity> {
        try {
            const address = await this.addressRepository.findOne({ where: { id: addressId } });
            if (!address) return ResponseEntity.error('Endereço não encontrado.');

            await this.addressRepository.remove(address);

            return ResponseEntity.success('Endereço removido com sucesso!');
        } catch (error) {
            this.logger.error("Erro ao remover endereço: ", error.message);
            return ResponseEntity.error('Erro ao remover endereço.');
        }
    }
}
