import type { CollectionConfig } from "payload/types";

const Items: CollectionConfig = {
  slug: 'items',
  admin: {
    defaultColumns: ['name', 'description', 'price', 'category', 'tags', 'inventory'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'text',
      required: true
    },
    {
      name: 'price',
      type: 'text',
      required: true
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      required: true
    },
    {
      name: 'inventory',
      type: 'select',
      options: [
        {
          value: 'available',
          label: 'Available',
        },
        {
          value: 'not-available',
          label: 'Not available',
        },
      ],
      defaultValue: 'available',
      admin: {
        position: 'sidebar',
      }
    }
  ]
}

export default Items
