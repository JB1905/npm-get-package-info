import npmGetPackageInfo from '../src';

describe('package info', () => {
  it('should return package info for latest react version', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
    });

    expect(info).toBe(true);
  });
});
