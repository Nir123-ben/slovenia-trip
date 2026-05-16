// src/data/rich-content.ts
// תוכן עמוק לדפי האטרקציות — נפרד מ-trip.ts לנוחות עריכה

export interface FlowStep {
  title: string;
  note: string;
  highlight?: boolean;
}

export interface BringItem {
  icon: string;
  label: string;
  no?: boolean;
}

export interface Fact {
  icon: string;
  label: string;
  val: string;
}

export interface AlertItem {
  type: 'ok' | 'warn' | 'cold' | 'info';
  text: string;
}

export interface AttractionContent {
  slug: string;
  heroImage: string;
  secondImage?: string;
  heroImageCaption?: string;
  whyGo: string;
  whyGoSuffix?: string;
  facts: Fact[];
  alerts: AlertItem[];
  flowSteps: FlowStep[];
  bringItems: BringItem[];
}

export interface DayContent {
  departureTime?: string;
  departureItems?: string[];
  hotelAlert?: string;
  hotelPhone?: string;
  hotelName?: string;
}

// ─── תוכן לפי ימים ───────────────────────────────────────

export const dayContent: Record<number, DayContent> = {
  1: {
    departureTime: '08:00',
    departureItems: [
      '07:30 — ארוחת בוקר מהירה במלון',
      '08:00 — יוצאים — מזוודות לרכב, סוודרים בהישג יד',
      '09:45 — הגעה לחניון שקוצ\'יאן — מרכז מבקרים',
      '10:00 — 🦇 סיור מודרך מתחיל — לא לאחר',
    ],
    hotelAlert: 'לתאם עם המלון ערב קודם — צ\'ק-אאוט ב-08:00 מוקדם מהרגיל (רגיל: עד 10:30). לבקש ארוחת בוקר מוקדמת.',
    hotelPhone: '+390421440018',
    hotelName: 'Hotel Forte del 48',
  },
};

// ─── תוכן לפי אטרקציות ───────────────────────────────────

