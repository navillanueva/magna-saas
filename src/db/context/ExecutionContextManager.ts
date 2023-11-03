import ExecutionContext from '@/db/context/ExecutionContext';
import PrismaClientProvider from '@/db/PrismaClientProvider';

class ExecutionContextManager {
  createdContextsCounter = 0;

  createExecutionContext(): ExecutionContext {
    return new ExecutionContext(PrismaClientProvider.client, ++this.createdContextsCounter);
  }
}

export default new ExecutionContextManager();
