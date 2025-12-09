# VERSION 145: Multi-Locale Amazon Music Template Customizer
## Complete Implementation Playbook

---

## 🌍 **SUPPORTED LOCALES (9 Total)**
1. **BR** - Brazil (Portuguese) ✅ COMPLETED
2. **US** - United States (English)
3. **UK** - United Kingdom (English)
4. **DE** - Germany (German)
5. **FR** - France (French)
6. **IT** - Italy (Italian)
7. **ES** - Spain (Spanish)
8. **JP** - Japan (Japanese)
9. **MX** - Mexico (Spanish)

---

## 📋 **BR LOCALE: COMPLETE IMPLEMENTATION SUMMARY**

### **11 BR Playlists Created (Cloned from US "Fresh Pop")**

| # | Playlist Name | Genre Hardcoded | Template Count |
|---|---------------|-----------------|----------------|
| 1 | Fresh Funk | Funk | 3 |
| 2 | Fresh Rap | Rap | 3 |
| 3 | Fresh Sertanejo | Sertanejo | 3 |
| 4 | Fresh Samba & Pagode | Samba & Pagode | 3 |
| 5 | Fresh MPB | MPB | 3 |
| 6 | Fresh Rock Brasil | Rock Brasil | 3 |
| 7 | Fresh Forró | Forró | 3 |
| 8 | Fresh Pop Brasil | Pop Brasil | 3 |
| 9 | Fresh Gospel | Gospel | 3 |
| 10 | Fresh Trap | Trap | 3 |
| 11 | Fresh Eletrônica Brasil | Eletrônica Brasil | 3 |

**Total BR Templates: 33 files (11 playlists × 3 formats)**

---

## 🎨 **THREE TEMPLATE FORMATS PER PLAYLIST**

### **1. Square Tile (2400x2400)**
- **Purpose:** Square format for general use
- **Artist Imagery:** Centered
- **Text Layout:** Title + Featured artist
- **Standard Font Size:** Variable by genre length

### **2. Instagram Story (1080x1920)**
- **Purpose:** Vertical story format
- **Artist Imagery:** Top 50% of canvas
- **Color Background:** Bottom 50% of canvas
- **Text Layout:** Playlist label + Genre title (2 lines) + Featured artist
- **Standard Font Size:** 110px (split across 2 lines)
- **Vertical Positioning:** `top-[calc(50%+560.5px)]` ⚠️ CRITICAL FIX

### **3. Social Post (1080x1920)**
- **Purpose:** Social media posting
- **Artist Imagery:** Positioned
- **Text Layout:** Similar to IG Story
- **Standard Font Size:** Variable by genre length

---

## 🔧 **UNIVERSAL FIXES & RULES (Apply to ALL Locales)**

### **VERSION 117: Foundation Fixes**
1. ✅ **Universal Color Standardization** - Consistent color values across templates
2. ✅ **Dark Background Override** - Proper text/logo visibility on dark backgrounds
3. ✅ **Dynamic Color Theming System** - Auto-applies appropriate text/logo colors based on background brightness

### **VERSION 117.1: Font Size Optimization for Long Genre Names**
**Rule:** If genre name is longer than standard (like "Eletrônica Brasil" or "Folk & Americana"):

| Format | Standard Size | Optimized Size (Long Names) |
|--------|---------------|----------------------------|
| Square Tile | Variable | 300px |
| IG Story | 110px | 110px (split 2 lines) |
| Social Post | Variable | 90.98px |

**Playlists That Required Optimization:**
- BR: Eletrônica Brasil
- US: Folk & Americana, Folk & Acoustic

### **VERSION 117.3: IG Story Vertical Positioning Fix** ⚠️ CRITICAL
**Problem:** Text too close to artist image (no breathing room)

**Solution:** Adjust `PaddingLeftAligned` component
```tsx
// BEFORE (WRONG)
top-[calc(50%+480.5px)]

// AFTER (CORRECT)
top-[calc(50%+560.5px)]
```

**Effect:** Moves text block down by 80px, creates proper spacing between image and text

