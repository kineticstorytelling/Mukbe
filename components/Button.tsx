import React from 'react';
import { View, Text } from 'react-native';


interface ButtonProps {
    children:React.ReactNode;
    className?: string;
    // onPress?: (event: <HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Button onPress={props} className={props.className} />
   
  )
}

export default Button