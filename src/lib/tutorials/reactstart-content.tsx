import type { NavGroup } from '#/lib/tutorials/shared'
import {
  Callout,
  Code,
  Deepdive,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'

export const reactStartNav: Array<NavGroup> = [
  {
    title: 'Part 1 — React Fundamentals',
    items: [
      { id: 'jsx-rendering', label: 'JSX & Rendering' },
      { id: 'components-props', label: 'Components & Props' },
      { id: 'state-usestate', label: 'State — useState' },
      { id: 'events-conditionals', label: 'Events & Conditionals' },
      { id: 'lists-keys', label: 'Lists & Keys' },
    ],
  },
  {
    title: 'Part 2 — Core Hooks',
    items: [
      { id: 'useeffect', label: 'useEffect' },
      { id: 'useref', label: 'useRef' },
      { id: 'usecontext', label: 'useContext' },
      { id: 'usereducer', label: 'useReducer' },
      { id: 'custom-hooks', label: 'Custom Hooks' },
    ],
  },
  {
    title: 'Part 3 — Intermediate React',
    items: [
      { id: 'composition-children', label: 'Composition & Children' },
      { id: 'lifting-state', label: 'Lifting State / Drilling' },
      { id: 'performance-hooks', label: 'Performance Hooks' },
      { id: 'portals-refs', label: 'Portals & DOM Refs' },
      { id: 'error-boundaries', label: 'Error Boundaries' },
    ],
  },
  {
    title: 'Part 4 — Advanced React',
    items: [
      { id: 'render-props-compound', label: 'Render Props & Compound' },
      { id: 'context-reducer', label: 'Context + Reducer' },
      { id: 'suspense-concurrency', label: 'Suspense & Concurrency' },
      {
        id: 'transition-deferred',
        label: 'useTransition / useDeferredValue',
      },
    ],
  },
  {
    title: 'Part 5 — React 19',
    items: [
      { id: 'actions-useactionstate', label: 'Actions & useActionState' },
      { id: 'useoptimistic', label: 'useOptimistic' },
      { id: 'use-api', label: 'The use() API' },
      { id: 'server-components', label: 'Server Components' },
      { id: 'ref-as-prop', label: 'ref as a prop' },
    ],
  },
  {
    title: 'Part 6 — TanStack Start: Basics',
    items: [
      { id: 'what-why', label: 'What & Why' },
      { id: 'setup-structure', label: 'Setup & File Structure' },
      { id: 'file-routing', label: 'File-Based Routing' },
      { id: 'loaders', label: 'Loaders & useLoaderData' },
    ],
  },
  {
    title: 'Part 7 — TanStack Start: Intermediate',
    items: [
      { id: 'server-functions', label: 'Server Functions' },
      { id: 'mutations', label: 'Data Mutations' },
      { id: 'query-integration', label: 'TanStack Query Integration' },
      { id: 'search-params', label: 'Search Params as State' },
    ],
  },
  {
    title: 'Part 8 — TanStack Start: Advanced',
    items: [
      { id: 'ssr-streaming', label: 'SSR Streaming' },
      { id: 'middleware', label: 'Middleware' },
      { id: 'auth-patterns', label: 'Auth Patterns' },
      { id: 'deployment', label: 'Deployment' },
    ],
  },
]

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const TS_KEYWORDS = [
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
  'string',
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

const TS_TYPES = [
  'React',
  'ReactNode',
  'Ref',
  'Dispatch',
  'ErrorInfo',
  'Component',
  'useState',
  'useEffect',
  'useRef',
  'useContext',
  'useReducer',
  'useMemo',
  'useCallback',
  'useTransition',
  'useDeferredValue',
  'useActionState',
  'useOptimistic',
  'useSearchParams',
  'useParams',
  'useNavigate',
  'useRouter',
  'useSuspenseQuery',
  'createContext',
  'createPortal',
  'createRoot',
  'createFileRoute',
  'createRoute',
  'createRootRoute',
  'createServerFn',
  'createMiddleware',
  'createTanStackRouter',
  'createRouter',
  'forwardRef',
  'redirect',
  'QueryClient',
  'Suspense',
  'Fragment',
  'Outlet',
  'Meta',
  'Scripts',
  'Await',
  'z',
]

function highlightTs(code: string): string {
  const kwPattern = TS_KEYWORDS.join('|')
  const tyPattern = TS_TYPES.join('|')
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

function highlightBash(code: string): string {
  return escapeHtml(code).replace(
    /(#[^\n]*)/g,
    (m) => `<span class="cm">${m}</span>`,
  )
}

function Tsx({ code }: { code: string }) {
  return <Code html={highlightTs(code)} />
}

function Bash({ code }: { code: string }) {
  return <Code html={highlightBash(code)} />
}

export function ReactStartContent() {
  return (
    <>
      <ModuleTitle>Part 1 — React Fundamentals</ModuleTitle>

      <Topic id="jsx-rendering" no="01" title="JSX & Rendering">
        <p>
          JSX looks like HTML but it compiles to plain function calls.{' '}
          <code>&lt;h1&gt;Hi&lt;/h1&gt;</code> becomes{' '}
          <code>React.createElement(&quot;h1&quot;, null, &quot;Hi&quot;)</code>
          . Once you see it that way, the rules stop feeling arbitrary —
          you&apos;re writing JavaScript, so JavaScript&apos;s rules apply.
        </p>
        <Tsx
          code={`const element = <h1>Hello, {name}!</h1>;

// Babel compiles this to:
const element = React.createElement("h1", null, "Hello, ", name, "!");`}
        />
        <h4>Rules that trip people up</h4>
        <ul>
          <li>
            One root element per <code>return</code> — or wrap in a Fragment{' '}
            <code>&lt;&gt;...&lt;/&gt;</code>
          </li>
          <li>
            <code>className</code> not <code>class</code>, <code>htmlFor</code>{' '}
            not <code>for</code>
          </li>
          <li>
            Curly braces take <em>expressions</em>, not statements — ternaries
            and <code>&amp;&amp;</code> work, raw <code>if</code>/
            <code>for</code> don&apos;t
          </li>
        </ul>
        <h4>Try it — a BookCard for Maple Street Library</h4>
        <Tsx
          code={`type Book = { id: number; title: string; author: string; year: number; copiesAvailable: number };

function BookCard({ book }: { book: Book }) {
  const available = book.copiesAvailable > 0;

  return (
    <article className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author} · {book.year}</p>
      {available ? <span>Available</span> : <span>On loan</span>}
    </article>
  );
}

<BookCard book={{ id: 3, title: "Moby-Dick", author: "Herman Melville", year: 1851, copiesAvailable: 1 }} />`}
        />
        <Callout>
          <strong>Mental model:</strong> React re-runs your component function
          on every render and diffs the returned tree against the last one (the
          &quot;virtual DOM&quot;). You describe <em>what</em> the UI should
          look like for the current state — React figures out the minimal DOM
          changes.
        </Callout>
      </Topic>

      <Topic id="components-props" no="02" title="Components & Props">
        <p>
          A component is a function that takes props (read-only inputs) and
          returns JSX. Props flow one direction: parent → child. A child can
          never reach up and change its own props — only a re-render from the
          parent with new values changes them.
        </p>
        <Tsx
          code={`type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="Frankenstein"><p>Mary Shelley, 1818 · Horror</p></Card>`}
        />
        <Callout>
          <strong>Composition over configuration:</strong> instead of a{' '}
          <code>Card</code> with 10 boolean props for every possible layout,
          pass JSX as <code>children</code>. It scales far better as
          requirements grow.
        </Callout>
      </Topic>

      <Topic id="state-usestate" no="03" title="State — useState">
        <p>
          State is data a component &quot;remembers&quot; between renders.
          Calling the setter schedules a re-render with the new value.
        </p>
        <Tsx
          code={`function CopiesCounter() {
  const [copies, setCopies] = useState(0);

  return (
    <button onClick={() => setCopies(copies + 1)}>
      Copies received: {copies}
    </button>
  );
}`}
        />
        <h4>Two gotchas that bite everyone once</h4>
        <p>
          <strong>Stale closures.</strong> If a new value depends on the old
          one, use the function form — it always receives the freshest state,
          even inside rapid-fire calls:
        </p>
        <Tsx
          code={`setCopies(prev => prev + 1); // safe, even called several times in a row`}
        />
        <p>
          <strong>No auto-merge.</strong> Unlike class-component{' '}
          <code>this.setState</code>, the hook setter replaces the value
          entirely:
        </p>
        <Tsx
          code={`const [member, setMember] = useState({ name: "Grace Hopper", tier: "standard" });

// setMember({ tier: "premium" }) wipes out \`name\`
setMember(prev => ({ ...prev, tier: "premium" })); // spread + override`}
        />
        <h4>Try it — a WishlistToggle</h4>
        <Tsx
          code={`function WishlistToggle() {
  const [onWishlist, setOnWishlist] = useState(false);
  return (
    <button aria-pressed={onWishlist} onClick={() => setOnWishlist(prev => !prev)}>
      {onWishlist ? "On your wishlist" : "Add to wishlist"}
    </button>
  );
}`}
        />
      </Topic>

      <Topic
        id="events-conditionals"
        no="04"
        title="Events & Conditional Rendering"
      >
        <p>
          Event handlers are camelCase props that take a function reference (not
          a call — <code>onClick={'{fn}'}</code>, never{' '}
          <code>onClick={'{fn()}'}</code>).
        </p>
        <Tsx
          code={`function LoanButton({ isBorrowed, onToggle }: { isBorrowed: boolean; onToggle: () => void }) {
  return <button onClick={onToggle}>{isBorrowed ? "Return" : "Borrow"}</button>;
}`}
        />
        <h4>Three conditional patterns you&apos;ll use constantly</h4>
        <Tsx
          code={`{isLoading && <Spinner />}                       // show or nothing
{error ? <ErrorMsg /> : <BooksList />}             // either/or
{status === "loading" ? <Spinner /> :
 status === "error"   ? <ErrorMsg /> : <BooksList />}  // multi-branch`}
        />
        <Callout variant="warn">
          <strong>Watch out:</strong>{' '}
          <code>{'{holdsReady && <HoldsBadge />}'}</code> renders a literal{' '}
          <code>0</code> when <code>holdsReady</code> is <code>0</code>, because{' '}
          <code>0</code> is falsy but still gets rendered as text. Use{' '}
          <code>{'{holdsReady > 0 && ...}'}</code> instead.
        </Callout>
      </Topic>

      <Topic id="lists-keys" no="05" title="Lists & Keys">
        <Tsx
          code={`const books = [{ id: 1, title: "Pride and Prejudice" }, { id: 2, title: "Frankenstein" }];

<ul>
  {books.map(book => <li key={book.id}>{book.title}</li>)}
</ul>`}
        />
        <p>
          React uses <code>key</code> to match array items across renders so it
          can reuse DOM nodes instead of rebuilding the list from scratch. Using
          the array <code>index</code> as a key works only if the list never
          reorders or has items removed from the middle — otherwise inputs and
          focus can &quot;jump&quot; to the wrong row because React reuses a DOM
          node for what it thinks is the same item. Always reach for a stable,
          unique ID from your data.
        </p>
      </Topic>

      <ModuleTitle>Part 2 — Core Hooks</ModuleTitle>

      <Topic id="useeffect" no="06" title="useEffect">
        <p>
          <code>useEffect</code> synchronizes a component with an{' '}
          <em>external system</em> — the network, the DOM, a subscription, a
          timer. It is <strong>not</strong> a generic &quot;run this after
          render&quot; hook, and treating it that way is the single most common
          source of React bugs.
        </p>
        <Tsx
          code={`useEffect(() => {
  const controller = new AbortController();
  fetch("/api/books", { signal: controller.signal })
    .then(res => res.json())
    .then(setBooks)
    .catch(err => { if (err.name !== "AbortError") setError(err); });
  return () => controller.abort(); // cleanup — runs before the next effect, and on unmount
}, []); // dependency array`}
        />
        <h4>Dependency array cheat sheet</h4>
        <ul>
          <li>
            <code>[]</code> → runs once, on mount
          </li>
          <li>
            <code>[a, b]</code> → re-runs whenever <code>a</code> or{' '}
            <code>b</code> changes
          </li>
          <li>omitted entirely → runs after every render (rarely correct)</li>
        </ul>
        <Deepdive>
          <strong>The #1 mistake:</strong> using <code>useEffect</code> to
          derive one piece of state from another.
          <Tsx
            code={`// don't
useEffect(() => { setAvailableBooks(books.filter(b => b.copiesAvailable > 0)); }, [books]);

// just compute it during render — no effect needed
const availableBooks = books.filter(b => b.copiesAvailable > 0);`}
          />
        </Deepdive>
        <p>
          Reach for <code>useEffect</code> when React doesn&apos;t already own
          the thing you&apos;re syncing: fetch calls, subscriptions, imperative
          DOM manipulation on a non-React widget, analytics pings.
        </p>
      </Topic>

      <Topic id="useref" no="07" title="useRef">
        <p>
          Two distinct jobs: holding a mutable value that survives re-renders{' '}
          <em>without</em> triggering one, and pointing at a real DOM node.
        </p>
        <Tsx
          code={`function SearchBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  return <input ref={inputRef} type="search" placeholder="Search the catalog" />;
}`}
        />
        <Tsx
          code={`// Mutable value, no re-render on change — good for timers, previous values, instance-like data
function StopWatch() {
  const startTime = useRef<number | null>(null);
  const handleStart = () => { startTime.current = Date.now(); };
}`}
        />
        <Callout>
          If updating a ref should also update what&apos;s on screen, you want{' '}
          <code>useState</code>, not <code>useRef</code>. Refs are invisible to
          rendering by design.
        </Callout>
      </Topic>

      <Topic id="usecontext" no="08" title="useContext">
        <p>
          Context lets any descendant read a value directly, skipping prop
          drilling through every layer in between.
        </p>
        <Tsx
          code={`type Member = { id: number; name: string; tier: "standard" | "premium" };
const CurrentMemberContext = createContext<Member | null>(null);

function App() {
  return (
    <CurrentMemberContext.Provider value={{ id: 1, name: "Ada Lovelace", tier: "premium" }}>
      <LibraryHeader />
    </CurrentMemberContext.Provider>
  );
}

function LibraryHeader() {
  const member = useContext(CurrentMemberContext); // no prop passed down at all
  return <header>{member ? member.name : "Sign in"}</header>;
}`}
        />
        <p>
          Good fits: theme, the signed-in member, locale/i18n — values that
          change rarely and are needed widely. Poor fit: high-frequency updates,
          since every consumer re-renders whenever the context value changes.
          For that, split contexts by concern or reach for a dedicated state
          library.
        </p>
      </Topic>

      <Topic id="usereducer" no="09" title="useReducer">
        <p>
          For state transitions with real logic behind them, or several
          sub-values that change together as one unit.
        </p>
        <Tsx
          code={`type State = { total: number; available: number };
type Action = { type: "checkOut" } | { type: "checkIn" } | { type: "reset" };

function copiesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "checkOut": return { ...state, available: Math.max(state.available - 1, 0) };
    case "checkIn":  return { ...state, available: Math.min(state.available + 1, state.total) };
    case "reset":    return { ...state, available: state.total };
  }
}

function CopiesCounter({ total }: { total: number }) {
  const [state, dispatch] = useReducer(copiesReducer, { total, available: total });
  return (
    <>
      <button onClick={() => dispatch({ type: "checkOut" })}>-</button>
      {state.available} of {state.total} available
      <button onClick={() => dispatch({ type: "checkIn" })}>+</button>
    </>
  );
}`}
        />
        <p>
          Choose it when: the next state depends on non-trivial logic, several
          fields update together, or you want a pure, independently testable
          transition function decoupled from your JSX.
        </p>
      </Topic>

      <Topic id="custom-hooks" no="10" title="Custom Hooks">
        <p>
          Extract reusable stateful logic into a function whose name starts with{' '}
          <code>use</code>. It&apos;s just a normal function that happens to
          call other hooks.
        </p>
        <Tsx
          code={`function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage — clean and reusable across the app (book ids on the member's wishlist)
const [wishlist, setWishlist] = useLocalStorage<number[]>("wishlist", []);`}
        />
        <Callout>
          Custom hooks don&apos;t share state between the components that call
          them — each call gets its own independent state. They share{' '}
          <em>logic</em>, not data.
        </Callout>
      </Topic>

      <ModuleTitle>Part 3 — Intermediate React</ModuleTitle>

      <Topic id="composition-children" no="11" title="Composition & Children">
        <p>
          The <code>children</code> prop is React&apos;s slot mechanism — it
          lets a parent hand arbitrary JSX to a child component to render
          wherever it wants.
        </p>
        <Tsx
          code={`function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

// Modal knows nothing about what's inside it
<Modal onClose={close}>
  <h2>Cancel reservation?</h2>
  <p>You'll lose your place in the queue for Moby-Dick.</p>
</Modal>`}
        />
        <p>
          You can accept multiple named slots too, by passing JSX through
          regular props instead of just <code>children</code>:
        </p>
        <Tsx
          code={`type LayoutProps = { header: React.ReactNode; sidebar: React.ReactNode; children: React.ReactNode };

function Layout({ header, sidebar, children }: LayoutProps) {
  return (
    <>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </>
  );
}`}
        />
      </Topic>

      <Topic
        id="lifting-state"
        no="12"
        title="Lifting State Up & Prop Drilling"
      >
        <p>
          When two sibling components need to share state, move that state to
          their nearest common parent and pass it down — this is &quot;lifting
          state up.&quot;
        </p>
        <Tsx
          code={`function CatalogPage() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBox query={query} onChange={setQuery} />
      <BooksList query={query} />
    </>
  );
}`}
        />
        <p>
          The downside appears at scale: passing a value through five layers of
          components that don&apos;t use it themselves — just forward it — is
          &quot;prop drilling.&quot; The fix isn&apos;t always Context; often
          it&apos;s restructuring the component tree so the state lives closer
          to where it&apos;s used, or composing components so the deep child is
          passed in as <code>children</code> rather than rendered by a distant
          ancestor.
        </p>
      </Topic>

      <Topic
        id="performance-hooks"
        no="13"
        title="Performance: useMemo, useCallback, React.memo"
      >
        <p>
          All three exist to skip unnecessary work — but they add complexity, so
          reach for them only after you&apos;ve noticed an actual performance
          problem, not by default.
        </p>
        <Tsx
          code={`// useMemo — cache an expensive computed VALUE between renders
const sorted = useMemo(() => expensiveSort(books), [books]);

// useCallback — cache a FUNCTION reference so it doesn't change every render
const handleBorrow = useCallback(() => borrowBook(bookId), [bookId]);

// React.memo — skip re-rendering a component if its props haven't changed
const BookRow = React.memo(function BookRow({ book }: { book: Book }) {
  return <li>{book.title}</li>;
});`}
        />
        <Callout>
          <strong>Why they&apos;re often paired:</strong>{' '}
          <code>React.memo</code> only helps if the props stay referentially
          equal. If you pass an inline function or object as a prop, it&apos;s a
          new reference every render, which defeats <code>memo</code> —
          that&apos;s exactly the case <code>useCallback</code> and{' '}
          <code>useMemo</code> exist for.
        </Callout>
        <p>
          Rule of thumb: profile first (React DevTools Profiler), then memoize
          the specific spot that&apos;s slow. Wrapping everything in{' '}
          <code>useMemo</code>/<code>useCallback</code> &quot;just in case&quot;
          adds cognitive overhead and can even make things slower.
        </p>
      </Topic>

      <Topic id="portals-refs" no="14" title="Portals & Refs to the DOM">
        <p>
          A portal renders children into a different part of the actual DOM tree
          while keeping them in the same place in the React tree — essential for
          modals, tooltips, and dropdowns that need to escape a parent&apos;s{' '}
          <code>overflow: hidden</code> or <code>z-index</code> stacking
          context.
        </p>
        <Tsx
          code={`import { createPortal } from "react-dom";

function Tooltip({ children }: { children: React.ReactNode }) {
  return createPortal(
    <div className="tooltip">{children}</div>,
    document.getElementById("tooltip-root")!
  );
}`}
        />
        <p>
          Events still bubble through the React tree as if the portal
          weren&apos;t there — a click inside the portal will trigger a
          parent&apos;s <code>onClick</code> in React terms, even though in the
          actual DOM it&apos;s nested somewhere else entirely.
        </p>
      </Topic>

      <Topic id="error-boundaries" no="15" title="Error Boundaries">
        <p>
          A JavaScript error inside a component used to crash the whole tree.
          Error boundaries catch render-time errors in their child tree and show
          a fallback UI instead. They must currently be class components —
          there&apos;s no hook equivalent yet.
        </p>
        <Tsx
          code={`class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    logErrorToService(error, info);
  }

  render() {
    if (this.state.hasError) return <h2>We couldn't load the catalog.</h2>;
    return this.props.children;
  }
}

// if BooksList throws while rendering, only this section shows the fallback
<ErrorBoundary>
  <BooksList />
</ErrorBoundary>`}
        />
        <Callout variant="warn">
          Error boundaries do <strong>not</strong> catch errors in event
          handlers, async code, or server-side rendering — only errors thrown
          during rendering of their children. Wrap async errors with plain{' '}
          <code>try/catch</code> instead.
        </Callout>
      </Topic>

      <ModuleTitle>Part 4 — Advanced React</ModuleTitle>

      <Topic
        id="render-props-compound"
        no="16"
        title="Render Props & Compound Components"
      >
        <p>
          <strong>Render props</strong> hand rendering control to the caller via
          a function prop:
        </p>
        <Tsx
          code={`function MouseTracker({ render }: { render: (pos: { x: number; y: number }) => React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}
    </div>
  );
}

<MouseTracker render={({ x, y }) => <p>{x}, {y}</p>} />`}
        />
        <p>
          <strong>Compound components</strong> share implicit state across a
          family of related components via context, so the API reads naturally —
          like native <code>&lt;select&gt;</code>/<code>&lt;option&gt;</code>:
        </p>
        <Tsx
          code={`const TabsContext = createContext<{ active: string; setActive: (id: string) => void } | null>(null);

function Tabs({ children, defaultTab }: { children: React.ReactNode; defaultTab: string }) {
  const [active, setActive] = useState(defaultTab);
  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

Tabs.List = function List({ children }: { children: React.ReactNode }) {
  return <div className="tab-list">{children}</div>;
};

Tabs.Tab = function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext)!;
  return (
    <button className={ctx.active === id ? "active" : ""} onClick={() => ctx.setActive(id)}>
      {children}
    </button>
  );
};

// Usage reads like plain markup
<Tabs defaultTab="available">
  <Tabs.List>
    <Tabs.Tab id="available">Available</Tabs.Tab>
    <Tabs.Tab id="on-loan">On loan</Tabs.Tab>
  </Tabs.List>
</Tabs>`}
        />
      </Topic>

      <Topic
        id="context-reducer"
        no="17"
        title="Context + Reducer (a mini Redux)"
      >
        <p>
          Combining <code>useReducer</code> for the transition logic with{' '}
          <code>useContext</code> for distribution gives you a self-contained
          global-store pattern with zero dependencies.
        </p>
        <Tsx
          code={`type State = { basket: Book[] };
type Action = { type: "add"; book: Book } | { type: "remove"; id: number };

function loanBasketReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":    return { basket: [...state.basket, action.book] };
    case "remove": return { basket: state.basket.filter(b => b.id !== action.id) };
  }
}

const LoanBasketContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

function LoanBasketProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(loanBasketReducer, { basket: [] });
  return <LoanBasketContext.Provider value={{ state, dispatch }}>{children}</LoanBasketContext.Provider>;
}

function useLoanBasket() {
  const ctx = useContext(LoanBasketContext);
  if (!ctx) throw new Error("useLoanBasket must be used inside LoanBasketProvider");
  return ctx;
}`}
        />
        <p>
          Any component can now call <code>useLoanBasket()</code> to read state
          or dispatch actions, with no prop drilling. For very high-frequency
          global state, a dedicated library (Zustand, Jotai) will still
          outperform this — Context re-renders every consumer on any change.
        </p>
      </Topic>

      <Topic
        id="suspense-concurrency"
        no="18"
        title="Suspense & Concurrent Rendering"
      >
        <p>
          <code>Suspense</code> lets a component &quot;pause&quot; rendering
          while it waits on something — data, code, an image — and show a
          fallback until it&apos;s ready.
        </p>
        <Tsx
          code={`<Suspense fallback={<Spinner />}>
  <BookDetails bookId={3} />
</Suspense>`}
        />
        <p>
          Under the hood, React 18+ can work on rendering in the background
          without blocking the browser from responding to input — this is
          &quot;concurrent rendering.&quot; A render can be interrupted, thrown
          away, or resumed. This is what makes <code>useTransition</code> and
          streaming SSR possible: React can start showing what&apos;s ready
          while still-loading parts stay behind a Suspense boundary.
        </p>
        <Callout>
          Suspense for data fetching needs a library or framework wired for it
          (React Query with <code>suspense: true</code>, or a framework&apos;s
          built-in loaders — see the TanStack Start section). Plain{' '}
          <code>fetch</code> in <code>useEffect</code> doesn&apos;t integrate
          with Suspense on its own.
        </Callout>
      </Topic>

      <Topic
        id="transition-deferred"
        no="19"
        title="useTransition & useDeferredValue"
      >
        <p>
          Both let you mark some UI work as &quot;low priority&quot; so React
          doesn&apos;t let it block urgent updates like typing in an input.
        </p>
        <Tsx
          code={`function BookSearch() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<Book[]>([]);

  function handleChange(value: string) {
    setQuery(value); // urgent — keep the input responsive
    startTransition(() => {
      setResults(searchCatalog(value)); // low priority — can be interrupted
    });
  }

  return (
    <>
      <input value={query} onChange={e => handleChange(e.target.value)} />
      {isPending ? <Spinner /> : <BooksList books={results} />}
    </>
  );
}`}
        />
        <p>
          <code>useDeferredValue</code> solves the same problem from the other
          end — you don&apos;t control the setter, you just want a
          &quot;lagging&quot; copy of a fast-changing value:
        </p>
        <Tsx
          code={`const deferredQuery = useDeferredValue(query);
const results = useMemo(() => searchCatalog(deferredQuery), [deferredQuery]);`}
        />
      </Topic>

      <ModuleTitle>Part 5 — React 19</ModuleTitle>

      <Topic
        id="actions-useactionstate"
        no="20"
        title="Actions & useActionState"
      >
        <p>
          React 19 formalizes &quot;Actions&quot; — async functions you can pass
          directly to <code>&lt;form action=&#123;...&#125;&gt;</code> or a
          transition, with pending state, errors, and optimistic updates handled
          by React instead of hand-rolled <code>useState</code> juggling.
        </p>
        <Tsx
          code={`function MemberSignupForm() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: string | null, formData: FormData) => {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      if (!name) return "Name is required";
      const result = await signUpMember({ name, email });
      if (result.error) return result.error; // e.g. "Enter a valid email"
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input name="name" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <button disabled={isPending}>Join the library</button>
      {error && <p>{error}</p>}
    </form>
  );
}`}
        />
        <p>
          <code>useActionState</code> replaces the old dance of a submit handler
          plus three separate <code>useState</code> calls for
          pending/error/result — the form&apos;s <code>action</code>, the
          pending flag, and the latest returned state are all wired together for
          you.
        </p>
      </Topic>

      <Topic id="useoptimistic" no="21" title="useOptimistic">
        <p>
          Shows a predicted result immediately, before the server confirms it,
          then automatically reconciles once the real response lands.
        </p>
        <Tsx
          code={`function BorrowButton({ book, borrow }: { book: Book; borrow: (bookId: number) => Promise<void> }) {
  const [optimisticCopies, addOptimistic] = useOptimistic(
    book.copiesAvailable,
    (current, change: number) => current + change
  );

  async function formAction() {
    addOptimistic(-1);        // shows instantly
    await borrow(book.id);    // real state arrives via props once it resolves
  }

  return (
    <form action={formAction}>
      <p>{optimisticCopies} of {book.copiesTotal} available</p>
      <button disabled={optimisticCopies === 0}>Borrow</button>
    </form>
  );
}`}
        />
        <p>
          If the real update fails (say another member just took the last copy
          of Moby-Dick), React quietly reverts to the actual state — no manual
          rollback code needed.
        </p>
      </Topic>

      <Topic id="use-api" no="22" title="The use() API">
        <p>
          <code>use()</code> reads the value of a Promise or a Context, and —
          unlike hooks — it can be called conditionally, inside loops, or after
          early returns. It&apos;s not a hook itself, which is exactly why it
          doesn&apos;t follow the &quot;Rules of Hooks.&quot;
        </p>
        <Tsx
          code={`function BookDetails({ bookPromise }: { bookPromise: Promise<Book> }) {
  // suspends the component until the promise resolves
  const book = use(bookPromise);
  return <h2>{book.title} — {book.author}</h2>;
}

<Suspense fallback={<Spinner />}>
  <BookDetails bookPromise={fetchBook(3)} />
</Suspense>`}
        />
        <Tsx
          code={`// Conditional context reads — impossible with useContext
function MemberGreeting({ show }: { show: boolean }) {
  if (!show) return null;
  const member = use(CurrentMemberContext); // fine — use() allows this, useContext() would not
  return <p>Welcome back, {member?.name}</p>;
}`}
        />
      </Topic>

      <Topic
        id="server-components"
        no="23"
        title="Server Components — conceptually"
      >
        <p>
          React Server Components (RSC) run only on the server and never ship
          their code to the browser. They can read files, query a database, or
          call a secret-holding API directly in the component body — no API
          route needed as a middleman.
        </p>
        <Tsx
          code={`// This runs ONLY on the server — no JS bundle sent to the client for this component
async function CatalogPage() {
  const books = await db.books.findAll(); // direct DB access, safely
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title}
          <BorrowButton bookId={book.id} /> {/* a Client Component, marked below */}
        </li>
      ))}
    </ul>
  );
}`}
        />
        <Tsx
          code={`"use client"; // opts this file INTO the client bundle — needed for interactivity

function BorrowButton({ bookId }: { bookId: number }) {
  const [pending, setPending] = useState(false);
  return <button onClick={() => setPending(true)}>Borrow</button>;
}`}
        />
        <Callout>
          <strong>The mental split:</strong> Server Components fetch data and
          render markup with zero client-side JS cost. Client Components
          (&quot;use client&quot;) are where <code>useState</code>,{' '}
          <code>onClick</code>, and browser APIs live. A tree mixes both —
          Server Components can render Client Components, never the reverse.
          This is the model TanStack Start, Next.js App Router, and Remix all
          build on in some form.
        </Callout>
      </Topic>

      <Topic id="ref-as-prop" no="24" title="ref as a Prop">
        <p>
          Before React 19, passing a ref through to a child required wrapping it
          in <code>forwardRef</code>. React 19 lets function components accept{' '}
          <code>ref</code> as a plain prop.
        </p>
        <Tsx
          code={`// Old way (React 18 and earlier)
const Input = forwardRef<HTMLInputElement, { label: string }>(({ label }, ref) => (
  <label>{label}<input ref={ref} /></label>
));

// React 19 — ref is just a prop, no wrapper needed
function Input({ label, ref }: { label: string; ref: React.Ref<HTMLInputElement> }) {
  return (
    <label>
      {label}
      <input ref={ref} />
    </label>
  );
}`}
        />
        <p>
          Existing <code>forwardRef</code> code still works — this is additive,
          not a breaking change — but new components no longer need it.
        </p>
      </Topic>

      <ModuleTitle>Part 6 — TanStack Start: Basics</ModuleTitle>

      <Topic id="what-why" no="25" title="What TanStack Start Is, and Why">
        <p>
          TanStack Start is a full-stack React framework built on top of{' '}
          <strong>TanStack Router</strong> and <strong>Vite</strong>. Where
          TanStack Router alone gives you type-safe client-side routing, Start
          adds server-side rendering, streaming, server functions, and
          full-document rendering — putting it in the same category as Next.js
          or Remix, but built router-first rather than pages-first.
        </p>
        <h4>What makes it distinct</h4>
        <ul>
          <li>
            <strong>Router-first, not file-convention-first.</strong> Routes are
            TypeScript objects you compose; file-based routing is a
            code-generation layer on top, not the only way in.
          </li>
          <li>
            <strong>End-to-end type safety.</strong> Route params, search
            params, loader data, and server function inputs/outputs are all
            inferred — no manual typing of <code>useParams()</code>.
          </li>
          <li>
            <strong>Server functions</strong> (<code>createServerFn</code>) let
            you call server-only code from client components as if it were a
            local async function, with the network boundary handled for you.
          </li>
          <li>
            <strong>Built on Vite</strong>, so you get its dev server, plugin
            ecosystem, and build pipeline for free.
          </li>
        </ul>
        <Callout>
          If TanStack Query is TanStack&apos;s answer to &quot;how do I cache
          server data on the client,&quot; TanStack Start is its answer to
          &quot;how do I build the whole app&quot; — and the two are designed to
          work together, not compete.
        </Callout>
      </Topic>

      <Topic
        id="setup-structure"
        no="26"
        title="Project Setup & File Structure"
      >
        <Bash
          code={`npx create-tsrouter-app@latest my-app --template file-router --add-ons start
cd my-app
npm run dev`}
        />
        <p>A typical Start project:</p>
        <Tsx
          code={`my-app/
├─ app/
│  ├─ routes/
│  │  ├─ __root.tsx        # root layout — wraps every route
│  │  ├─ index.tsx         # "/"
│  │  ├─ about.tsx         # "/about"
│  │  └─ books/
│  │     ├─ index.tsx      # "/books"
│  │     └─ $bookId.tsx    # "/books/:bookId"
│  ├─ client.tsx           # client entry
│  ├─ router.tsx           # createRouter() config
│  └─ ssr.tsx              # server entry
├─ vite.config.ts
└─ package.json`}
        />
        <p>
          The root route (<code>__root.tsx</code>) defines the outer{' '}
          <code>&lt;html&gt;</code> shell, global providers, and an{' '}
          <code>&lt;Outlet /&gt;</code> where matched child routes render:
        </p>
        <Tsx
          code={`export const Route = createRootRoute({
  component: () => (
    <html>
      <head><Meta /></head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
});`}
        />
      </Topic>

      <Topic id="file-routing" no="27" title="File-Based Routing">
        <p>
          Each file under <code>app/routes/</code> becomes a route. A generator
          watches the folder and produces a fully-typed route tree — you never
          hand-write a route config object for the common case.
        </p>
        <Tsx
          code={`// app/routes/books/$bookId.tsx
export const Route = createFileRoute("/books/$bookId")({
  component: BookPage,
});

function BookPage() {
  const { bookId } = Route.useParams(); // fully typed as { bookId: string }
  return <h1>Book {bookId}</h1>;
}`}
        />
        <h4>Naming conventions</h4>
        <ul>
          <li>
            <code>books.index.tsx</code> or <code>books/index.tsx</code> →{' '}
            <code>/books</code>
          </li>
          <li>
            <code>books.$bookId.tsx</code> or <code>books/$bookId.tsx</code> →{' '}
            <code>/books/:bookId</code> (dynamic segment)
          </li>
          <li>
            <code>members.$memberId.loans.tsx</code> →{' '}
            <code>/members/:memberId/loans</code> (nested)
          </li>
          <li>
            <code>_layout.tsx</code> (leading underscore) → a pathless layout
            route, wraps children without adding to the URL
          </li>
          <li>
            <code>books.$.tsx</code> → a splat/catch-all route
          </li>
        </ul>
        <Callout>
          Because routes are plain objects under the hood, you can also build
          the whole tree by hand with <code>createRoute()</code> calls if
          you&apos;d rather not use file-based generation — Start doesn&apos;t
          force either style.
        </Callout>
      </Topic>

      <Topic id="loaders" no="28" title="Route Loaders & useLoaderData">
        <p>
          A <code>loader</code> fetches data <em>before</em> a route renders —
          on the server during SSR, and client-side on subsequent navigations —
          so your component never shows a loading spinner for data the router
          already knows it needs.
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/books/$bookId")({
  loader: async ({ params }) => {
    const book = await fetchBook(params.bookId);
    return { book };
  },
  component: BookPage,
});

function BookPage() {
  const { book } = Route.useLoaderData(); // typed from the loader's return value
  return <h1>{book.title}</h1>;
}`}
        />
        <p>
          Loaders run in parallel across nested matched routes, and results are
          cached by the router — navigating back to a page you&apos;ve already
          visited can render instantly from cache while it revalidates in the
          background.
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/books/$bookId")({
  loader: ({ params }) => fetchBook(params.bookId),
  staleTime: 30_000, // cached loader data is considered fresh for 30s
});`}
        />
      </Topic>

      <ModuleTitle>Part 7 — TanStack Start: Intermediate</ModuleTitle>

      <Topic
        id="server-functions"
        no="29"
        title="Server Functions — createServerFn"
      >
        <p>
          A server function is code that only ever runs on the server, callable
          from client code as if it were a normal async function — no manually
          wiring up a REST or RPC endpoint.
        </p>
        <Tsx
          code={`import { createServerFn } from "@tanstack/react-start";

const getMember = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    // runs ONLY on the server — safe to touch a database or secret env vars
    return db.members.findById(id);
  });

// Called from a component like any async function
function MemberName({ memberId }: { memberId: string }) {
  const [member, setMember] = useState<Member | null>(null);
  useEffect(() => { getMember({ data: memberId }).then(setMember); }, [memberId]);
  return <h1>{member?.name}</h1>;
}`}
        />
        <p>
          Or, more idiomatically, called straight from a loader so the data is
          ready before render:
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/members/$memberId/loans")({
  loader: ({ params }) => getMember({ data: params.memberId }),
});`}
        />
        <Callout>
          Under the hood, Start compiles server functions into real HTTP
          endpoints and swaps the client-side call for a <code>fetch</code> —
          but you write and call it as one continuous piece of TypeScript, with
          full type inference across the network boundary.
        </Callout>
      </Topic>

      <Topic id="mutations" no="30" title="Data Mutations">
        <p>
          Mutations are just server functions that write instead of read — the
          pattern is identical, but you typically pair them with a way to
          invalidate cached loader data afterward.
        </p>
        <Tsx
          code={`const renewLoan = createServerFn({ method: "POST" })
  .validator((data: { loanId: number }) => data)
  .handler(async ({ data }) => db.loans.renew(data.loanId)); // pushes due_on out another loan period

function RenewLoanForm({ loanId }: { loanId: number }) {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await renewLoan({
      data: { loanId: Number(formData.get("loanId")) },
    });
    router.invalidate(); // re-runs affected loaders so the new due date shows up
  }

  return (
    <form action={handleSubmit}>
      <input type="hidden" name="loanId" value={loanId} />
      <button>Renew</button>
    </form>
  );
}`}
        />
        <p>
          <code>borrowBook</code> and <code>returnLoan</code> have exactly the
          same shape — a <code>POST</code> server function, then an invalidation
          so <code>/members/$memberId/loans</code> shows the new state.
        </p>
        <p>
          <code>router.invalidate()</code> tells the router &quot;loader data
          may be stale, re-fetch what&apos;s active&quot; — the router-native
          equivalent of a query invalidation.
        </p>
      </Topic>

      <Topic id="query-integration" no="31" title="TanStack Query Integration">
        <p>
          Router loaders handle the &quot;data this route needs to render&quot;
          case well, but for caching, background refetching, mutations with
          optimistic updates, and infinite queries, Start is commonly paired
          with TanStack Query rather than replacing it.
        </p>
        <Tsx
          code={`// app/router.tsx
