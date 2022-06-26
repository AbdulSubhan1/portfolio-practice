export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "discription",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          {
            value: "personal",
            title: "Personal",
          },
          {
            value: "Client",
            title: "Client",
          },
          {
            value: "school",
            title: "School",
          },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
