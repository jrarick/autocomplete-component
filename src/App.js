import React, { Fragment } from 'react';
import Autocomplete from './Autocomplete';

import * as style1 from './style1.js';
import * as style2 from './style2.js';

const App = () => {
  return (
    <Fragment>
      <Autocomplete
        style={style1}
      />
      <Autocomplete
        style={style2}
      />
    </Fragment>
  );
}

export default App;