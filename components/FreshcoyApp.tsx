"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Beaker,
  BookOpen,
  Check,
  ChevronDown,
  ClipboardList,
  FlaskConical,
  Leaf,
  Menu,
  Recycle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sprout,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { stages } from "@/lib/freshness";
import type { FreshnessStage } from "@/lib/freshness";

const ease = [0.22, 1, 0.36, 1] as const;

type NavigationLink = {
  href: string;
  label: string;
};

type ProcessStep = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

type ChemistryItem = {
  name: string;
  tone: string;
  text: string;
};

type GuideCard = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

type StorageStep = {
  number: string;
  title: string;
  description: string;
};

type TimelineItem = {
  time: string;
  title: string;
  text: string;
  color: string;
};

type InfoCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type ProjectComponent = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type WhyCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type FoodWasteCard = {
  title: string;
  description: string;
  className: string;
};

type TreatmentStep = {
  number: string;
  title: string;
  description: string;
};

type ResearchGoal = {
  number: string;
  text: string;
};

type ReferenceItem = {
  title: string;
  source: string;
};

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const navigationLinks: NavigationLink[] = [
  { href: "#status", label: "Status" },
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#kimia", label: "Kimia" },
  { href: "#panduan", label: "Panduan" },
  { href: "#perlakuan", label: "Perlakuan" },
  { href: "#perubahan", label: "Perubahan" },
  { href: "#penelitian", label: "Penelitian" },
  { href: "#pengamatan", label: "Pengamatan" },
  { href: "#kesimpulan", label: "Kesimpulan" },
  { href: "#saran", label: "Saran" },
  { href: "#food-waste", label: "Food waste" },
  { href: "#tentang-proyek", label: "Tentang proyek" },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Pakcoy",
    text:
      "Pakcoy ditempatkan dalam kemasan Freshcoy untuk diamati selama penyimpanan.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Penyimpanan",
    text:
      "Pakcoy mengalami perubahan fisiologis dan kimiawi selama proses penyimpanan.",
    icon: ArrowDown,
  },
  {
    number: "03",
    title: "Indikator",
    text:
      "Antosianin digunakan sebagai indikator alami yang dapat menunjukkan perubahan warna.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Pengamatan",
    text:
      "Warna indikator diamati bersama kondisi fisik pakcoy seperti daun, batang, dan tekstur.",
    icon: ScanLine,
  },
];

const treatmentSteps: TreatmentStep[] = [
  {
    number: "01",
    title: "Persiapan pakcoy",
    description:
      "Pakcoy dipersiapkan dalam kondisi awal yang ditentukan oleh penelitian sebelum dimasukkan ke dalam sistem kemasan.",
  },
  {
    number: "02",
    title: "Pemasangan indikator",
    description:
      "Indikator berbasis antosianin ditempatkan pada bagian kemasan yang telah ditentukan agar perubahan warna dapat diamati.",
  },
  {
    number: "03",
    title: "Penyimpanan",
    description:
      "Pakcoy disimpan selama periode pengamatan sesuai perlakuan penelitian yang digunakan oleh tim.",
  },
  {
    number: "04",
    title: "Pengamatan kondisi sayur",
    description:
      "Kondisi daun, warna, tekstur, batang, dan perubahan fisik lainnya diamati secara berkala.",
  },
  {
    number: "05",
    title: "Pengamatan indikator",
    description:
      "Perubahan warna indikator diamati dan dibandingkan dengan kondisi fisik pakcoy pada waktu pengamatan yang sama.",
  },
  {
    number: "06",
    title: "Pencatatan data",
    description:
      "Hasil perubahan warna indikator dan kondisi pakcoy dicatat untuk dibandingkan selama periode penelitian.",
  },
];

const researchSteps = [
  {
    number: "01",
    title: "Ekstraksi",
    text: "Antosianin diperoleh dari kol ungu.",
  },
  {
    number: "02",
    title: "Pembuatan indikator",
    text:
      "Ekstrak digunakan sebagai bahan indikator alami.",
  },
  {
    number: "03",
    title: "Integrasi kemasan",
    text:
      "Indikator ditempatkan pada sistem kemasan Freshcoy.",
  },
  {
    number: "04",
    title: "Penyimpanan pakcoy",
    text:
      "Pakcoy ditempatkan dalam kondisi penyimpanan penelitian.",
  },
  {
    number: "05",
    title: "Pengamatan",
    text:
      "Perubahan warna indikator dan kondisi fisik pakcoy diamati.",
  },
  {
    number: "06",
    title: "Analisis",
    text:
      "Hasil pengamatan dibandingkan untuk memahami potensi indikator sebagai alat bantu pemantauan.",
  },
];

const guideCards: GuideCard[] = [
  {
    title: "Kondisi baik",
    items: [
      "daun masih tampak segar",
      "warna daun masih normal",
      "batang masih cukup kokoh",
      "tidak ada kerusakan mencolok",
    ],
    icon: Check,
  },
  {
    title: "Mulai menurun",
    items: [
      "daun mulai layu",
      "warna daun mulai berubah",
      "tekstur tidak sekokoh sebelumnya",
    ],
    icon: ChevronDown,
  },
];

const storageSteps: StorageStep[] = [
  {
    number: "01",
    title: "Pisahkan",
    description:
      "Jauhkan dari sayuran atau bahan makanan yang sudah rusak.",
  },
  {
    number: "02",
    title: "Gunakan kemasan bersih",
    description:
      "Simpan pakcoy dalam kemasan yang bersih.",
  },
  {
    number: "03",
    title: "Hindari pemicu kerusakan",
    description:
      "Hindari kondisi yang dapat mempercepat pelayuan atau kerusakan.",
  },
  {
    number: "04",
    title: "Periksa berkala",
    description:
      "Perhatikan daun, batang, tekstur, dan indikator.",
  },
];

const observationRows = [
  {
    day: "Hari 1",
    color: "UNGU",
    condition:
      "Masih terlihat segar.",
    note:
      "Pakcoy yang baru dipacking masih dalam kondisi segar.",
  },
  {
    day: "Hari 2",
    color: "UNGU",
    condition:
      "Pakcoy masih cukup segar, tetapi mulai ada sedikit perubahan pada daun.",
    note:
      "Indikator belum menunjukkan perubahan warna yang jelas.",
  },
  {
    day: "Hari 3",
    color: "UNGU",
    condition:
      "Daun mulai mengalami perubahan warna dan terlihat lebih layu.",
    note:
      "Indikator belum berubah. Hal ini kemungkinan karena kertas saring dipasang terlalu cepat setelah direndam dalam ekstrak kol ungu, sehingga ekstrak belum meresap dengan maksimal.",
  },
  {
    day: "Hari 4",
    color: "KUNING",
    condition:
      "Daun pakcoy semakin layu dan perubahan warna semakin terlihat.",
    note:
      "Indikator berubah dari ungu menjadi kuning saat kondisi pakcoy semakin menurun.",
  },
];

const foodWasteCards: FoodWasteCard[] = [
  {
    title: "Masih baik",
    description:
      "Simpan dan gunakan sesuai kebutuhan.",
    className: "bg-[#e9f3e8]",
  },
  {
    title: "Mulai menurun",
    description:
      "Prioritaskan untuk segera diolah jika masih layak.",
    className: "bg-[#f8f2dd]",
  },
  {
    title: "Tidak dapat digunakan",
    description:
      "Pisahkan dan tangani sebagai limbah.",
    className: "bg-[#eef0ed]",
  },
];

const projectComponents: ProjectComponent[] = [
  {
    title: "Pakcoy",
    text:
      "Produk yang dipantau selama penyimpanan.",
    icon: Sprout,
  },
  {
    title: "Antosianin kol ungu",
    text:
      "Bahan alami yang digunakan sebagai indikator perubahan.",
    icon: FlaskConical,
  },
  {
    title: "Kemasan",
    text:
      "Media penyimpanan pakcoy dan tempat integrasi indikator.",
    icon: Beaker,
  },
  {
    title: "Sistem pengamatan",
    text:
      "Menggabungkan pengamatan indikator dan kondisi fisik pakcoy.",
    icon: ClipboardList,
  },
];

