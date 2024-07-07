import PropTypes from 'prop-types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Media = ({ className, children, ...props }) => {
  return (
    <div className={twMerge(clsx('flex items-start', className))} {...props}>
      {children}
    </div>
  );
};

Media.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Media.Body = ({ className, children, ...props }) => {
  return (
    <div className={twMerge(clsx('flex-1 ml-3', className))} {...props}>
      {children}
    </div>
  );
};

Media.Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Media;
