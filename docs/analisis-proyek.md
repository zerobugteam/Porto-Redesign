# 📊 Laporan Analisis & Transformasi Redesain: Porto-Redesign (STRV-Inspired)

> **Dokumen Analisis Arsitektur, Ekstraksi Palet Warna, Benchmark Tech Stack STRV, dan Implementasi Redesain**  
> **Target Proyek:** ZeroBug Team — Software Design & Engineering Agency  
> **Tanggal Pembaruan:** 6 November 2026  
> **Status:** Redesain Selesai (v2.1 - STRV Inspired)  

---

## 1. Analisis Tech Stack Website STRV (https://www.strv.com)

Berdasarkan analisis arsitektur publik, profil teknologi (BuiltWith, Wappalyzer), serta dokumentasi teknis *engineering blog* resmi dari STRV:

| Komponen Layer | Teknologi yang Digunakan STRV | Karakteristik & Penerapannya |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js (React)** | Menghasilkan performa tinggi melalui *Server-Side Rendering (SSR)* dan *Static Site Generation (SSG)* untuk SEO instan dan load time cepat. |
| **Language** | **TypeScript** | Standar *type safety* ketat di seluruh modul web dan mobile. |
| **Styling Architecture** | **Tailwind CSS & Styled-Components** | Menggunakan sistem *utility-first* dipadu dengan *design tokens* (CSS variables) untuk dark/light theme, layout Bento box, dan grid presisi. |
| **Animation & Motion** | **GSAP (GreenSock) & Framer Motion** | Digunakan untuk transisi halaman yang mulus, efek *reveal on scroll*, *hover magnetic/glow cursor*, dan transisi sinematik. |
| **Hosting & Delivery** | **Vercel Edge Network / AWS** | Distribusi konten global via CDN dengan latensi ultra rendah (*Fargate, CloudFront, S3*). |
| **Headless CMS** | **Prismic / Contentful** | Mengelola studi kasus, blog, dan testimoni klien tanpa merombak kode inti. |

### Ciri Khas Desain & UX STRV yang Diadopsi:
1. **Dark-First High-End Aesthetic:** Latar belakang *deep rich black / midnight navy* dengan border halus semi-transparan (`rgba(255, 255, 255, 0.1)`).
2. **Hero Statement yang Kuat:** Headline berukuran masif (*Space Grotesk*), didampingi *Metrics / Impact Bar* (*Numbers that speak*).
3. **Cinematic Case Studies:** Kartu portofolio berukuran besar dengan data metrik nyata (latency, uptime, active users) dan visual terminal/code preview.
4. **Bento Grid Layanan:** Penataan modul kapabilitas yang rapi dan modular.
5. **Kontras Nilai Jelas:** Komparasi vendor konvensional vs standar rekayasa ZeroBug.

---

## 2. Analisis Tone Warna Logo (`logo.png`)

Melalui analisis sampel citra `logo.png` menggunakan algoritma ekstraksi warna Python/Pillow:

| Peran Warna | Kode HEX | Nilai RGB | Makna & Penggunaan di Web |
| :--- | :--- | :--- | :--- |
| **Deep Charcoal Navy (Base Dark)** | `#090D12` & `#14232D` | `rgb(9, 13, 18)` & `rgb(20, 35, 45)` | Latar belakang gelap utama dan surface elevasi, mencerminkan citra engineering yang solid dan mewah. |
| **Electric Steel Cyan (Primary Accent)** | `#3898B8` / `#2D7891` | `rgb(56, 152, 184)` / `rgb(45, 120, 145)` | Aksen utama yang diambil langsung dari lambang logo: tombol CTA, border glow, ikon, dan teks sorotan. |
| **Cyan Light / Highlight Glow** | `#5CC8EB` | `rgb(92, 200, 235)` | Digunakan untuk teks gradasi, status pulse live, dan efek hover. |
| **Ice Slate / Cool Mist** | `#E2EBF0` / `#D6DCE0` | `rgb(226, 235, 240)` | Warna teks utama (*ink*) dengan tingkat keterbacaan tinggi di atas latar gelap. |
| **Muted Slate Cyan** | `#1C3241` | `rgb(28, 50, 65)` | Warna border halus kartu dan latar belakang chip teknologi. |