const whyCards: WhyCard[] = [
  {
    title: "Untuk konsumen",
    text:
      "Membantu memahami perubahan kondisi pakcoy melalui indikator dan pengamatan fisik.",
    icon: Sprout,
  },
  {
    title: "Untuk edukasi",
    text:
      "Memperkenalkan pemanfaatan bahan alami dalam konsep smart packaging.",
    icon: BookOpen,
  },
  {
    title: "Untuk lingkungan",
    text:
      "Mendorong penggunaan pangan secara lebih bijak dan meningkatkan kesadaran terhadap food waste.",
    icon: Recycle,
  },
];

const timelineItems: TimelineItem[] = [
  {
    time: "Hari 1",
    title: "Kondisi awal",
    text:
      "Pakcoy masih terlihat segar dan indikator masih berada pada warna awal.",
    color: "#6c43a4",
  },
  {
    time: "Hari 2",
    title: "Mulai berubah",
    text:
      "Pakcoy masih cukup segar, tetapi mulai terlihat sedikit perubahan pada daun sementara indikator belum menunjukkan perubahan yang jelas.",
    color: "#6c43a4",
  },
  {
    time: "Hari 3",
    title: "Perubahan fisik terlihat",
    text:
      "Daun mulai berubah warna dan terlihat lebih layu, tetapi indikator belum berubah secara jelas.",
    color: "#6c43a4",
  },
  {
    time: "Hari 4",
    title: "Indikator berubah",
    text:
      "Daun semakin layu dan indikator berubah dari ungu menjadi kuning ketika kondisi pakcoy semakin menurun.",
    color: "#c1a044",
  },
];

/*
 * WARNA INTERACTIVE INDICATOR
 *
 * 0 = Ungu  → masih bagus
 * 1 = Hijau  → kurang segar
 * 2 = Kuning → tidak segar tetapi masih bisa dikonsumsi
 * 3 = Pink   → busuk
 */
const interactiveIndicatorColors = [
  "#6c43a4",
  "#5b9b55",
  "#c1a044",
  "#dc6b8a",
];

const interactiveStages: FreshnessStage[] = [
  {
    ...(stages[0] ?? {}),
    id: "interactive-purple",
    label: "Ungu",
    title: "Masih bagus",
    description:
      "Pakcoy masih terlihat segar, warna daun masih normal, dan belum menunjukkan perubahan yang berarti.",
    action:
      "Pakcoy dapat disimpan dan digunakan sesuai kebutuhan.",
    color: interactiveIndicatorColors[0],
  },
  {
    ...(stages[1] ?? {}),
    id: "interactive-green",
    label: "Hijau",
    title: "Kurang segar",
    description:
      "Pakcoy mulai mengalami penurunan kesegaran, seperti daun mulai layu atau mengalami perubahan fisik ringan.",
    action:
      "Periksa kondisi pakcoy dan prioritaskan untuk segera diolah jika masih layak.",
    color: interactiveIndicatorColors[1],
  },
  {
    ...(stages[2] ?? {}),
    id: "interactive-yellow",
    label: "Kuning",
    title:
      "Tidak segar tetapi masih bisa dikonsumsi",
    description:
      "Pakcoy menunjukkan penurunan kualitas yang lebih terlihat. Kondisi fisiknya perlu diperiksa sebelum digunakan.",
    action:
      "Periksa kondisi fisik pakcoy dengan teliti dan segera olah jika masih layak.",
    color: interactiveIndicatorColors[2],
  },
  {
    ...(stages[3] ?? {}),
    id: "interactive-pink",
    label: "Pink",
    title: "Busuk",
    description:
      "Pakcoy menunjukkan perubahan yang signifikan dan kondisi fisiknya sudah tidak baik.",
    action:
      "Jangan digunakan dan pisahkan dari bahan makanan lain.",
    color: interactiveIndicatorColors[3],
  },
];

/*
 * WARNA HASIL PENGAMATAN
 *
 * Hasil penelitian yang dicatat:
 * Hari 1 = Ungu
 * Hari 2 = Ungu
 * Hari 3 = Ungu
 * Hari 4 = Kuning
 */
const observationIndicatorColors = [
  "#6c43a4",
  "#6c43a4",
  "#6c43a4",
  "#c1a044",
];

/*
 * WARNA BAGIAN SAINS / ANTOSIANIN
 *
 * Nama ilmiahnya tetap:
 * Flavylium
 * Quinoidal
 * Carbinol pseudobase
 * Chalcone
 *
 * Yang disamakan adalah hirarki warna visual.
 */
const chemistryColors = [
  "#6c43a4", // Flavylium = Ungu
  "#5b9b55", // Quinoidal = Hijau
  "#c1a044", // Carbinol pseudobase = Kuning
  "#dc6b8a", // Chalcone = Pink
];

const researchGoals: ResearchGoal[] = [
  {
    number: "01",
    text:
      "Mengembangkan indikator alami berbasis antosianin untuk membantu memantau perubahan kondisi pakcoy.",
  },
  {
    number: "02",
    text:
      "Mengintegrasikan indikator alami ke dalam konsep smart packaging Freshcoy.",
  },
  {
    number: "03",
    text:
      "Mengamati hubungan perubahan warna indikator dengan perubahan kondisi pakcoy selama penyimpanan.",
  },
];

const conclusions = [
  "Indikator berbasis antosianin berpotensi digunakan sebagai alat bantu untuk memantau perubahan kondisi pakcoy.",
  "Freshcoy mengintegrasikan indikator alami dengan kemasan sehingga perubahan dapat diamati secara lebih sederhana.",
  "Perubahan warna indikator perlu diamati bersama perubahan fisik dan kondisi penyimpanan pakcoy.",
];

const suggestions = [
  "Jumlah sampel dan pengulangan penelitian dapat diperbanyak agar hasil yang diperoleh lebih kuat.",
  "Pengujian pada beberapa kondisi suhu dan kelembapan yang lebih terkontrol belum dilakukan secara luas dan perlu diteliti lebih lanjut.",
  "Hubungan antara perubahan warna indikator dan kualitas pakcoy belum dikalibrasi secara kuantitatif.",
  "Stabilitas indikator selama penyimpanan dan ketahanan indikator pada berbagai kondisi kemasan masih perlu diuji lebih lanjut.",
];

