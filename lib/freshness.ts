export type FreshnessStage = {
  id: string;
  label: string;
  title: string;
  description: string;
  action: string;
  color: string;
};

export const stages: FreshnessStage[] = [
  {
    id: "fresh",
    label: "Hijau",
    title: "Kondisi relatif segar",
    description:
      "Indikator berada pada tahap warna awal. Dalam konsep Freshcoy, tahap ini menggambarkan kondisi penyimpanan yang masih relatif baik.",
    action:
      "Tetap simpan dengan kemasan bersih dan periksa kondisi fisik pakcoy secara berkala.",
    color: "#5b9b55",
  },
  {
    id: "watch",
    label: "Biru",
    title: "Mulai berubah",
    description:
      "Warna indikator mengalami perubahan. Ini menjadi sinyal untuk memperhatikan kondisi penyimpanan dan kondisi fisik pakcoy.",
    action:
      "Periksa daun, batang, tekstur, suhu penyimpanan, dan lama penyimpanan.",
    color: "#4e77b4",
  },
  {
    id: "alert",
    label: "Ungu",
    title: "Perubahan lebih terlihat",
    description:
      "Perubahan indikator lebih jelas. Pada konsep ini, pengguna dianjurkan melakukan pemeriksaan lebih menyeluruh.",
    action:
      "Prioritaskan pemeriksaan fisik produk sebelum menentukan tindakan selanjutnya.",
    color: "#6c43a4",
  },
  {
    id: "critical",
    label: "Pucat",
    title: "Perlu perhatian",
    description:
      "Tahap terakhir simulasi menandai perubahan yang semakin jauh dari kondisi awal indikator.",
    action:
      "Jangan menggunakan indikator sebagai satu-satunya dasar keputusan. Evaluasi kondisi fisik dan keamanan produk.",
    color: "#c1a044",
  },
];