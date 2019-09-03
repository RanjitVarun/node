const repl=require("repl");
const msg="hello";
// repl.start(">").context.m=msg;
// repl.start("<").context.m=msg;

const msd="dhoni";
const r=repl.start(">");
Object.defineProperty(r.context,"m",{
    configurable:false,
    enumerable:true,
    value:msd
})



