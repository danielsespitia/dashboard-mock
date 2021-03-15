import { IoChevronBackSharp } from 'react-icons/io5';

import { BsGrid } from 'react-icons/bs';
import { RiContactsBook2Line } from 'react-icons/ri';
import { FiInbox } from 'react-icons/fi';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

import mainLogo from '../../assets/logo.png';
import thumbnail from '../../assets/profile-picture.png';

import {
  SidebarContainer,
  SidebarHeader,
  LogoContainer,
  Logo,
  SidebarAnchorContainer,
  SidebarNavAnchor,
  SidebarUserContainer,
  ThumbnailContainer,
  Thumbnail,
  UserInfoContainer,
  UserNameText,
  CompanyName,
  BackButton,
  sidebarIconStyle,
} from '../../styles/parts/SidebarStyles';

import { DropdownButton } from '../../styles/GlobalStyles';

function Sidebar() {
  return (
    <SidebarContainer className="sidebar">
      <SidebarHeader>
        <LogoContainer>
          <Logo src={mainLogo} />
        </LogoContainer>
      </SidebarHeader>
      <SidebarAnchorContainer>
        <SidebarNavAnchor exact to="/" className="sidebar-button">
          <BsGrid size={19} style={sidebarIconStyle} />
          Dashboard
        </SidebarNavAnchor>
        <SidebarNavAnchor>
          <RiContactsBook2Line size={19} style={sidebarIconStyle} />
          Contacts
        </SidebarNavAnchor>
        <SidebarNavAnchor>
          <FiInbox size={19} style={sidebarIconStyle} />
          Inbox
        </SidebarNavAnchor>
        <SidebarNavAnchor>
          <IoMegaphoneOutline size={19} style={sidebarIconStyle} />
          Broadcast
        </SidebarNavAnchor>
        <SidebarNavAnchor>
          <AiOutlineUnorderedList size={19} style={sidebarIconStyle} />
          Lists
        </SidebarNavAnchor>
        <SidebarNavAnchor>
          <RiMoneyDollarBoxLine size={19} style={sidebarIconStyle} />
          Referrals
        </SidebarNavAnchor>
      </SidebarAnchorContainer>
      <SidebarUserContainer>
        <ThumbnailContainer>
          <Thumbnail src={thumbnail} />
        </ThumbnailContainer>
        <UserInfoContainer>
          <UserNameText>Jacob Jones</UserNameText>
          <CompanyName>Company Name</CompanyName>
        </UserInfoContainer>
        <DropdownButton>
          <KeyboardArrowDownOutlinedIcon />
        </DropdownButton>
      </SidebarUserContainer>
      <BackButton>
        <IoChevronBackSharp size={18} />
      </BackButton>
    </SidebarContainer>
  );
}

export default Sidebar;
