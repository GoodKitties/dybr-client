// Only until https://github.com/styled-components/styled-components/issues/945#issuecomment-340166853 would be merged

const defaultResolver = require("react-docgen").resolver.findAllExportedComponentDefinitions;
const annotationResolver = require("react-docgen-annotation-resolver").default;

module.exports = {
  title: 'Dybr UI',
  sections: [
    {
      name: 'Introduction',
      content: './styleguide/Readme.md'
    },
    {
      name: 'UI Components',
      components: './src/components/**/index.js'
    }
  ],

  styleguideDir: './styleguide/out',

  resolver: (ast, recast) => {
    const annotatedComponents = annotationResolver(ast, recast);
    const defaultComponents = defaultResolver(ast, recast);

    return annotatedComponents.concat(defaultComponents);
  }
};
