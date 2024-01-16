import TuringSlide from "./TuringSlide"

export default {
    title: 'TuringMachine/TuringSlide',
    component: TuringSlide,
    tags: ['autodocs'],
    argTypes: {
        value: {control: 'string'},
        isFocused: {control: 'boolean'}
    }
}

export const ProjCard = {
    args: {
        value: '0',
        isFocused: false
    },
}