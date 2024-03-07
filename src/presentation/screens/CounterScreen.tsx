import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{count}</Text>
      {/* <PrimaryButton 
        label={'incrementar'}
        onPress={ () => setCount( count +1 )}
        onLongPress={ () => setCount(0) }      
      /> */}
      <Button
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode='contained'>
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    fontSize: 80,
    // color: 'white',
    fontWeight: '300',
  },
});
