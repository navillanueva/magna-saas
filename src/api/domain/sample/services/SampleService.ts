import ExecutionContextManager from '@/db/context/ExecutionContextManager';

class SampleService {
  getFirstSample() {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.sample.findFirstOrThrow({});
  }
}

export default new SampleService();
