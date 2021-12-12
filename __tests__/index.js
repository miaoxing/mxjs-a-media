import Media from '../';
import {render} from '@testing-library/react';

describe('Media', () => {
  test('basic', () => {
    const result = render(<Media/>);

    expect(result.container).toMatchSnapshot();
  });

  test('body', () => {
    const result = render(<Media>
      image
      <Media.Body>body</Media.Body>
    </Media>);

    expect(result.container).toMatchSnapshot();
  });
});
