import { Box } from '@mxjs/a-box';
import PropTypes from 'prop-types';

const Media = ({children, ...props}) => {
  return (
    <Box display="flex" alignItems="flex-start" {...props}>
      {children}
    </Box>
  );
};

Media.propTypes = {
  children: PropTypes.node,
};

Media.Body = ({children, ...props}) => {
  return (
    <Box flex={1} ml={3} {...props}>
      {children}
    </Box>
  );
};

Media.Body.propTypes = {
  children: PropTypes.node,
};

export default Media;
