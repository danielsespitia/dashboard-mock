import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { P } from '../GlobalStyles';

export const SidebarContainer = styled.div`
  margin-top: 12px;
  border-radius: 8px;
  display: inherit;
  flex-direction: column;
  background-color: white;
  height: 94.4%;
  width: 230px;
  position: absolute;
  z-index: 0;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const SidebarHeader = styled.header`
  display: inherit;
  width: 100%;
  height: 9%;
`;

export const SidebarAnchorContainer = styled.nav`
  display: inherit;
  flex-direction: column;
  height: 81.4%;
`;

export const SidebarNavAnchor = styled(Link)`
  text-decoration: none;
  background-color: white;
  text-align: left;
  display: inherit;
  color: black;
  align-items: center;
  height: 43px;
  width: 98%;
  font-size: 1.04em;
  border: none;
  border-right: 5px solid white;
  margin-bottom: 15px;
  cursor: pointer;
  &:focus {
    background-color: #def5ff;
    border-right: 5px solid #09aff6;
    color: #0daff5;
    font-weight: 600;
  }
  &:hover {
    background-color: #def5ff;
    border-right: 5px solid #09aff6;
    color: #0daff5;
  }
`;

export const SidebarCheckbox = styled.input`
  &:focus .sidebar-button {
    background-color: #000000;
  }
`;

export const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  width: 85%;
  height: 44px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const SidebarUserContainer = styled.div`
  display: inherit;
  padding-left: 6px;
  align-items: center;
  justify-content: center;
  height: 40px;
  align-self: center;
  flex-direction: row;
  justify-self: flex-end;
`;

export const ThumbnailContainer = styled.div`
  height: 35px;
  width: 35px;
`;

export const Thumbnail = styled.img`
  background-size: cover;
  height: 100%;
  width: 100%;
  border: 2px solid #20b3f3;
  border-radius: 50%;
`;

export const UserInfoContainer = styled.div`
  display: inherit;
  margin-left: 10px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const UserNameText = styled(P)`
  font-weight: 500;
  margin-bottom: -6px;
  font-size: 1em;
`;

export const CompanyName = styled(P)`
  font-size: 0.9em;
`;

export const BackButton = styled.button`
  position: relative;
  bottom: 92.5%;
  left: 214px;
  z-index: 5;
  background-color: white;
  display: inherit;
  align-items: center;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  color: #0fb1f6;
  border: none;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

export const sidebarIconStyle = { marginLeft: '32px', marginRight: '10px' };
