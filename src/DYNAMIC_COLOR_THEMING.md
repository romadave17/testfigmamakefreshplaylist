# Dynamic Color Theming System (DARK_BACKGROUNDS Logic)

## Overview
Implemented: November 26, 2025

This system automatically adjusts text and logo colors based on the selected background color to ensure optimal readability and brand consistency across all Instagram Story (1080x1920) and Social Post (1080x1920) templates.

## Color Rules

### Black Text & Logo
Applied when background is **light/bright**:
- **Yellow** (#FFD000)
- **Orange** (#FF8000)
- **Lime** (#B7EF00)
- **Cyan** (#25D1DA)

### White Text & Logo
Applied when background is **dark/saturated**:
- **Red** (#FF2C2C)
- **Violet** (#C400F5)
- **Pink** (#F83EDA)
- **Indigo** (#5032FF)

## Implementation Details

### File: `/components/PlaylistCustomizer.tsx`
```typescript
const DARK_BACKGROUNDS = ['yellow', 'orange', 'lime', 'cyan'];
const shouldUseBlackText = DARK_BACKGROUNDS.includes(selectedColor);
```

### File: `/components/TemplateRenderer.tsx`
The `useBlackText` prop controls ALL color switching via CSS overrides:

#### Affected Elements:
1. **Logo/Smile Icon** (`[data-name="Smile Only"]`)
2. **Amazon Music Logotype** (`[data-name="AM Logotype"]`, `[data-name="RD4 Master Logo"]`)
3. **Instagram Story Text** (`[data-name="Copy"]`, `[data-name="Event Name-Headline"]`)
4. **Social Post Text** (`[data-name="Container"]` artist/single names)
5. **Playlist Titles** (`[data-name*="Title"]`)
6. **"Only on" text** in Amazon Music logo
7. **Amazon logo SVG paths** (`[data-name="Vector"]`, `[data-name="Amazon_Master_RD4"]`)

#### CSS Override Logic:
```css
/* Logo colors */
[data-name="Smile Only"] path {
  fill: ${useBlackText ? '#000000' : '#FFFFFF'} !important;
}

/* Text colors */
[data-name="Copy"] p {
  color: ${useBlackText ? '#000000' : '#FFFFFF'} !important;
}
```

## Key Changes Made

### Before Fix:
- ❌ Text/logo colors were hardcoded in template files
- ❌ Country playlist showed white text on yellow background (poor readability)
- ❌ Inconsistent behavior across color selections
- ❌ Used `logoColor` prop separately from `useBlackText`

### After Fix:
- ✅ Unified `useBlackText` logic controls both text AND logo colors
- ✅ Dynamic switching based on `DARK_BACKGROUNDS` array
- ✅ Country playlist now correctly shows black text on yellow/orange backgrounds
- ✅ Cyan background correctly shows black text (was previously white)
- ✅ All 17 playlists follow consistent color rules
- ✅ **Amazon Music logo** (including "Only on" text and SVG paths) switches colors correctly

### Amazon Music Logo Fix (November 26, 2025):
The Amazon Music logo at the bottom of 1080x1920 templates consists of three parts:
1. **"Only on" text** - Previously hardcoded as `text-white` or `text-black`
2. **"amazon music" text** (SVG paths) - Previously using `fill="var(--fill-0, white)"` or `fill="var(--fill-0, black)"`
3. **Smile icon** (SVG paths) - Already handled by existing logic

**Solution:** Added comprehensive CSS overrides targeting:
- `[data-name="Amazon Music Logotype"] p` for "Only on" text
- `[data-name="Vector"] path` and `[data-name="Amazon_Master_RD4"] path` for logo SVG
- Attribute selectors for `svg path[fill="var(--fill-0, white)"]` and `svg path[fill="var(--fill-0, black)"]`

This ensures ALL parts of the logo switch between black and white based on the background color.

## Affected Templates

### Instagram Story (1080x1920)
All 17 playlists × 1 story template = **17 files**

### Social Post (1080x1920)
All 17 playlists × 1 social template = **17 files**

**Total: 34 templates** dynamically controlled by this system

## Testing Checklist

To verify the Dynamic Color Theming System is working:

1. ✅ Select **Country** playlist → Choose **Yellow** → Verify BLACK text/logo
2. ✅ Select **Country** playlist → Choose **Orange** → Verify BLACK text/logo
3. ✅ Select **EDM** playlist → Choose **Cyan** → Verify BLACK text/logo
4. ✅ Select **Fresh Pop** playlist → Choose **Pink** → Verify WHITE text/logo
5. ✅ Select **Fresh Pop** playlist → Choose **Violet** → Verify WHITE text/logo
6. ✅ Select **Rock** playlist → Choose **Red** → Verify WHITE text/logo
7. ✅ Select **Jazz** playlist → Choose **Indigo** → Verify WHITE text/logo

## Future Modifications

If you need to adjust which colors use black vs white text:

1. **Add/remove colors** from `DARK_BACKGROUNDS` array in `/components/PlaylistCustomizer.tsx`
2. **No template file changes needed** - the system is fully dynamic via CSS
3. All 34 templates will automatically update when color rules change

## Related Documentation
- `/PLAYLIST_FILE_MAPPING.md` - Template file mapping reference
- `/components/PlaylistCustomizer.tsx` - Color definitions and logic
- `/components/TemplateRenderer.tsx` - CSS override implementation