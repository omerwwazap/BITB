## Browser In The Browser (BITB) - Turkcell FastLogin/HızlıGiriş

BITB template for Turkcell's FastLogin/HızlıGiriş SSO service. Used in internal Phishing attacks as such it is designed to **NOT** be an exact copy of the real SSO.

### Information

- Detects Color Preference for the browser. Dark or Light
- Selection fix o prevent unnecessary selection for certain regions.
- CSS to use System Default Fonts instead of browser fallback fonts
- Has slight delay to the pop-up window as it appears.

### Demo

![Demo-BITB](ReadmeAssets/Fastlogin-Demo.gif)

### Original vs BITB

![RealvsFake](ReadmeAssets/RealvsFake.png)

### Detecting BITB

- **Dragging the Window**
  - Drag the window to the edge of the browser. If the window cannot escape the browser then it's not a real window.
  - ![Demo-Drag](ReadmeAssets/DraggingOutSide-Demo.gif)
- **Minimize / Close the Windows**
  - Minimize or Close button will not work as intended as CSS/JS doesn't have the functionality to mimic the actual action and since there is no open windows to close or minimize.
- **Maximize the Windows**
  - Maximize button will not work as intended as CSS/JS doesn't have the functionality to mimic the actual action.
  - ![Demo-Maximize](ReadmeAssets/Maximize-Demo.gif)
- **Resizing the Window**
  - This effect could be mimicked with CSS/JS but this repo doesn't have it.

### Using

- Simply add a backend service to the BITB to revice the inputs.

### Credits

- Web Template from: [Tech City Free Coming Soon Bootstrap Responsive Template](https://github.com/learning-zone/website-templates)
- Browser In The Browser (BITB) Repo: [mrd0x/BITB](https://github.com/mrd0x/BITB)
  - [Browser In The Browser (BITB) Attack](https://mrd0x.com/browser-in-the-browser-phishing-attack/)
- Also Check Out
  - [BITB - Framework](https://github.com/surya-dev-singh/BITB-framwork)
  - [Modern Phishing Tool With Advanced Functionality  - Hidden Eye](https://github.com/darkmidus/HiddenEye)
