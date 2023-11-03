import AllocationService from '@/api/domain/sample/services/AllocationService';
import expect from 'expect';

describe('AllocationService', () => {
  describe('getFirstAllocation', () => {
    it('should successfully return allocation item', async () => {
      const result = await AllocationService.getFirstAllocation();

      expect(result).toEqual({
        id: expect.any(String),
        amount: expect.any(Number),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });
  });
});
