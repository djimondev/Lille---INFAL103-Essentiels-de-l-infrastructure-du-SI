export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "address1",
      title: "Address 1",
      type: "string",
    },
    {
      name: "address2",
      title: "Address 2",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "zipcode",
      title: "Zipcode",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "pictures",
      title: "Pictures",
      type: "array",
      of: [{ type: "picture" }],
    },
    {
      name: "menus",
      title: "Menus",
      type: "array",
      of: [{ type: "menu" }],
    },
  ],
};
