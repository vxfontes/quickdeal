import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-input.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/v1/product/product.entity';
import { Repository } from 'typeorm';
import { ResponseEntity } from 'src/shared/entities/response.entity';
import { User } from 'src/models/v1/user/user.entity';
import { RoleEnum } from 'src/models/v1/user/role.entity';
import { Category } from 'src/models/v1/category/category.entity';

@Injectable()
export class ProductService {
    private logger = new Logger('ProductService');

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    public async create(createProductDto: CreateProductDto): Promise<ResponseEntity> {
        const { name, category, store, description, price, stockQuantity } = createProductDto;

        try {
            const existingStore = await this.userRepository.findOne({ where: { id: store } });

            if (!existingStore) return ResponseEntity.error('Loja não encontrada.');
            if (existingStore.role !== RoleEnum.STORE) return ResponseEntity.error('Lojista não existe, é apenas um cliente.');

            const existingCategory = await this.categoryRepository.findOne({ where: { id: category } });
            if (!existingCategory) return ResponseEntity.error('Categoria não encontrada.');

            const data = { name, category: existingCategory, store: existingStore, description, price, stockQuantity };

            const existingProduct = await this.productRepository.findOne({ where: data });
            if (existingProduct) return ResponseEntity.error('Produto já existe na mesma categoria e loja.');

            const newProduct = this.productRepository.create(data);
            const savedProduct = await this.productRepository.save(newProduct);
            return ResponseEntity.success('Produto criado com sucesso!', savedProduct);
        } catch (error) {
            return ResponseEntity.error('Erro ao criar produto');
        }
    }

    public async findAll(): Promise<ResponseEntity> {
        try {
            const products = await this.productRepository.find({
                relations: ['category', 'store'],
            });

            const responseData = products.map(product => ({
                id: product.id,
                name: product.name,
                description: product.description,
                price: Number(product.price),
                stockQuantity: product.stockQuantity,
                category: product.category.name,
                store: product.store.name,
            }));

            return ResponseEntity.success('Produtos encontrados com sucesso!', responseData);
        } catch (error) {
            return ResponseEntity.error('Erro ao buscar produtos');
        }
    }

    public async findAllLojista(id: string): Promise<ResponseEntity> {
        try {
            const userIsStore = await this.userRepository.findOne({ where: { id, role: RoleEnum.STORE } });
            if (!userIsStore) return ResponseEntity.error('Lojista não encontrado.');

            const products = await this.productRepository.find({
                where: { store: { id } },
                relations: ['category', 'store'],
            });

            const responseData = products.map(product => ({
                id: product.id,
                name: product.name,
                description: product.description,
                price: Number(product.price),
                stockQuantity: product.stockQuantity,
                category: product.category.name,
                store: product.store.name,
            }));

            return ResponseEntity.success('Produtos do lojista encontrados com sucesso!', responseData);
        } catch (error) {
            return ResponseEntity.error('Erro ao buscar produtos do lojista');
        }
    }

    public async findOne(id: string): Promise<any> {
        try {
            const product = await this.productRepository.findOne({
                where: { id },
                relations: ['category', 'store', 'review'],
            });

            if (!product) return ResponseEntity.error('Produto não encontrado');

            const responseData = {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                stockQuantity: product.stockQuantity,
                active: product.active,
                category: {
                    id: product.category.id,
                    name: product.category.name,
                    description: product.category.description,
                },
                store: {
                    id: product.store.id,
                    name: product.store.name,
                    email: product.store.email,
                    role: product.store.role,
                },
                reviews: product.review.map(review => ({
                    id: review.id,
                    rating: review.rating,
                    comment: review.comment,
                    user: review.user.name,
                    createdAt: review.createdAt,
                })),
            };

            return ResponseEntity.success('Produto encontrado com sucesso!', responseData);
        } catch (error) {
            return ResponseEntity.error('Erro ao buscar produto');
        }
    }

    public async update(id: string, updateProductDto: UpdateProductDto): Promise<ResponseEntity> {
        try {
            const userIsStore = await this.userRepository.findOne({ where: { id, role: RoleEnum.STORE } });
            if (!userIsStore) return ResponseEntity.error('Usuário não é um lojista.');

            const product = await this.productRepository.findOne({
                where: { id: updateProductDto.id },
                relations: ['category'],
            });
            if (!product) return ResponseEntity.error('Produto não encontrado.');

            // Atualiza os campos do produto
            Object.assign(product, updateProductDto);

            // Salva as alterações
            const updatedProduct = await this.productRepository.save(product);

            const responseData = {
                id: updatedProduct.id,
                name: updatedProduct.name,
                description: updatedProduct.description,
                price: updatedProduct.price,
                stockQuantity: updatedProduct.stockQuantity,
                active: updatedProduct.active,
                category: {
                    id: updatedProduct.category.id,
                    name: updatedProduct.category.name,
                    description: updatedProduct.category.description,
                },
                store: {
                    id: userIsStore.id,
                    name: userIsStore.name,
                    email: userIsStore.email,
                    role: userIsStore.role,
                }
            };

            return ResponseEntity.success('Produto atualizado com sucesso!', responseData);
        } catch (error) {
            this.logger.error('Erro aqui', error);
            return ResponseEntity.error('Erro ao atualizar produto');
        }
    }

    public async disable(id: string) {
        try {
            const product = await this.productRepository.findOne({
                where: { id: id },
            });
            if (!product) return ResponseEntity.error('Produto não encontrado.');

            product.active = false;
            const updatedProduct = await this.productRepository.save(product);

            return ResponseEntity.success('Produto removido com sucesso!');
        } catch (error) {
            this.logger.error('Erro aqui', error);
            return ResponseEntity.error('Erro ao remover produto');
        }
    }

    public async recover(id: string) {
        try {
            const product = await this.productRepository.findOne({
                where: { id: id },
            });
            if (!product) return ResponseEntity.error('Produto não encontrado.');

            product.active = true;
            const updatedProduct = await this.productRepository.save(product);

            return ResponseEntity.success('Produto reativado com sucesso!');
        } catch (error) {
            this.logger.error('Erro aqui', error);
            return ResponseEntity.error('Erro ao reativar produto');
        }
    }
}
