# Amazon Ember Font Files

This directory contains the Amazon Ember font family used throughout the Amazon Music Template Customizer.

## Font Files

- **AmazonEmber_Regular.ttf** - Regular weight (400)
- **AmazonEmber_Bold.ttf** - Bold weight (700)
- **AmazonEmber_Medium.ttf** - Medium weight (500)

## CDN Configuration

These fonts are configured to load exclusively from jsDelivr CDN for consistent rendering across all platforms. The fonts are loaded in `/styles/globals.css` using @font-face declarations.

### Font Loading Strategy

1. **CDN-Only Loading** - Fonts load exclusively from GitHub via jsDelivr (no local() checks)
2. **System Fallback** - Falls back to system sans-serif fonts if CDN is unavailable
3. **No Helvetica** - Helvetica has been removed from the fallback chain to ensure clean typography

## Font Family Configuration

The system uses a **single, clean font-family naming convention**:

### Amazon Ember (Standard - Three Weight Variants)

```css
/* Regular Weight - 400 */
@font-face {
  font-family: 'Amazon Ember';
  src: url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Bold Weight - 700 */
@font-face {
  font-family: 'Amazon Ember';
  src: url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Medium Weight - 500 */
@font-face {
  font-family: 'Amazon Ember';
  src: url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
```

### CSS Root Font Family (Line 36 in globals.css)

```css
:root {
  --font-family: 'Amazon Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Arial', sans-serif;
}
```

**Note:** Helvetica has been intentionally removed from the fallback chain.

## Usage in Templates

### ✅ MODERN APPROACH (Target State - In Progress)

All templates are being migrated to use the clean Amazon Ember font family combined with Tailwind weight utility classes:

#### Bold Text (Font Weight 700)
```tsx
<div className="font-['Amazon_Ember'] font-bold">
  Bold heading text
</div>
```

#### Regular Text (Font Weight 400)
```tsx
<p className="font-['Amazon_Ember']">
  Regular paragraph text
</p>
```

#### Medium Text (Font Weight 500)
```tsx
<label className="font-['Amazon_Ember'] font-medium">
  Medium weight label
</label>
```

### ⚠️ LEGACY APPROACH (Being Phased Out)

Some templates still use the old Figma-exported font syntax. These are being systematically updated:

```tsx
/* OLD SYNTAX - Being replaced */
<h1 className="font-['Ember_Modern_Display_Standard:Bold',sans-serif]">
  Bold heading
</h1>

<p className="font-['Ember_Modern_Display_Standard:Regular',sans-serif]">
  Regular text
</p>
```

**Migration Status:** 27 of 89 templates updated (30% complete)

## Template File Structure

### Brazilian (BR) Locale - 33 Files
- ✅ 11 Fresh IG Story templates (1080x1920) - **COMPLETED**
- ✅ 11 Fresh Social XLarge templates (1080x1920) - **COMPLETED**
- ✅ 11 Fresh Tile templates (2400x2400) - **COMPLETED**
- ⏳ 11 TaPa IG Story templates (1080x1920) - Pending migration
- ⏳ 11 TaPa Social XLarge templates (1080x1920) - Pending migration
- ⏳ 11 TaPa Tile templates (2400x2400) - Pending migration

**BR Fresh Playlists (Genre-Specific):**
1. Eletrônica Brasil
2. Forró
3. Funk
4. Gospel
5. MPB
6. Pagode
7. Pop
8. Rap
9. Rap/Trap
10. Samba
11. Sertanejo

### US Locale - 51 Files
- ⏳ 17 IG Story templates (1080x1920) - Pending migration
- ⏳ 17 Social XLarge templates (1080x1920) - Pending migration
- ⏳ 17 Tile templates (2400x2400) - Pending migration

### Total: 84 Template Files

## Font Loading Behavior

The fonts will load in this order:

1. **CDN Available** → Downloads from jsDelivr at:
   ```
   https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Regular.ttf
   https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Bold.ttf
   https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Medium.ttf
   ```

2. **CDN Unavailable** → Falls back to system fonts:
   - -apple-system (macOS/iOS)
   - BlinkMacSystemFont (Chrome on macOS)
   - Segoe UI (Windows)
   - Roboto (Android)
   - Arial (Universal fallback)
   - sans-serif (Generic fallback)

