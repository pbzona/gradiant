import Controls from '../Controls';
import { render, screen } from '@testing-library/react';
import Config from '../../../config/Config';

const start = Config.defaultGradientStart;
const end = Config.defaultGradientEnd;
const length = Config.defaultGradientLength

test('should render Controls component', () => {
  render(<Controls 
    start={start}
    end={end}
    onStartChange={() => null}
    onEndChange={() => null}
    length={length}
    onLengthChange={() => null}
  />);
})