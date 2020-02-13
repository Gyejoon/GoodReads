import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Icon from 'components/common/Icon';
import { starCountCalculate } from 'lib/utils';

const MainReviewBlock = styled.div`
  margin-top: 120px;

  .title {
    background-color: ${palette.blue.soft};
    border-radius: 27px;
    box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.12);
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    width: 25%;
    padding: 10px;
    margin-bottom: 24px;
  }

  .card-wrap {
    display: flex;
  }
`;

const MainReviewCard = styled.div`
  width: 220px;
  height: 96px;
  padding: 12px;
  margin-right: 16px;
  background-color: #fff;
  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.12);

  .head {
    font-size: 8px;
    color: #cfcfcf;
  }

  .content {
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
  }

  .foot {
    float: right;
    i {
      font-size: 15px;
    }
  }
`;

interface MainReviewProps {}

const MainReview: React.SFC<MainReviewProps> = () => {
  const starRender = () => {
    const stars = starCountCalculate(4.5);

    return stars.map((star: number) => {
      let starType;

      if (star === 1) {
        starType = 'star';
      } else if (star === 0.5) {
        starType = 'star_half';
      } else {
        starType = 'star_border';
      }

      return <Icon name={starType} color="#ffc93d" />;
    });
  };

  const mainReviewCardRender = () => {
    const four = [1, 2, 3, 4];

    return four.map((i: number) => (
      <MainReviewCard key={i}>
        <span className="head">gyejoong님</span>
        <p className="content">
          개미가 아닌 고양이의 시선으로 보는 독특한 작품!!
        </p>
        <span className="foot">{starRender()}</span>
      </MainReviewCard>
    ));
  };
  return (
    <MainReviewBlock>
      <div className="title">#어떤 책의 리뷰일까요?</div>
      <div className="card-wrap">{mainReviewCardRender()}</div>
    </MainReviewBlock>
  );
};

export default MainReview;
