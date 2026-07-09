// src/data/trip.ts — כל תוכן הטיול (עודכן: ביקורת 7/2026)

export const tripTitle = "🇸🇮 מסלול סלובניה";
export const tripSub = "מערות · פליטביצה · בלד · סוצ'ה";

// Wikimedia Commons helper — stable, freely-licensed photos by exact file name.
// Resolves via Special:FilePath, which 302-redirects to the current image.
export const cm = (file: string, w = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

export type DayType = "transit" | "light" | "full" | "highlight";

export interface ScheduleItem {
  time: string;
  desc: string;
  duration?: string;
  links?: { label: string; url: string; type: "map" | "waze" | "site" }[];
}

export interface Accommodation {
  name: string;
  address: string;
  checkin: string;
  checkout: string;
  notes?: string;
  mapUrl: string;
  wazeUrl: string;
  image?: string;        // תמונת אזור (לא הבניין עצמו)
  imageCaption?: string;
}

export interface Attraction {
  name: string;
  desc: string;
  images: string[];
  mapUrl: string;
  siteUrl?: string;
  googleMapsDir?: string;
}

export interface Day {
  num: number;
  title: string;
  subtitle: string;
  type: DayType;
  badge: string;
  accommodation: Accommodation;
  attractions: Attraction[];
  alerts?: { type: "ok" | "warn" | "info"; text: string }[];
  schedule: ScheduleItem[];
  note?: string;
  bonus?: string;
}

export const accommodations: Record<string, Accommodation> = {
  postojna: {
    name: "Vila Lemic",
    address: "Postojna, סלובניה",
    checkin: "15:00–23:00",
    checkout: "07:00–10:00",
    notes: "לוודא ביטול",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rakitnik+30+Postojna+Slovenia",
    wazeUrl: "https://waze.com/ul?ll=45.7784,14.2052&navigate=yes",
    image: cm("El Castillo de Predjama.JPG"),
    imageCaption: "האזור — פוסטויניה",
  },
  rastovaca: {
    name: "Flora House",
    address: "Rastovača, קרואטיה",
    checkin: "15:00–22:00",
    checkout: "עד 10:00",
    notes: "💵 מזומן בלבד!",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rastovaca+Plitvicka+Jezera+Croatia",
    wazeUrl: "https://waze.com/ul?ll=44.8800,15.6200&navigate=yes",
    image: cm("Plitvice Lakes, Croatia, Lower Lakes Panorama.JPG"),
    imageCaption: "האזור — פליטביצה",
  },
  brezice: {
    name: "Guesthouse Les",
    address: "Brežice, סלובניה",
    checkin: "14:00–22:00",
    checkout: "06:00–10:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rimska+cesta+31+Brezice+Slovenia",
    wazeUrl: "https://waze.com/ul?ll=45.9042,15.5903&navigate=yes",
    image: cm("Terme Čatež 01.jpg"),
    imageCaption: "האזור — ברז'יצה / צ'אטז",
  },
  bled: {
    name: "Barn House MM",
    address: "Bled, סלובניה",
    checkin: "15:00–23:00",
    checkout: "07:00–10:00",
    notes: "מטבח מלא — לקנות חומרי גלם ב-BTC!",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kajuhova+cesta+7a+Bled+Slovenia",
    wazeUrl: "https://waze.com/ul?ll=46.3686,14.1139&navigate=yes",
    image: cm("Bled Overview.JPG"),
    imageCaption: "האזור — בלד",
  },
};

export const days: Day[] = [
  // ═══════════════════════════════════════════════
  // יום 0 — נחיתה
  // ═══════════════════════════════════════════════
  {
    num: 0,
    title: "✈️ נחיתה — ונציה מרקו פולו",
    subtitle: "הגעה בלילה · איסוף רכב · שינה",
    type: "transit",
    badge: "נחיתה",
    accommodation: {
      name: "Hotel Forte del 48",
      address: "San Donà di Piave, איטליה",
      checkin: "14:00–21:30 ⚠️",
      checkout: "08:00–10:30",
      notes: "🔴 הנחיתה 21:00 — מגיעים אחרי סגירת הקבלה (21:30)! חובה לתאם הגעה מאוחרת מראש. וגם: צ'ק-אאוט מוקדם מחר — לסגור חשבון בערב.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Forte+del+48+San+Dona+di+Piave+Italy",
      wazeUrl: "https://waze.com/ul?ll=45.6340,12.5618&navigate=yes",
      image: cm("Venice(Grand Canal).JPG"),
      imageCaption: "האזור — ונציה",
    },
    attractions: [],
    alerts: [
      { type: "warn", text: "🔴 לפני הטיסה: להתקשר למלון ולתאם הגעה אחרי 21:30 (קבלה נסגרת!) — ולוודא מול Europcar שהרכב נשמר להגעה בפועל (~22:00), כי בוואוצ'ר רשום איסוף 20:00." },
      { type: "ok",   text: "🚗 Europcar — Audi Q2 אוטומטי. איסוף בשדה. פיקדון €500 בכרטיס אשראי של הנהג." },
      { type: "info", text: "📱 לפני הנחיתה: Waze + מפות offline + ויניית סלובניה דיגיטלית (e-vignette) אונליין — אין יותר מדבקות." },
    ],
    schedule: [
      { time: "21:00", desc: "✈️ נחיתה — ונציה מרקו פולו", links: [{ label: "מפת שדה התעופה", url: "https://www.google.com/maps/search/?api=1&query=Venice+Marco+Polo+Airport", type: "map" as const }] },
      { time: "21:45", desc: "🛂 דרכונים + מזוודות" },
      { time: "22:15", desc: "🚗 איסוף רכב Europcar — Audi Q2 (הרכב שמור לפי מספר הטיסה)", links: [{ label: "Europcar", url: "https://www.europcar.com", type: "site" as const }] },
      { time: "22:45", desc: "🏨 נסיעה ל-Hotel Forte del 48 (~35 דק')", links: [{ label: "Waze למלון", url: "https://waze.com/ul?ll=45.6340,12.5618&navigate=yes", type: "waze" as const }] },
      { time: "23:20", desc: "😴 הגעה ושינה — מחר יוצאים מוקדם!" },
    ],
    note: "יום הגעה — אין תכנון פעיל. מהנחיתה ישר לישון. הזמנים כאן ריאליים — אם הכול זורם מהר יותר, מצוין.",
  },

  // ═══════════════════════
  // בסיס 1 — מערות + פליטביצה
  // ═══════════════════════
  {
    num: 1,
    title: "🦇 שקוצ'יאן + 🏰 טירת פרדיאמה",
    subtitle: "מערה UNESCO + טירה בתוך צוק",
    type: "full",
    badge: "יום מלא",
    accommodation: accommodations.postojna,
    attractions: [
      {
        name: "מערת שקוצ'יאן",
        desc: "אחד הפלאים הגיאולוגיים של אירופה — נהר שנכנס לאדמה, מערת ענק, גשר תלוי 50 מ' מעל הנהר התת-קרקעי. סיור מודרך בלבד. 10°C — להתלבש חם!",
        images: [cm("SkocjanCaves.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Skocjan+Caves+Slovenia",
        siteUrl: "https://park-skocjanske-jame.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Skocjan+Caves+Slovenia",
      },
      {
        name: "טירת פרדיאמה",
        desc: "הטירה הגדולה בעולם הבנויה בתוך צוק. מנהרות בריחה, שריון עתיק, ואגדת האביר אראזם. אודיו גייד בעברית!",
        images: [cm("El Castillo de Predjama.JPG"), cm("Predjama - Grad Predjama 3824.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Predjama+Castle+Slovenia",
        siteUrl: "https://www.postojnska-jama.eu/en/predjama-castle/",
        googleMapsDir: "https://www.google.com/maps/dir//Predjama+Castle+Slovenia",
      },
    ],
    alerts: [
      { type: "warn", text: "10°C בפנים המערה — להוציא סוודרים לפני הכניסה!" },
      { type: "ok", text: "כרטיסי שקוצ'יאן מוזמנים מראש ✅" },
    ],
    schedule: [
      { time: "07:30", desc: "יציאה — כביש מהיר דרך Trieste", duration: "1:45 שע'", links: [{ label: "Waze", url: "https://waze.com/ul?ll=45.7039,13.7920&navigate=yes", type: "waze" }] },
      { time: "09:15", desc: "הגעה לשקוצ'יאן — חניה חינם", duration: "30 דק'" },
      { time: "10:00", desc: "🦇 מערת שקוצ'יאן — סיור מודרך", duration: "2 שעות", links: [{ label: "אתר רשמי", url: "https://park-skocjanske-jame.si/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Skocjan+Caves+Slovenia", type: "map" }] },
      { time: "12:00", desc: "☕ ארוחת צהריים", duration: "45 דק'" },
      { time: "13:15", desc: "🚗 נסיעה לטירת פרדיאמה", duration: "25 דק'", links: [{ label: "Waze", url: "https://waze.com/ul?ll=45.8162,14.0004&navigate=yes", type: "waze" }] },
      { time: "13:40", desc: "🏰 טירת פרדיאמה", duration: "1.5 שעות", links: [{ label: "אתר + כרטיסים", url: "https://www.postojnska-jama.eu/en/predjama-castle/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Predjama+Castle+Slovenia", type: "map" }] },
      { time: "15:15", desc: "🚗 נסיעה ל-Vila Lemic", duration: "30 דק'", links: [{ label: "Waze ללינה", url: "https://waze.com/ul?ll=45.7784,14.2052&navigate=yes", type: "waze" }] },
      { time: "15:45", desc: "צ'ק-אין, מנוחה" },
      { time: "18:30", desc: "🍽️ ארוחת ערב — Pizzeria ČUK או Bistro Štanjel" },
    ],
    note: "שקוצ'יאן ראשון = הסדר הנכון. מי שרואה קודם פוסטויניה, שקוצ'יאן נראה פחות.",
    bonus: "💪 יש כוח? מערת הטירה — 45 דק' נוספות, מגיל 6.",
  },
  {
    num: 2,
    title: "🚂 פוסטויניה + 🏘️ ראסטוקה → פליטביצה",
    subtitle: "מערת רכבת + כפר מפלים + הגעה",
    type: "transit",
    badge: "מעבר",
    accommodation: accommodations.rastovaca,
    attractions: [
      {
        name: "מערת פוסטויניה",
        desc: "24 ק\"מ מסדרונות. רכבת חשמלית 3.5 ק\"מ לתוך החושך, נטיפים בקנה מידה שלא מצפים לו, ותינוקות הדרקון — ה-Olm.",
        images: [cm("Postojna Cave - Slovenia.jpg")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Postojna+Cave+Slovenia",
        siteUrl: "https://www.postojnska-jama.eu/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Postojna+Cave+Slovenia",
      },
      {
        name: "ראסטוקה",
        desc: "כפר קסום על צומת שני נהרות. המים זורמים בין הבתים, מטחנות עתיקות ומפלים קטנים בכל פינה. עצירת צהריים — פורל מקומי.",
        images: [cm("Rastoke (1), Slunj, Croatia.JPG"), cm("Slunj, Rastoke, waterfalls of the Slunjcica river.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rastoke+village+Croatia",
        googleMapsDir: "https://www.google.com/maps/dir//Rastoke+Slunj+Croatia",
      },
    ],
    alerts: [
      { type: "warn", text: "פוסטויניה: להגיע 08:45 — 15 דק' לפני הסיור!" },
      { type: "warn", text: "Flora House: תשלום מזומן בלבד!" },
      { type: "ok", text: "כרטיסי פוסטויניה מוזמנים מראש ✅" },
      { type: "info", text: "🧭 כלל החלטה: יצאתם מפוסטויניה אחרי 11:15? בראסטוקה מסתפקים בטיילת המרכזית (חינם, שעה) בלי לולאת הקניון. היום ארוך — לא נלחמים בשעון." },
    ],
    schedule: [
      { time: "07:30", desc: "יציאה מהלינה" },
      { time: "07:50", desc: "הגעה לחניון פוסטויניה — €3/שעה", links: [{ label: "חניון", url: "https://www.google.com/maps/search/?api=1&query=Postojna+Cave+parking", type: "map" }] },
      { time: "08:00", desc: "☕ ארוחת בוקר" },
      { time: "08:45", desc: "⚠️ כניסה לאזור כרטיסים — חובה לפני 09:00!" },
      { time: "09:00", desc: "🚂 מערת פוסטויניה", duration: "1.5 שעות", links: [{ label: "אתר רשמי", url: "https://www.postojnska-jama.eu/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Postojna+Cave+Slovenia", type: "map" }] },
      { time: "10:45", desc: "🚗 נסיעה דרומה לקרואטיה", duration: "2:15 שע'", links: [{ label: "Waze לראסטוקה", url: "https://waze.com/ul?ll=44.8963,15.6244&navigate=yes", type: "waze" }] },
      { time: "13:15", desc: "🏘️ ראסטוקה — כפר מפלים", duration: "1.5 שע'", links: [{ label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Rastoke+village+Croatia", type: "map" }] },
      { time: "13:45", desc: "🍽️ צהריים — Pod Rastočkim Krovom", links: [{ label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Pod+Rastockim+Krovom+Rastoke", type: "map" }] },
      { time: "15:15", desc: "🚗 נסיעה לפליטביצה", duration: "30 דק'", links: [{ label: "Waze ל-Flora House", url: "https://waze.com/ul?ll=44.8800,15.6200&navigate=yes", type: "waze" }] },
      { time: "15:45", desc: "צ'ק-אין Flora House — מזומן בלבד!" },
      { time: "20:00", desc: "😴 שינה מוקדמת — קימה 06:30 מחר!" },
    ],
    note: "שקוצ'יאן טבעית ומרשימה — פוסטויניה תיירותית וכיפית. שתיהן ביחד = מגוון מושלם.",
  },
  {
    num: 3,
    title: "🌊 פליטביצה — יום שלם ⭐",
    subtitle: "16 אגמות מדורגים עם מפלים — UNESCO קרואטיה",
    type: "highlight",
    badge: "⭐ שיא",
    accommodation: accommodations.rastovaca,
    attractions: [
      {
        name: "אגמי פליטביצה",
        desc: "16 אגמות מדורגים שמחוברים במפלים. הכחול-ירוק של המים מגיע ממינרלים וצמחייה ומשתנה לפי השעה. שבילי עץ מעל המים, סירה חשמלית, יום שלם של יופי.",
        images: [cm("Plitvice Lakes, Croatia, Lower Lakes Panorama.JPG"), cm("Plitvice Lakes, Galovac Waterfall.JPG"), cm("Plitvice lakes.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Plitvice+Lakes+Entrance+1",
        siteUrl: "https://np-plitvicka-jezera.hr",
        googleMapsDir: "https://www.google.com/maps/dir//Plitvice+Lakes+National+Park+Croatia",
      },
    ],
    alerts: [
      { type: "ok", text: "כרטיסי פליטביצה מוזמנים מראש ✅" },
      { type: "info", text: "מסלול C: כניסה 1 → St1→P3 → סירה → P2→St3 → שאטל → 8 ק\"מ" },
      { type: "warn", text: "נקודת בלבול: מזח P3 מול תחנת שאטל St3 — לסמן על הטלפון!" },
      { type: "info", text: "⏱️ קצב שיא-עונה: להיות על מזח הסירה P3 לפני 09:00 — אחר כך התור מתארך מאוד. גם השאטל חזרה עמוס אחרי 14:00. חצי שעה הקדמה = שעה פחות בתורים." },
    ],
    schedule: [
      { time: "06:30", desc: "קימה + הכנת כריכות לפארק" },
      { time: "07:00", desc: "🚗 נסיעה לכניסה 1", links: [{ label: "אתר הפארק", url: "https://np-plitvicka-jezera.hr", type: "site" }, { label: "כניסה 1", url: "https://www.google.com/maps/search/?api=1&query=Plitvice+Lakes+Entrance+1", type: "map" }] },
      { time: "07:15", desc: "כניסה — תצפית Veliki Slap (78 מ')" },
      { time: "07:30", desc: "🌊 אגמים תחתונים (St1→P3)" },
      { time: "09:30", desc: "⛵ סירה חשמלית P3→P2 — על אגם קוזיאק" },
      { time: "10:00", desc: "🌊 אגמים עליונים (P2→St3)" },
      { time: "12:00", desc: "🥪 צהריים — כריכות ליד מפל" },
      { time: "13:00", desc: "🚌 שאטל St3→St1 — כלול בכרטיס" },
      { time: "13:30", desc: "סיום! חזרה לפארקינג" },
      { time: "15:00", desc: "חזרה ל-Flora House, מנוחה" },
      { time: "18:30", desc: "🍽️ Bistro Plum ⭐", links: [{ label: "לרזרבציה", url: "https://www.hotel-degenija.com", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Bistro+Plum+Rakovica+Croatia", type: "map" }] },
    ],
    note: "כניסה לפני 8:00 = חוויה אחרת לגמרי. אחרי 10:00 — המקום מתמלא.",
  },
  {
    num: 4,
    title: "🏊 פליטביצה → Terme Čatež",
    subtitle: "נסיעה צפונה + פארק מים אחה\"צ",
    type: "light",
    badge: "יום קל",
    accommodation: accommodations.brezice,
    attractions: [
      {
        name: "Terme Čatež",
        desc: "פארק מים גדול בדרום סלובניה. בריכות חיצוניות חמות, מגלשות מים, אזור ילדים מושלם. בדיוק מה שצריך אחרי יומיים של הליכה.",
        images: [cm("Terme Čatež 01.jpg")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Terme+Catez+Slovenia",
        siteUrl: "https://www.terme-catez.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Terme+Catez+Slovenia",
      },
    ],
    schedule: [
      { time: "08:30", desc: "יציאה צפונה — A1→A2" },
      { time: "10:30", desc: "🛒 סופר ליד Karlovac — קניות לימי בלד", duration: "30 דק'" },
      { time: "12:45", desc: "הגעה לברז'יצה — ארוחת צהריים (צ'ק-אין רק מ-14:00 — התיקים נשארים ברכב)", links: [{ label: "Waze ללינה", url: "https://waze.com/ul?ll=45.9042,15.5903&navigate=yes", type: "waze" }] },
      { time: "14:00", desc: "🏊 Terme Čatež — בריכות, מגלשות (בגדי ים בתיק נגיש מראש!)", duration: "~4 שעות", links: [{ label: "אתר רשמי", url: "https://www.terme-catez.si/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Terme+Catez+Slovenia", type: "map" }] },
      { time: "18:00", desc: "צ'ק-אין Guesthouse Les (14:00–22:00), ארוחת ערב" },
    ],
    note: "יום קל בכוונה — מתנה לילדים אחרי יומיים עמוסים.",
    bonus: "💪 יש כוח? Supernova Brežice — קניון 10 דק' מהלינה.",
  },

  // ═══════════════════════
  // בסיס 2 — בלד / בוהין
  // ═══════════════════════
  {
    num: 5,
    title: "🛍️ Čatež → BTC → בוהין",
    subtitle: "נסיעה צפונה + קניות ציוד + כניסה ראשונה לאגם",
    type: "transit",
    badge: "מעבר",
    accommodation: accommodations.bled,
    attractions: [
      {
        name: "אגם בוהין",
        desc: "האגם הגדול של יוליאן האלפים — שקט, צלול ומרהיב. הרבה פחות תיירים מבלד. הבסיס שלנו ל-4 לילות. הכניסה הראשונה למים אחרי הנסיעה.",
        images: [cm("Stara Fužina - Ribčev Laz - Lake Bohinj.jpg"), cm("Ribčev Laz - bridge and church.jpg")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Lake+Bohinj+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Lake+Bohinj+Slovenia",
      },
    ],
    alerts: [
      { type: "info", text: "BTC City: לקנות ניאופרן ונעלי מים לנהר הסוצ'ה — חובה לבסיס הבא!" },
      { type: "warn", text: "ב-BTC רק ציוד — לא מזון מקורר! צ'ק-אין בבלד רק ב-15:00, והקניות יחכו שעות ברכב חם. מזון קונים בערב בבלד." },
      { type: "info", text: "💡 בצ'ק-אין: לבקש מבעל הבית כרטיס Julian Alps Guest Card — חניה חינם בכל חניוני בוהין ל-4 הימים." },
    ],
    schedule: [
      { time: "08:30", desc: "יציאה מ-Brežice, A2 צפונה", duration: "1:15 שע'" },
      { time: "09:45", desc: "🛍️ BTC City Ljubljana — ניאופרן, נעלי מים, ציוד שחייה לסוצ'ה", duration: "1.5–2 שע'", links: [{ label: "BTC City", url: "https://www.btc.si", type: "site" }, { label: "Waze ל-BTC", url: "https://waze.com/ul?ll=46.0897,14.5394&navigate=yes", type: "waze" }] },
      { time: "11:45", desc: "ארוחה ב-BTC", duration: "30 דק'" },
      { time: "12:15", desc: "🚗 נסיעה לבוהין (צ'ק-אין בבלד רק מ-15:00 — קודם אגם!)", duration: "1:15 שע'", links: [{ label: "Waze לבוהין", url: "https://waze.com/ul?ll=46.2833,13.8875&navigate=yes", type: "waze" }] },
      { time: "13:30", desc: "🏊 אגם בוהין — כניסה ראשונה למים! חוף Stara Fužina/Kramar (חניה P4)", duration: "3 שע'", links: [{ label: "חוף שחייה", url: "https://www.google.com/maps/search/?api=1&query=Lake+Bohinj+swimming+Ribcev+Laz", type: "map" }] },
      { time: "16:30", desc: "🚗 נסיעה לבלד, צ'ק-אין Barn House MM (מ-15:00)", duration: "40 דק'", links: [{ label: "Waze לבלד", url: "https://waze.com/ul?ll=46.3686,14.1139&navigate=yes", type: "waze" }] },
      { time: "17:30", desc: "🛒 קניות מזון ב-Mercator/Spar בלד — כאן, לא ב-BTC (מוצרי קירור לא שורדים יום ברכב חם)" },
      { time: "18:30", desc: "🌙 ערב משפחתי" },
    ],
    note: "BTC ממש על הדרך — לקנות ניאופרן עכשיו, לפני שמגיעים לסוצ'ה.",
    bonus: "💡 אלטרנטיבה: Škofja Loka — עיירה מימי הביניים, 20 דק' מלובליאנה.",
  },
  {
    num: 6,
    title: "🏰 בלד + 🎢 סטראזה — יום שלם",
    subtitle: "אגם + טירה + מגלשה + פארק חבלים",
    type: "full",
    badge: "יום מלא",
    accommodation: accommodations.bled,
    attractions: [
      {
        name: "אגם בלד + טירת בלד",
        desc: "תמונת הגלויה של סלובניה — אגם קטן עם כנסייה על אי ומצודה על צוק מעל הכל. יפה מאוד, ועמוס תיירים בהתאם. מגיעים מוקדם לפני הצפיפות.",
        images: [cm("Bled Overview.JPG"), cm("Blejsko jezero (Lake Bled in autumn).jpg"), cm("Pletna-Bled.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Lake+Bled+Slovenia",
        siteUrl: "https://www.blejski-grad.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Lake+Bled+Slovenia",
      },
      {
        name: "סטראזה — מגלשה + פארק חבלים",
        desc: "מגלשת קיץ שיורדת מהגבעה לכיוון האגם. פארק אדרנלין לצידה — חבלים, זיפליין ומסלולים לגילאים שונים. פתיחה בדיוק ב-11:00.",
        images: [cm("Bled-Straza.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Straza+Bled+summer+toboggan",
        siteUrl: "https://www.straza-bled.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Straza+Bled+Slovenia",
      },
    ],
    schedule: [
      { time: "07:45", desc: "🚶 יוצאים לאגם — הלינה כבר בבלד! (5 דק')", links: [{ label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Lake+Bled+Slovenia", type: "map" }] },
      { time: "08:00", desc: "🏰 אגם בלד + טירה — מוקדם לפני הצפיפות!", duration: "2.5 שע'", links: [{ label: "טירת בלד", url: "https://www.blejski-grad.si/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Bled+Castle+Slovenia", type: "map" }] },
      { time: "10:45", desc: "🚗 נסיעה קצרה לסטראזה", duration: "5 דק'" },
      { time: "11:00", desc: "🎢 סטראזה — מגלשת קיץ. פתיחה בדיוק 11:00!", duration: "45 דק'", links: [{ label: "אתר + מחירים", url: "https://www.straza-bled.si/en/", type: "site" }] },
      { time: "11:45", desc: "🧗 פארק אדרנלין סטראזה", duration: "2–2.5 שע'" },
      { time: "14:15", desc: "🍽️ ארוחה באזור בלד", duration: "45 דק'" },
      { time: "15:00", desc: "🚗 חזרה לבוהין", duration: "40 דק'" },
      { time: "15:40", desc: "🏊 שחייה באגם בוהין", duration: "2 שע'", links: [{ label: "חוף שחייה", url: "https://www.google.com/maps/search/?api=1&query=Lake+Bohinj+swimming", type: "map" }] },
      { time: "18:00", desc: "🌙 ערב חופשי" },
    ],
    note: "איחוד סטראזה (מגלשה + פארק) חוסך יום נסיעה. צהריים רק ב-14:15 — לקחת חטיפים ומים לסטראזה! המגלשה והפארק במזומן.",
    bonus: "💪 יש כוח? Radovljica — 10 דק' מבלד, מוזיאון שוקולד Lectar. 30 דק'.",
  },
  {
    num: 7,
    title: "🌊 וינטגר + יום שקט באגם",
    subtitle: "ערוץ גיר בבוקר, אחה\"צ חופשי לגמרי",
    type: "light",
    badge: "יום קל",
    accommodation: accommodations.bled,
    attractions: [
      {
        name: "ערוץ וינטגר",
        desc: "ערוץ גיר צר שנהר הרדוביצה חצב לאורך 1.6 ק\"מ. ההליכה על מסילות עץ בנויות מעל המים — חלקן נצמדות לקיר הסלע, חלקן גשרים. מסתיים במפל קטן. קל ויפהפה.",
        images: [cm("Bled Vintgar-Klamm 35.JPG"), cm("Bled Vintgar-Klamm 27.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vintgar+Gorge+Slovenia",
        siteUrl: "https://www.vintgar.si/en",
        googleMapsDir: "https://www.google.com/maps/dir//Vintgar+Gorge+Slovenia",
      },
    ],
    alerts: [
      { type: "ok", text: "כרטיסי וינטגר מוזמנים מראש ✅ — כניסה מ-08:20" },
    ],
    schedule: [
      { time: "07:40", desc: "🚗 יציאה לחניון VINTGAR LIP (חינם) — משם שאטל חשמלי כל 7 דק'", duration: "15 דק'", links: [{ label: "Waze לחניון LIP", url: "https://waze.com/ul?ll=46.3974,14.0875&navigate=yes", type: "waze" }] },
      { time: "08:20", desc: "🌊 ערוץ וינטגר — הכרטיסים לשעה זו! 1.6 ק\"מ מסילות עץ מעל נחל שוצף", duration: "2 שעות", links: [{ label: "אתר רשמי", url: "https://www.vintgar.si/en", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Vintgar+Gorge+Slovenia", type: "map" }] },
      { time: "10:15", desc: "🚶 חזרה בשביל הרגלי (45 דק', מומלץ) או בשאטל" },
      { time: "11:15", desc: "☕ ארוחת בוקר שנייה בבלד" },
      { time: "12:00", desc: "🏊 חופשי לגמרי בבוהין — שחייה, סאפ, קייאק, מנוחה", duration: "5 שע'", links: [{ label: "השכרת קייאק", url: "https://www.google.com/maps/search/?api=1&query=kayak+rental+Lake+Bohinj", type: "map" }] },
      { time: "18:00", desc: "🌙 ערב משפחתי" },
    ],
    note: "זה לא 'זמן מת' — זה 'זמן חי'. מ-11:00 כלום מתוכנן. האגם נושם.",
    bonus: "💪 יש כוח? Planina pod Voglem — מישור רועים אלפיני, שעה הליכה. גבינות כבשים מקומיות.",
  },
  {
    num: 8,
    title: "🥾 מוסטניצה + 🚡 וואגל",
    subtitle: "ערוץ נחל בבוקר, רכבל לפסגה אחה\"צ",
    type: "full",
    badge: "יום מלא",
    accommodation: accommodations.bled,
    attractions: [
      {
        name: "ערוץ מוסטניצה",
        desc: "ערוץ קטן ויפה מדרום לאגם בוהין. הליכה לאורך נחל שחצב צורות מוזרות בבזלת. יציאה מ-Stara Fužina, 5 דק' מהלינה. בדרך — 'ראש הפיל'.",
        images: [cm("Mostnica-Voje5.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mostnica+Gorge+Stara+Fuzina+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Mostnica+Gorge+Stara+Fuzina+Slovenia",
      },
      {
        name: "רכבל וואגל",
        desc: "רכבל מ-Ukanc לפסגה בגובה 1,922 מ'. מלמעלה — תצפית רחבה על כל האלפים היוליאניים ואגם בוהין למטה. בקיץ יש שבילי הליכה קצרים מהפסגה.",
        images: [cm("Vogel Ski resort.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vogel+Cable+Car+Ukanc+Slovenia",
        siteUrl: "https://www.vogel.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Vogel+Cable+Car+Ukanc+Slovenia",
      },
    ],
    schedule: [
      { time: "07:50", desc: "🚗 יציאה מבלד ל-Stara Fužina", duration: "35 דק'" },
      { time: "08:30", desc: "🥾 ערוץ מוסטניצה — יציאה מ-Stara Fužina", duration: "2.5 שע'", links: [{ label: "מוצא השביל", url: "https://www.google.com/maps/search/?api=1&query=Mostnica+Gorge+Stara+Fuzina", type: "map" }] },
      { time: "11:00", desc: "חזרה + נשנוש", duration: "30 דק'" },
      { time: "11:30", desc: "🚗 נסיעה ל-Ukanc", duration: "15 דק'", links: [{ label: "Waze לוואגל", url: "https://waze.com/ul?ll=46.2841,13.8486&navigate=yes", type: "waze" }] },
      { time: "12:00", desc: "🚡 וואגל — רכבל ל-1,922 מ'. תצפית + הליכות קצרות.", duration: "3–3.5 שע'", links: [{ label: "אתר + מחירים", url: "https://www.vogel.si/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Vogel+Cable+Car+Slovenia", type: "map" }] },
      { time: "15:30", desc: "ירידה ברכבל, חזרה" },
      { time: "16:00", desc: "🏊 שחייה אחרונה באגם בוהין — פרידה!", duration: "2 שע'" },
      { time: "18:30", desc: "ארוחה + אריזה — מחר עוברים לסוצ'ה" },
    ],
    note: "יום אלפיני. שחייה אחרונה = סיום סנטימנטלי לבסיס בוהין. 💡 שמיים צלולים בבוקר? שקלו להפוך: וואגל ראשון (08:30) — בצהריים עננים נוהגים להסתיר את הנוף. מוסטניצה המוצל נעים גם אחה\"צ. אין מים על ההר — להביא בקבוקים!",
    bonus: "💪 יש כוח? תצפית Orlove Glave — 20 דק' הליכה מהתחנה העליונה. נוף 360°. הכבלית אליה כלולה בכרטיס.",
  },

  // ═══════════════════════
  // בסיס 3 — עמק הסוצ'ה
  // ═══════════════════════

  // יום 9
  {
    num: 9,
    title: "🚂 רכבת המכוניות + 🏔️ ורשיץ → בווץ",
    subtitle: "יום מעבר שהוא אטרקציה",
    type: "transit",
    badge: "מעבר",
    accommodation: {
      name: "Charming Bovec Apartment",
      address: "Bovec, סלובניה",
      checkin: "16:00–20:00",
      checkout: "עד 10:00",
      notes: "📱 צ'ק-אין דיגיטלי — Digital Receptionist App!",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Dvor+44h+Bovec+Slovenia",
      wazeUrl: "https://waze.com/ul?ll=46.3356,13.5526&navigate=yes",
      image: cm("Velika korita Soče Soča (Bovec) 01.JPG"),
      imageCaption: "האזור — בווץ / עמק הסוצ'ה",
    },
    attractions: [
      {
        name: "רכבת המכוניות",
        desc: "מנהרה תת-הרית שמחברת בין עמק בוהין לסוצ'ה. המכוניות עולות על הרכבת, 35 דקות דרך ההר. ילדים אוהבים מאוד. מזומן בלבד!",
        images: [cm("Bohinjska Bistrica-train station.jpg")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Bohinjska+Bistrica+train+station",
        googleMapsDir: "https://www.google.com/maps/dir//Bohinjska+Bistrica+Slovenia",
      },
      {
        name: "מעבר ורשיץ",
        desc: "50 פניות ממוספרות, גובה 1,611 מ'. עצירה בפסגה לקפה ותצפית. זו לא לוגיסטיקה — זו אטרקציה. לנסוע לאט ולעצור.",
        images: [cm("Vrsic-Pass Fluss Pisnica 3.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vrsic+Pass+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Vrsic+Pass+Slovenia",
      },
    ],
    alerts: [
      { type: "warn", text: "🚂 הרכבת יוצאת 09:10 (אין 09:00!). העמסה נסגרת 10 דק' לפני — להיות בתחנה עד 08:50. 30 מכוניות, כל הקודם זוכה. מזומן: €27 למשפחה (רכב+נהג €16.20 + נוסע €3.60)." },
      { type: "info", text: "📞 SŽ ממליצים להודיע 24 שעות מראש: +386 1 291 33 91. אם הרכבת מלאה — הבאה רק ב-11:40. תוכנית ב': לוותר על הרכבת ולנסוע דרך קרנייסקה גורה→ורשיץ (~2:15)." },
      { type: "info", text: "📱 להוריד Digital Receptionist App לפני ההגעה — צ'ק-אין דיגיטלי בלבד, מ-16:00! פיקדון €120 בכרטיס." },
    ],
    schedule: [
      { time: "07:50", desc: "יציאה מבלד לתחנת Bohinjska Bistrica", duration: "20–25 דק'", links: [{ label: "Waze לרכבת", url: "https://waze.com/ul?ll=46.2622,13.9558&navigate=yes", type: "waze" }] },
      { time: "08:15", desc: "הגעה לתחנה — מקדימים! העמסה נסגרת 09:00" },
      { time: "09:10", desc: "🚂 רכבת המכוניות AVT 853 — מכונית על רכבת! 35 דק' במנהרה. מזומן!", duration: "45 דק'" },
      { time: "09:53", desc: "ירידה ב-Most na Soči — נסיעה צפונה בעמק: טולמין → קוברי́ד → בווץ", duration: "1 שע'" },
      { time: "11:00", desc: "🛒 עצירה קצרה בבווץ — קפה + קניות לחג (מחר הכול סגור!)", duration: "45 דק'" },
      { time: "11:45", desc: "🌊 כפר טרנטה — Velika korita: גורג' טורקיז 750 מ'. חניון מזרחי קטן — חינם", duration: "45 דק'", links: [{ label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Velika+korita+Soce+Slovenia", type: "map" }] },
      { time: "12:45", desc: "🏔️ טיפוס למעבר ורשיץ — עצירה בפסגה 1,611 מ' + נשנוש", duration: "1:15 שע'", links: [{ label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Vrsic+Pass+Slovenia", type: "map" }] },
      { time: "14:00", desc: "ירידה חזרה דרך טרנטה לבווץ — לנסוע בנחת", duration: "1 שע'" },
      { time: "15:00", desc: "🍽️ צהריים מאוחרים בבווץ" },
      { time: "16:00", desc: "צ'ק-אין Charming Bovec (נפתח 16:00) — דרך האפליקציה", links: [{ label: "Waze לדירה", url: "https://waze.com/ul?ll=46.3356,13.5526&navigate=yes", type: "waze" }] },
      { time: "17:00", desc: "🏊 טבילה ראשונה בסוצ'ה — חוף Čezsoča (רדוד ואיטי, הכי משפחתי)", duration: "1.5 שע'", links: [{ label: "חוף Čezsoča", url: "https://www.google.com/maps/search/?api=1&query=Cezsoca+beach+Soca+river", type: "map" }] },
      { time: "19:00", desc: "🌙 ארוחת ערב" },
    ],
    note: "רכבת + ורשיץ = יום מעבר שהוא חוויה. הלו״ז מבוסס על לוח הרכבות הרשמי 2026. עייפים? אפשר לוותר על ורשיץ היום ולעשות אותו כחצי יום רגוע ביום 12 (30 דק' מבווץ).",
    bonus: "💪 יש כוח בירידה? ערוץ Mlinarica ליד טרנטה — 10–15 דק' הליכה לתצפית קניון דרמטי.",
  },

  // יום 10
  {
    num: 10,
    title: "💧 שחייה + לפנה + מפל קוזיאק",
    subtitle: "יום היכרות עם הנהר",
    type: "light",
    badge: "יום קל",
    accommodation: {
      name: "Charming Bovec Apartment",
      address: "Bovec, סלובניה",
      checkin: "16:00–20:00",
      checkout: "עד 10:00",
      notes: "📱 צ'ק-אין דיגיטלי בלבד",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Dvor+44h+Bovec+Slovenia",
      wazeUrl: "https://waze.com/ul?ll=46.3356,13.5526&navigate=yes",
      image: cm("Velika korita Soče Soča (Bovec) 01.JPG"),
      imageCaption: "האזור — בווץ / עמק הסוצ'ה",
    },
    attractions: [
      {
        name: "Virje — לפנה",
        desc: "בריכה טבעית טורקיז 15 דק' מבווץ — מפל קטן שנופל לבריכה בצבע לא ייאמן. ⚠️ מקום לתצפית וצילום — שחייה אסורה רשמית! חניה €5, מוגבלת לשעתיים.",
        images: [cm("Slap Virje (2).JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Slap+Virje+Bovec+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Slap+Virje+Bovec+Slovenia",
      },
      {
        name: "מפל קוזיאק",
        desc: "45 דק' הליכה קלה למפל נסתר בקצה מנהרה טבעית. האור שנכנס דרך פתח המנהרה יוצר אפקט מיוחד. מקסים ולא עמוס.",
        images: [cm("Kozjak falls Kobarid.jpg"), cm("Kobarid Kozjak-Fall 09.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kozjak+waterfall+Kobarid+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Kozjak+waterfall+Kobarid+Slovenia",
      },
    ],
    alerts: [
      { type: "warn", text: "🎉 היום חג עלייה (Veliki šmaren) — חג לאומי בסלובניה! חנויות סגורות (קניתם אתמול ✅) והאטרקציות עמוסות — לכן מקדימים בכל תחנה." },
      { type: "info", text: "קוזיאק: כניסה במזומן — €5 מבוגר, €3 ילד. חניה ליד גשר נפוליאון €1.50/שעה." },
      { type: "warn", text: "Virje — תצפית בלבד, שחייה אסורה רשמית. חניה מוגבלת לשעתיים (€5). שחייה — בחוף Čezsoča." },
    ],
    schedule: [
      { time: "08:30", desc: "🌊 מפל קוזיאק — להקדים לפני קהל החג! 20 דק' נסיעה + 30 דק' הליכה קלה למפל שבמנהרה", duration: "2 שע'", links: [{ label: "Waze", url: "https://waze.com/ul?ll=46.2480,13.5830&navigate=yes", type: "waze" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Kozjak+waterfall+Kobarid", type: "map" }] },
      { time: "11:00", desc: "📸 Virje (לפנה) בדרך חזרה — תצפית + תמונות (עד שעתיים חניה)", duration: "45 דק'", links: [{ label: "Waze", url: "https://waze.com/ul?ll=46.3640,13.5043&navigate=yes", type: "waze" }] },
      { time: "12:00", desc: "🍽️ ארוחה בבווץ (בחג — עדיף להזמין מקום או פיקניק)", duration: "1 שע'" },
      { time: "13:00", desc: "😴 מנוחה", duration: "1 שע'" },
      { time: "14:00", desc: "🏊 שחייה — חוף Čezsoča: גדות חצץ רחבות, רדוד ואיטי. נעלי מים!", duration: "2.5 שע'", links: [{ label: "חוף Čezsoča", url: "https://www.google.com/maps/search/?api=1&query=Cezsoca+beach+Soca+river", type: "map" }] },
      { time: "19:00", desc: "🌙 ערב משפחתי" },
    ],
    note: "יום הכרות עם הנהר. מכין לראפטינג מחר — לנוח! רוצים מים חמים יותר? נהר Nadiža (~40 דק' דרומה, ~20°C) — הכי חמים לילדים.",
    bonus: "💪 יש כוח? מוזיאון קוביד בקובריד (20 דק' מבווץ) — מוזיאון פרס אירופה. מפה טופוגרפית ענקית של חזית WWI. שעה וחצי.",
  },

  // יום 11
  {
    num: 11,
    title: "🚣 ראפטינג Classic ⭐ — היום שיזכרו",
    subtitle: "~8 ק״מ על נהר הסוצ'ה הטורקיז",
    type: "highlight",
    badge: "⭐ שיא",
    accommodation: {
      name: "Charming Bovec Apartment",
      address: "Bovec, סלובניה",
      checkin: "16:00–20:00",
      checkout: "עד 10:00",
      notes: "📱 צ'ק-אין דיגיטלי בלבד",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Dvor+44h+Bovec+Slovenia",
      wazeUrl: "https://waze.com/ul?ll=46.3356,13.5526&navigate=yes",
      image: cm("Velika korita Soče Soča (Bovec) 01.JPG"),
      imageCaption: "האזור — בווץ / עמק הסוצ'ה",
    },
    attractions: [
      {
        name: "ראפטינג Classic — Sport Mix",
        desc: "~8 ק״מ על הסוצ'ה הטורקיז עם מדריך. מסלול Boka–Trnovo. גלים, יופי, אקשן במינון נכון. ציוד מלא + ניאופרן + צילומים חינם. גיל מינימום: 6.",
        images: [cm("Velika korita Soče Soča (Bovec) 01.JPG")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sport+Mix+Bovec+Slovenia",
        siteUrl: "https://www.sportmix.si",
        googleMapsDir: "https://www.google.com/maps/dir//Sport+Mix+Bovec+Slovenia",
      },
    ],
    alerts: [
      { type: "ok",   text: "✅ הוזמן: Sport Mix · 08:30 · Trg golobarskih žrtev 18, Bovec" },
      { type: "warn", text: "⚠️ יתרי נהר (~€84 לקבוצה) — לוודא שהוסדרו עם ההזמנה מול Sport Mix." },
      { type: "info", text: "כולל: ציוד מלא + ניאופרן + צילומים חינם · גיל מינימום: 6 ✅" },
    ],
    schedule: [
      { time: "07:30", desc: "ארוחת בוקר טובה — חובה לפני ראפטינג!", duration: "1 שע'" },
      { time: "08:30", desc: "📍 הגעה ל-Sport Mix", links: [{ label: "Waze", url: "https://waze.com/ul?ll=46.3368,13.5536&navigate=yes", type: "waze" }, { label: "sportmix.si", url: "https://www.sportmix.si", type: "site" }] },
      { time: "09:00", desc: "🚣 ראפטינג Classic — ~8 ק״מ Boka→Trnovo", duration: "~3 שעות" },
      { time: "12:00", desc: "סיום + חזרה + מקלחות" },
      { time: "12:30", desc: "🍽️ ארוחת צהריים רעבה!" },
      { time: "14:00", desc: "🏊 מנוחה / שחייה", duration: "3 שע'" },
      { time: "18:00", desc: "🎉 ארוחת ערב חגיגית — הצלחנו!" },
    ],
    note: "ראפטינג = היום שיזכרו. ארוחת בוקר טובה לפני — חובה!",
  },

  // יום 12
  {
    num: 12,
    title: "🌲 יום חופשי בסוצ'ה",
    subtitle: "שחייה, מנוחה — האחה״צ האחרון בנהר",
    type: "light",
    badge: "יום קל",
    accommodation: {
      name: "Charming Bovec Apartment",
      address: "Bovec, סלובניה",
      checkin: "16:00–20:00",
      checkout: "עד 10:00",
      notes: "לילה אחרון",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Dvor+44h+Bovec+Slovenia",
      wazeUrl: "https://waze.com/ul?ll=46.3356,13.5526&navigate=yes",
      image: cm("Velika korita Soče Soča (Bovec) 01.JPG"),
      imageCaption: "האזור — בווץ / עמק הסוצ'ה",
    },
    attractions: [
      {
        name: "Slap Boka",
        desc: "המפל הגבוה בסלובניה — 106 מ'. 30 דק' הליכה מהכביש. מרשים ולא עמוס. אפשרות מצוינת ליום הגמיש.",
        images: [cm("Boka waterfall (53425136130).jpg")],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Slap+Boka+waterfall+Bovec+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Slap+Boka+Bovec+Slovenia",
      },
    ],
    schedule: [
      { time: "09:00", desc: "בוקר רגוע", duration: "1.5 שע'" },
      { time: "10:30", desc: "🏊 שחייה — Čezsoča / פתח מערבי של Velika korita / קייאק", duration: "2.5 שע'", links: [{ label: "חוף Čezsoča", url: "https://www.google.com/maps/search/?api=1&query=Cezsoca+beach+Soca+river", type: "map" }] },
      { time: "13:00", desc: "🍽️ ארוחה ב-Bovec", duration: "1 שע'" },
      { time: "14:00", desc: "חופשי — Slap Boka / גלידה / הליכה", duration: "3 שע'", links: [{ label: "Slap Boka", url: "https://www.google.com/maps/search/?api=1&query=Slap+Boka+Bovec", type: "map" }] },
      { time: "18:00", desc: "🌙 ערב משפחתי + אריזה — מחר טסים!" },
    ],
    note: "אחרי ראפטינג — יום ללא תוכנית. הגוף צריך לנוח. ⚠️ Boka: עד התצפית הראשונה בלבד — המסלול לפסגה מסוכן ולא לילדים!",
    bonus: "💪 יש כוח? מוזיאון קוברי́ד (בוקר) — פרס מוזיאון אירופה, שעה וחצי. או: אם ויתרתם על ורשיץ ביום ההגעה — היום מושלם לורשיץ+טרנטה בנחת (30 דק' מבווץ).",
  },

  // יום 13
  {
    num: 13,
    title: "🏠 בווץ → ונציה → הבית",
    subtitle: "Predel Pass → ונציה 5 שע' · Piazzale Roma · טיסה 22:00",
    type: "transit",
    badge: "מעבר",
    accommodation: {
      name: "—",
      address: "ונציה מרקו פולו",
      checkin: "—",
      checkout: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Venice+Marco+Polo+Airport",
      wazeUrl: "https://waze.com/ul?ll=45.5052,12.3519&navigate=yes",
    },
    attractions: [],
    alerts: [
      { type: "ok",   text: "✅ חניה ב-Garage San Marco (Piazzale Roma) — להזמין מראש ב-Parclick. ~€35. מזוודות נשארות ברכב." },
      { type: "ok",   text: "✅ דמי כניסה לונציה — לא חלים ביום שלנו (נבדק מול לוח התאריכים הרשמי). לוודא שוב שבוע לפני ב-cda.ve.it." },
      { type: "warn", text: "⚠️ Europcar — להחזיר את הרכב עד ~18:30. צ'ק-אין לטיסה נסגר בד\"כ שעה לפני ההמראה — יעד: בטרמינל עד 19:30." },
      { type: "info", text: "💡 ונציה: אין כניסה לעיר ברכב. חניה בפיאצלה רומא → רגל בלבד. חם באוגוסט — בקבוקים + מילוי בברזיות (nasoni)." },
    ],
    schedule: [
      { time: "08:30", desc: "יציאה מבווץ — Predel Pass → Tarvisio → A4 → ונציה", duration: "3.5 שע'", links: [{ label: "Waze לפיאצלה רומא", url: "https://waze.com/ul?ll=45.4408,12.3202&navigate=yes", type: "waze" }] },
      { time: "12:00", desc: "🅿️ Piazzale Roma — Garage San Marco. מזוודות ברכב!", links: [{ label: "Parclick הזמנה", url: "https://www.parclick.com", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Garage+San+Marco+Piazzale+Roma+Venice", type: "map" }] },
      { time: "12:15", desc: "🚶 הליכה ברגל: סנטה קרוצ'ה → סן פולו → גשר ריאלטו", duration: "1.5 שע'" },
      { time: "13:45", desc: "🍽️ אוכל + ספריץ בבקארו מקומי — לא בתיירות", duration: "1 שע'" },
      { time: "15:00", desc: "🚶 דורסודורו → פיאצה סן מרקו — מבחוץ בלבד, ללא תור", duration: "45 דק'" },
      { time: "15:45", desc: "🚶 חזרה לפיאצלה רומא ברגל", duration: "30 דק'" },
      { time: "16:15", desc: "🚗 נסיעה לשדה התעופה מרקו פולו", duration: "20 דק'", links: [{ label: "Waze לשדה", url: "https://waze.com/ul?ll=45.5052,12.3519&navigate=yes", type: "waze" }] },
      { time: "16:45", desc: "🚗 החזרת רכב Europcar — לא יאוחר מ-19:00!", links: [{ label: "Europcar מרקו פולו", url: "https://www.google.com/maps/search/?api=1&query=Europcar+Venice+Marco+Polo+Airport", type: "map" }] },
      { time: "17:15", desc: "✈️ צ'ק-אין + Duty Free + ארוחה בשדה" },
      { time: "22:00", desc: "✈️ המראה — LY — וחזרה הביתה! 🇮🇱" },
    ],
    note: "ונציה: ללא וואפורטו, ללא מוּרָאנו, ללא תורים. הליכה ואוכל טוב — בדיוק כמה שצריך. עייפים/חם מדי? מקצרים: מוותרים על דורסודורו וחוזרים אחרי סן מרקו.",
    bonus: "💡 נקודת מפגש אם מתפזרים: בסיס גשר ריאלטו. ניווט: שלטים צהובים על הקירות — Per San Marco / Per Rialto / Per P.le Roma.",
  },

];
