//1
    let x=0;
    let currentDay=new Date().getDay();
    switch (currentDay)
        {
        case 0:
            x="Today it's Sunday";
            break;
        case 1:
            x="Today it's Monday";
            break;   
        case 2:
            x="Today it's Tuesday";
            break;
        case 3:
            x="Today it's Wednesday";
            break;
        case 4:
            x="Today it's Thursday";
            break;
        case 5:
            x="Today it's friday";
            break;
        case 6:
            x="Today it's Saturday";
            break;
        }
         console.log(x);
//2
      
        let str = '';
        for (let i = 0; i < 100; i++) {
        str = str + i;
        }
        console.log(str);

 //3       
        let i= 0;
        while (i < 50) {
        i++;
        console.log(i);
        }

 //4       
        let n=0;
        do {
        n ++;
        console.log(n);
        }
         while (n < 150);
  //5    
        let array1=[];
        while (i < 10000) {
        i++;
        array1.push(i * i);
        console.log(array1);
        }
 
 


 
