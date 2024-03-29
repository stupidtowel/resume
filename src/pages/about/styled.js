import styled from 'styled-components'


export const Image = styled.img`
  width: 30%;
  margin: 20px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const MobileImage = styled.img`
  width: calc(100% - 60px);
  margin: 20px auto;
  @media screen and (min-width: 500px) {
    display: none;
  }
`

export const Wrap = styled.div`
  display: flex;
`

export const Page = styled.div`
  margin: 20px;
  .description {
    margin: 5px 0;
    h4 {
      margin: 10px 0;
    }
  }
  .additional {
    color: #6f6f6f;
    margin: 10px 0 0 0;
  }
  @media screen and (max-width: 500px) {
    margin: 30px;
    display: flex;
    flex-direction: column;
  }
`

export const Contacts = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .name {
    font-size: xx-large;
    font-weight: 600;
  }
  .position {
    font-size: x-large;
    color: #6b7272;
    margin-bottom: 30px;
  }
`

export const Experience = styled.section`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 10px 0 0 0;
  }
  .additional {
    color: #6f6f6f;
    margin: 10px 0 0 0;
  }
`
