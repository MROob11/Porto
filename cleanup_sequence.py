
import os
import glob

# Configuration
SEQUENCE_DIR = "public/sequence"
FRAME_COUNT = 192
STEP = 6

def cleanup_images():
    print(f"Cleaning in {SEQUENCE_DIR}...")
    
    # Calculate which frames to KEEP
    # Logic matches useCanvasScale.ts: for (let i = 1; i <= frameCount; i += step)
    keep_indices = set(range(1, FRAME_COUNT + 1, STEP))
    
    deleted_count = 0
    kept_count = 0
    total_size_saved = 0
    
    for i in range(1, FRAME_COUNT + 1):
        filename = f"ezgif-frame-{str(i).zfill(3)}.jpg"
        filepath = os.path.join(SEQUENCE_DIR, filename)
        
        if not os.path.exists(filepath):
            continue
            
        if i in keep_indices:
            # KEEP
            kept_count += 1
            # print(f"Keeping: {filename}")
        else:
            # DELETE
            try:
                size = os.path.getsize(filepath)
                os.remove(filepath)
                deleted_count += 1
                total_size_saved += size
                # print(f"Deleted: {filename}")
            except Exception as e:
                print(f"Error deleting {filename}: {e}")

    print("-" * 30)
    print("DONE!")
    print(f"Kept Files:    {kept_count}")
    print(f"Deleted Files: {deleted_count}")
    print(f"Space Saved:   {total_size_saved / 1024 / 1024:.2f} MB")

if __name__ == "__main__":
    cleanup_images()
