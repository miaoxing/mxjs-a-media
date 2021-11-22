import {Box} from '@fower/react';
import PropTypes from 'prop-types';

const Media = ({children, ...props}) => {
  return (
    <Box flex toTop {...props}>
      {children}
    </Box>
  );
};

Media.propTypes = {
  children: PropTypes.node,
};

Media.Body = ({children, ...props}) => {
  return (
    <Box flex={1} ml3 {...props}>
      {children}
    </Box>
  );
};

Media.Body.propTypes = {
  children: PropTypes.node,
};

export default Media;
