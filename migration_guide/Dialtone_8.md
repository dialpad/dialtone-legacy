# Dialtone 8 Migration guide

Migration from version `7` to `8`

Dialtone 8.x deprecates the use of LESS variables to favor the usage of Design tokens.

While the migration should be straightforward using the provided script, there might be instances where manual updates
to a product's code are required.
These are usually search-and-replace tasks, and may include decisions to be made with your Product Designer; for
example, RAW HEX values or CSS variables that are not semantically correct.

---

## Changes

## Migration Script

Dialtone 8 provides a migration script helper that should do most of the search and replacement needed.

### Options

- `--cwd` Specify the root directory for scan, defaults to CWD.
- `---ignore` Comma separated 'glob patterns' of files or paths you want the script to ignore
- `--force` Skip interactive prompts, use with caution!.

### Usage

```bash
npx dialtone-migration-helper [options]
```

The script will prompt what do you want to migrate:

- Box shadows
- Colors
- Fonts
- Size and Space

Each migration configuration search and replace different CSS variables and classes, you'll have to run every migration
configuration manually to prevent unwanted changes.

Once you select a migration to run, If there are files that require a migration, the script will give you a list of
what files are going to be modified and prompt if you are ok with that.

⚠️ Caution: **Make sure that the files listed are correct before proceeding.**

## Migration Steps

Follow steps in this exact order.

### 1. Update to Dialtone 8

```bash
npm install @dialpad/dialtone@next
```

### 2. Run the script

- **From the root of your project**

```bash
npx dialtone-migration-helper --cwd ./path/to/folder
```

- **Navigating to the desired project folder**

```bash
npx dialtone-migration-helper
```

### 3. Verify that the migration worked correctly

### 4. Repeat steps [2](#2-run-the-script) and [3](#3-verify-that-the-migration-worked-correctly) until all the migrations are done across the codebase.

### 5. Replace HEX Values and CSS Variables with Semantic Tokens

As a rule of thumb, when applying color reach first for Design Tokens (either as CSS variables or CSS Utilities)
unless they meet a specific design need to use a base color.

* Foreground content (text and icons)
* Surfaces/Background
* Borders

For example, the default foreground color shall be `var(--dt-color-foreground-primary)`.
So any previous use of `var(--black-900)`, `#000`, `#000000`, `black`, etc...
Should use `var(--dt-color-foreground-primary)`.

#### Variables

|     Search for     |               Replace with                |
|:------------------:|:-----------------------------------------:|
| `var(--black-500)` | `var(--dt-color-foreground-placeholder) ` |
| `var(--black-500)` |   `var(--dt-color-foreground-disabled)`   |
| `var(--black-900)` |   `var(--dt-color-foreground-primary)`    |
| `var(--black-700)` |  `var(--dt-color-foreground-secondary)`   |
| `var(--black-600)` |   `var(--dt-color-foreground-tertiary)`   |

#### HEX Values

| Search for |               Replace with                |
|:----------:|:-----------------------------------------:|
|   `#000`   | `var(--dt-color-foreground-placeholder) ` |
| `#000000`  |   `var(--dt-color-foreground-disabled)`   |
| `#3A3A3A`  |               `purple-500`                |
|   `#555`   |               `purple-500`                |
| `#555555`  |               `purple-500`                |
| `#EC0E0E`  |               `purple-500`                |
| `#B70B0B`  |               `purple-500`                |
| `#1AA340`  |               `purple-500`                |
| `#124620`  |               `purple-500`                |
| `#815008`  |               `purple-500`                |

__NOTE: Consult your Product Designer if anything looks off after the update.__
