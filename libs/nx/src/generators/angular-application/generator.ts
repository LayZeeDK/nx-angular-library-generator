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
  const appProjectName = `${options.domain}-${options.name}-app`;
  await applicationGenerator(tree, {
    ...options,
    projectNameAndRootFormat: 'as-provided',
    skipFormat: true,
    name: appProjectName,
    directory: `apps/${options.domain}/${options.name}-app`,
    tags: [`domain:${options.domain}`, 'type:app'].join(','),
    prefix: 'nrwl-airlines',
    style: 'scss',
  });

  const e2eProjectName = `${appProjectName}-e2e`;
  const e2eProject = readProjectConfiguration(tree, e2eProjectName);
  e2eProject.tags = [`domain:${options.domain}`, 'type:e2e'];
  updateProjectConfiguration(tree, e2eProjectName, e2eProject);

  await formatFiles(tree);
}

export default angularApplicationGenerator;
