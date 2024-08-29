import React, { useEffect, useState } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
  Modal,
  Image,
  Text,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Heading,
  HStack,
  Icon,
  Input,
  InputIcon,
  VStack,
  InputField,
  InputSlot,
  SearchIcon,
} from '@gluestack-ui/themed';
import Country from '../../constants/Country';

type Props = {
  visible: boolean;
  onSelect: (country: any) => void;
  onClose: () => void;
  selectedCountry?: any;
};

export default ({ onClose, onSelect, visible }: Props) => {
  const [searchTxt, setSearchTxt] = useState('');
  const [searchRes, setSearchRes] = useState(Country);

  useEffect(() => {
    if (searchTxt) {
      const resArr = Country.filter((item: any) =>
        item.name.toLowerCase().includes(searchTxt.toLowerCase()),
      );
      setSearchRes(resArr);
    } else {
      setSearchRes(Country);
    }
  }, [searchTxt]);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <SafeAreaView style={styles.container}>
          <VStack w="100%" alignSelf="center">
            <HStack my="$4" alignItems="center">
              <Pressable onPress={onClose}>
                <MaterialIcons name="arrow-back" size={25} color="#000" />
              </Pressable>
              <Heading alignSelf="center" fontSize="$lg" ml="$4">
                Select Your Country
              </Heading>
            </HStack>
            <Input>
              <InputSlot pl="$3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField
                type="text"
                placeholder="Search by country name"
                value={searchTxt}
                onChangeText={setSearchTxt}
              />
            </Input>
          </VStack>

          <FlatList
            keyboardShouldPersistTaps="always"
            data={searchRes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.flagWrapper}
                onPress={() => onSelect(item)}>
                <Image
                  source={{
                    uri: `https://flagcdn.com/w20/${item.code.toLowerCase()}.png`,
                  }}
                  style={styles.flag}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.code}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flag: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  flagWrapper: { padding: 10, flexDirection: 'row' },
  container: {
    flex: 1,
    padding: 10,
  },
});
