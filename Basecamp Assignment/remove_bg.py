from PIL import Image
import sys
import math

def remove_background(input_path, output_path, tolerance=25):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # Assuming top-left pixel is background color
    bg_color = data[0]
    
    new_data = []
    for item in data:
        # Calculate color distance
        dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(item[:3], bg_color[:3])))
        
        # Also check if it's generally very dark, as the background is almost black
        is_dark = item[0] < 30 and item[1] < 35 and item[2] < 45
        
        if dist < tolerance or is_dark:
            # Full transparency
            new_data.append((item[0], item[1], item[2], 0))
        else:
            # Try to anti-alias edges slightly if it's somewhat close
            if dist < tolerance + 15:
                alpha = int(((dist - tolerance) / 15.0) * 255)
                new_data.append((item[0], item[1], item[2], alpha))
            else:
                new_data.append(item)
                
    img.putdata(new_data)
    
    # Crop it to the bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved {output_path} successfully!")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg.py <input> <output>")
        sys.exit(1)
    remove_background(sys.argv[1], sys.argv[2])
