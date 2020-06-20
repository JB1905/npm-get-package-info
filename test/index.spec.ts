import npmGetPackageInfo from '../src';

import * as child_process from 'child_process';

import reactLatest from './__mocks__/results/react-latest.json';
import angularVersion from './__mocks__/results/angular-version.json';
import vueLatest from './__mocks__/results/vue-latest.json';
import reactRange from './__mocks__/results/react-range.json';
import universalTiltRange from './__mocks__/results/universal-tilt-range.json';
import reactVersion from './__mocks__/results/react-version.json';

jest.mock('child_process');

const mockedResults = {
  'npm view react --json': { stdout: JSON.stringify(reactLatest) },
  'npm view @angular/cli@8.0.0 --json': {
    stdout: JSON.stringify(angularVersion),
  },
  'npm view vue --json': { stdout: JSON.stringify(vueLatest) },
  'npm view react@~16.10.0 --json': { stdout: JSON.stringify(reactRange) },
  'npm view universal-tilt.js@~2.0.0 --json': {
    stdout: JSON.stringify(universalTiltRange),
  },
  'npm view jquery@0.0.0 --json': { stdout: '' },
  'npm view lorem-ipsum-dolor-sit-amet --json': { stdout: '' },
  'npm view react@16.8.0 --json': { stdout: JSON.stringify(reactVersion) },
  'npm view @angular/cli --json': { stderr: new Error(), stdout: null },
} as any;

const mockedExec = jest.spyOn(child_process, 'exec');

mockedExec.mockImplementation((command: string, callback: any) =>
  callback(null, mockedResults[command])
);

describe('package info', () => {
  it('should return package info for the latest react version', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
    });

    if (!Array.isArray(info)) {
      expect(info.name).toBe('react');
    }
  });

  it('should return package info for @angular/cli@8.0.0', async () => {
    const info = await npmGetPackageInfo({
      name: '@angular/cli',
      version: '8.0.0',
    });

    if (!Array.isArray(info)) {
      expect(info.description).toBe('CLI tool for Angular');
      expect(info.version).toBe('8.0.0');
    }
  });

  it('should return stringified license & description for the latest vue version', async () => {
    const info = await npmGetPackageInfo({
      name: 'vue',
      parseOutput: false,
      info: ['license', 'description'],
    });

    expect(info).toContain('"license":"MIT"');
  });

  it('should return info for versions <16.10.0, 16.11.0)', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
      version: '~16.10.0',
    });

    const items = ['16.10.0', '16.10.1', '16.10.2'];

    info.map(({ version }: any, index: number) => {
      expect(version).toBe(items[index]);
    });
  });

  it('should return object with license for versions <16.10.0, 16.11.0)', async () => {
    const info = await npmGetPackageInfo({
      name: 'universal-tilt.js',
      version: '~2.0.0',
      info: ['license'],
    });

    info.map(({ license }: any) => {
      expect(license).toBe('MIT');
    });
  });

  it('should return license for versions <16.10.0, 16.11.0)', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
      version: '~16.10.0',
      info: 'license',
    });

    info.map((license: string) => {
      expect(license).toBe('MIT');
    });
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

  it('should throw an error', async () => {
    try {
      await npmGetPackageInfo({
        name: 'lorem-ipsum-dolor-sit-amet',
      });
    } catch (err) {
      expect(err.name).toBe('Error');
    }
  });

  it('should return name for latest package version', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
      parseOutput: false,
      info: ['name'],
    });

    expect(info).toMatch(`"react"`);
  });

  it('should return undefined as value for `Rick Astley`', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
      info: ['Rick Astley', 'name'],
    });

    expect(info['Rick Astley']).toBe(undefined);
  });

  it('should return version for react', async () => {
    const info = await npmGetPackageInfo({
      name: 'react',
      version: '16.8.0',
      info: 'version',
    });

    expect(info).toBe('16.8.0');
  });

  it('should throw an error', async () => {
    try {
      await npmGetPackageInfo({
        name: '@angular/cli',
      });
    } catch (err) {
      expect(err.name).toBe('Error');
    }
  });
});
