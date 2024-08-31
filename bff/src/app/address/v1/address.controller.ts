import { Controller, Get, Post, Body, Param, Delete, BadRequestException, Put } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address-input.dto';
import { UpdateAddressResponseDto } from './dto/update-address-output.dto';
import { ApiBadRequestResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAddressResponseDto } from './dto/create-address-output.dto';
import { BadRequestResponseDto } from 'src/shared/core/errors/bad-request.error';
import { ResponseEntity } from 'src/shared/entities/response.entity';
import { UpdateAddressDto } from './dto/update-address-input.dto';
import { SuccessRequestResponseDto } from 'src/shared/core/dto/success-request.response';
import { FindAddressResponseDto } from './dto/find-address-output.dto';

@Controller('address/v1')
@ApiTags('address')
export class AddressController {
    constructor(private readonly addressService: AddressService) { }

    @Post("create")
    @ApiOperation({ summary: "Criar endereço", description: "Realiza a criação de um endereço de um usuário." })
    @ApiResponse({ status: 201, description: "Endereço criado com sucesso!", type: CreateAddressResponseDto })
    @ApiBadRequestResponse({ description: "Erro ao criar endereço.", type: BadRequestResponseDto })
    public async create(@Body() createAddressDto: CreateAddressDto): Promise<ResponseEntity> {
        const data = await this.addressService.create(createAddressDto);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }

    @Get('findAll/:id')
    @ApiOperation({ summary: "Listar endereços de um usuário", description: "Lista todos os endereços de um usuário." })
    @ApiResponse({ status: 200, description: "Endereços encontrados com sucesso!", type: FindAddressResponseDto })
    @ApiBadRequestResponse({ description: "Erro ao buscar endereços.", type: BadRequestResponseDto })
    @ApiParam({ name: 'id', type: 'string', description: 'ID do usuário que deseja ver seus endereços' })
    public async findAllAddressesFromUser(@Param('id') id: string): Promise<ResponseEntity> {
        const data = await this.addressService.findAllAddressesFromUser(id);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }

    @Put('update')
    @ApiOperation({ summary: "Atualizar endereço", description: "Atualiza um endereço de um usuário." })
    @ApiResponse({ status: 200, description: "Endereço atualizado com sucesso!", type: UpdateAddressResponseDto })
    public async update(@Body() updateAddressDto: UpdateAddressDto): Promise<ResponseEntity> {
        const data = await this.addressService.updateAddress(updateAddressDto);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover endereço', description: 'Remove um endereço existente.' })
    @ApiResponse({ status: 200, description: 'Endereço removido com sucesso!', type: SuccessRequestResponseDto })
    @ApiBadRequestResponse({ description: 'Erro ao remover endereço.', type: BadRequestResponseDto })
    @ApiParam({ name: 'id', type: 'string', description: 'ID do endereço a ser removido' })
    public async removeAddress(@Param('id') id: string): Promise<ResponseEntity> {
        const data = await this.addressService.removeAddress(id);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }
}
