import {Box, Pressable, Text} from '@gluestack-ui/themed';
import AppInput from '../../components/container/AppInput';
import React, {useCallback, useState} from 'react';
import {FONTS} from '../../styles';
import AppIcon from '../../components/core/AppIcon';
import {pickDocument} from '../../utils/PickDoc';
type DocumentPickerType = {
  name: string;
  size: number;
  type: string;
  uri: string;
}[];
export default function BasicsInformation({inputKey}: any) {
  const [docPick, setDocPick] = useState<DocumentPickerType | any>([]);
  const documentPicker = useCallback(() => {
    pickDocument(setDocPick);
  }, []);
  return (
    <Box>
      <Text
        mt={'$10'}
        mb={'$3'}
        fontSize={'$md'}
        fontFamily={FONTS[400].normal}>
        Basic information
      </Text>
      {inputKey?.map((i: any) => (
        <AppInput
          key={i.id} // Add key for mapping
          input={{
            key: i.key, // Replace with your input key
            placeholder: i.placeholder, // Placeholder text
            rules: i.rules, // Validation rules
          }}
          TextColor="#333"
          BorderColor="#ccc"
          rounded
          fontFamily={FONTS[400].normal}
          errorMessage={i.rules?.required} // Error message
          marginBottom={18}
          backgroundColor={'#f3f4f6'}
        />
      ))}
      {/* Todo for DocPicker  */}
      <Pressable
        onPress={documentPicker}
        alignItems="center"
        justifyContent="center"
        bg="$coolGray100"
        borderWidth={1}
        mt={'$5'}
        rounded={8}
        borderColor="#ccc"
        p={'$10'}>
        <AppIcon FontAwesome5Name="image" size={20} color={'#343434'} />
        <Text
          fontSize={'$sm'}
          mt={'$2'}
          color={'#333'}
          fontFamily={FONTS[400].normal}>
          {docPick?.length === 0 ? 'Choose File' : docPick?.name}
        </Text>
      </Pressable>
    </Box>
  );
}