export const attractionContent: Record<string, AttractionContent> = {

  skocjan: {
    slug: 'skocjan',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Skocjan_Caves_3.jpg/1200px-Skocjan_Caves_3.jpg',
    secondImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Skocjan_cave_bridge.jpg/1200px-Skocjan_cave_bridge.jpg',
    heroImageCaption: 'הגשר Cerkvenik — 47 מטר מעל הנהר הרועש. צילום: Park Škocjanske Jame',
    whyGo: 'זו לא עוד מערה עם נטיפים. שקוצ\'יאן היא קניון של 150 מטר גובה — מתחת לאדמה. נהר שלם נכנס לפה לאדמה ומופיע 34 ק״מ משם ליד הים האדריאטי. הגשר שחוצים אותו עומד 47 מטר מעל הנהר הרועש. אי אפשר להכין את הילדים לזה — הם פשוט יפתחו את הפה.',
    whyGoSuffix: 'בניגוד לפוסטויניה (שתראו מחר) — כאן אין רכבת. הכל ברגל, בחושך, בקול הנהר. זו חוויה אחרת לגמרי — ולכן שקוצ\'יאן קודמת.',
    facts: [
      { icon: '🌡️', label: 'טמפרטורה', val: '12°C כל השנה' },
      { icon: '⏱️', label: 'משך', val: '2.5–3 שעות' },
      { icon: '🚶', label: 'הליכה', val: '5 ק״מ · ~1000 מדרגות' },
      { icon: '🎂', label: 'גיל מינימום', val: 'ילד 10 ✅ ילדה 13 ✅' },
      { icon: '💶', label: 'מחיר', val: '€18 מבוגר · €10 ילד' },
      { icon: '📸', label: 'צילום', val: 'אסור בפנים!' },
    ],
    alerts: [
      { type: 'cold', text: '🥶 12 מעלות בפנים — להוציא סוודרים מהמזוודות לפני הכניסה. אחרי הנסיעה מהמלון עלולים לשכוח.' },
      { type: 'ok',   text: '✅ כרטיסים מוזמנים מראש — לא צריך לחכות בתור. להגיע 10 דק\' לפני 10:00.' },
      { type: 'warn', text: '⚠️ צילום אסור בפנים לחלוטין — כן, גם עם טלפון. המדריכים מקפידים. תהנו בעיניים.' },
    ],
    flowSteps: [
      { title: 'המערה השקטה — Tiha jama', note: 'כניסה דרך מנהרה מלאכותית. נטיפים ענקיים, שקט מוחלט. ה"ענק" — הסטלגמיט הגדול במערה.' },
      { title: '🌊 קניון הנהר — הרגע שמשנה הכל', note: 'הנהר ממלמל בהתחלה. ואז — הקניון נפתח. 150 מטר עומק, רעש הנהר מהד. הילדים יזכרו את זה.', highlight: true },
      { title: '🌉 גשר Cerkvenik — 47 מטר מעל הנהר', note: 'חוצים את הגשר. הנהר רועש 47 מטר מתחת. ממש כמו שראיתם בתמונות — אבל רועש.', highlight: true },
      { title: 'הדולינה הגדולה — יציאה לאור', note: 'פתאום — שמיים. בור ענק בקרקע שממנו רואים חזרה לשמיים. רגע מדהים.' },
      { title: 'חזרה ברגל דרך הכפר שקוצ\'יאן', note: '5 ק״מ סה"כ. חזרה למרכז המבקרים. קפה ושירותים שם.' },
    ],
    bringItems: [
      { icon: '🧥', label: 'סוודר / ג\'קט לכולם' },
      { icon: '👟', label: 'נעלי הליכה — לא כפכפים' },
      { icon: '💧', label: 'מים — בקבוק לכל אחד' },
      { icon: '🍫', label: 'חטיף קטן — 3 שעות' },
      { icon: '📷', label: 'מצלמה לפנים — לא!', no: true },
      { icon: '🧳', label: 'מזוודות — נשארות ברכב', no: true },
    ],
  },

  predjama: {
    slug: 'predjama',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Predjama_castle.jpg/1200px-Predjama_castle.jpg',
    heroImageCaption: 'טירת פרדיאמה — בנויה בתוך צוק גיר בגובה 123 מטר',
    whyGo: 'הטירה הגדולה בעולם הבנויה בתוך צוק. לא "על" הצוק — בתוכו. מנהרות בריחה שהאביר אראזם השתמש בהן כדי להחמיק אוכל מהצבא שצר עליו. אפשר לחוש איך המדרגות ממשיכות לתוך ההר.',
    whyGoSuffix: 'אודיו גייד בעברית — נדיר בסלובניה. הילדים יתחברו לסיפור של אראזם.',
    facts: [
      { icon: '🏰', label: 'גובה הצוק', val: '123 מטר' },
      { icon: '⏱️', label: 'משך', val: '1.5–2 שעות' },
      { icon: '🎧', label: 'אודיו גייד', val: 'בעברית ✅' },
      { icon: '🎂', label: 'גיל', val: 'מתאים לכולם' },
      { icon: '💶', label: 'מחיר', val: 'כלול בחבילה' },
      { icon: '📸', label: 'צילום', val: 'מותר ✅' },
    ],
    alerts: [
      { type: 'ok',   text: '🎧 אודיו גייד בעברית — לבקש בכניסה. כלול במחיר.' },
      { type: 'info', text: '💡 אפשר גם לבקר את מערת הטירה — 45 דק\' נוספות. מגיל 6.' },
    ],
    flowSteps: [
      { title: 'חצר הטירה', note: 'כניסה מהחניון. נוף של הצוק מבחוץ — מרשים כבר מרחוק.' },
      { title: 'חדרי הטירה — מאה השנים ה-16', note: 'שריון עתיק, ציוד צבאי, מחבואי המזון של אראזם.', highlight: true },
      { title: '🗝️ מנהרות הבריחה', note: 'הנקודה הכי מרתקת. אפשר ממש לראות דרך היכן ברח אראזם.', highlight: true },
      { title: 'הקומה העליונה — נוף על העמק', note: 'מבט על מכלול הנוף הסלובני. נקודת צילום מצוינת.' },
    ],
    bringItems: [
      { icon: '👟', label: 'נעלי הליכה — יש מדרגות' },
      { icon: '📱', label: 'טלפון לצילום' },
      { icon: '💧', label: 'מים' },
    ],
  },

};
