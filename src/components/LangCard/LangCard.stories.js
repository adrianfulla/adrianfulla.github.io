import LangCard from './LangCard.jsx'

export default {
  title: 'Componentes/LangCard',
  component: LangCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'string' },
    image: {control: 'string'},
    link: { control: 'string' },
  },
}

export const LangCardTest = {
  args: {
    title: "Java",
    image: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
    link: "https://www.java.com/es/",
  },
}
