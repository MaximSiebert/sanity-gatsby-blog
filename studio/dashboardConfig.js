export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd2e925f0cd9df777b963ba',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7c6cpso9',
                  apiId: 'ac222a9c-843f-4c75-84bd-7e1dae3c587a'
                },
                {
                  buildHookId: '5dd2e925a62c7209f9533702',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-g63r5b6c',
                  apiId: 'd26f6dbe-8409-4cb6-9853-1d5ce45e1ad9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MaximSiebert/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-g63r5b6c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
