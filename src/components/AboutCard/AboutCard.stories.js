import AboutCard from './AboutCard.jsx'

export default {
  title: 'Componentes/AboutCard',
  component: AboutCard,
  tags: ['autodocs'],
  argTypes: {
    title: {control: 'string'},
    image: {control: 'string'},
    description: {control: 'string'},
  },
}

export const AboutCardTest = {
  args: {
    title: "Estudiante",
    image: "@assets/student.png",
    description: "Me encuentro en 5to semestre de Ciencias de la Computación en la Universidad del Valle de Guatemala.",
  },
}
