module.exports = function() {
	return `
	local Stk	= Stack;
	local B		= Inst[2];
	local K 	= Stk[B];
	local T     = {a="Uara",b="Uarc",c="Uarb"}
	
	for Idx = B + 1, Inst[3] do
		K = K .. Stk[Idx];
	end;
	for idk in pairs(T) do T = T end
	
	Stack[Inst[1]]	= K;
	`
}
