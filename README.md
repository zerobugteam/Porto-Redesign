<div align="center">

  <!-- Tech Badge Header -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">

  <br><br>

  <!-- Project Title -->
  <h1>🎨 Porto-Redesign</h1>

  <p><strong>Portofolio ZeroBug Team — Versi Kedua dengan Tampilan Modern & Responsif</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Version-2.0.0-blue?style=flat-square">
    <img src="https://img.shields.io/badge/Status-Production-green?style=flat-square">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square">
  </p>

</div>

---

## 🚀 Tentang Project

**Porto-Redesign** adalah redesain portofolio resmi **ZeroBug Team** yang menghadirkan tampilan lebih modern, minimalis, dan fully responsive. Dibangun dari nol dengan fokus pada pengalaman pengguna (UX), performa optimal, dan struktur kode yang modular.

Versi ini merupakan upgrade signifikan dari [Portofoli0 v1.0](https://github.com/zerobugteam-zekkk/Portofoli0) dengan penambahan animasi smooth, layout responsif, dan optimasi loading time.

Cocok untuk:
- 💼 Showcase proyek & pengalaman developer
- 🌐 Personal branding & online presence
- 📄 CV / resume digital interaktif
- 🎯 Landing page portofolio profesional

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 📱 **Fully Responsive** | Tampilan optimal di desktop, tablet, dan mobile |
| 🎨 **Modern UI/UX** | Desain minimalis dengan fokus pada readability |
| ✨ **Smooth Animations** | Transisi halus antar section menggunakan CSS & JS |
| 🧩 **Modular Code** | Struktur file terorganisir, mudah dikembangkan |
| ⚡ **Optimized Performance** | Loading cepat dengan asset yang telah dioptimasi |
| 🌙 **Clean Aesthetic** | Warna & typography yang profesional dan eye-catching |
| 🔗 **Social Links** | Integrasi link ke GitHub, LinkedIn, dan kontak |
| 📂 **Project Showcase** | Section khusus menampilkan proyek-proyek unggulan |

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Markup** | HTML5 Semantic |
| **Styling** | CSS3 + Bootstrap 5 |
| **Interactivity** | Vanilla JavaScript |
| **Icons** | Bootstrap Icons |
| **Fonts** | Google Fonts |
| **Deploy** | GitHub Pages / Static Host |

---

## 📂 Struktur Folder

```
Porto-Redesign/
├── 📁 assets/
│   ├── 📁 css/
│   │   ├── style.css           # 🎨 Custom stylesheet utama
│   │   └── bootstrap.min.css   # 📦 Bootstrap framework
│   ├── 📁 js/
│   │   ├── main.js             # ⚡ Logika interaktif utama
│   │   └── bootstrap.bundle.min.js
│   ├── 📁 images/
│   │   ├── profile.png         # 👤 Foto profil
│   │   ├── projects/           # 🖼️ Thumbnail proyek
│   │   └── icons/              # 🎯 Icon tambahan
│   └── 📁 fonts/               # 🔤 Font lokal (opsional)
├── 📁 sections/
│   ├── hero.html               # 🏠 Section hero/landing
│   ├── about.html              # 👤 Section tentang
│   ├── projects.html           # 📂 Section proyek
│   ├── skills.html             # 🛠️ Section keahlian
│   └── contact.html            # 📧 Section kontak
├── index.html                  # 🚪 Entry point utama
├── README.md                   # 📄 Dokumentasi proyek
└── LICENSE                     # 📜 File lisensi MIT
```

---

## ⚙️ Alur Kerja Sistem

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   🧑 User   │────▶│  Buka Browser │────▶│  index.html  │
│  (Visitor)  │     │   (GitHub/Local)│     │   (Entry)    │
└─────────────┘     └──────────────┘     └──────┬──────┘
                                                  │
                              ┌───────────────────┼───────────────────┐
                              │                   │                   │
                              ▼                   ▼                   ▼
                         ┌─────────┐      ┌─────────────┐      ┌──────────┐
                         │ 🏠 Hero │      │ 📂 Projects  │      │ 📧 Contact│
                         │ Section │      │  Section     │      │  Section  │
                         └─────────┘      └─────────────┘      └──────────┘
                              │                   │                   │
                              └───────────────────┼───────────────────┘
                                                  │
                                                  ▼
                                          ┌─────────────┐
                                          │ 🎨 CSS + JS  │
                                          │  (Render UI) │
                                          └──────┬──────┘
                                                 │
                                                 ▼
                                          ┌─────────────┐
                                          │ 📱 Responsive│
                                          │  (All Devices)│
                                          └─────────────┘
```

1. **Akses Website** → User membuka link portofolio di browser
2. **Load Entry Point** → `index.html` dimuat sebagai halaman utama
3. **Render Section** → Hero, About, Projects, Skills, Contact ditampilkan secara berurutan
4. **Apply Styling** → CSS & Bootstrap mengatur layout, warna, dan typography
5. **Interactivity** → JavaScript menangani animasi scroll, hover effect, dan toggle mobile menu
6. **Responsive** → Layout menyesuaikan otomatis sesuai ukuran layar device

---

## 🚀 Cara Install

### 1. Clone Repository
```bash
git clone https://github.com/zerobugteam-zekkk/Porto-Redesign.git
cd Porto-Redesign
```

### 2. Buka di Browser

**Opsi A — Langsung buka file:**
```bash
# Buka file index.html di browser favorit
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

**Opsi B — Menggunakan Live Server (VS Code):**
1. Install ekstensi **Live Server** di VS Code
2. Klik kanan pada `index.html` → **Open with Live Server**
3. Browser akan terbuka otomatis di `http://127.0.0.1:5500`

**Opsi C — Menggunakan Python HTTP Server:**
```bash
# Python 3
python -m http.server 8000

# Akses via browser:
http://localhost:8000
```

### 3. Deploy ke GitHub Pages (Opsional)

1. Push repository ke GitHub
2. Masuk ke **Settings** → **Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik **Save** — website akan live dalam beberapa menit

---

## 📸 Screenshot

> **Tambahkan screenshot preview di sini**
>
> Contoh:
> - 🖥️ Desktop View (Full HD)
> - 📱 Mobile View (iPhone/Android)
> - 🎨 Dark/Light Mode (jika ada)

---

## ✨ Perbandingan v1 vs v2

| Aspek | Portofoli0 (v1) | Porto-Redesign (v2) |
|-------|-----------------|---------------------|
| **Desain** | Klasik & Sederhana | Modern & Minimalis |
| **Responsif** | Parsial | Fully Responsive |
| **Performa** | Standar | Optimized & Cepat |
| **Animasi** | Tidak ada | Smooth Transitions |
| **Struktur Kode** | Flat | Modular & Terorganisir |
| **Bootstrap** | v4 / Tanpa | v5 (Latest) |
| **SEO** | Dasar | Semantic HTML5 + Meta Tags |

---

## 🔗 Link Terkait

| Platform | Link |
|----------|------|
| 🌐 **Live Demo** | [Tambahkan link demo di sini] |
| 📁 **Versi Pertama** | [Portofoli0](https://github.com/zerobugteam-zekkk/Portofoli0) |
| 💼 **LinkedIn** | [Tambahkan link LinkedIn] |
| 🐦 **Twitter/X** | [Tambahkan link Twitter] |
| 📧 **Email** | [Tambahkan email kontak] |

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika ingin menambahkan fitur atau memperbaiki bug:

1. **Fork** repository ini
2. Buat **branch** baru: `git checkout -b fitur/nama-fitur`
3. **Commit** perubahan: `git commit -m "feat: tambahkan fitur X"`
4. **Push** ke branch: `git push origin fitur/nama-fitur`
5. Buat **Pull Request** ke branch `main`

---

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](LICENSE).

---

<div align="center">
  <sub>Dibuat dengan ❤️ oleh <a href="https://github.com/zerobugteam-zekkk">@zerobugteam-zekkk</a> — ZeroBug Team</sub>
  <br>
  <sub>Full-Stack Developer | Clean Code | Modern Web Solutions</sub>
</div>