---

## 3. Implementasi Perubahan Redesain (v2.1)

### A. Header & Identitas Visual
- Logo fisik `logo.png` kini ditampilkan secara dinamis di *Navbar* dan *Footer* dengan border glow halus.
- Favicon browser diselaraskan langsung dengan `logo.png`.
- Menambahkan status badge *"Engineering Hub • Tersedia untuk Proyek Baru"* dengan animasi titik detak (*live pulse dot*).

### B. Hero Section Ala STRV
- Tipografi judul bergaya agensi global dengan efek *text-gradient*: *"Kami Merancang & Membangun Produk Digital Berkelas Dunia."*
- Tombol aksi ganda bergaya pil (*capsule buttons*) dengan efek hover melayang dan bayangan berpendar (*glow shadow*).
- **Metrics Bar:** Menampilkan 4 pilar pembuktian: *100% Hak Milik Klien*, *3 Core Domains (Web, Mobile, IoT)*, *0-Bug Quality Pledge*, dan *End-to-End Delivery*.

### C. Case Studies Sinematik (Proyek Unggulan)
Setiap studi kasus kini memiliki layout dua kolom dengan struktur agensi profesional:
1. **Smart Monitoring Dashboard:** IoT telemetry stream latency `<150ms`, uptime 99.9%.
2. **Mobile IoT Controller:** Flutter cross-platform 60 FPS dengan otentikasi biometrik.
3. **Sistem Informasi Internal:** Enterprise RBAC dengan audit log lengkap.
4. **Smart Drop Point:** Loker otomatis berbasis RFID & solenoid relay.
- Dilengkapi **Mockup Terminal Interaktif** dengan styling macOS window controls (merah, kuning, hijau) dan cuplikan sintaks teknis.

### D. Bento Grid Kapabilitas & Ekosistem Teknologi
- Menyajikan 3 domain utama (Web, Mobile, IoT) dalam layout kartu Bento yang responsif.
- Komparasi langsung: *Vendor Konvensional* vs *Standar ZeroBug Team* untuk meyakinkan calon klien bisnis.

### E. Persistensi Tema & Navigasi Mobile
- Preferensi Dark Mode kini disimpan permanen di browser pengunjung via `localStorage` (`zerobug_theme`), dengan default awal **Dark Mode** berkarakter STRV.
- Mobile menu full-screen dengan scroll locking dan penutupan otomatis via tombol keyboard `Escape`.
- Indikator menu navigasi aktif otomatis (*Active Nav on Scroll*) berbasis `IntersectionObserver`.

---

## 4. Struktur File Proyek Terkini

```text
Porto-Redesign/
├── .github/
│   └── workflows/
│       └── jekyll-gh-pages.yml   # Workflow deployment GitHub Pages
├── docs/
│   └── analisis-proyek.md       # Laporan analisis & dokumentasi redesain STRV
├── .gitattributes                # Konfigurasi Git
├── index.html                    # Halaman landing page (STRV layout & branding)
├── logo.png                      # Aset logo tim (sumber palet warna & favicon)
├── README.md                     # Panduan umum proyek
├── script.js                     # Logika tema (localStorage), navigasi, observer
└── style.css                     # Sistem desain STRV, CSS variables, & responsive grid
```

---

## 5. Kesimpulan

Dengan mengadopsi DNA desain **STRV** (dark-first, visual masif, metrik kredibilitas, mockup teknis) serta memadukannya dengan palet warna asli dari **`logo.png`** (Deep Charcoal Navy & Steel Cyan), website ZeroBug Team kini memiliki citra agensi teknologi papan atas yang elegan, terpercaya, dan berorientasi konversi tinggi tanpa mengorbankan kecepatan akses *pure vanilla code*.
