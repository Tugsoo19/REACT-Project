const categories = [
  {
    title: "Browse categories",
    children: [
      {
        title: "Browse Children 1",
        position: 1,
      },
      {
        title: "Browse Children 2",
        position: 2,
      },
    ],
  },
];

const menus = [
  // {
  //     title: 'Browse categories',
  //     children: [
  //         {
  //             title: 'Browse Children 1',
  //             position: 1
  //         },
  //         {
  //             title: 'Browse Children 2',
  //             position: 2
  //         },
  //     ]
  // },

  {
    title: "Home",
    position: 1,
    children: [
      {
        title: "All category",
        position: 1,
      },
      {
        title: "Home Children 2",
        position: 2,
      },
    ],
  },
  {
    title: "Catalog",
    position: 2,
    children: [
      {
        title: "Catalog Children 1",
        position: 1,
      },
      {
        title: "Catalog Children 2",
        position: 2,
      },
      {
        title: "Catalog Children 3",
        position: 3,
      },
    ],
  },
  {
    title: "Blog",
    position: 3,
    children: [],
  },
  {
    title: "Pages",
    position: 4,
    children: [
      {
        title: "Pages Children 1",
        position: 1,
      },
      {
        title: "Pages Children 2",
        position: 2,
      },
      {
        title: "Pages Children 3",
        position: 3,
      },
      {
        title: "Pages Children 4",
        position: 4,
      },
    ],
  },
  {
    title: "About Us",
    position: 5,
    children: [],
  },
];

export { menus, categories };
