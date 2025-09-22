import React from 'react';

const Textarea = React.forwardRef((props, ref) => {
  return <textarea ref={ref} {...props} />;
});

export { Textarea };