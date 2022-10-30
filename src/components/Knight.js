import React, {useState, useEffect} from 'react';
import Cell from './knightSearch/breath.js';
import Ktile from './knightSearch/Ktile.js';
import '../styles/Knight.css';
import { v4 as uuidv4 } from 'uuid';
import produce from "immer";
import Controlls from './knightSearch/Controlls';

const Knight=()=>{

    const [board,setBoard]=useState([]);
    const [solved,setSolved]=useState(false);
    
    const createBoard=()=>{
        let boardArr=[]
        for(let i=0; i<8;i++){
            boardArr.push([]);
            for(let k=0; k<8; k++){
                boardArr[i].push("");
            }
        }
        return boardArr;
    }

    const reset= ()=>{
        setBoard(createBoard());
        setSolved(false);
    }

    const checkForKnight=()=>{
        for(let i=0; i<8;i++){
            for(let k=0; k<8; k++){
                if(board[i][k]=="K"){return true}
            }
        }
        return false
    }

    const getPath=(x,y)=>{
        let knight;
        for(let i=0; i<8;i++){
            for(let k=0; k<8; k++){
                if(board[i][k]=="K"){
                    knight=new Cell([i,k]);
                }
            }
        }
        let paths=knight.path([x,y]);
        paths.push([x,y]);
        return paths;
    }

    const updateOneState=(coords,index)=>{
        setBoard(
            produce(board, draft=>{
                draft[coords[0]][coords[1]]=index+1;
            })
        );
    }
    const animate=(paths)=>{
        setBoard(
            produce(board, draft=>{
                paths.forEach((coords,index)=>{
                    draft[coords[0]][coords[1]]=index+1;
                })
            })
        );
        /* paths.forEach(async (coords,index)=>{
            new Promise((resolve)=>{
                updateOneState(coords,index);
            });
            
        }) */
    }
    const lockInputsAndFindPath=(coords)=>{
        setBoard(
            produce(board, draft=>{
                draft[coords[0]][coords[1]]="E";
            })
        );
        animate(getPath(coords[0],coords[1]));

    }
    const checkKnightClick=(coords)=>{
        for(let i=0; i<8;i++){
            for(let k=0; k<8; k++){
                if(board[i][k]=="K" && i==coords[0] && k==coords[1]){return true}
            }
        }
        return false
    }
    const changeVal=(coords,val)=>{

        if(solved){
            reset();
        }
        else if(checkForKnight()){
            if(checkKnightClick(coords)){
                setBoard(
                    produce(board, draft=>{
                        if(draft[coords[0]][coords[1]]=="K"){
                            draft[coords[0]][coords[1]]="";
                        }
                        else{
                            draft[coords[0]][coords[1]]=val;

                        }
                    })
                );
            }
            else{
                lockInputsAndFindPath(coords);
                setSolved(true);
            }
        }
        else{
            setBoard(
                produce(board, draft=>{
                    draft[coords[0]][coords[1]]=val;
                })
            );

        }
    }

    useEffect(() => { 
        setBoard(createBoard());
        
    }, [])

    useEffect(() => {
        //console.log(board);
    }, [board]);

    //test();
    const test=()=>{
        let timeout;
        (function () {
        timeout = setTimeout(alertFunc, 2000);
        })();

        function alertFunc() {
        alert("Hello!");
        }
    }

    //test();

    return(
        
        <div className="Main">
            <Controlls resetFnc={reset}/>
            <div className='Knight'>
            {board.map((row, rowIndex)=>{
                return(
                <div className="row" key={uuidv4()}>
                    {row.map((tile,colIndex)=>{
                        return (
                            <div className="tile" key={uuidv4()}>
                                {<Ktile coords={[rowIndex,colIndex]} value={tile} change={changeVal}/>}
                            </div>
                        );
                    })
                    }
                </div>
                )
            })}
            </div>
        </div>
        
    )
}



export default Knight;