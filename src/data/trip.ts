// src/data/trip.ts — כל תוכן הטיול

export const tripTitle = "🇸🇮 מסלול סלובניה";
export const tripSub = "מערות · פליטביצה · בלד · סוצ'ה";

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
  },
  rastovaca: {
    name: "Flora House",
    address: "Rastovača, קרואטיה",
    checkin: "15:00–22:00",
    checkout: "עד 10:00",
    notes: "💵 מזומן בלבד!",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rastovaca+Plitvicka+Jezera+Croatia",
    wazeUrl: "https://waze.com/ul?ll=44.8800,15.6200&navigate=yes",
  },
  brezice: {
    name: "Guesthouse Les",
    address: "Brežice, סלובניה",
    checkin: "14:00–22:00",
    checkout: "06:00–10:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rimska+cesta+31+Brezice+Slovenia",
    wazeUrl: "https://waze.com/ul?ll=45.9042,15.5903&navigate=yes",
  },
  bled: {
    name: "Barn House MM",
    address: "Bled, סלובניה",
    checkin: "15:00–23:00",
    checkout: "07:00–10:00",
    notes: "מטבח מלא — לקנות חומרי גלם ב-BTC!",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kajuhova+cesta+7a+Bled+Slovenia",
    wazeUrl: "https://waze.com/ul?ll=46.3686,14.1139&navigate=yes",
  },
};

