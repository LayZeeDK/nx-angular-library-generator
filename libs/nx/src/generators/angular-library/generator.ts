import { formatFiles, Tree } from '@nx/devkit';
import { AngularLibraryGeneratorSchema } from './schema';

export async function angularLibraryGenerator(
  tree: Tree,
  _options: AngularLibraryGeneratorSchema
) {
  await formatFiles(tree);
}

export default angularLibraryGenerator;
