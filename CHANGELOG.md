# 📓 Notia Changelog
All notable changes to this project will be documented in this file.
![Notia Logo](https://github.com/user-attachments/assets/07e7e304-29f6-4d3f-87e1-3171e1428260)

---

## 🔖 v1.0.2-alpha – Smarter Gallery Filtering (June 25, 2025)

In this update, Notia becomes smarter and more organized with the introduction of intelligent folder filtering. Your gallery is now easier to explore, manage, and enjoy.

### ✨ New Features

- 🧠 **Smart Folder Filtering (AI-style preview):** Notia now detects subfolders like `Camera`, `Screenshots`, etc., and allows filtering based on folder structure.
- 💡 **Highlighted “AI-powered” section** in the gallery to guide users toward the smart filtering system.
- 🚀 **Tag suggestion logic** based on file paths and directory structure (static, early-stage AI simulation).
- 🔄 First-time **pulse animation** on smart filtering section draws attention to new features.
- 📥 **Automatic update check and APK download:** Users can now check for the latest version directly in Settings, download, and install updates from GitHub Releases without needing a store.
- 🔔 **User-friendly update notifications:** Localized snackbars inform users about update status (checking, up-to-date, completed, or errors).
- ⚙️ **Permission handling** improved to request install permissions before APK install attempts.
- 📁 **Real-time directory picker update:** Changing photo directory in Settings now immediately updates the gallery content.

### 🪛 Improvements

- 📂 Directory picker in Settings now updates the gallery in real time.
- 🖼️ Photo count display now reflects both filtered and total images.
- ⚙️ Optimized image loading with parallel file validation and better filtering performance.
- 🧹 Cleaned up update flow with better console logs for easier debugging.
- 🌐 Localized all new UI strings for English, Turkish, and Italian.
- 📝 Added changelog viewer page accessible from Settings → What's New.

### 🐞 Known Limitations

- ❗ “AI-powered” features are currently logic-based, not machine learning (ML will come in future versions).
- 🔄 Language switching doesn’t reset feature highlights (planned for v1.0.3).
- 🧪 Still in alpha: some UI elements may change or behave unexpectedly.
- 📲 APK install requires manual permission granting due to Android security model.

### 🧭 Coming Soon (v1.0.3+ roadmap)

- 🤖 True AI-powered screenshot & camera classification with offline models.
- 📍 Location-based photo sorting.
- 📝 Richer photo note editing (Markdown + embedded images).
- ☁️ Secure backup/sync (encrypted & offline-first model).

---


## 🔖 v1.0.1-alpha – First Public Alpha Release (June 20, 2025)

This is the first alpha release of Notia, your personal photo journal app.

### ✨ New Features

- 🌍 **Multi-language support:** Turkish, English, and Italian. Switchable via the Settings page.
- 📚 **Onboarding screen:** Introduces the purpose of Notia to new users.
- 📷 **Photo viewer enhancements:** Cleaner layout with titles, descriptions, and tags.
- 🧭 **Navigation improvements:** “Next” and “Previous” buttons for photo navigation.
- ⚙️ **Developer tools:** New debug panel in Settings for internal testing and insights.

### 🪛 Improvements

- 📖 All visible strings are now localized using Flutter's `flutter_localizations` and `intl` packages.
- 🎨 Material 3 visual overhaul.
- 🛠️ `l10n.yaml` added for localization asset management.
- 🧱 App structure optimized for future internationalization.

### 🐞 Known Limitations

- 🗣️ Some static UI elements are not yet localized.
- 🤖 AI features are placeholders (coming soon 🚧).
- ⚠️ App is in early alpha – data loss may occur between updates.
