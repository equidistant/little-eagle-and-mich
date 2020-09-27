import styled, { css } from 'styled-components'

export const H1 = styled.h1`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 85.1135px;
  line-height: 106px;
  color: #FFFFFF;
  width: max-content;
`

export const H2 = styled.h2`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 47px;
  color: #434850;
  width: max-content;
`

export const H3 = styled.h3`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 35px;
  width: max-content;
`

export const H4 = styled.h4`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  width: max-content;
  ${props => props.color === 'orange' && css`
    color: #E8A87C;
  `}
`

export const Subheading = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
`

export const Body = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;  
  color: #FFFFFF;
  ${props => props.color === 'dark' && css`
    color: #434850;
  `}
`

export const Subtitle = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #434850;
  text-align: center;
  text-align: ${props => props.textAlign};

`

export const DateLocation = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #989DA3;
`

export const Indie = styled.p`
  font-family: 'Indie Flower';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  color: #434850;
`