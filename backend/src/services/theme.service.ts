import { exec } from "child_process";

class ThemeService {
    change() {
        const cmd = 'vim --headless -c "RandomThemeChange"';
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`Stdout: ${stdout}`);
        })
    }
}

const themeService = new ThemeService();
export default themeService;
