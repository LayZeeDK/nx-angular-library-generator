import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { angularLibraryGenerator } from './generator';
import { AngularLibraryGeneratorSchema } from './schema';

describe('angular-library generator', () => {
  let tree: Tree;
  const options: AngularLibraryGeneratorSchema = {
    name: 'test',
    type: 'feature',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await angularLibraryGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'feature-test');
    expect(config).toBeDefined();
  });
});