**Applied To:**
- BR Eletrônica Brasil IG Story
- US Folk & Americana IG Story
- US Folk & Acoustic IG Story

**⚠️ RULE:** Apply this fix to ALL IG Story templates that show cramped spacing!

---

## 🌐 **LOCALE-SPECIFIC LOCALIZATION RULES**

### **BR (Brazil) - Portuguese**

#### **"Only on" Translation:**
```tsx
// US/English
"Only on"

// BR/Portuguese
"Disponível só no"
```

#### **Featured Artist Prefix:**
```tsx
// US/English
"feat. Artist Name"

// BR/Portuguese  
"com Artist Name"
```

**Implementation in TemplateRenderer.tsx:**
```tsx
// Conditional rendering for BR locale
{playlistId.startsWith('br-') ? (
  <p>com Artist Name</p>
) : (
  <p>feat. Artist Name</p>
)}
```

---

## 🎨 **DUAL-COLOR BACKGROUND SYSTEM**

### **All 11 BR Playlists Have Dual Backgrounds:**

**Format:** Top 50% (Image) + Bottom 50% (Solid Color)

**Background Component Pattern:**
```tsx
function Background1() {
  return (
    <div className="absolute bottom-0 left-[0.02%] right-[-0.02%] top-[50.05%]" data-name="Background">
      <Background />
    </div>
  );
}
```

**Example Color Assignments:**
- Fresh Funk: `#ff2c2c` (Red)
- Fresh Rap: `#1e90ff` (Blue)
- Fresh Eletrônica Brasil: `#f83eda` (Pink)
- etc.

---

## 📝 **FILE NAMING CONVENTIONS**

### **Import Files (in /imports directory):**

**Pattern:** `Mmddyy[Locale][PlaylistName][Format][Dimensions].tsx`

**Examples:**
```
MmddyyBrFreshFunkSqr2400X2400.tsx
MmddyyBrFreshFunkIgs1089X1920.tsx
MmddyyBrFreshFunkSocial1089X1920.tsx

MmddyyBrFreshEletronicaBrasilSqr2400X2400.tsx
MmddyyBrFreshEletronicaBrasilIgs1089X1920.tsx
MmddyyBrFreshEletronicaBrasilSocial1089X1920.tsx
```

### **Format Abbreviations:**
- **Sqr** = Square Tile (2400x2400)
- **Igs** = Instagram Story (1089x1920 or 1080x1920)
- **Social** = Social Post (1089x1920 or 1080x1920)

---

## 🔄 **COMPONENT INTEGRATION (TemplateRenderer.tsx)**

### **Pattern for Adding New Templates:**

```tsx
// Import the templates
import BrFreshFunkSqr from './imports/MmddyyBrFreshFunkSqr2400X2400';
import BrFreshFunkIgs from './imports/MmddyyBrFreshFunkIgs1089X1920';
import BrFreshFunkSocial from './imports/MmddyyBrFreshFunkSocial1089X1920';

// Add to template mapping object
const templateMap = {
  // ... existing templates ...
  
  'br-fresh-funk-square': BrFreshFunkSqr,
  'br-fresh-funk-story': BrFreshFunkIgs,
  'br-fresh-funk-social': BrFreshFunkSocial,
  
  // ... continue for all 11 playlists ...
};
```

### **Conditional BR Localization in Templates:**
```tsx
// For "feat." vs "com"
{playlistId.startsWith('br-') ? 'com Artist Name' : 'feat. Artist Name'}

// For "Only on" translation
{locale === 'br' ? 'Disponível só no' : 'Only on'}
```

---

## ✅ **SYSTEMATIC WORKFLOW FOR NEW LOCALES**

### **Step 1: Identify Locale-Specific Playlists**
- Research top genres for target locale
- Identify 10-15 key playlists to create
- Choose which US template to clone (usually "Fresh Pop")

### **Step 2: Create Template Files (3 per playlist)**
- Clone US template structure
- Hardcode genre name into each file
- Apply locale-specific translations
- Set dual-color backgrounds

### **Step 3: Apply Font Size Optimization**
- Test long genre names
- Apply 300px / 110px / 90.98px sizing if needed
- Ensure 2-line split for IG Story format

