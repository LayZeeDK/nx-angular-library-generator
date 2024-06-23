import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { angularLibraryGenerator } from './generator';
import { AngularLibraryGeneratorSchema } from './schema';

describe('angular-library generator', () => {
  let tree: Tree;
  const options: AngularLibraryGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await angularLibraryGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
