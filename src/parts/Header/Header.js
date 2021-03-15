import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';

import {
  HeaderContainer,
  SearchContainer,
  SearchBar,
  HeaderButtonContainer,
  BlueButton,
  WhiteButton,
  Badge,
  blueButtonStyles,
  blueButtonStylesAlt,
  whiteButtonStyles,
  fileAddIconStyles,
} from '../../styles/parts/HeaderStyles';

function Header() {
  return (
    <HeaderContainer className="header">
      <SearchContainer>
        <SearchBar type="search" placeholder="Search" />
      </SearchContainer>
      <HeaderButtonContainer>
        <BlueButton style={blueButtonStyles}>
          <AddCircleOutlineOutlinedIcon />
        </BlueButton>
        <BlueButton style={blueButtonStylesAlt}>
          <AiOutlineFileAdd size={15} style={fileAddIconStyles} />
          Import Contacts
        </BlueButton>
        <WhiteButton style={whiteButtonStyles}>
          <BsBell size={20} />
          <Badge />
        </WhiteButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}
export default Header;
