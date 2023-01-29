import {ControlsIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'service',
  title: 'Services',
  icon: ControlsIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
  ],
}
