# Portfolio Performance - Alfred Workflow

Searches your watchlists in the Portfolio Performance App via Alfred. Select one to copy its Name, Symbol, ISIN, or WKN to the clipboard.

<img src="https://github.com/chrisgrieser/portfolio-performance-alfred/blob/main/Demo%20PPP.gif?raw=true" alt="" width=70% height=70%>

## How to use

- Use the keyword `pp` in Alfred to search  your watchlists for a security. You can search for the name or the ticker symbol.
- Select with `↵` to copy Name & ISIN to your clipboard.
- Select with `⌘` + `↵` to copy the ISIN.
- Select with `⌥` + `↵` to copy the WKN.
- Select with `⌥` + `↵` to copy the Symbol.
- Select with `fn` + `↵` to copy the Name.

Portfolio Performance does not need to be running. The xml-file has to be unencrypted, as Alfred is otherwise not able to read ist.

## Installation

- You need the [Alfred Powerpack](https://www.alfredapp.com/powerpack/) as well as [Portfolio Performance](https://www.portfolio-performance.info/).
- Install [Homebrew](https://brew.sh/) by copypasting the following line into the Terminal:
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Wait for the installation to finish. If you are asked for a password, enter your Mac user password. It won't be visible while typing, but will still be accepted.
- Afterwards, install the pcre library by copypasting the following line: `brew install pcre`.
- [Download the latest release of this workflow](https://github.com/chrisgrieser/portfolio-performance-alfred/releases/latest)
- Doubleclick the .alfredworkflow file to install it in Alfred
- Enter the full path to your portfolio `xml`-file from *Portfolio Performance* next to `portfolio_file`
  -  example: `/Users/chrisgrieser/Portfolio/My_Portfolio.xml`
  -  replacing your home folder with `~` is fine. (useful when you sync Alfred across multiple machines)

<img src="https://github.com/chrisgrieser/portfolio-performance-alfred/blob/main/setup%201.png?raw=true" alt="Click here" width=60% height=60%>

<img src="https://github.com/chrisgrieser/portfolio-performance-alfred/blob/main/setup%202.png?raw=true" alt="enter path to your portfolio file here" width=50% height=50%>
---

[Disscussion at the Portfolio Performance Community (in German)](https://forum.portfolio-performance.info/t/isin-symbol-wkn-name-per-alfred-workflow-kopieren/16831)

This workflow has been created by [Chris Grieser](https://chris-grieser.de/).
