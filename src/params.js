import { Dimensions } from "react-native"

const params = {
    blockSize: 35,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //altura do header em relação a altura total
    difficultLevel: 0.1, 
    
    getColumnsAmount() { //retorna a quantidade de colunas baseada na largura da tela
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize);
    },

    getRowsAmount() {//retorna a quantidade de linhas baseada na altura da tela
        const totalHeight = Dimensions.get('window').height;
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize);
    }
}

export default params