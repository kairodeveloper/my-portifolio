// plopfile.js
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Cria um componente React',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/component/types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'plop-templates/component/styles.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'plop-templates/component/test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/hooks.ts',
        templateFile: 'plop-templates/component/hooks.ts.hbs'
      }
    ]
  });
};
