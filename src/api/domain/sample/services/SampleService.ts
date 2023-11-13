import { Sample } from '@/common/graphql/types';
import ExecutionContextManager from '@/db/context/ExecutionContextManager';

class SampleService {
  getFirstSample() {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.sample.findFirstOrThrow({});
  }

  getSampleById(id: string): Promise<Sample> {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.sample.findUniqueOrThrow({
      where: { id },
    });
  }
}

export default new SampleService();
