// import 'jasmine'; (google3-only)

import {createTokenTests} from '../testing/tokens.js';

import {MdOutlinedButton} from './outlined-button.js';

describe('<md-outlined-button>', () => {
  describe('.styles', () => {
    createTokenTests(MdOutlinedButton.styles);
  });
});
