import React from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';
import Ticket from './Ticket';

import BackgroundPattern from '../media/images/macaco.jpg';

const styles = {
  container: css({
    backgroundImage: `url(${BackgroundPattern})`,
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media(max-width: 720px)': {
      backgroundPosition: 'left center',
    }
  }),
};

const Header = () => (
  <div {...styles.container}>
    <Title />
    <Logo />
    <Ticket />
    <Infos />
  </div>
);

export default Header;
