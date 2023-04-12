import type { NextPage } from 'next'
import FortuneTellings from '../components/fortuneTellings/fortuneTellings'
import H from '../components/H/H'
import Header from '../components/Header/Header'


const IndexPage: NextPage = () => {

  const title = 'Гадание на картах Таро онлайн бесплатно'
  const h1 = 'Популярные гадания на Таро'
  const description = 'Гадания на картах Таро – старинный способ узнать грядущее. В современном мире интернет-гадания занимают не последнюю роль в жизни, позволяя с той же эффективностью приоткрыть завесу тайн будущего: когда стоит обратить особое внимание на здоровье, когда ожидать важное знакомство и многое другое. Бесплатное онлайн гадание на картах Таро позволяет получить ответы на многие вопросы начиная тем, как лучше построить планы и закачивая любовными хитросплетениями.'
  const about = description
  return (
    <>
      <Header title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      <FortuneTellings />
    </>
  )
}

export default IndexPage
