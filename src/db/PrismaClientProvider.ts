import { PrismaClient } from '@/db/client';

class PrismaClientProvider {
  readonly client: PrismaClient;

  constructor() {
    this.client = this.createPrismaClient();
  }

  createPrismaClient() {
    const url = process.env.DATABASE_URI;

    if (!url) {
      throw new Error('Db URL not configured');
    }

    return new PrismaClient({
      datasources: {
        db: {
          url,
        },
      },
    });
  }

  async closeConnections() {
    await this.client.$disconnect();
  }
}

export default new PrismaClientProvider();
