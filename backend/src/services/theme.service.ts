import { attach } from 'neovim';

class ThemeService {
    static async change() {
        try {
            const nvim = attach({ socket: '/run/user/1000/nvim.682832.0' });
            await nvim.command('RandomThemeChange');
            nvim.quit();
        } catch (error) { 
            console.error('Error sending command: ', error);
        }
    }
}

export default ThemeService;
