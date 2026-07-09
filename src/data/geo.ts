// src/data/geo.ts — קואורדינטות לכל נקודה, למפות האינטראקטיביות (Leaflet)
// אטרקציות: לפי מיקום ידוע · לינות: GPS מדויק מאישורי ההזמנה (Booking)

// מפתח = slug של האטרקציה (ראה utils/slugs.ts)
export const attractionGeo: Record<string, [number, number]> = {
  skocjan:     [45.6636, 13.9899],
  predjama:    [45.8159, 14.1268],
  postojna:    [45.7833, 14.2039],
  rastoka:     [45.1128, 15.5853],
  plitvice:    [44.8806, 15.6160],
  catez:       [45.8906, 15.6258],
  bohinj:      [46.2772, 13.8856],
  bled:        [46.3625, 14.0936],
  straza:      [46.3589, 14.1083],
  vintgar:     [46.3958, 14.0889],
  mostnica:    [46.2936, 13.8889],
  vogel:       [46.2806, 13.8400],
  'car-train': [46.2728, 13.9472],
  vrsic:       [46.4339, 13.7506],
  virje:       [46.3469, 13.5536],
  kozjak:      [46.2492, 13.5847],
  rafting:     [46.3375, 13.5522],
  boka:        [46.3119, 13.5050],
};

// מפתח = שם הלינה (accommodation.name) · קואורדינטות מדויקות מ-Booking
export const lodgingGeo: Record<string, [number, number]> = {
  'Hotel Forte del 48':       [45.6308, 12.5757],
  'Vila Lemic':               [45.7458, 14.1949],
  'Flora House':              [44.9111, 15.6131],
  'Guesthouse Les':           [45.8908, 15.6024],
  'Barn House MM':            [46.3697, 14.1205],
  'Charming Bovec Apartment': [46.3316, 13.5406],
  '—':                        [45.5052, 12.3519], // נמל התעופה ונציה (יום 13)
};
