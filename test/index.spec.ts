import npmGetPackageInfo from '../src';

describe('package info', () => {
  it('should return package info for latest react version', async () => {
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

  it('should return stringified license & description for latest vue', async () => {
    const info = await npmGetPackageInfo({
      name: 'vue',
      parseOutput: false,
      info: ['license', 'description'],
    });

    expect(info).not.toBeNull();
  });

  // it('should return throw an error', async () => {
  //   const info = await npmGetPackageInfo({
  //     name: '',
  //   });

  //   expect(info).toThrowError();
  // });
});
