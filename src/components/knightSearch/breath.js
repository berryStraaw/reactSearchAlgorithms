import Node from './node.js';

export default class Cell{
    
    constructor(pos=[0,0]){
        this.root=this.build_tree(pos);

    }

    build_tree(pos){
        if(pos[0]<0 || pos[0] >7 || pos[1]<0 || pos[1]>7){                
            return null;
        } 
        let node=new Node(pos);
        node.paths=this.newPositions(node);
        return node;
    }

    compareArrays(arr,arr2){
        let t1=false;
        let t2=false;
        let k=0;
        for(let i=0;i<arr2.length;i++){
            t1=false;
            t2=false;
            if(arr2[i][k]==arr[k]) t1=true;
            if(arr2[i][k+1]==arr[k+1]) t2=true;
            if(t1==true && t2==true) return true;
        }
        return false;
    }

    find_node_child(pos){
        
        this.root = this.build_tree(this.root.pos);
        if (pos === this.root.pos) {
            return this.root;
        }

        const que = [];
        let current = this.root;
        while (current) {
/*             if (current.paths.includes(pos)) return current; */
            if (this.compareArrays(pos,current.paths)) return current;
            
            que.push(...current.paths.map(path => {
                const node = new Node(path);
                node.paths = this.newPositions(node);
                return node;
            }));
            
            current = que.shift();
        }
        throw new Error("Didn't find anything");
    }


    delay(delayInms) {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve(2);
            }, delayInms);
        });
    }
     
    path(val,arr=[]){
        if(val==this.root.pos){

            arr=arr.reverse();
            arr.shift();
            return arr;
        }
        else{
            arr.push(this.find_node_child(val).pos);
            return this.path(this.find_node_child(val).pos,arr);
        }
    }

    newPositions(node){
        let newPos=[];

        let pos1=[node.pos[0]+2,node.pos[1]+1];
        let pos2=[node.pos[0]+2,node.pos[1]-1];
        let pos3=[node.pos[0]-2,node.pos[1]-1];
        let pos4=[node.pos[0]-2,node.pos[1]+1];
        let pos5=[node.pos[0]+1,node.pos[1]+2];
        let pos6=[node.pos[0]+1,node.pos[1]-2];
        let pos7=[node.pos[0]-1,node.pos[1]-2];
        let pos8=[node.pos[0]-1,node.pos[1]+2];
        newPos=[pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8]
        newPos=newPos.map(posarr=>{
            if(posarr[0]<0){
                return undefined;
            }
            else if(posarr[1]<0){
                return undefined;
            }
            else if(posarr[1]>7){
                return undefined;
            }
            else if(posarr[0]>7){
                return undefined;
            }
            else{
                return posarr;
            }
        })
        newPos= newPos.filter(pos=>pos!==undefined);
        return newPos;
    }
}


/* export class {Cell} */