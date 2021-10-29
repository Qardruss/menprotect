module.exports = function() {
	return `
	local Stk	= Stack;
	local Bamm2001 = "LOCAL";
	local Bamm2002 = "PRINT";
	local Bamm2003 = "< fake lrrr()";
	
	for Idx = Inst[1], Inst[2] do
		Stk[Idx]	= nil;
	end;
	`
}
