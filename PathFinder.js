function pathFinder(maze){
    console.log(maze);
      let arrayMaze = maze.split('\n').map(strRow => strRow.split(''));
      arrayMaze.forEach(el => { 
        el.unshift('W');
        el.push('W');
      })
      arrayMaze.push(Array(arrayMaze[0].length).fill('W', 0));
      arrayMaze.unshift(Array(arrayMaze[0].length).fill('W', 0));
      //console.log(arrayMaze);
      arrayMaze = arrayMaze.map(row => row.map(el => new Place(el === 'W')));
      //console.log(arrayMaze);  
      
      
      const move = {
        bot: [1, 0],
        right: [0, 1],
        top: [-1, 0],
        left: [0, -1],    
      }
      
      function Place(isWall) {
        this.isWall = isWall;    
      
        this.bot = false;
        this.right = false;
        this.top = false;
        this.left = false;    
        this.checkWall = function(){
          return this.isWall || (this.bot && this.right && this.top && this.left);
        }
        this.isVisitAndNotDone = function() {
          return (!this.isWall && (this.bot ||
                  this.right ||
                  this.top ||
                  this.left) 
                  && 
                  !(this.bot &&
                  this.right &&
                  this.top &&
                  this.left)     
        );
        }
      }
      
      let startI = 0;
      let startJ = 0;
    
      function findPath2() {
        let i = 1;
        let j = 1;
        //checkArray()
        
        this.isFinishPoint = function() {
            
           if(i === arrayMaze.length - 2 && j === arrayMaze[0].length - 2) {
            return true;
           }
           return false;       
        };
        
        let isRun = true;
        while(isRun) {
          //console.log(i , j);
        
          if(this.isFinishPoint()) {
          //console.log();
            return true;
          }
          if(!arrayMaze[i] || !arrayMaze[i][j]){
            const res = checkArray(startI, startJ);
            //console.log('bound', res);
            if(res){
              startI = res[0] -1;
              startJ = res[1] -1;
              i = res[0];
              j = res[1];
            } else{
              isRun = false
            }
          }else {
            const current = arrayMaze[i][j];
            //console.log(current);
            if(current.isWall){
              const res = checkArray(startI, startJ);
              //console.log('vall', res);
              if(res){
                startI = res[0] -1;
                startJ = res[1] -1;
                i = res[0];
                j = res[1];
              } else{
                console.log(startI, startJ);
                isRun = false
              }  
            } else if(!current.bot){
              current.bot = true;
              i = i + move.bot[0]; 
              j = j + move.bot[1];  
            } else if(!current.right){
              current.right = true;
              i = i + move.right[0];
              j = j + move.right[1];
            } else if(!current.top) {
              current.top = true;
              i = i + move.top[0];
              j = j + move.top[1];
            } else if(!current.left) {
              current.left = true;
              i = i + move.left[0];
              j = j + move.left[1];
            } else{
              const res = checkArray(startI, startJ);
              if(res){
                startI = res[0] -1;
                startJ = res[1] -1;
                i = res[0];
                j = res[1];
              } else{
              console.log(startI, startJ);
                isRun = false
              }            
            }         
          }      
        }   
        return false;   
      }
      
      
      function findPath(i, j, prevMove) {
       // console.log('find', i, j, prevMove);
       // console.log('dim', arrayMaze.length - 2, arrayMaze[0].length - 2, i, j);
        
        
        if(i === arrayMaze.length - 2 && j === arrayMaze[0].length - 2) {
          
         // console.log('done');
         // console.log('dim', arrayMaze.length - 2, arrayMaze[0].length - 2, i, j);
          return true;
        }
        if(!arrayMaze[i] || !arrayMaze[i][j]){
          return findPath(i - prevMove[0], j - prevMove[1], null);
        }
        const current = arrayMaze[i][j];
        if(current.isWall && prevMove) {
          return findPath(i - prevMove[0], j - prevMove[1], null);
        } else if(current.isWall && !prevMove){
          const res = checkArray(startI, startJ);
          if(res){
            return findPath(res[0], res[1]);
          }
          return false;
        }
        
        if(!current.bot){
          current.bot = true;
          return findPath(i + move.bot[0], j + move.bot[1], move.bot);  
        } else if(!current.right){
          current.right = true;
          return findPath(i + move.right[0], j + move.right[1], move.right);
        } else if(!current.top) {
          current.top = true;
          return findPath(i + move.top[0], j + move.top[1], move.top);
        } else if(!current.left) {
          current.left = true;
          return findPath(i + move.left[0], j + move.left[1], move.left);
        } else{
          const res = checkArray(startI, startJ);
          if(res){
            return findPath(res[0], res[1]);
          }
          return false    
        }
      }
      
      function checkArray(startI, startJ){
        for(let i = startI; i < arrayMaze.length; i++){
          for(let j = 0; j < arrayMaze.length; j++) {
            const current = arrayMaze[i][j];
            if(current.isVisitAndNotDone()){
              return [i, j];
            }
          }
        }
        return false;
      }
      //return findPath(1, 1);
      return findPath2();
    }
    