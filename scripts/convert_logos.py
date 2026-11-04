import zipfile
import os
import re
import io
from PIL import Image, ImageOps

ZIP_PATH = "Logo For Website.zip"
OUT_DIR = os.path.join("public", "Stationary Design", "Logo for Website")
os.makedirs(OUT_DIR, exist_ok=True)

z = zipfile.ZipFile(ZIP_PATH)
entries = [f for f in z.infolist() if not f.is_dir()]
print(f"Found {len(entries)} files in {ZIP_PATH}")

MAX_DIM = 1800
QUALITY = 88

processed = 0
errors = []

for i, e in enumerate(entries, 1):
    try:
        raw_bytes = z.read(e.filename)
        img = Image.open(io.BytesIO(raw_bytes))
        
        # Transpose according to EXIF orientation
        img = ImageOps.exif_transpose(img)
        
        # Handle alpha / mode
        if img.mode in ('RGBA', 'LA') or ('transparency' in img.info):
            img = img.convert('RGBA')
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Scale if excessively large
        w, h = img.size
        if max(w, h) > MAX_DIM:
            scale = MAX_DIM / max(w, h)
            new_w, new_h = int(w * scale), int(h * scale)
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Clean file name
        base = os.path.splitext(os.path.basename(e.filename))[0]
        safe_base = re.sub(r'[^a-zA-Z0-9_\-\.\(\)\s]', '_', base).strip()
        out_filename = f"{safe_base}.webp"
        out_path = os.path.join(OUT_DIR, out_filename)
        
        # Save as high-quality WebP
        img.save(out_path, format="WEBP", quality=QUALITY, method=4)
        processed += 1
        
        if i % 25 == 0 or i == len(entries):
            print(f"[{i}/{len(entries)}] Processed: {out_filename} ({os.path.getsize(out_path)/1024:.1f} KB)")
            
    except Exception as err:
        print(f"Error processing {e.filename}: {err}")
        errors.append((e.filename, str(err)))

print("\n--- Summary ---")
print(f"Total entries: {len(entries)}")
print(f"Successfully converted: {processed}")
print(f"Errors: {len(errors)}")

# Check output directory
files = os.listdir(OUT_DIR)
total_size = sum(os.path.getsize(os.path.join(OUT_DIR, f)) for f in files)
print(f"Total WebP files in output dir: {len(files)}")
print(f"Total directory size: {total_size / (1024*1024):.2f} MB")

