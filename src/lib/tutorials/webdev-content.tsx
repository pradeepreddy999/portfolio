import {
  Callout,
  Code,
  Deepdive,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'
import type { NavGroup } from '#/lib/tutorials/shared'

export const webDevNav: Array<NavGroup> = [
  {
    title: 'Web Fundamentals',
    items: [
      { id: 'internet-web', label: 'How the Internet & Web work' },
      { id: 'browser-job', label: "The browser's job" },
      { id: 'stacks', label: 'Front-end, back-end, full-stack' },
      { id: 'tooling', label: 'Developer tooling' },
      { id: 'http-apis', label: 'HTTP, APIs & data' },
      { id: 'rendering', label: 'Rendering strategies' },
      { id: 'architecture', label: 'Application architecture' },
      { id: 'build-deploy', label: 'Build tools & deployment' },
      { id: 'perf-a11y-sec-seo', label: 'Performance, a11y, security & SEO' },
    ],
  },
  {
    title: 'HTML',
    items: [
      { id: 'html-anatomy', label: 'Document anatomy' },
      { id: 'html-text', label: 'Text, lists & tables' },
      { id: 'html-images', label: 'Images & basic media' },
      { id: 'html-semantic', label: 'Semantic layout elements' },
      { id: 'html-forms', label: 'Forms in depth' },
      { id: 'html-responsive-media', label: 'Responsive media' },
      { id: 'html-interactive', label: 'Native interactive elements' },
      { id: 'html-a11y', label: 'Accessibility (ARIA & beyond)' },
      { id: 'html-webcomponents', label: 'Web Components' },
      { id: 'html-seo', label: 'Metadata, SEO & social sharing' },
    ],
  },
  {
    title: 'CSS',
    items: [
      { id: 'css-selectors', label: 'Selectors & the box model' },
      { id: 'css-units', label: 'Units, colors & typography' },
      { id: 'css-flexbox', label: 'Flexbox' },
      { id: 'css-grid', label: 'Grid' },
      { id: 'css-responsive', label: 'Responsive design techniques' },
      { id: 'css-custom-props', label: 'Custom properties & theming' },
      { id: 'css-container-queries', label: 'Container queries' },
      { id: 'css-has', label: ':has() — the relational selector' },
      { id: 'css-subgrid-nesting', label: 'Subgrid & native nesting' },
      { id: 'css-layers', label: 'Cascade layers' },
      { id: 'css-modern-selectors', label: 'Modern selectors' },
      { id: 'css-animation', label: 'Animation & view transitions' },
      { id: 'css-property', label: 'Animatable custom properties' },
      { id: 'css-best-practices', label: 'Best practices checklist' },
    ],
  },
  {
    title: 'JavaScript',
    items: [
      { id: 'js-variables', label: 'Variables, types & operators' },
      { id: 'js-functions', label: 'Functions' },
      { id: 'js-control-flow', label: 'Control flow, arrays & objects' },
      { id: 'js-dom-events', label: 'The DOM & events' },
      { id: 'js-modern-syntax', label: 'Modern syntax (ES2020–ES2024)' },
      { id: 'js-async', label: 'Async JavaScript & the event loop' },
      { id: 'js-modules', label: 'ES modules' },
      { id: 'js-closures-this', label: 'Closures, this & prototypes' },
      { id: 'js-observers', label: 'Browser observer APIs' },
      { id: 'js-workers', label: 'Web Workers & Service Workers' },
      { id: 'js-state', label: 'State management patterns' },
      { id: 'js-typescript', label: 'TypeScript essentials' },
      { id: 'js-testing', label: 'Testing' },
      { id: 'js-performance', label: 'Performance optimization' },
      { id: 'js-security', label: 'Security in practice' },
    ],
  },
  {
    title: 'Capstone',
    items: [{ id: 'capstone', label: 'Capstone learning path' }],
  },
]

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const JS_KEYWORDS = [
  'abstract',
  'any',
  'as',
  'async',
  'await',
  'boolean',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'declare',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'from',
  'function',
  'get',
  'if',
  'implements',
  'import',
  'in',
  'infer',
  'instanceof',
  'interface',
  'is',
  'keyof',
  'let',
  'namespace',
  'new',
  'null',
  'of',
  'private',
  'protected',
  'public',
  'readonly',
  'return',
  'satisfies',
  'set',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'type',
  'typeof',
  'undefined',
  'var',
  'void',
  'while',
  'yield',
]

const JS_TYPES = [
  'Array',
  'Object',
  'String',
  'Number',
  'Boolean',
  'Promise',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'JSON',
  'Math',
  'Date',
  'RegExp',
  'Error',
  'console',
  'document',
  'window',
  'navigator',
  'self',
  'fetch',
  'Symbol',
  'Proxy',
  'Reflect',
  'ArrayBuffer',
  'AbortController',
  'AbortSignal',
  'IntersectionObserver',
  'ResizeObserver',
  'MutationObserver',
  'Worker',
  'DOMPurify',
  'HTMLElement',
  'customElements',
  'requestAnimationFrame',
  'requestIdleCallback',
  'structuredClone',
  'Record',
  'Partial',
  'Pick',
  'Omit',
  'User',
  'Calculator',
  'Animal',
  'Dog',
  'Counter',
  'Config',
  'ApiResponse',
]

function highlightJs(code: string): string {
  const kwPattern = JS_KEYWORDS.join('|')
  const tyPattern = JS_TYPES.join('|')
  const master = new RegExp(
    `(//[^\\n]*|/\\*[\\s\\S]*?\\*/)|(\`(?:\\\\.|[^\`\\\\])*\`)|("(?:\\\\.|[^"\\\\])*")|('(?:\\\\.|[^'\\\\])*')|\\b(${tyPattern})\\b|\\b(${kwPattern})\\b`,
    'g',
  )
  return escapeHtml(code).replace(
    master,
    (match, comment, template, dq, sq, ty, kw) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (template) return `<span class="str">${template}</span>`
      if (dq) return `<span class="str">${dq}</span>`
      if (sq) return `<span class="str">${sq}</span>`
      if (ty) return `<span class="ty">${match}</span>`
      if (kw) return `<span class="kw">${match}</span>`
      return match
    },
  )
}

function highlightHtml(code: string): string {
  return escapeHtml(code).replace(
    /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?[a-zA-Z][\w-]*)|("[^"]*")/g,
    (match, comment, tag, str) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (str) return `<span class="str">${str}</span>`
      if (tag) return `<span class="ty">${tag}</span>`
      return match
    },
  )
}

function highlightCss(code: string): string {
  return escapeHtml(code).replace(
    /(\/\*[\s\S]*?\*\/)|("[^"]*"|'[^']*')|(@[\w-]+)/g,
    (match, comment, str, at) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (str) return `<span class="str">${str}</span>`
      if (at) return `<span class="kw">${at}</span>`
      return match
    },
  )
}

