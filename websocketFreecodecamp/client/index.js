const sokcet = io("http://localhost:3000");
console.log(sokcet);

// connect event
sokcet.on("connect", (res) => {
  console.log(res);
  
});

// message event
sokcet.on("messgae",(data)=>{
    console.log(data);
    
})