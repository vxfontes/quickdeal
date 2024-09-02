import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product-input.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBadRequestResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseEntity } from 'src/shared/entities/response.entity';
import { BadRequestResponseDto } from 'src/shared/core/errors/bad-request.error';
import { CreateProductOutputDto } from './dto/create-product-output.dto';
import { FindAllProductResponseDto } from './dto/find-all-product.dto';
import { FindOneProductResponseDto } from './dto/find-one-product.dto';
import { SuccessRequestResponseDto } from 'src/shared/core/dto/success-request.response';

@Controller('product/v1')
@ApiTags('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('create')
    @ApiOperation({ summary: 'Criar produto', description: 'Cria um novo produto para um lojista.' })
    @ApiResponse({ status: 201, description: 'Produto criado com sucesso!', type: CreateProductOutputDto })
    @ApiBadRequestResponse({ description: 'Erro ao criar produto.', type: BadRequestResponseDto })
    public async create(@Body() createProductDto: CreateProductDto): Promise<ResponseEntity> {
        const data = await this.productService.create(createProductDto);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }

    @Get('findAll')
    @ApiOperation({ summary: 'Listar todos os produtos', description: 'Lista todos os produtos cadastrados na plataforma.' })
    @ApiResponse({ status: 200, description: 'Produtos encontrados com sucesso!', type: FindAllProductResponseDto })
    @ApiBadRequestResponse({ description: 'Erro ao buscar produtos.', type: BadRequestResponseDto })
    public async findAll(): Promise<ResponseEntity> {
        const data = await this.productService.findAll();
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }

    @Get('findAllLojista/:id')
    @ApiOperation({ summary: 'Listar todos os produtos de um lojista', description: 'Lista todos os produtos cadastrados na plataforma de um lojista.' })
    @ApiResponse({ status: 200, description: 'Produtos do lojista encontrados com sucesso!', type: FindAllProductResponseDto })
    @ApiBadRequestResponse({ description: 'Erro ao buscar produtos do lojista.', type: BadRequestResponseDto })
    @ApiParam({ name: 'id', type: 'string', description: 'ID do lojista e seus produtos' })
    public async findAllLojista(@Param('id') id: string): Promise<ResponseEntity> {
        const data = await this.productService.findAllLojista(id);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }
    
    @Get('findOne/:id')
    @ApiOperation({ summary: 'Buscar produto por ID', description: 'Busca um produto específico.' })
    @ApiResponse({ status: 200, description: 'Produto encontrado com sucesso!', type: FindOneProductResponseDto })
    @ApiBadRequestResponse({ description: 'Erro ao buscar produto.', type: BadRequestResponseDto })
    @ApiParam({ name: 'id', type: 'string', description: 'ID do produto que deseja ver todos os detalhes' })
    public async findOne(@Param('id') id: string) {
        const data = await this.productService.findOne(id);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }
    
    @Put('update/:id')
    @ApiOperation({ summary: 'Atualizar produto de lojista', description: 'Atualiza um produto existente.' })
    @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso!', type: FindOneProductResponseDto })
    @ApiBadRequestResponse({ description: 'Erro ao atualizar produto.', type: BadRequestResponseDto })
    @ApiParam({ name: 'id', type: 'string', description: 'ID do lojista que deseja atualizar seu produto' })
    public async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        const data = await this.productService.update(id, updateProductDto);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }
    
    @Delete('disable/:id')
    @ApiOperation({ summary: 'Desativar produto de lojista', description: 'Desativa um produto existente.' })
    @ApiResponse({ status: 200, description: 'Produto desativado com sucesso!', type: SuccessRequestResponseDto })
    @ApiBadRequestResponse({ description: 'Erro ao desativar produto.', type: BadRequestResponseDto })
    @ApiParam({ name: 'id', type: 'string', description: 'ID do produto que deseja desativar' })
    public async remove(@Param('id') id: string) {
        const data = await this.productService.disable(id);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }
    
    @Delete('recover/:id')
    @ApiOperation({ summary: 'Reativa produto de lojista', description: 'Desativa um produto existente.' })
    @ApiResponse({ status: 200, description: 'Produto reativado com sucesso!', type: SuccessRequestResponseDto })
    @ApiBadRequestResponse({ description: 'Erro ao reativa produto.', type: BadRequestResponseDto })
    @ApiParam({ name: 'id', type: 'string', description: 'ID do produto que deseja reativar' })
    public async recuperar(@Param('id') id: string) {
        const data = await this.productService.recover(id);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }
}
