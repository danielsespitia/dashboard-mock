import styled from 'styled-components';

import searchIcon from '../../assets/search-icon.webp';

export const HeaderContainer = styled.header`
  display: inherit;
  margin-top: 44px;
  align-self: flex-start;
  justify-content: space-between;
  width: 97.4%;
`;

export const SearchContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #ffffff;
  height: 45px;
  width: 29.3vw;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.02);
`;

export const SearchBar = styled.input`
  height: 100%;
  background: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 8px 10px;
  padding-left: 40px;
  font-size: 0.97em;
  border: none;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.02);
  outline: none;
  &::placeholder {
    color: #000000;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: inherit;
`;

export const BlueButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0fb1f6;
  font-size: 0.95em;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  color: white;
  margin-left: 21px;
  box-shadow: 0px 10px 34px 0px rgba(15, 177, 246, 0.31);
  &:hover {
    opacity: 0.7;
  }
`;

export const WhiteButton = styled.button`
  display: flex;
  align-items: center;
  z-index: 0;
  background-color: white;
  border-radius: 10px;
  border: none;
  position: relative;
  margin-left: 21px;
  &:hover {
    opacity: 0.7;
  }
`;

export const Badge = styled.span`
  top: 12px;
  right: 12px;
  height: 1px;
  width: 1px;
  position: absolute;
  z-index: 2;
  padding: 3.5px;
  border-radius: 50%;
  background: #0eb1f6;
`;

export const blueButtonStyles = { paddingLeft: '10px', paddingRight: '10px' };

export const blueButtonStylesAlt = {
  paddingLeft: '15px',
  paddingRight: '15px',
};

export const whiteButtonStyles = { paddingLeft: '11px', paddingRight: '11px' };

export const fileAddIconStyles = { marginRight: '6px' };
