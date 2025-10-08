import { StyleSheet, Text, View } from 'react-native';
import {useEffect,useState} from 'react'
import params from './src/params'
import Field from './src/components/Field'
import {createMinedBoard} from './src/functions'
import MineField from './src/components/MineField';

export default function App() {

  const [board, setBoard] = useState([])
  const rows = params.getRowsAmount()
  const columns = params.getColumnsAmount()

  const minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  useEffect(() => {
    setBoard(createMinedBoard(rows, columns, minesAmount()) as any)

  }, [])

  return (
    <View style={styles.container}>
      <Text>Iniciando Mines!!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()} X {params.getColumnsAmount()}</Text>

      <MineField board={board} />  
       

       
       {/*  <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={7} />
        <Field mined />
        <Field opened mined />
        <Field opened mined exploded />
        <Field flagged />
        */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
