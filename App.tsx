import { StyleSheet, Text, View, Alert,  } from 'react-native';
import {useEffect,useState} from 'react'
import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField';
import {createMinedBoard, cloneBoard, openField,hadExplosion,wonGame,showMines} from './src/functions'

export default function App() {

  const [board, setBoard] = useState([])
  const [won, setWon] = useState(false)
  const [lost, setLost] = useState(false)
  const rows = params.getRowsAmount()
  const columns = params.getColumnsAmount()

  const minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  const onOpenField = (row: number, column: number) => {
    const newBoard = cloneBoard(board)
    openField(newBoard, row, column)
    const lost = hadExplosion(newBoard)
    const won = wonGame(newBoard)

    if (lost) {
      setLost(true)
      showMines(newBoard)
      Alert.alert('Perdeu!', 'Tente novamente!')
    }
    if (won) {
      setWon(true)
      Alert.alert('Parabéns!', 'Você venceu!')
    }
    setBoard(newBoard)
  }

  useEffect(() => {
    setBoard(createMinedBoard(rows, columns, minesAmount()) as any)

  }, [])

  return (
    <View style={styles.container}>
      <Text>Iniciando Mines!!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()} X {params.getColumnsAmount()}</Text>

      <MineField board={board} onOpenField={onOpenField} />  
      
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
