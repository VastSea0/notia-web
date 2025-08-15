# 📓 Notia Changelog
All notable changes to this project will be documented in this file.
![Notia Logo](https://github.com/user-attachments/assets/07e7e304-29f6-4d3f-87e1-3171e1428260)


Tamam, o zaman **v1.0.9 alpha (Pre-Beta)** için İngilizce sürüm notlarını fix kısmında **GitHub issue numaraları ve hashtagleriyle** birlikte, commit mesajlarında geçtiği gibi ekleyelim.
Böylece changelog tamamen teknik olarak izlenebilir olacak.

---

## **Notia v1.0.9 alpha (Pre-Beta)**

**(August 12, 2025)**

This release strengthens **security**, enriches **AI-powered features**, and improves the **overall stability** of Notia. Now you can protect your workspace with biometric and password authentication while enjoying smarter, more versatile AI interactions.

---

### ✨ New Features

* **🔐 Biometric Authentication** – Fingerprint login support with full English & Turkish localization.
* **🔑 Password Protection** – Create and manage passwords directly from Home and Settings pages.
* **🤖 AI Enhancements**

  * “Convert to To-do List” and “Summarize” commands.
  * Long-press AI messages to copy or save as a note.
  * Markdown support for AI messages.
  * AI dialogs now preserve note ID & type, with improved layouts.
* **📄 Markdown Note Support** – Replaced rich text editor with markdown-based editing in bottom sheets.
* **📊 Subscription & Limit Management** – Fetch AI usage limits from Firestore based on subscription type; display subscription type in settings with localization.

---

### 🎨 UI & UX Improvements

* Async handling & mounted checks in note editing and saving flows (#54).
* Improved AI page app bar with better title layout and tooltips.
* App version displayed on splash screen (#51) and in the About dialog.
* Localization improvements for typing indicators, AI usage limits, note creation, and message actions.

---

### 🐞 Bug Fixes (with Issue References)

* **fix #54** – Remove debug print statements from note editing/saving & improve process with async handling and mounted checks.
* **fix #55** – Enhance AI features dialog by preserving note ID/type and updating rich description.
* **fixes #56, fixes #57** – Refactor NotiaAIPage layout for improved readability & consistency.
* **fix #53** – Add biometric authentication support with localization (English/Turkish).
* **fix #52** – Implement password protection dialog and functionality in home/settings pages.
* **fix #51** – Display app version on splash screen.
* **fix #48** – Add edit functionality to notes with bottom sheet support.
* **fix #47** – Refactor AI features dialog for improved readability and functionality, including limit checks and enhanced telemetry logging.
* **fix #45** – Add web support for Firebase options and improve initialization handling.
* Fixed – Correct application label casing in AndroidManifest.xml.
* Fixed – AI usage limit dialog message clarity and localization.
* Fixed – Update Firestore document reference for AI limits.
* Fixed – Removed unused imports and plugins, cleaned localization file formatting.

---

### 🔧 Technical & Internal Changes

* Removed unused Flutter plugins and imports.
* Added user ID to API requests for AI interaction tracking.
* Standardized formatting across localization files.
* Updated Gradle & Java dependencies where needed.

---

### 🚧 Known Limitations

* AI recommendation & summarization engine still under tuning — results may vary for complex inputs.
* Minor delays possible when opening notes with large photo sets.



# 🔖 **v1.0.8 – Smart AI, Privacy-First & Cleaner Interface**

**(07 August 2025)**

Notia continues its transformation into a smarter, more refined and privacy-respecting workspace. With a redesigned NotiaAI experience, privacy policy compliance, and enhanced note handling — this update makes your workflow faster, more secure, and more intuitive.

---

### ✨ New Features

* 🤖 **NotiaAI Chat Page**
  Access a brand-new chat interface with personality selection and chat history management.

* 💬 **Integrated AI Features**
  Use AI directly from **NotesPage**, **PhotoViewer**, and **NoteDetailsBottomSheet**. Added support for pre-made notes, typing indicators, and localized AI messages.

* 🧠 **AI Note Saving & Customization**
  Notes created with NotiaAI can now be saved directly, with improved theme consistency and message formatting.

* 🔐 **Privacy Policy Integration**
  Added in-app privacy policy links and acceptance checkboxes on login/registration. Fully localized in **English** and **Turkish**.

* 📈 **Telemetry & Analytics Engine**
  Added toggleable telemetry service with improved enable/disable logic and event flushing. Clear descriptions and opt-out messages now included.

* ⏱️ **Loading Timeout & Permission Handling**
  Improved behavior in AI-related workflows with timeout fallback and clearer permission prompts.

---

### 🎨 UI & UX Enhancements

* 🧩 **Adaptive NoteDetailsBottomSheet**
  Bottom sheets now resize based on content, improving photo and text note handling.

* 🧼 **Refined Onboarding & Theming**
  Gradients and hardcoded colors replaced with theme-aware styling for a more polished feel.

* 🧠 **Smarter Chat & Note UI**
  AI suggestions and note creation are now more stable, visually consistent, and error-resilient.

---

### 🌐 Localization

* 🌍 **Full Turkish & English Coverage**
  Newly added features — including AI chat, telemetry, privacy policy, and system messages — are now fully localized.

* 🗓️ **Improved Time & Save Strings**
  Added localization for terms like "Yesterday" and enhanced save confirmation messages.

---

### 🧪 Improvements

* 🧱 Improved handling of note types and empty photo states
* 🪄 Debug logging for Firebase and NotificationService startup behavior
* 🧰 Cleaned unused imports, improved code formatting across localization and UI files
* 🖼️ Enhanced in-app photo picker and note type selection interface
* 🧹 Internal refactors to NotiaAI UI and model structure for consistency

---

### 🐞 Bug Fixes

* ✅ Fixed #39: Replaced incorrect usage of `FilledButton.icon`
* ✅ Fixed #43: No available photo messages now shown properly in note selection
* ✅ Fixed #40: Removed unnecessary language options in settings
* ✅ Fixed #38: (Unspecified but resolved)
* 🧼 Addressed image-not-found edge cases and AI crashes due to null image references
* 📎 Fixed crash related to missing privacy URL in settings
* 🔤 Fixed localization formatting (missing commas, casing issues)

---

### 🔧 Technical & Internal

* 🧪 **App Icon Redesign** – Updated to a cleaner, modern look
* 🔧 **Gradle/Java Upgrade** – Now running on Java 17
* 🛠️ **Miscellaneous Performance Improvements** – General enhancements across modules

---

### 🚧 Known Limitations

* 🔐 Biometric security and “Remember Me” still under development
* 🔤 Rich-text export (HTML/Markdown) coming in **v1.0.9**
* 🤖 AI recommendation engine undergoing fine-tuning — feedback appreciated!

---

🔖 **v1.0.7-alpha – Smart Storage, Seamless UI & In-App Picker**
**(03 August 2025)**

Notia evolves into a more polished and privacy-conscious companion: local storage, sleek UI refactors, and smoother image handling pave the way for the future. Your notes now load faster, look cleaner, and respect your device.

---

### ✨ New Features

* 🧾 **Local Note Saving with SharedPreferences**
  Notes now persist locally — offline support begins here. Ideal for users on the go or with privacy in mind.

* 📸 **In-App Photo Picker Integration**
  No more switching to gallery. Select or capture photos directly inside Notia using the built-in picker.

* 🗂️ **Note Type Selection UI**
  Choose between **text** and **photo notes** with a new bottom sheet interface.

* 🔔 **Smart Notifications (AI-Powered)**
  Get notified when AI improves a note, suggests tags, or updates content — seamlessly integrated with the new notification system.

* 📊 **Telemetry & Analytics Engine**
  Track anonymized app usage and behavior to improve performance and user experience (opt-out ready).

---

### 🧠 AI & UX Enhancements

* 🖼️ **Aspect Ratio Caching for Images**
  NotesPage now remembers image sizes for better performance and more stable layout rendering.

* 🧩 **Simplified NoteDetails Layout**
  Removed visual clutter like `AspectRatio` wrapping — photos display beautifully and consistently.

* 🧠 **More Responsive AIFeatures**
  Fixed edge cases in photo path nullability, improved messaging, and debug behavior.

---

### 🌐 Localization

* 🌍 **Full Turkish & English Coverage**
  All new features — including AI, prompts, settings, and note types — are fully localized.

---

### 🧪 Improvements

* ⚡ **Startup Optimization:** Splash screen now shows for just 1 second.
* 🧹 **Deep Refactoring:** Bottom sheets, viewer pages, and model classes rewritten for clarity and performance.
* 🔐 **Gradle & Java Upgrade:** Now running on Java 17 with fixed build errors for modern device compatibility.
* 🧠 **AI-related null safety fixes:** More stable behavior when notes lack images or metadata.

---

### 🐞 Bug Fixes

* ✅ Fixed #31: Missing localization in photo notes
* ✅ Fixed #33: Nullable `currentVersion` crash in Settings
* ✅ Fixed #36: Incorrect casing in package name
* 🧼 Resolved image-not-found edge cases and improved fallback handling
* 📎 Fixed AI dialog crashes caused by null image references

---

### 🚧 Known Limitations

* 🔗 Rich-text sync/export (HTML/MD) still under development – expected in v1.0.8
* 🛡️ Session security features (biometrics, Remember Me) still not finalized
* 🧠 AI suggestion precision being actively tuned — continue sending feedback!

---

<h1>🔖 v1.0.6-alpha – AI Upgrade, Rich Notes &amp; Public Build (22 July 2025)</h1>
<p>Notia enters <strong>alpha phase</strong> with smarter AI features, rich-text note support, and full multi-device readiness. Say goodbye to static notes — and hello to intelligence, beauty, and power.</p>
<hr>
<h2>✨ New Features</h2>
<ul>
<li>
<p>🧠 <strong>AI-Powered Note Suggestions</strong>: Context-aware tag suggestions and summary generation with localized UI. Built on <strong>GitHub Models (GPT-4.1)</strong>.</p>
</li>
<li>
<p>🖋️ <strong>Rich Text Notes (Markdown + Media)</strong>:</p>
<ul>
<p>Use bold, italic, lists, and embedded images in your notes.</p>
</li>
<li>
<p>Notes are now way more expressive and customizable.</p>
</li>
</ul>
</li>
<li>
<p>📎 <strong>Inline AI Prompts</strong>: On photo details, get dynamic suggestions like “summarize this” or “suggest a title” – localized and instantly available.</p>
</li>
<li>
<p>📂 <strong>New Bottom Sheet UI</strong></p>
</li>
<li>
<p>🧪 <strong>Dynamic Prompt Debug Console</strong>: Toggle AI test/debug mode in settings for live prompt editing.</p>
</li>
<li>
<p>🧾 <strong>Auto-Generated Tags</strong>: AI can now analyze your photo and description to recommend relevant tags.</p>
</li>
<li>
<p>💬 <strong>Localized AI explanations</strong>: All AI messages and prompts are localized for a seamless experience.</p>
</li>
</ul>
<hr>
<h2>🧪 Improvements</h2>
<ul>
<li>
<p>🧭 <strong>Fully localized interface (final polish)</strong>: Even edge case strings and AI messages now have multi-language support. Missing strings fallback gracefully.</p>
</li>
<li>
<p>🧹 <strong>Cleanup pass on string literals</strong>: Removed hardcoded <code>Text("...")</code> elements in favor of <code>AppLocalizations.of(context)</code> methods.</p>
</li>
<li>
<p>🖼️ <strong>Improved image preloading</strong>: PhotoViewer and Grid now load high-res images more smoothly.</p>
</li>
<li>
<p>🧠 <strong>AI pulse animations refined</strong>: Lighter, more fluid animations and better visibility in dark mode.</p>
</li>
<li>
<p>📂 <strong>Backup/export enhancements</strong>: Folder permissions, format validation, and export naming logic improved.</p>
</li>
</ul>
<hr>
<h2>🐞 Bug Fixes</h2>
<ul>
<li>
<p>🔤 <strong>Dynamic language switch fixes</strong>: More widgets now react instantly to language change.</p>
</li>
<li>
<p>🐛 <strong>AI loading spinner stuck bug fixed</strong></p>
</li>
<li>
<p>🧱 <strong>Rich note overflow bug resolved</strong></p>
</li>
<li>
<p>📸 <strong>Image not found crash fixed in PhotoViewerPage</strong></p>
</li>
<li>
<p>🔄 <strong>Reset button now clears filters properly</strong></p>
</li>
<li>
<p>🧼 General performance and cleanup across HomePage and AI components.</p>
</li>
</ul>
<hr>
<h2>🚧 Known Limitations</h2>
<ul>
<li>
<p>🧠 AI features require internet and logged-in session (Firebase linked).</p>
</li>
<li>
<p>✍️ Rich-text markdown is not yet synced/exported in HTML/MD form — coming in v1.0.7.</p>
</li>
<li>
<p>🛡️ Session persistence is basic — biometric auth and "Remember Me" coming soon.</p>
</li>
<li>
<p>🔧 Prompt tuning and AI accuracy still improving. Feedback welcome!</p>
</li>
</ul>
<hr>
<h2>🌍 Public Build Rollout Plan</h2>

Platform | Status
-- | --
Android | ✅ Apk build ready
iOS | 🚫 Not supported yet


<hr>
<h2>🧭 Coming Soon (v1.0.7+ Roadmap)</h2>
<ul>
<li>
<p>🔄 <strong>Session persistence &amp; biometric login</strong></p>
</li>
<li>
<p>☁️ <strong>One-click Firebase sync</strong></p>
</li>
<li>
<p>🧠 <strong>Auto photo classification &amp; smart albums</strong></p>
</li>
<li>
<p>📝 <strong>Rich note syncing in HTML/Markdown</strong></p>
</li>
<li>
<p>📊 <strong>Analytics dashboard (optional, privacy-first)</strong></p>
</li>
<li>
<p>🏷️ <strong>Bulk tag/note management tools</strong></p>
</li>
</ul>
<hr>
 </body></html>
 
# 🔖 v1.0.5-alpha – Localization, Pull-to-Refresh & Export System Overhaul (July 2025)

This update continues the alpha evolution of Notia with massive improvements in internationalization, data portability, and platform compatibility. It lays the groundwork for stable cross-device sync and localized user experiences across five languages.

---

## ✨ New Features

* 🌐 **Full multilingual support (5 languages)**: Notia now speaks **English, Turkish, Italian, German, and Azerbaijani** fluently — including the splash screen, settings, registration, search bar, and gallery.
* 🌀 **Pull-to-Refresh**: Swipe down on the HomePage or NotesPage to instantly refresh content. Smooth, responsive, and just makes sense.
* 📤 **Mobile Export & Import (Revamped)**: Cross-platform export/import is now reliable on **Android, Linux, and Windows**. Includes:

  * UTF-8 encoding fixes
  * Byte handling errors resolved
  * Automatic folder permission checks
* 🔁 **Grid Reset Mechanism**: Tap to quickly reset gallery view – great for refreshing complex states or reloading after heavy filtering.

---

## 🪛 Improvements

* 🏁 **Localized onboarding experience**: First-time users now get AI-related hints and welcome messages in their native language.
* 🗂️ **Directory refresh**: When you change the directory, the homepage updates instantly — **no more restart required**.
* 🧠 **Localized search filters**: Search options and sorting dialogs now fully support all five languages with proper translations and RTL alignment.
* 🧭 **Improved AI feature descriptions**: Enhanced wording and visual consistency for AI Pulse banner and photo suggestions.
* 🧹 **Refactored HomePage**: Switched `HomeHeader` and `HomePageState` to `StatefulWidget` for better performance and stability.
* 🔒 **Authentication Polishing**: UI enhancements to login/register screens with smoother animations and improved accessibility.
* 🔄 **Grid performance tweaks**: Lazy load improvements, pagination loading indicators, and smoother scroll interactions.
* 💾 **BackupService logic restructured**: Safer file handling for JSON-based exports, better platform awareness.

---

## 🐞 Fixed

* ❌ **replaceAll crash**: Fixed misuse of `replaceAll()` in localization strings, preventing runtime issues.
* 📂 **Linux Firebase init**: Firebase initialization now works properly on Linux (conditional init based on platform).
* 🧱 **Photo preview layout**: Fixed UI glitch with photo layout spacing and image aspect ratio inconsistencies.
* 🧰 **Snackbar theming**: Snackbar background now uses `colorScheme.primary` for better dark mode support.
* 💬 **Dynamic language switch bugs**: More UI components now reflect real-time language changes — full support coming in v1.0.6.

---

## 🐞 Known Limitations

* ⛔ **AI features are still scaffolded**: Smart tag suggestions and classification logic are not yet active.
* 🔐 **Auth session persistence** is basic; remember-me and session restore coming soon.
* 🔄 **Some language changes still require full refresh**: Working toward full dynamic localization with hot-reload-like behavior.

---

## 🧭 Coming Soon (v1.0.6+ Roadmap)

* ☁️ **Real Firebase sync**: One-click cross-device backup and restoration.
* 🧠 **AI Photo Tagging**: Automatic tagging based on image content.
* 🖋️ **Markdown Note Editor**: Rich-text editing, embedding images/videos.
* 🔄 **Session persistence & biometric login**
* 📑 **Batch note/tag management**


🔖 **v1.0.4-alpha – Smart Gallery, Bug Fixes & Modern Codebase (July 2025)**

In this update, Notia's codebase has been completely modernized. The gallery and notes pages are now faster and smarter, with major improvements to user experience and error handling.

✨ **New Features**

* 🗂️ **Smart folder & gallery management:** Subfolder support, quick folder filtering, and advanced permission handling.
* 🔄 **Grid/List view cycling:** Switch between gallery views (classic/detailed) with a single tap.
* 🧠 **AI Pulse banner:** A smart suggestion/AI banner on the homepage (with extensible infrastructure).
* 📝 **Persistent & secure storage for notes and settings:** Notes and settings are now stored more reliably and safely.
* 🛠️ **Advanced error handling:** Clear dialogs and feedback when folder or permission issues occur.
* 🏷️ **Folder & tag filtering:** More precise filtering options in gallery and notes.
* 🧩 **Modernized codebase:** HomePage and gallery state management rewritten for performance and maintainability.

🪛 **Improvements**

* 🎨 HomeHeader and gallery UI/UX redesigned with full Material 3 compliance – more intuitive and professional.
* ⚡ Enhanced filtering, sorting, and search algorithms.
* 🐞 Fixed parameter issues and widget invocation bugs in NotesPage and SettingsPage.
* 🌙 More robust and faster theme and language switching.
* 🧹 Code cleanup: Removed unused enums, improved separation of concerns.
* 🗃️ Per-note storage system for more secure note handling.

🐞 **Known Limitations**

* 🔄 Some UI elements may not immediately reflect language changes (full dynamic localization planned for v1.0.5).
* 🧪 Still in alpha: Some advanced filtering and AI features are in place but not yet activated.

🧭 **Coming Soon (v1.0.5+ Roadmap)**

* 🤖 Real AI-powered photo and note classification.
* ☁️ Secure backup & sync (encrypted & offline-first).
* 📝 Rich note editing (Markdown + embedded media).
* 🏷️ Advanced batch tag management and filtering.
* 📊 User analytics and extended developer tools.



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
