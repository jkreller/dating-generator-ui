import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

const ErrorAlert = ({message}) => {
  return (
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;