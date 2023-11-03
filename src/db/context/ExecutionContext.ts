import { PrismaClient } from '../client';

export default class ExecutionContext {
  constructor(public prisma: PrismaClient, protected readonly id: number) {}
}
