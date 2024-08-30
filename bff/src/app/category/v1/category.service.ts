import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category-input.dto';
import { ResponseEntity } from 'src/shared/entities/response.entity';
import { Category } from 'src/models/v1/category/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) { }

    public async create(createCategoryDto: CreateCategoryDto): Promise<ResponseEntity> {
        const existingCategory = await this.categoryRepository.findOne({ where: { name: createCategoryDto.name } });

        if (existingCategory == null || existingCategory == undefined) {
            try {
                const savedCategory = await this.categoryRepository.save(createCategoryDto);
                return ResponseEntity.success('Categoria criada com sucesso!', savedCategory);
            } catch (error) {
                return ResponseEntity.error('Erro ao criar categoria');
            }
        } else {
            return ResponseEntity.error('Categoria já existe no banco de dados');
        }
    }


    public async findAll(): Promise<ResponseEntity> {
        try {
            const categories = await this.categoryRepository.find({ select: ['id', 'name', 'description'] });
            if (categories.length === 0) return ResponseEntity.error('Não existem categorias cadastradas.');
            return ResponseEntity.success('Categorias encontradas com sucesso!', categories);
        } catch (error) {
            return ResponseEntity.error('Erro ao buscar categorias');
        }
    }
}
