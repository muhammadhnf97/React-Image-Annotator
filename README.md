# React Image Annotator

This repository contains a React.js application designed for image annotation. The application works by accepting a JSON input that carries an image URL along with start and end coordinates for annotation.

## Features

- **Dynamic Image Annotation**: Allows users to annotate images directly if the start and end coordinates are not provided.
- **Pre-defined Annotations**: Automatically applies annotations if start and end coordinates are provided in the JSON input.
- **User-Friendly Interface**: Provides an easy-to-use interface for annotating images.

## How It Works

1. **JSON Input**: The application accepts a JSON input with the following structure:
    ```json
    {
      "imageUrl": "http://example.com/image.jpg",
      "startCoordinate": { "x": 100, "y": 150 },
      "endCoordinate": { "x": 200, "y": 250 }
    }
    ```
    - `imageUrl`: The URL of the image to be annotated.
    - `startCoordinate`: The starting coordinate of the annotation. If null, annotation can be applied manually.
    - `endCoordinate`: The ending coordinate of the annotation. If null, annotation can be applied manually.

2. **Annotation Logic**:
    - If `startCoordinate` and `endCoordinate` are null, the user can annotate the image manually using the provided tools.
   