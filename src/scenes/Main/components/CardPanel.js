import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #333;
  background-color: white;
  padding: 20px;
  border-radius: 0 0 3px 3px;
`;

const PanelHeader = styled.div`
  background-color: #aaa;
  color: white;
  text-align: center;
  padding: 5px;
`;

const CardPanel = ({ colSizes, children, title }) => {
  return (
    <div className={`col ${colSizes}`}>
      <PanelHeader>{title}</PanelHeader>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

CardPanel.propTypes = {
  title: PropTypes.string.isRequired,
  colSizes: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default CardPanel;
