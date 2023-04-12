import React from 'react'
import FortuneTelling from './fortuneTelling'

import { FortuneTellingsWrapper } from './fortuneTellings.styles'

function FortuneTellings(): JSX.Element {
    return (
        <FortuneTellingsWrapper>
            {
                <>
                    <FortuneTelling
                        href="/pyramid-of-lovers" src="/pyramid-of-lovers.png" alt="" title="«Пирамида влюблённых»"
                        description="Это гадание на старших арканах, раскладка с одной стороны простая, но в то же время очень глубока: она поможет вам разобраться в сложных и запутанных отношениях, найти ответ на ваш вопрос" />
                    <FortuneTelling
                        href="/one-card" src="/one-card.png" alt="" title="«Одна карта»"
                        description="Для получения быстрого ответа на ваш вопрос в этом гадании достаточно вытянуть одну карту, в этом случае ответ вы получаете предельно однозначный, так как нет других карт, которые могли бы вас запутать." />
                    <FortuneTelling
                        href="/card-of-days" src="/card-of-days.png" alt="" title="«Карта дня»"
                        description="Наша жизнь как калейдоскоп, события сменяются за событиями, рутина, действия, куда-то постоянно торопимся. Как прожить день так, чтобы остаться довольным самим собой, использовать все возможности, которые преподносит грядущий день?" />
                    {/* <FortuneTelling 
            href="/seven-stars" src="/seven-stars.png" alt="" title="«Семь звёзд»" 
            description="Гадание на отношения. Гадание поможет разобраться в любовных отношениях, понять характер и мысли партнёра, узнать, что мешает и(или) помогает отношениям, и каковы перспективы вашего союза." /> */}
                    <FortuneTelling
                        href="/three-cards" src="/three-cards.png" alt="" title="«Три карты»"
                        description="С помощью этого раклада вы получите ответ на развитие текущей ситуации. Первая карта расскажет о прошлом, вторая — о настоящем, третья — о возможном будущем." />
                    {/* <FortuneTelling 
            href="/celtic-cross" src="/celtic-cross.png" alt="" title="«Кельтский крест»" 
            description="Гадание на ситуацию. Гадание поможет разобраться в ситуации, определить истоки ситуации, события и людей, оказывающих влияние на неё, а также возможный исход ситауции. Также гадание даёт совет как повлиять на ситуацию, если конечый итог, который предсказывают карты, вас не устраиват." />   */}
                    <FortuneTelling
                        href="/horseshoes" src="/horseshoes.png" alt="" title="«Подкова»"
                        description="Гадание на удачу. Данное гадание поможет вам разобраться в себе и ситуации, в том, как вы на неё реагируете, и что влияет на вас. Даст вам рекомендации как лучше поступить в данной ситуации и пдведет окончательный итог." />
                </>
            }
        </FortuneTellingsWrapper>
    )
}

export default FortuneTellings