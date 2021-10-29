module.exports = function() {
	return `
	local EntryPoint;
	if Inst[3] then
		if Stack[Inst[1]] then
			InstrPoint = InstrPoint + 1;
			EntryPoint = InstrPoint + InstrPoint;
			(function(...) return ... end)(EntryPoint)
		end
	else
		InstrPoint = InstrPoint + 1;
	end
	`
}
