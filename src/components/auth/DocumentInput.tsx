import React, {useState} from 'react';
import {HStack, Pressable, Text} from '@gluestack-ui/themed';
import AppInput from '../../components/container/AppInput';
import {WIDTH} from '../../utils';
import AppIcon from '../../components/core/AppIcon';
import {FONTS} from '../../styles';

interface DocumentInputProps {
  placeholder: string;
  errorMessage: string;
  documentState: {value: any; uploaded: boolean};
  onPick: () => void; // Function to handle document pick
  inputKey: string; // Key for identifying the input
}

const DocumentInput: React.FC<DocumentInputProps> = ({
  placeholder,
  errorMessage,
  documentState,
  onPick,
  inputKey,
}) => {
  const [uploadedText, setUploadedText] = useState('Upload Doc');

  const handleUpload = () => {
    setUploadedText('Uploading...');
    // Simulate upload delay
    setTimeout(() => {
      setUploadedText('Upload Done');
    }, 2000); // Replace with actual upload logic
  };

  return (
    <HStack alignItems="center" justifyContent="space-between" my="$2">
      {/* Document Input */}
      <AppInput
        key={inputKey}
        input={{
          key: inputKey,
          placeholder,
          rules: `${placeholder} is required`,
          value: documentState.value,
        }}
        TextColor="#333"
        BorderColor="#ccc"
        rounded
        fontFamily={FONTS[400].normal}
        errorMessage={errorMessage}
        backgroundColor="#f3f4f6"
        width={WIDTH / 1.5}
        padding={14}
      />

      {/* Upload Button */}
      <Pressable
        onPress={() => {
          onPick();
          handleUpload();
        }} // Call the onPick function passed as prop
        alignItems="center"
        justifyContent="center"
        bg="$coolGray100"
        borderWidth={1}
        rounded={8}
        borderColor="#ccc"
        alignSelf="center"
        px={16}
        py={12}
        top={3}>
        <AppIcon FeatherName="upload" size={20} color={'#343434'} />
        <Text fontSize="$2xs" color="#333" fontFamily={FONTS[400].normal}>
          {uploadedText}
        </Text>
      </Pressable>
    </HStack>
  );
};

export default DocumentInput;
