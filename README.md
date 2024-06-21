### SvelteKit TypeScript Boilerplate

Boilerplate for SvelteKit projects in TypeScript

#### Prerequisites

- [Node.js](https://nodejs.org/) (^22.3)
- [pnpm](https://pnpm.io/) (^9.4)
- [Docker](https://www.docker.com/) (optional)

#### Getting Started

1. Clone repo:

      ```bash
      git clone https://github.com/equilpres/sveltekit-typescript-boilerplate.git
      ```

2. Go to project dir:

      ```bash
      cd sveltekit-typescript-boilerplate
      ```

3. Install deps:

      ```bash
      pnpm install
      ```

#### Scripts

- `dev`: Start dev server.

     ```bash
     pnpm dev
     ```

- `build`: Build project.

     ```bash
     pnpm build
     ```

- `docker:build`: Build Docker image.

     ```bash
     pnpm docker:build
     ```

- `preview`: Preview prod build.

     ```bash
     pnpm preview
     ```

- `start`: Start prod server.

     ```bash
     pnpm start
     ```

- `sync`: Sync files with SvelteKit.

     ```bash
     pnpm sync
     ```

- `svelte-check`: Check Svelte files.

     ```bash
     pnpm svelte-check
     ```

- `lint`: Lint code.

     ```bash
     pnpm lint
     ```

- `fmt`: Format code.

     ```bash
     pnpm fmt
     ```

- `bump`: Update deps.

     ```bash
     pnpm bump
     ```

#### License

[MIT](LICENSE)
