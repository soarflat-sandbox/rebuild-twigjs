console.log('twig', twig);

const template = twig({
  id: 'list', // id is optional, but useful for referencing the template later
  data: '{% for value in list %}{{ value }}, {% endfor %}',
});
const output = template.render({
  list: ['one', 'two', 'three'],
});
console.log('output', output);

const postTemplate = twig({
  id: 'posts',
  href: 'templates/posts.twig',
  load: (template) => {
    const data = {
      posts: [
        {
          title: '見出し',
          body: '本文',
        },
        {
          title: '見出し',
          body: '本文',
        },
      ],
    };
    const postsHTML = twig({ ref: 'posts' }).render(data);

    document.body.innerHTML = postsHTML;
  },
});
