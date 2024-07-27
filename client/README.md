# Whats your theme bro ?

## **How to add this plugin to Neovim**:  
```
$ git clone git@github.com:benodiwal/Whats-your-theme-bro.git
```

1. **Using packer**:

 Add this code inside packer.lua in your configration:
 ```lua
   use {
       'path/to/cloned/repo/client',
        config = function ()
                require("wytb").setup()
        end
    }
 ```

## **Usage**

- User Command to change the theme to a random one **manually**

```bash
:RandomThemeChange
```
- The theme also changes whenever you text someone on **WhatsApp**, so no command is needed for that. 😊
