CREATE TABLE "user" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL CHECK ("role" IN ('admin', 'customer', 'store')),  -- Enum como constraint
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE "address" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "street" VARCHAR(255) NOT NULL,
    "neighborhood" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "zip_code" VARCHAR(20) NOT NULL,
    "number" VARCHAR(20) NOT NULL,
    "complement" VARCHAR(255),
    "phone" VARCHAR(20),
    "reference" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- um usuario pode ter varios endereços
CREATE TABLE "user_address" (
    "user_id" UUID,
    "address_id" UUID,
    PRIMARY KEY ("user_id", "address_id"),
    FOREIGN KEY ("user_id") REFERENCES "user"("id"),
    FOREIGN KEY ("address_id") REFERENCES "address"("id")
);


CREATE TABLE "product" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "store_id" UUID,
    "category_id" UUID,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN DEFAULT TRUE,
    "price" DECIMAL(10, 2) NOT NULL,
    "stock_quantity" INT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("store_id") REFERENCES "user"("id"),
    FOREIGN KEY ("category_id") REFERENCES "category"("id")
);

CREATE TABLE "review" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "product_id" UUID,
    "user_id" UUID,
    "rating" INT NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("product_id") REFERENCES "product"("id"),
    FOREIGN KEY ("user_id") REFERENCES "user"("id")
);

CREATE TABLE "category" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- pedido -> carrinho com itens
CREATE TABLE "order" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "user_id" UUID,
    "payment_method" UUID,
    "address_id" UUID,
    "total_amount" DECIMAL NOT NULL,
    "status" VARCHAR(50) NOT NULL CHECK ("status" IN ('pending', 'shipped', 'delivered', 'cancelled')),
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("user_id") REFERENCES "user"("id"),
    FOREIGN KEY ("payment_method") REFERENCES "payment"("id"),
    FOREIGN KEY ("address_id") REFERENCES "address"("id")  -- Relacionamento com a tabela address
);

CREATE TABLE "order_item" (
    "order_id" UUID,
    "product_id" UUID,
    "quantity" INT NOT NULL,
    "price" DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY ("order_id", "product_id"),
    FOREIGN KEY ("order_id") REFERENCES "order"("id"),
    FOREIGN KEY ("product_id") REFERENCES "product"("id")
);

CREATE TABLE "cart" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "user_id" UUID,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("user_id") REFERENCES "user"("id")
);

CREATE TABLE "cart_item" (
    "cart_id" UUID,
    "product_id" UUID,
    "quantity" INT NOT NULL,
    PRIMARY KEY ("cart_id", "product_id"),
    FOREIGN KEY ("cart_id") REFERENCES "cart"("id"),
    FOREIGN KEY ("product_id") REFERENCES "product"("id")
);

CREATE TABLE "payment" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "details" JSONB, -- como id de transação e coisas a mais
    "status" VARCHAR(50) NOT NULL CHECK ("status" IN ('pending', 'completed', 'failed')),
    "payment_method" VARCHAR(50) NOT NULL CHECK ("payment_method" IN ('credit_card', 'paypal', 'pix', 'boleto')),
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "shipping" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "order_id" UUID,
    "address_id" UUID,
    "tracking_number" VARCHAR(255) NOT NULL,
    "shipment_date" TIMESTAMP WITH TIME ZONE,
    "delivery_date" TIMESTAMP WITH TIME ZONE,
    "carrier" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL CHECK ("status" IN ('pending', 'shipped', 'delivered', 'returned')),
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("order_id") REFERENCES "order"("id"),
    FOREIGN KEY ("address_id") REFERENCES "address"("id")
);

-- CREATE TABLE "wishlist" (
--     "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     "user_id" UUID,
--     "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--     "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY ("user_id") REFERENCES "user"("id")
-- );

-- CREATE TABLE "wishlist_items" (
--     "wishlist_id" UUID,
--     "product_id" UUID,
--     PRIMARY KEY ("wishlist_id", "product_id"),
--     FOREIGN KEY ("wishlist_id") REFERENCES "wishlist"("id"),
--     FOREIGN KEY ("product_id") REFERENCES "product"("id")
-- );

