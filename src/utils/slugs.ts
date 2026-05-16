// src/utils/slugs.ts

const slugMap: Record<string, string> = {
  'מערת שקוצ\'יאן': 'skocjan',
  'טירת פרדיאמה': 'predjama',
  'מערת פוסטויניה': 'postojna',
  'ראסטוקה': 'rastoka',
  'פליטביצה': 'plitvice',
  'וינטגר': 'vintgar',
  'בלד': 'bled',
  'בוהין': 'bohinj',
  'מוסטניצה': 'mostnica',
  'ראפטינג': 'rafting',
  'Kobarid': 'kobarid',
};

export function toSlug(name: string, index: number): string {
  for (const [key, val] of Object.entries(slugMap)) {
    if (name.includes(key)) return val;
  }
  return `attraction-${index + 1}`;
}
