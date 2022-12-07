import React, { FC, useEffect, useState } from 'react'

type itemType = {
    id: number,
    symbol: string
}

type movesType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type xType = 'X'
type oType = 'O'
type xORoType = xType | oType | undefined
type InfoDataType = itemType[]

const infoData = [
    {
        id: 1,
        symbol: ''
    },
    {
        id: 2,
        symbol: ''

    },
    {
        id: 3,
        symbol: ''
    },
    {
        id: 4,
        symbol: ''
    },
    {
        id: 5,
        symbol: ''
    },
    {
        id: 6,
        symbol: ''
    },
    {
        id: 7,
        symbol: ''
    },
    {
        id: 8,
        symbol: ''
    },
    {
        id: 9,
        symbol: ''
    },

]

const iwinArr: string[][] = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
]

const aarr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const TicTac: FC = () => {
    const [moves, setMoves] = useState<number>(0)
    const [winner, setWinner] = useState<string>('')
    const [isGameOver, setIsGameOver] = useState<boolean>(false)
    const [xORo, setXorO] = useState<xORoType>(undefined)
    const [winArr, setWinArr] = useState<string[]>(aarr)
    const [clickedIndex, setclickedIndex] = useState<number>(0)
    const [clickedItem, setclickedItem] = useState<itemType | {}>({})
    const [filledBox, setFilledBox] = useState<number[]>([])
    const [x, setX] = useState<xType>('X')
    const [o, setO] = useState<oType>('O')
    const [data, setData] = useState<InfoDataType>(infoData)

    const xORoHandler = (id: number) => {

        setFilledBox(pre => [...pre, id])
        if (filledBox.includes(id)) return
        if (moves <= 8) {
            setMoves((pre) => pre + 1)
        }
        const item = data.findIndex((item) => {
            return item.id == id
        })
        setclickedIndex(pre => item)
        const filtered = data.filter((item) => {
            return item.id == id
        })
        setclickedItem(pre => filtered)
    }

    const restartHandler = () => {
        setMoves(0)
        setWinner('')
        setIsGameOver(false)
        setXorO(undefined)
        setclickedIndex(0)
        setclickedItem({})
        setFilledBox([])
        setWinArr(aarr)
        for (let i = 0; i < data.length; i++) {
            setData(pre => {
                const arr = [...pre]
                arr[i].symbol = ''
                return arr
            })
        }
    }

    useEffect(() => {
        if (moves !== 0) {
            if (moves % 2 == 0) {
                setData(pre => {
                    const arr = [...pre]
                    arr[clickedIndex].symbol = x
                    return arr
                })
                setWinArr(pre => {
                    const newArr = [...winArr]
                    newArr[clickedIndex] = x
                    return newArr
                })
                setXorO(x)
            } else if (moves % 2) {
                setData(pre => {
                    const arr = [...pre]
                    arr[clickedIndex].symbol = o
                    return arr
                })
                setWinArr(pre => {
                    const newArr = [...winArr]
                    newArr[clickedIndex] = o
                    return newArr
                })
                setXorO(o)
            }
        }
    }, [moves])

    useEffect(() => {
        if (moves > 8) {
            setIsGameOver(true)
            console.log('true 1')
        }

        ///wrong ture condition 5 ,3 , 9 ,5 ,12
        if (moves > 4) {
            for (let i = 0; i < winArr.length; i++) {
                //--- horizontal match ---//

                if (clickedIndex == 0 || clickedIndex == 1 || clickedIndex == 2) {
                    if (winArr[clickedIndex] == winArr[clickedIndex + 3] && winArr[clickedIndex + 3] == winArr[clickedIndex + 6]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                           console.log('true 2')

                    }
                } else if (clickedIndex == 3 || clickedIndex == 4 || clickedIndex == 5) {
                    if (winArr[clickedIndex] == winArr[clickedIndex - 3] && winArr[clickedIndex - 3] == winArr[clickedIndex + 3]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 3')
                    }
                } if (clickedIndex == 6 || clickedIndex == 7 || clickedIndex == 8) {
                    if (winArr[clickedIndex] == winArr[clickedIndex - 3] && winArr[clickedIndex - 3] == winArr[clickedIndex - 6]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 4')

                    }
                }
                //--vertical match--//
                //  [ 0 1 2 
                //    3 4 5 
                //    6 7 8 
                // ]
                if (clickedIndex == 0 || clickedIndex == 3 || clickedIndex == 6) {

                    console.log(winArr ,'data from top 0,3,6')
                    if (winArr[clickedIndex] == winArr[clickedIndex + 1] && winArr[clickedIndex + 1] == winArr[clickedIndex + 2]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 5 ')

                    }
                } else if (clickedIndex == 1 || clickedIndex == 4 || clickedIndex == 7) {
                    if (winArr[clickedIndex] == winArr[clickedIndex - 1] && winArr[clickedIndex - 1] == winArr[clickedIndex + 1]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 6 ')
                    
                    }
                } else if (clickedIndex == 2 || clickedIndex == 5 || clickedIndex == 8) {
                    if (winArr[clickedIndex] == winArr[clickedIndex - 1] && winArr[clickedIndex - 1] == winArr[clickedIndex - 2]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 7')
                    

                    }
                }
                //--diagonal match--//
                if (clickedIndex == 0) {
                    if (winArr[clickedIndex] == winArr[clickedIndex + 4] && winArr[clickedIndex + 4] == winArr[clickedIndex + 8]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true  8 ')

                    }
                } else if (clickedIndex == 2) {
                    if (winArr[clickedIndex] == winArr[clickedIndex + 2] && winArr[clickedIndex + 2] == winArr[clickedIndex + 4]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 9')
                        console.log(winArr ,'data 9' ,)

                    }
                } else if (clickedIndex == 4) {
                    if (winArr[clickedIndex] == winArr[clickedIndex + 2] && winArr[clickedIndex + 2] == winArr[clickedIndex - 2]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 10')

                    } else if (winArr[clickedIndex] == winArr[clickedIndex + 4] && winArr[clickedIndex + 4] == winArr[clickedIndex - 4]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 11')

                    }
                } else if (clickedIndex == 6) {
                    if (winArr[clickedIndex] == winArr[clickedIndex - 2] && winArr[clickedIndex - 2] == winArr[clickedIndex - 4]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 12 ')
                    }
                } else if (clickedIndex == 8) {
                    if (winArr[clickedIndex] == winArr[clickedIndex - 4] && winArr[clickedIndex - 4] == winArr[clickedIndex - 8]) {
                        setWinner(winArr[clickedIndex])
                        setIsGameOver(true)
                        console.log('true 13')
                    }
                }
            }
        }
    }, [winArr])
    console.log(winArr , 'from outside')

    return (
        <div className='container' >
            <div className='sub-container' >
                {/* //--mapped --// */}
                <div>{xORo == 'X' ? 'O' : xORo == 'O' ? 'X' : 'O'} turn</div>
                <div>
                    {
                        isGameOver ? (<h1>Game Over</h1>) : ''
                    }
                </div>
                <div>
                    {
                        isGameOver && winner ? (`winner : -${winner}`) : isGameOver ? (`Tie`) : ''
                    }
                </div>
                <div>
                    {
                        isGameOver ? (<button onClick={() => restartHandler()} >Restart</button>) : ''
                    }
                </div>
            </div>
            <div className='game-div'>
                <div className="grid-layout" >
                    {
                        data.map((item, index) => (
                            <div
                                className={`grid-item item${index + 1}`}
                                key={`${item.id}isId`}
                                onClick={isGameOver ? () => console.log('hey') : () => xORoHandler(item.id,)}
                            >
                                {
                                    isGameOver && item.symbol == '' ? '-' : item.symbol
                                }
                            </div>
                        ))
                    }
                </div>
            </div> 
        </div>
    )
}
export default TicTac
