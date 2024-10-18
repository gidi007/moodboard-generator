'use client'

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Palette, Type, Download, Share2, Plus, Upload } from 'lucide-react';

export default function MoodboardGenerator() {  // Changed to function declaration
  const [theme, setTheme] = useState('')
  const [moodboard, setMoodboard] = useState({
    images: [],
    colors: [],
    fonts: ['Playfair Display', 'Roboto', 'Open Sans']
  })
  const [isDragging, setIsDragging] = useState(false)
  // Function to extract dominant colors from an image
  const extractColors = async (imageUrl: string) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const colorMap = {};
        
        // Sample pixels at regular intervals
        for (let i = 0; i < imageData.length; i += 16) {
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];
          const rgb = `${r},${g},${b}`;
          colorMap[rgb] = (colorMap[rgb] || 0) + 1;
        }

        // Convert to hex and sort by frequency
        const colors = Object.entries(colorMap)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 4)
          .map(([rgb]) => {
            const [r, g, b] = rgb.split(',');
            return `#${((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1)}`;
          });

        resolve(colors);
      };
      img.src = imageUrl;
    });
  };

  const handleFiles = async (files: any) => {
    const newImages: string[] = [];
    const newColors = new Set(moodboard.colors);

    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        newImages.push(imageUrl);

        // Extract colors from the image
        const colors = await extractColors(imageUrl);
        colors.forEach((color: any) => newColors.add(color));
      }
    }

    setMoodboard(prev => ({
      ...prev,
      images: [...prev.images, ...newImages],
      colors: [...newColors].slice(0, 8) // Limit to 8 colors
    }));
  };

  const handleDrop = useCallback((e: { preventDefault: () => void; dataTransfer: { files: any; }; }) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  }, []);

  const handleFileInput = (e: { target: { files: any; }; }) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleDragOver = useCallback((e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const exportBoard = () => {
    const boardData = {
      theme,
      ...moodboard
    };
    
    // Create JSON file and trigger download
    const dataStr = JSON.stringify(boardData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'moodboard.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Dynamic Moodboard Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Input
              type="text"
              placeholder="Enter theme or keywords..."
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="flex-grow"
            />
            <label className="cursor-pointer">
              <Input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileInput}
              />
              <Button variant="outline" asChild>
                <span>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Images
                </span>
              </Button>
            </label>
          </div>

          {/* Moodboard Grid */}
          <div
            className={`grid grid-cols-2 gap-4 p-6 mb-6 border-2 border-dashed rounded-lg transition-colors ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {moodboard.images.length === 0 ? (
              <div className="col-span-2 text-center py-12 text-gray-500">
                Drag and drop images here or use the upload button
              </div>
            ) : (
              moodboard.images.map((image, index) => (
                <div key={index} className="aspect-video relative group">
                  <img
                    src={image}
                    alt={`Moodboard image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
                </div>
              ))
            )}
          </div>

          {/* Color Palette */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Palette className="mr-2" />
              Color Palette
            </h3>
            <div className="flex flex-wrap gap-4">
              {moodboard.colors.map((color, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-lg shadow-sm mb-1"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-gray-600">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Font Suggestions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Type className="mr-2" />
              Font Suggestions
            </h3>
            <div className="flex flex-wrap gap-4">
              {moodboard.fonts.map((font, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-lg"
                >
                  {font}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={exportBoard} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
