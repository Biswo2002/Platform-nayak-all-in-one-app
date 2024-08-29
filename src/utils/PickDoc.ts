import DocumentPicker from 'react-native-document-picker';
import {Alert} from 'react-native';

export const pickDocument = async (
  setDocPick: React.Dispatch<React.SetStateAction<any>>,
) => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      copyTo: 'cachesDirectory',
    });
    setDocPick(res[0]);
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      Alert.alert('Canceled from single doc picker');
    } else {
      Alert.alert('Unknown Error: ' + JSON.stringify(err));
      throw err;
    }
  }
};