function highlightBash(code: string): string {
  return escapeHtml(code).replace(
    /(#[^\n]*)/g,
    (m) => `<span class="cm">${m}</span>`,
  )
}

function Js({ code }: { code: string }) {
  return <Code html={highlightJs(code)} />
}

function Html({ code }: { code: string }) {
  return <Code html={highlightHtml(code)} />
}

function Css({ code }: { code: string }) {
  return <Code html={highlightCss(code)} />
}

function Bash({ code }: { code: string }) {
  return <Code html={highlightBash(code)} />
}

export function WebDevContent() {
  return (
    <>
      <ModuleTitle>Web Fundamentals</ModuleTitle>

      <Topic id="internet-web" no="01" title="How the Internet & Web work">
        <p>
          The <strong>Internet</strong> is a global network of connected
          computers that can exchange data. The <strong>Web</strong> (World Wide
          Web) is one service that runs on top of the Internet — a system of
          linked documents and apps accessed via browsers using HTTP. Email,
          gaming, and file transfer are other services that also run on the
          Internet but aren&apos;t &quot;the Web.&quot;
        </p>

        <h4>What happens when you type a URL and hit Enter</h4>
        <ul>
          <li>
            <strong>DNS lookup</strong> — the browser asks a Domain Name System
            server &quot;what IP address does <code>example.com</code> point
            to?&quot; (like a phone book converting names to numbers).
          </li>
          <li>
            <strong>TCP connection</strong> — the browser opens a connection to
            that IP address, a multi-step handshake that establishes reliable
            communication.
          </li>
          <li>
            <strong>TLS handshake</strong> (for HTTPS) — browser and server
            agree on encryption keys so the connection is secure.
          </li>
          <li>
            <strong>HTTP request</strong> — the browser sends a request:
            &quot;GET me the page at this path.&quot;
          </li>
          <li>
            <strong>Server processing</strong> — the server figures out what to
            send back: a static file, or a dynamically generated page.
          </li>
          <li>
            <strong>HTTP response</strong> — the server sends back HTML (status
            code, headers, body).
          </li>
          <li>
            <strong>Browser parsing & rendering</strong> — the browser turns
            that HTML/CSS/JS into pixels on screen (details in the next topic).
          </li>
        </ul>

        <h4>Clients and servers</h4>
        <p>
          A <strong>client</strong> is the program requesting data — usually a
          browser, but could be a mobile app or another server. A{' '}
          <strong>server</strong> is the program listening for requests and
          responding — it runs continuously, often on cloud infrastructure (AWS,
          Azure, GCP) or a hosting platform (Vercel, Netlify, Render).
        </p>

        <h4>Domains, hosting & DNS</h4>
        <p>
          A <strong>domain name</strong> (<code>example.com</code>) is a
          human-readable address you rent from a registrar (Namecheap, GoDaddy,
          and similar). <strong>DNS records</strong> map that domain to actual
          server addresses.
        </p>
        <RefTable
          headers={['Record', 'Purpose']}
          rows={[
            ['A', 'Maps a domain to an IPv4 address.'],
            ['CNAME', 'Maps a domain to another domain (an alias).'],
            ['MX', 'Where to route email for that domain.'],
          ]}
        />
        <p>
          <strong>Hosting</strong> is where your actual site files or server
          code live. Static hosting (Netlify, GitHub Pages, Vercel) serves
          pre-built files; dynamic hosting runs a server process continuously.
        </p>
      </Topic>

      <Topic id="browser-job" no="02" title="The browser's job">
        <p>
          Once HTML arrives, the browser turns it into a visible, interactive
          page via the <strong>Critical Rendering Path</strong>:
        </p>
        <ul>
          <li>
            <strong>Parse HTML → DOM</strong> (Document Object Model): a tree
            structure representing every element on the page.
          </li>
          <li>
            <strong>Parse CSS → CSSOM</strong> (CSS Object Model): a tree of all
            the styles that apply.
          </li>
          <li>
            <strong>Combine DOM + CSSOM → Render Tree</strong>: only the visible
            nodes, with computed styles.
          </li>
          <li>
            <strong>Layout (reflow)</strong>: the browser calculates the exact
            size and position of every element.
          </li>
          <li>
            <strong>Paint</strong>: pixels are drawn for each element (color,
            text, images, borders).
          </li>
          <li>
            <strong>Composite</strong>: layers are combined in the right order —
            things like <code>position: fixed</code> or <code>transform</code>{' '}
            often get their own layer for performance.
          </li>
        </ul>
        <Deepdive>
          Why this matters practically: JavaScript that repeatedly changes
          layout-affecting properties (like <code>width</code>) in a loop causes
          repeated Layout + Paint cycles — &quot;layout thrashing&quot; — which
          is slow. Animating <code>transform</code> and <code>opacity</code>{' '}
          instead is fast because it skips Layout and Paint entirely, going
          straight to Composite, which the GPU handles.
        </Deepdive>

        <h4>The JavaScript engine</h4>
        <p>
          Every browser has an engine that parses and executes JS — V8 in
          Chrome/Edge/Node.js, SpiderMonkey in Firefox, JavaScriptCore in
          Safari. It also has a <strong>garbage collector</strong> that
          automatically frees memory no longer in use.
        </p>

        <h4>The event loop (preview)</h4>
        <p>
          JavaScript is single-threaded, but the browser uses an{' '}
          <strong>event loop</strong> to handle async work — timers, network
          requests, user input — without blocking the main thread. That is why{' '}
          <code>fetch()</code> doesn&apos;t freeze the page while waiting for a
          server response. Covered in full detail later, in{' '}
          <code>js-async</code>.
        </p>
      </Topic>

      <Topic id="stacks" no="03" title="Front-end, back-end, full-stack">
        <p>
          <strong>Front-end</strong> is everything that runs in the user&apos;s
          browser: HTML, CSS, JS, the visual UI and interactivity.{' '}
          <strong>Back-end</strong> is server-side code — it handles business
          logic, talks to databases, authenticates users, and returns data to
          the front-end. Common languages: Node.js/ JavaScript, Python, Java,
          C#/.NET, Go, Ruby, PHP. <strong>Full-stack</strong> means comfortable
          working across both.
        </p>
        <p>
          A <strong>database</strong> is where persistent data lives.{' '}
          <strong>Relational (SQL)</strong> databases — PostgreSQL, MySQL, SQL
          Server — use structured tables with relationships and strong
          consistency. <strong>NoSQL</strong> databases — MongoDB (documents),
          Redis (key-value, often for caching), DynamoDB — trade rigid schema
          for flexibility and speed in specific access patterns.
        </p>
        <p>
          An <strong>ORM</strong> (Object-Relational Mapper) — Prisma, Entity
          Framework, Sequelize — lets you interact with a database using code
          objects instead of writing raw SQL.
        </p>
      </Topic>

      <Topic id="tooling" no="04" title="Developer tooling">
        <h4>Version control — Git</h4>
        <p>
          Git tracks changes to your code over time and enables collaboration.
        </p>
        <Bash
          code={`git init                      # start tracking a project
git add .                     # stage changes
git commit -m "message"       # save a snapshot
git branch feature-x          # create a new line of work
git checkout feature-x        # switch to it
git merge feature-x           # bring changes back into main
git push / git pull           # sync with a remote (GitHub, GitLab, Bitbucket)`}
        />
        <p>
          Work on features in isolated branches, merge via{' '}
          <strong>pull requests</strong> (PRs), which allow code review before
          merging. A <code>.gitignore</code> file tells Git which files to never
          track — <code>node_modules</code>, secrets, build output.
        </p>

        <h4>Package managers</h4>
        <p>
          Package managers manage third-party libraries your project depends on.
        </p>
        <Bash
          code={`npm install react     # npm - the original, ships with Node.js
yarn add react        # yarn - faster, deterministic installs via lockfiles
pnpm add react        # pnpm - saves disk space via a shared package store
bun add react         # bun - currently the fastest of the four`}
        />
        <p>
          <code>package.json</code> lists your dependencies and scripts.
          Lockfiles (<code>package-lock.json</code>, <code>yarn.lock</code>,{' '}
          <code>pnpm-lock.yaml</code>) pin exact versions so installs are
          reproducible across machines.
        </p>

        <h4>Browser DevTools</h4>
        <ul>
          <li>
            <strong>Elements/Inspector</strong> — view and edit the live DOM and
            CSS.
          </li>
          <li>
            <strong>Console</strong> — run JS, view logs and errors.
          </li>
          <li>
            <strong>Network tab</strong> — inspect every request, its timing,
            headers, and payload.
          </li>
          <li>
            <strong>Performance tab</strong> — record and analyze what&apos;s
            slow (layout thrashing, long JS tasks).
          </li>
          <li>
            <strong>Application tab</strong> — inspect cookies, localStorage,
            Service Workers, cache.
          </li>
          <li>
            <strong>Lighthouse</strong> — automated audits for performance,
            accessibility, SEO, best practices.
          </li>
        </ul>

        <h4>Code editors & extensions</h4>
        <p>
          VS Code is the dominant editor. Key add-ons: ESLint (catches code
          issues), Prettier (auto-formats code consistently), and
          language-specific extensions.
        </p>
      </Topic>

      <Topic id="http-apis" no="05" title="HTTP, APIs & data">
        <h4>HTTP methods</h4>
        <RefTable
          headers={['Method', 'Purpose', 'Idempotent?']}
          rows={[
            ['GET', 'Retrieve data', 'Yes'],
            ['POST', 'Create new data', 'No'],
            ['PUT', 'Replace a resource entirely', 'Yes'],
            ['PATCH', 'Partially update a resource', 'No (usually)'],
            ['DELETE', 'Remove a resource', 'Yes'],
          ]}
        />
        <p>
          Idempotent means calling it multiple times has the same effect as
          calling it once.
        </p>

        <h4>Status codes</h4>
        <RefTable
          headers={['Range', 'Meaning', 'Examples']}
          rows={[
            ['2xx', 'Success', '200 OK, 201 Created, 204 No Content'],
            [
              '3xx',
              'Redirection',
              '301 Moved Permanently, 304 Not Modified (cache hit)',
            ],
            [
              '4xx',
              'Client error',
              '400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests',
            ],
            [
              '5xx',
              'Server error',
              '500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable',
            ],
          ]}
        />

        <h4>Headers</h4>
        <p>
          Metadata sent with requests and responses — e.g.{' '}
          <code>Content-Type: application/json</code>,{' '}
          <code>Authorization: Bearer &lt;token&gt;</code>,{' '}
          <code>Cache-Control: max-age=3600</code>.
        </p>

        <h4>API styles</h4>
        <ul>
          <li>
            <strong>REST</strong> — resources as URLs (
            <code>/users/5/orders</code>), standard HTTP verbs, typically JSON
            responses. Simple, cacheable, widely understood.
          </li>
          <li>
            <strong>GraphQL</strong> — one endpoint; the client sends a query
            describing exactly the fields it needs, avoiding over-fetching.
            Great for complex nested data and mobile apps with limited
            bandwidth.
          </li>
          <li>
            <strong>WebSockets</strong> — a persistent, two-way connection for
            real-time features (chat, live notifications, collaborative editing)
            — unlike HTTP, either side can push data anytime without a new
            request.
          </li>
          <li>
            <strong>tRPC</strong> — type-safe function calls between a
            TypeScript front-end and back-end, no manual schema needed.
          </li>
        </ul>

        <h4>Authentication & authorization</h4>
        <p>
          <strong>Authentication</strong> is &quot;who are you?&quot; (login).{' '}
          <strong>Authorization</strong> is &quot;what are you allowed to
          do?&quot; (permissions). Common approaches: session cookies,{' '}
          <strong>JWT</strong> (JSON Web Tokens — signed tokens containing user
          claims), and <strong>OAuth 2.0</strong> (delegated login via Google,
          GitHub, and similar).
        </p>
      </Topic>

      <Topic id="rendering" no="06" title="Rendering strategies">
        <p>This determines where and when HTML is generated.</p>
        <RefTable
          headers={['Strategy', 'HTML built...', 'Pros', 'Cons']}
          rows={[
            [
              'CSR (Client-Side Rendering)',
              'In the browser, after JS downloads',
              'Rich interactivity, feels like an app',
              'Slow first paint, weak SEO by default, blank screen until JS loads',
            ],
            [
              'SSR (Server-Side Rendering)',
              'On the server, per request',
              'Fast first paint, good SEO, always fresh',
              'Server load per request, slower TTFB than static',
            ],
            [
              'SSG (Static Site Generation)',
              'At build time, once',
              'Extremely fast, cheap to host, CDN-cacheable',
              'Content is stale until rebuilt',
            ],
            [
              'ISR (Incremental Static Regeneration)',
              'At build time, then revalidated on a timer/on-demand',
              'Static speed with periodic freshness',
              'Slight staleness window',
            ],
            [
              'Streaming SSR',
              'On the server, sent in progressive chunks',
              'Fast perceived load even with slow data',
              'More complex to implement',
            ],
          ]}
        />
        <p>
          <strong>Hydration</strong>: after SSR/SSG sends static HTML, the
          browser downloads JS and &quot;hydrates&quot; it — attaching event
          listeners and making it interactive.{' '}
          <strong>Partial hydration / islands architecture</strong> (Astro,
          Qwik) only hydrates the specific interactive components, shipping far
          less JS overall.
        </p>
        <Callout>
          <strong>React Server Components (RSC)</strong> — a newer model where
          some components run exclusively on the server (query databases
          directly, never ship their JS to the browser) while others are marked
          Client Components for interactivity, which significantly reduces the
          client bundle size.
        </Callout>
      </Topic>

      <Topic id="architecture" no="07" title="Application architecture">
        <h4>Monolith vs. microservices</h4>
        <p>
          A <strong>monolith</strong> is one codebase and deployment for the
          whole application — simpler to build and reason about early on.{' '}
          <strong>Microservices</strong> split the backend into independent
          services (auth, payments, inventory) that communicate over the network
          — this scales teams and infrastructure independently, at the cost of
          operational complexity.
        </p>

        <h4>Micro-frontends</h4>
        <p>
          The frontend equivalent of microservices — independently built and
          deployed frontend modules composed into one app (via Webpack Module
          Federation, for example). Useful for very large organizations with
          multiple teams owning different parts of a UI; unnecessary complexity
          for small projects.
        </p>

        <h4>BFF (Backend-for-Frontend)</h4>
        <p>
          A thin backend layer built specifically to serve one frontend&apos;s
          needs — reshaping and aggregating calls to other internal services so
          the frontend doesn&apos;t make many round trips or deal with
          inconsistent APIs.
        </p>

        <h4>Edge computing</h4>
        <p>
          Code deployed to CDN points-of-presence physically close to users
          (Cloudflare Workers, Vercel Edge Functions, Deno Deploy). Used for
          things that must happen fast and before the main response: auth
          checks, geolocation-based redirects, A/B test bucketing,
          personalization headers.
        </p>

        <h4>Caching layers</h4>
        <ul>
          <li>
            <strong>Browser cache</strong> — controlled via{' '}
            <code>Cache-Control</code> headers.
          </li>
          <li>
            <strong>CDN cache</strong> — caches static assets (and sometimes
            full pages) at edge locations worldwide.
          </li>
          <li>
            <strong>Server-side cache</strong> (Redis, Memcached) — caches
            expensive database query results in memory.
          </li>
          <li>
            <strong>Application-level cache</strong> (TanStack Query, SWR) —
            caches API responses on the client to avoid redundant network calls.
          </li>
        </ul>
      </Topic>

      <Topic
        id="build-deploy"
        no="08"
        title="Build tools & deployment pipeline"
      >
        <h4>Why a build step?</h4>
        <p>
          Modern code — TypeScript, JSX, the latest JS syntax, Sass — isn&apos;t
          understood natively by all browsers, and you want to bundle many files
          into few, optimized ones. A <strong>bundler</strong> handles this.
        </p>
        <ul>
          <li>
            <strong>Vite</strong> — the current default; uses native ES modules
            during development for near-instant startup and hot-reload, and
            Rollup to bundle for production.
          </li>
          <li>
            <strong>Webpack</strong> — the older, still widely-used, highly
            configurable bundler.
          </li>
          <li>
            <strong>Turbopack / Rspack</strong> — newer Rust-based bundlers
            built for large-scale speed.
          </li>
          <li>
            <strong>esbuild</strong> — an extremely fast bundler/transpiler
            written in Go, often used inside other tools (like Vite) rather than
            directly.
          </li>
          <li>
            <strong>Bun</strong> — an all-in-one JS runtime, package manager,
            bundler, and test runner.
          </li>
        </ul>

        <h4>Transpilation & polyfills</h4>
        <p>
          <strong>Babel/SWC</strong> convert modern JS syntax into older syntax
          so it runs on older browsers. <strong>Polyfills</strong> are JS
          implementations of a missing browser feature (e.g. an old browser
          lacking <code>fetch</code>). Less needed today, since browser support
          for modern features has improved dramatically — check caniuse.com
          before assuming you need one.
        </p>

        <h4>CI/CD</h4>
        <p>
          <strong>CI</strong> (Continuous Integration): every code push
          automatically runs tests, linting, and builds to catch problems early
          (GitHub Actions, GitLab CI, CircleCI). <strong>CD</strong> (Continuous
          Deployment): passing builds are automatically deployed to staging or
          production. A typical pipeline: push code → run tests → build → deploy
          preview → merge → deploy production.
        </p>

        <h4>Monorepos</h4>
        <p>
          Multiple related packages/apps in one repository, managed with tools
          like <strong>Turborepo</strong> or <strong>Nx</strong>, which cache
          task results — unchanged packages don&apos;t rebuild or retest — and
          orchestrate cross-package dependencies.
        </p>
      </Topic>

      <Topic
        id="perf-a11y-sec-seo"
        no="09"
        title="Performance, accessibility, security & SEO"
      >
        <h4>Core Web Vitals</h4>
        <p>Google&apos;s real-world UX metrics:</p>
        <RefTable
          headers={['Metric', 'Measures', 'Target']}
          rows={[
            [
              'LCP (Largest Contentful Paint)',
              'Time until the biggest visible element renders',
              '< 2.5s',
            ],
            [
              'INP (Interaction to Next Paint)',
              'Responsiveness to user interaction (replaced FID in 2024)',
              '< 200ms',
            ],
            [
              'CLS (Cumulative Layout Shift)',
              'Visual stability — avoid content jumping',
              '< 0.1',
            ],
          ]}
        />

        <h4>Accessibility (a11y)</h4>
        <p>
          Building for people using screen readers, keyboard-only navigation, or
          with visual, motor, or cognitive differences isn&apos;t optional
          polish — it&apos;s core engineering practice, and often a legal
          requirement. Covered in depth in the HTML section.
        </p>

        <h4>Security fundamentals</h4>
        <ul>
          <li>
            <strong>XSS (Cross-Site Scripting)</strong> — an attacker injects
            malicious JS into your page. Prevent by sanitizing user input and
            avoiding raw <code>innerHTML</code>.
          </li>
          <li>
            <strong>CSRF (Cross-Site Request Forgery)</strong> — an attacker
            tricks a logged-in user&apos;s browser into making unwanted
            requests. Prevent with <code>SameSite</code> cookies and CSRF
            tokens.
          </li>
          <li>
            <strong>HTTPS everywhere</strong> — encrypts data in transit and is
            required for many modern browser APIs (Service Workers, geolocation)
            to even function.
          </li>
          <li>
            <strong>Content Security Policy (CSP)</strong> — an HTTP header
            restricting what scripts, styles, and resources a page is allowed to
            load.
          </li>
        </ul>

        <h4>SEO basics</h4>
        <ul>
          <li>
            Semantic HTML and proper heading hierarchy help search engines
            understand content.
          </li>
          <li>
            Fast-loading pages (good Core Web Vitals) are directly weighted in
            Google rankings.
          </li>
          <li>
            <code>&lt;meta name=&quot;description&quot;&gt;</code>, structured
            data (schema.org via JSON-LD), and a sitemap/robots.txt help search
            engines index your site correctly.
          </li>
          <li>
            SSR/SSG matters for SEO because crawlers historically struggle with
            content that only appears after JS executes — this has improved but
            isn&apos;t universal or instant.
          </li>
        </ul>
      </Topic>

      <ModuleTitle>HTML</ModuleTitle>

      <Topic id="html-anatomy" no="10" title="Document anatomy">
        <Html
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`}
        />
        <ul>
          <li>
            <code>&lt;!DOCTYPE html&gt;</code> triggers standards-mode
            rendering.
          </li>
          <li>
            <code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> is
            near-universally needed for correct character rendering.
          </li>
          <li>
            <code>&lt;meta name=&quot;viewport&quot; ...&gt;</code> is mandatory
            for responsive layouts on mobile — without it, mobile browsers
            render at a fake &quot;desktop&quot; width and zoom out.
          </li>
          <li>
            The <code>lang</code> attribute is used by screen readers and
            translators to pick correct pronunciation and translation rules.
          </li>
        </ul>
      </Topic>

      <Topic id="html-text" no="11" title="Text, lists & tables">
        <Html
          code={`<h1>Main Title</h1>       <!-- use h1-h6 in order, one h1 per page ideally -->
<p>A paragraph.</p>
<strong>Important</strong> <em>Emphasized</em>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link</a>

<ul><li>Unordered item</li></ul>
<ol><li>Ordered item</li></ol>
<dl>
  <dt>Term</dt><dd>Definition</dd>
</dl>

<table>
  <thead><tr><th>Name</th><th>Age</th></tr></thead>
  <tbody><tr><td>Alice</td><td>30</td></tr></tbody>
</table>`}
        />
        <p>
          <code>rel=&quot;noopener noreferrer&quot;</code> on{' '}
          <code>target=&quot;_blank&quot;</code> links prevents the new page
          from accessing <code>window.opener</code> — a security and performance
          best practice.
        </p>
      </Topic>

      <Topic id="html-images" no="12" title="Images & basic media">
        <Html
          code={`<img src="photo.jpg" alt="A description of the photo" width="600" height="400">`}
        />
        <ul>
          <li>
            <code>alt</code> is mandatory for accessibility and SEO — describe
            the image&apos;s content or purpose, or leave it empty (
            <code>alt=&quot;&quot;</code>) if purely decorative.
          </li>
          <li>
            Always set <code>width</code>/<code>height</code> (even if CSS
            overrides the display size) so the browser can reserve space and
            avoid layout shift before the image loads.
          </li>
        </ul>
      </Topic>

      <Topic id="html-semantic" no="13" title="Semantic layout elements">
        <Html
          code={`<header>Site header / logo / nav</header>
<nav>Primary navigation</nav>
<main>
  <article>
    <h2>Blog Post Title</h2>
    <section>A distinct section of content</section>
  </article>
  <aside>Related links / sidebar</aside>
</main>
<footer>Copyright, links</footer>`}
        />
        <p>
          Semantic elements create <strong>landmarks</strong> that screen reader
          users can jump between, and give search engines structural signal —
          this is largely &quot;free&quot; SEO and accessibility, just from
          choosing the right tag.
        </p>
      </Topic>

      <Topic id="html-forms" no="14" title="Forms in depth">
        <Html
          code={`<form action="/submit" method="POST" novalidate>
  <fieldset>
    <legend>Contact Info</legend>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required
           placeholder="you@example.com" autocomplete="email">

    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}">

    <label for="dob">Date of Birth</label>
    <input type="date" id="dob" name="dob">

    <label for="volume">Volume</label>
    <input type="range" id="volume" name="volume" min="0" max="100" step="5">

    <label for="favColor">Favorite Color</label>
    <input type="color" id="favColor" name="favColor">

    <label for="resume">Upload Resume</label>
    <input type="file" id="resume" name="resume" accept=".pdf,.docx">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="us">United States</option>
      <option value="in">India</option>
    </select>

    <label>
      <input type="checkbox" name="subscribe"> Subscribe to newsletter
    </label>

    <button type="submit">Submit</button>
  </fieldset>
</form>`}
        />
        <h4>Native validation — no JS required for basic cases</h4>
        <ul>
          <li>
            <code>required</code>, <code>minlength</code>/<code>maxlength</code>
            , <code>min</code>/<code>max</code>, <code>pattern</code> (regex),
            and <code>type=&quot;email&quot;</code>/
            <code>type=&quot;url&quot;</code> built-in format checks.
          </li>
          <li>
            CSS hooks: <code>:valid</code>, <code>:invalid</code>, and{' '}
            <code>:user-invalid</code> — the last one only flags invalid{' '}
            <em>after</em> the user has interacted with the field, avoiding red
            borders while they&apos;re still typing.
          </li>
          <li>
            <code>&lt;input list=&quot;...&quot;&gt;</code> +{' '}
            <code>&lt;datalist&gt;</code> gives free autocomplete suggestions.
          </li>
          <li>
            JS API: <code>input.checkValidity()</code>,{' '}
            <code>input.reportValidity()</code>,{' '}
            <code>input.setCustomValidity(&quot;message&quot;)</code> for custom
            rules.
          </li>
        </ul>
      </Topic>

      <Topic id="html-responsive-media" no="15" title="Responsive media">
        <Html
          code={`<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero banner" loading="lazy" decoding="async" fetchpriority="high">
</picture>

<img
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
  src="medium.jpg"
  alt="Responsive image">

<video controls poster="thumbnail.jpg" preload="metadata">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>`}
        />
        <ul>
          <li>
            <code>&lt;picture&gt;</code> lets the browser choose the smallest
            supported format — AVIF, then WebP, then JPEG, in typical size
            order.
          </li>
          <li>
            <code>srcset</code>/<code>sizes</code> serve differently-sized
            images per viewport — a phone shouldn&apos;t download a 4K image.
          </li>
          <li>
            <code>loading=&quot;lazy&quot;</code> defers offscreen images and
            iframes natively.
          </li>
          <li>
            <code>fetchpriority=&quot;high&quot;</code> on your LCP element
            tells the browser to fetch it before other resources.
          </li>
          <li>
            <code>decoding=&quot;async&quot;</code> lets the browser decode the
            image off the main thread.
          </li>
        </ul>
      </Topic>

      <Topic
        id="html-interactive"
        no="16"
        title="Native interactive elements (zero JS needed)"
      >
        <h4>
          <code>&lt;dialog&gt;</code> — a real modal
        </h4>
        <p>Built-in focus trapping, Esc-to-close, and a styleable backdrop:</p>
        <Html
          code={`<dialog id="confirmDialog">
  <p>Are you sure?</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</dialog>

<button onclick="confirmDialog.showModal()">Delete</button>`}
        />
        <Css code={`dialog::backdrop { background: rgba(0,0,0,0.5); }`} />

        <h4>
          <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> — native
          accordion
        </h4>
        <Html
          code={`<details>
  <summary>What's your refund policy?</summary>
  <p>Full refunds within 30 days.</p>
</details>`}
        />
        <p>
          Multiple <code>&lt;details&gt;</code> can share a <code>name</code>{' '}
          attribute so opening one automatically closes the others — a native
          accordion group:
        </p>
        <Html
          code={`<details name="faq"><summary>Q1</summary><p>A1</p></details>
<details name="faq"><summary>Q2</summary><p>A2</p></details>`}
        />

        <h4>Popover API</h4>
        <p>
          Tooltips, menus, and non-modal popups without a positioning library:
        </p>
        <Html
          code={`<button popovertarget="info-popover">Info</button>
<div id="info-popover" popover>
  Here's some extra info, dismissible by clicking outside.
</div>`}
        />

        <h4>
          <code>inert</code>
        </h4>
        <p>
          Freezes an entire subtree from focus and interaction — useful for
          background content while a modal is open:
        </p>
        <Html code={`<div id="page-content" inert>...</div>`} />
      </Topic>

      <Topic id="html-a11y" no="17" title="Accessibility (ARIA & beyond)">
        <p>
          Rule #1: use native semantic HTML wherever possible. A{' '}
          <code>&lt;button&gt;</code> is keyboard-accessible, focusable, and
          announced correctly by default; a <code>&lt;div onclick&gt;</code> is
          none of those things without extra ARIA and JS work.
        </p>
        <p>
          <strong>ARIA roles</strong> fill gaps where no native element exists:
        </p>
        <Html
          code={`<div role="alert">Your session is about to expire.</div>
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
</div>`}
        />
        <p>
          <code>aria-live</code> regions announce dynamic content changes to
          screen readers without moving focus:
        </p>
        <Html
          code={`<div aria-live="polite" id="status"></div>
<!-- JS: document.getElementById('status').textContent = "Item added to cart"; -->`}
        />
        <p>
          <code>polite</code> waits for the screen reader to finish current
          speech; <code>assertive</code> interrupts immediately (use sparingly,
          for critical alerts).
        </p>
        <ul>
          <li>
            <strong>Focus management</strong>: in single-page apps, move focus
            to the new view&apos;s heading after a route change, since
            there&apos;s no full page reload to reset focus naturally.
          </li>
          <li>
            <strong>Skip links</strong>: a hidden-until-focused link at the top
            of the page letting keyboard users jump past navigation.
          </li>
          <li>
            <strong>Color contrast</strong>: WCAG AA requires 4.5:1 for normal
            text and 3:1 for large text — check with browser DevTools&apos;
            contrast checker.
          </li>
        </ul>
        <Html
          code={`<a href="#main-content" class="skip-link">Skip to main content</a>`}
        />
      </Topic>

      <Topic id="html-webcomponents" no="18" title="Web Components">
        <p>
          Native, framework-agnostic reusable components with true style
          encapsulation.
        </p>
        <Html
          code={`<template id="star-rating-template">
  <style>
    :host { display: inline-block; }
    span { cursor: pointer; color: gold; }
  </style>
  <div><slot></slot></div>
</template>`}
        />
        <Js
          code={`class StarRating extends HTMLElement {
  static observedAttributes = ['value'];

  connectedCallback() {
    const template = document.getElementById('star-rating-template');
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // react to attribute changes
  }
}
customElements.define('star-rating', StarRating);`}
        />
        <Html code={`<star-rating value="4"></star-rating>`} />
        <ul>
          <li>
            <strong>Custom Elements</strong>: register new HTML tags with their
            own lifecycle (<code>connectedCallback</code>,{' '}
            <code>disconnectedCallback</code>,{' '}
            <code>attributeChangedCallback</code>).
          </li>
          <li>
            <strong>Shadow DOM</strong>:{' '}
            <code>attachShadow(&#123; mode: &apos;open&apos; &#125;)</code>{' '}
            creates an encapsulated DOM/CSS scope — styles inside never leak
            out, and outside styles mostly don&apos;t leak in.
          </li>
          <li>
            <strong>
              <code>&lt;slot&gt;</code>
            </strong>
            : lets consumers of your component pass in their own child content,
            like <code>children</code> in React.
          </li>
        </ul>
        <Callout>
          Design systems (Shoelace, Ionic) build on Web Components specifically
          because they work identically in React, Vue, Angular, or no framework
          at all.
        </Callout>
      </Topic>

      <Topic id="html-seo" no="19" title="Metadata, SEO & social sharing">
        <Html
          code={`<head>
  <title>Page Title | Site Name</title>
  <meta name="description" content="A concise, compelling summary under 160 characters.">
  <link rel="canonical" href="https://example.com/page">

  <!-- Open Graph (Facebook, LinkedIn, etc.) -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Summary for social sharing.">
  <meta property="og:image" content="https://example.com/preview.jpg">
  <meta property="og:type" content="website">

  <!-- Twitter/X Card -->
  <meta name="twitter:card" content="summary_large_image">
</head>`}
        />
        <p>
          Structured data via JSON-LD helps search engines show rich results:
        </p>
        <Html
          code={`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Wireless Headphones",
  "offers": { "@type": "Offer", "price": "99.99", "priceCurrency": "USD" }
}
</script>`}
        />
      </Topic>

      <ModuleTitle>CSS</ModuleTitle>

      <Topic id="css-selectors" no="20" title="Selectors & the box model">
        <Css
          code={`element { }             /* type selector */
.class-name { }
#id-name { }
element.class { }       /* combined */
parent > child { }      /* direct child */
ancestor descendant { } /* any depth */
sibling + sibling { }   /* immediately after */
sibling ~ sibling { }   /* any sibling after */`}
        />
        <p>
          The box model: every element is{' '}
          <code>content → padding → border → margin</code>.
        </p>
        <Css
          code={`* {
  box-sizing: border-box; /* width/height include padding & border - set this globally, always */
}`}
        />
      </Topic>

      <Topic id="css-units" no="21" title="Units, colors & typography">
        <ul>
          <li>
            <strong>Length units</strong>: <code>px</code> (absolute),{' '}
            <code>%</code> (relative to parent), <code>em</code> (relative to
            the current element&apos;s font-size), <code>rem</code> (relative to
            the root <code>&lt;html&gt;</code> font-size — the preferred default
            for consistent scaling).
          </li>
          <li>
            <strong>Colors</strong>: <code>#hex</code>,{' '}
            <code>rgb(255 0 0)</code>, <code>rgb(255 0 0 / 50%)</code> (with
            alpha), <code>hsl(0 100% 50%)</code>.
          </li>
          <li>
            <strong>Typography</strong>: <code>font-family</code>,{' '}
            <code>font-size</code>, <code>font-weight</code>,{' '}
            <code>line-height</code> (unitless values like <code>1.5</code> are
            preferred — they scale with font-size), <code>letter-spacing</code>,{' '}
            <code>text-transform</code>.
          </li>
        </ul>
        <Css
          code={`body {
  font-family: system-ui, -apple-system, sans-serif; /* uses the OS's native font, zero download */
  line-height: 1.5;
}`}
        />
      </Topic>

      <Topic id="css-flexbox" no="22" title="Flexbox (one-dimensional layout)">
        <Css
          code={`.container {
  display: flex;
  flex-direction: row;           /* or column */
  justify-content: space-between; /* main-axis alignment: flex-start, center, space-around, space-evenly */
  align-items: center;            /* cross-axis alignment: flex-start, center, stretch */
  flex-wrap: wrap;                /* allow items to wrap onto new lines */
  gap: 1rem;                      /* spacing between items - replaces margin hacks */
}
.item {
  flex: 1;          /* shorthand for flex-grow: 1; flex-shrink: 1; flex-basis: 0 - grow to fill space equally */
  flex-shrink: 0;    /* prevent this item from shrinking below its content size */
}`}
        />
        <p>
          Use Flexbox for navbars, button groups, form rows, centering content —
          any single-axis layout.
        </p>
      </Topic>

      <Topic id="css-grid" no="23" title="Grid (two-dimensional layout)">
        <Css
          code={`.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* fixed sidebar, two flexible columns */
  grid-template-rows: auto 1fr auto;    /* header, content, footer */
  grid-template-areas:
    "sidebar header header"
    "sidebar main    main"
    "sidebar footer  footer";
  gap: 1rem;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}
        />
        <p>Auto-responsive grid, no media queries needed:</p>
        <Css
          code={`.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}`}
        />
        <p>
          This fits as many 220px-minimum columns as the container allows,
          reflowing automatically as the viewport resizes.
        </p>
      </Topic>

      <Topic id="css-responsive" no="24" title="Responsive design techniques">
        <Css
          code={`/* Mobile-first: base styles target small screens; media queries add complexity upward */
.card { padding: 1rem; font-size: 1rem; }

@media (min-width: 768px) {
  .card { padding: 2rem; font-size: 1.125rem; }
}`}
        />
        <p>Fluid values without breakpoints:</p>
        <Css
          code={`h1 {
  font-size: clamp(1.5rem, 1rem + 3vw, 3rem); /* min, preferred (viewport-based), max */
}
.container {
  width: min(90%, 1200px); /* never exceeds 1200px, but shrinks on small screens */
}`}
        />
        <p>
          Modern viewport units fix the classic mobile browser-chrome height
          bug:
        </p>
        <Css
          code={`.hero {
  min-height: 100dvh; /* dynamic viewport height - updates as address bar shows/hides */
}`}
        />
        <ul>
          <li>
            <code>svh</code> = small viewport height (assumes browser UI
            visible)
          </li>
          <li>
            <code>lvh</code> = large viewport height (assumes browser UI hidden)
          </li>
          <li>
            <code>dvh</code> = dynamic — live-updates as the UI appears or
            disappears (generally what you want)
          </li>
        </ul>
      </Topic>

      <Topic id="css-custom-props" no="25" title="Custom properties & theming">
        <Css
          code={`:root {
  --color-primary: #3b82f6;
  --color-text: #1f2937;
  --space-unit: 8px;
  --radius: 8px;
}

.button {
  background: var(--color-primary);
  color: white;
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);
  border-radius: var(--radius);
}`}
        />
        <p>
          Automatic dark mode with <code>light-dark()</code>:
        </p>
        <Css
          code={`:root {
  color-scheme: light dark; /* tells the browser both themes are supported */
  --bg: light-dark(#ffffff, #121212);
  --text: light-dark(#111111, #eeeeee);
}
body {
  background: var(--bg);
  color: var(--text);
}`}
        />
        <p>
          This switches automatically based on the OS/browser&apos;s light/dark
          preference — no JS or media query needed for the basic case. For a
          manual toggle, override with{' '}
          <code>
            :root[data-theme=&quot;dark&quot;] &#123; color-scheme: dark; &#125;
          </code>{' '}
          and set the attribute via JS.
        </p>
      </Topic>

      <Topic id="css-container-queries" no="26" title="Container queries">
        <p>
          Style a component based on <em>its own container&apos;s</em> size —
          not the viewport. This is the single biggest recent shift in CSS for
          building genuinely reusable components: a card should look different
          in a narrow sidebar vs. a wide main area, regardless of overall screen
          size.
        </p>
        <Css
          code={`.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

.card { display: block; }

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}`}
        />
      </Topic>

      <Topic
        id="css-has"
        no="27"
        title=":has() — the parent/relational selector"
      >
        <p>
          Style an element based on its descendants or subsequent siblings —
          logic that previously required JavaScript.
        </p>
        <Css
          code={`/* Card layout changes if it contains an image */
.card:has(img) { grid-template-columns: 100px 1fr; }

/* Highlight a form-group when its input is invalid */
.form-group:has(input:invalid) { border-color: crimson; }

/* Style a label when its checkbox is checked */
.option:has(input:checked) { background: #eef; }

/* Dim everything except a hovered sibling group */
.list:has(.item:hover) .item:not(:hover) { opacity: 0.5; }`}
        />
      </Topic>

      <Topic id="css-subgrid-nesting" no="28" title="Subgrid & native nesting">
        <p>
          <strong>Subgrid</strong> lets a nested grid align to its parent&apos;s
          tracks — solving the classic &quot;cards in a row need their internal
          elements to line up across cards&quot; problem:
        </p>
        <Css
          code={`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
}
.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid; /* inherits the parent's row tracks so titles/prices/buttons align */
}`}
        />
        <p>
          <strong>Native CSS nesting</strong> — Sass-like syntax, no
          preprocessor required:
        </p>
        <Css
          code={`.card {
  padding: 1rem;
  border: 1px solid #ddd;

  & .title {
    font-weight: bold;
    font-size: 1.25rem;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
}`}
        />
      </Topic>

      <Topic id="css-layers" no="29" title="Cascade layers">
        <p>
          Explicit, order-based control over which CSS &quot;wins&quot; —
          independent of selector specificity. Solves the classic problem of a
          utility class losing to a component class purely because of
          specificity math.
        </p>
        <Css
          code={`@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; box-sizing: border-box; }
}
@layer components {
  .btn { padding: 0.5rem 1rem; background: blue; }
}
@layer utilities {
  .bg-red { background: red; } /* wins over .btn's background even though .btn is more specific,
                                    because utilities layer is declared last */
}`}
        />
        <Deepdive>
          Layers declared later always beat layers declared earlier, regardless
          of specificity within them — this is the opposite of normal cascade
          rules, and it&apos;s exactly why it&apos;s useful for managing resets
          vs. frameworks vs. your own overrides.
        </Deepdive>
      </Topic>

      <Topic
        id="css-modern-selectors"
        no="30"
        title="Modern selectors: :is(), :where(), :focus-visible"
      >
        <Css
          code={`/* :is() groups selectors, takes on the highest specificity among them */
:is(h1, h2, h3) { font-family: serif; }

/* :where() does the same but ALWAYS has zero specificity - ideal for resets/libraries
   so consumers can override it trivially */
:where(ul, ol) { list-style: none; }

/* :focus-visible only shows a focus ring for keyboard navigation, not mouse clicks */
button:focus-visible { outline: 2px solid blue; }
button:focus:not(:focus-visible) { outline: none; }`}
        />
      </Topic>

      <Topic
        id="css-animation"
        no="31"
        title="Animation: transitions, keyframes, scroll & view transitions"
      >
        <h4>Fundamentals</h4>
        <Css
          code={`.button {
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.button:hover { background-color: darkblue; transform: translateY(-2px); }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.toast { animation: fadeIn 0.3s ease-out; }`}
        />
        <Deepdive>
          Animate <code>transform</code> and <code>opacity</code> wherever
          possible — these are handled by the compositor and skip Layout and
          Paint entirely, unlike animating <code>width</code>, <code>top</code>,
          or <code>margin</code>.
        </Deepdive>

        <h4>Scroll-driven animations</h4>
        <p>Native, no JS or IntersectionObserver needed:</p>
        <Css
          code={`@keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.progress-bar {
  transform-origin: left;
  animation: grow linear;
  animation-timeline: scroll(); /* ties animation progress directly to page scroll position */
}`}
        />

        <h4>View Transitions API</h4>
        <p>
          Smooth, automatic animated transitions between DOM states, even across
          full page navigations in supporting browsers:
        </p>
        <Css
          code={`::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.3s;
}`}
        />
        <Js
          code={`// Only wrap the DOM update - the browser handles the crossfade/transition automatically
document.startViewTransition(() => {
  updateDOMContent();
});`}
        />

        <h4>
          <code>@starting-style</code>
        </h4>
        <p>
          Enables true &quot;enter&quot; transitions on elements as they&apos;re
          inserted into the DOM — previously required a JS-driven{' '}
          <code>requestAnimationFrame</code> hack:
        </p>
        <Css
          code={`.popover {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.3s, transform 0.3s;

  @starting-style {
    opacity: 0;
    transform: scale(0.9);
  }
}`}
        />
      </Topic>

      <Topic
        id="css-property"
        no="32"
        title="Animatable custom properties with @property"
      >
        <p>
          Browsers normally can&apos;t smoothly interpolate a custom property
          because it&apos;s just treated as text. <code>@property</code> gives
          it a real type, making it animatable.
        </p>
        <Css
          code={`@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.gradient-box {
  --angle: 0deg;
  background: conic-gradient(from var(--angle), red, orange, yellow, red);
  transition: --angle 1s ease;
}
.gradient-box:hover { --angle: 360deg; } /* now animates smoothly instead of snapping */`}
        />
      </Topic>

      <Topic id="css-best-practices" no="33" title="Best practices checklist">
        <ul>
          <li>
            Mobile-first (<code>min-width</code> media queries), not
            desktop-first.
          </li>
          <li>
            Logical properties (<code>margin-inline</code>,{' '}
            <code>padding-block</code>, <code>inset-inline-start</code>) instead
            of <code>left</code>/<code>right</code>/<code>top</code>/
            <code>bottom</code> — future-proofs for right-to-left languages.
          </li>
          <li>
            <code>:where()</code> for zero-specificity groupings in shared/reset
            styles.
          </li>
          <li>
            <code>:focus-visible</code> over <code>:focus</code> to avoid
            visible outlines on mouse clicks while preserving them for keyboard
            users.
          </li>
          <li>
            Reach for <code>@layer</code> before <code>!important</code> when
            fighting specificity issues.
          </li>
          <li>
            Use a CSS reset (or a utility framework&apos;s preflight) as a
            consistent baseline across browsers.
          </li>
        </ul>
      </Topic>

      <ModuleTitle>JavaScript</ModuleTitle>

      <Topic id="js-variables" no="34" title="Variables, types & operators">
        <Js
          code={`let count = 0;          // block-scoped, reassignable
const name = "Alice";   // block-scoped, cannot be reassigned (object contents can still mutate)
var old = "avoid this";  // function-scoped, legacy - avoid in modern code

typeof count;   // "number"
typeof name;    // "string"
typeof true;    // "boolean"
typeof undefined; // "undefined"
typeof null;    // "object" (a famous, permanent JS quirk)`}
        />
        <p>
          Primitive types: <code>string</code>, <code>number</code>,{' '}
          <code>boolean</code>, <code>null</code>, <code>undefined</code>,{' '}
          <code>symbol</code>, <code>bigint</code>. Reference types:{' '}
          <code>object</code>, <code>array</code>, <code>function</code> (all
          technically objects).
        </p>
      </Topic>

      <Topic id="js-functions" no="35" title="Functions">
        <Js
          code={`function add(a, b) { return a + b; }             // function declaration - hoisted
const subtract = function (a, b) { return a - b; }; // function expression - not hoisted
const multiply = (a, b) => a * b;                 // arrow function - no own \`this\`

function greet(name = "Guest") { return "Hi, " + name; } // default parameter
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); } // rest parameters`}
        />
      </Topic>

      <Topic
        id="js-control-flow"
        no="36"
        title="Control flow, arrays & objects"
      >
        <Js
          code={`if (count > 0) { /* ... */ } else if (count === 0) { /* ... */ } else { /* ... */ }

for (let i = 0; i < 5; i++) { /* ... */ }
for (const item of ["a", "b"]) { /* iterate values */ }
for (const key in { a: 1, b: 2 }) { /* iterate keys */ }

const arr = [1, 2, 3, 4];
arr.map(x => x * 2);              // [2,4,6,8] - transform
arr.filter(x => x % 2 === 0);     // [2,4] - keep matching
arr.reduce((sum, x) => sum + x, 0); // 10 - accumulate
arr.find(x => x > 2);              // 3 - first match
arr.some(x => x > 3);              // true - any match?
arr.every(x => x > 0);             // true - all match?

const person = { name: "Alice", age: 30 };
const { name, age } = person;       // destructuring
const { name: n = "Unknown" } = {}; // destructuring with default + rename
const arr2 = [...arr, 5];            // spread - creates a new array
const merged = { ...person, city: "NYC" }; // spread - creates a new object`}
        />
      </Topic>

      <Topic id="js-dom-events" no="37" title="The DOM & events">
        <Js
          code={`const el = document.querySelector('.my-class');       // first match
const all = document.querySelectorAll('.my-class');   // all matches (NodeList)

el.textContent = "Updated text";  // safe - treats input as plain text
el.classList.add('active');
el.classList.toggle('hidden');
el.setAttribute('data-id', '42');

el.addEventListener('click', (event) => {
  console.log('Clicked!', event.target);
});

const newEl = document.createElement('div');
newEl.textContent = "I'm new";
document.body.appendChild(newEl);`}
        />
        <p>
          <strong>Event delegation</strong> — attach one listener to a parent
          instead of many to children (efficient, and works for
          dynamically-added children):
        </p>
        <Js
          code={`document.querySelector('.list').addEventListener('click', (event) => {
  if (event.target.matches('.list-item')) {
    console.log('Item clicked:', event.target.textContent);
  }
});`}
        />
      </Topic>

      <Topic
        id="js-modern-syntax"
        no="38"
        title="Modern syntax (ES2020–ES2024)"
      >
        <Js
          code={`// Optional chaining - safely access deeply nested properties
const city = user?.address?.city;          // undefined instead of throwing, if any link is missing
user?.greet?.();                            // safely call a method that might not exist

// Nullish coalescing - fallback ONLY for null/undefined (not 0, "", or false)
const displayName = user.name ?? "Anonymous";
const count = settings.count ?? 10; // 0 would be kept as 0, unlike with \`||\``}
        />
        <Js
          code={`// Immutable array methods (ES2023) - return a NEW array, don't mutate the original
const sorted = arr.toSorted((a, b) => a - b);
const reversed = arr.toReversed();
const updated = arr.with(0, 99);    // replace index 0 -> new array
const spliced = arr.toSpliced(1, 1); // remove index 1 -> new array

// Object.groupBy / Map.groupBy (ES2024)
const grouped = Object.groupBy(people, person => person.department);
// { engineering: [...], sales: [...] }`}
        />
        <Js
          code={`// Private class fields & methods
class Counter {
  #count = 0;              // truly private - inaccessible outside the class
  #validate() { /* private method */ }
  increment() { this.#count++; }
  get value() { return this.#count; }
}

// Static class blocks - run once when the class is defined
class Config {
  static settings;
  static {
    Config.settings = loadSettingsSomehow();
  }
}

// structuredClone - native deep cloning
const original = { nested: { a: 1 } };
const clone = structuredClone(original); // fully independent deep copy

// Array.fromAsync - build an array from an async iterable
const items = await Array.fromAsync(asyncGenerator());`}
        />
      </Topic>

      <Topic id="js-async" no="39" title="Async JavaScript & the event loop">
        <h4>Evolution: callbacks → Promises → async/await</h4>
        <Js
          code={`// Promise-based
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Failed:', err));

// async/await - reads like synchronous code, generally preferred
async function loadData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Failed:', err);
  }
}`}
        />
        <h4>Combining multiple async operations</h4>
        <Js
          code={`// Wait for all - fails fast if ANY rejects
const [userRes, ordersRes] = await Promise.all([fetchUser(), fetchOrders()]);

// Wait for all, get outcome of each - never fails fast
const results = await Promise.allSettled([fetchA(), fetchB()]);
results.forEach(r => r.status === 'fulfilled' ? console.log(r.value) : console.error(r.reason));

// First to resolve successfully wins (ignores rejections unless all reject)
const fastest = await Promise.any([fetchFromMirrorA(), fetchFromMirrorB()]);

// First to SETTLE (success or failure) wins - useful for timeouts
const winner = await Promise.race([fetchData(), timeout(5000)]);`}
        />
        <h4>Cancelling requests</h4>
        <Js
          code={`const controller = new AbortController();
fetch('/api/data', { signal: controller.signal })
  .catch(err => { if (err.name === 'AbortError') console.log('Cancelled'); });

// Cancel it (e.g., user navigated away)
controller.abort();

// Built-in timeout shortcut
fetch('/api/data', { signal: AbortSignal.timeout(5000) });`}
        />
        <h4>The event loop, in detail</h4>
        <p>
          JS has one call stack, but async work is handled via the event loop:
          synchronous code runs first on the <strong>call stack</strong>;{' '}
          <code>Promise</code> callbacks (<code>.then</code>, <code>await</code>{' '}
          continuations) go to the <strong>microtask queue</strong>, processed
          immediately after the current synchronous code finishes, before
          anything else; <code>setTimeout</code>, DOM events, and similar go to
          the <strong>macrotask (task) queue</strong>, processed only after all
          microtasks are drained.
        </p>
        <Js
          code={`console.log('1');
setTimeout(() => console.log('2'), 0);     // macrotask
Promise.resolve().then(() => console.log('3')); // microtask
console.log('4');
// Output order: 1, 4, 3, 2  - sync first, then microtasks, then macrotasks`}
        />
      </Topic>

      <Topic id="js-modules" no="40" title="ES modules">
        <Js
          code={`// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;
export default class Calculator { /* ... */ }

// main.js
import Calculator, { add, PI } from './math.js';
import * as MathUtils from './math.js'; // namespace import

// Dynamic import - loads code on demand, enables code-splitting
button.addEventListener('click', async () => {
  const { default: HeavyChart } = await import('./HeavyChart.js');
  new HeavyChart().render();
});`}
        />
        <p>
          <strong>Import maps</strong> let the browser resolve bare specifiers
          (like <code>import &quot;lodash&quot;</code>) without a bundler, by
          mapping them explicitly in HTML:
        </p>
        <Html
          code={`<script type="importmap">
{ "imports": { "lodash": "https://cdn.example.com/lodash.js" } }
</script>`}
        />
      </Topic>

      <Topic id="js-closures-this" no="41" title="Closures, this & prototypes">
        <p>
          <strong>Closures</strong> — a function retains access to its defining
          scope&apos;s variables even after that scope has finished executing:
        </p>
        <Js
          code={`function makeCounter() {
  let count = 0;
  return () => ++count; // this inner function "closes over" \`count\`
}
const counter = makeCounter();
counter(); // 1
counter(); // 2 - count persisted between calls, privately`}
        />
        <p>
          <strong>this binding rules</strong> depend on how a function is
          called, not where it&apos;s defined — except arrow functions:
        </p>
        <Js
          code={`const obj = {
  name: "Alice",
  regular() { console.log(this.name); },     // \`this\` = obj, when called as obj.regular()
  arrow: () => { console.log(this.name); },   // \`this\` = outer scope, NOT obj - a common bug source
};`}
        />
        <p>
          <code>call()</code>, <code>apply()</code>, and <code>bind()</code>{' '}
          explicitly set <code>this</code>:
        </p>
        <Js
          code={`function greet() { console.log("Hi, " + this.name); }
greet.call({ name: "Bob" });          // "Hi, Bob"
const boundGreet = greet.bind({ name: "Carol" });
boundGreet();                          // "Hi, Carol"`}
        />
        <p>
          <strong>Prototypes</strong> are the mechanism behind JS inheritance —
          every object has a hidden link to another object it inherits from:
        </p>
        <Js
          code={`class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name + " makes a sound"); }
}
class Dog extends Animal {
  speak() { console.log(this.name + " barks"); } // overrides parent method
  parentSpeak() { super.speak(); }                 // explicitly call parent's version
}`}
        />
        <Deepdive>
          Classes are &quot;syntactic sugar&quot; over JS&apos;s underlying
          prototype chain — understanding this explains why methods are shared
          across instances efficiently: they live on the prototype, not copied
          per-instance.
        </Deepdive>
      </Topic>

      <Topic id="js-observers" no="42" title="Browser observer APIs">
        <Js
          code={`// IntersectionObserver - detect visibility changes (lazy loading, infinite scroll, animations on scroll-into-view)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop watching once triggered
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ResizeObserver - react to an element's own size changing (not just window resize)
const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    console.log('New width:', entry.contentRect.width);
  }
});
resizeObserver.observe(document.querySelector('.resizable-panel'));

// MutationObserver - react to DOM structure/attribute changes (useful for third-party widget integration)
const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(m => console.log(m.type, m.target));
});
mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true });`}
        />
      </Topic>

      <Topic id="js-workers" no="43" title="Web Workers & Service Workers">
        <p>
          <strong>Web Workers</strong> run CPU-intensive JS off the main thread
          so the UI stays responsive:
        </p>
        <Js
          code={`// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

// main.js
const worker = new Worker('worker.js');
worker.postMessage(largeDataset);
worker.onmessage = (e) => console.log('Result:', e.data);
worker.onerror = (e) => console.error('Worker error:', e.message);`}
        />
        <p>
          <strong>Service Workers</strong> intercept network requests, enabling
          offline support and the foundation of PWAs:
        </p>
        <Js
          code={`// Registering it (main.js)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

// sw.js - cache-first strategy with network fallback
const CACHE_NAME = 'v1';
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(['/', '/styles.css', '/app.js']))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});`}
        />
      </Topic>

      <Topic id="js-state" no="44" title="State management patterns">
        <p>
          <strong>Signals</strong> are fine-grained reactivity that&apos;s
          replacing large global stores in many modern frameworks (Solid, Preact
          Signals, Vue&apos;s <code>ref</code>, Angular Signals):
        </p>
        <Js
          code={`// Conceptual example (API varies slightly per library)
const count = signal(0);
const doubled = computed(() => count.value * 2);

effect(() => {
  console.log('Count is now:', count.value); // reruns automatically when count changes
});

count.value++; // ONLY updates the specific DOM nodes/computations that depend on \`count\``}
        />
        <p>
          This differs from older &quot;re-render the whole component&quot;
          models — signals track exactly which computations depend on which
          values, updating only what&apos;s necessary.
        </p>
        <h4>Splitting state by nature</h4>
        <ul>
          <li>
            <strong>Server state</strong> (data fetched from an API): use
            TanStack Query or SWR — they handle caching, background refetching,
            deduplication of identical in-flight requests, and
            stale-while-revalidate behavior automatically.
          </li>
          <li>
            <strong>Client UI state</strong> (a modal&apos;s open/closed status,
            form input values): local component state, or a lightweight store
            like Zustand/Jotai if it needs to be shared across distant
            components.
          </li>
        </ul>
      </Topic>

      <Topic id="js-typescript" no="45" title="TypeScript essentials">
        <Js
          code={`// Basic types
function add(a: number, b: number): number { return a + b; }
let items: string[] = [];
let tuple: [string, number] = ["age", 30];

// Interfaces & optional/readonly properties
interface User {
  readonly id: number;
  name: string;
  email?: string; // optional
}

// Union & intersection types
type Status = "loading" | "success" | "error"; // union
type Employee = User & { role: string };         // intersection

// Generics - write reusable, type-safe code
function firstItem<T>(arr: T[]): T | undefined { return arr[0]; }
interface ApiResponse<T> { data: T; error: string | null; }`}
        />
        <p>
          <code>satisfies</code> validates an object&apos;s shape without
          widening its inferred literal type:
        </p>
        <Js
          code={`const config = {
  mode: "dark",
  fontSize: 16,
} satisfies Record<string, string | number>;
// config.mode is still typed as "dark", not string, unlike a type annotation would give`}
        />
        <p>Template literal types:</p>
        <Js
          code={`type Direction = "top" | "bottom" | "left" | "right";
type BorderClass = \`border-\${Direction}\`; // "border-top" | "border-bottom" | ...`}
        />
        <h4>Utility types</h4>
        <RefTable
          headers={['Type', 'Effect']}
          rows={[
            ['Partial<User>', 'All properties become optional.'],
            ['Pick<User, "name">', 'Only the named properties.'],
            ['Omit<User, "id">', 'Everything except the named properties.'],
          ]}
        />
      </Topic>

      <Topic id="js-testing" no="46" title="Testing">
        <p>
          <strong>Vitest</strong> — unit/integration testing, Vite-native,
          Jest-compatible API:
        </p>
        <Js
          code={`import { describe, it, expect, vi } from 'vitest';

describe('add()', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('calls the callback once', () => {
    const callback = vi.fn(); // mock function
    doSomething(callback);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});`}
        />
        <p>
          <strong>Playwright</strong> — end-to-end browser testing across
          Chromium, Firefox, and WebKit:
        </p>
        <Js
          code={`import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
});`}
        />
        <Callout>
          <strong>Testing Library philosophy</strong> — query the DOM the way a
          user would (<code>getByRole</code>, <code>getByLabelText</code>,{' '}
          <code>getByText</code>), not by implementation details like class
          names or internal state, so tests survive refactors.
        </Callout>
      </Topic>

      <Topic id="js-performance" no="47" title="Performance optimization">
        <Js
          code={`// requestIdleCallback - defer non-urgent work until the browser has spare time
requestIdleCallback(() => {
  sendAnalyticsBeacon();
});

// requestAnimationFrame - sync visual updates with the browser's repaint cycle
function animate() {
  updatePosition();
  requestAnimationFrame(animate);
}

// Debouncing - wait until input has stopped for X ms before acting (search-as-you-type)
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Throttling - ensure a function runs at most once per X ms (scroll handlers)
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`}
        />
        <ul>
          <li>
            Code-split with dynamic <code>import()</code> so users download only
            the JS their current page needs.
          </li>
          <li>
            Memoize expensive pure computations (framework-specific:{' '}
            <code>useMemo</code>, <code>computed</code>, etc.) to avoid
            redundant recalculation.
          </li>
          <li>
            Virtualize long lists (render only visible rows) for large datasets
            — libraries like TanStack Virtual handle this.
          </li>
        </ul>
      </Topic>

      <Topic id="js-security" no="48" title="Security in practice">
        <Js
          code={`// NEVER inject untrusted input directly - this is a classic XSS vulnerability
element.innerHTML = userInput; // DANGEROUS if userInput is user-controlled

// Prefer textContent for plain text - the browser will never interpret it as HTML/scripts
element.textContent = userInput; // SAFE

// If you truly need to render user-supplied HTML, sanitize it first
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);`}
        />
        <ul>
          <li>
            Never trust data from <code>localStorage</code>, URL parameters, or{' '}
            <code>postMessage</code> without validation — these are all
            attacker-controllable.
          </li>
          <li>
            Store sensitive tokens in <code>HttpOnly</code> cookies
            (inaccessible to JS) rather than <code>localStorage</code>, to
            reduce XSS-based token theft risk.
          </li>
          <li>
            Validate and sanitize on the <strong>server</strong> too —
            client-side checks are a UX nicety, not a security boundary, since
            they can always be bypassed.
          </li>
        </ul>
      </Topic>

      <ModuleTitle>Capstone</ModuleTitle>

      <Topic id="capstone" no="49" title="Capstone learning path">
        <ol>
          <li>
            <strong>Foundations first</strong> — work through the Web
            Fundamentals section fully before writing any real code.
            Understanding <em>why</em> the web works the way it does makes every
            later concept click faster.
          </li>
          <li>
            <strong>Vanilla HTML/CSS</strong> — build 2–3 static pages using
            semantic HTML and modern layout (Flexbox, Grid, container queries).
            No frameworks yet.
          </li>
          <li>
            <strong>Vanilla JavaScript</strong> — build a small interactive app
            (a to-do list, a weather app using <code>fetch</code>) using only
            DOM manipulation, events, and async fundamentals. This is where it
            actually sinks in.
          </li>
          <li>
            <strong>Accessibility & semantics as habit</strong> — go back over
            your static projects and audit them with Lighthouse and a screen
            reader; fix issues.
          </li>
          <li>
            <strong>Pick a framework</strong> (React, Vue, or Svelte) — now that
            you know what a framework is abstracting away (DOM diffing,
            reactivity, componentization), learning one will make far more
            sense.
          </li>
          <li>
            <strong>Add a meta-framework</strong> (Next.js, Nuxt, SvelteKit) and
            build a full CRUD app with a real backend/API.
          </li>
          <li>
            <strong>Add TypeScript</strong> once comfortable with plain JS —
            retrofitting types onto a project you already understand cements the
            concepts.
          </li>
          <li>
            <strong>Testing & tooling</strong> — add Vitest/Playwright to your
            capstone project; set up a CI pipeline that runs them automatically.
          </li>
          <li>
            <strong>Performance & security passes</strong> — profile your app
            with DevTools, fix Core Web Vitals issues, add a CSP header.
          </li>
          <li>
            <strong>Go deep on one advanced topic</strong> that matches your
            interests — Web Components, edge functions, GraphQL, or
            micro-frontends — once the fundamentals above are solid.
          </li>
        </ol>
      </Topic>
    </>
  )
}
