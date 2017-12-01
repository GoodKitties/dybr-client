import React from 'react';
import { withRouter } from 'react-router-dom';
// import * as actions from 'services/auth/actions';
import { Button } from 'components/FormElements';
import styled from 'styled-components';
import CardPanel from './CardPanel';

const NewsWrapper = styled.div``;

const DybrNews = () => {
  const news = [
    <div>Первые подвижки!</div>,
    <div>Дыбр пишется!</div>,
    <div>Лемуры лемурятся!</div>,
  ];

  const buttons = [<Button>Все Новости</Button>];

  return (
    <CardPanel colSizes="s6 m6" title="Новости Дыбра" footer={buttons}>
      <NewsWrapper>{news}</NewsWrapper>
    </CardPanel>
  );
};

export default withRouter(DybrNews);
