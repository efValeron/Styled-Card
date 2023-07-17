import React from 'react';
import styled from "styled-components";

const CardBox = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
  border: none;
  display: flex;
  flex-wrap: wrap;
  font-family: Inter,sans-serif;
  
  * {
    margin: 0;
  }
`
const CardBody = styled.div`
  margin: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`
const CardImg = styled.div`
  margin: 10px;
  margin-bottom: 0;
  width: 280px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 10px;
  background: url(https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1690761600&Signature=j2~45XNodmnMzjqecqSzpk1tmSFSSJElSdd8bOdfN-q0sAUN29f5qjt8gPPB0-zzpINTCh3PyZYHkd8B5fjniJAo~-0H37Hulsx8FX0scZEY28HjLKBn0mWhg38sOR16tfKxIMO9rmkbzhKKw~38LMcduu~WjRwJJdFB6tBwhPCqZzS7tzb0g87lf~ei8~wqA4mAnIFZVEdJjwpsFs3wNKjWLYwiL1kYXR0Na95N27aXOlgg4F0JIuLwfwt3nUbcRxO7wtV~4gMhFez5edJa5NlshW0-h-t7zXfIURt4hvSF3QFETSbdid-9SVEw0XGLw2jGExHMaPm9dfrefI1GeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4);
  background-color: lightgray;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`
const CardHeader = styled.h1`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const CardDesc = styled.p`
  width: 260px;
  color: #ABB3BA;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`
const CardBtn = styled.button<{ $outline?: boolean }>`

  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #4E71FE;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 200% */
  
  border: ${props => props.$outline ? "2px solid #4E71FE" : "none"};
  color: ${props => props.$outline ? "#4E71FE" : "#FFF"};
  background: ${props => props.$outline ? "none" : "#4E71FE"};
`
const CardBtnBox = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

function Card() {
  return (
    <CardBox>
      <CardImg/>
      <CardBody>
        <CardHeader>Headline</CardHeader>
        <CardDesc>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardDesc>
        <CardBtnBox>
          <CardBtn>See more</CardBtn>
          <CardBtn $outline>Save</CardBtn>
        </CardBtnBox>
      </CardBody>
    </CardBox>
  );
}

export default Card;
