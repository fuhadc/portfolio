#!/usr/bin/env python3
"""
Convert SVG files to JPG format for Open Graph images
Requires: pip install cairosvg pillow
"""

import os
import sys
from pathlib import Path

try:
    import cairosvg
    from PIL import Image
    import io
except ImportError:
    print("❌ Required packages not found. Installing...")
    print("Run: pip install cairosvg pillow")
    sys.exit(1)

def convert_svg_to_jpg(svg_path, jpg_path, width=None, height=None):
    """Convert SVG to JPG with specified dimensions"""
    try:
        # Convert SVG to PNG first
        png_data = cairosvg.svg2png(
            url=svg_path,
            output_width=width,
            output_height=height
        )
        
        # Convert PNG to JPG
        png_image = Image.open(io.BytesIO(png_data))
        
        # Convert RGBA to RGB for JPG
        if png_image.mode == 'RGBA':
            rgb_image = Image.new('RGB', png_image.size, (255, 255, 255))
            rgb_image.paste(png_image, mask=png_image.split()[-1])
            png_image = rgb_image
        
        # Save as JPG
        png_image.save(jpg_path, 'JPEG', quality=95, optimize=True)
        return True
        
    except Exception as e:
        print(f"❌ Error converting {svg_path}: {e}")
        return False

def main():
    """Convert all SVG files to JPG"""
    public_dir = Path("public")
    svg_files = [
        ("og-image.svg", "og-image.jpg", 1200, 630),
        ("profile-image.svg", "profile-image.jpg", 400, 400),
        ("publications-og.svg", "publications-og.jpg", 1200, 630),
        ("projects-og.svg", "projects-og.jpg", 1200, 630),
        ("contact-og.svg", "contact-og.jpg", 1200, 630),
    ]
    
    print("🎨 Converting SVG files to JPG...")
    
    success_count = 0
    for svg_file, jpg_file, width, height in svg_files:
        svg_path = public_dir / svg_file
        jpg_path = public_dir / jpg_file
        
        if not svg_path.exists():
            print(f"⚠️  SVG file not found: {svg_path}")
            continue
            
        if convert_svg_to_jpg(svg_path, jpg_path, width, height):
            print(f"✅ Created {jpg_file} ({width}x{height})")
            success_count += 1
        else:
            print(f"❌ Failed to create {jpg_file}")
    
    print(f"\n✨ Conversion complete! {success_count}/{len(svg_files)} files created successfully.")
    
    if success_count == len(svg_files):
        print("🎉 All Open Graph images are ready!")
        print("📁 Files created in public/ directory:")
        for _, jpg_file, _, _ in svg_files:
            print(f"   - {jpg_file}")

if __name__ == "__main__":
    main()
