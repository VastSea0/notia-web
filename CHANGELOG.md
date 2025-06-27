# 📓 Notia Changelog
All notable changes to this project will be documented in this file.
![Notia Logo](https://github.com/user-attachments/assets/07e7e304-29f6-4d3f-87e1-3171e1428260)
 

## 🔖 v1.0.3-alpha – Modern Notes & Favorites (June 27, 2025)

In this update, Notia becomes smarter and more user-friendly with favorite notes and a modernized notes page. UI/UX improvements make the app look much more professional.

### ✨ New Features

- ⭐ **Add/remove favorites:** You can add or remove notes to/from favorites on the notes and gallery pages. You can also filter to view only favorite notes.
- 🖼️ **Modern gallery and notes page:** A new animated, theme-aware design following Material 3 standards.
- ⚙️ **Revamped settings page:** Now divided into sections, with modern ListTile/SwitchTile, profile area, and logical grouping for a professional look.
- 🌙 **Dark mode toggle:** Dark mode can be enabled or disabled from settings, preference is saved and applied across the app.
- 📝 **Notes page UI/UX:** Modern, accessible, and user-friendly notes list.

### 🪛 Improvements

- 🐞 No error occurs if old notes lack the `favorite` field; defaults to `false`.
- 🎨 All pages now comply with Material 3 and accessibility standards.
- ⚡ Performance and animation improvements.
- 🌐 All new UI texts are localized in Turkish, English, and Italian.

### 🐞 Known Limitations

- 🔄 Some highlighted features are not reset when the language is changed (to be fixed in v1.0.4).
- 🧪 Still alpha: Some UI elements may change or behave unexpectedly.

### 🧭 Coming Soon (v1.0.4+ roadmap)

- 🤖 Real AI-powered photo and note classification.
- 📍 Location-based photo sorting.
- 📝 Rich note editing (Markdown + embedded images).
- ☁️ Secure backup/synchronization (encrypted & offline-first).

---

## 🔖 v1.0.2-alpha – Smarter Gallery Filtering (June 25, 2025)

In this update, Notia offers a more organized and discoverable gallery with smart folder filtering.

### ✨ New Features

- 🧠 **Smart folder filtering:** Subfolders (Camera, Screenshots, etc.) are detected and can be filtered in the gallery.
- 💡 **“AI-powered” section:** A highlighted area guiding users to the smart filtering system.
- 🚀 **Tag suggestion logic:** Static tag suggestions based on file paths and folder structure.
- 🔄 **Pulse animation:** Eye-catching animation in the smart filtering section.
- 📥 **Automatic update check & APK download:** Check for updates from settings, download and install APK directly.
- 🔔 **User-friendly update notifications:** Localized snackbars inform about update status.
- ⚙️ **Permission management:** Necessary permissions are requested before APK installation.
- 📁 **Real-time folder picker updates:** When the photo folder is changed from settings, the gallery updates instantly.

### 🪛 Improvements

- 📂 The folder picker now instantly updates the gallery.
- 🖼️ The photo counter shows both filtered and total images.
- ⚙️ Parallel file validation and better filtering performance.
- 🧹 Update flow cleaned up, easier debugging.
- 🌐 All new UI texts are localized in Turkish, English, and Italian.
- 📝 Added a “What’s New?” page accessible from settings.

### 🐞 Known Limitations

- ❗ “AI-powered” features are currently logic-based; real machine learning will come in future versions.
- 🔄 Changing the language does not reset highlighted features (to be fixed in v1.0.3).
- 🧪 Still alpha: Some UI elements may change or behave unexpectedly.
- 📲 Manual permission is required for APK installation.

### 🧭 Coming Soon (v1.0.3+ roadmap)

- 🤖 Real AI-powered camera/screenshot classification.
- 📍 Location-based photo sorting.
- 📝 Rich note editing (Markdown + embedded images).
- ☁️ Secure backup/synchronization (encrypted & offline-first).

---

## 🔖 v1.0.1-alpha – First Open Alpha Release (June 20, 2025)

Notia's first alpha release is live as your personal photo journal.

### ✨ New Features

- 🌍 **Multi-language support:** Turkish, English, and Italian. Can be changed from settings.
- 📚 **Onboarding screen:** Introduces new users to Notia’s purpose.
- 📷 **Photo viewer improvements:** Cleaner look with title, description, and tags.
- 🧭 **Navigation improvements:** “Next” and “Previous” buttons for navigating photos.
- ⚙️ **Developer tools:** Debug panel in settings.

### 🪛 Improvements

- 📖 All visible texts are localized with Flutter’s `flutter_localizations` and `intl` packages.
- 🎨 Material 3 visual refresh.
- 🛠️ `l10n.yaml` for localization asset management.
- 🧱 App structure made ready for internationalization.

### 🐞 Known Limitations

- 🗣️ Some static UI elements are not yet localized.
- 🤖 AI features are placeholders (coming soon 🚧).
- ⚠️ Early alpha – data loss may occur between updates.
