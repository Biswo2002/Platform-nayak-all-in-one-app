import React, {useCallback, useState} from 'react';
import {Box, Text, VStack} from '@gluestack-ui/themed';
import AppInput from '../../components/container/AppInput';
import DocumentInput from './DocumentInput';
import {FONTS} from '../../styles';
import {DocumentPickerType} from '../../utils';
import {pickDocument} from '../../utils/PickDoc';

export default function IdentityAndBankInformation() {
  // State for document pickers
  const [panNumberPick, setPanNumberPick] = useState<DocumentPickerType | any>({
    value: '',
    uploaded: false,
  });
  const [aadharNumber, setAadharNumber] = useState<DocumentPickerType | any>({
    value: '',
    uploaded: false,
  });
  const [dl, setDl] = useState<DocumentPickerType | any>({
    value: '',
    uploaded: false,
  });
  const [bankAccount, setBankAccount] = useState<DocumentPickerType | any>({
    value: '',
    uploaded: false,
  });

  // Function to handle document picking
  const handleDocumentPick = useCallback(
    (
      setDocumentState: React.Dispatch<
        React.SetStateAction<DocumentPickerType | any>
      >,
    ) => {
      pickDocument((document: any) => {
        setDocumentState({
          value: document,
          uploaded: true,
        });
      });
    },
    [],
  );

  return (
    <Box flex={1} p={4} bg="white">
      <Text my="$6" fontSize="$md" fontFamily={FONTS[400].normal}>
        Identity and Bank Details
      </Text>
      <VStack my={'$2'}>
        {/* Pan Number Input */}
        <DocumentInput
          placeholder="Pan Number"
          errorMessage="Pan Number is required"
          documentState={panNumberPick}
          onPick={() => handleDocumentPick(setPanNumberPick)}
          inputKey="Pan_Number"
        />

        {/* Aadhar Number Input */}
        <DocumentInput
          placeholder="Aadhar Number"
          errorMessage="Aadhar Number is required"
          documentState={aadharNumber}
          onPick={() => handleDocumentPick(setAadharNumber)}
          inputKey="Aadhar_Number"
        />

        {/* Driver License/LLR Number Input */}
        <DocumentInput
          placeholder="Driver License/LLR Number"
          errorMessage="Driver License/LLR Number is required"
          documentState={dl}
          onPick={() => handleDocumentPick(setDl)}
          inputKey="Driver_License/LLR"
        />

        {/* Bank Account Number Input */}
        <DocumentInput
          placeholder="Bank Account Number"
          errorMessage="Bank Account Number is required"
          documentState={bankAccount}
          onPick={() => handleDocumentPick(setBankAccount)}
          inputKey="Bank_Account_Number"
        />

        {/* IFSC Code Input */}
        <Box mt={'$2'}>
          <AppInput
            key="IFSC_Code"
            input={{
              key: 'IFSC_Code',
              placeholder: 'IFSC Code Number',
              rules: 'IFSC Code Number is required',
            }}
            TextColor="#333"
            BorderColor="#ccc"
            rounded
            fontFamily={FONTS[400].normal}
            errorMessage="IFSC Code Number is required"
            backgroundColor="#f3f4f6"
            padding={14}
          />
        </Box>
      </VStack>
    </Box>
  );
}
