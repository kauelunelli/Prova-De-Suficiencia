import { FastifyInstance } from "fastify";
import { createProductHandler, getProductsHandler } from "./product.controller";
import { $ref } from "./product.schema";

async function productRoutes(server: FastifyInstance) {
    server.post('/create', {
        preHandler: [server.authenticate],
        schema: {
            body: $ref('createProductSchema'),
            response: {
                201: $ref('productResponseSchema')
            }
        }
    }, createProductHandler);

    server.get('/listProducts', {
        schema: {
            response: {
                200: $ref('productsResponseSchema')
            }
        }
    }, getProductsHandler)
};

export default productRoutes;