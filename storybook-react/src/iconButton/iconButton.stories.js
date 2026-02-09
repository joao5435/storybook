import { fn } from 'storybook/test'

import IconButton  from '.'

export default {
    title: "Components/IconButton",
    component: IconButton,
    argTypes: {
        label: { control: "text" }
    }
}

export const Default = {
    args: {
        label: "storybook Iconbutton"
    }
}