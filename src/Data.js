export const data = [
  {
    name: "Item1",
    id: 1,
  },
  {
    name: "Item2",
    id: 2,
  },
  {
    name: "Item3",
    id: 3,
    child: [
      {
        name: "child1_i3",
        id: 31,
      },
      {
        name: "child2_i3",
        id: 32,
      },
    ],
  },
  {
    name: "Item4",
    id: 4,
    child: [
      {
        name: "child1_i4",
        id: 41,
        child: [
          {
            name: "child4_level2",
            id: 411,
            child: [
              {
                name: "ss",
                id: 23,

                child: [
                  {
                    name: "4th",
                    id: 23,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
