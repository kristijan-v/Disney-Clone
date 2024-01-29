import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recomended for You</h4>
        <Content>
            <Wrap>
            <img src="/images/pirates.jpeg" alt=""/>
            </Wrap>
            <Wrap>
            <img src="/images/star-wars.webp" alt=""/>
            </Wrap>
            <Wrap>
            <img src="/images/iron-man.jpeg" alt=""/>
            </Wrap>
            <Wrap>
            <img src="/images/suits.jpeg" alt=""/>
            </Wrap>
            <Wrap>
            <img src="/images/Toy-Story.webp" alt=""/>
            </Wrap>
        </Content>
    </Container>

  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
padding: 30px 0px 26px;
margin-top: 30px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

&:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}
`