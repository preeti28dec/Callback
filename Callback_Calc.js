var calc= function (X,Y,calcType){
    if (calcType=="add"){
        return X+Y;
    }
    else if(calcType =="multiply"){
        return X*Y;
    }
 }
 console.log(calc(2,3,"add"));
 console.log(calc(2,3,"multiply"));