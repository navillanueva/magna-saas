import ExecutionContextManager from '@/db/context/ExecutionContextManager';

export default async function seed() {
  const ctx = ExecutionContextManager.createExecutionContext();

  await ctx.prisma.allocation.createMany({
    data: [{ amount: 1000 }, { amount: 1000 }, { amount: 3000 }],
  });

  await ctx.prisma.sample.createMany({
    data: [{ name: 'Sample 1' }, { name: 'Sample 2' }, { name: 'Sample 3' }],
  });

  console.log('Sample data seeded successfully!');
}

seed();
