import ExecutionContextManager from '@/db/context/ExecutionContextManager';

class AllocationService {
  getFirstAllocation() {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.allocation.findFirstOrThrow({});
  }
}

export default new AllocationService();