### **Step 4: Apply IG Story Positioning Fix**
- Check vertical spacing between image and text
- Apply `top-[calc(50%+560.5px)]` fix if cramped
- Verify 80px breathing room

### **Step 5: Integrate into TemplateRenderer.tsx**
- Import all 3 formats per playlist
- Add to templateMap object
- Implement conditional locale logic

### **Step 6: Test Dynamic Color Theming**
- Verify text/logo visibility on light backgrounds
- Verify text/logo visibility on dark backgrounds
- Ensure Dark Background Override works

---

## 📊 **VERSION HISTORY**

| Version | Description |
|---------|-------------|
| **117** | Foundation - Universal Color Standardization, Dark Override, "Disponível só no", BR "feat. → com" localization, Dynamic Color Theming |
| **117.1** | Font size optimization for long genre names (BR Eletrônica Brasil, US Folk & Americana) |
| **117.2** | First attempt at IG Story spacing (Layout gap increase - incomplete fix) |
| **117.3** | Complete fix for IG Story vertical positioning (PaddingLeftAligned adjustment) |
| **145** | Current version - All BR templates complete, multi-locale playbook established |

---

## 🎯 **NEXT LOCALES TO IMPLEMENT**

### **Priority Order:**
1. **US** - Complete remaining playlists (already has Fresh Pop base)
2. **UK** - Similar to US, minor localization tweaks
3. **MX** - Spanish localization, similar to BR workflow
4. **ES** - Spanish localization (Spain)
5. **DE** - German localization
6. **FR** - French localization
7. **IT** - Italian localization
8. **JP** - Japanese localization (may need special font handling)

---

## 🔍 **KEY TECHNICAL SPECIFICATIONS**

### **Canvas Dimensions:**
- Square Tile: 2400 × 2400px
- IG Story: 1080 × 1920px (sometimes 1089 in file names)
- Social Post: 1080 × 1920px

### **Critical CSS Classes to Preserve:**
- Background positioning: `top-[50.05%]`
- Text container: `top-[calc(50%+560.5px)]`
- Font families: `Ember_Modern_Display_Standard:Bold` / `Regular`
- Text sizing: Varies by format and genre length

### **Image Assets:**
- Artist imagery: Imported via `figma:asset/[hash].png`
- SVG paths: Imported from `/imports/svg-[hash]`
- UI backgrounds: Imported base templates

---

## 🚨 **CRITICAL RULES (NEVER FORGET)**

1. ✅ **Always create 3 templates per playlist** (Square, IG Story, Social)
2. ✅ **Hardcode genre name** into each template file
3. ✅ **Apply IG Story positioning fix** (`top-[calc(50%+560.5px)]`)
4. ✅ **Optimize font sizes** for long genre names
5. ✅ **Implement locale-specific translations** ("feat." vs "com", "Only on" translations)
6. ✅ **Set dual-color backgrounds** for visual consistency
7. ✅ **Test Dynamic Color Theming** on all backgrounds
8. ✅ **Preserve all Tailwind classes** from original Figma import
9. ✅ **Update TemplateRenderer.tsx** for each new playlist
10. ✅ **Maintain naming conventions** for easy tracking

---

## 📦 **BR LOCALE: COMPLETE DELIVERABLES**

✅ **33 Template Files Created**
✅ **TemplateRenderer.tsx Updated** with BR conditional logic
✅ **Dual-Color Backgrounds** applied to all 11 playlists
✅ **Dynamic Color Theming** implemented
✅ **"com Artist Name"** localization active
✅ **"Disponível só no"** translation active
✅ **Font Size Optimization** for Eletrônica Brasil
✅ **IG Story Spacing Fix** applied to all necessary templates

---

## 🎉 **VERSION 145 STATUS: READY FOR MULTI-LOCALE EXPANSION**

**Foundation:** Solid ✅  
**BR Locale:** Complete ✅  
**Playbook:** Documented ✅  
**Next Step:** Apply systematic workflow to remaining 8 locales 🚀

---

*Last Updated: Version 145*
*BR Locale Implementation: 100% Complete*
