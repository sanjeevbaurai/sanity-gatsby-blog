export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eda940fb186b630bb5a1789',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hjnzso8x',
                  apiId: '14a89abb-b33f-45e5-b4f9-ba62d6849929'
                },
                {
                  buildHookId: '5eda940f9834a368a7002ef3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oz2xb1ex',
                  apiId: '758977ec-a13e-4304-8c48-bf7963a9c59a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanjeevbaurai/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oz2xb1ex.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