const queryClient = new QueryClient();

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    context: { queryClient }, // available to every loader
  });
}`}
        />
        <Tsx
          code={`// A route loader that primes the Query cache instead of returning raw data
export const Route = createFileRoute("/books/$bookId")({
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData({
      queryKey: ["books", params.bookId],
      queryFn: () => fetchBook(params.bookId),
    }),
  component: BookPage,
});

function BookPage() {
  const { bookId } = Route.useParams();
  // instant — data's already in the cache from the loader above
  const { data: book } = useSuspenseQuery({
    queryKey: ["books", bookId],
    queryFn: () => fetchBook(bookId),
  });
  return <h1>{book.title}</h1>;
}`}
        />
        <Callout>
          The loader&apos;s job becomes &quot;make sure the cache is warm before
          the route renders&quot; — Query then owns caching, refetch-on-focus,
          retries, and mutation state, which the router doesn&apos;t try to
          replicate.
        </Callout>
      </Topic>

      <Topic id="search-params" no="32" title="Search Params as State">
        <p>
          TanStack Router treats URL search params as fully typed, validated
          state — not raw strings you parse by hand. This makes filters (genre,
          available only), pagination, and sort order shareable via URL and safe
          to read like any other typed value.
        </p>
        <Tsx
          code={`const searchSchema = z.object({
  genre: z.enum(["All", "Classics", "Horror", "Adventure", "Fantasy", "Science Fiction"]).catch("All"),
  available: z.boolean().catch(false),
  page: z.number().catch(1),
});

