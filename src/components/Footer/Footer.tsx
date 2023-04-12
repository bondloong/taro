import Script from 'next/dist/client/script'
import React from 'react'
import { FooterWrapper, FooterTop } from './Footer.styles'

type Props = {}

function Footer({ }: Props) {
  const date = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterTop>
        <p>Гадание на картах Таро онлайн в современном мире считается одним из самых точных и правдивых способов гадания, ведь обратившись к раскладу на Таро, можно узнать ответы на любые вопросы: о любви и деньгах, о здоровье и карьере, о Судьбе и будущем. С помощью бесплатных онлайн гаданий на картах Таро можно получить и конкретные ответы «да» или «нет», и узнать об исполнении желаний и планов, и разобраться в хитросплетениях любовных отношений.</p>
        <iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&default-sum=50&button-text=14&successURL=https%3A%2F%2Ftaro-gadaniya.ru%2F&quickpay=shop&account=4100117029024352&targets=%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%20%D0%BF%D0%BE%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B5&" width="100%" height="222" frameBorder="0" allowTransparency={true} scrolling="no"></iframe>

      </FooterTop>

      <div style={{ textAlign: 'center' }}>©taro-gadaniya.ru {date}</div>

      <Script>{`window.yaContextCb.push(()=>{
        Ya.Context.AdvManager.render({
          renderTo: 'yandex_rtb_R-A-1990292-1',
          blockId: 'R-A-1990292-1'
        })
      })`}
      </Script>

    </FooterWrapper>
  )
}

export default Footer