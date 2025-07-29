import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Noor Medical Center API',
        description: 'API documentation for Noor Medical Center application.',
        version: '1.0',
        contact: {
          name: 'Noor Medical Team',
          email: 'support@noormedical.com',
        },
      },
      servers: [
        {
          url: '/api',
          description: 'Base path for all endpoints',
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [{ BearerAuth: [] }],
    },
  });
  return spec;
};
