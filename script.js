var tl = gsap.timeline(
     {
     scrollTrigger:{
     trigger:'.two',
     start:"0% 95%",
     end:"50% 50%",
     scrub:true,
     // markers :true,
     
}})
tl.to("#fanta",{
     y:'110%',
     x:'-100%',
},"orange")
tl.to("#orange2",{
     y:'65vw',
     x:'-110%',
},"orange")
tl.to("#orange1",{
     y:'46vw',
     x:'80%',
},"orange")
tl.to("#leaf",{
     y:'22vw',
     x:'74vw',
     rotate:'250deg'
},"orange")
tl.to("#cocoTree",{
     y:'78vw',
     x:'-89vw',
     rotate:'180deg'
},"orange")


var t2 = gsap.timeline(
     {
     scrollTrigger:{
     trigger:'.three',
     start:"0% 95%",
     end:"50% 50%",
     scrub:true,
     markers :true,
}})
t2.from('#org2',{
     x:'-50vw',
     y:'80vw',
     rotate:'250deg'
     
},'org')
t2.from('#lemon',{
     x:'50vw',
     y:'-80%',
     rotate:'250deg'
     
},'org')
t2.from('#pepsi',{
     x:'50vw',
     // y:'-80vw',
     rotate:'250deg'
     
},'org')
t2.from('#cock',{
     x:'-50vw',
     // y:'-80vw',
     rotate:'250deg'
     
},'org')
t2.to('#fanta',{
     x:'2%',
     y:'270%',
     width:'280px',
          
},'org')
t2.to('#orange2',{
     y:'90vw',
     x:'45%',
     scale:1.6,
     rotate:'120deg'
     
},'org')