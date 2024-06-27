import { applicationGenerator } from '@nx/angular/generators';
import { formatFiles, Tree } from '@nx/devkit';
import { AngularApplicationGeneratorSchema } from './schema';

export async function angularApplicationGenerator(
  tree: Tree,
  options: AngularApplicationGeneratorSchema
) {
  const appProjectName = `${options.name}-app`;
  await applicationGenerator(tree, {
    ...options,
    projectNameAndRootFormat: 'as-provided',
    skipFormat: true,
    name: appProjectName,
    directory: `apps/${appProjectName}`,
    prefix: 'nrwl-airlines-app',
  });

  await formatFiles(tree);
}

export default angularApplicationGenerator;
