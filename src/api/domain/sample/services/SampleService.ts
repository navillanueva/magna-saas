import ExecutionContextManager from '@/db/context/ExecutionContextManager';

class SampleService {
  getFirstSample() {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.sample.findFirstOrThrow({});
  }

  getSampleById(id) {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.sample.findUnique({
      where: { id },
    });
  }
}

export default new SampleService();