## ✅ GitHub Repository Setup - VERIFIED

Your GitHub repository at:
```
https://github.com/romadave17/Testfigmamakefreshplaylist/tree/main/fonts/
```

Contains the correct font files:
- ✅ AmazonEmber_Regular.ttf (400 weight)
- ✅ AmazonEmber_Bold.ttf (700 weight)
- ✅ AmazonEmber_Medium.ttf (500 weight)

These files are correctly referenced in `/styles/globals.css` and served via jsDelivr CDN with automatic caching and global distribution.

## Font Syntax Migration Guide

### Before (Old Figma Export Syntax)
```tsx
// Old approach with embedded weight in font-family name
<div className="font-['Ember_Modern_Display_Standard:Bold',sans-serif]">
  Text content
</div>
```

### After (Modern Clean Syntax)
```tsx
// New approach with separate font-family and Tailwind weight class
<div className="font-['Amazon_Ember'] font-bold">
  Text content
</div>
```

### Benefits of Modern Syntax:
1. ✅ **Cleaner Code** - Separates font family from weight
2. ✅ **Tailwind Consistency** - Uses standard Tailwind utility classes
3. ✅ **Better Maintainability** - Easier to update weights globally
4. ✅ **No Underscores/Spaces Issues** - Avoids browser rendering inconsistencies
5. ✅ **Single Font Family** - Simpler @font-face configuration in CSS

## Critical Fixes Implemented

### ✅ Fix 1: Removed Helvetica from Fallback Chain
**Issue:** Helvetica was causing rendering inconsistencies across platforms.

**Solution:** Updated line 36 in `/styles/globals.css`:
```css
/* BEFORE */
--font-family: 'Amazon Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;

/* AFTER */
--font-family: 'Amazon Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Arial', sans-serif;
```

### ✅ Fix 2: CDN-Only Font Loading
**Issue:** `local()` references were causing inconsistent font rendering when system fonts had similar names.

**Solution:** Removed all `local()` references from @font-face declarations in `/styles/globals.css` to ensure consistent CDN loading.

### ✅ Fix 3: Font-Family Name Standardization
**Issue:** Tailwind's underscore-to-space conversion caused mismatches between CSS font-family declarations and template usage.

**Solution:** Using single clean `'Amazon Ember'` font-family with three weight variants (400, 500, 700) defined via font-weight property.

## Localization Features

### Brazilian Portuguese (BR)
- **"Disponível só no"** - Replaces "Only on" in Amazon Music branding
- **"com" instead of "feat."** - Brazilian artist collaboration syntax
- Genre-specific templates hardcode Portuguese genre names

### US English
- **"Only on"** - Standard Amazon Music branding
- **"feat."** - Standard artist collaboration syntax

## Template Coverage Overview

| Locale | Format | Dimensions | Files | Migration Status |
|--------|--------|------------|-------|------------------|
| BR Fresh | IG Story | 1080x1920 | 11 | ✅ Complete |
| BR Fresh | Social XLarge | 1080x1920 | 11 | ✅ Complete |
| BR Fresh | Tile | 2400x2400 | 11 | ✅ Complete |
| BR TaPa | IG Story | 1080x1920 | 11 | ⏳ Pending |
| BR TaPa | Social XLarge | 1080x1920 | 11 | ⏳ Pending |
| BR TaPa | Tile | 2400x2400 | 11 | ⏳ Pending |
| US | IG Story | 1080x1920 | 17 | ⏳ Pending |
| US | Social XLarge | 1080x1920 | 17 | ⏳ Pending |
| US | Tile | 2400x2400 | 17 | ⏳ Pending |
| **TOTAL** | | | **84** | **27/84 (32%)** |

## Next Steps

1. ⏳ Complete migration of remaining 62 template files to modern font syntax
2. ⏳ Verify all templates render correctly with CDN fonts
3. ⏳ Update any remaining `Amazon_Ember_Display:Regular` references (incorrect syntax found in some templates)
4. ✅ Ensure Helvetica remains removed from fallback chain

---

**Last Updated:** December 2024  
**Font Version:** Amazon Ember (Regular 400, Medium 500, Bold 700)  
**CDN Provider:** jsDelivr via GitHub  
**Repository:** romadave17/Testfigmamakefreshplaylist
