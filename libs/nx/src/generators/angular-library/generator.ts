import { componentGenerator, libraryGenerator } from '@nx/angular/generators';
import {
  Tree,
  formatFiles,
  joinPathFragments,
  readProjectConfiguration,
} from '@nx/devkit';
import { AngularLibraryGeneratorSchema } from './schema';

export async function angularLibraryGenerator(
  tree: Tree,
  options: AngularLibraryGeneratorSchema
) {
  options.name ??= '';
  const directory =
    `libs/${options.domain}/${options.type}-${options.name}`.replace(/-$/, '');
  const projectName =
    `${options.domain}-${options.type}-${options.name}`.replace(/-$/, '');
  const skipComponent = !['feature', 'ui'].includes(options.type);

  await libraryGenerator(tree, {
    ...options,
    projectNameAndRootFormat: 'as-provided',
    skipFormat: true,
    name: projectName,
    directory,
    importPath:
      `@nrwl-airlines/${options.domain}/${options.type}-${options.name}`.replace(
        /-$/,
        ''
      ),
    tags: [`domain:${options.domain}`, `type:${options.type}`].join(','),
    prefix: options.domain === 'shared' ? 'nrwl-airlines' : options.domain,
    strict: true,
    standalone: false, // Skip default component generation to avoid type prefix
    skipModule: true, // Skip default component generation to avoid type prefix
  });

  if (!skipComponent) {
    const project = readProjectConfiguration(tree, projectName);
    const projectLibDirectory = joinPathFragments(
      project.sourceRoot ?? joinPathFragments(project.root, 'src'),
      'lib',
      options.name
    );

    await componentGenerator(tree, {
      nameAndDirectoryFormat: 'as-provided',
      skipFormat: true,
      name: options.name,
      export: true,
      directory: projectLibDirectory,
      changeDetection: 'OnPush',
      displayBlock: true,
      style: 'scss',
    });
  }

  await formatFiles(tree);
}

export default angularLibraryGenerator;
