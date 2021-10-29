module.exports = {
    addon: `function wait(seconds)
    local start = os.time()
    repeat until os.time() > start + seconds
end`,
    static: `wait(1)`
}