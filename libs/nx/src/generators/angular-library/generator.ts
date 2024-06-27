import { libraryGenerator } from '@nx/angular/generators';
import { formatFiles, Tree } from '@nx/devkit';
import { AngularLibraryGeneratorSchema } from './schema';

export async function angularLibraryGenerator(
  tree: Tree,
  options: AngularLibraryGeneratorSchema
) {
  await libraryGenerator(tree, {
    ...options,
    projectNameAndRootFormat: 'as-provided',
    skipFormat: true,
    directory: `libs/${options.name}`,
    prefix: 'nrwl-airlines',
  });

  await formatFiles(tree);
}

export default angularLibraryGenerator;
