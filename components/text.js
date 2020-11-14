import styled, { css } from 'styled-components'

export const H1 = styled.h1`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 85.1135px;
  line-height: 106px;
  color: #FFFFFF;
  width: max-content;
  @media only screen and (max-width: 1220px) {
    font-size: 72px;
    line-height: 90px;
  }
  @media only screen and (max-width: 1079px) {
    font-size: 60px;
    line-height: 78px;
  }
  @media only screen and (max-width: 660px) {
    font-size: 42px;
    line-height: 52.5px;
  }
`

export const H2 = styled.h2`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 47px;
  color: #434850;
  width: max-content;
  @media only screen and (max-width: 1220px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media only screen and (max-width: 660px) {
    font-size: 24px;
    line-height: 30px;
  }
  margin-top: ${props => props.margintop ? props.margintop : 0};
`

export const H3 = styled.h3`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 35px;
  width: max-content;
  @media only screen and (max-width: 1079px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media only screen and (max-width: 660px) {
    font-size: 20px;
    line-height: 35px;
  }
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
  @media only screen and (max-width: 1220px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media only screen and (max-width: 660px) {
    font-size: 18px;
    line-height: 22.5px;
  }
`

export const Subheading = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  @media only screen and (max-width: 660px) {
    font-size: 16px;
    line-height: 22px;
  }
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
  @media only screen and (max-width: 660px) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const Subtitle = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #434850;
  text-align: center;
  text-align: ${props => props.textAlign};
  @media only screen and (max-width: 1079px) {
    font-size: 14px;
    line-height: 18px;
  }
`

export const DateLocation = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: inherit;
  width: max-content;
  color: ${props => props.theme.color.gray};
`

export const AboutText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  margin-top: ${props => props.margintop ? props.margintop : 0};
  text-align: center;
`

export const Indie = styled.p`
  font-family: 'Indie Flower';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  color: #434850;
  @media only screen and (max-width: 1079px) {
    font-size: 22px;
    line-height: 30px;
  }
`