# 🎨 Dynamic Moodboard Generator

<div align="center">
  <img src="/api/placeholder/1200/400" alt="Moodboard Generator Banner" />

  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![Next.js](https://img.shields.io/badge/Next.js-13.0-black)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue)](https://tailwindcss.com/)
  [![React](https://img.shields.io/badge/React-18.0-61dafb)](https://reactjs.org/)
</div>

## ✨ Features

🖼️ **Dynamic Image Generation**
- Real-time image fetching from Unsplash API
- Drag-and-drop image upload support
- Multiple image selection and management

🎨 **Smart Color Extraction**
- Automatic color palette generation from images
- Dominant color detection
- Real-time palette updates

📱 **Modern UI/UX**
- Responsive design for all devices
- Intuitive drag-and-drop interface
- Real-time visual feedback
- Loading states and animations

🔄 **Integration Ready**
- Export to JSON format
- Compatible with design tools
- Shareable moodboards

## 🚀 Demo

Check out the live demo: [Moodboard Generator Demo](https://your-demo-link.com)

<div align="center">
  <img src="/api/placeholder/800/400" alt="Demo GIF" />
</div>

## 💻 Technologies Used

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Image API**: [Unsplash API](https://unsplash.com/developers)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/gidi007/moodboard-generator.git
cd moodboard-generator
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 📖 Usage Guide

### 🎯 Creating a Moodboard

1. **Search for Images**
   - Enter keywords in the search bar
   - Click "Generate" to fetch related images
   - Select images from the results grid

2. **Upload Custom Images**
   - Click the upload button or drag-and-drop
   - Supports multiple image upload
   - Automatic color extraction from uploads

3. **Manage Your Board**
   - Rearrange images by drag-and-drop
   - Remove images by clicking the remove button
   - View extracted color palette
   - Check suggested fonts

4. **Export & Share**
   - Click "Export" to download as JSON
   - Use "Share" to generate a shareable link
   - Compatible with design tools

## 🔧 Configuration

### Unsplash API Setup

1. Register at [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application
3. Copy your Access Key
4. Add to your environment variables

### Customization

```javascript
// tailwind.config.js
module.exports = {
  // Your custom Tailwind configuration
}
```

## 📱 Responsive Design

The application is fully responsive and works on:
- 💻 Desktop devices (1024px and above)
- 📱 Tablet devices (768px to 1023px)
- 📱 Mobile devices (320px to 767px)

## ⚡ Performance

- Optimized image loading
- Efficient color extraction
- Minimal re-renders
- Lazy loading of components
- Debounced API calls

## 🤝 Contributing

Contributions are always welcome! See `CONTRIBUTING.md` for ways to get started.

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Unsplash](https://unsplash.com/) for the image API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Vercel](https://vercel.com/) for hosting
- All the amazing [contributors](https://github.com/gidi007/moodboard-generator/contributors)

## 📧 Contact

Gideon Bawa - [@yourtwitter](https://twitter.com/KierianTirian) - kieriantirian@gmail.com |

Project Link: [https://github.com/gidi007/moodboard-generator](https://github.com/gidi007/moodboard-generator)

---

<div align="center">
  Made with ❤️ by [Gideon Bawa || gidi007]
</div>