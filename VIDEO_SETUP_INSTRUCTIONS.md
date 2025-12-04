# Video Setup Instructions

This guide will help you add your YouTube videos and Google Drive 1-on-1 session recordings to the DeepLearners portfolio website.

## YouTube Videos Setup

### Step 1: Get YouTube Video IDs

1. Go to your YouTube video
2. The URL will look like: `https://www.youtube.com/watch?v=ABC123XYZ`
3. The video ID is the part after `v=` (in this example: `ABC123XYZ`)

### Step 2: Update the Code

In the file `app/page.tsx`, find the YouTube Videos Section (around line 183) and replace:

```tsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
```

With:

```tsx
src="https://www.youtube.com/embed/ABC123XYZ"
```

Do this for all three video placeholders (YOUR_VIDEO_ID_1, YOUR_VIDEO_ID_2, YOUR_VIDEO_ID_3).

### Step 3: Update Video Titles and Descriptions

Replace the placeholder text:
- `Lecture Title 1` → Your actual video title
- `Description of the lecture topic` → Brief description of what the video covers

### Step 4: Update YouTube Channel Link

Find this line (around line 251):
```tsx
href="https://www.youtube.com/@your-channel"
```

Replace `your-channel` with your actual YouTube channel handle.

---

## Google Drive 1-on-1 Sessions Setup

### Step 1: Get Google Drive File IDs

1. Upload your video to Google Drive
2. Right-click the video → Share → Change to "Anyone with the link"
3. Click "Copy link"
4. The URL will look like: `https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing`
5. The file ID is the part between `/d/` and `/view` (in this example: `1ABC123XYZ456`)

### Step 2: Update the Code

In the file `app/page.tsx`, find the 1-on-1 Sessions Section (around line 262) and replace:

```tsx
src="https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID_1/preview"
```

With:

```tsx
src="https://drive.google.com/file/d/1ABC123XYZ456/preview"
```

Do this for all three session placeholders (YOUR_DRIVE_FILE_ID_1, YOUR_DRIVE_FILE_ID_2, YOUR_DRIVE_FILE_ID_3).

### Step 3: Update Session Titles and Descriptions

Replace the placeholder text:
- `Session Topic 1` → Your actual session topic
- `Real client problem-solving session` → Brief description of the session

---

## Testing Your Changes

After making the updates:

1. Save the file
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in your browser
4. Scroll to the videos sections to verify the embeds are working

---

## Troubleshooting

### YouTube Video Not Showing
- Make sure the video is not private
- Check that you copied the video ID correctly (it's usually 11 characters)

### Google Drive Video Not Showing
- Make sure the video is shared with "Anyone with the link"
- The file must be a video file (not a folder)
- Check that you copied the file ID correctly

---

## Adding More Videos

To add more than 3 videos in each section, copy one of the existing video card blocks and paste it within the same grid container. For example:

```tsx
{/* YouTube Video 4 */}
<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
  <div className="aspect-video bg-dark-wood-light rounded-lg mb-4 overflow-hidden">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID_4"
      title="YouTube video 4"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
  <h3 className="text-lg font-bold text-dark-wood mb-2">Lecture Title 4</h3>
  <p className="text-sm text-dark-wood-light">Description of the lecture topic</p>
</div>
```

The grid will automatically adjust to display multiple videos in a responsive layout.
