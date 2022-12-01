import Controls from '../Controls';
import { render } from '@testing-library/react';
import Config from '../../../config/Config';

const start = Config.defaultGradientStart;
const end = Config.defaultGradientEnd;

test('should render Controls component', () => {
  render(<Controls 
    start={start}
    end={end}
    onStartChange={() => null}
    onEndChange={() => null}
  />);
})