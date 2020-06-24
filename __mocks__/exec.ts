import * as child_process from 'child_process';

import latest from './results/latest.json';
import version from './results/version.json';
import range from './results/range.json';

const mockedExec = jest.spyOn(child_process, 'exec');

export const mockedResults = {
  latest,
  version,
  range,
};

export const mockOutput = (res: object) => {
  mockedExec.mockImplementation((_: string, callback: any) =>
    callback(null, res)
  );
};
