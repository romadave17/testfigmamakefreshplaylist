# Amazon Ember Font Files

This directory contains the Amazon Ember font family used throughout the Amazon Music Template Customizer.

## Font Files

- **AmazonEmber_Regular.ttf** - Regular weight (400)
- **AmazonEmber_Bold.ttf** - Bold weight (700)
- **AmazonEmber_Medium.ttf** - Medium weight (500)

## CDN Usage

These fonts are configured to load from jsDelivr CDN. The fonts are loaded in `/styles/globals.css` using @font-face declarations with the following priority:

1. **Local fonts** - Checks if Amazon Ember is installed on the user's system
2. **CDN fallback** - Loads from GitHub via jsDelivr if local fonts aren't available
3. **System fonts** - Falls back to system sans-serif fonts

## Font Family Names

The templates use two font-family naming conventions:

### 1. Amazon Ember (Standard)
```css
@font-face {
  font-family: 'Amazon Ember';
  src: local('Amazon Ember'), 
       local('AmazonEmber-Regular'),
       url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Amazon Ember';
  src: local('Amazon Ember Bold'),
       local('AmazonEmber-Bold'),
       url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Bold.ttf') format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: 'Amazon Ember';
  src: local('Amazon Ember Medium'),
       local('AmazonEmber-Medium'),
       url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Medium.ttf') format('truetype');
  font-weight: 500;
}
```

### 2. Ember Modern Display Standard (Template Compatibility)
```css
@font-face {
  font-family: 'Ember_Modern_Display_Standard:Regular';
  src: local('Amazon Ember'),
       local('AmazonEmber-Regular'),
       url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Ember_Modern_Display_Standard:Bold';
  src: local('Amazon Ember Bold'),
       local('AmazonEmber-Bold'),
       url('https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Bold.ttf') format('truetype');
  font-weight: 700;
}
```

## Usage in Templates

All template files use the Ember Modern Display Standard naming convention:

### Regular Text
```tsx
<p className="font-['Ember_Modern_Display_Standard:Regular',sans-serif]">
  Regular text
</p>
```

### Bold Text
```tsx
<h1 className="font-['Ember_Modern_Display_Standard:Bold',sans-serif]">
  Bold heading
</h1>
```

## Template Coverage

✅ **Brazilian (BR) Locale** - All 33 files use correct fonts
- 11 IG Story templates (1080x1920)
- 11 Social XLarge templates (1080x1920)
- 11 Tile templates (2400x2400)

✅ **US Locale** - All 51 files use correct fonts
- 17 IG Story templates (1080x1920)
- 17 Social XLarge templates (1080x1920)
- 17 Tile templates (2400x2400)

## Font Loading Behavior

The fonts will load in this order:

1. **If Amazon Ember is installed locally** → Uses local font immediately
2. **If CDN is available** → Downloads from jsDelivr
3. **If both fail** → Falls back to system sans-serif fonts (Arial, Helvetica, etc.)

## ✅ GitHub Repository Setup - COMPLETE

Your GitHub repository at:
```
https://github.com/romadave17/Testfigmamakefreshplaylist/tree/main/fonts/
```

Contains the correct font files:
- ✅ AmazonEmber_Regular.ttf
- ✅ AmazonEmber_Bold.ttf
- ✅ AmazonEmber_Medium.ttf

These files are now correctly referenced in `/styles/globals.css` and will be served via jsDelivr CDN at:
```
https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Regular.ttf
https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Bold.ttf
https://cdn.jsdelivr.net/gh/romadave17/Testfigmamakefreshplaylist@main/fonts/AmazonEmber_Medium.ttf
```