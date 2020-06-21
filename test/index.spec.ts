import npmGetPackageInfo from '../src';

import { mockedResults, mockOutput } from './__mocks__/exec';

jest.mock('child_process');

describe('npmGetPackageInfo', () => {
  describe('latest', () => {
    beforeAll(() => {
      mockOutput({ stdout: JSON.stringify(mockedResults.latest) });
    });

    it('should return package info for the latest version', async () => {
      const info = await npmGetPackageInfo({
        name: 'package',
      });

      expect(info.name).toBe('package');
    });

    it('should return stringified license & description for the latest version', async () => {
      const info = await npmGetPackageInfo({
        name: 'package',
        parseOutput: false,
        info: ['license', 'description'],
      });

      expect(info).toContain('"license":"MIT"');
    });

    it('should return throw an error', async () => {
      try {
        await npmGetPackageInfo({
          name: 'missing-package',
        });
      } catch (err) {
        expect(err.name).toBe('Error');
      }
    });

    it('should return undefined as value for `Rick Astley`', async () => {
      const info = await npmGetPackageInfo({
        name: 'package',
        info: ['Rick Astley', 'name'],
      });

      expect(info['Rick Astley']).toBe(undefined);
    });
  });

  describe('version', () => {
    beforeAll(() => {
      mockOutput({ stdout: JSON.stringify(mockedResults.version) });
    });

    it('should return description', async () => {
      const info = await npmGetPackageInfo({
        name: 'package',
        version: '1.0.0',
        info: 'description',
      });

      expect(info).toBe('This is sample description');
    });

    it('should not return data for incorrect package version', async () => {
      try {
        await npmGetPackageInfo({
          name: 'package',
          version: '0.0.0',
          parseOutput: false,
        });
      } catch (err) {
        expect(err.message).toBe('Data not found for provided package');
      }
    });
  });

  describe('range', () => {
    beforeAll(() => {
      mockOutput({ stdout: JSON.stringify(mockedResults.range) });
    });

    it('should return info for versions <1.0.0, 1.1.0)', async () => {
      const info = await npmGetPackageInfo({
        name: 'package',
        version: '~1.0.0',
      });

      const versions = ['1.0.0', '1.0.1', '1.0.2'];

      info.map(({ version }: any, index: number) => {
        expect(version).toBe(versions[index]);
      });
    });

    it('should return object with license for versions <1.0.0, 1.1.0)', async () => {
      const info = await npmGetPackageInfo({
        name: 'package',
        version: '~1.0.0',
        info: ['license'],
      });

      info.map(({ license }: any) => {
        expect(license).toBe('MIT');
      });
    });

    it('should return license for versions <1.0.0, 1.1.0)', async () => {
      const info = await npmGetPackageInfo({
        name: 'package',
        version: '~1.0.0',
        info: 'license',
      });

      info.map((license: string) => {
        expect(license).toBe('MIT');
      });
    });
  });

  it('should throw an error', async () => {
    mockOutput({ stdout: '' });

    try {
      await npmGetPackageInfo({
        name: 'package',
        version: '0.0.0',
        parseOutput: false,
      });
    } catch (err) {
      expect(err.message).toBe('Data not found for provided package');
    }
  });

  it('should throw an error', async () => {
    mockOutput({ stderr: new Error(), stdout: null });

    try {
      await npmGetPackageInfo({
        name: 'package',
      });
    } catch (err) {
      expect(err.name).toBe('Error');
    }
  });
});