export const days: Day[] = [
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Skocjan_Caves_3.jpg/800px-Skocjan_Caves_3.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Skocjan_cave_bridge.jpg/800px-Skocjan_cave_bridge.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Skocjan+Caves+Slovenia",
        siteUrl: "https://park-skocjanske-jame.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Skocjan+Caves+Slovenia",
      },
      {
        name: "טירת פרדיאמה",
        desc: "הטירה הגדולה בעולם הבנויה בתוך צוק. מנהרות בריחה, שריון עתיק, ואגדת האביר אראזם. אודיו גייד בעברית!",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Predjama_castle.jpg/800px-Predjama_castle.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Predjama_Castle_2.jpg/800px-Predjama_Castle_2.jpg",
        ],
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Postojnska_jama_train.jpg/800px-Postojnska_jama_train.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Postojna_cave_interior.jpg/800px-Postojna_cave_interior.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Postojna+Cave+Slovenia",
        siteUrl: "https://www.postojnska-jama.eu/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Postojna+Cave+Slovenia",
      },
      {
        name: "ראסטוקה",
        desc: "כפר קסום על צומת שני נהרות. המים זורמים בין הבתים, מטחנות עתיקות ומפלים קטנים בכל פינה. עצירת צהריים — פורל מקומי.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rastoke_watermills.jpg/800px-Rastoke_watermills.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rastoke_Slunj.jpg/800px-Rastoke_Slunj.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rastoke+village+Croatia",
        googleMapsDir: "https://www.google.com/maps/dir//Rastoke+Slunj+Croatia",
      },
    ],
    alerts: [
      { type: "warn", text: "פוסטויניה: להגיע 08:45 — 15 דק' לפני הסיור!" },
      { type: "warn", text: "Flora House: תשלום מזומן בלבד!" },
      { type: "ok", text: "כרטיסי פוסטויניה מוזמנים מראש ✅" },
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Plitvicka_jezera.jpg/800px-Plitvicka_jezera.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Plitvice_lakes_lower.jpg/800px-Plitvice_lakes_lower.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Plitvice_waterfall.jpg/800px-Plitvice_waterfall.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Plitvice+Lakes+Entrance+1",
        siteUrl: "https://np-plitvicka-jezera.hr",
        googleMapsDir: "https://www.google.com/maps/dir//Plitvice+Lakes+National+Park+Croatia",
      },
    ],
    alerts: [
      { type: "ok", text: "כרטיסי פליטביצה מוזמנים מראש ✅" },
      { type: "info", text: "מסלול C: כניסה 1 → St1→P3 → סירה → P2→St3 → שאטל → 8 ק\"מ" },
      { type: "warn", text: "נקודת בלבול: מזח P3 מול תחנת שאטל St3 — לסמן על הטלפון!" },
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Terme_Catez_outdoor_pools.jpg/800px-Terme_Catez_outdoor_pools.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Terme+Catez+Slovenia",
        siteUrl: "https://www.terme-catez.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Terme+Catez+Slovenia",
      },
    ],
    schedule: [
      { time: "08:30", desc: "יציאה צפונה — A1→A2" },
      { time: "10:30", desc: "🛒 סופר ליד Karlovac — קניות לימי בלד", duration: "30 דק'" },
      { time: "12:45", desc: "הגעה, צ'ק-אין Guesthouse Les", links: [{ label: "Waze ללינה", url: "https://waze.com/ul?ll=45.9042,15.5903&navigate=yes", type: "waze" }] },
      { time: "13:00", desc: "ארוחת צהריים" },
      { time: "14:00", desc: "🏊 Terme Čatež — בריכות, מגלשות", duration: "~4 שעות", links: [{ label: "אתר רשמי", url: "https://www.terme-catez.si/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Terme+Catez+Slovenia", type: "map" }] },
      { time: "18:00", desc: "חזרה ללינה, ארוחת ערב" },
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lake_Bohinj_Slovenia.jpg/800px-Lake_Bohinj_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bohinj_lake_panorama.jpg/800px-Bohinj_lake_panorama.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Lake+Bohinj+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Lake+Bohinj+Slovenia",
      },
    ],
    alerts: [
      { type: "info", text: "BTC City: לקנות ניאופרן ונעלי מים לנהר הסוצ'ה — חובה לבסיס הבא!" },
    ],
    schedule: [
      { time: "08:30", desc: "יציאה מ-Brežice, A2 צפונה", duration: "1:15 שע'" },
      { time: "09:45", desc: "🛍️ BTC City Ljubljana — ניאופרן, נעלי מים, ציוד שחייה לסוצ'ה", duration: "1.5–2 שע'", links: [{ label: "BTC City", url: "https://www.btc.si", type: "site" }, { label: "Waze ל-BTC", url: "https://waze.com/ul?ll=46.0897,14.5394&navigate=yes", type: "waze" }] },
      { time: "11:45", desc: "ארוחה ב-BTC", duration: "30 דק'" },
      { time: "12:15", desc: "🚗 נסיעה לבלד", duration: "45 דק'", links: [{ label: "Waze לבלד", url: "https://waze.com/ul?ll=46.3686,14.1139&navigate=yes", type: "waze" }] },
      { time: "13:00", desc: "הגעה ל-Barn House MM. צ'ק-אין, סידור", duration: "45 דק'" },
      { time: "14:00", desc: "ארוחת צהריים" },
      { time: "15:00", desc: "🏊 אגם בוהין — כניסה ראשונה למים!", duration: "3–4 שע'", links: [{ label: "חוף שחייה", url: "https://www.google.com/maps/search/?api=1&query=Lake+Bohinj+swimming+Ribcev+Laz", type: "map" }] },
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lake_Bled_Slovenia.jpg/800px-Lake_Bled_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bled_Castle_Slovenia.jpg/800px-Bled_Castle_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lake_Bled_island_church.jpg/800px-Lake_Bled_island_church.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Lake+Bled+Slovenia",
        siteUrl: "https://www.blejski-grad.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Lake+Bled+Slovenia",
      },
      {
        name: "סטראזה — מגלשה + פארק חבלים",
        desc: "מגלשת קיץ שיורדת מהגבעה לכיוון האגם. פארק אדרנלין לצידה — חבלים, זיפליין ומסלולים לגילאים שונים. פתיחה בדיוק ב-11:00.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Straza_Bled_summer_toboggan.jpg/800px-Straza_Bled_summer_toboggan.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Straza+Bled+summer+toboggan",
        siteUrl: "https://www.straza-bled.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Straza+Bled+Slovenia",
      },
    ],
    schedule: [
      { time: "07:30", desc: "🚗 יציאה לבלד", duration: "40 דק'", links: [{ label: "Waze לבלד", url: "https://waze.com/ul?ll=46.3677,14.1139&navigate=yes", type: "waze" }] },
      { time: "08:15", desc: "🏰 אגם בלד + טירה — מוקדם לפני הצפיפות!", duration: "2.5 שע'", links: [{ label: "טירת בלד", url: "https://www.blejski-grad.si/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Bled+Castle+Slovenia", type: "map" }] },
      { time: "10:45", desc: "🚗 נסיעה קצרה לסטראזה", duration: "5 דק'" },
      { time: "11:00", desc: "🎢 סטראזה — מגלשת קיץ. פתיחה בדיוק 11:00!", duration: "45 דק'", links: [{ label: "אתר + מחירים", url: "https://www.straza-bled.si/en/", type: "site" }] },
      { time: "11:45", desc: "🧗 פארק אדרנלין סטראזה", duration: "2–2.5 שע'" },
      { time: "14:15", desc: "🍽️ ארוחה באזור בלד", duration: "45 דק'" },
      { time: "15:00", desc: "🚗 חזרה לבוהין", duration: "40 דק'" },
      { time: "15:40", desc: "🏊 שחייה באגם בוהין", duration: "2 שע'", links: [{ label: "חוף שחייה", url: "https://www.google.com/maps/search/?api=1&query=Lake+Bohinj+swimming", type: "map" }] },
      { time: "18:00", desc: "🌙 ערב חופשי" },
    ],
    note: "איחוד סטראזה (מגלשה + פארק) חוסך יום נסיעה.",
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Vintgar_gorge_Slovenia.jpg/800px-Vintgar_gorge_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Vintgar_gorge_walkway.jpg/800px-Vintgar_gorge_walkway.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vintgar+Gorge+Slovenia",
        siteUrl: "https://www.vintgar.si/en",
        googleMapsDir: "https://www.google.com/maps/dir//Vintgar+Gorge+Slovenia",
      },
    ],
    alerts: [
      { type: "ok", text: "כרטיסי וינטגר מוזמנים מראש ✅ — כניסה מ-08:20" },
    ],
    schedule: [
      { time: "07:00", desc: "🚗 יציאה לוינטגר", duration: "30 דק'", links: [{ label: "Waze לוינטגר", url: "https://waze.com/ul?ll=46.3974,14.0875&navigate=yes", type: "waze" }] },
      { time: "07:30", desc: "🌊 ערוץ וינטגר — 1.6 ק\"מ מסילות עץ מעל נחל שוצף", duration: "2 שעות", links: [{ label: "אתר רשמי", url: "https://www.vintgar.si/en", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Vintgar+Gorge+Slovenia", type: "map" }] },
      { time: "09:30", desc: "🚗 חזרה לבוהין" },
      { time: "10:00", desc: "☕ ארוחת בוקר שנייה" },
      { time: "11:00", desc: "🏊 חופשי לגמרי — שחייה, סאפ, קייאק, מנוחה", duration: "5–6 שע'", links: [{ label: "השכרת קייאק", url: "https://www.google.com/maps/search/?api=1&query=kayak+rental+Lake+Bohinj", type: "map" }] },
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
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mostnica_gorge_Slovenia.jpg/800px-Mostnica_gorge_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Mostnica_gorge_2.jpg/800px-Mostnica_gorge_2.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mostnica+Gorge+Stara+Fuzina+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Mostnica+Gorge+Stara+Fuzina+Slovenia",
      },
      {
        name: "רכבל וואגל",
        desc: "רכבל מ-Ukanc לפסגה בגובה 1,922 מ'. מלמעלה — תצפית רחבה על כל האלפים היוליאניים ואגם בוהין למטה. בקיץ יש שבילי הליכה קצרים מהפסגה.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Vogel_ski_resort_Slovenia.jpg/800px-Vogel_ski_resort_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vogel_view_Bohinj.jpg/800px-Vogel_view_Bohinj.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vogel+Cable+Car+Ukanc+Slovenia",
        siteUrl: "https://www.vogel.si/en/",
        googleMapsDir: "https://www.google.com/maps/dir//Vogel+Cable+Car+Ukanc+Slovenia",
      },
    ],
    schedule: [
      { time: "08:30", desc: "🥾 ערוץ מוסטניצה — יציאה מ-Stara Fužina", duration: "2.5 שע'", links: [{ label: "מוצא השביל", url: "https://www.google.com/maps/search/?api=1&query=Mostnica+Gorge+Stara+Fuzina", type: "map" }] },
      { time: "11:00", desc: "חזרה + נשנוש", duration: "30 דק'" },
      { time: "11:30", desc: "🚗 נסיעה ל-Ukanc", duration: "15 דק'", links: [{ label: "Waze לוואגל", url: "https://waze.com/ul?ll=46.2841,13.8486&navigate=yes", type: "waze" }] },
      { time: "12:00", desc: "🚡 וואגל — רכבל ל-1,922 מ'. תצפית + הליכות קצרות.", duration: "3–3.5 שע'", links: [{ label: "אתר + מחירים", url: "https://www.vogel.si/en/", type: "site" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Vogel+Cable+Car+Slovenia", type: "map" }] },
      { time: "15:30", desc: "ירידה ברכבל, חזרה" },
      { time: "16:00", desc: "🏊 שחייה אחרונה באגם בוהין — פרידה!", duration: "2 שע'" },
      { time: "18:30", desc: "ארוחה + אריזה — מחר עוברים לסוצ'ה" },
    ],
    note: "יום אלפיני. שחייה אחרונה = סיום סנטימנטלי לבסיס בוהין.",
    bonus: "💪 יש כוח? תצפית Orlove Glave — 20 דק' הליכה מהתחנה העליונה. נוף 360°.",
  },
];

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
    },
    attractions: [
      {
        name: "רכבת המכוניות",
        desc: "מנהרה תת-הרית שמחברת בין עמק בוהין לסוצ'ה. המכוניות עולות על הרכבת, 35 דקות דרך ההר. ילדים אוהבים מאוד. מזומן בלבד!",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bohinjska_Bistrica_train.jpg/800px-Bohinjska_Bistrica_train.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Bohinjska+Bistrica+train+station",
        googleMapsDir: "https://www.google.com/maps/dir//Bohinjska+Bistrica+Slovenia",
      },
      {
        name: "מעבר ורשיץ",
        desc: "50 פניות ממוספרות, גובה 1,611 מ'. עצירה בפסגה לקפה ותצפית. זו לא לוגיסטיקה — זו אטרקציה. לנסוע לאט ולעצור.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vrsic_Pass_Slovenia.jpg/800px-Vrsic_Pass_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Vrsic_pass_road.jpg/800px-Vrsic_pass_road.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vrsic+Pass+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Vrsic+Pass+Slovenia",
      },
    ],
    alerts: [
      { type: "warn", text: "רכבת המכוניות: מזומן בלבד! לבדוק זמנים מראש." },
      { type: "info", text: "📱 להוריד Digital Receptionist App לפני ההגעה — צ'ק-אין דיגיטלי בלבד!" },
    ],
    schedule: [
      { time: "08:30", desc: "יציאה ל-Bohinjska Bistrica", duration: "10 דק'", links: [{ label: "Waze לרכבת", url: "https://waze.com/ul?ll=46.2622,13.9558&navigate=yes", type: "waze" }] },
      { time: "09:00", desc: "🚂 רכבת המכוניות — מכונית על רכבת! 35 דק' במנהרה. מזומן בלבד!", duration: "45 דק'" },
      { time: "10:00", desc: "🚗 מ-Most na Soči לכיוון ורשיץ", duration: "15 דק'" },
      { time: "10:15", desc: "🏔️ מעבר ורשיץ — 50 פניות. עצירה בפסגה 1,611 מ'.", duration: "1.5 שע'", links: [{ label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Vrsic+Pass+Slovenia", type: "map" }] },
      { time: "11:45", desc: "ירידה לעמק הסוצ'ה דרך Trenta", duration: "45 דק'" },
      { time: "12:30", desc: "הגעה לבווץ — צ'ק-אין + ארוחה", links: [{ label: "Waze לדירה", url: "https://waze.com/ul?ll=46.3356,13.5526&navigate=yes", type: "waze" }] },
      { time: "14:00", desc: "🏊 סוצ'ה — הנהר הטורקיז, 14–16°C", duration: "2–3 שע'", links: [{ label: "מקום שחייה", url: "https://www.google.com/maps/search/?api=1&query=Soca+River+swimming+Bovec", type: "map" }] },
      { time: "17:00", desc: "🌙 ערב חופשי" },
    ],
    note: "רכבת + ורשיץ = יום מעבר שהוא חוויה. כביש Trenta צר ומרהיב — לנסוע בנחת.",
    bonus: "💪 יש כוח? כפר טרנטה בדרך — Velika korita, גורג' 750 מ' ברוחב 2 מ'. חינם, ממש על הכביש. 45 דק'. או: מפל קוזיאק אחרי השחייה (~15:00). אם עושים קוזיאק היום — יום 10 נשאר שחייה + לפנה בלבד.",
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
    },
    attractions: [
      {
        name: "Virje — לפנה",
        desc: "בריכה טבעית טורקיז 15 דק' מבווץ. מפל קטן שנופל לתוך בריכת שחייה מושלמת. לא כולם מכירים — לכן לא עמוסה. הבריכה הכי יפה בעמק.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Slap_Virje_Bovec.jpg/800px-Slap_Virje_Bovec.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Virje_waterfall_Slovenia.jpg/800px-Virje_waterfall_Slovenia.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Slap+Virje+Bovec+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Slap+Virje+Bovec+Slovenia",
      },
      {
        name: "מפל קוזיאק",
        desc: "45 דק' הליכה קלה למפל נסתר בקצה מנהרה טבעית. האור שנכנס דרך פתח המנהרה יוצר אפקט מיוחד. מקסים ולא עמוס.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kozjak_waterfall_Kobarid.jpg/800px-Kozjak_waterfall_Kobarid.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kozjak+waterfall+Kobarid+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Kozjak+waterfall+Kobarid+Slovenia",
      },
    ],
    schedule: [
      { time: "09:00", desc: "🏊 שחייה ב-Virje (לפנה) — 15 דק' מבווץ", duration: "3 שע'", links: [{ label: "Waze", url: "https://waze.com/ul?ll=46.3640,13.5043&navigate=yes", type: "waze" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Slap+Virje+Bovec", type: "map" }] },
      { time: "12:00", desc: "🍽️ ארוחה", duration: "1 שע'" },
      { time: "13:00", desc: "😴 מנוחה — חיונית אחרי מים קרים", duration: "1 שע'" },
      { time: "14:00", desc: "🌊 מפל קוזיאק — 45 דק' הליכה למפל נסתר", duration: "1.5 שע'", links: [{ label: "Waze", url: "https://waze.com/ul?ll=46.2480,13.5830&navigate=yes", type: "waze" }, { label: "מפה", url: "https://www.google.com/maps/search/?api=1&query=Kozjak+waterfall+Kobarid", type: "map" }] },
      { time: "15:30", desc: "חזרה לבווץ" },
      { time: "19:00", desc: "🌙 ערב משפחתי" },
    ],
    note: "יום הכרות עם הנהר. מכין לראפטינג מחר — לנוח!",
    bonus: "💪 יש כוח? מוזיאון קוביד בקובריד (20 דק' מבווץ) — מוזיאון פרס אירופה. מפה טופוגרפית ענקית של חזית WWI. שעה וחצי.",
  },

  // יום 11
  {
    num: 11,
    title: "🚣 ראפטינג Classic ⭐ — היום שיזכרו",
    subtitle: "~8 ק"מ על נהר הסוצ'ה הטורקיז",
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
    },
    attractions: [
      {
        name: "ראפטינג Classic — Sport Mix",
        desc: "~8 ק"מ על הסוצ'ה הטורקיז עם מדריך. מסלול Boka–Trnovo. גלים, יופי, אקשן במינון נכון. ציוד מלא + ניאופרן + צילומים חינם. גיל מינימום: 6.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Rafting_Soca_river_Slovenia.jpg/800px-Rafting_Soca_river_Slovenia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Soca_river_rafting.jpg/800px-Soca_river_rafting.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sport+Mix+Bovec+Slovenia",
        siteUrl: "https://www.sportmix.si",
        googleMapsDir: "https://www.google.com/maps/dir//Sport+Mix+Bovec+Slovenia",
      },
    ],
    alerts: [
      { type: "ok", text: "✅ הוזמן: Sport Mix · 08:30 · Trg golobarskih žrtev 18, Bovec" },
      { type: "info", text: "כולל: ציוד מלא + ניאופרן + צילומים חינם · גיל מינימום: 6 ✅" },
    ],
    schedule: [
      { time: "07:30", desc: "ארוחת בוקר טובה — חובה לפני ראפטינג!", duration: "1 שע'" },
      { time: "08:30", desc: "📍 הגעה ל-Sport Mix", links: [{ label: "Waze", url: "https://waze.com/ul?ll=46.3368,13.5536&navigate=yes", type: "waze" }, { label: "sportmix.si", url: "https://www.sportmix.si", type: "site" }] },
      { time: "09:00", desc: "🚣 ראפטינג Classic — ~8 ק"מ Boka→Trnovo", duration: "~3 שעות" },
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
    subtitle: "שחייה, מנוחה — האחה"צ האחרון בנהר",
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
    },
    attractions: [
      {
        name: "Slap Boka",
        desc: "המפל הגבוה בסלובניה — 106 מ'. 30 דק' הליכה מהכביש. מרשים ולא עמוס. אפשרות מצוינת ליום הגמיש.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boka_waterfall_Slovenia.jpg/800px-Boka_waterfall_Slovenia.jpg",
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Slap+Boka+waterfall+Bovec+Slovenia",
        googleMapsDir: "https://www.google.com/maps/dir//Slap+Boka+Bovec+Slovenia",
      },
    ],
    schedule: [
      { time: "09:00", desc: "בוקר רגוע", duration: "1.5 שע'" },
      { time: "10:30", desc: "🏊 שחייה — Virje / נקודה חדשה / קייאק", duration: "2.5 שע'", links: [{ label: "Virje", url: "https://www.google.com/maps/search/?api=1&query=Slap+Virje+Bovec", type: "map" }] },
      { time: "13:00", desc: "🍽️ ארוחה ב-Bovec", duration: "1 שע'" },
      { time: "14:00", desc: "חופשי — Slap Boka / גלידה / הליכה", duration: "3 שע'", links: [{ label: "Slap Boka", url: "https://www.google.com/maps/search/?api=1&query=Slap+Boka+Bovec", type: "map" }] },
      { time: "18:00", desc: "🌙 ערב משפחתי + אריזה — מחר טסים!" },
    ],
    note: "אחרי ראפטינג — יום ללא תוכנית. הגוף צריך לנוח.",
    bonus: "💪 יש כוח? מוזיאון קוביד (09:00–10:30) — פרס מוזיאון אירופה, שעה וחצי. בוקר תרבותי + אחה"צ חופשי לגמרי. או — Slap Boka: המפל הגבוה בסלובניה, 106 מ', 30 דק' הליכה.",
  },

  // יום 13
  {
    num: 13,
    title: "🏠 בווץ → ונציה → הבית",
    subtitle: "נסיעה קצרה (3.5 שע'), duty free, טיסה 22:00",
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
    schedule: [
      { time: "09:00", desc: "יציאה מבווץ — Predel Pass → Tarvisio → A4 → ונציה", duration: "3.5 שע'", links: [{ label: "Waze לשדה התעופה", url: "https://waze.com/ul?ll=45.5052,12.3519&navigate=yes", type: "waze" }] },
      { time: "12:30", desc: "הגעה לאזור ונציה, ארוחה", duration: "45 דק'" },
      { time: "13:30", desc: "🚗 החזרת רכב Europcar", links: [{ label: "Europcar ונציה", url: "https://www.google.com/maps/search/?api=1&query=Europcar+Venice+Marco+Polo+Airport", type: "map" }] },
      { time: "14:00", desc: "🛍️ שדה התעופה — Duty Free, קניות, אוכל, מנוחה", duration: "8 שעות" },
      { time: "22:00", desc: "✈️ המראה — LY — וחזרה הביתה! 🇮🇱" },
    ],
    note: "3.5 שע' נסיעה בלבד! 8 שעות בשדה = אפס לחץ.",
    bonus: "💪 שחייה אחרונה? לצאת ב-10:00 — עדיין מגיעים בנוח ב-14:00.",
  },

];
