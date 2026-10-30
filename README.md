# Capri

This repository pins the upstream [Capri Companion](https://github.com/TheAgencyMGE/capri-companion) desktop application as a Git submodule. It preserves the upstream source, dependency lockfile, tests, documentation, and license notices together. The submodule is pinned to a specific commit so updates are deliberate and reviewable.

> Unofficial fan project. Not affiliated with CD PROJEKT RED, Studio Trigger, or Netflix.

## Run on Windows

Requires Windows 10/11 x64 and Node.js 22 or newer.

For a fresh clone:

```powershell
git clone --recurse-submodules https://github.com/Zeddo18/Capri.git
cd Capri
npm run setup:app
npm start
```

If you already cloned without submodules:

```powershell
git submodule update --init --recursive
npm run setup:app
npm start
```

`setup:app` installs the submodule's locked dependencies. On first launch, Capri's own setup flow lets you choose Gemini, Ollama, another compatible model endpoint, or offline commands. Follow the upstream privacy and safety settings before enabling PC actions.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run setup:app` | Initialize the pinned source and install its locked dependencies |
| `npm start` | Build and launch the desktop companion |
| `npm run build` | Build the Electron app without launching it |
| `npm test` | Run the upstream unit tests |
| `npm run package:windows` | Build the Windows installer |

For the complete controls, setup guidance, and available features, see the [upstream README](https://github.com/TheAgencyMGE/capri-companion/blob/c094ec1/README.md). Security details are in the [upstream security guide](https://github.com/TheAgencyMGE/capri-companion/blob/c094ec1/docs/SECURITY.md).

## Repository layout

- `capri-companion/` — pinned upstream application source (Git submodule).
- `assets/references/` — images supplied for this project, kept as reference material.
- `docs/PROJECT_STATUS.md` — local integration notes and current state.
- `prototype/` — the earlier standalone visual prototype, retained for comparison.

## Licensing and artwork

The upstream application code is MIT-licensed; see its [LICENSE](https://github.com/TheAgencyMGE/capri-companion/blob/c094ec1/LICENSE) and [third-party notices](https://github.com/TheAgencyMGE/capri-companion/blob/c094ec1/THIRD_PARTY_LICENSES.md). The upstream project explicitly states that Capri's character design and traced model artwork are not covered by that code license. Its [source notes](https://github.com/TheAgencyMGE/capri-companion/blob/c094ec1/assets/capri/SOURCES.md) remain with the pinned source. Do not redistribute its character model, artwork, or branding unless you have the necessary rights. The supplied reference images are credited separately in [`assets/references/SOURCES.md`](assets/references/SOURCES.md).
