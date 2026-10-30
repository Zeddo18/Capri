# Capri Desktop Companion

An unofficial, local desktop companion prototype inspired by the behavior of [Capri Companion](https://github.com/TheAgencyMGE/capri-companion): a small always-on-top character, a glitch teleport effect, and a lightweight chat panel.

The current on-screen character uses a crop from the pose sheet supplied by the user. The additional supplied screenshots are kept in `assets/references/` for expressions, panel layout, desktop placement, and teleport timing. Attribution and the upstream repository's source notes are summarized in `assets/references/SOURCES.md`.

## Project layout

- `src/` — Electron main process, preload bridge, and UI.
- `assets/references/` — owner-supplied visual references and source notes.
- `docs/` — project documentation.

## Run on Windows

Requires Node.js 22 or newer.

```powershell
npm install
npm start
```

Use `Ctrl+Alt+Space` to show or hide the companion, and `Ctrl+Alt+P` to teleport it. You can also use the tray menu. The chat currently records messages in the open session only; it is not connected to an AI provider and cannot control the PC.

## Current scope

- Transparent, frameless, always-on-top desktop window
- User-supplied pose-sheet sprite, character-only scanlines, idle motion, and teleport glitch
- Chat panel shell and local session messages
- Narrow preload bridge with context isolation enabled

AI, voice, settings, persistence, and computer-control tools are not implemented yet. Any later computer-control feature should require explicit per-task approval and a clear stop control.

This is an unofficial fan-inspired project and is not affiliated with CD PROJEKT RED, Studio Trigger, Netflix, or the Capri Companion repository authors.
