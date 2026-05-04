# 🇸🇮 סלובניה — מדריך טיול

אתר טיול משפחתי. נבנה עם Astro + GitHub Pages.

## הפעלה מקומית (אופציונלי)

```bash
npm install
npm run dev
```

פתח: http://localhost:4321

## העלאה ל-GitHub Pages

1. פתח חשבון GitHub
2. צור repository בשם `slovenia-trip`
3. העלה את כל הקבצים (גרור ושחרר)
4. Settings → Pages → Source: **GitHub Actions**
5. האתר עולה אוטומטית!

**לפני העלאה** — ערוך את `astro.config.mjs`:
```js
site: 'https://YOUR-USERNAME.github.io',
base: '/slovenia-trip',
```

## עדכון תוכן

כל התוכן נמצא בקובץ אחד:
```
src/data/trip.ts
```

לשנות שם מסעדה, שעה, לינק — לפתוח את הקובץ ב-GitHub ולערוך ישירות.

## מבנה

```
src/
  data/trip.ts        ← כל התוכן כאן
  layouts/Base.astro  ← עיצוב משותף
  pages/
    index.astro       ← דף ראשי
    days/index.astro  ← לוח יומי מפורט
    map/index.astro   ← מפה
    tips/index.astro  ← טיפים
```
