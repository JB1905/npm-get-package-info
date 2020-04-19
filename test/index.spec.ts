import npmGetPackageInfo from '../src';

describe('package info', () => {
  it('should return package info for the latest react version', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
    });

    expect(info).not.toBeNull();
  });

  it('should return package info for @angular/cli@8.0.0', async () => {
    const info = await npmGetPackageInfo({
      name: '@angular/cli',
      version: '8.0.0',
    });

    expect(info).not.toBeNull();
  });

  it('should return stringified license & description for the latest vue version', async () => {
    const info = await npmGetPackageInfo({
      name: 'vue',
      parseOutput: false,
      info: ['license', 'description'],
    });

    expect(info).not.toBeNull();
  });
});
