let friends=['Bo','Ed','Ty','Di','Al'],n,L='lines of code',I=`${L} in the file`,s='strikes one out, clears it all out'
let c=(t)=>console.log(t),l=(f)=>{while(n>1){c(`${n} ${I}, ${n} ${L}; ${f} ${s}, ${--n} ${I}.`)}}
friends.forEach(f=>{c(`${f}:\n`);n=99;c(l(f));c(`1 line of code in the file, 1 line of code; ${f} ${s}, no more lines of code in the file!\n\n`)})