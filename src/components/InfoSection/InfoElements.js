import styled from "styled-components";


export const InfoContainer = styled.div`
  color: #fff;

  background: ${({ lightBg }) => (lightBg ? "#aaff00" : "#000")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 8px;
  padding: 0 10px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 8px;
  padding: 0 10px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
    font-family:Verdana,sans-serif;
  }
`;

export const Subtitle = styled.p`
  color: #aaff00;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family:Verdana,sans-serif;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#bfff00" : "#fff")};
`;

export const ImgWrap = styled.div`
  max-width: 55px;
  height: 100%;
`;

export const Img = styled.img`
  width: 600%;
  height: 600%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1vh;
  flex-direction: column;
  background: #040d15;
  position: relative;
  display: inline-block;
  padding: 8px 26px;
  margin: 0px 0px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 90px;
  background: linear-gradient(90deg, #0162c8, #80ff00);
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
