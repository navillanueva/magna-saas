import { Query, Resolver } from 'type-graphql';
import AllocationService from '@/api/domain/sample/services/AllocationService';
import { Allocation } from '@/common/graphql/types';

@Resolver(Allocation)
export default class AllocationResolver {
  @Query(() => Allocation)
  async allocation(): Promise<Allocation> {
    return AllocationService.getFirstAllocation();
  }
}