import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Item from './Item';

const styles = {
  container: css({

    alignSelf: 'flex-start',
    display: 'flex',
    '@media(max-width: 720px)': {
      display:'block',
      width:'80%',
      margin:'0 auto'
    }
  })
};

class Infos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Item title="DATA" subtitle={Globals.date.full}>
          <p>{Globals.date.hour}</p>
        </Item>

        <Item title="LOCAL" subtitle={Globals.location.city}>
          <p>{Globals.location.country}</p>
        </Item>
      </div>
    );
  }
}

export default Infos;
