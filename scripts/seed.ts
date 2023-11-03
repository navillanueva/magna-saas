import ExecutionContextManager from '@/db/context/ExecutionContextManager';

export default async function seed() {
  const ctx = ExecutionContextManager.createExecutionContext();

  await ctx.prisma.allocation.create({
    data: {
      amount: 1000,
    },
  });

  console.log('Sample data seeded successfully!');
}

seed();