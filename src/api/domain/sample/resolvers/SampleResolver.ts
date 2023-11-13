import { Arg, Query, Resolver } from 'type-graphql';
import SampleService from '@/api/domain/sample/services/SampleService';
import { Sample } from '@/common/graphql/types';

@Resolver(Sample)
export default class SampleResolver {
  @Query(() => Sample)
  async sample(): Promise<Sample> {
    return SampleService.getFirstSample();
  }

  @Query(() => Sample, { nullable: true })
  async sampleById(@Arg('id') id: string): Promise<Sample> {
    return SampleService.getSampleById(id);
  }
}
