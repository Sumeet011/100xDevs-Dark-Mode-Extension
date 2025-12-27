# 100xDevs Dark Mode Extension

A beautiful dark mode browser extension specifically designed for [harkirat.classx.co.in](https://harkirat.classx.co.in) - the 100xDevs learning platform.

## Features

- 🌙 **Elegant Dark Theme** - Carefully crafted dark mode with proper contrast and colors
- 🎨 **Smooth Transitions** - All elements transition smoothly between states
- 💙 **Accent Colors** - Beautiful blue, purple, and green accent colors for better UX
- 🖼️ **Image Enhancement** - Automatically adjusts images for better visibility
- ⚡ **Dynamic Content** - Handles dynamically loaded content seamlessly
- 🎯 **Hover Effects** - Enhanced hover states for interactive elements
- 📱 **Responsive** - Works perfectly on all screen sizes

## Installation Instructions

### For Chrome/Edge/Brave

1. **Download the Extension**
   - Download or clone this repository to your computer
   - Unzip if needed

2. **Open Extensions Page**
   - Chrome: Navigate to `chrome://extensions/`
   - Edge: Navigate to `edge://extensions/`
   - Brave: Navigate to `brave://extensions/`

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the Extension**
   - Click "Load unpacked" button
   - Browse to and select the `Extension` folder (where manifest.json is located)

5. **Done!**
   - Visit [harkirat.classx.co.in](https://harkirat.classx.co.in)
   - The dark mode should be automatically applied

## How It Works

The extension uses:
- **manifest.json** - Defines the extension configuration and permissions
- **dark-mode.css** - Contains all the dark mode styles with CSS variables
- **content.js** - JavaScript that enhances the dark mode experience and handles dynamic content

## Color Palette

- **Background Primary**: `#0d1117` (Dark navy)
- **Background Secondary**: `#161b22` (Slightly lighter)
- **Background Card**: `#21262d` (Card backgrounds)
- **Text Primary**: `#e6edf3` (Almost white)
- **Text Secondary**: `#8b949e` (Muted gray)
- **Accent Blue**: `#58a6ff` (Primary actions)
- **Accent Purple**: `#bc8cff` (Hover states)
- **Accent Green**: `#3fb950` (Success/prices)

## Customization

You can customize the dark mode by editing `dark-mode.css`:

1. Find the `:root` section at the top
2. Modify the CSS variables to your preferred colors
3. Save the file
4. Reload the extension in your browser

## Troubleshooting

### Extension not working?
- Make sure you've enabled Developer Mode
- Verify the extension is enabled in your extensions page
- Try reloading the page
- Check the browser console for any errors

### Some elements still appear light?
- Try hard refreshing the page (Ctrl+Shift+R or Cmd+Shift+R)
- The extension handles dynamic content, but some elements might need a moment

### Want to adjust colors?
- Edit the CSS variables in `dark-mode.css`
- Reload the extension after making changes

## Browser Compatibility

- ✅ Google Chrome (v88+)
- ✅ Microsoft Edge (v88+)
- ✅ Brave Browser
- ✅ Any Chromium-based browser supporting Manifest V3

## Contributing

Feel free to fork this repository and make improvements! Some ideas:
- Add a toggle button to enable/disable dark mode
- Create alternative color themes
- Improve specific element styling
- Add support for other websites

## License

Free to use and modify for personal use.

## Credits

Created for the 100xDevs community by GitHub Copilot.

---

**Note**: This extension only works on harkirat.classx.co.in. It doesn't collect any data or require any special permissions beyond accessing the website.
