// Code your solution in this file!

const hq =42;

function distanceFromHqInBlocks(blockNumber){
    if (blockNumber < hq){
        return  hq - blockNumber;
    }
    else {
        if(blockNumber > hq){
            return blockNumber - hq;
        }
        else {
            if (blockNumber === hq){
                return 0
            }
        }
    }
}
    function distanceFromHqInFeet(blockNumber){
        if (blockNumber < hq){
        return (hq - blockNumber)*264 
        }
        else {
            if (blockNumber > hq){
                return (blockNumber - hq)*264
            }
        else {
            if (blockNumber === hq){
                return 0
            }
        }
     }
  }
     const blockFeet = 264;

    function distanceTravelledInFeet(start,finish){
        if (start > finish ){
          return (start - finish)*264;
        }
        else {
          if (start < finish){
              return(finish - start)*264;
          } 
          else {
              if (start === finish){
                  return 0
              }
          }
        }
    }

      const flatRate = 25;

    function calculatesFarePrice(start,finish){
        const flatRate = 25;
        if (distanceTravelledInFeet(start,finish) < 400){
            return 0;
        }
        else {
            if (distanceTravelledInFeet(start,finish) < 2000){ 
            return (distanceTravelledInFeet(start,finish) -400) * 0.02;
        }  
       else { 
           if ( 2000 < distanceTravelledInFeet(start,finish) && distanceTravelledInFeet(start,finish) < 2500){
               return (flatRate);
           }
           else {
               if (distanceTravelledInFeet(start,finish) >= 2500){
                   return ("cannot travel that far"); 
               }
           }
        }

    }  
        
 }