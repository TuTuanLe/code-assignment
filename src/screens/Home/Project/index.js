import React from 'react';
import mouse from '../../../assets/icons/mouse.svg';
import arrow_dow from '../../../assets/icons/arrow-down.svg';
import Content from './Content';
import './styles.css';

const data = {
  first: [
    [
      {
        header: `프로젝트 'P'`,
        subHeader: 'Front-end.',
        numberText: 'SNS 기반 커머스 플랫폼',
      },
      {
        header: 'Wedding Check',
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '결혼 준비 서비스',
      },
      {
        header: `프로젝트 'M'`,
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '디지털 헬스케어 서비스',
      },
      {
        header: 'UZU Talk',
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '디지털 헬스케어 서비스',
      },
    ],
    [
      {
        header: 'BoardD',
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '킥보드 렌탈 서비스',
      },
      {
        header: '썬더드랍',
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '개인 퀵 기사 서비스',
      },
      {
        header: `프로젝트 'F'`,
        subHeader: 'Front-end.',
        numberText: '채용 플랫폼',
      },
      {
        header: `프로젝트 'C'`,
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '자동차 렌탈 플랫폼',
      },
    ],
    [
      {
        header: `프로젝트 'S'`,
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '의료정보 제공 커뮤니티',
      },
      {
        header: `프로젝트 'L'`,
        subHeader: 'UI/UX, Front-end',
        numberText: '사내 VOIP 서비스',
      },
      {
        header: `프로젝트 'H'`,
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '식물 배달 플랫폼',
      },
      {
        header: `프로젝트 'N'`,
        subHeader: 'UI/UX, Front-end, Back-end.',
        numberText: '농산물 직거래 플랫폼',
      },
    ],
  ],
  second: [
    [
      {
        header: `프로젝트 'M'`,
        subHeader: '착수 예정일  |  2022. 5.',
        numberText: '디지털 헬스케어 서비스',
      },
      {
        header: `프로젝트 'N'`,
        subHeader: '착수 예정일  |  2022. 06.',
        numberText: 'NFT 마켓플레이스',
      },
      {
        header: `프로젝트 'H'`,
        subHeader: '착수 예정일  |  2022. 06.',
        numberText: 'HR 서비스',
      },
      {
        header: `프로젝트 'U'`,
        subHeader: '착수 예정일  |  2022. 08.',
        numberText: 'EMR 시스템',
      },
    ],
    [
      {
        header: `프로젝트 'M'`,
        subHeader: '착수 예정일  |  2022. 03.',
        numberText: '보험사 내부시스템',
      },
      {
        header: `프로젝트 'F'`,
        subHeader: '착수 예정일  |  2022. 03.',
        numberText: '캘린더 일정관리 서비스',
      },
      {
        header: `프로젝트 'H'`,
        subHeader: '착수 예정일  |  2022. 07.',
        numberText: '육아정보 교육 플랫폼',
      },
      {
        header: `프로젝트 'B'`,
        subHeader: '착수 예정일  |  2022. 10.',
        numberText: '전산 모니터링 시스템',
      },
    ],
    [
      {
        header: `프로젝트 'D'`,
        subHeader: '착수 예정일  |  2022. 12.',
        numberText: '보안 관제망 고도화',
      },
      {
        header: `프로젝트 'C'`,
        subHeader: '착수 예정일  |  2023. 01.',
        numberText: '의료기기 통신 시스템 개발',
      },
      {
        header: `프로젝트 'M'`,
        subHeader: '착수 예정일  |  2023. 04.',
        numberText: '의료인 HR 시스템',
      },
      {
        header: `프로젝트 'A'`,
        subHeader: '착수 예정일  |  2023. 08.',
        numberText: '디지털 작품 전시 플랫폼',
      },
    ],
  ],
};

function Project({ onScrollClick }) {
  return (
    <section className="project">
      <div className="overlayProject">
        <div>
          <div>
            <div className="project__title">
              <span className="projectName">프로젝트.</span>
              <span>메타업과 함께한 프로젝트를 확인해보세요.</span>
            </div>
          </div>
          <div className="contentWrapList">
            <Content data={data.first} title="진행중인 프로젝트." />
            <Content data={data.second} title="착수 예정 프로젝트." />
          </div>
        </div>
      </div>
      <div className="banner__mouse" onClick={onScrollClick}>
        <img src={mouse} alt="" />
        <img src={arrow_dow} alt="" />
      </div>
    </section>
  );
}

export default Project;