const references: ReferenceItem[] = [
  {
    title:
      "A review on colorimetric indicators for monitoring product freshness in intelligent food packaging",
    source:
      "Comprehensive Reviews in Food Science and Food Safety, 2022 • DOI: 10.1111/1541-4337.12942",
  },
  {
    title:
      "Recent advances in anthocyanin-based films and its application in sustainable intelligent food packaging",
    source:
      "Food Control, 2024 • DOI: 10.1016/j.foodcont.2024.110431",
  },
  {
    title:
      "Recent advances in the development and application of anthocyanin-based intelligent active food packaging: a review",
    source:
      "Food Chemistry, 2025 • DOI: 10.1016/j.foodchem.2025.145309",
  },
  {
    title:
      "Intelligent packaging films based on anthocyanins: A review of structural properties, biodegradable polymers, application and prospects in food freshness monitoring",
    source:
      "Food Chemistry: X, 2026 • DOI: 10.1016/j.fochx.2026.103634",
  },
];

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                                                 */
/* -------------------------------------------------------------------------- */

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#f7f7f2]/90 backdrop-blur-xl">
      <div className="container-shell flex h-[68px] items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#cfd9d0] bg-white">
            <Leaf
              size={17}
              strokeWidth={2.4}
            />
          </span>

          <span>FRESHCOY</span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {navigationLinks.map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#66706a] transition hover:text-[#173a24]"
              >
                {link.label}
              </a>
            ),
          )}

          <a
            href="#demo"
            className="rounded-full bg-[#173a24] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Demo
          </a>
        </nav>

        <button
          type="button"
          aria-label={
            open
              ? "Tutup menu"
              : "Buka menu"
          }
          aria-expanded={open}
          onClick={() =>
            setOpen(
              (value) => !value,
            )
          }
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-white xl:hidden"
        >
          {open ? (
            <X size={18} />
          ) : (
            <Menu size={18} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="border-t border-[var(--line)] bg-[#f7f7f2] xl:hidden"
          >
            <div className="container-shell grid gap-1 py-3">
              {navigationLinks.map(
                (link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="rounded-xl px-3 py-3 text-sm text-[#46534a] hover:bg-white"
                  >
                    {link.label}
                  </a>
                ),
              )}

              <a
                href="#demo"
                onClick={() =>
                  setOpen(false)
                }
                className="mt-1 rounded-xl bg-[#173a24] px-3 py-3 text-sm font-semibold text-white"
              >
                Buka Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function PackMock({
  stage,
}: {
  stage: FreshnessStage;
}) {
  return (
    <motion.div
      className="relative mx-auto aspect-[0.86] w-full max-w-[390px] overflow-hidden rounded-[34px] border border-white/70 bg-white/70 p-6 shadow-[0_30px_80px_rgba(31,58,39,.15)] backdrop-blur"
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
    >
      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-[#d7ded7] bg-[#fafbf8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.13em] text-[#4c5c50]">
        <span
          className="h-2 w-2 rounded-full"
          style={{
            background:
              stage.color,
          }}
        />

        live demo
      </div>

      <div className="mt-11 flex h-full flex-col justify-between rounded-[28px] border border-[#dce5dc] bg-gradient-to-b from-white to-[#eff5ef] p-5">
        <div>
          <div className="text-[10px] font-black tracking-[.2em] text-[#627168]">
            FRESHCOY / PAKCOY
          </div>

          <div className="mt-2 h-px bg-[#dce5dc]" />
        </div>

        <div className="relative flex items-center justify-center py-8">
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute left-1/2 top-1/2 h-[190px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#86b78f]/20 blur-2xl" />

            <div className="relative flex items-end gap-1.5">
              {[0, 1, 2, 3, 4].map(
                (leafIndex) => {
                  const rotation =
                    (leafIndex - 2) *
                    8;

                  return (
                    <div
                      key={leafIndex}
                      className="h-[118px] w-8 rounded-[60%_60%_45%_45%] bg-gradient-to-b from-[#8cbf83] to-[#3f7c46]"
                      style={{
                        transform: `rotate(${rotation}deg)`,
                      }}
                    >
                      <div className="mx-auto mt-3 h-20 w-[2px] bg-[#d6e7cf]/70" />
                    </div>
                  );
                },
              )}

              <div className="absolute bottom-0 left-1/2 h-24 w-3 -translate-x-1/2 rounded-full bg-[#e8c7a7]" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-2xl border border-[#d9e2da] bg-white/80 p-4">
            <div className="text-[10px] uppercase tracking-[.12em] text-[#66706a]">
              Indicator
            </div>

            <div className="mt-2 flex items-center gap-3">
              <motion.div
                animate={{
                  backgroundColor:
                    stage.color,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="h-7 w-7 shrink-0 rounded-full border-4 border-white shadow"
              />

              <div className="min-w-0">
                <div className="break-words text-sm font-bold">
                  {stage.label}
                </div>

                <div className="break-words text-xs text-[#66706a]">
                  {stage.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MiniStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative rounded-2xl border border-[#dde5dd] bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#cfd9d0] bg-[#f4f7f2] text-[10px] font-black text-[#526158]">
          {number}
        </span>

        <h3 className="text-sm font-black">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-xs leading-5 text-[#66706a]">
        {text}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function FreshcoyApp() {
  const [stageIndex, setStageIndex] =
    useState<number>(0);

  const [chem, setChem] =
    useState<number>(0);

  const stage =
    interactiveStages[stageIndex] ??
    interactiveStages[0];

  const chemistry: ChemistryItem[] =
    useMemo(
      () => [
        {
          name: "Flavylium",
          tone: "Ungu",
          text:
            "Bentuk kation yang dominan pada kondisi asam dan menjadi salah satu bentuk struktur yang berkontribusi terhadap warna merah atau ungu antosianin.",
        },
        {
          name: "Quinoidal",
          tone: "Hijau",
          text:
            "Perubahan kondisi dapat menyebabkan perpindahan proton dan perubahan kesetimbangan struktur. Pada konsep visual Freshcoy, tahap ini ditampilkan dengan warna hijau.",
        },
        {
          name: "Carbinol pseudobase",
          tone: "Kuning",
          text:
            "Hidrasi pada struktur antosianin dapat menghasilkan bentuk pseudobase yang memiliki warna lebih lemah dibandingkan bentuk berwarna sebelumnya. Pada konsep visual Freshcoy, tahap ini ditampilkan dengan warna kuning.",
        },
        {
          name: "Chalcone",
          tone: "Pink",
          text:
            "Kesetimbangan lanjutan dapat menuju bentuk chalcone. Warna yang terlihat dipengaruhi struktur molekul dan kondisi lingkungan. Pada konsep visual Freshcoy, tahap ini ditampilkan dengan warna pink.",
        },
      ],
      [],
    );

  const updateStage = (
    index: number,
  ) => {
    const safeIndex =
      Math.max(
        0,
        Math.min(
          index,
          interactiveStages.length -
            1,
        ),
      );

    setStageIndex(
      safeIndex,
    );
  };

  const next = async () => {
    try {
      const response =
        await fetch(
          "/api/freshness",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              stage: stageIndex,
            }),
          },
        );

      if (response.ok) {
        const payload: unknown =
          await response.json();

        if (
          typeof payload ===
            "object" &&
          payload !== null &&
          "stage" in payload
        ) {
          const serverStage =
            (
              payload as {
                stage?: unknown;
              }
            ).stage;

          if (
            typeof serverStage ===
              "number" &&
            Number.isInteger(
              serverStage,
            ) &&
            serverStage >= 0 &&
            serverStage <
              interactiveStages.length
          ) {
            setStageIndex(
              serverStage,
            );
            return;
          }
        }
      }
    } catch {
      // Fallback lokal jika API belum tersedia.
    }

    setStageIndex(
      (current) =>
        (current + 1) %
        interactiveStages.length,
    );
  };

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden"
    >
      <Nav />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                             */}
        {/* ---------------------------------------------------------------- */}

        <section className="noise relative overflow-hidden border-b border-[var(--line)] bg-[#f3f5ef]">
          <div className="absolute inset-0 grid-hairline opacity-60" />

          <div className="container-shell relative grid items-center gap-14 py-20 md:grid-cols-[1.02fr_.98fr] md:py-28">
            <FadeIn>
              <div className="max-w-xl">
                <div className="eyebrow">
                  Smart packaging / pakcoy
                </div>

                <h1 className="display mt-5 text-6xl font-black tracking-tight sm:text-7xl lg:text-[86px]">
                  Pantau perubahan.
                  <br />

                  <span className="text-[#6c43a4]">
                    Pahami warnanya.
                  </span>
                </h1>

                <p className="body-copy mt-7 max-w-lg text-base sm:text-lg">
                  Freshcoy Package menggunakan indikator alami berbasis
                  antosianin dari kol ungu untuk membantu melihat perubahan
                  kondisi pakcoy selama penyimpanan.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#status"
                    className="rounded-full bg-[#173a24] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                  >
                    Coba indikator

                    <ArrowRight
                      className="ml-2 inline"
                      size={16}
                    />
                  </a>

                  <a
                    href="#penelitian"
                    className="rounded-full border border-[#cad4cc] bg-white px-5 py-3.5 text-sm font-semibold text-[#27432f] transition hover:-translate-y-0.5"
                  >
                    Lihat penelitian
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-5 text-xs text-[#5f6b62]">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background:
                          interactiveIndicatorColors[0],
                      }}
                    />

                    masih bagus
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background:
                          interactiveIndicatorColors[1],
                      }}
                    />

                    kurang segar
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background:
                          interactiveIndicatorColors[2],
                      }}
                    />

                    tidak segar
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background:
                          interactiveIndicatorColors[3],
                      }}
                    />

                    busuk
                  </span>
                </div>
              </div>
            </FadeIn>

            <PackMock stage={stage} />
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* STATUS                                                           */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="status"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="eyebrow">
                Interactive indicator
              </div>

              <div className="mt-3 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
                <div>
                  <h2 className="display text-4xl font-black sm:text-5xl">
                    Coba sendiri perubahan indikatornya.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Simulasi ini dipakai untuk menjelaskan konsep Freshcoy.
                    Warna indikator bukan penentu tunggal keamanan pangan.
                  </p>
                </div>

                <div className="flex items-end justify-start gap-4 lg:justify-end">
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-full bg-[#173a24] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  >
                    Next stage

                    <ArrowRight
                      className="ml-2 inline"
                      size={16}
                    />
                  </button>

                  <div className="text-xs font-semibold text-[#69746d]">
                    {stageIndex + 1} /{" "}
                    {interactiveStages.length}
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="mt-12 overflow-hidden rounded-[32px] border border-[#dde5dd] bg-[#f7f8f3]">
              <div className="grid lg:grid-cols-[.9fr_1.1fr]">
                <div
                  className="grid min-h-[420px] place-items-center p-10"
                  style={{
                    background: `radial-gradient(circle at 50% 45%, ${stage.color}20, transparent 42%), #f4f6f0`,
                  }}
                >
                  <motion.div
                    key={stage.id}
                    initial={{
                      scale: 0.8,
                      opacity: 0.2,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      ease,
                    }}
                    className="relative grid place-items-center"
                  >
                    <div
                      className="absolute h-64 w-64 rounded-full blur-3xl"
                      style={{
                        background:
                          stage.color,
                        opacity: 0.14,
                      }}
                    />

                    <div
                      className="relative h-40 w-40 rounded-full border-[18px] border-white shadow-[0_18px_60px_rgba(20,40,28,.16)]"
                      style={{
                        background:
                          stage.color,
                      }}
                    />

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-56 w-56 rounded-full border border-dashed border-[#c3cbc4]"
                    />

                    <div className="absolute -bottom-12 whitespace-nowrap rounded-full border border-[#d3dbd3] bg-white px-4 py-2 text-xs font-bold shadow-sm">
                      {stage.label} •{" "}
                      {stage.title}
                    </div>
                  </motion.div>
                </div>

                <div className="min-w-0 overflow-hidden border-t border-[#dde5dd] bg-white p-7 sm:p-9 lg:flex lg:min-h-[500px] lg:flex-col lg:justify-between lg:border-l lg:border-t-0 lg:p-12">
                  <div className="min-w-0">
                    <div className="text-xs font-black uppercase tracking-[.15em] text-[#68736b]">
                      Status saat ini
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={stage.id}
                        initial={{
                          opacity: 0,
                          x: 18,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -18,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="min-w-0"
                      >
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <span
                            className="h-4 w-4 shrink-0 rounded-full"
                            style={{
                              background:
                                stage.color,
                            }}
                          />

                          <h3 className="break-words text-2xl font-black tracking-tight sm:text-3xl">
                            {stage.title}
                          </h3>
                        </div>

                        <div className="mt-3 text-xs font-bold uppercase tracking-[.12em] text-[#7a857d]">
                          Indikator{" "}
                          {stage.label}
                        </div>

                        <p className="body-copy mt-4 max-w-xl break-words text-sm leading-6 sm:text-base">
                          {stage.description}
                        </p>

                        <div className="mt-8 rounded-2xl border border-[#e0e6e0] bg-[#f8faf7] p-5 sm:p-6">
                          <div className="text-[11px] font-black uppercase tracking-[.12em] text-[#637067]">
                            Yang sebaiknya dilakukan
                          </div>

                          <p className="mt-2 break-words text-sm leading-6 text-[#38483e]">
                            {stage.action}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="mt-9 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                    {interactiveStages.map(
                      (
                        item,
                        index,
                      ) => (
                        <button
                          type="button"
                          key={item.id}
                          aria-label={`Pilih ${item.label}`}
                          onClick={() =>
                            updateStage(
                              index,
                            )
                          }
                          className={`min-h-10 rounded-full border px-3 py-2 text-xs font-bold transition sm:px-4 ${
                            index ===
                            stageIndex
                              ? "border-[#173a24] bg-[#173a24] text-white"
                              : "border-[#d7e0d7] bg-white text-[#58645b] hover:border-[#aab8ad]"
                          }`}
                        >
                          <span className="inline-flex items-center gap-2">
                            <span
                              className="h-2.5 w-2.5 shrink-0 rounded-full"
                              style={{
                                background:
                                  item.color,
                              }}
                            />

                            {item.label}
                          </span>
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <FadeIn delay={0.08}>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {interactiveStages.map(
                  (
                    item,
                    index,
                  ) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() =>
                        updateStage(
                          index,
                        )
                      }
                      className="rounded-2xl border border-[#dde5dd] bg-[#f7f8f3] p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-3 w-3 shrink-0 rounded-full"
                          style={{
                            background:
                              item.color,
                          }}
                        />

                        <span className="text-xs font-black">
                          {item.label}
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-5 text-[#66706a]">
                        {item.title}
                      </p>
                    </button>
                  ),
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CARA KERJA                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="cara-kerja"
          className="scroll-mt-24 bg-[#eef2ea] py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                <div>
                  <div className="eyebrow">
                    Cara kerja
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Satu alur dari kemasan sampai pengamatan.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Freshcoy menggabungkan kemasan, indikator alami,
                    pengamatan fisik, dan pencatatan perubahan tanpa membuat
                    pengguna harus mempelajari sistem yang rumit.
                  </p>
                </div>

                <div className="relative border-l border-[#cbd5cc] pl-7">
                  {processSteps.map(
                    (
                      step,
                      index,
                    ) => {
                      const Icon =
                        step.icon;

                      return (
                        <FadeIn
                          key={step.number}
                          delay={
                            index *
                            0.08
                          }
                          className="relative pb-12 last:pb-0"
                        >
                          <span className="absolute -left-[43px] grid h-8 w-8 place-items-center rounded-full border border-[#c7d0c7] bg-[#eef2ea] text-[10px] font-black text-[#526158]">
                            {step.number}
                          </span>

                          <div className="flex gap-4">
                            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[#275738] shadow-sm">
                              <Icon size={18} />
                            </div>

                            <div>
                              <h3 className="font-bold">
                                {step.title}
                              </h3>

                              <p className="body-copy mt-1 text-sm">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        </FadeIn>
                      );
                    },
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* KIMIA                                                            */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="kimia"
          className="scroll-mt-24 overflow-hidden bg-[#132019] py-24 text-white"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[.16em] text-[#98bf9e]">
                    Bagian sains / antosianin
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Kenapa satu indikator bisa punya beberapa warna?
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#b5c3b8]">
                    Perubahan warna antosianin berkaitan dengan perubahan
                    bentuk struktur molekul yang dapat dipengaruhi oleh kondisi
                    lingkungan dan kesetimbangan antar bentuknya.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {chemistry.map(
                    (
                      item,
                      index,
                    ) => (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() =>
                          setChem(
                            index,
                          )
                        }
                        className={`rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                          index ===
                          chem
                            ? "border-white bg-white text-[#17301f]"
                            : "border-white/15 bg-white/[.03] text-white/70 hover:bg-white/10"
                        }`}
                      >
                        <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: chemistryColors[index] }} />
                        {item.name}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>

            <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[.04] p-6">
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                  <FlaskConical size={18} />
                </div>

                <div>
                  <h3 className="font-black">
                    Kenapa kol ungu?
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#b9c6bc]">
                    Kol ungu mengandung antosianin, yaitu pigmen alami yang
                    dapat mengalami perubahan bentuk pada kondisi tertentu
                    sehingga warna yang terlihat juga dapat berubah. Sifat
                    inilah yang dimanfaatkan dalam konsep indikator Freshcoy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10 md:grid-cols-[1.02fr_.98fr]">
              <div className="min-h-[430px] bg-[#0d1812] p-8 sm:p-12">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[.16em] text-[#839489]">
                  <span>
                    Structural map
                  </span>

                  <span>
                    04 states
                  </span>
                </div>

                <div className="relative mt-10 h-[310px]">
                  <div className="absolute left-[7%] right-[7%] top-1/2 h-px bg-white/10" />

                  <div className="absolute left-[10%] top-[18%] bottom-[14%] border-l border-dashed border-white/10" />

                  <div className="absolute left-[35%] top-[12%] bottom-[8%] border-l border-dashed border-white/10" />

                  <div className="absolute left-[60%] top-[18%] bottom-[14%] border-l border-dashed border-white/10" />

                  <div className="absolute right-[10%] top-[12%] bottom-[8%] border-l border-dashed border-white/10" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={
                        chem
                      }
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15"
                      style={{
                        boxShadow: `0 0 0 24px ${chemistryColors[chem]}20`,
                      }}
                    >
                      <div
                        className="h-20 w-20 rotate-12 rounded-[35%] border-2 border-white/60"
                        style={{
                          background:
                            chemistryColors[
                              chem
                            ],
                        }}
                      />

                      <div className="absolute translate-y-[76px] text-[10px] font-black uppercase tracking-[.12em]">
                        {
                          chemistry[
                            chem
                          ].name
                        }
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-[9%] text-[10px] font-bold text-white/40">
                    lebih asam
                  </div>

                  <div className="absolute bottom-0 right-[8%] text-[10px] font-bold text-white/40">
                    kondisi berubah
                  </div>
                </div>
              </div>

              <div className="bg-[#17231b] p-8 sm:p-12">
                <div className="text-[11px] font-black uppercase tracking-[.16em] text-[#839489]">
                  Yang perlu dipahami
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={chem}
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -14,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div
                      className="mt-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em]"
                      style={{
                        background: `${chemistryColors[chem]}33`,
                        color: "#e8f1e8",
                      }}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background:
                            chemistryColors[
                              chem
                            ],
                        }}
                      />

                      {chemistry[chem].tone}
                    </div>

                    <h3 className="mt-4 text-3xl font-black">
                      {chemistry[chem].name}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#b9c6bc]">
                      {chemistry[chem].text}
                    </p>

                    <div className="mt-8 border-t border-white/10 pt-7">
                      <p className="text-xs leading-6 text-[#95a69a]">
                        Catatan: perubahan warna antosianin dipengaruhi oleh
                        kondisi lingkungan dan perubahan struktur molekul.
                        Hubungan warna dengan kondisi produk tetap perlu
                        dibuktikan melalui hasil penelitian dan kalibrasi.
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PANDUAN                                                          */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="panduan"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <div className="eyebrow">
                    Panduan penggunaan
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Jangan hanya melihat warna.
                  </h2>
                </div>

                <p className="body-copy max-w-md text-sm">
                  Informasi indikator digunakan bersama pengamatan kondisi fisik
                  pakcoy.
                </p>
              </div>
            </FadeIn>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <MiniStep
                number="01"
                title="Lihat"
                text="Perhatikan warna indikator pada Freshcoy Package."
              />

              <MiniStep
                number="02"
                title="Bandingkan"
                text="Cocokkan warna indikator dengan skala yang tersedia."
              />

              <MiniStep
                number="03"
                title="Periksa"
                text="Lihat warna daun, kesegaran, tekstur, batang, dan kerusakan yang terlihat."
              />

              <MiniStep
                number="04"
                title="Tentukan tindakan"
                text="Gunakan informasi indikator bersama kondisi fisik pakcoy."
              />
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {guideCards.map(
                (
                  card,
                  index,
                ) => {
                  const Icon =
                    card.icon;

                  return (
                    <FadeIn
                      key={card.title}
                      delay={
                        index *
                        0.08
                      }
                    >
                      <div className="rounded-[28px] border border-[#dde5dd] bg-[#f7f8f3] p-7 sm:p-8">
                        <div className="flex items-center gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#2d6a3f] shadow-sm">
                            <Icon size={18} />
                          </div>

                          <h3 className="text-xl font-black">
                            {card.title}
                          </h3>
                        </div>

                        <ul className="mt-7 grid gap-3">
                          {card.items.map(
                            (item) => (
                              <li
                                key={
                                  item
                                }
                                className="flex gap-3 text-sm text-[#536158]"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8fb596]" />

                                {item}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </FadeIn>
                  );
                },
              )}
            </div>

            <div className="mt-5 rounded-[28px] border border-[#eadcae] bg-[#fbf7e8] p-6 text-sm leading-6 text-[#665a2f]">
              <strong>
                Catatan penting:
              </strong>{" "}
              warna indikator hanya alat bantu. Jangan menentukan kelayakan
              konsumsi hanya berdasarkan indikator.
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PENYIMPANAN                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="bg-[#f3f5ef] py-24">
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
                <div>
                  <div className="eyebrow">
                    Penyimpanan
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Perubahan tidak selalu berarti harus langsung dibuang.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Kondisi awal, suhu, kelembapan, jenis kemasan, dan lama
                    penyimpanan dapat memengaruhi perubahan pakcoy.
                  </p>
                </div>

                <div className="space-y-3">
                  {storageSteps.map(
                    (
                      step,
                      index,
                    ) => (
                      <FadeIn
                        key={step.number}
                        delay={
                          index *
                          0.05
                        }
                      >
                        <div className="group flex gap-5 rounded-2xl border border-[#dfe6df] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(33,56,40,.08)]">
                          <div className="text-xs font-black text-[#94a095]">
                            {step.number}
                          </div>

                          <div>
                            <h3 className="font-bold">
                              {step.title}
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-[#66706a]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PERLAKUAN                                                        */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="perlakuan"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
                <div>
                  <div className="eyebrow">
                    Perlakuan penelitian
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Apa yang dilakukan pada pakcoy selama penelitian?
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Bagian ini menjelaskan perlakuan yang diberikan kepada
                    sampel agar pengunjung memahami bagaimana perubahan
                    indikator dibandingkan dengan kondisi sayur.
                  </p>

                  <div className="mt-6 rounded-2xl border border-[#eadcae] bg-[#fbf7e8] p-5 text-xs leading-6 text-[#665a2f]">
                    <strong>
                      Penting:
                    </strong>{" "}
                    rincian suhu, kelembapan, jumlah sampel, dan lama pengamatan
                    harus disesuaikan dengan metode penelitian yang benar-benar
                    dilakukan oleh tim.
                  </div>
                </div>

                <div className="relative border-l border-[#cbd5cc] pl-7">
                  {treatmentSteps.map(
                    (
                      step,
                      index,
                    ) => (
                      <FadeIn
                        key={step.number}
                        delay={
                          index *
                          0.06
                        }
                        className="relative pb-10 last:pb-0"
                      >
                        <span className="absolute -left-[43px] grid h-8 w-8 place-items-center rounded-full border border-[#c7d0c7] bg-white text-[10px] font-black text-[#526158]">
                          {step.number}
                        </span>

                        <div className="rounded-[22px] border border-[#dde5dd] bg-[#f7f8f3] p-6">
                          <h3 className="font-black">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#66706a]">
                            {step.description}
                          </p>
                        </div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PERUBAHAN                                                        */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="perubahan"
          className="scroll-mt-24 bg-[#f3f5ef] py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
                <div>
                  <div className="eyebrow">
                    Perubahan selama penyimpanan
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Hubungkan perubahan warna dengan kondisi pakcoy.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Selama penyimpanan, pakcoy tetap melakukan proses
                    metabolisme. Respirasi, perubahan senyawa, kehilangan air,
                    dan perubahan kondisi di dalam kemasan dapat memengaruhi
                    kualitas sayur serta lingkungan tempat indikator berada.
                  </p>
                </div>

                <div className="relative border-l border-[#cbd5cc] pl-7">
                  {timelineItems.map(
                    (
                      item,
                      index,
                    ) => (
                      <FadeIn
                        key={item.time}
                        delay={
                          index *
                          0.08
                        }
                        className="relative pb-10 last:pb-0"
                      >
                        <span className="absolute -left-[43px] grid h-8 w-8 place-items-center rounded-full border border-[#c7d0c7] bg-[#f3f5ef]">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              background:
                                item.color,
                            }}
                          />
                        </span>

                        <div className="rounded-[22px] border border-[#dce4dc] bg-white p-6">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="text-xs font-black uppercase tracking-[.12em] text-[#647067]">
                              {item.time}
                            </span>

                            <span
                              className="rounded-full px-3 py-1 text-[10px] font-bold"
                              style={{
                                background: `${item.color}18`,
                                color: item.color,
                              }}
                            >
                              {item.title}
                            </span>
                          </div>

                          <p className="mt-3 text-sm leading-6 text-[#66706a]">
                            {item.text}
                          </p>
                        </div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-[#dce5dc] bg-white p-6">
                  <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#7a857d]">
                    Perubahan fisiologis
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#25372b]">
                    Respirasi dan kehilangan air
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66706a]">
                    Setelah dipanen, pakcoy tetap melakukan respirasi. Proses
                    ini disertai penggunaan cadangan makanan dan kehilangan
                    air yang dapat memengaruhi kesegaran serta tekstur.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#dce5dc] bg-white p-6">
                  <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#7a857d]">
                    Perubahan kimiawi
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#25372b]">
                    Kondisi lingkungan di dalam kemasan berubah
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66706a]">
                    Metabolisme dan perubahan kondisi penyimpanan dapat
                    mengubah lingkungan mikro di dalam kemasan. Perubahan ini
                    dapat berkaitan dengan respons indikator antosianin.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#dce5dc] bg-white p-6">
                  <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#7a857d]">
                    Respons indikator
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#25372b]">
                    Struktur antosianin mengalami perubahan
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66706a]">
                    Perubahan kondisi seperti pH dapat memengaruhi kesetimbangan
                    bentuk antosianin sehingga warna indikator dapat bergeser.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="mt-8 rounded-2xl border border-[#dde5dd] bg-white p-5 text-xs leading-6 text-[#66706a]">
              Perubahan warna indikator tidak boleh dipahami sebagai hubungan
              satu banding satu dengan tingkat kesegaran. Hubungan tersebut
              perlu didukung data penelitian dan kalibrasi yang sesuai.
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PENELITIAN                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="penelitian"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
                <div>
                  <div className="eyebrow">
                    Penelitian Freshcoy
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Dari bahan alami hingga konsep smart packaging.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Bagian ini menjelaskan alur penelitian dengan bahasa
                    sederhana agar mudah diikuti oleh pengunjung umum dan juri.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {researchSteps.map(
                    (
                      step,
                      index,
                    ) => (
                      <FadeIn
                        key={step.number}
                        delay={
                          index *
                          0.04
                        }
                      >
                        <div className="rounded-[22px] border border-[#dde5dd] bg-[#f7f8f3] p-5">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-[10px] font-black tracking-[.14em] text-[#8a948d]">
                              {step.number}
                            </span>

                            <FlaskConical
                              size={17}
                              className="text-[#315f3f]"
                            />
                          </div>

                          <h3 className="mt-7 text-base font-black">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-xs leading-6 text-[#66706a]">
                            {step.text}
                          </p>
                        </div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* HASIL PENGAMATAN                                                 */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="pengamatan"
          className="scroll-mt-24 bg-[#eef2ea] py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <div className="eyebrow">
                    Hasil pengamatan
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Perubahan yang teramati selama penyimpanan.
                  </h2>
                </div>

                <p className="body-copy max-w-md text-sm">
                  Tabel berikut merangkum hasil pengamatan indikator warna dan
                  kondisi fisik pakcoy selama proses penyimpanan.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-10 overflow-hidden rounded-[26px] border border-[#d8e1d8] bg-white shadow-[0_18px_50px_rgba(33,56,40,.05)]">
                <div className="overflow-x-auto">
                  <table className="min-w-[760px] w-full border-collapse text-left">
                    <thead className="bg-[#f7f8f3] text-[10px] font-black uppercase tracking-[.12em] text-[#707b73]">
                      <tr>
                        <th className="border-b border-[#e4e9e3] px-5 py-4">
                          Waktu pengamatan
                        </th>

                        <th className="border-b border-[#e4e9e3] px-5 py-4">
                          Warna indikator
                        </th>

                        <th className="border-b border-[#e4e9e3] px-5 py-4">
                          Kondisi pakcoy
                        </th>

                        <th className="border-b border-[#e4e9e3] px-5 py-4">
                          Catatan
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#e4e9e3] text-sm text-[#59655c]">
                      {observationRows.map(
                        (
                          row,
                          index,
                        ) => (
                          <motion.tr
                            key={
                              row.day
                            }
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.2,
                            }}
                            transition={{
                              duration: 0.4,
                              delay:
                                index *
                                0.06,
                              ease,
                            }}
                            className="transition hover:bg-[#fbfcf9]"
                          >
                            <td className="px-5 py-5 align-top">
                              <div className="flex items-center gap-3">
                                <span
                                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                                  style={{
                                    background:
                                      observationIndicatorColors[
                                        index
                                      ] ??
                                      "#94a095",
                                  }}
                                />

                                <span className="font-black text-[#25372b]">
                                  {row.day}
                                </span>
                              </div>
                            </td>

                            <td className="px-5 py-5 align-top">
                              <span
                                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold"
                                style={{
                                  background:
                                    `${observationIndicatorColors[index] ?? "#94a095"}18`,
                                  color:
                                    observationIndicatorColors[
                                      index
                                    ] ??
                                    "#526158",
                                }}
                              >
                                <span
                                  className="h-2.5 w-2.5 rounded-full"
                                  style={{
                                    background:
                                      observationIndicatorColors[
                                        index
                                      ] ??
                                      "#94a095",
                                  }}
                                />

                                {row.color}
                              </span>
                            </td>

                            <td className="max-w-[320px] px-5 py-5 align-top leading-6">
                              {row.condition}
                            </td>

                            <td className="max-w-[280px] px-5 py-5 align-top leading-6 text-[#6b766e]">
                              {row.note}
                            </td>
                          </motion.tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-[#e4e9e3] bg-[#fbfcf9] p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6c43a4]" />

                    <p className="text-xs leading-6 text-[#66706a]">
                      Hasil pengamatan menunjukkan adanya perubahan warna
                      indikator yang diamati bersamaan dengan perubahan kondisi
                      fisik pakcoy selama penyimpanan. Data ini digunakan sebagai
                      bahan pengamatan dan bukan sebagai satu-satunya dasar untuk
                      menentukan keamanan pangan.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-[24px] border border-[#dce5dc] bg-white p-6">
                  <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#7a857d]">
                    Hari awal
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#25372b]">
                    Kondisi awal relatif baik
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66706a]">
                    Pakcoy masih tampak segar dan indikator berada pada warna
                    ungu.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#dce5dc] bg-white p-6">
                  <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#7a857d]">
                    Perubahan
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#25372b]">
                    Kondisi fisik mulai berubah
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66706a]">
                    Pada hari ke-2 dan ke-3, perubahan fisik mulai terlihat
                    sementara indikator masih berwarna ungu.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#dce5dc] bg-white p-6">
                  <div className="text-[10px] font-black uppercase tracking-[.14em] text-[#7a857d]">
                    Hari terakhir
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#25372b]">
                    Indikator berubah menjadi kuning
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66706a]">
                    Pada hari ke-4, indikator berubah dari ungu menjadi kuning
                    saat kondisi fisik pakcoy semakin menurun.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-6 rounded-[24px] border border-[#eadcae] bg-[#fbf7e8] p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#806f32] shadow-sm">
                    <ClipboardList size={18} />
                  </div>

                  <div>
                    <h3 className="font-black text-[#665a2f]">
                      Interpretasi hasil
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6f6338]">
                      Pada pengamatan, indikator belum menunjukkan perubahan warna
                      yang jelas pada hari ke-1 sampai hari ke-3. Perubahan
                      indikator terlihat pada hari ke-4 ketika kondisi pakcoy
                      semakin menurun. Hal ini menunjukkan bahwa waktu pemasangan
                      indikator juga perlu diperhatikan dalam proses penelitian.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* APA YANG DIAMATI                                                 */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="apa-diamati"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
                <div>
                  <div className="eyebrow">
                    Apa yang diamati?
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Tiga informasi, satu pengamatan.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Freshcoy tidak membaca warna secara terpisah. Indikator,
                    kondisi fisik, dan kondisi penyimpanan dipakai bersama untuk
                    memahami perubahan selama penyimpanan.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {(
                    [
                      {
                        title:
                          "Indikator warna",
                        text:
                          "Perubahan warna pada indikator Freshcoy.",
                        icon: FlaskConical,
                      },
                      {
                        title:
                          "Kondisi fisik",
                        text:
                          "Warna daun, kesegaran, tekstur, batang, dan kerusakan yang terlihat.",
                        icon: Sprout,
                      },
                      {
                        title:
                          "Kondisi penyimpanan",
                        text:
                          "Kondisi awal, suhu, kelembapan, jenis kemasan, dan lama penyimpanan.",
                        icon: ClipboardList,
                      },
                    ] satisfies InfoCard[]
                  ).map(
                    (
                      card,
                      index,
                    ) => {
                      const Icon =
                        card.icon;

                      return (
                        <FadeIn
                          key={
                            card.title
                          }
                          delay={
                            index *
                            0.07
                          }
                        >
                          <div className="rounded-[24px] border border-[#dde5dd] bg-[#f7f8f3] p-6">
                            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#315f3f] shadow-sm">
                              <Icon size={18} />
                            </div>

                            <h3 className="mt-7 font-black">
                              {
                                card.title
                              }
                            </h3>

                            <p className="mt-2 text-xs leading-6 text-[#66706a]">
                              {
                                card.text
                              }
                            </p>
                          </div>
                        </FadeIn>
                      );
                    },
                  )}
                </div>
              </div>
            </FadeIn>

            <div className="mt-6 rounded-2xl border border-[#eadcae] bg-[#fbf7e8] p-5 text-sm leading-6 text-[#665a2f]">
              <strong>
                Ingat:
              </strong>{" "}
              indikator bukan satu-satunya penentu kualitas atau keamanan pangan.
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* KOMPONEN                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="komponen"
          className="scroll-mt-24 bg-[#f3f5ef] py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="eyebrow">
                Komponen Freshcoy
              </div>

              <h2 className="display mt-3 max-w-3xl text-4xl font-black sm:text-5xl">
                Empat bagian yang bekerja sebagai satu konsep.
              </h2>
            </FadeIn>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {projectComponents.map(
                (
                  component,
                  index,
                ) => {
                  const Icon =
                    component.icon;

                  return (
                    <FadeIn
                      key={
                        component.title
                      }
                      delay={
                        index *
                        0.07
                      }
                    >
                      <div className="flex gap-4 rounded-[22px] border border-[#dfe6df] bg-white p-6">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eef4ed] text-[#2b613c]">
                          <Icon size={19} />
                        </div>

                        <div>
                          <h3 className="font-black">
                            {
                              component.title
                            }
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-[#66706a]">
                            {
                              component.text
                            }
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                },
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* MENGAPA FRESHCOY                                                 */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="mengapa"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
                <div>
                  <div className="eyebrow">
                    Mengapa Freshcoy?
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Sains yang dekat dengan kebutuhan sehari-hari.
                  </h2>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {whyCards.map(
                    (
                      card,
                      index,
                    ) => {
                      const Icon =
                        card.icon;

                      return (
                        <FadeIn
                          key={
                            card.title
                          }
                          delay={
                            index *
                            0.07
                          }
                        >
                          <div className="rounded-[24px] border border-[#dde5dd] bg-[#f7f8f3] p-6">
                            <Icon
                              size={19}
                              className="text-[#315f3f]"
                            />

                            <h3 className="mt-8 font-black">
                              {
                                card.title
                              }
                            </h3>

                            <p className="mt-2 text-xs leading-6 text-[#66706a]">
                              {
                                card.text
                              }
                            </p>
                          </div>
                        </FadeIn>
                      );
                    },
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* FOOD WASTE                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="food-waste"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
                <div>
                  <div className="eyebrow">
                    Food waste
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Sebelum dibuang,
                    <br />
                    coba periksa.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Pakcoy yang masih layak dapat diprioritaskan untuk segera
                    diolah. Yang sudah tidak dapat digunakan perlu dipilah
                    sebagai limbah sesuai aturan lingkungan.
                  </p>

                  <div className="mt-8 rounded-[22px] border border-[#dde5dd] bg-[#f7f8f3] p-5">
                    <div className="text-[11px] font-black uppercase tracking-[.14em] text-[#6f7a72]">
                      Prinsip Freshcoy
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#536158]">
                      Indikator digunakan sebagai alat bantu pemantauan.
                      Keputusan tetap perlu mempertimbangkan kondisi fisik
                      pakcoy dan konteks penyimpanannya.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {foodWasteCards.map(
                    (
                      card,
                      index,
                    ) => (
                      <FadeIn
                        key={
                          card.title
                        }
                        delay={
                          index *
                          0.08
                        }
                      >
                        <div
                          className={`min-h-[190px] rounded-[26px] p-6 ${card.className}`}
                        >
                          <Recycle size={20} />

                          <h3 className="mt-12 font-black">
                            {
                              card.title
                            }
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#5c665e]">
                            {
                              card.description
                            }
                          </p>
                        </div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="mt-16 border-t border-[#dde5dd] pt-12">
                <div className="eyebrow">
                  Saran pemanfaatan
                </div>

                <div className="mt-3 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
                  <div>
                    <h3 className="display text-3xl font-black sm:text-4xl">
                      Prioritaskan pemanfaatan pakcoy.
                    </h3>

                    <p className="body-copy mt-4 max-w-lg text-sm">
                      Jika pakcoy masih layak digunakan setelah pemeriksaan
                      yang sesuai, prioritaskan untuk segera diolah agar tidak
                      terbuang sia-sia.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#eadcae] bg-[#fbf7e8] p-5 text-xs leading-6 text-[#665a2f]">
                    <strong>
                      Perhatian:
                    </strong>{" "}
                    warna indikator tidak digunakan sebagai satu-satunya dasar
                    untuk menentukan kelayakan konsumsi.
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[26px] border border-[#dce7dc] bg-[#f3f8f2] p-6">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-[#6c43a4]" />

                      <h4 className="text-base font-black">
                        Kondisi masih baik
                      </h4>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#5f6b62]">
                      Pakcoy dapat digunakan untuk berbagai olahan, seperti:
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-[#4f5d53]">
                      <li>
                        • Salad pakcoy
                      </li>

                      <li>
                        • Pakcoy kuah bening
                      </li>

                      <li>
                        • Pakcoy with dressing lemon
                      </li>

                      <li>
                        • Capcay
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-[26px] border border-[#eadfb9] bg-[#fbf7e8] p-6">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-[#c1a044]" />

                      <h4 className="text-base font-black">
                        Mulai kurang segar tetapi masih layak
                      </h4>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#5f6b62]">
                      Prioritaskan untuk segera diolah, misalnya menjadi:
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-[#4f5d53]">
                      <li>
                        • Nasi goreng pakcoy
                      </li>

                      <li>
                        • Sup pakcoy
                      </li>

                      <li>
                        • Keripik pakcoy
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-[26px] border border-[#ead9d2] bg-[#faf2ee] p-6">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-[#dc6b8a]" />

                      <h4 className="text-base font-black">
                        Kondisi mengalami perubahan signifikan
                      </h4>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#5f6b62]">
                      Lakukan pemeriksaan lebih lanjut dan jangan menentukan
                      kelayakan konsumsi hanya berdasarkan indikator kemasan.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* DEMO                                                             */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="demo"
          className="scroll-mt-24 bg-[#173a24] py-24 text-white"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[.16em] text-[#b7d5ba]">
                    Demo untuk juri
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Coba konsep Freshcoy dalam satu alur.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#c1d0c3]">
                    Tekan tombol di bawah untuk mengubah tahap indikator.
                    Mockup kemasan dan status di halaman ikut berubah.
                  </p>

                  <button
                    type="button"
                    onClick={next}
                    className="mt-8 rounded-full bg-white px-5 py-3.5 text-sm font-black text-[#173a24] transition hover:-translate-y-0.5"
                  >
                    Ubah tahap indikator

                    <Sparkles
                      className="ml-2 inline"
                      size={15}
                    />
                  </button>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[.06] p-6 sm:p-8">
                  <div className="grid gap-3 sm:grid-cols-4">
                    {interactiveStages.map(
                      (
                        item,
                        index,
                      ) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() =>
                            updateStage(
                              index,
                            )
                          }
                          className={`rounded-2xl border p-4 text-left transition ${
                            index ===
                            stageIndex
                              ? "border-white bg-white/10"
                              : "border-white/10 bg-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="h-3 w-3 rounded-full"
                              style={{
                                background:
                                  item.color,
                              }}
                            />

                            <span className="text-xs font-bold">
                              {
                                item.label
                              }
                            </span>
                          </div>

                          <p className="mt-3 text-xs leading-5 text-[#bdcabe]">
                            {
                              item.title
                            }
                          </p>
                        </button>
                      ),
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0f2a19] p-5">
                    <ShieldCheck
                      size={18}
                      className="text-[#b7d5ba]"
                    />

                    <p className="text-xs leading-5 text-[#c2d0c4]">
                      Demo ini bersifat simulasi untuk membantu menjelaskan
                      konsep indikator dan bukan pengganti pemeriksaan mutu
                      pangan secara menyeluruh.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* KESIMPULAN                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="kesimpulan"
          className="scroll-mt-24 bg-[#eef2ea] py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
                <div>
                  <div className="eyebrow">
                    Kesimpulan
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Kesimpulan penelitian.
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Setiap poin kesimpulan disusun untuk menjawab tujuan
                    penelitian secara langsung.
                  </p>
                </div>

                <div className="space-y-3">
                  {conclusions.map(
                    (
                      text,
                      index,
                    ) => (
                      <FadeIn
                        key={text}
                        delay={
                          index *
                          0.06
                        }
                      >
                        <div className="flex gap-4 rounded-[22px] border border-[#dce5dc] bg-white p-6">
                          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#173a24] text-xs font-black text-white">
                            {String(
                              index +
                                1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </div>

                          <p className="text-sm leading-7 text-[#536158]">
                            {text}
                          </p>
                        </div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-12 border-t border-[#d9e2da] pt-10">
                <div className="eyebrow">
                  Tujuan penelitian
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {researchGoals.map(
                    (
                      goal,
                    ) => (
                      <div
                        key={
                          goal.number
                        }
                        className="rounded-[22px] border border-[#dce5dc] bg-white p-6"
                      >
                        <div className="text-[10px] font-black tracking-[.14em] text-[#8a948d]">
                          TUJUAN{" "}
                          {
                            goal.number
                          }
                        </div>

                        <p className="mt-4 text-sm leading-6 text-[#66706a]">
                          {
                            goal.text
                          }
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* SARAN                                                            */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="saran"
          className="scroll-mt-24 bg-white py-24"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
                <div>
                  <div className="eyebrow">
                    Saran penelitian
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Apa yang masih perlu dilakukan?
                  </h2>

                  <p className="body-copy mt-5 max-w-md">
                    Saran berikut berfokus pada keterbatasan dan bagian yang
                    belum dilakukan dalam penelitian.
                  </p>
                </div>

                <div className="grid gap-3">
                  {suggestions.map(
                    (
                      suggestion,
                      index,
                    ) => (
                      <FadeIn
                        key={
                          suggestion
                        }
                        delay={
                          index *
                          0.06
                        }
                      >
                        <div className="flex gap-4 rounded-[22px] border border-[#dde5dd] bg-[#f7f8f3] p-6">
                          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#cfd9d0] bg-white text-xs font-black text-[#526158]">
                            {String(
                              index +
                                1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </div>

                          <p className="text-sm leading-7 text-[#59655c]">
                            {
                              suggestion
                            }
                          </p>
                        </div>
                      </FadeIn>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#eadcae] bg-[#fbf7e8] p-5 text-xs leading-6 text-[#665a2f]">
                <strong>
                  Catatan:
                </strong>{" "}
                saran disusun berdasarkan bagian penelitian yang masih perlu
                diperkuat atau dikembangkan lebih lanjut.
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* TENTANG PROYEK                                                   */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="tentang-proyek"
          className="scroll-mt-24 bg-[#132019] py-24 text-white"
        >
          <div className="container-shell">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[.16em] text-[#98bf9e]">
                    Tentang proyek
                  </div>

                  <h2 className="display mt-3 text-4xl font-black sm:text-5xl">
                    Freshcoy Package.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#b9c6bc]">
                    Smart Packaging untuk Memantau Perubahan Kondisi Pakcoy.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    [
                      "Dikembangkan oleh",
                      "Bhatatas Team",
                    ],
                    [
                      "Sekolah / Institusi",
                      "SMAN 2 Taruna Bhayangkara Jawa Timur",
                    ],
                    [
                      "Tahun",
                      "2026",
                    ],
                    [
                      "Bidang",
                      "IPA",
                    ],
                  ].map(
                    (
                      [
                        label,
                        value,
                      ],
                    ) => (
                      <div
                        key={label}
                        className="rounded-[22px] border border-white/10 bg-white/[.05] p-5"
                      >
                        <div className="text-[10px] font-black uppercase tracking-[.13em] text-[#8ea092]">
                          {label}
                        </div>

                        <div className="mt-3 text-sm font-bold leading-6 text-[#eef3ed]">
                          {value}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>

            <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[.16em] text-[#8ea092]">
                  Referensi ilmiah
                </div>

                <p className="mt-3 text-xs leading-6 text-[#9eaea1]">
                  Referensi berikut berasal dari sumber ilmiah eksternal dan
                  digunakan sebagai dasar pembahasan antosianin, indikator
                  warna, serta smart packaging.
                </p>
              </div>

              <div className="grid gap-2">
                {references.map(
                  (reference) => (
                    <div
                      key={
                        reference.title
                      }
                      className="rounded-xl border border-white/10 px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <BookOpen
                          size={14}
                          className="mt-1 shrink-0"
                        />

                        <div>
                          <div className="text-xs font-bold leading-5 text-[#eef3ed]">
                            {
                              reference.title
                            }
                          </div>

                          <div className="mt-1 text-[11px] leading-5 text-[#9eaea1]">
                            {
                              reference.source
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-[#f7f7f2] py-10">
        <div className="container-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="font-black tracking-tight">
              FRESHCOY
            </div>

            <p className="mt-1 text-xs text-[#727c74]">
  Monitor. Check. Keep Fresh.
</p>

            <p className="mt-2 text-[11px] text-[#8a948d]">
              © 2026 itsravienx. All rights reserved.
            </p>
          </div>

          <div className="text-xs text-[#727c74]">
            Smart packaging concept for pakcoy freshness monitoring.
          </div>
        </div>
      </footer>
    </div>
  );
}
