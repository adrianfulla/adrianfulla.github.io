import TuringSlider from "./TuringSlider"

export default {
    title: 'TuringMachine/TuringSlider',
    component: TuringSlider,
    tags: ['autodocs'],
    argTypes: {
        value: {control: 'string'},
        isFocused: {control: 'boolean'}
    }
}

export const TuringSlider = {
    args: {
        value: '0',
        isFocused: false
    },
}