// src/data/rich-content.ts
// תוכן עמוק לדפי האטרקציות — רמת כתיבה: Salt in Our Hair
// תמונות: Unsplash (hotlinking מותר לפי תנאי השירות)

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

export interface RoutePoint {
  lat: number;
  lng: number;
  label: string;
  type: 'start' | 'via' | 'end';
}

export interface RouteGuide {
  facts: Fact[];                 // אורך / זמן / סוג / חניה
  mapCenter: [number, number];
  mapZoom: number;
  points: RoutePoint[];          // נקודות ציון על המפה (חניה → כניסה → סוף)
  schematic?: boolean;           // אם הקו סכמטי ולא GPS מדויק
  steps: { title: string; note: string }[]; // הוראות התמצאות בשטח
  tip?: string;
  links?: { label: string; url: string; kind: 'map' | 'official' | 'blog' }[]; // מפת מסלול שנפתחת + מקורות
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
  routeGuide?: RouteGuide;
}

export interface DayContent {
  hotelAlert?: string;
  hotelPhone?: string;
  hotelName?: string;
}

// Unsplash base URL helper (legacy — kept for any remaining references)
const u = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&q=80&fit=crop`;

// Wikimedia Commons helper — stable, freely-licensed photos by exact file name.
// Resolves via Special:FilePath, which 302-redirects to the current image.
const c = (file: string, w = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

export const dayContent: Record<number, DayContent> = {
  1: {
    hotelAlert: 'לתאם עם המלון ערב קודם — צ\'ק-אאוט ב-08:00 מוקדם מהרגיל (רגיל: עד 10:30). לבקש ארוחת בוקר מוקדמת.',
    hotelPhone: '+390421440018',
    hotelName: 'Hotel Forte del 48',
  },
  5: {
    hotelAlert: 'קניות חובה ב-BTC City בדרך — ניאופרן ונעלי מים לסוצ\'ה. לא להשאיר לאחר.',
  },
  9: {
    hotelAlert: 'להוריד Digital Receptionist App לפני ההגעה — צ\'ק-אין דיגיטלי בלבד!',
  },
};

export const attractionContent: Record<string, AttractionContent> = {

  skocjan: {
    slug: 'skocjan',
    heroImage: c('SkocjanCaves.JPG'),
    heroImageCaption: 'הגשר Cerkvenik — 47 מטר מעל הנהר הרועש',
    whyGo: 'זו לא עוד מערה עם נטיפים. שקוצ\'יאן היא קניון של 150 מטר גובה — מתחת לאדמה. נהר שלם נכנס לפה לאדמה ומופיע 34 ק״מ משם ליד הים האדריאטי. הגשר שחוצים אותו עומד 47 מטר מעל הנהר הרועש. אי אפשר להכין את הילדים לזה — הם פשוט יפתחו את הפה.',
    whyGoSuffix: 'בניגוד לפוסטויניה — כאן אין רכבת. הכל ברגל, בחושך, בקול הנהר. זו חוויה אחרת לגמרי — ולכן שקוצ\'יאן קודמת.',
    facts: [
      { icon: '🌡️', label: 'טמפרטורה', val: '12°C כל השנה' },
      { icon: '⏱️', label: 'משך', val: '2.5–3 שעות' },
      { icon: '🚶', label: 'הליכה', val: '5 ק״מ · ~1000 מדרגות' },
      { icon: '🎂', label: 'גיל', val: 'ילד 10 ✅ ילדה 13 ✅' },
      { icon: '💶', label: 'מחיר', val: '€18 מבוגר · €10 ילד' },
      { icon: '📸', label: 'צילום', val: 'אסור בפנים!' },
    ],
    alerts: [
      { type: 'cold', text: '🥶 12 מעלות בפנים — להוציא סוודרים מהמזוודות לפני הכניסה.' },
      { type: 'ok',   text: '✅ כרטיסים מוזמנים מראש — להגיע 10 דק\' לפני 10:00.' },
      { type: 'warn', text: '⚠️ צילום אסור לחלוטין בפנים — כן, גם עם טלפון. המדריכים מקפידים.' },
    ],
    flowSteps: [
      { title: 'המערה השקטה — Tiha jama', note: 'כניסה דרך מנהרה מלאכותית. נטיפים ענקיים, שקט מוחלט.' },
      { title: '🌊 קניון הנהר — הרגע שמשנה הכל', note: 'הנהר ממלמל בהתחלה. ואז — הקניון נפתח. 150 מטר עומק, רעש הנהר מהד מכל כיוון.', highlight: true },
      { title: '🌉 גשר Cerkvenik — 47 מטר מעל הנהר', note: 'חוצים את הגשר. הנהר רועש 47 מטר מתחת לרגליים.', highlight: true },
      { title: 'הדולינה הגדולה — יציאה לאור', note: 'פתאום — שמיים. הניגוד אחרי החושך הוא רגע שעוצר את הנשימה.' },
      { title: 'חזרה ברגל דרך הכפר', note: '5 ק״מ סה"כ. קפה ושירותים במרכז המבקרים.' },
    ],
    bringItems: [
      { icon: '🧥', label: 'סוודר / ג\'קט לכולם' },
      { icon: '👟', label: 'נעלי הליכה — לא כפכפים' },
      { icon: '💧', label: 'מים — בקבוק לכל אחד' },
      { icon: '🍫', label: 'חטיף קטן — 3 שעות' },
      { icon: '📷', label: 'מצלמה לפנים — לא!', no: true },
      { icon: '🧳', label: 'מזוודות — נשארות ברכב', no: true },
    ],
    routeGuide: {
      facts: [
        { icon: '🚶', label: 'הליכה', val: '3–5 ק"מ · 500–1000 מדרגות' },
        { icon: '⏱️', label: 'משך', val: '1.5–3 שעות' },
        { icon: '🌡️', label: 'טמפ\'', val: '12°C קבוע' },
        { icon: '🌉', label: 'גשר Cerkvenik', val: '~45 מ\' מעל הנהר' },
        { icon: '📷', label: 'צילום', val: 'אסור בפנים!' },
        { icon: '🅿️', label: 'חניה', val: 'Matavun — חינם' },
        { icon: '💶', label: 'כניסה (קיץ)', val: '€24 · ילד €12.5' },
        { icon: '🦶', label: 'יציאה קלה', val: 'פוניקולר מ-Velika dolina' },
      ],
      mapCenter: [45.6635, 13.9905],
      mapZoom: 14,
      schematic: true,
      points: [
        { lat: 45.6635, lng: 13.9905, label: 'מרכז מבקרים Matavun — התחלה', type: 'start' },
        { lat: 45.6620, lng: 13.9890, label: 'קניון הנהר + גשר Cerkvenik', type: 'via' },
        { lat: 45.6600, lng: 13.9920, label: 'Velika dolina — יציאה + פוניקולר', type: 'end' },
      ],
      steps: [
        { title: '🅿️ מרכז מבקרים Matavun', note: 'חניה חינם. הסיור מודרך בלבד ובלוח זמנים (קיץ: 9:00–16:00 בכל שעה). להזמין מראש בקיץ.' },
        { title: '🦇 Tiha jama → קניון הנהר', note: 'נכנסים דרך מנהרה לאולם השקט, ואז נפתח הקניון הענק עם הנהר רועש למטה.' },
        { title: '🌉 גשר Cerkvenik (~45 מ\')', note: 'חוצים את הגשר התלוי מעל הנהר — הרגע הגדול. אסור לצלם בפנים.' },
        { title: '🌅 Velika dolina — יציאה', note: 'יוצאים לאור. יציאה 1: פוניקולר חזרה (קל לברכיים). קיץ — אפשר יציאה 2: לולאה רגלית מלאה (~5 ק"מ, 1000 מדרגות).' },
      ],
      tip: 'הכל ברגל, בלי רכבת — מאמץ אמיתי עם הרבה מדרגות. 12°C — סוודר לכולם. אם הילדים מתעייפים: יציאה 1 + פוניקולר.',
      links: [
        { label: 'סיורים — אתר רשמי', url: 'https://www.park-skocjanske-jame.si/en/read/tourist-information/skocjan-caves-guided-tours', kind: 'official' },
        { label: 'כרטיסים', url: 'https://park-skocjanske-jame.mojekarte.si/en', kind: 'official' },
      ],
    },
  },

  predjama: {
    slug: 'predjama',
    heroImage: c('El Castillo de Predjama.JPG'),
    secondImage: c('Predjama - Grad Predjama 3824.JPG'),
    heroImageCaption: 'טירת פרדיאמה — בנויה בתוך צוק גיר בגובה 123 מטר',
    whyGo: 'הטירה הגדולה בעולם הבנויה בתוך צוק. לא "על" הצוק — בתוכו. האביר אראזם ישב כאן כשצבא שלם צר עליו בחוץ, ובזמן הזה הבריח מזון דרך מנהרות נסתרות שרצו עמוק בתוך ההר. בסוף הוא נפל לא בקרב — אלא בשירותים. הסיפור הזה הוא אמיתי.',
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
      { type: 'info', text: '💡 מערת הטירה — 45 דק\' נוספות, מגיל 6. שווה אם יש אנרגיה.' },
    ],
    flowSteps: [
      { title: 'מבחוץ — הצוק בגובה 123 מ\'', note: 'לפני הכניסה — לעצור ולהסתכל מבחוץ. הצוק בגובה 10 קומות.' },
      { title: 'חדרי הטירה', note: 'שריון עתיק, ציוד צבאי — כל הפאר של מאה ה-15 בתוך צוק.' },
      { title: '🗝️ מנהרות הבריחה', note: 'כאן ברח אראזם. אפשר ממש להיכנס ולראות את המנהרה.', highlight: true },
      { title: 'הקומה העליונה — נוף פנורמי', note: 'נוף על העמק הסלובני.', highlight: true },
    ],
    bringItems: [
      { icon: '👟', label: 'נעלי הליכה — יש מדרגות' },
      { icon: '📱', label: 'טלפון לצילום' },
      { icon: '💧', label: 'מים' },
    ],
    routeGuide: {
      facts: [
        { icon: '🎧', label: 'אודיו גייד', val: 'בעברית ✅ (כלול / €2.90)' },
        { icon: '🏰', label: 'גובה הצוק', val: '123 מ\'' },
        { icon: '⏱️', label: 'משך', val: '~1–1.5 שעות' },
        { icon: '🦇', label: 'מערת הטירה', val: 'מאי–ספט · מגיל 6 · +45 דק\'' },
        { icon: '🅿️', label: 'חניה', val: 'בתשלום מול הטירה' },
        { icon: '📜', label: 'הסיפור', val: 'אגדת האביר אראזם' },
        { icon: '🚁', label: 'אסור', val: 'רחפנים' },
        { icon: '🪜', label: 'שים לב', val: 'הרבה מדרגות (לא לעגלות)' },
      ],
      mapCenter: [45.8159, 14.1278],
      mapZoom: 15,
      schematic: true,
      points: [
        { lat: 45.8159, lng: 14.1278, label: 'חניה מול הטירה', type: 'start' },
      ],
      steps: [
        { title: '🅿️ חניה מול הטירה', note: 'חניון בתשלום ממש מול הצוק. עם כרטיס משולב עם פוסטויניה — לפעמים שאטל/מונית בין השניים (9 ק"מ).' },
        { title: '🎧 אודיו גייד בעברית', note: 'להוריד מראש את האפליקציה (כלול בכרטיס) + אוזניות, או לשכור מכשיר ב-€2.90. נדיר שיש עברית!' },
        { title: '🗝️ חדרי הסלע + סיפור אראזם', note: 'סיור עצמי בחדרים הבנויים בתוך הצוק, עם סיפור המצור על האביר אראזם — הילדים יתחברו.' },
        { title: '🦇 אופציה: מערת הטירה', note: 'מאי–ספט בלבד, מגיל 6, +45 דק\'. שתי קומות עליונות של המערה (יש מושבת עטלפים).' },
      ],
      tip: 'אודיו בעברית — להוריד את האפליקציה מראש + אוזניות לכל מי שרוצה. הרבה מדרגות. משלבים עם פוסטויניה באותו יום.',
      links: [
        { label: 'סיור הטירה — אתר רשמי', url: 'https://www.postojnska-jama.eu/en/information/predjama-castle-tour/', kind: 'official' },
        { label: 'מערת הטירה (מאי–ספט)', url: 'https://www.postojnska-jama.eu/en/attractions-in-the-park/cave-under-predjama-castle/', kind: 'official' },
      ],
    },
  },

  postojna: {
    slug: 'postojna',
    heroImage: c('Postojna Cave - Slovenia.jpg'),
    heroImageCaption: 'פוסטויניה — נטיפים בתאורה',
    whyGo: 'ראיתם אתמול את שקוצ\'יאן. פוסטויניה שונה לגמרי. כאן עולים על רכבת חשמלית קטנה ש-3.5 קילומטר נוסעת לתוך ההר, לתוך חשכה מוחלטת, עד שנדלקים האורות ורואים — אולם בגודל מגרש כדורגל מכוסה נטיפים.',
    whyGoSuffix: 'ותינוקות הדרקון — ה-Olm. יצור לבן, עיוור, שחי כאן במים מאות שנים. הילדים לא ישכחו אותו.',
    facts: [
      { icon: '🚂', label: 'רכבת', val: '3.5 ק"מ לתוך המערה' },
      { icon: '⏱️', label: 'משך', val: '1.5 שעות' },
      { icon: '🌡️', label: 'טמפרטורה', val: '10°C' },
      { icon: '💶', label: 'מחיר', val: 'מוזמן מראש ✅' },
      { icon: '🦎', label: 'תינוק הדרקון', val: 'Olm — חי כאן!' },
      { icon: '⚠️', label: 'חשוב', val: 'להגיע 08:45!' },
    ],
    alerts: [
      { type: 'warn', text: '⚠️ להגיע לאזור הכרטיסים לפני 09:00 — הסיור מתחיל בדיוק!' },
      { type: 'ok',   text: '✅ כרטיסים מוזמנים מראש.' },
      { type: 'cold', text: '🥶 10°C בפנים — להביא סוודר.' },
    ],
    flowSteps: [
      { title: '🚂 עלייה לרכבת — 3.5 ק"מ לתוך החשכה', note: 'הרכבת הקטנה זזה לאט. האורות נעלמים. ואז — חשכה מוחלטת.', highlight: true },
      { title: 'אולם הקונצרטים', note: 'חדר ענק שמכיל 10,000 איש. פעם הופיע כאן ה-Beatles.' },
      { title: '🦎 תינוקות הדרקון — Olm', note: 'יצור עיוור, לבן כמו שיש. חי עד 100 שנה.', highlight: true },
      { title: 'חזרה ברכבת', note: 'הרכבת חוזרת. הילדים כבר מדברים על מה ראו.' },
    ],
    bringItems: [
      { icon: '🧥', label: 'סוודר — 10 מעלות' },
      { icon: '👟', label: 'נעלי הליכה' },
      { icon: '💧', label: 'מים' },
    ],
    routeGuide: {
      facts: [
        { icon: '🚂', label: 'רכבת', val: '3.7 ק"מ פנימה + 1.5 הליכה' },
        { icon: '⏱️', label: 'משך', val: '~90 דק\'' },
        { icon: '🌡️', label: 'טמפ\'', val: '10°C' },
        { icon: '🦎', label: 'הכוכב', val: 'תינוקות הדרקון (Olm)' },
        { icon: '🎧', label: 'אודיו', val: 'בעברית ✅ (€3.90)' },
        { icon: '📷', label: 'צילום', val: 'מותר · בלי פלאש' },
        { icon: '🅿️', label: 'חניה', val: '€6 ליום' },
        { icon: '⏰', label: 'להגיע', val: '30 דק\' מוקדם' },
      ],
      mapCenter: [45.7829, 14.2037],
      mapZoom: 15,
      schematic: true,
      points: [
        { lat: 45.7829, lng: 14.2037, label: 'כניסת המערה + חניה', type: 'start' },
      ],
      steps: [
        { title: '🅿️ הגעה וחניה (30 דק\' מוקדם)', note: 'חניה €6. עלייה לרכבת מתחילה 15 דק\' לפני שעת הסיור — לא לאחר! תיקים גדולים בלוקרים.' },
        { title: '🚂 רכבת 3.7 ק"מ לתוך ההר', note: 'רכבת חשמלית פתוחה דרך מנהרות ואולמות — חוויה בפני עצמה. רוח קרה — סוודר.' },
        { title: '🚶 הליכה 1.5 ק"מ באולמות', note: 'הליכה מודרכת על שביל בטון בין הנטיפים הגדולים. אודיו בעברית זמין.' },
        { title: '🦎 תינוקות הדרקון (Olm)', note: 'היצור הלבן העיוור — הדבר שהילדים הכי יזכרו. ואז רכבת חזרה.' },
      ],
      tip: '10°C — סוודר לכולם. להגיע 30 דק\' מוקדם (חניה+לוקרים+עלייה לרכבת). אודיו בעברית €3.90. צילום מותר בלי פלאש וחצובה.',
      links: [
        { label: 'סיורי המערה — אתר רשמי', url: 'https://www.postojnska-jama.eu/en/information/postojna-cave-tours/', kind: 'official' },
      ],
    },
  },

  rastoka: {
    slug: 'rastoka',
    heroImage: c('Rastoke (1), Slunj, Croatia.JPG'),
    secondImage: c('Slunj, Rastoke, waterfalls of the Slunjcica river.JPG'),
    heroImageCaption: 'ראסטוקה — מטחנות עתיקות על מפלי הנהר',
    whyGo: 'ישנם כפרים שנבנו ליד נהר. ראסטוקה נבנתה על הנהר עצמו. הבתים עומדים בין הזרמים, המים עוברים מתחת לרצפות, ומטחנות עתיקות מגלגלות מאות שנים על מפלים שממש לצד שולחן הסלון.',
    whyGoSuffix: 'עצירת צהריים — פורל שנדוג מהנהר ומוגש חצי שעה אחר כך.',
    facts: [
      { icon: '⏱️', label: 'משך', val: '1.5 שעות + צהריים' },
      { icon: '🐟', label: 'מומחיות', val: 'פורל טרי מהנהר' },
      { icon: '💶', label: 'כניסה', val: 'חינם' },
      { icon: '📸', label: 'צילום', val: 'מדהים בכל זווית' },
    ],
    alerts: [
      { type: 'info', text: '🍽️ Pod Rastočkim Krovom — לאכול על הנהר. פורל מהמים.' },
    ],
    flowSteps: [
      { title: 'כניסה לכפר ברגל', note: 'החניון קטן. הבתים נבנו על הנהר עצמו.' },
      { title: '💧 מטחנות ומפלים', note: 'בכל פינה — מפל קטן אחר. המטחנות עדיין עובדות.', highlight: true },
      { title: '🐟 ארוחת צהריים — פורל טרי', note: 'Pod Rastočkim Krovom. הפורל יצא מהנהר לצלחת.', highlight: true },
    ],
    bringItems: [
      { icon: '📱', label: 'טלפון לצילום — שווה כל זווית' },
      { icon: '💧', label: 'מים' },
      { icon: '💶', label: 'מזומן לאוכל' },
    ],
    routeGuide: {
      facts: [
        { icon: '⏱️', label: 'משך', val: '~1–1.5 ש\' + צהריים' },
        { icon: '🅿️', label: 'חניה', val: 'Zone 1 €2/ש\' · Zone 2-3 €0.40' },
        { icon: '🚶', label: 'טיילת', val: 'חופשית (הלוך-חזור)' },
        { icon: '🎫', label: 'לולאת קניון', val: 'Vodene Tajne — €5' },
        { icon: '🐟', label: 'אוכל', val: 'פורל טרי מהנהר' },
        { icon: '📸', label: 'תמונה', val: 'מגשר סנט איוון' },
        { icon: '👟', label: 'משטח', val: 'שבילים + גשרי עץ (חלקלק)' },
        { icon: '📅', label: 'שים לב', val: 'ג\' — חלק סגור' },
      ],
      mapCenter: [45.1130, 15.5840],
      mapZoom: 16,
      schematic: true,
      points: [
        { lat: 45.1135, lng: 15.5850, label: 'חניה (Zone 1 קרוב / Zone 2-3 זול)', type: 'start' },
        { lat: 45.1128, lng: 15.5838, label: 'גשר סנט איוון — התמונה הקלאסית', type: 'via' },
        { lat: 45.1126, lng: 15.5834, label: 'מסעדת Pod Rastočkim Krovom', type: 'end' },
      ],
      steps: [
        { title: '🅿️ חניה', note: 'Zone 1 קרוב אך יקר (€2/ש\'); Zone 2/3 זול (€0.40/ש\') ו-5-10 דק\' הליכה. תשלום במכונה (מטבעות/אשראי). להגיע לפני 11:00.' },
        { title: '🚶 טיילת על הנהר', note: 'הולכים בין הטחנות והמפלים על הטיילת — חינם בהלוך-חזור. רואים את כל הקסם.' },
        { title: '📸 גשר סנט איוון', note: 'חוצים גשר עץ לתמונה הקלאסית של הטחנות מעל המפלים.' },
        { title: '🎫 אופציה: לולאת Vodene Tajne (€5)', note: 'מי שרוצה לולאה מעגלית לקניון הקורנה — אגרה €5 (אשראי בלבד בקיוסק). אחרת חוזרים באותה דרך, חינם.' },
      ],
      tip: 'הטיילת הראשית חינם (הלוך-חזור) — מספיק לרובם. €5 רק ללולאת הקניון. צהריים: פורל טרי ב-Pod Rastočkim Krovom (סגור בימי ג\').',
      links: [
        { label: 'כרטיסים וחניה — רשמי', url: 'https://slunj-rastoke.hr/en/rastoke-ticket-and-parking-information/', kind: 'official' },
        { label: 'מיקום ראסטוקה (מפה)', url: 'https://www.google.com/maps/search/?api=1&query=Rastoke+Slunj+Croatia', kind: 'map' },
      ],
    },
  },

  plitvice: {
    slug: 'plitvice',
    heroImage: c('Plitvice Lakes, Croatia, Lower Lakes Panorama.JPG'),
    secondImage: c('Plitvice Lakes, Galovac Waterfall.JPG'),
    heroImageCaption: 'אגמי פליטביצה — הכחול-ירוק הזה אמיתי, לא מסנן',
    whyGo: 'יש מקומות שנראים מזויפים בצילום כי הם יפים מדי. פליטביצה היא כזו — אבל היא אמיתית לחלוטין. 16 אגמות מדורגים, כל אחד יורד לשני דרך מפל. הולכים על שבילי עץ שנבנו ממש מעל פני המים.',
    whyGoSuffix: 'להגיע לפני 08:00 — כניסה לפני הקהל שינתה את החוויה לגמרי.',
    facts: [
      { icon: '🌊', label: 'אגמות', val: '16 מדורגים' },
      { icon: '⏱️', label: 'מסלול C', val: '8 ק"מ · כל היום' },
      { icon: '⛵', label: 'סירה', val: 'כלולה בכרטיס' },
      { icon: '💶', label: 'מחיר', val: 'מוזמן מראש ✅' },
      { icon: '⚠️', label: 'נקודת בלבול', val: 'P3 מול St3!' },
      { icon: '🌅', label: 'כניסה', val: 'לפני 08:00!' },
    ],
    alerts: [
      { type: 'ok',   text: '✅ כרטיסים מוזמנים מראש.' },
      { type: 'info', text: 'מסלול C: כניסה 1 → St1→P3 → סירה → P2→St3 → שאטל חזרה.' },
      { type: 'warn', text: '⚠️ נקודת בלבול: מזח P3 שונה מתחנת שאטל St3 — לסמן על הטלפון לפני הכניסה!' },
    ],
    flowSteps: [
      { title: '🌅 כניסה + Veliki Slap — 78 מ\'', note: 'המפל הגבוה בקרואטיה. הספריי מגיע אלינו.', highlight: true },
      { title: 'שבילי עץ מעל המים — St1→P3', note: 'מתחתינו — מים טורקיז שקופים לגמרי. דגים ממש מתחת לנעליים.', highlight: true },
      { title: '⛵ סירה חשמלית P3→P2', note: 'חצי שעה על אגם קוזיאק. שקט מוחלט.' },
      { title: 'אגמים עליונים P2→St3', note: 'פחות תיירים, מפלים קטנים יותר.' },
      { title: '🥪 צהריים על ספסל', note: 'כריכות מהבית — לא לבזבז 45 דק\' במסעדה.' },
      { title: '🚌 שאטל St3→St1 — חזרה', note: 'כלול בכרטיס.', highlight: true },
    ],
    bringItems: [
      { icon: '🥪', label: 'כריכות מהבית — חובה!' },
      { icon: '💧', label: 'מים — 2 ליטר לאחד' },
      { icon: '👟', label: 'נעלי הליכה נוחות' },
      { icon: '🧴', label: 'קרם שמש' },
      { icon: '📱', label: 'מסלול C מסומן במפה' },
      { icon: '🛍️', label: 'לסמוך על מסעדה — לא', no: true },
    ],
    routeGuide: {
      facts: [
        { icon: '📏', label: 'אורך מסלול C', val: '~8 ק"מ' },
        { icon: '⏱️', label: 'משך', val: '4–6 ש\' (כל היום)' },
        { icon: '🥾', label: 'קושי', val: 'בינוני · לא טכני' },
        { icon: '⛵', label: 'כולל', val: 'סירה + שאטל בכרטיס' },
        { icon: '🚪', label: 'התחלה', val: 'כניסה 1' },
        { icon: '💶', label: 'כניסה', val: 'מוזמן מראש ✅' },
        { icon: '👟', label: 'משטח', val: 'שבילי עץ + חצץ' },
        { icon: '🌅', label: 'שעה מומלצת', val: 'לפני 08:00' },
      ],
      mapCenter: [44.8806, 15.6100],
      mapZoom: 13,
      schematic: true,
      points: [
        { lat: 44.8806, lng: 15.6160, label: 'כניסה 1 — התחלה', type: 'start' },
        { lat: 44.8870, lng: 15.6010, label: 'שייט P3→P2 על אגם קוזיאק', type: 'via' },
        { lat: 44.8790, lng: 15.5980, label: 'אגמים עליונים → שאטל St3', type: 'end' },
      ],
      steps: [
        { title: '🚪 כניסה 1 — ירידה לאגמים התחתונים', note: 'מכניסה 1 שביל זיגזג יורד לקניון. עוברים את Veliki Slap (78 מ\') והאגמים התחתונים על מסילות עץ.' },
        { title: '⛵ שייט חשמלי P3→P2', note: 'בקצה הצפוני של אגם קוזיאק עולים על סירה חשמלית (כלולה בכרטיס) לקצה הדרומי.' },
        { title: '🌊 אגמים עליונים', note: 'מ-P2 ממשיכים במעלה האגמים העליונים — פחות צפוף, מפלים רכים.' },
        { title: '🚌 שאטל St3 → St1 — חזרה', note: 'מסיימים בתחנת השאטל St3 וחוזרים בשאטל הפנורמי ל-St1 ליד הכניסה. כלול בכרטיס.' },
        { title: '⚠️ נקודת בלבול', note: 'מזח הסירה P3 שונה מתחנת השאטל St3 — לסמן על המפה לפני שיוצאים.' },
      ],
      tip: 'מסלול C מסומן בשילוט בכל הצמתים. כניסה לפני 08:00 = חוויה אחרת. שבילי עץ ללא מעקה מעל המים — להשגיח על הילדים.',
      links: [
        { label: 'מפת מסלול C (Wikiloc)', url: 'https://www.wikiloc.com/hiking-trails/plitvice-lakes-national-park-route-c-croatia-142686422', kind: 'map' },
        { label: 'מסלול C — מפה ופירוט', url: 'https://www.plitvice-lakes.info/walking/trail-c/', kind: 'map' },
        { label: 'אתר הפארק הרשמי', url: 'https://np-plitvicka-jezera.hr', kind: 'official' },
      ],
    },
  },

  catez: {
    slug: 'catez',
    heroImage: c('Terme Čatež 01.jpg'),
    heroImageCaption: 'Terme Čatež — בריכות חיצוניות ומגלשות',
    whyGo: 'שלושה ימים הלכתם. הגוף צריך לנוח, הילדים צריכים לשחק. Terme Čatež הוא פארק מים גדול בסלובניה — בריכות חיצוניות חמות, מגלשות מים, אזור ילדים. לא אטרקציה תרבותית — יום מתנה, בכוונה.',
    whyGoSuffix: 'בדיוק ההפך ממה שהיה אתמול. לא להתנצל על זה.',
    facts: [
      { icon: '🏊', label: 'בריכות', val: 'חיצוניות + תרמיות' },
      { icon: '🎢', label: 'מגלשות', val: 'לכל הגילאים' },
      { icon: '⏱️', label: 'מומלץ', val: '4 שעות' },
      { icon: '💶', label: 'כניסה', val: 'לבדוק מראש' },
    ],
    alerts: [
      { type: 'info', text: '💡 יום קל בכוונה — מתנה לילדים אחרי יומיים עמוסים.' },
    ],
    flowSteps: [
      { title: 'בריכות חיצוניות חמות', note: 'המים חמים מתחת לשמיים הפתוחים.', highlight: true },
      { title: 'מגלשות המים', note: 'לעשות כמה פעמים.' },
      { title: 'בריכות תרמיות', note: 'להורים — 30 דקות שקט אמיתי.' },
    ],
    bringItems: [
      { icon: '🩱', label: 'בגדי ים לכולם' },
      { icon: '🧴', label: 'קרם שמש עמיד למים' },
      { icon: '🏊', label: 'מגבת לכל אחד' },
      { icon: '💶', label: 'מזומן לשתייה וגלידה' },
    ],
    routeGuide: {
      facts: [
        { icon: '🎢', label: 'מגלשות', val: 'Triple · Black-hole · Boomerang' },
        { icon: '🌊', label: 'עוד', val: 'בריכת גלים + נהר עצל 450 מ\'' },
        { icon: '🧒', label: 'לקטנים', val: 'אי הפיראטים + פארק ילדים' },
        { icon: '🕗', label: 'שעות (יולי-אוג)', val: '08:00–20:00' },
        { icon: '💶', label: 'כרטיס יום', val: 'מבוגר €19 · ילד €15' },
        { icon: '💡', label: 'זול יותר', val: 'אונליין / אחרי 15:00' },
        { icon: '🅿️', label: 'חניה', val: 'חינם' },
        { icon: '🌧️', label: 'גיבוי לגשם', val: 'ריביירה חורף מקורה' },
      ],
      mapCenter: [45.8900, 15.6260],
      mapZoom: 15,
      schematic: true,
      points: [
        { lat: 45.8900, lng: 15.6260, label: 'Terme Čatež — כניסה + חניה', type: 'start' },
      ],
      steps: [
        { title: '🅿️ חניה חינם + כרטיס', note: 'חניונים חינם באתר. לקנות כרטיס אונליין (זול יותר ובלי תור). אחרי 15:00 או 18:00 — משמעותית זול.' },
        { title: '🎢 מגלשות ובריכת גלים', note: 'לגיל 9–12: Triple Slide, Black-hole, ו-Boomerang. בריכת הגלים (~30°C) — להיט. לבדוק שילוט גובה/גיל.' },
        { title: '🌊 נהר עצל + פארק ילדים', note: 'לצוף על גלגלים בנהר העצל (450 מ\'), ואי הפיראטים/פארק הילדים לקטנים יותר.' },
      ],
      tip: 'כרטיס אונליין חוסך כסף ותור. ביום חם להגיע עם הפתיחה (08:00) לתפוס צל, או כרטיס אחה"צ אחרי שהקהל מתפזר. נעלי מים לריצוף החם.',
      links: [
        { label: 'ריביירת הקיץ — רשמי', url: 'https://terme-catez.si/en/summer-thermal-riviera/', kind: 'official' },
        { label: 'מחירון כרטיסים', url: 'https://ticket.terme-catez.si/en/summer-thermal-riviera-pricelist/', kind: 'official' },
      ],
    },
  },

  bohinj: {
    slug: 'bohinj',
    heroImage: c('Stara Fužina - Ribčev Laz - Lake Bohinj.jpg'),
    secondImage: c('Ribčev Laz - bridge and church.jpg'),
    heroImageCaption: 'אגם בוהין — האגם הגדול, השקט, של יוליאן האלפים',
    whyGo: 'בלד מפורסם יותר. בוהין יפה יותר. פחות תיירים, יותר שקט, מים יותר צלולים, הרים יותר קרובים. הבסיס שלנו ל-4 לילות.',
    whyGoSuffix: 'הכניסה הראשונה למים תהיה אחרי ה-BTC וסידור הדירה.',
    facts: [
      { icon: '🏊', label: 'שחייה', val: 'חינם · מים קרירים' },
      { icon: '🚣', label: 'קייאק/סאפ', val: 'השכרה בחוף' },
      { icon: '🌡️', label: 'מים', val: '~18°C בקיץ' },
      { icon: '🏔️', label: 'נוף', val: 'אלפים מכל כיוון' },
    ],
    alerts: [
      { type: 'info', text: '🛒 לקנות אוכל ב-BTC City בדרך — Barn House MM יש מטבח מלא.' },
    ],
    flowSteps: [
      { title: '🛒 BTC City — קניות חובה', note: 'ניאופרן ונעלי מים לסוצ\'ה. לא להשאיר לאחר.' },
      { title: 'צ\'ק-אין Barn House MM', note: 'מטבח מלא — להסתדר.' },
      { title: '🏊 כניסה ראשונה לאגם', note: 'חוף Ribčev Laz. "הגענו."', highlight: true },
    ],
    bringItems: [
      { icon: '🩱', label: 'בגדי ים' },
      { icon: '🧴', label: 'קרם שמש' },
      { icon: '💧', label: 'מים' },
    ],
  },

  bled: {
    slug: 'bled',
    heroImage: c('Bled Overview.JPG'),
    secondImage: c('Blejsko jezero (Lake Bled in autumn).jpg'),
    heroImageCaption: 'אגם בלד — כנסייה על האי, טירה על הצוק',
    whyGo: 'תמונת הגלויה של סלובניה — כנסייה על אי קטן, מצודה על צוק מעל הכל, הרים מסביב. התמונה הזו לא מוגזמת — המקום נראה בדיוק ככה.',
    whyGoSuffix: 'לצאת ב-07:30. בלד בבוקר המוקדם הוא מקום אחר לגמרי.',
    facts: [
      { icon: '🏰', label: 'טירה', val: '€15 כניסה' },
      { icon: '⛵', label: 'פלנה לאי', val: '€18 לאדם' },
      { icon: '⏱️', label: 'מומלץ', val: '2.5 שע\' + סטראזה' },
      { icon: '⚠️', label: 'חשוב', val: 'לצאת ב-07:30!' },
    ],
    alerts: [
      { type: 'warn', text: '⚠️ להגיע לפני 08:30 — אחרי 10:00 הצפיפות כבדה מאוד.' },
      { type: 'info', text: '🎢 סטראזה נפתחת בדיוק 11:00 — לא לאחר!' },
    ],
    flowSteps: [
      { title: '🌅 08:15 — אגם בלד בבוקר', note: 'הכי שקט, הכי יפה, לפני כל התיירים.', highlight: true },
      { title: '🏰 טירת בלד', note: 'טיפוס לטירה על הצוק. נוף פנורמי על כל האגם.' },
      { title: '🎢 11:00 — סטראזה מגלשת הקיץ', note: 'פתיחה בדיוק 11:00.', highlight: true },
      { title: 'פארק אדרנלין סטראזה', note: 'חבלים, זיפליין, מסלולים.' },
    ],
    bringItems: [
      { icon: '👟', label: 'נעלי הליכה לטירה' },
      { icon: '💳', label: 'כרטיס אשראי + מזומן' },
      { icon: '🧴', label: 'קרם שמש' },
      { icon: '🍽️', label: 'לאכול לפני — לא בבלד', no: true },
    ],
    routeGuide: {
      facts: [
        { icon: '🚶', label: 'סובב אגם', val: '6 ק"מ · שטוח · 1.5–2 ש\'' },
        { icon: '📸', label: 'תצפית הפוסטקרד', val: 'מאלה אוסוניצה (685 מ\')' },
        { icon: '⛵', label: 'לאי', val: 'פלטנה ~€20 הלוך-חזור' },
        { icon: '🪜', label: 'מדרגות לאי', val: '99' },
        { icon: '🏰', label: 'טירה', val: '~€15 · עלייה 10 דק\'' },
        { icon: '🥾', label: 'אוסוניצה', val: 'תלול · ~30 דק\' · כבלים' },
        { icon: '🌅', label: 'אור הכי טוב', val: 'בוקר מוקדם' },
        { icon: '🅿️', label: 'חניה', val: 'Velika Zaka / מרכז בלד' },
      ],
      mapCenter: [46.3625, 14.0950],
      mapZoom: 14,
      schematic: true,
      points: [
        { lat: 46.3636, lng: 14.1090, label: 'מרכז בלד — התחלת הסובב', type: 'start' },
        { lat: 46.3608, lng: 14.0805, label: 'תצפית מאלה אוסוניצה', type: 'via' },
        { lat: 46.3585, lng: 14.0905, label: 'האי (פלטנה ממלינו)', type: 'via' },
        { lat: 46.3692, lng: 14.1006, label: 'טירת בלד', type: 'end' },
      ],
      steps: [
        { title: '🚶 סובב האגם (6 ק"מ, שטוח)', note: 'טיילת מסביב לאגם — שעה וחצי בנחת עם עצירות. מתאים לכולם, אפילו עגלה. הנוף משתנה כל הזמן.' },
        { title: '📸 תצפית הפוסטקרד — איזו לבחור', note: 'מחניון Velika Zaka: Ojstrica (611 מ\', ~20 דק\', קל יחסית) או Mala Osojnica (685 מ\', ~30 דק\', תלול עם כבלים וסולם מתכת) — האחרונה היא "התמונה מהאוויר". עם ילדים: עולים את הסולם, לא יורדים בו.' },
        { title: '⛵ לאי בפלטנה', note: 'סירת עץ מסורתית ממזח מלינו/קזינה/Velika Zaka (~€20 הלוך-חזור, מזומן). ~40 דק\' על האי, 99 מדרגות לכנסייה ולפעמון המשאלות.' },
        { title: '🏰 עלייה לטירה', note: 'נוהגים לחניון הטירה, או עולים ברגל בשביל Rikli מעל חוף הרחצה (~300 מ\', 10 דק\' תלול). מבפנים: דפוס, נפחייה ותצפית על האגם.' },
      ],
      tip: 'להגיע מוקדם (לפני 09:00) — בלד מתמלא מהר ובשיא היום עמוס וחם. את תצפית אוסוניצה הכי שווה בבוקר מוקדם, וגם פחות צפוף.',
      links: [
        { label: 'תצפית אוסוניצה (AllTrails)', url: 'https://www.alltrails.com/trail/slovenia/bled/blejsko-jezero-ojstrica-velika-osojnica-mala-osojnica', kind: 'map' },
        { label: 'סובב האגם (Outdooractive)', url: 'https://www.outdooractive.com/en/route/hiking-trail/lake-bled/around-lake-bled/32588937/', kind: 'map' },
        { label: 'האי — אתר רשמי', url: 'https://www.blejskiotok.si/en/welcome-to-the-island/', kind: 'official' },
        { label: 'טירת בלד — אתר רשמי', url: 'https://www.blejski-grad.si/en/', kind: 'official' },
      ],
    },
  },

  straza: {
    slug: 'straza',
    heroImage: c('Bled-Straza.JPG'),
    heroImageCaption: 'גבעת סטראזה מעל בלד — רכבל ומגלשת קיץ',
    whyGo: 'גבעה קטנה ממש מעל בלד עם רכבל כיסא שעולה לפסגה ומגלשת קיץ על מסילה שיורדת חזרה. השילוב המושלם של נוף לאגם ואדרנלין לילדים — אתם שולטים במהירות עם ידית בלם.',
    whyGoSuffix: 'בפסגה גם פארק חבלים וזיפליין לגדולים. נפתח בדיוק 11:00.',
    facts: [
      { icon: '🎢', label: 'מגלשת קיץ', val: '520 מ\' · עד 40 קמ"ש' },
      { icon: '🚡', label: 'עלייה', val: 'רכבל כיסא נופי' },
      { icon: '🎂', label: 'גיל', val: 'מ-6; קטנים עם מבוגר' },
      { icon: '💶', label: 'מחיר', val: '~€11–13 נסיעה (מבוגר)' },
      { icon: '⏱️', label: 'משך', val: '1–2 שעות' },
      { icon: '🌧️', label: 'חשוב', val: 'נסגר כשרטוב' },
    ],
    alerts: [
      { type: 'info', text: '🎢 פתיחה בדיוק 11:00 — לתאם עם הבוקר בבלד.' },
      { type: 'warn', text: '⚠️ המסילה נסגרת בגשם — לבדוק במצלמת האתר אם הרכבל פעיל.' },
    ],
    flowSteps: [
      { title: '🚡 רכבל כיסא לפסגה', note: 'עלייה איטית ונופית מעל מדרון הסקי, עם נוף לאגם.' },
      { title: '🎢 מגלשת קיץ למטה', note: 'מסילה 520 מ\', שולטים במהירות עם בלם. כיף אמיתי לכל הגילאים.', highlight: true },
      { title: '🧗 פארק חבלים + זיפליין', note: 'בפסגה — מסלולי חבלים וזיפליין לגדולים יותר.' },
      { title: '🛝 Tube / Bag jump', note: 'תוספת קטנה לקפיצות — שווה לילדים.' },
    ],
    bringItems: [
      { icon: '👟', label: 'נעליים סגורות' },
      { icon: '💶', label: 'מזומן/אשראי לכרטיסים' },
      { icon: '🧴', label: 'קרם שמש' },
    ],
    routeGuide: {
      facts: [
        { icon: '🎢', label: 'מגלשה', val: '520 מ\' · ירידה 131 מ\'' },
        { icon: '🚡', label: 'עלייה', val: 'רכבל כיסא' },
        { icon: '🎂', label: 'גיל מינ\'', val: '6 (קטנים עם מבוגר)' },
        { icon: '💶', label: 'מחיר', val: '~€8/11/13 לפי גיל' },
        { icon: '🅿️', label: 'חניה', val: 'בבסיס הגבעה' },
        { icon: '🌧️', label: 'מזג אוויר', val: 'נסגר כשרטוב' },
      ],
      mapCenter: [46.3600, 14.1090],
      mapZoom: 15,
      schematic: true,
      points: [
        { lat: 46.3608, lng: 14.1135, label: 'בסיס הגבעה — קופות ורכבל', type: 'start' },
        { lat: 46.3575, lng: 14.1055, label: 'פסגה — פארק חבלים + תחילת מגלשה', type: 'end' },
      ],
      steps: [
        { title: '🅿️ חניה בבסיס', note: 'חניון בבסיס הגבעה, דקות הליכה ממרכז בלד. קונים כרטיס בקופה.' },
        { title: '🚡 רכבל כיסא לפסגה', note: 'עולים ברכבל הכיסא הנופי. שם פארק החבלים והזיפליין.' },
        { title: '🎢 מגלשת קיץ חזרה', note: 'יורדים במסילה (520 מ\') ושולטים במהירות. ילדים מגיל 6 — צעירים יותר עם מבוגר.' },
      ],
      tip: 'לבדוק במצלמת האתר אם הרכבל פעיל (נסגר בגשם). אחה"צ יבש = פחות תורים מאמצע היום.',
      links: [
        { label: 'אתר רשמי + מחירים', url: 'https://www.straza-bled.si/en/summer', kind: 'official' },
      ],
    },
  },

  vogel: {
    slug: 'vogel',
    heroImage: c('Vogel Ski resort.JPG'),
    heroImageCaption: 'רכבל וואגל — נוף על אגם בוהין והאלפים היוליאניים',
    whyGo: 'רכבל מ-Ukanc מטפס ~1000 מ\' מעל אגם בוהין לתחנה בגובה 1,535 מ\'. מלמעלה — פנורמה על כל האגן והרי הטריגלב, מסעדה עם מרפסת, ושבילי הליכה קצרים. חוויית אלפים גבוהה עם מעט מאוד מאמץ.',
    whyGoSuffix: 'בקיץ יש רכבל כיסא נוסף (Orlove glave) לתצפית גבוהה יותר ולפעמון משאלות — כמעט בלי הליכה.',
    facts: [
      { icon: '🚡', label: 'תחנה עליונה', val: '1,535 מ\'' },
      { icon: '⏱️', label: 'רכבל', val: '~5 דק\' · קבינות גדולות' },
      { icon: '🍽️', label: 'בפסגה', val: 'מסעדה + מרפסת תצפית' },
      { icon: '💧', label: 'חשוב', val: 'אין מים בהר — להביא!' },
      { icon: '🪙', label: 'פעמון', val: 'ב-Orlove glave' },
      { icon: '🌅', label: 'מתי', val: 'בוקר בהיר' },
    ],
    alerts: [
      { type: 'cold', text: '💧 אין מקורות מים בהר — להביא מים. נעליים סגורות, מזג אוויר משתנה מהר.' },
      { type: 'info', text: '📷 לבדוק את מצלמות האתר לפני העלייה — עננים בצהריים מסתירים את הנוף.' },
    ],
    flowSteps: [
      { title: '🚡 רכבל מ-Ukanc', note: 'עלייה ~5 דק\' מעל האגם לתחנה ב-1,535 מ\'.' },
      { title: '👁️ תצפית + שביל מידע', note: 'מרפסות תצפית ולולאה קצרה ונגישה עם הסבר — בלי מאמץ.', highlight: true },
      { title: '🪙 רכבל Orlove glave', note: 'רכבל כיסא לתצפית גבוהה יותר ולפעמון המשאלות. ילדים אוהבים.', highlight: true },
      { title: '🐄 שביל ל-Merjasec / אחו אלפיני', note: 'הליכה קלה לכיוון אחו ובקתה — אפשר לחזור בכל רגע.' },
    ],
    bringItems: [
      { icon: '💧', label: 'מים — אין בהר!' },
      { icon: '🧥', label: 'שכבה חמה — קריר למעלה' },
      { icon: '👟', label: 'נעליים סגורות' },
      { icon: '🧴', label: 'קרם שמש' },
    ],
    routeGuide: {
      facts: [
        { icon: '🚡', label: 'תחנה עליונה', val: '1,535 מ\'' },
        { icon: '🥾', label: 'שביל מידע', val: 'קל · ~30–45 דק\'' },
        { icon: '🪙', label: 'Orlove glave', val: 'רכבל כיסא + פעמון' },
        { icon: '⛰️', label: 'Šija (1,880 מ\')', val: 'בינוני · לכושר' },
        { icon: '💧', label: 'מים', val: 'אין בהר — להביא' },
        { icon: '🅿️', label: 'חניה', val: 'Ukanc (כלול בכרטיס)' },
      ],
      mapCenter: [46.2700, 13.8400],
      mapZoom: 13,
      schematic: true,
      points: [
        { lat: 46.2806, lng: 13.8400, label: 'Ukanc — תחנה תחתונה', type: 'start' },
        { lat: 46.2637, lng: 13.8407, label: 'תחנה עליונה 1,535 מ\'', type: 'via' },
        { lat: 46.2590, lng: 13.8430, label: 'Orlove glave — תצפית + פעמון', type: 'end' },
      ],
      steps: [
        { title: '🅿️ Ukanc — תחנה תחתונה', note: 'חניה כלולה בכרטיס הרכבל. עולים ברכבל ~5 דק\'.' },
        { title: '👁️ תחנה עליונה (1,535 מ\')', note: 'תצפית ושביל מידע קצר ונגיש — מתאים לכולם, גם בלי הליכה אמיתית.' },
        { title: '🪙 רכבל Orlove glave (מומלץ)', note: 'רכבל כיסא נוסף (כלול) לתצפית גבוהה יותר ולפעמון המשאלות — חוסך טיפוס, וכיף לילדים.' },
        { title: '⛰️ למתאמצים: Šija 1,880 מ\'', note: 'מהתחנה העליונה של הכיסא — ~45 דק\' טיפוס סלעי לפסגה. רק לילדים בכושר ועם מבוגר. הפסגה המלאה (1,922 מ\') לא לטיול משפחתי.' },
      ],
      tip: 'הדרך הכי טובה עם ילדים: רכבל → תצפית/שביל מידע → רכבל Orlove glave לפעמון. אפשר לעצור בכל שלב.',
      links: [
        { label: 'מפת שבילי וואגל (רשמי, PDF)', url: 'https://vogel.si/wp-content/uploads/2023/11/Pohodniske-poti-hiking-trails.pdf', kind: 'map' },
        { label: 'וואגל — הליכות (רשמי)', url: 'https://vogel.si/en/hiking/', kind: 'official' },
      ],
    },
  },

  vintgar: {
    slug: 'vintgar',
    heroImage: c('Bled Vintgar-Klamm 35.JPG'),
    secondImage: c('Bled Vintgar-Klamm 27.JPG'),
    heroImageCaption: 'ערוץ וינטגר — מסילות עץ בנויות מעל הנחל',
    whyGo: 'ערוץ גיר שנהר הרדוביצה חצב לאורך 1.6 קילומטר. ההליכה על מסילות עץ שנבנו ממש מעל פני המים — חלקן גשרים מעל הזרם. קל. יפהפה.',
    whyGoSuffix: 'לצאת ב-07:00 — להגיע לפני הקהל.',
    facts: [
      { icon: '📏', label: 'מסלול', val: '1.6 ק"מ קל' },
      { icon: '⏱️', label: 'משך', val: '1.5 שעות' },
      { icon: '💶', label: 'מחיר', val: 'מוזמן מראש ✅' },
      { icon: '🌅', label: 'כניסה', val: 'מ-08:20 — לצאת ב-07:00' },
    ],
    alerts: [
      { type: 'ok',   text: '✅ כרטיסי וינטגר מוזמנים מראש — כניסה מ-08:20.' },
      { type: 'info', text: '💡 חזרה: שביל עולה לכביש מהמפל → 20 דק\' ברגל.' },
    ],
    flowSteps: [
      { title: 'כניסה — מסילות העץ הראשונות', note: 'הנחל ירוק מתחת, הצוקים מתרוממים משני הצדדים.' },
      { title: '🌊 גשרי העץ מעל הנחל', note: 'גשרי עץ ממש על הזרם הרועש.', highlight: true },
      { title: 'מפל Sum — סוף המסלול', note: 'המפל שסוגר את הערוץ. לעצור ולשתות.', highlight: true },
      { title: 'חזרה — שביל ברגל לחניון', note: '20 דק\' עלייה קצרה לכביש.' },
    ],
    bringItems: [
      { icon: '👟', label: 'נעלי הליכה — המסילות רטובות' },
      { icon: '💧', label: 'מים' },
      { icon: '📱', label: 'טלפון — יש הרבה מה לצלם' },
    ],
    routeGuide: {
      facts: [
        { icon: '📏', label: 'אורך הערוץ', val: '1.6 ק"מ' },
        { icon: '⏱️', label: 'מעבר בערוץ', val: '30–45 דק\'' },
        { icon: '🥾', label: 'קושי', val: 'קל (1.5/5)' },
        { icon: '🔄', label: 'סוג מסלול', val: 'חד-כיווני!' },
        { icon: '🅿️', label: 'חניה', val: 'P1 — חינם + שאטל' },
        { icon: '💶', label: 'כניסה', val: '~€10 · מוזמן מראש ✅' },
        { icon: '👟', label: 'משטח', val: 'מסילות עץ + חצץ' },
        { icon: '🍼', label: 'נגישות', val: 'לא לעגלות (מדרגות)' },
        { icon: '🚻', label: 'שירותים', val: 'בכניסה בלבד' },
        { icon: '🌅', label: 'שעה מומלצת', val: 'לפני 09:00' },
      ],
      mapCenter: [46.3958, 14.0889],
      mapZoom: 14,
      schematic: true,
      points: [
        { lat: 46.3905, lng: 14.0856, label: 'P1 — חניה + שאטל חשמלי', type: 'start' },
        { lat: 46.3958, lng: 14.0889, label: 'כניסה לערוץ', type: 'via' },
        { lat: 46.4016, lng: 14.0856, label: 'מפל Šum — סוף הערוץ', type: 'end' },
      ],
      steps: [
        { title: '🅿️ חניה ב-P1 (Podhom)', note: 'החניון שצמוד לכניסה נסגר ב-2024. חונים ב-VINTGAR HUB (P1) — חינם, בכפר Podhom, ~4 ק"מ מצפון-מערב לבלד.' },
        { title: '🚐 שאטל חשמלי לכניסה', note: 'שאטל e-bus חינמי מסיע מהחניונים אל כניסת הערוץ. אפשר גם ללכת ברגל — קצר.' },
        { title: '🌊 מעבר בערוץ — 1.6 ק"מ', note: 'מסילות עץ וגשרים מעל נהר הרדוביצה, צמודים לקיר הסלע. כיוון אחד בלבד — נכנסים בקצה הדרומי ומתקדמים צפונה.' },
        { title: '💧 מפל Šum — סוף הערוץ', note: 'המפל הנהרי הגבוה בסלובניה סוגר את המסלול. כאן יוצאים מהערוץ — אי אפשר לחזור דרך המסילות.' },
        { title: '↩️ חזרה — מסלול אדום או ירוק', note: 'אדום ("River of Trees", דרך Blejska Dobrava והיער) ~4.3 ק"מ · ירוק ("King Triglav", במורד גבעת Hom וכנסיית קתרינה) ~5.7 ק"מ. שניהם מעגליים בחזרה ל-P1.' },
      ],
      tip: 'להיכנס מוקדם (07:30) — חד-כיווני, ומ-10:00 צפוף מאוד. סך הכל עם החזרה ברגל: ~2–3 שעות.',
      links: [
        { label: 'מפת המסלול האינטראקטיבית', url: 'https://www.alltrails.com/trail/slovenia/bled/vintgar-gorge', kind: 'map' },
        { label: 'מסלול חזרה ירוק (Sv. Katarina)', url: 'https://www.alltrails.com/trail/slovenia/bled/krozna-pot-vintgar-sveta-katarina', kind: 'map' },
        { label: 'אתר הפארק הרשמי', url: 'https://www.vintgar.si/en/my-visit/', kind: 'official' },
        { label: 'מדריך סלובניה בעברית', url: 'https://www.lametayel.co.il/destinations/slovenia-205', kind: 'blog' },
      ],
    },
  },

  mostnica: {
    slug: 'mostnica',
    heroImage: c('Mostnica-Voje5.JPG'),
    heroImageCaption: 'ערוץ מוסטניצה — בזלת, נחל, וצורות שלא מתוכננות',
    whyGo: 'חמש דקות מהדירה. ערוץ קטן שנחל חצב לאורך שנים לתוך בזלת שחורה — והשאיר אחריו צורות מוזרות, בריכות טורקיז, ו"ראש הפיל".',
    whyGoSuffix: 'שביל מאוד נגיש — גם לילד 10 וגם להורה שעייף.',
    facts: [
      { icon: '📏', label: 'מסלול', val: '3 ק"מ הלוך-חזור' },
      { icon: '⏱️', label: 'משך', val: '2–2.5 שעות' },
      { icon: '💶', label: 'כניסה', val: 'חינם' },
      { icon: '🐘', label: 'מיוחד', val: '"ראש הפיל" בשביל' },
    ],
    alerts: [
      { type: 'info', text: '💡 5 דק\' מ-Barn House MM — לצאת בבוקר ישירות ברגל.' },
    ],
    flowSteps: [
      { title: 'יציאה מ-Stara Fužina', note: 'חניון קטן, שביל ברור.' },
      { title: '🐘 "ראש הפיל"', note: 'סלע בזלת שנשחק לצורת פיל מושלמת.', highlight: true },
      { title: 'בריכות טורקיז בנחל', note: 'בריכות רדודות של מים ירוקים-כחולים בין הסלעים.' },
      { title: 'אופציה: מפל קוזיאק', note: '45 דק\' נוספות — מפל נסתר. אם יש אנרגיה — שווה.', highlight: true },
    ],
    bringItems: [
      { icon: '👟', label: 'נעלי הליכה' },
      { icon: '💧', label: 'מים' },
      { icon: '📱', label: 'טלפון — הפיל צריך תמונה' },
    ],
    routeGuide: {
      facts: [
        { icon: '📏', label: 'אורך הערוץ', val: '~2 ק"מ (3 עד המפל)' },
        { icon: '⏱️', label: 'משך', val: '~3 ש\' הלוך-חזור' },
        { icon: '🥾', label: 'קושי', val: 'קל-בינוני · מדרגות' },
        { icon: '📈', label: 'הפרש גובה', val: '~250 מ\'' },
        { icon: '🅿️', label: 'חניה', val: 'Stara Fužina · €3–5' },
        { icon: '🐘', label: 'בדרך', val: '"ראש הפיל" (Slonček)' },
        { icon: '💧', label: 'סוף', val: 'מפל Voje (~21 מ\')' },
        { icon: '🍼', label: 'נגישות', val: 'לא לעגלות' },
      ],
      mapCenter: [46.3030, 13.8990],
      mapZoom: 13,
      schematic: true,
      points: [
        { lat: 46.2936, lng: 13.8889, label: 'Stara Fužina — חניה + התחלה', type: 'start' },
        { lat: 46.3050, lng: 13.9000, label: '"ראש הפיל" + בריכות טורקיז', type: 'via' },
        { lat: 46.3150, lng: 13.9080, label: 'מפל Voje — נקודת חזרה', type: 'end' },
      ],
      steps: [
        { title: '🅿️ חניה ב-Stara Fužina', note: 'אחרי ~700 מ\' מהכפר החניון מימין. בקיץ בתשלום €3–5. הערוץ ~5 דק\' מהלינה.' },
        { title: '🌉 כניסה לערוץ (אגרה קטנה)', note: 'חוצים את הגשר לערוץ (אגרת כניסה קטנה). השביל ברור וממוספר.' },
        { title: '🐘 "ראש הפיל" ובריכות', note: 'בדרך — סלע בזלת בצורת פיל, ובריכות טורקיז בין הסלעים.' },
        { title: '💧 מפל Voje — חזרה', note: 'נקודת המפנה במפל Voje (~21 מ\'). חוזרים באותו שביל, או בשביל המקביל מעבר לנחל.' },
      ],
      tip: 'מסלול נגיש לילדים. אפשר לקצר ולחזור אחרי "ראש הפיל" בלי להגיע עד המפל אם עייפים.',
      links: [
        { label: 'מפת המסלול (AllTrails)', url: 'https://www.alltrails.com/trail/slovenia/bohinj/soteska-mostnice-in-slap-voje-iz-stare-fuzine', kind: 'map' },
        { label: 'אתר רשמי — Bohinj', url: 'https://www.bohinj.si/en/mostnica-gorge-and-voje-valley/', kind: 'official' },
      ],
    },
  },

  'car-train': {
    slug: 'car-train',
    heroImage: c('Bohinjska Bistrica-train station.jpg'),
    heroImageCaption: 'רכבת המכוניות — תחנת Bohinjska Bistrica',
    whyGo: 'המכונית עולה על הרכבת. הרכבת נכנסת למנהרה תת-הרית. 35 דקות, חשכה, ויוצאים בצד השני של ההר — בעמק אחר לגמרי. הילדים שואלים "איפה אנחנו?" ואתם לא יודעים להסביר.',
    whyGoSuffix: 'מזומן בלבד. לבדוק זמנים מראש ב-potniski.sz.si.',
    facts: [
      { icon: '🚂', label: 'משך', val: '35 דקות במנהרה' },
      { icon: '💶', label: 'תשלום', val: 'מזומן בלבד!' },
      { icon: '📅', label: 'זמנים', val: 'potniski.sz.si' },
      { icon: '🎂', label: 'ילדים', val: 'אוהבים מאוד' },
    ],
    alerts: [
      { type: 'warn', text: '⚠️ מזומן בלבד! לא לשכוח.' },
      { type: 'info', text: '📅 לבדוק זמנים מראש: potniski.sz.si' },
    ],
    flowSteps: [
      { title: 'הגעה לתחנה — Bohinjska Bistrica', note: '20–25 דק\' נסיעה מבלד. רכבת הבוקר יוצאת 09:10 — להיות בתחנה עד 08:50.' },
      { title: '🚂 המכונית עולה על הרכבת', note: 'הילד 10 לא יאמין שזה קורה.', highlight: true },
      { title: '35 דק\' במנהרה', note: 'אין אינטרנט. מדברים.' },
      { title: 'יציאה — Most na Soči', note: 'עמק חדש. נהר ירוק. "הגענו לסוצ\'ה."', highlight: true },
    ],
    bringItems: [
      { icon: '💶', label: 'מזומן — חובה!' },
      { icon: '📱', label: 'לצלם את הרכבת מבחוץ' },
    ],
    routeGuide: {
      facts: [
        { icon: '🚂', label: 'מנהרת בוהין', val: '~6.3 ק"מ' },
        { icon: '⏱️', label: 'משך', val: '~35–45 דק\' עד Most na Soči' },
        { icon: '🚉', label: 'עלייה', val: 'תחנת Bohinjska Bistrica' },
        { icon: '💶', label: 'מחיר (רשמי 2026)', val: '€16.20 רכב+נהג + €3.60/נוסע = €27 למשפחה' },
        { icon: '💵', label: 'תשלום', val: 'אצל הכרטיסן — מזומן ליתר ביטחון' },
        { icon: '📏', label: 'גובה רכב מקס', val: '3.0 מ\'' },
        { icon: '🎫', label: 'מקומות', val: '~30 מכוניות — כל הקודם זוכה' },
        { icon: '⏰', label: 'טעינה נסגרת', val: '10 דק\' לפני' },
        { icon: '🕘', label: 'רכבת הבוקר', val: '09:10 (הבאה: 11:40)' },
      ],
      mapCenter: [46.21, 13.85],
      mapZoom: 11,
      schematic: true,
      points: [
        { lat: 46.2742, lng: 13.9589, label: 'Bohinjska Bistrica — עלייה', type: 'start' },
        { lat: 46.1480, lng: 13.7470, label: 'Most na Soči — ירידה', type: 'end' },
      ],
      steps: [
        { title: '🚗 נסיעה לתחנת Bohinjska Bistrica', note: '~20–25 דק\' מבלד. מצטרפים לתור הרכבים על משטח הטעינה — כל הקודם זוכה, להגיע 20–30 דק\' מוקדם.' },
        { title: '🚂 עלייה על הרכבת', note: 'נוהגים על קרון שטוח (גובה רכב מקס 3 מ\'; אופנועים אסורים). מושכים בלם יד. אפשר להישאר ברכב או בקרון הנוסעים.' },
        { title: '💵 קונים כרטיס מהכרטיסן', note: 'התשלום אצל הכרטיסן בתוך הרכבת. מומלץ מזומן — לא ודאי שמקבלים אשראי.' },
        { title: '🌑 ~35–45 דק\' במנהרה', note: 'המנהרה חשוכה — להכין את הילדים. יוצאים ב-Most na Soči וממשיכים בכביש לעמק הסוצ\'ה.' },
      ],
      tip: 'לבדוק לוח זמנים מראש ב-potniski.sz.si — יש שינויים בגלל עבודות. SŽ ממליצים להודיע 24 שע\' מראש: +386 1 291 33 91. אם מפספסים — הבאה ב-11:40, או נסיעה דרך קרנייסקה גורה→ורשיץ (~2:15).',
      links: [
        { label: 'רכבת המכוניות — לוח ומחירים (רשמי)', url: 'https://potniski.sz.si/en/plan-your-journey/motorail/', kind: 'official' },
        { label: 'בדיקת זמנים (timetable finder)', url: 'https://potniski.sz.si/en/timetable-finder/', kind: 'official' },
      ],
    },
  },

  vrsic: {
    slug: 'vrsic',
    heroImage: c('Vrsic-Pass Fluss Pisnica 3.JPG'),
    heroImageCaption: 'מעבר ורשיץ — 50 פניות ממוספרות, גובה 1,611 מ\'',
    whyGo: '50 פניות ממוספרות בכביש שעולה ל-1,611 מטר. כל פנייה ממוספרת עד שמגיעים לפסגה ורואים את האלפים היוליאניים מכל צד.',
    whyGoSuffix: 'לנסוע לאט. לעצור בפניות שנראות טובות. בפסגה — קפה קטן עם נוף ל-360 מעלות.',
    facts: [
      { icon: '🏔️', label: 'גובה', val: '1,611 מ\' — הפסגה' },
      { icon: '🔢', label: 'פניות', val: '50 ממוספרות' },
      { icon: '⏱️', label: 'משך', val: '~1.5 שעות בנחת' },
      { icon: '☕', label: 'בפסגה', val: 'קפה + תצפית 360°' },
    ],
    alerts: [
      { type: 'info', text: '💡 לנסוע לאט — הנוף מחייב עצירות.' },
      { type: 'warn', text: '⚠️ כביש Trenta אחרי הפסגה — צר ומפותל.' },
    ],
    flowSteps: [
      { title: 'פניות 1–25 — העלייה', note: 'לספור ביחד עם הילדים.' },
      { title: '☕ פסגה — קפה + תצפית 360°', note: 'אלפים לכל כיוון.', highlight: true },
      { title: 'פניות 26–50 — הירידה לסוצ\'ה', note: 'הנהר הירוק מתחיל להופיע.' },
      { title: 'כניסה לעמק הסוצ\'ה', note: '"הגענו."', highlight: true },
    ],
    bringItems: [
      { icon: '📷', label: 'מצלמה — לכל פנייה' },
      { icon: '💶', label: 'מזומן לקפה בפסגה' },
      { icon: '🧥', label: 'סוודר — 1600 מ\' קריר' },
    ],
    routeGuide: {
      facts: [
        { icon: '🚗', label: 'סוג', val: 'כביש נופי' },
        { icon: '📏', label: 'אורך', val: '24 ק"מ' },
        { icon: '🔢', label: 'פניות', val: '50 (24 + 26)' },
        { icon: '🏔️', label: 'פסגה', val: '1,611 מ\'' },
        { icon: '⏱️', label: 'עם עצירות', val: '3–4 שעות' },
        { icon: '☕', label: 'בפסגה', val: 'Tičarjev dom + תצפית' },
        { icon: '⛪', label: 'בדרך', val: 'הקפלה הרוסית (פנייה 8)' },
        { icon: '🧥', label: 'בפסגה', val: 'קריר — סוודר' },
      ],
      mapCenter: [46.4339, 13.7506],
      mapZoom: 12,
      schematic: true,
      points: [
        { lat: 46.4847, lng: 13.7800, label: 'Kranjska Gora — התחלה (צפון)', type: 'start' },
        { lat: 46.4339, lng: 13.7506, label: 'פסגת ורשיץ 1,611 מ\'', type: 'via' },
        { lat: 46.3756, lng: 13.7339, label: 'Trenta — ירידה לסוצ\'ה (דרום)', type: 'end' },
      ],
      steps: [
        { title: '🚗 יציאה מ-Kranjska Gora', note: 'הכביש מתחיל בצד הצפוני. 24 פניות ממוספרות בעלייה — אפשר לספור עם הילדים.' },
        { title: '⛪ הקפלה הרוסית (פנייה ~8)', note: 'אנדרטת עץ לזכר השבויים שבנו את הכביש. עצירה קצרה שווה.' },
        { title: '🏔️ פסגה 1,611 מ\'', note: 'חניה בפסגה ליד Tičarjev dom. קפה, תצפית 360°, ותחילת שבילי הליכה קצרים.' },
        { title: '↘️ ירידה ל-Trenta (26 פניות)', note: 'הצד הדרומי תלול ומפותל יותר — לנסוע לאט. בתחתית מתחיל עמק הסוצ\'ה.' },
      ],
      tip: 'לנסוע לאט ולעצור בפניות עם נוף. ברכב אוטומטי — לבלום במנוע בירידה ולא רק בבלמים. מי שסובל ממחלת נסיעה: לשבת מקדימה.',
      links: [
        { label: 'מסלול הנהיגה (Google Maps)', url: 'https://www.google.com/maps/dir/Kranjska+Gora/Vr%C5%A1i%C4%8D+Pass/Trenta', kind: 'map' },
        { label: 'מעבר ורשיץ — אתר רשמי', url: 'https://kranjska-gora.si/en/attractions/vrsic-pass-and-the-russian-road', kind: 'official' },
      ],
    },
  },

  // עודכן: ביקורת 7/2026 — Virje ללא שחייה
  virje: {
    slug: 'virje',
    heroImage: c('Slap Virje (2).JPG'),
    heroImageCaption: 'Slap Virje — בריכה טורקיז שמפל נופל לתוכה',
    whyGo: 'מפל קטן שנופל לתוך בריכה טבעית בצבע טורקיז עמוק — אחת הפינות המצולמות של העמק. 15 דקות מבווץ, 10 דקות הליכה מהחניון.',
    whyGoSuffix: '⚠️ שחייה בבריכה אסורה רשמית — באים לתצפית, צילום ופיקניק קצר. את השחייה שומרים לחוף Čezsoča.',
    facts: [
      { icon: '📍', label: 'מרחק', val: '15 דק\' מבווץ' },
      { icon: '🚶', label: 'הליכה', val: '10 דק\' מהחניון' },
      { icon: '🌡️', label: 'מים', val: '14°C — קרים ומרעננים' },
      { icon: '💶', label: 'כניסה', val: 'חינם' },
    ],
    alerts: [
      { type: 'warn', text: '⚠️ שחייה בבריכה אסורה רשמית — תצפית וצילום בלבד.' },
      { type: 'info', text: '💡 להגיע בבוקר מוקדם — אור הכי יפה, ולפני שמגיעים אחרים. חניה עד שעתיים.' },
    ],
    flowSteps: [
      { title: 'הגעה לחניון Virje', note: 'חניון קטן על הכביש. €5, מוגבל לשעתיים.' },
      { title: '📸 הבריכה הטורקיז', note: 'המפל נופל מ-10 מטר לבריכה. הצבע הכי עז באור בוקר.', highlight: true },
      { title: 'פיקניק קצר וחזרה', note: 'פינה מושלמת לנשנוש. שחייה — לא כאן, אלא ב-Čezsoča.', highlight: true },
    ],
    bringItems: [
      { icon: '📷', label: 'מצלמה / טלפון' },
      { icon: '🥪', label: 'נשנוש לפיקניק' },
      { icon: '👟', label: 'נעליים נוחות' },
      { icon: '🧴', label: 'קרם שמש' },
    ],
    routeGuide: {
      facts: [
        { icon: '📏', label: 'מהחניה', val: '~5–10 דק\' הליכה' },
        { icon: '🥾', label: 'קושי', val: 'קל מאוד' },
        { icon: '🅿️', label: 'חניה', val: '€5 / שעתיים' },
        { icon: '📍', label: 'מרחק מבווץ', val: '3.5 ק"מ (דרך Plužna)' },
        { icon: '🌡️', label: 'מים', val: '14°C — קרים' },
        { icon: '💶', label: 'כניסה', val: 'חינם' },
        { icon: '👟', label: 'משטח', val: 'שביל קל בצמחייה' },
        { icon: '📸', label: 'מתאים ל', val: 'תצפית + צילום (שחייה אסורה)' },
      ],
      mapCenter: [46.3474, 13.5528],
      mapZoom: 15,
      schematic: true,
      points: [
        { lat: 46.3469, lng: 13.5536, label: 'חניה — התחלה', type: 'start' },
        { lat: 46.3480, lng: 13.5520, label: 'מפל Virje + הבריכה', type: 'end' },
      ],
      steps: [
        { title: '🚗 נסיעה מבווץ דרך Plužna', note: 'מבווץ לכיוון Plužna; בצומת ימינה, ואחרי כמה מאות מטר מגיעים לחניון הרחב.' },
        { title: '🅿️ חניה (€5 / שעתיים)', note: 'חניון רחב ליד תחילת השביל. לשים לב להגבלת השעתיים.' },
        { title: '🚶 ירידה קצרה לבריכה', note: 'שביל קל ~5–10 דק\' יורד לבריכה הטורקיז שהמפל נופל לתוכה.' },
        { title: '📸 תצפית, צילום ופיקניק', note: 'שחייה אסורה רשמית. זהירות על סלעים רטובים. הצבע הכי עז באור בוקר.' },
      ],
      tip: 'להגיע מוקדם — החניה מוגבלת לשעתיים ומתמלאת מהר. את השחייה שומרים לחוף Čezsoča (5 דק\' מבווץ).',
      links: [
        { label: 'מפת המסלול (AllTrails)', url: 'https://www.alltrails.com/poi/slovenia/bovec/bovec/slap-virje', kind: 'map' },
        { label: 'מסלול הליכה (Outdooractive)', url: 'https://www.outdooractive.com/en/route/hiking-trail/julian-alps/slap-virje-virje-waterfall-/33511877/', kind: 'map' },
      ],
    },
  },

  kozjak: {
    slug: 'kozjak',
    heroImage: c('Kozjak falls Kobarid.jpg'),
    secondImage: c('Kobarid Kozjak-Fall 09.JPG'),
    heroImageCaption: 'מפל קוזיאק — האור שנכנס דרך פתח המנהרה הטבעית',
    whyGo: '45 דקות הליכה קלה מהכביש, לאורך נחל, ואז — מנהרה טבעית. ובקצה המנהרה — מפל שנופל לתוך בריכה. האור שנכנס דרך פתח הסלע יוצר אפקט שאי אפשר לתאר.',
    whyGoSuffix: 'לא ידוע כמו הנהר — ולכן פחות עמוס.',
    facts: [
      { icon: '🚶', label: 'הליכה', val: '45 דק\' קלה' },
      { icon: '💶', label: 'כניסה', val: 'חינם' },
      { icon: '📍', label: 'יציאה', val: 'קובריד · 20 דק\' מבווץ' },
      { icon: '✨', label: 'מיוחד', val: 'אור דרך פתח הסלע' },
    ],
    alerts: [
      { type: 'info', text: '💡 יציאה מקובריד — 20 דק\' נסיעה מבווץ.' },
    ],
    flowSteps: [
      { title: 'יציאה מהחניון ליד קובריד', note: 'השביל ברור וישר.' },
      { title: 'הליכה 45 דקות', note: 'שביל נוח, ירוק, לאורך הנחל.' },
      { title: '✨ המנהרה הטבעית', note: 'פתאום הנחל ממשיך לתוך מנהרה בסלע.', highlight: true },
      { title: '💧 המפל בקצה המנהרה', note: 'האור שנכנס מלמעלה, המפל שנופל. רגע שקשה לתאר.', highlight: true },
    ],
    bringItems: [
      { icon: '👟', label: 'נעלי הליכה — השביל לח' },
      { icon: '💧', label: 'מים' },
      { icon: '📱', label: 'טלפון — לצלם את האור' },
    ],
    routeGuide: {
      facts: [
        { icon: '📏', label: 'אורך', val: '~3.5 ק"מ הלוך-חזור' },
        { icon: '⏱️', label: 'משך', val: '~45 דק\' לכיוון' },
        { icon: '🥾', label: 'קושי', val: 'בינוני · קטע תלול בסוף' },
        { icon: '📈', label: 'הפרש גובה', val: '~140 מ\'' },
        { icon: '🅿️', label: 'חניה', val: 'קובריד · €1.5' },
        { icon: '✨', label: 'מיוחד', val: 'מפל באמפיתיאטרון סלע' },
        { icon: '👟', label: 'משטח', val: 'שביל יער + כבל בקטע' },
        { icon: '📅', label: 'עונה', val: 'מאי–ספטמבר' },
      ],
      mapCenter: [46.2530, 13.5810],
      mapZoom: 14,
      schematic: true,
      points: [
        { lat: 46.2480, lng: 13.5830, label: 'חניה קובריד — התחלה', type: 'start' },
        { lat: 46.2540, lng: 13.5800, label: 'שביל יער לאורך הסוצ\'ה', type: 'via' },
        { lat: 46.2575, lng: 13.5785, label: 'מפל קוזיאק — סוף', type: 'end' },
      ],
      steps: [
        { title: '🅿️ חניה בקובריד', note: 'שני חניונים (€1.5). הקרוב לשביל גדול יותר. יוצאים לכיוון הגשר על הסוצ\'ה.' },
        { title: '🌲 שביל יער לאורך הסוצ\'ה', note: 'הליכה נעימה ~30 דק\' ביער ירוק לצד הנהר הטורקיז. שביל ברור.' },
        { title: '⚠️ קטע אחרון תלול', note: 'לקראת הסוף קטע סלעי תלול עם כבל הכוונה — להיזהר, יכול להיות חלקלק.' },
        { title: '✨ המפל באמפיתיאטרון', note: 'המפל נופל לבריכה בתוך חלל סלע מרשים. האור שנכנס יוצר אפקט מיוחד.' },
      ],
      tip: 'שביל לח וחלקלק בקטעים — נעליים טובות חובה. פחות עמוס מהאתרים הגדולים. שחייה בבריכה — קרה מאוד.',
      links: [
        { label: 'מפת המסלול (AllTrails)', url: 'https://www.alltrails.com/trail/slovenia/kobarid/do-slapa-kozjac', kind: 'map' },
        { label: 'מפת המסלול (Wikiloc)', url: 'https://www.wikiloc.com/hiking-trails/slap-kozjak-10443446', kind: 'map' },
      ],
    },
  },

  rafting: {
    slug: 'rafting',
    heroImage: c('Velika korita Soče Soča (Bovec) 01.JPG'),
    heroImageCaption: 'נהר הסוצ\'ה הטורקיז — מסלול הראפטינג',
    whyGo: 'שמונה קילומטר על הנהר הטורקיז ביותר שראיתם בטיול — אבל הפעם מבפנים. הגלים, הסלעים, הצבע מתחת לסירה. עם מדריך, עם ציוד, עם צלמים.',
    whyGoSuffix: 'הוזמן ושולם. להגיע ב-08:30. לאכול ארוחת בוקר מלאה לפני.',
    facts: [
      { icon: '📏', label: 'מסלול', val: '~8 ק"מ · Boka→Trnovo' },
      { icon: '⏱️', label: 'משך', val: '~3 שעות על המים' },
      { icon: '📸', label: 'צילומים', val: 'חינם מהצוות!' },
      { icon: '🎂', label: 'גיל מינימום', val: '6 ✅' },
      { icon: '✅', label: 'הזמנה', val: 'מוזמן ושולם' },
      { icon: '📱', label: 'טלפון לנהר', val: 'לא!!' },
    ],
    alerts: [
      { type: 'ok',   text: '✅ הוזמן ושולם — Sport Mix · 08:30 · Trg golobarskih žrtev 18' },
      { type: 'info', text: '📷 הצלמים מצלמים לאורך כל המסלול — קישור בסוף.' },
      { type: 'warn', text: '⚠️ לא להביא טלפון לנהר — הצלמים שלהם מטפלים בצילום.' },
    ],
    flowSteps: [
      { title: '🍳 07:30 — ארוחת בוקר מלאה', note: 'חובה לפני ראפטינג.' },
      { title: '📍 08:30 — Sport Mix', note: 'ציוד, ניאופרן, אפוד הצלה. הכל מסופק.', highlight: true },
      { title: '🚣 על הנהר — ~3 שעות', note: 'הצבע הטורקיז מתחת לסירה. הילדים יצרחו מאושר.', highlight: true },
      { title: 'סיום + מקלחות', note: 'קישור לתמונות מהצוות.' },
    ],
    bringItems: [
      { icon: '🩱', label: 'בגד ים + בגדים יבשים' },
      { icon: '👟', label: 'נעלי מים ישנות' },
      { icon: '🧴', label: 'קרם שמש עמיד למים' },
      { icon: '🏊', label: 'מגבת + שינוי' },
      { icon: '📱', label: 'טלפון לנהר — לא!', no: true },
      { icon: '📷', label: 'מצלמה — לא צריך', no: true },
    ],
    routeGuide: {
      facts: [
        { icon: '📏', label: 'מסלול', val: '~8 ק"מ · Boka→Trnovo' },
        { icon: '⏱️', label: 'משך', val: '~3 ש\' (1.5 על המים)' },
        { icon: '🌊', label: 'דרגה', val: 'עד IV — מודרך, למשפחות' },
        { icon: '🎂', label: 'גיל מינ\'', val: '6' },
        { icon: '🧥', label: 'ציוד', val: 'חליפה+קסדה+אפוד כלול' },
        { icon: '📸', label: 'צילומים', val: 'חינם בסוף' },
        { icon: '📍', label: 'מפגש', val: 'Sport Mix, כיכר בווץ' },
        { icon: '💶', label: 'שים לב', val: 'יתר נהר נוסף (~€21/€12.5)' },
      ],
      mapCenter: [46.3383, 13.5523],
      mapZoom: 12,
      schematic: true,
      points: [
        { lat: 46.3383, lng: 13.5523, label: 'Sport Mix — מפגש וציוד', type: 'start' },
        { lat: 46.3119, lng: 13.5050, label: 'כניסה למים (Boka/קיץ: Srpenica)', type: 'via' },
        { lat: 46.2790, lng: 13.4900, label: 'Trnovo — יציאה', type: 'end' },
      ],
      steps: [
        { title: '📍 מפגש במשרד (כיכר בווץ)', note: 'Trg golobarskih žrtev 18. צ\'ק-אין וקבלת ציוד: ניאופרן, קסדה, אפוד, נעלי מים, משוט.' },
        { title: '🦺 תדריך בטיחות', note: 'המדריך מסביר טכניקת חתירה ומה עושים אם נופלים. באנגלית.' },
        { title: '🚐 הסעה לכניסה', note: 'הסעה לנקודת הכניסה (Boka; בקיץ מים נמוכים — לעיתים Srpenica, ~6 ק"מ). כלול.' },
        { title: '🚣 ראפטינג ~1.5 ש\'', note: 'מתחיל רגוע ומתגבר עד קטע טכני. עצירות לקפיצות ושחייה.' },
        { title: '🏁 יציאה ב-Trnovo + חזרה', note: 'יציאה, הסעה חזרה למשרד, החזרת ציוד, וקבלת הצילומים.' },
      ],
      tip: 'ארוחת בוקר טובה לפני — חובה. מים קרים: לוודא שהחליפה סגורה היטב על הילדים. בגדים יבשים וחמים לסיום. בלי טלפון על הנהר — הצלמים מצלמים.',
      links: [
        { label: 'Sport Mix — ראפטינג Classic (רשמי)', url: 'https://sportmix.si/en/adventure/classic-rafting/', kind: 'official' },
        { label: 'מיקום המפגש (מפה)', url: 'https://g.page/sportmixbovec?share', kind: 'map' },
      ],
    },
  },

  boka: {
    slug: 'boka',
    heroImage: c('Boka waterfall (53425136130).jpg'),
    heroImageCaption: 'Slap Boka — המפל הגבוה בסלובניה, 106 מטר',
    whyGo: 'המפל הגבוה בסלובניה — 106 מטר. רואים אותו מהכביש, מרחוק, כבר לפני שיוצאים מהרכב. 30 דקות הליכה קלה מביאות אתכם קרוב מספיק כדי להרגיש את הספריי.',
    whyGoSuffix: 'אחרי ראפטינג אתמול — יום ללא לחץ.',
    facts: [
      { icon: '📏', label: 'גובה', val: '106 מטר' },
      { icon: '🚶', label: 'הליכה', val: '30 דק\' קלה' },
      { icon: '💶', label: 'כניסה', val: 'חינם' },
      { icon: '👁️', label: 'נראה', val: 'מהכביש כבר מרחוק' },
    ],
    alerts: [
      { type: 'info', text: '💡 יום אחרון בסוצ\'ה — לא למהר.' },
    ],
    flowSteps: [
      { title: 'ראיית המפל מהכביש', note: 'הילד 10 יצביע מרחוק.' },
      { title: 'הליכה 30 דקות', note: 'שביל ברור.' },
      { title: '💧 הספריי והרעש', note: 'המפל נופל מ-106 מטר. מקרוב — הרעש והלחות מכסים הכל.', highlight: true },
      { title: 'פרידה מהסוצ\'ה', note: 'שחייה אחרונה בנהר.', highlight: true },
    ],
    bringItems: [
      { icon: '👟', label: 'נעלי הליכה' },
      { icon: '🧥', label: 'ג\'קט — ספריי רטוב' },
      { icon: '📱', label: 'טלפון לתמונות' },
      { icon: '💧', label: 'מים' },
    ],
    routeGuide: {
      facts: [
        { icon: '📏', label: 'לתצפית ראשונה', val: '~15–20 דק\'' },
        { icon: '🥾', label: 'קושי', val: 'בינוני · תלול בהמשך' },
        { icon: '💧', label: 'גובה המפל', val: '106 מ\' (הגבוה בסלובניה)' },
        { icon: '🅿️', label: 'חניה', val: 'ליד הגשר / ליד המלון' },
        { icon: '👁️', label: 'נראה', val: 'מהכביש כבר מרחוק' },
        { icon: '👟', label: 'משטח', val: 'שביל סלעי + כבלים למעלה' },
        { icon: '💶', label: 'כניסה', val: 'חינם' },
        { icon: '📅', label: 'הכי חזק', val: 'אביב / המסת שלגים' },
      ],
      mapCenter: [46.3105, 13.5025],
      mapZoom: 15,
      schematic: true,
      points: [
        { lat: 46.3119, lng: 13.5050, label: 'חניה ליד הגשר — התחלה', type: 'start' },
        { lat: 46.3100, lng: 13.5020, label: 'תצפית ראשונה (~15 דק\')', type: 'via' },
        { lat: 46.3085, lng: 13.4995, label: 'תצפית עליונה (תלול)', type: 'end' },
      ],
      steps: [
        { title: '🅿️ חניה ליד הגשר', note: 'חונים בקצה הצפוני של הגשר או ליד המלון מדרום. את המפל רואים כבר מהכביש.' },
        { title: '📷 תצפית ראשונה — 15 דק\'', note: 'עלייה קצרה ביער מביאה לתצפית הראשונה על המפל והעמק. מספיק לרוב המבקרים.' },
        { title: '⚠️ המשך תלול לתצפית העליונה', note: 'מי שרוצה קרוב יותר — השביל הופך תלול וסלעי, עם כבלים. לא לכולם, ולא עם ילדים קטנים.' },
        { title: '↩️ חזרה', note: 'חוזרים באותו שביל. אפשר לשלב שחייה אחרונה בסוצ\'ה בדרך חזרה.' },
      ],
      tip: 'התצפית הראשונה קלה ומספקת; הקטע העליון תלול ולא הכרחי. הכי מרשים אחרי גשם או המסת שלגים.',
      links: [
        { label: 'מפת תצפיות (AllTrails)', url: 'https://www.alltrails.com/trail/slovenia/slap-boka-razgledne-tocke', kind: 'map' },
        { label: 'מסלול מעגלי מלא (AllTrails)', url: 'https://www.alltrails.com/trail/slovenia/bovec/zanka-slapa-boka', kind: 'map' },
      ],
    },
  },

};
