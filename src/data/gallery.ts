// Web-optimized shoot library, grouped by category.
// Source originals live in /public/For Websitte (git-ignored, not deployed);
// run `npm run optimize:images` to regenerate the .webp files in /public/gallery.

const BASE = '/gallery';

export interface GalleryCategory {
  id: string; // url-safe filter id / folder
  label: string; // display name
  files: string[]; // optimized .webp filenames
}

const categories: GalleryCategory[] = [
  {
    id: 'cafes',
    label: 'Cafes',
    files: [
      '5za01637.webp', '5za01717.webp', '5za01735.webp', '5za01763.webp',
      '5za01766.webp', '5za01819.webp', '5za01820.webp', '5za01896.webp',
      '5za01964.webp', 'dsc01833.webp', 'dsc02795.webp', 'dsc03004.webp',
      'dsc03024.webp', 'dsc03071.webp', 'dsc03087.webp', 'dsc03101.webp',
      'dsc03225.webp', 'dsc03321.webp',
    ],
  },
  {
    id: 'food',
    label: 'Food',
    files: ['5za00082.webp', '5za00101.webp', '5za00323.webp', '5za00339.webp', '5za00373.webp'],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    files: [
      '5za00386.webp', '5za00395.webp', '5za00537.webp', '5za01246.webp',
      '5za08104.webp', '5za08192.webp', '5za08306.webp', '5za08307.webp',
      '5za09229.webp', '5za09232.webp', '5za09337.webp', '5za09351.webp',
      '5za09816.webp', '5za09927.webp', 'dsc03678.webp', 'dsc03695.webp',
      'dsc03698.webp', 'dsc03706.webp', 'dsc03709.webp', 'dsc03711.webp',
    ],
  },
  {
    id: 'interior',
    label: 'Interior',
    files: ['dsc03678.webp', 'dsc03695.webp', 'dsc03698.webp', 'dsc03706.webp', 'dsc03709.webp', 'dsc03711.webp'],
  },
  {
    id: 'nightlife',
    label: 'Nightlife',
    files: [
      '5za00132.webp', '5za00645.webp', '5za03154.webp', '5za03805.webp',
      '5za03910.webp', '5za03977.webp', '5za04017.webp', '5za04659.webp',
      '5za05223.webp', '5za05696.webp', 'dsc00519.webp', 'dsc01390.webp',
      'dsc01428.webp', 'dsc07293.webp', 'dsc07404.webp', 'dsc07775.webp',
      'mk-bigbull-1-40.webp', 'mk-bigbull-1-7.webp',
    ],
  },
];

export interface GalleryItem {
  src: string;
  category: string; // filter id
  label: string; // category display name
}

export const galleryItems: GalleryItem[] = categories.flatMap((cat) =>
  cat.files.map((file) => ({
    src: `${BASE}/${cat.id}/${file}`,
    category: cat.id,
    label: cat.label,
  }))
);

export const galleryFilters = [
  { id: 'all', label: 'All' },
  ...categories.map((c) => ({ id: c.id, label: c.label })),
];
