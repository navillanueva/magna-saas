import ExecutionContextManager from '@/db/context/ExecutionContextManager';
import { AllocationUpdateInput, Allocation } from '@/common/graphql/types';

class AllocationService {
  getFirstAllocation() {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.allocation.findFirstOrThrow({});
  }

  async updateAllocation(updateData: AllocationUpdateInput): Promise<Allocation> {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.allocation.update({
      where: { id: updateData.id },
      data: updateData,
    });
  }
}

export default new AllocationService();
