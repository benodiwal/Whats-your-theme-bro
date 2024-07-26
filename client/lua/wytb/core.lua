local M = {}

M.themes = {"gruvbox", "nord", "solarized", "onedark", "dracula"}

---@return string theme The name of randomly selected theme
function M.get_random_theme()
    math.randomseed(os.time())
    local index = math.random(#M.themes)
    return M.themes[index]
end

---@return nil
function M.apply_theme()
    local theme = M.get_random_theme()
    vim.cmd("colorscheme" .. theme)
    print("Theme changes to: " .. theme)
end

---@return nil
function M.setup()
    M.apply_theme()
end

return M
