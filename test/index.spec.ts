import npmGetPackageInfo from "../src";

describe("package info", () => {
  it("should return package info for the latest react version", async () => {
    const info = await npmGetPackageInfo({
      name: "react",
    });

    if (!Array.isArray(info)) {
      expect(info.name).toBe("react");
    }
  });

  it("should return package info for @angular/cli@8.0.0", async () => {
    const info = await npmGetPackageInfo({
      name: "@angular/cli",
      version: "8.0.0",
    });

    if (!Array.isArray(info)) {
      expect(info.description).toBe("CLI tool for Angular");
      expect(info.version).toBe("8.0.0");
    }
  });

  it("should return stringified license & description for the latest vue version", async () => {
    const info = await npmGetPackageInfo({
      name: "vue",
      parseOutput: false,
      info: ["license", "description"],
    });

    expect(info).toContain('"license":"MIT"');
  });

  it("should return info for versions <16.10.0, 16.11.0)", async () => {
    const info = await npmGetPackageInfo({
      name: "react",
      version: "~16.10.0",
    });

    const items = ["16.10.0", "16.10.1", "16.10.2"];

    info.map(({ version }: any, index: number) => {
      expect(version).toBe(items[index]);
    });
  });

  it("should return object with license for versions <16.10.0, 16.11.0)", async () => {
    const info = await npmGetPackageInfo({
      name: "universal-tilt.js",
      version: "~2.0.0",
      info: ["license"],
    });

    info.map(({ license }: any) => {
      expect(license).toBe("MIT");
    });
  });

  it("should return license for versions <16.10.0, 16.11.0)", async () => {
    const info = await npmGetPackageInfo({
      name: "react",
      version: "~16.10.0",
      info: "license",
    });

    info.map((license: string) => {
      expect(license).toBe("MIT");
    });
  });

  it("should not return data for incorrect package version", async () => {
    try {
      await npmGetPackageInfo({
        name: "jquery",
        version: "0.0.0",
        parseOutput: false,
      });
    } catch (err) {
      expect(err.message).toBe("Data not found for provided package");
    }
  });

  it("should return throw an error", async () => {
    try {
      await npmGetPackageInfo({
        name: "lorem-ipsum-dolor-sit-amet",
      });
    } catch (err) {
      expect(err.name).toBe("Error");
    }
  });

  it("should return name for latest package version", async () => {
    const info = await npmGetPackageInfo({
      name: "react",
      parseOutput: false,
      info: ["name"],
    });

    expect(info).toMatch(`"react"`);
  });

  it("should return undefined as value for `Rick Astley`", async () => {
    const info = await npmGetPackageInfo({
      name: "react",
      info: ["Rick Astley", "name"],
    });

    expect(info["Rick Astley"]).toBe(undefined);
  });

  it("should return version for react", async () => {
    const info = await npmGetPackageInfo({
      name: "react",
      version: "16.8.0",
      info: "version",
    });

    expect(info).toBe("16.8.0");
  });
});
