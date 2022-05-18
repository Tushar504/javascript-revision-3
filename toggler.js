let count=0;
function toggler() {
   
    return ()=>{
          let key=count.toString()
        
          if(arguments[key]==undefined){
              count=0;
              key=count.toString()
          }
           console.log(arguments[key])
           count++

    }
}

const toggle = toggler(1,2,3,4)

toggle()
// 1
toggle()
// 2
toggle()
// 3
