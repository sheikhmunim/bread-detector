import os
import shutil

# Define your bread types here
bread_types = ["pane_di_casa", "ciabatta", "sour"]  # Example, removed 'sourdough'

# Define the dataset splits
splits = ["train", "val", "test"]

# Base data directory
base_dir = "../data"

for split in splits:
    split_path = os.path.join(base_dir, split)

    # Ensure the split folder exists
    os.makedirs(split_path, exist_ok=True)

    # List all existing bread type folders inside the split folder
    existing_folders = [
        folder for folder in os.listdir(split_path)
        if os.path.isdir(os.path.join(split_path, folder))
    ]

    # Remove folders not in bread_types list
    for folder in existing_folders:
        if folder not in bread_types:
            folder_path = os.path.join(split_path, folder)
            shutil.rmtree(folder_path)
            print(f"Removed: {folder_path}")

    # Create missing folders
    for bread in bread_types:
        bread_path = os.path.join(split_path, bread)
        os.makedirs(bread_path, exist_ok=True)
        print(f"Ensured exists: {bread_path}")

print("Folder sync complete ")
