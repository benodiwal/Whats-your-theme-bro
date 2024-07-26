local M = {}

---@return nil
function M.setup()
    vim.cmd("command! RandomThemeChange lua require('wytb.core').apply_theme()")
end

return M
