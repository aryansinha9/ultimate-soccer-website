import React from 'react';

const Card = React.forwardRef((props, ref) => <div ref={ref} {...props} />);
const CardHeader = React.forwardRef((props, ref) => <div ref={ref} {...props} />);
const CardTitle = React.forwardRef((props, ref) => <h3 ref={ref} {...props} />);
const CardContent = React.forwardRef((props, ref) => <div ref={ref} {...props} />);

export { Card, CardHeader, CardTitle, CardContent };