module.exports = function() {
    return `
    Stack[Inst[1]]	= Const[Inst[2] + 1];
    local vmstack = {stack=Stack,const=Const};
    `
}
