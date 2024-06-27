import { formatFiles, Tree } from '@nx/devkit';
import { AngularApplicationGeneratorSchema } from './schema';

export async function angularApplicationGenerator(
  tree: Tree,
  _options: AngularApplicationGeneratorSchema
) {
  await formatFiles(tree);
}

export default angularApplicationGenerator;
