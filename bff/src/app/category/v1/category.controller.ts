import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category-input.dto';
import { CategoryService } from './category.service';
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessRequestResponseDto } from 'src/shared/core/dto/success-request.response';
import { BadRequestResponseDto } from 'src/shared/core/errors/bad-request.error';
import { ResponseEntity } from 'src/shared/entities/response.entity';
import { CreateCategoryResponseDto } from './dto/create-category-output.dto';

@Controller('category/v1')
@ApiTags("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post("create")
  @ApiOperation({ summary: "Criar categoria", description: "Realiza a criação de uma categoria." })
  @ApiResponse({ status: 201, description: "Categoria criada com sucesso!", type: SuccessRequestResponseDto })
  @ApiBadRequestResponse({ description: "Erro ao criar categoria.", type: BadRequestResponseDto })
  public async create(@Body() createCategoryDto: CreateCategoryDto): Promise<ResponseEntity> {
    const data = await this.categoryService.create(createCategoryDto);
    if (data.isError()) throw new BadRequestException(data);
    return data;
  }
  
  @Get('all')
  @ApiOperation({ summary: "Listar categorias", description: "Lista todas as categorias cadastradas." })
  @ApiResponse({ status: 200, description: "Categorias encontradas com sucesso!", type: CreateCategoryResponseDto })
  @ApiBadRequestResponse({ description: "Erro ao buscar categorias.", type: BadRequestResponseDto })
  public async findAll() {
    const data = await this.categoryService.findAll();
    if (data.isError()) throw new BadRequestException(data);
    return data;
  }
}
