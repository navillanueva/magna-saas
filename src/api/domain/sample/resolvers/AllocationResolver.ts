import { Mutation, Arg, Query, Resolver } from 'type-graphql';
import AllocationService from '@/api/domain/sample/services/AllocationService';
import { Allocation } from '@/common/graphql/types';
import { AllocationUpdateInput } from '@/common/graphql/types/resolvers/inputs/';

@Resolver(Allocation)
export default class AllocationResolver {
  @Query(() => Allocation)
  async allocation(): Promise<Allocation> {
    return AllocationService.getFirstAllocation();
  }

  @Mutation(() => Allocation)
  async updateAllocation(@Arg('data') updateData: AllocationUpdateInput): Promise<Allocation> {
    return AllocationService.updateAllocation(updateData);
  }
}
