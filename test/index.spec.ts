import npmGetPackageInfo from '../src';

describe('package info', () => {
  it('should return package info for the latest react version', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
    });

    expect(info.name).toBe('react');
  });

  it('should return package info for @angular/cli@8.0.0', async () => {
    const info = await npmGetPackageInfo({
      name: '@angular/cli',
      version: '8.0.0',
    });

    expect(info.description).toBe('CLI tool for Angular');
    expect(info.version).toBe('8.0.0');
  });

  it('should return stringified license & description for the latest vue version', async () => {
    const info = await npmGetPackageInfo({
      name: 'vue',
      parseOutput: false,
      info: ['license', 'description'],
    });

    expect(info).toContain(`"license": "MIT"`);
  });

  it('should not return data for incorrect info value', async () => {
    const info = await npmGetPackageInfo({
      name: 'svelte',
      version: '3.0.0',
      info: ['Rick Astley'] as any,
    });

    expect(info.description).toBe(undefined);
  });

  it('should not return data for incorrect package version', async () => {
    try {
      await npmGetPackageInfo({
        name: 'jquery',
        version: '0.0.0',
        parseOutput: false,
      });
    } catch (err) {
      expect(err.message).toBe('Data not found for provided package');
    }
  });

  it('should return throw an error', () => {
    npmGetPackageInfo({
      name: 'lorem-ipsum-dolor-sit-amet',
    })
      .then((pkg) => {
        expect(pkg).not.toBe(null);
      })
      .catch(({ name }) => {
        expect(name).toBe('Error');
      });
  });
});
