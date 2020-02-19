import React, { Fragment } from 'react';
import Autocomplete from './Autocomplete';

import * as style1 from './style1.js';

const App = () => {
  return (
    <Fragment>
      <Autocomplete
        style={style1}
      />
    </Fragment>
  );
}

export default App;