export const Route = createFileRoute("/books/")({
  validateSearch: searchSchema,
  component: BooksPage,
});

function BooksPage() {
  const { genre, available, page } = Route.useSearch(); // typed as { genre: "All" | "Classics" | ...; available: boolean; page: number }
  const navigate = Route.useNavigate();

  return (
    <button onClick={() => navigate({ search: prev => ({ ...prev, page: prev.page + 1 }) })}>
      Next page
    </button>
  );
}`}
        />
        <p>
          Because search params are validated with a schema (Zod here, though
          any standard-schema library works), a malformed or missing param falls
          back to your <code>.catch()</code> default instead of producing{' '}
          <code>undefined</code> deep in a component.
        </p>
      </Topic>

      <ModuleTitle>Part 8 — TanStack Start: Advanced</ModuleTitle>

      <Topic id="ssr-streaming" no="33" title="SSR Streaming & Deferred Data">
        <p>
          Not every piece of data on a page needs to block the initial response.{' '}
          <code>defer</code>-style loading lets Start send the HTML shell
          immediately and stream in slower data as it resolves, using Suspense
          boundaries on the client to show placeholders in the meantime.
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/books/$bookId")({
  loader: async ({ params }) => {
    // fast, blocking — needed for the initial paint
    const book = await fetchBook(params.bookId);
    // slow — don't block on it, stream it in when ready
    const alsoBorrowedPromise = fetchReadersAlsoBorrowed(params.bookId);
    return { book, alsoBorrowedPromise };
  },
  component: BookPage,
});

function BookPage() {
  const { book, alsoBorrowedPromise } = Route.useLoaderData();
  return (
    <>
      <BookDetails book={book} />
      <Suspense fallback={<Spinner />}>
        <Await promise={alsoBorrowedPromise}>
          {(books) => <ReadersAlsoBorrowed books={books} />}
        </Await>
      </Suspense>
    </>
  );
}`}
        />
        <p>
          The member sees the shell and the book details almost immediately; the
          &quot;Readers also borrowed&quot; shelf pops in once its promise
          resolves, without a second round trip from the client.
        </p>
      </Topic>

      <Topic id="middleware" no="34" title="Middleware">
        <p>
          Server function middleware wraps handlers with cross-cutting logic —
          auth checks, logging, request context — without repeating it in every
          function.
        </p>
        <Tsx
          code={`const authMiddleware = createMiddleware().server(async ({ next, context }) => {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return next({ context: { ...context, user: session.user } }); // injects \`user\` downstream
});

const getMyLoans = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return db.loans.findByMember(context.user.id); // context.user is typed, guaranteed present
  });`}
        />
        <p>
          Middleware composes — a server function can use several, and each can
          add to the typed <code>context</code> object the next one (and the
          final handler) receives.
        </p>
      </Topic>

      <Topic id="auth-patterns" no="35" title="Auth Patterns">
        <p>
          A common shape: a <code>beforeLoad</code> hook on protected routes
          checks auth state before the loader even runs, redirecting
          unauthenticated users early — on the server, before any protected UI
          or data ships to the client.
        </p>
        <Tsx
          code={`// app/routes/admin.tsx — a layout route, so every /admin/* child is protected too
export const Route = createFileRoute("/admin")({
  beforeLoad: async ({ context }) => {
    const user = await context.getUser();
    if (!user) {
      throw redirect({ to: "/login", search: { redirectTo: "/admin" } });
    }
    if (user.role !== "Librarian" && user.role !== "Admin") {
      throw redirect({ to: "/books" }); // signed in, but not staff
    }
    return { user }; // now available to this route's loader and component
  },
  loader: ({ context }) => fetchOverdueLoans(context.user.branchId),
});`}
        />
        <p>
          Because <code>beforeLoad</code> runs during SSR, a logged-out visitor
          is redirected in the server response itself — no flash of protected
          content before a client-side redirect kicks in.
        </p>
      </Topic>

      <Topic id="deployment" no="36" title="Deployment">
        <p>
          TanStack Start builds to standard, portable server output rather than
          locking you to one host — it ships adapters (via Nitro, the same
          engine behind Nuxt) for most common targets.
        </p>
        <Tsx
          code={`// vite.config.ts
export default defineConfig({
  plugins: [
    tanstackStart({
      target: "vercel", // or "netlify", "cloudflare-pages", "node-server", "bun", ...
    }),
  ],
});`}
        />
        <RefTable
          headers={['Target', 'What you get']}
          rows={[
            [
              'Node server',
              'A self-contained Node process, deployable anywhere Node runs (a VM, a container, PM2).',
            ],
            [
              'Edge / serverless',
              "Vercel, Netlify, Cloudflare — the same route tree, loaders, and server functions compile to that platform's function format.",
            ],
            [
              'Static prerendering',
              'Possible per-route for pages with no per-request dynamic data.',
            ],
          ]}
        />
        <Callout>
          Because server functions and loaders are the framework&apos;s own
          primitives — not &quot;API routes&quot; bolted on — switching deploy
          targets is mostly a config change, not a rewrite of how your
          data-fetching code is structured.
        </Callout>
      </Topic>
    </>
  )
}
