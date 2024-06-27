import { applicationGenerator } from '@nx/angular/generators';
import {
  Tree,
  formatFiles,
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nx/devkit';
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
    tags: 'type:app',
    prefix: 'nrwl-airlines-app',
    style: 'scss',
  });

  const e2eProjectName = `${appProjectName}-e2e`;
  const e2eProject = readProjectConfiguration(tree, e2eProjectName);
  e2eProject.tags = ['type:e2e'];
  updateProjectConfiguration(tree, e2eProjectName, e2eProject);

  await formatFiles(tree);
}

export default angularApplicationGenerator;
