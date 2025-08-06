"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import ColorPicker from "./color-picker";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";

export default function ImageUpload() {
  const [startColor, setStartColor] = useState("#2373a4");
  const [endColor, setEndColor] = useState("#be3c3c");
  const [zoom, setZoom] = useState(100);
  const [transparency, setTransparency] = useState(100);
  const [borderRadius, setBorderRadius] = useState(0);
  const [shadow, setShadow] = useState(0);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* left sidebar */}
      <div className="w-64 p-4 bg-white overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Background</h2>
        <ColorPicker
          label="Start Color"
          color={startColor}
          onChange={setStartColor}
        />
        <ColorPicker
          label="End Color"
          color={endColor}
          onChange={setEndColor}
        />
        <h2 className="text-lg font-semibold mb-4 mt-8">Image Adjustments</h2>
        <div className="space-y-4">
          <div>
            <Label>Zoom: {zoom}</Label>
            <Slider
              min={50}
              max={120}
              step={1}
              value={[zoom]}
              onValueChange={(value) => setZoom(value[0])}
            />
          </div>
          <div>
            <Label>Transparency: {transparency}%</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[transparency]}
              onValueChange={(value) => setTransparency(value[0])}
            />
          </div>
          <div>
            <Label>BorderRadius: {borderRadius}px</Label>
            <Slider
              min={0}
              max={50}
              step={1}
              value={[borderRadius]}
              onValueChange={(value) => setBorderRadius(value[0])}
            />
          </div>
          <div>
            <Label>Shadow: {shadow}px</Label>
            <Slider
              min={0}
              max={50}
              step={1}
              value={[shadow]}
              onValueChange={(value) => setShadow(value[0])}
            />
          </div>
        </div>
      </div>

      {/* image preview */}
      <div className="flex-1 p-8">
        <div
          style={{
            aspectRatio: "16 / 9",
            backgroundImage: `linear-gradient(to top right, ${startColor}, ${endColor})`,
          }}
        >
          <h1>Image</h1>
        </div>
        <div className="flex mt-4 justify-end">
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}
