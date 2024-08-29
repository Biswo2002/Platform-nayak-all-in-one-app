import {
  VStack,
  ToastDescription,
  ToastTitle,
  Toast,
  Box,
} from '@gluestack-ui/themed';
import React from 'react';

const ToastComponent = ({
  title,
  description,
  action,
  variant,
}: {
  title: string;
  description: string;
  variant: any;
  action: any;
}) => (
  <Toast action={action} variant={variant}>
    <VStack space="xs">
      <ToastTitle fontSize={'$sm'}>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
    </VStack>
  </Toast>
);

export default ToastComponent;
