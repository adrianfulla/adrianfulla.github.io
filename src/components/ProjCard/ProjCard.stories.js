import ProjCard from './ProjCard.jsx'

export default {
  title: 'Componentes/ProjCard',
  component: ProjCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'string' },
    image: {control: 'string'},
    link: { control: 'string' },
    description: {control: 'string'},
  },
}

export const ProjCardTest = {
  args: {
    title: "Java",
  image: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
  link: "https://www.java.com/es/",
  description: "Java es un lenguaje de programación muy importante para el mundo",
  },
}
