import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { angularApplicationGenerator } from './generator';
import { AngularApplicationGeneratorSchema } from './schema';

describe('angular-application generator', () => {
  let tree: Tree;
  const options: AngularApplicationGeneratorSchema = {
    domain: 'booking',
    name: 'test',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await angularApplicationGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'booking-test-app');
    expect(config).toBeDefined();
  });
});
