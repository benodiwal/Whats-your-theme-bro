local theme_file = vim.fn.stdpath('data') .. '/themes.txt'

local function load_saved_theme()
    local file = io.open(theme_file, "r")
    if file then
        local saved_theme = file:read("*a"):gsub("%s+$", "")
        print(saved_theme)
        file:close()
        
        vim.cmd("colorscheme " .. saved_theme)
    end
end

load_saved_theme()
