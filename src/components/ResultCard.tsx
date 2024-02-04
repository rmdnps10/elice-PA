import React from 'react';
import styled from 'styled-components';
import Space from 'util/Space';
import { numberWithCommas } from 'util/formatNumber';
import { NoImageUrl } from 'util/imageUrls';
import { Course } from 'util/type';
interface ResultCardProps {
  course: Course;
}
function ResultCard({ course }: ResultCardProps) {
  return (
    <ResultCardWrapper>
      <ResultCardImgBox>
        <ResultCardImg $imageUrl={course?.image_file_url ?? NoImageUrl} />
      </ResultCardImgBox>
      <CardTextBox>
        <CardType>{course?.class_type}</CardType>
        <Space height="0.5rem" />
        <Title>{course?.title}</Title>
        <Space height="0.5rem" />
        <Description>{course?.short_description}</Description>
      </CardTextBox>
      <div className="bottom-price">
        <BottomPriceBox>
          <div className="discount-price">
            ₩{numberWithCommas(course?.discounted_price)}
          </div>
          <div className="origin-price">₩{numberWithCommas(course?.price)}</div>
          <div className="discount-ratio">
            {Number(course?.discount_rate) * 100}%
          </div>
        </BottomPriceBox>
      </div>
    </ResultCardWrapper>
  );
}

const ResultCardWrapper = styled.div`
  width: calc(33.333% - 2.4rem);
  height: 38.4rem;
  border-radius: 0.4rem;
  overflow: hidden;
  margin: 1.2rem;
  background-color: white;
  position: relative;
  .bottom-price {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0 2rem 2rem;
  }
`;
const ResultCardImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14.5rem;
`;
const ResultCardImg = styled.div<{ $imageUrl: string }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  min-width: 100%;
  background-color: rgb(58, 58, 76);
  background-image: url(${(props) => props?.$imageUrl});
  background-position: center center;
  background-size: ${(props) =>
    props?.$imageUrl === NoImageUrl ? '10.5rem 10.5rem' : 'cover'};
  background-repeat: no-repeat;
`;
const CardTextBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const CardType = styled.div`
  color: #524fa1;
  font-weight: 700;
  font-size: 0.75rem;
`;
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 120%;
`;
const Description = styled(Title)`
  line-height: 1.6;
  font-weight: 300;
  font-size: 1.4rem;
  color: #5e5f61;
`;

const BottomPriceBox = styled.div`
  width: 100%;
  border-top: 1px solid rgb(240, 241, 243);
  background-color: rgb(255, 255, 255);
  padding: 1.6rem 0 0;
  display: flex;
  gap: 0.5rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  .discount-price {
    font-size: 1.6rem;
    font-weight: 700;
  }
  .discount-ratio {
    font-size: 1.4rem;
    color: #fa466a;
  }
  .origin-price {
    text-decoration: line-through;
    font-size: 1.4rem;
    color: #7d7e80;
  }
`;

export default ResultCard;
