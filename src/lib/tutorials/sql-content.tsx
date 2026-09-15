import {
  Callout,
  Code,
  Deepdive,
  Exercise,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'
import type { NavGroup } from '#/lib/tutorials/shared'

export const sqlNovaPizzaNav: Array<NavGroup> = [
  {
    title: 'Start here',
    items: [{ id: 'schema', label: 'The Nova Pizza schema' }],
  },
  {
    title: 'Basics',
    items: [
      { id: 'select', label: 'SELECT & filtering' },
      { id: 'sort', label: 'Sorting & limiting' },
      { id: 'agg', label: 'Aggregations' },
      { id: 'funcs', label: 'Functions & NULLs' },
      { id: 'datatypes', label: 'Data types' },
    ],
  },
  {
    title: 'Intermediate',
    items: [
      { id: 'joins', label: 'Joins' },
      { id: 'subq', label: 'Subqueries' },
      { id: 'setops', label: 'Set operations' },
      { id: 'case', label: 'CASE & conditionals' },
      { id: 'views', label: 'Views' },
      { id: 'ddl', label: 'ALTER, DROP & TRUNCATE' },
      { id: 'upsert', label: 'INSERT...SELECT & upserts' },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { id: 'window', label: 'Window functions' },
      { id: 'cte', label: 'CTEs & recursion' },
      { id: 'grouping', label: 'ROLLUP, CUBE & GROUPING SETS' },
      { id: 'pivot', label: 'Pivoting data' },
      { id: 'dml', label: 'Writes & transactions' },
      { id: 'isolation', label: 'Isolation & locking' },
      { id: 'json', label: 'JSON & semi-structured data' },
      { id: 'design', label: 'Constraints & design' },
      { id: 'index', label: 'Indexes & performance' },
      { id: 'procs', label: 'Procedures, functions & triggers' },
      { id: 'security', label: 'Security & permissions' },
    ],
  },
]

const SQL_KEYWORDS = [
  'SELECT',
  'FROM',
  'WHERE',
  'GROUP BY',
  'ORDER BY',
  'HAVING',
  'INNER JOIN',
  'LEFT JOIN',
  'RIGHT JOIN',
  'FULL JOIN',
  'JOIN',
  'ON',
  'AS',
  'AND',
  'OR',
  'NOT',
  'IN',
  'BETWEEN',
  'LIKE',
  'IS NOT NULL',
  'IS NULL',
  'NULL',
  'LIMIT',
  'OFFSET',
  'ASC',
  'DESC',
  'INSERT INTO',
  'VALUES',
  'UPDATE',
  'SET NOT NULL',
  'SET',
  'DELETE',
  'CREATE TABLE',
  'CREATE INDEX',
  'CREATE OR REPLACE VIEW',
  'CREATE VIEW',
  'CREATE PROCEDURE',
  'CREATE FUNCTION',
  'CREATE TRIGGER',
  'CREATE ROLE',
  'PRIMARY KEY',
  'FOREIGN KEY',
  'REFERENCES',
  'UNIQUE',
  'DEFAULT',
  'CHECK',
  'UNION ALL',
  'UNION',
  'INTERSECT',
  'EXCEPT',
  'CASE',
  'WHEN NOT MATCHED THEN',
  'WHEN MATCHED THEN',
  'WHEN',
  'THEN',
  'ELSE',
  'END',
  'WITH RECURSIVE',
  'WITH',
  'OVER',
  'PARTITION BY',
  'ROW_NUMBER',
  'RANK',
  'DENSE_RANK',
  'COUNT',
  'SUM',
  'AVG',
  'MIN',
  'MAX',
  'DISTINCT',
  'EXISTS',
  'BEGIN TRANSACTION ISOLATION LEVEL',
  'BEGIN TRANSACTION',
  'BEGIN',
  'COMMIT',
  'ROLLBACK',
  'EXPLAIN ANALYZE',
  'EXPLAIN',
  'TRUE',
  'FALSE',
  'GROUPING SETS',
  'GROUPING',
  'ROLLUP',
  'CUBE',
  'COALESCE',
  'NULLIF',
  'CAST',
  'UPPER',
  'LOWER',
  'TRIM',
  'CURRENT_DATE',
  'INTERVAL',
  'LANGUAGE',
  'RETURNS',
  'DECLARE',
  'RETURN',
  'CALL',
  'AFTER INSERT',
  'FOR EACH ROW',
  'FOR UPDATE',
  'EXECUTE FUNCTION',
  'ALTER TABLE',
  'ALTER COLUMN',
  'ADD COLUMN',
  'ADD CONSTRAINT',
  'DROP COLUMN',
  'DROP TABLE',
  'RENAME COLUMN',
  'TRUNCATE TABLE',
  'ON CONFLICT',
  'DO UPDATE SET',
  'ON DUPLICATE KEY UPDATE',
  'MERGE INTO',
  'USING',
  'EXCLUDED',
  'ISOLATION LEVEL',
  'READ COMMITTED',
  'READ UNCOMMITTED',
  'REPEATABLE READ',
  'SERIALIZABLE',
  'JSON_EXTRACT',
  'GRANT',
  'REVOKE',
  'INCLUDING ALL',
].sort((a, b) => b.length - a.length)

const SQL_TYPES = [
  'DECIMAL(5,2)',
  'DECIMAL',
  'VARCHAR(100)',
  'VARCHAR',
  'INTEGER',
  'TEXT',
  'BOOLEAN',
  'TIMESTAMP',
  'DATE',
  'SERIAL',
  'JSONB',
  'JSON',
  'UUID',
  'ENUM',
].sort((a, b) => b.length - a.length)

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function highlightSql(code: string): string {
  const kwPattern = SQL_KEYWORDS.map((k) => k.split(' ').join('\\s+')).join('|')
  const tyPattern = SQL_TYPES.map((t) =>
    t.replace(/[()]/g, '\\$&').split(' ').join('\\s+'),
  ).join('|')
  const master = new RegExp(
    `(--[^\\n]*)|('[^']*')|\\b(${tyPattern})\\b|\\b(${kwPattern})\\b`,
    'gi',
  )
  return escapeHtml(code).replace(master, (match, comment, str, ty) => {
    if (comment) return `<span class="cm">${comment}</span>`
    if (str) return `<span class="str">${str}</span>`
    if (ty) return `<span class="ty">${match}</span>`
    return `<span class="kw">${match}</span>`
  })
}

function Sql({ code }: { code: string }) {
  return <Code html={highlightSql(code)} />
}

export function SqlContent() {
  return (
    <>
      <ModuleTitle>Start here</ModuleTitle>

      <Topic id="schema" no="00" title="The Nova Pizza schema">
        <RefTable
          headers={['Table', 'Columns']}
          rows={[
            [
              <code>planets</code>,
              <>
                <code>planet_id</code> (pk), name, distance_ly, population
              </>,
            ],
            [
              <code>customers</code>,
              <>
                <code>customer_id</code> (pk), name, planet_id, joined_date,
                loyalty_points
              </>,
            ],
            [
              <code>pizzas</code>,
              <>
                <code>pizza_id</code> (pk), name, base_price, is_vegetarian
              </>,
            ],
            [
              <code>orders</code>,
              <>
                <code>order_id</code> (pk), customer_id, order_date, status
              </>,
            ],
            [
              <code>order_items</code>,
              <>
                <code>order_item_id</code> (pk), order_id, pizza_id, quantity
              </>,
            ],
          ]}
        />
        <p>A few things worth noticing before writing a single query:</p>
        <p>
          <code>customers.planet_id</code> points at{' '}
          <code>planets.planet_id</code> — that&apos;s a{' '}
          <strong>foreign key</strong>, the thing that makes joins possible.{' '}
          <code>orders</code> and <code>order_items</code> are split apart on
          purpose: one order can contain several pizzas, and that one-to-many
          relationship is the most common shape you&apos;ll model in real
          schemas.
        </p>
        <Callout>
          <strong>Fun fact</strong> — this shape (orders + order_items) is
          sometimes called the &quot;invoice pattern,&quot; and it&apos;s the
          backbone of almost every e-commerce database ever built, including the
          one behind your last online order.
        </Callout>
        <p>
          Work through the sidebar in order, or jump straight to whatever you
          need. Each section ends with a hands-on exercise — try to write the
          query yourself before revealing the answer.
        </p>
      </Topic>

      <ModuleTitle>Basics</ModuleTitle>

      <Topic id="select" no="01" title="SELECT & filtering">
        <p>
          Every query starts with two questions: which columns do you want, and
          which rows?
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — SQL is <strong>declarative</strong>:
          a SELECT statement describes the shape of the answer you want, not the
          steps to get it. You never say &quot;loop over rows and check
          each one&quot; — the database&apos;s query planner decides whether to
          scan the table or use an index, in what order, and hands you back a
          result set. Under the hood, every table is a set of rows with typed
          columns, and WHERE is evaluated once per row: the boolean expression
          runs against that row&apos;s values, and only rows where it evaluates
          to true survive.
        </Deepdive>
        <p>
          <code>SELECT</code> picks columns, <code>FROM</code> picks the table,
          and <code>WHERE</code> filters rows. Nothing more mysterious than
          that.
        </p>
        <Sql
          code={`SELECT name, base_price
FROM pizzas
WHERE is_vegetarian = true;`}
        />
        <RefTable
          caption="result"
          headers={['name', 'base_price']}
          rows={[
            ['Margherita Meteor', '9.50'],
            ['Comet Caprese', '10.25'],
          ]}
        />
        <p>
          WHERE supports the comparisons you&apos;d expect (<code>=</code>,{' '}
          <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>), plus a few
          SQL-specific ones that come up constantly:
        </p>
        <Sql
          code={`SELECT name FROM pizzas
WHERE base_price BETWEEN 9 AND 12
  AND name LIKE '%Comet%';

SELECT name FROM customers
WHERE planet_id IN (1, 3, 7);

SELECT name FROM customers
WHERE loyalty_points IS NOT NULL;`}
        />
        <Callout variant="warn">
          <strong>The NULL trap</strong> — <code>NULL</code> means
          &quot;unknown,&quot; not &quot;empty.&quot;{' '}
          <code>WHERE loyalty_points = NULL</code> silently matches nothing,
          ever. Always use <code>IS NULL</code> / <code>IS NOT NULL</code> to
          check for it. This catches almost everyone at least once.
        </Callout>
        <p>
          Combine conditions with <strong>AND</strong> / <strong>OR</strong>,
          and use parentheses the moment you mix them — SQL evaluates AND before
          OR, just like multiplication before addition:
        </p>
        <Sql
          code={`SELECT name FROM pizzas
WHERE is_vegetarian = true
  AND (base_price < 9 OR name LIKE 'Nova%');`}
        />
        <Exercise
          id="ans-select"
          prompt={
            <>
              Write a query that returns the <code>name</code> and{' '}
              <code>joined_date</code> of every customer on planet_id 2, ordered
              by nothing yet — just the filter.
            </>
          }
        >
          <Sql
            code={`SELECT name, joined_date
FROM customers
WHERE planet_id = 2;`}
          />
        </Exercise>
      </Topic>

      <Topic id="sort" no="02" title="Sorting & limiting">
        <p>
          Getting the right rows is only half the job — often you want the top
          few, in a specific order.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Without an ORDER BY, a table has{' '}
          <em>no</em> guaranteed row order — a database is free to return rows
          in whatever order it found them (often insertion order or index
          order), and that can silently change after a rebuild, a vacuum, or a
          version upgrade. ORDER BY sorts the finished result set as a last
          step, after all filtering and grouping is done, which is why
          it&apos;s allowed to reference column aliases defined in the SELECT
          list even though WHERE can&apos;t. Sorts are stable within most
          engines when you provide enough sort keys to fully disambiguate ties,
          and NULLs are treated as either the lowest or highest possible value
          depending on the database (NULLS FIRST / NULLS LAST let you control
          this explicitly on Postgres).
        </Deepdive>
        <p>
          <code>ORDER BY</code> sorts the result set; <code>ASC</code> (default)
          or <code>DESC</code> controls direction. <code>LIMIT</code> caps how
          many rows come back, and <code>OFFSET</code> skips a number of rows
          first — the pair that powers every &quot;page 2 of results&quot;
          you&apos;ve ever seen.
        </p>
        <Sql
          code={`SELECT name, loyalty_points
FROM customers
ORDER BY loyalty_points DESC
LIMIT 3;`}
        />
        <RefTable
          caption="result — top 3 most loyal customers"
          headers={['name', 'loyalty_points']}
          rows={[
            ['Zeta Okonkwo', '980'],
            ['Rin Vasquez', '875'],
            ['Marlowe Duque', '860'],
          ]}
        />
        <Sql
          code={`SELECT name, loyalty_points
FROM customers
ORDER BY loyalty_points DESC
LIMIT 3 OFFSET 3;   -- the next 3, i.e. "page 2"`}
        />
        <p>
          You can sort by more than one column — later columns break ties in
          earlier ones:
        </p>
        <Sql
          code={`SELECT name, planet_id, loyalty_points
FROM customers
ORDER BY planet_id ASC, loyalty_points DESC;`}
        />
        <Callout>
          <strong>Tip</strong> — LIMIT/OFFSET pagination gets slow on huge
          tables because the database still has to walk past every skipped row.
          Production systems often switch to &quot;keyset pagination&quot; (
          <code>WHERE id &gt; last_seen_id LIMIT n</code>) once tables get large
          — good to know exists, not something you need today.
        </Callout>
        <Exercise
          id="ans-sort"
          prompt="Return the 5 cheapest pizzas, cheapest first."
        >
          <Sql
            code={`SELECT name, base_price
FROM pizzas
ORDER BY base_price ASC
LIMIT 5;`}
          />
        </Exercise>
      </Topic>

      <Topic id="agg" no="03" title="Aggregations">
        <p>Turning many rows into one number — or one number per group.</p>
        <Deepdive>
          <strong>Under the hood</strong> — Think of an aggregate function as a
          fold/reduce over a stream of rows: COUNT, SUM, AVG, MIN and MAX each
          take many input values and reduce them to one output value. GROUP BY
          works by bucketing rows — the database effectively sorts or hashes
          rows by the grouping column(s) so that all rows sharing a key end up
          together, then runs each aggregate function once per bucket.
          That&apos;s also why every column in the SELECT list must either be
          part of GROUP BY or wrapped in an aggregate: for a group containing
          several rows, a bare non-aggregated column has no single defined value
          to return.
        </Deepdive>
        <p>
          The five workhorses: <strong>COUNT</strong>, <strong>SUM</strong>,{' '}
          <strong>AVG</strong>, <strong>MIN</strong>, <strong>MAX</strong>. Used
          alone, they collapse the whole table into a single row:
        </p>
        <Sql
          code={`SELECT COUNT(*) AS total_pizzas,
       AVG(base_price) AS avg_price
FROM pizzas;`}
        />
        <RefTable
          headers={['total_pizzas', 'avg_price']}
          rows={[['8', '10.85']]}
        />
        <p>
          <strong>GROUP BY</strong> is where aggregation gets interesting — it
          buckets rows first, then aggregates within each bucket:
        </p>
        <Sql
          code={`SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status;`}
        />
        <RefTable
          headers={['status', 'order_count']}
          rows={[
            ['delivered', '142'],
            ['in_transit', '9'],
            ['cancelled', '6'],
          ]}
        />
        <p>
          <strong>HAVING</strong> filters groups <em>after</em> aggregation —
          this is the detail that trips people up. WHERE can&apos;t reference an
          aggregate because it runs before grouping happens; HAVING exists
          specifically to fill that gap:
        </p>
        <Sql
          code={`SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 10;`}
        />
        <Callout>
          <strong>Order of operations</strong> — a query is written SELECT →
          FROM → WHERE → GROUP BY → HAVING → ORDER BY, but it&apos;s{' '}
          <em>evaluated</em> FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER
          BY. WHERE filters raw rows; HAVING filters finished groups.
        </Callout>
        <Exercise
          id="ans-agg"
          prompt="Find every planet with more than 50 customers, showing planet_id and the count."
        >
          <Sql
            code={`SELECT planet_id, COUNT(*) AS customer_count
FROM customers
GROUP BY planet_id
HAVING COUNT(*) > 50;`}
          />
        </Exercise>
      </Topic>

      <Topic id="funcs" no="04" title="Functions & NULL handling">
        <p>
          Shaping values on the way out — string tidy-ups, date math, rounding,
          and the safe way to deal with missing data.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Functions fall into three families
          you&apos;ll keep running into: <strong>scalar</strong> functions
          (UPPER, ROUND) take one row&apos;s values and return one value per
          row; <strong>aggregate</strong> functions (SUM, COUNT) collapse many
          rows into one; <strong>window</strong> functions (covered later) sit
          in between. Almost every scalar function is{' '}
          <em>NULL-propagating</em> — if any input is NULL, the result is NULL,
          on the logic that you can&apos;t meaningfully uppercase or round
          &quot;unknown.&quot; COALESCE and NULLIF are two of the few functions
          built specifically to reason about NULL itself rather than propagate
          it, which is exactly why they exist as separate tools instead of
          ordinary functions.
        </Deepdive>
        <p>
          <strong>String functions</strong> reshape text. Exact names vary
          slightly by database, but the shapes below are near-universal:
        </p>
        <Sql
          code={`SELECT
  UPPER(name) AS shouty_name,
  LOWER(name) AS quiet_name,
  TRIM(name) AS no_stray_spaces,
  name || ' (Planet ' || planet_id || ')' AS label   -- Postgres/SQLite; use CONCAT(name, ...) on MySQL/SQL Server
FROM customers;`}
        />
        <p>
          <strong>Date functions</strong> let you compute ages, deadlines, and
          windows without pulling every row into application code:
        </p>
        <Sql
          code={`SELECT name, joined_date,
  CURRENT_DATE - joined_date AS days_as_member   -- Postgres; DATEDIFF(day, joined_date, GETDATE()) on SQL Server
FROM customers
WHERE joined_date > CURRENT_DATE - INTERVAL '90 days';`}
        />
        <p>
          <strong>Math functions</strong> — ROUND, CEIL/FLOOR, ABS — clean up
          computed numbers for display:
        </p>
        <Sql
          code={`SELECT name, ROUND(base_price * 1.08, 2) AS price_with_tax
FROM pizzas;`}
        />
        <p>
          For NULLs, two small functions save a lot of CASE statements.{' '}
          <strong>COALESCE</strong> returns the first non-NULL value in a list —
          perfect for defaults:
        </p>
        <Sql
          code={`SELECT name, COALESCE(loyalty_points, 0) AS points
FROM customers;`}
        />
        <p>
          <strong>NULLIF</strong> does the opposite job: it returns NULL if two
          values are equal, which is the standard guard against divide-by-zero:
        </p>
        <Sql
          code={`SELECT order_id,
  total_amount / NULLIF(item_count, 0) AS avg_item_price
FROM order_summary;`}
        />
        <Callout>
          <strong>CAST</strong> converts between types explicitly —{' '}
          <code>CAST(base_price AS INTEGER)</code> or the shorthand{' '}
          <code>base_price::INTEGER</code> on Postgres. Reach for it whenever an
          implicit conversion feels risky, like comparing a text column to a
          number.
        </Callout>
        <Exercise
          id="ans-funcs"
          prompt="Return each customer's name in uppercase, and their loyalty_points defaulted to 0 if it's currently NULL."
        >
          <Sql
            code={`SELECT UPPER(name) AS name, COALESCE(loyalty_points, 0) AS loyalty_points
FROM customers;`}
          />
        </Exercise>
      </Topic>

      <Topic id="datatypes" no="05" title="Data types">
        <p>
          Every column commits to a type up front — it&apos;s what keeps a
          price from silently becoming text and a date from being sorted
          alphabetically.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — A column&apos;s type isn&apos;t
          just documentation — it determines how many bytes each value takes on
          disk, which comparison and sort rules apply, and what an index built
          on that column can do. Fixed-width types (INTEGER, DATE) are cheap to
          compare and index; variable-width types (VARCHAR, TEXT) cost a little
          more bookkeeping. Comparing values across mismatched types usually
          triggers an <em>implicit cast</em>, which can quietly disable an index
          that would otherwise have been used — this is a common,
          easy-to-miss cause of a slow query that &quot;should&quot; be fast,
          and it&apos;s why explicit CAST is worth reaching for the moment a
          comparison feels type-ambiguous.
        </Deepdive>
        <p>
          The families you&apos;ll use constantly, with common names across
          Postgres/MySQL/SQL Server (exact names vary a little):
        </p>
        <Sql
          code={`CREATE TABLE pizzas (
  pizza_id      INTEGER,          -- whole numbers
  name          VARCHAR(100),     -- text with a length cap
  description   TEXT,             -- unbounded text
  base_price    DECIMAL(5,2),     -- exact decimal — always for money
  is_vegetarian BOOLEAN,          -- true/false
  created_at    TIMESTAMP,        -- date + time
  launch_date   DATE              -- date only, no time
);`}
        />
        <Callout variant="warn">
          <strong>Never use FLOAT for money</strong> — floating-point types
          (FLOAT, REAL, DOUBLE) store approximations, so{' '}
          <code>0.1 + 0.2</code> can come back as{' '}
          <code>0.30000000000000004</code>. <strong>DECIMAL(precision, scale)</strong>{' '}
          stores exact values instead — that&apos;s why <code>base_price</code>{' '}
          above is DECIMAL(5,2): up to 5 total digits, 2 after the decimal
          point.
        </Callout>
        <p>
          Beyond the basics, most databases also offer: <strong>SERIAL</strong>{' '}
          / <strong>AUTO_INCREMENT</strong> / <strong>IDENTITY</strong> for
          self-incrementing primary keys, <strong>ENUM</strong> for a fixed set
          of allowed text values (like order status), <strong>UUID</strong> for
          globally unique identifiers, and array or JSON types for structured
          values inside a single column (more on JSON in its own section
          later).
        </p>
        <Sql
          code={`CREATE TABLE orders (
  order_id    SERIAL PRIMARY KEY,               -- Postgres auto-increment
  -- order_id INT AUTO_INCREMENT PRIMARY KEY,   -- MySQL equivalent
  -- order_id INT IDENTITY(1,1) PRIMARY KEY,    -- SQL Server equivalent
  status      TEXT NOT NULL DEFAULT 'placed'
);`}
        />
        <Exercise
          id="ans-datatypes"
          prompt="What type would you pick for a loyalty_points column that must always be a non-negative whole number, and why not DECIMAL for it?"
        >
          <p className="mt-2 mb-0 text-muted-foreground">
            INTEGER (with a CHECK constraint for non-negative, if you want to
            enforce it at the schema level). Points are always whole numbers,
            so DECIMAL would just add unnecessary storage and comparison
            overhead for a fractional precision you&apos;ll never use.
          </p>
        </Exercise>
      </Topic>

      <ModuleTitle>Intermediate</ModuleTitle>

      <Topic id="joins" no="06" title="Joins">
        <p>
          The single most important concept in SQL: combining rows across
          tables via a shared key.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — The cleanest mental model for a
          join is: compute the full Cartesian product of both tables (every row
          paired with every row), then keep only the pairs where the ON
          condition is true. No real database actually does that — it would be
          catastrophically slow on large tables — but it&apos;s the correct
          logical definition, and it&apos;s exactly what happens if you forget
          the ON clause entirely. In practice the query planner picks a
          physical strategy (a <strong>nested loop</strong> for small tables, a{' '}
          <strong>hash join</strong> that builds a lookup table from one side,
          or a <strong>merge join</strong> when both sides are already sorted
          on the join key) that produces the identical result far more
          efficiently — which one it picks is visible in EXPLAIN output.
        </Deepdive>
        <p>
          <strong>INNER JOIN</strong> keeps only rows that match on both sides.
          Order + customer, matched by customer_id:
        </p>
        <Sql
          code={`SELECT o.order_id, c.name, o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;`}
        />
        <RefTable
          headers={['order_id', 'name', 'order_date']}
          rows={[
            ['4021', 'Rin Vasquez', '2026-08-14'],
            ['4022', 'Zeta Okonkwo', '2026-08-14'],
          ]}
        />
        <p>
          <strong>LEFT JOIN</strong> keeps every row from the left table even
          when there&apos;s no match on the right — missing matches come back as
          NULL. This is how you find &quot;customers with zero orders&quot;:
        </p>
        <Sql
          code={`SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;`}
        />
        <Callout>
          <strong>Mental model</strong> — INNER JOIN answers &quot;what
          matches?&quot;; LEFT JOIN answers &quot;everything on the left, plus
          whatever matches on the right.&quot; RIGHT JOIN is the mirror image
          (rare in practice — people just swap table order and use LEFT). FULL
          JOIN keeps unmatched rows from both sides at once.
        </Callout>
        <p>
          Joining three tables to answer a real question — &quot;which pizzas
          has each customer ordered?&quot; — chains the same pattern:
        </p>
        <Sql
          code={`SELECT c.name, p.name AS pizza, oi.quantity
FROM customers c
JOIN orders o ON o.customer_id = c.customer_id
JOIN order_items oi ON oi.order_id = o.order_id
JOIN pizzas p ON p.pizza_id = oi.pizza_id
WHERE c.name = 'Rin Vasquez';`}
        />
        <p>
          A <strong>SELF JOIN</strong> is the same trick applied to one table
          twice — say, finding customers on the same planet:
        </p>
        <Sql
          code={`SELECT a.name, b.name, a.planet_id
FROM customers a
JOIN customers b
  ON a.planet_id = b.planet_id
  AND a.customer_id < b.customer_id;`}
        />
        <Callout>
          <strong>Fun fact</strong> — that{' '}
          <code>a.customer_id &lt; b.customer_id</code> isn&apos;t arbitrary.
          Without it you&apos;d get every pair twice (A-B and B-A) plus every
          customer paired with themself. It&apos;s the standard trick for
          &quot;unique pairs&quot; self-joins.
        </Callout>
        <Exercise
          id="ans-joins"
          prompt="List every pizza name alongside the planet name of whoever ordered it (planet through customer through order through order_items)."
        >
          <Sql
            code={`SELECT p.name AS pizza, pl.name AS planet
FROM order_items oi
JOIN pizzas p ON p.pizza_id = oi.pizza_id
JOIN orders o ON o.order_id = oi.order_id
JOIN customers c ON c.customer_id = o.customer_id
JOIN planets pl ON pl.planet_id = c.planet_id;`}
          />
        </Exercise>
      </Topic>

      <Topic id="subq" no="07" title="Subqueries">
        <p>
          A query inside a query — useful whenever the filter itself needs to be
          computed.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Logically, a correlated subquery
          re-runs once for every row of the outer query, substituting that
          row&apos;s value in each time — which is the right mental model even
          though real query planners often rewrite it internally into an
          equivalent join for speed, especially for EXISTS/IN patterns. Where a
          subquery sits changes what it&apos;s allowed to be: in the SELECT
          list it must return exactly one value per outer row (a scalar); in
          FROM it stands in for an entire table (a derived table) and can
          return many rows and columns; in WHERE it&apos;s evaluated as part of
          the filter, most often with IN, EXISTS, or a scalar comparison.
        </Deepdive>
        <p>
          A <strong>scalar subquery</strong> returns one value and can be used
          almost anywhere a literal would go:
        </p>
        <Sql
          code={`SELECT name, base_price
FROM pizzas
WHERE base_price > (SELECT AVG(base_price) FROM pizzas);`}
        />
        <p>
          An <strong>IN subquery</strong> checks membership against a list the
          database computes for you:
        </p>
        <Sql
          code={`SELECT name FROM customers
WHERE customer_id IN (
  SELECT customer_id FROM orders WHERE status = 'cancelled'
);`}
        />
        <p>
          A <strong>correlated subquery</strong> re-runs once per outer row,
          referencing a column from outside — powerful, but potentially slow on
          large tables:
        </p>
        <Sql
          code={`SELECT c.name
FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.customer_id = c.customer_id AND o.status = 'delivered'
);`}
        />
        <Callout>
          <strong>EXISTS vs IN</strong> — <code>EXISTS</code> only checks
          &quot;is there at least one match&quot; and stops as soon as it finds
          one, so it&apos;s often faster than IN for correlated checks, and it
          handles NULLs more predictably. As a rule of thumb: reach for EXISTS
          when checking presence, IN when you have a fixed, small list.
        </Callout>
        <p>
          Subqueries can also stand in for a table entirely, in the FROM clause
          — this is called a <strong>derived table</strong>:
        </p>
        <Sql
          code={`SELECT planet_id, avg_points
FROM (
  SELECT planet_id, AVG(loyalty_points) AS avg_points
  FROM customers
  GROUP BY planet_id
) planet_averages
WHERE avg_points > 400;`}
        />
        <Exercise
          id="ans-subq"
          prompt="Find every pizza that has never appeared in an order_items row (a total dud on the menu)."
        >
          <Sql
            code={`SELECT name FROM pizzas
WHERE pizza_id NOT IN (
  SELECT pizza_id FROM order_items
);
-- or, more safely if pizza_id can be NULL anywhere:
SELECT name FROM pizzas p
WHERE NOT EXISTS (
  SELECT 1 FROM order_items oi WHERE oi.pizza_id = p.pizza_id
);`}
          />
        </Exercise>
      </Topic>

      <Topic id="setops" no="08" title="Set operations">
        <p>
          Combining two result sets vertically, rather than side by side like a
          join.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — This is one of the few places SQL
          shows its mathematical roots in <strong>set theory</strong>: UNION,
          INTERSECT, and EXCEPT all treat their inputs as sets of rows, so UNION
          removes duplicates by definition, the same way {'{1,2,3}'} ∪{' '}
          {'{2,3,4}'} is {'{1,2,3,4}'}, not a list with 2 and 3 twice. This is
          actually the exception in SQL, not the rule — ordinary tables and
          plain SELECT results are <em>bags</em> (duplicates allowed) rather
          than true sets, which is exactly why UNION ALL exists as the
          &quot;just concatenate them&quot; escape hatch, and why it&apos;s
          faster: it skips the duplicate-elimination pass entirely.
        </Deepdive>
        <p>
          <strong>UNION</strong> stacks two queries and removes duplicate rows;{' '}
          <strong>UNION ALL</strong> keeps everything and is faster since it
          skips the dedup step. Both require the same number of columns with
          compatible types on each side:
        </p>
        <Sql
          code={`SELECT name FROM customers WHERE planet_id = 1
UNION
SELECT name FROM customers WHERE loyalty_points > 900;`}
        />
        <p>
          <strong>INTERSECT</strong> keeps only rows appearing in both queries;{' '}
          <strong>EXCEPT</strong> (called MINUS in some databases) keeps rows
          from the first query that don&apos;t appear in the second:
        </p>
        <Sql
          code={`-- customers who ordered AND have high loyalty points
SELECT customer_id FROM orders
INTERSECT
SELECT customer_id FROM customers WHERE loyalty_points > 500;

-- pizzas nobody has ordered this month
SELECT pizza_id FROM pizzas
EXCEPT
SELECT pizza_id FROM order_items;`}
        />
        <Callout>
          <strong>Note</strong> — MySQL didn&apos;t support INTERSECT/EXCEPT
          until fairly recently; PostgreSQL, SQL Server, and SQLite have
          supported them for a long time. If you&apos;re not sure your engine
          supports one, the equivalent can always be rewritten with JOIN/NOT
          EXISTS.
        </Callout>
        <Exercise
          id="ans-setops"
          prompt="Get a single deduplicated list of names of anyone who is either a customer on planet 1 or has placed a cancelled order."
        >
          <Sql
            code={`SELECT name FROM customers WHERE planet_id = 1
UNION
SELECT c.name FROM customers c
JOIN orders o ON o.customer_id = c.customer_id
WHERE o.status = 'cancelled';`}
          />
        </Exercise>
      </Topic>

      <Topic id="case" no="09" title="CASE & conditionals">
        <p>
          SQL&apos;s if/else — turning raw values into labels, buckets, or
          computed columns.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — CASE is an <strong>expression</strong>,
          not a control-flow statement — it evaluates to a single value and can
          be dropped in anywhere a column or literal could go: in SELECT,
          WHERE, ORDER BY, or nested inside another function call. Like
          short-circuit evaluation in most programming languages, it checks
          WHEN clauses top to bottom and stops at the first one that&apos;s
          true, so ordering matters when conditions could overlap — put the
          most specific condition first. With no ELSE and no branch matching,
          the whole expression simply evaluates to NULL, which is a deliberate
          design choice, not an error.
        </Deepdive>
        <Sql
          code={`SELECT name,
  CASE
    WHEN loyalty_points >= 800 THEN 'Platinum'
    WHEN loyalty_points >= 400 THEN 'Gold'
    ELSE 'Standard'
  END AS tier
FROM customers;`}
        />
        <RefTable
          headers={['name', 'tier']}
          rows={[
            ['Zeta Okonkwo', 'Platinum'],
            ['Marlowe Duque', 'Gold'],
            ['Theo Park', 'Standard'],
          ]}
        />
        <p>
          CASE is also how you do &quot;conditional aggregation&quot; — counting
          or summing only rows that meet a condition, all in one pass, which is
          a very common reporting pattern:
        </p>
        <Sql
          code={`SELECT
  COUNT(CASE WHEN status = 'delivered' THEN 1 END) AS delivered,
  COUNT(CASE WHEN status = 'cancelled' THEN 1 END) AS cancelled
FROM orders;`}
        />
        <Callout>
          <strong>Why this works</strong> — <code>COUNT</code> ignores NULLs,
          and a CASE with no matching branch (no ELSE) returns NULL. So{' '}
          <code>COUNT(CASE WHEN x THEN 1 END)</code> quietly becomes &quot;count
          rows where x is true&quot; — a neat, widely-used trick.
        </Callout>
        <Exercise
          id="ans-case"
          prompt="Label every pizza as 'Budget' (under $9), 'Standard' ($9–$13), or 'Premium' (over $13)."
        >
          <Sql
            code={`SELECT name,
  CASE
    WHEN base_price < 9 THEN 'Budget'
    WHEN base_price <= 13 THEN 'Standard'
    ELSE 'Premium'
  END AS price_tier
FROM pizzas;`}
          />
        </Exercise>
      </Topic>

      <Topic id="views" no="10" title="Views">
        <p>
          A view is a saved query that behaves like a table — write the JOIN
          once, query it forever.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — A plain view stores nothing but the
          query text itself — think of it as a named, reusable macro. When you
          SELECT from a view, the database substitutes the view&apos;s
          definition into your query before planning it, so a view over a
          five-table join costs exactly what running that join directly would
          cost; it buys you readability and access control, not speed. This
          substitution also means a view always reflects live data with zero
          staleness, which is the opposite trade-off from a materialized view,
          where the query runs once up front and the result is physically
          stored until you explicitly refresh it.
        </Deepdive>
        <Sql
          code={`CREATE VIEW vegetarian_menu AS
SELECT pizza_id, name, base_price
FROM pizzas
WHERE is_vegetarian = true;

SELECT * FROM vegetarian_menu
ORDER BY base_price;`}
        />
        <p>
          Nothing is duplicated on disk — a plain view just re-runs its
          underlying query every time you select from it. That makes it a way to
          hide complexity (a five-table join becomes one friendly name), and a
          way to restrict access (grant a report-writer access to a view that
          excludes sensitive columns, instead of the whole table).
        </p>
        <Sql
          code={`CREATE VIEW customer_order_summary AS
SELECT c.customer_id, c.name,
       COUNT(o.order_id) AS total_orders,
       SUM(oi.quantity * p.base_price) AS lifetime_spend
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
LEFT JOIN order_items oi ON oi.order_id = o.order_id
LEFT JOIN pizzas p ON p.pizza_id = oi.pizza_id
GROUP BY c.customer_id, c.name;`}
        />
        <p>
          Once created, <code>customer_order_summary</code> reads exactly like a
          table — join it, filter it, sort it.{' '}
          <strong>CREATE OR REPLACE VIEW</strong> updates its definition in
          place without needing to drop it first.
        </p>
        <Callout>
          <strong>Materialized views</strong> — a regular view costs nothing to
          store but re-computes on every query, which gets slow for expensive
          aggregations. A <strong>materialized view</strong> runs the query once
          and stores the actual result, then serves reads from that snapshot
          until you explicitly <code>REFRESH MATERIALIZED VIEW</code>. Trade
          freshness for speed — great for dashboards that update the numbers
          once an hour, not right this second.
        </Callout>
        <Exercise
          id="ans-views"
          prompt={
            <>
              Create a view called <code>popular_pizzas</code> showing each
              pizza&apos;s name and total quantity ordered across all
              order_items, for pizzas ordered more than 20 times total.
            </>
          }
        >
          <Sql
            code={`CREATE VIEW popular_pizzas AS
SELECT p.name, SUM(oi.quantity) AS total_ordered
FROM order_items oi
JOIN pizzas p ON p.pizza_id = oi.pizza_id
GROUP BY p.name
HAVING SUM(oi.quantity) > 20;`}
          />
        </Exercise>
      </Topic>

      <Topic id="ddl" no="11" title="ALTER, DROP & TRUNCATE">
        <p>
          Schemas aren&apos;t set in stone — these are the statements that
          change a table&apos;s shape after it already has data in it.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — DDL (ALTER, DROP, CREATE, TRUNCATE)
          is fundamentally different from DML (SELECT, INSERT, UPDATE, DELETE):
          DDL changes the schema&apos;s metadata rather than row data. Whether
          DDL can be safely wrapped in a transaction and rolled back varies a
          lot by database — Postgres supports fully transactional DDL, so a
          failed migration script rolls back cleanly, while MySQL historically
          causes an implicit commit around most DDL statements, meaning a
          half-finished migration can leave the schema in a partially changed
          state that a ROLLBACK won&apos;t undo. Always check your specific
          engine&apos;s behavior before assuming a schema change is undoable
          mid-transaction.
        </Deepdive>
        <p>
          <strong>ALTER TABLE</strong> adds, removes, or modifies columns and
          constraints on an existing table:
        </p>
        <Sql
          code={`ALTER TABLE pizzas ADD COLUMN calories INTEGER;
ALTER TABLE pizzas ALTER COLUMN base_price SET NOT NULL;   -- Postgres
ALTER TABLE pizzas DROP COLUMN calories;
ALTER TABLE pizzas RENAME COLUMN name TO pizza_name;
ALTER TABLE pizzas ADD CONSTRAINT chk_price CHECK (base_price > 0);`}
        />
        <p>
          Three ways to get rid of data, each with a very different blast
          radius:
        </p>
        <Sql
          code={`DELETE FROM orders WHERE status = 'cancelled';  -- removes matching rows, logged, can be rolled back
TRUNCATE TABLE orders;                           -- removes ALL rows instantly, minimal logging
DROP TABLE orders;                               -- removes the rows AND the table structure itself`}
        />
        <Callout variant="warn">
          <strong>Know the difference</strong> — DELETE is a DML statement: it
          respects WHERE, fires triggers, and can be rolled back inside a
          transaction on most databases. TRUNCATE is much faster because it
          doesn&apos;t scan row by row, but it can&apos;t be filtered —
          it&apos;s all rows or nothing. DROP removes the table definition
          itself; querying it afterward is an error, not an empty result.
        </Callout>
        <p>
          Running ALTER TABLE on a huge, live production table can lock it for
          reads/writes while the change applies — worth checking your
          database&apos;s specific behavior (Postgres, for instance, handles
          many ALTERs without a long lock; older MySQL versions historically
          didn&apos;t) before running one during business hours.
        </p>
        <Exercise
          id="ans-ddl"
          prompt={
            <>
              Add a NOT NULL column called <code>delivery_notes</code> (type
              TEXT) to the orders table, with an empty string as its default.
            </>
          }
        >
          <Sql
            code={`ALTER TABLE orders
ADD COLUMN delivery_notes TEXT NOT NULL DEFAULT '';`}
          />
        </Exercise>
      </Topic>

      <Topic id="upsert" no="12" title="INSERT...SELECT & upserts">
        <p>
          Writing rows in bulk, and the &quot;insert or update&quot; pattern
          every real application needs eventually.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — The reason a naive &quot;SELECT to
          check, then INSERT or UPDATE&quot; is unsafe under concurrency comes
          down to a gap between the read and the write: two connections can
          both run the SELECT, both see no existing row, and both then INSERT
          — one succeeds and the other hits a duplicate-key error, or worse,
          both succeed and you get silent duplicate data if there&apos;s no
          unique constraint at all. An upsert statement pushes the whole
          check-and-write into a single atomic operation handled by the storage
          engine itself, using the row&apos;s own locking mechanism, so
          there&apos;s no window for another transaction to interleave.
        </Deepdive>
        <p>
          <strong>INSERT INTO ... SELECT</strong> writes the results of a query
          straight into a table — no need to pull rows out and reinsert them
          one at a time:
        </p>
        <Sql
          code={`CREATE TABLE archived_orders (LIKE orders INCLUDING ALL);

INSERT INTO archived_orders
SELECT * FROM orders
WHERE status = 'delivered' AND order_date < '2025-01-01';`}
        />
        <p>
          An <strong>upsert</strong> means &quot;insert this row, or if it
          already exists, update it instead&quot; — the classic use case is a
          loyalty points table keyed by customer, where you don&apos;t know
          ahead of time if a row already exists:
        </p>
        <Sql
          code={`-- Postgres / SQLite
INSERT INTO customer_totals (customer_id, orders_count)
VALUES (101, 1)
ON CONFLICT (customer_id)
DO UPDATE SET orders_count = customer_totals.orders_count + 1;

-- MySQL
INSERT INTO customer_totals (customer_id, orders_count)
VALUES (101, 1)
ON DUPLICATE KEY UPDATE orders_count = orders_count + 1;

-- SQL Server / standard SQL
MERGE INTO customer_totals AS target
USING (SELECT 101 AS customer_id) AS src
ON target.customer_id = src.customer_id
WHEN MATCHED THEN UPDATE SET orders_count = orders_count + 1
WHEN NOT MATCHED THEN INSERT (customer_id, orders_count) VALUES (101, 1);`}
        />
        <Callout>
          <strong>Why not just SELECT-then-INSERT-or-UPDATE?</strong> —
          checking whether a row exists and then deciding what to do is two
          round trips with a race condition in between: another connection
          could insert the same row in the gap. Upsert statements do the
          check-and-write atomically in one round trip, avoiding that race
          entirely.
        </Callout>
        <Exercise
          id="ans-upsert"
          prompt={
            <>
              Using Postgres-style syntax, upsert a row into a{' '}
              <code>pizza_of_the_month</code> table keyed by{' '}
              <code>year_month</code>, setting <code>pizza_id</code> to 3 for
              &apos;2026-09&apos; — insert it if the month has no row yet,
              otherwise update the existing one.
            </>
          }
        >
          <Sql
            code={`INSERT INTO pizza_of_the_month (year_month, pizza_id)
VALUES ('2026-09', 3)
ON CONFLICT (year_month)
DO UPDATE SET pizza_id = EXCLUDED.pizza_id;`}
          />
        </Exercise>
      </Topic>

      <ModuleTitle>Advanced</ModuleTitle>

      <Topic id="window" no="13" title="Window functions">
        <p>
          Aggregate-like calculations that don&apos;t collapse rows — each row
          keeps its identity while still seeing its group.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — The defining feature of a window
          function is the <strong>frame</strong> — the subset of rows visible
          to the calculation for the &quot;current&quot; row, defined by
          PARTITION BY (which rows are in scope) and an optional ROWS/RANGE
          BETWEEN clause (how much of that partition, relative to the current
          row, participates — e.g. &quot;from the start of the partition to the
          current row&quot; for a running total). This is precisely why window
          functions don&apos;t collapse rows the way GROUP BY does: each row
          keeps its own identity, computed against its own frame, rather than
          every row in a group being reduced to one output row.
        </Deepdive>
        <p>
          The giveaway syntax is <strong>OVER (...)</strong>.{' '}
          <strong>ROW_NUMBER</strong> assigns a unique rank per partition:
        </p>
        <Sql
          code={`SELECT name, planet_id, loyalty_points,
  ROW_NUMBER() OVER (
    PARTITION BY planet_id
    ORDER BY loyalty_points DESC
  ) AS rank_on_planet
FROM customers;`}
        />
        <RefTable
          headers={['name', 'planet_id', 'loyalty_points', 'rank_on_planet']}
          rows={[
            ['Zeta Okonkwo', '1', '980', '1'],
            ['Ines Halloway', '1', '710', '2'],
            ['Rin Vasquez', '2', '875', '1'],
          ]}
        />
        <p>
          That&apos;s the classic &quot;top N per group&quot; pattern — wrap it
          in a subquery and filter on rank_on_planet to get, say, the top 3
          customers per planet, something a plain GROUP BY simply cannot
          express.
        </p>
        <p>
          <strong>RANK</strong> and <strong>DENSE_RANK</strong> behave like
          ROW_NUMBER but give tied rows the same rank — RANK leaves a gap
          afterward, DENSE_RANK doesn&apos;t:
        </p>
        <Sql
          code={`SELECT name, base_price,
  RANK() OVER (ORDER BY base_price DESC) AS price_rank
FROM pizzas;`}
        />
        <p>
          Window functions also do running totals and moving calculations,
          without any self-join:
        </p>
        <Sql
          code={`SELECT order_date, order_id,
  SUM(1) OVER (ORDER BY order_date) AS running_order_count
FROM orders;`}
        />
        <Callout>
          <strong>Fun fact</strong> — window functions run <em>after</em> WHERE,
          GROUP BY and HAVING, but <em>before</em> the final ORDER BY.
          That&apos;s why you can&apos;t filter on a window function&apos;s
          result directly in WHERE — you wrap the whole query in a subquery (or
          CTE) and filter the outer layer instead.
        </Callout>
        <Exercise
          id="ans-window"
          prompt="For each order, show the pizza with the running total of quantity ordered so far, ordered by order_date, using SUM() OVER."
        >
          <Sql
            code={`SELECT o.order_date, oi.pizza_id, oi.quantity,
  SUM(oi.quantity) OVER (ORDER BY o.order_date) AS running_qty
FROM orders o
JOIN order_items oi ON oi.order_id = o.order_id;`}
          />
        </Exercise>
      </Topic>

      <Topic id="cte" no="14" title="CTEs & recursion">
        <p>
          A CTE (Common Table Expression) is a named, temporary result set
          defined with WITH — think of it as giving a subquery a name and
          reusing it.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Whether a CTE runs as an
          independent, one-time computation or gets folded directly into the
          surrounding query (the way a subquery would) depends on the engine
          and version — Postgres before version 12 always materialized every
          CTE as an <em>optimization fence</em> (compute it fully, once, in
          isolation), which was sometimes a deliberate performance trick and
          sometimes an accidental slowdown; Postgres 12+ inlines CTEs by
          default like ordinary subqueries unless you force materialization
          with the MATERIALIZED keyword. A recursive CTE runs as a fixed-point
          loop: it executes the anchor once, then repeatedly re-runs the
          recursive part against only the rows produced by the previous
          iteration, stopping automatically the moment an iteration produces
          zero new rows.
        </Deepdive>
        <Sql
          code={`WITH planet_totals AS (
  SELECT planet_id, COUNT(*) AS customer_count
  FROM customers
  GROUP BY planet_id
)
SELECT pl.name, pt.customer_count
FROM planet_totals pt
JOIN planets pl ON pl.planet_id = pt.planet_id
WHERE pt.customer_count > 20;`}
        />
        <p>
          Nothing here that a subquery couldn&apos;t do — but CTEs read
          top-to-bottom like a recipe, and you can chain several, each building
          on the last, which keeps complex reporting queries readable.
        </p>
        <Sql
          code={`WITH order_totals AS (
  SELECT o.order_id, o.customer_id, SUM(oi.quantity * p.base_price) AS total
  FROM orders o
  JOIN order_items oi ON oi.order_id = o.order_id
  JOIN pizzas p ON p.pizza_id = oi.pizza_id
  GROUP BY o.order_id, o.customer_id
),
customer_spend AS (
  SELECT customer_id, SUM(total) AS lifetime_spend
  FROM order_totals
  GROUP BY customer_id
)
SELECT c.name, cs.lifetime_spend
FROM customer_spend cs
JOIN customers c ON c.customer_id = cs.customer_id
ORDER BY cs.lifetime_spend DESC;`}
        />
        <p>
          A <strong>recursive CTE</strong> refers to itself, which is how SQL
          walks hierarchies — org charts, category trees, or here, a referral
          chain between customers:
        </p>
        <Sql
          code={`WITH RECURSIVE referral_chain AS (
  SELECT customer_id, referred_by, 1 AS depth
  FROM customers
  WHERE customer_id = 42        -- anchor: starting point

  UNION ALL

  SELECT c.customer_id, c.referred_by, rc.depth + 1
  FROM customers c
  JOIN referral_chain rc ON c.referred_by = rc.customer_id
)
SELECT * FROM referral_chain;`}
        />
        <Callout>
          <strong>How to read a recursive CTE</strong> — the part above UNION
          ALL is the &quot;anchor&quot; (where recursion starts); the part below
          is the &quot;recursive member,&quot; which keeps joining back to its
          own output until no new rows are produced. It always terminates
          because eventually the join finds nothing new to add.
        </Callout>
        <Exercise
          id="ans-cte"
          prompt="Using a CTE, find the single pizza that generates the most total revenue (quantity × base_price, summed across all orders)."
        >
          <Sql
            code={`WITH pizza_revenue AS (
  SELECT p.pizza_id, p.name, SUM(oi.quantity * p.base_price) AS revenue
  FROM order_items oi
  JOIN pizzas p ON p.pizza_id = oi.pizza_id
  GROUP BY p.pizza_id, p.name
)
SELECT name, revenue
FROM pizza_revenue
ORDER BY revenue DESC
LIMIT 1;`}
          />
        </Exercise>
      </Topic>

      <Topic id="grouping" no="15" title="ROLLUP, CUBE & GROUPING SETS">
        <p>
          Subtotals and grand totals in a single query, instead of stitching
          several GROUP BY results together yourself.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Conceptually, ROLLUP(a, b) is
          shorthand for running GROUP BY (a, b), then GROUP BY (a), then a
          grand total GROUP BY (), and UNION ALL-ing the three result sets
          together — the database does this far more efficiently than three
          separate scans, but that&apos;s the logical output you get: one row
          per grouping level, with NULL standing in for &quot;this column
          isn&apos;t part of this particular subtotal.&quot; CUBE generalizes
          this to every possible combination of the grouped columns rather than
          just the nested hierarchy ROLLUP assumes, and GROUPING SETS lets you
          hand-pick exactly which of those combinations you want, skipping ones
          you don&apos;t need.
        </Deepdive>
        <p>
          Plain GROUP BY gives you one row per combination. <strong>ROLLUP</strong>{' '}
          adds subtotal rows going from the most detailed grouping up to a
          grand total — think of a sales report with per-planet subtotals and
          one grand total at the bottom:
        </p>
        <Sql
          code={`SELECT planet_id, status, COUNT(*) AS order_count
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
GROUP BY ROLLUP(planet_id, status);`}
        />
        <RefTable
          caption="result — subtotal rows have NULL in the rolled-up column"
          headers={['planet_id', 'status', 'order_count']}
          rows={[
            ['1', 'delivered', '40'],
            ['1', 'cancelled', '2'],
            ['1', 'NULL', '42'],
            ['NULL', 'NULL', '157'],
          ]}
        />
        <p>
          <strong>CUBE</strong> goes further and computes subtotals for every
          combination of the grouped columns, not just the hierarchical rollup
          order — useful when you want &quot;totals by planet&quot; AND
          &quot;totals by status&quot; AND the grand total, all at once.
        </p>
        <p>
          <strong>GROUPING SETS</strong> is the most flexible of the three: you
          specify exactly which groupings you want, with no assumed hierarchy:
        </p>
        <Sql
          code={`SELECT planet_id, status, COUNT(*) AS order_count
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
GROUP BY GROUPING SETS ((planet_id), (status), ());`}
        />
        <Callout>
          <strong>Telling a subtotal from a real NULL</strong> — the{' '}
          <code>GROUPING()</code> function returns 1 for a column that&apos;s
          been rolled up into a subtotal, and 0 otherwise, which disambiguates a
          rolled-up NULL from a genuine NULL value in the data:{' '}
          <code>GROUPING(status)</code> in the SELECT list. Dialect support
          varies — Postgres, SQL Server, and MySQL 8+ support all three; SQLite
          doesn&apos;t, and there you&apos;d fall back to UNION ALL of separate
          GROUP BY queries.
        </Callout>
        <Exercise
          id="ans-grouping"
          prompt="Using ROLLUP, get pizza order counts per planet, with a grand total row at the end."
        >
          <Sql
            code={`SELECT pl.name AS planet, COUNT(*) AS orders_placed
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
JOIN planets pl ON pl.planet_id = c.planet_id
GROUP BY ROLLUP(pl.name);`}
          />
        </Exercise>
      </Topic>

      <Topic id="pivot" no="16" title="Pivoting data">
        <p>
          Turning row values into columns — the reporting-spreadsheet shape
          people usually expect.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Pivoting is really just conditional
          aggregation wearing a different hat:{' '}
          <code>SUM(CASE WHEN status = &apos;delivered&apos; THEN 1 ELSE 0 END)</code>{' '}
          is doing exactly what a dedicated PIVOT clause does, just spelled out
          explicitly. The underlying trade-off is <strong>long vs wide</strong>{' '}
          data: a long, normalized table (one row per fact) is flexible, easy
          to extend with a new category without touching the schema, and
          simple to constrain and index — a wide, pivoted table is what a human
          reading a report wants to see, but adding a new category means adding
          a new column. Most systems store data long and pivot only at the
          final reporting step, right before it reaches a person.
        </Deepdive>
        <p>
          SQL is naturally &quot;long&quot;: one row per fact. Reports often
          want &quot;wide&quot;: one row per entity, one column per category.
          The universal, portable way to pivot is conditional aggregation — a
          CASE inside an aggregate, one branch per column you want:
        </p>
        <Sql
          code={`SELECT
  pl.name AS planet,
  SUM(CASE WHEN o.status = 'delivered' THEN 1 ELSE 0 END) AS delivered,
  SUM(CASE WHEN o.status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled,
  SUM(CASE WHEN o.status = 'in_transit' THEN 1 ELSE 0 END) AS in_transit
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
JOIN planets pl ON pl.planet_id = c.planet_id
GROUP BY pl.name;`}
        />
        <RefTable
          headers={['planet', 'delivered', 'cancelled', 'in_transit']}
          rows={[
            ['Kepler Junction', '40', '2', '1'],
            ['Rigel Outpost', '28', '0', '3'],
          ]}
        />
        <p>
          Some databases also offer a dedicated <strong>PIVOT</strong> keyword
          (SQL Server, Oracle) that does the same thing with less typing once
          you already know the column list ahead of time. Postgres has no
          built-in PIVOT — the <code>crosstab()</code> function from the{' '}
          <code>tablefunc</code> extension covers the same ground, but
          conditional aggregation works everywhere with zero setup, which is
          why it&apos;s worth knowing regardless of dialect.
        </p>
        <Callout>
          <strong>UNPIVOT</strong> is the reverse — turning columns back into
          rows — and is far less common in practice than pivoting; it mostly
          shows up when ingesting spreadsheet-shaped source data into a
          normalized table.
        </Callout>
        <Exercise
          id="ans-pivot"
          prompt="Pivot the pizzas table into one row showing counts of vegetarian vs non-vegetarian pizzas as two columns."
        >
          <Sql
            code={`SELECT
  SUM(CASE WHEN is_vegetarian THEN 1 ELSE 0 END) AS vegetarian_count,
  SUM(CASE WHEN NOT is_vegetarian THEN 1 ELSE 0 END) AS non_vegetarian_count
FROM pizzas;`}
          />
        </Exercise>
      </Topic>

      <Topic id="dml" no="17" title="Writes & transactions">
        <p>
          Everything so far only read data. Now let&apos;s change it — safely.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Underneath a transaction, most
          databases use <strong>write-ahead logging</strong>: before a change is
          applied to the actual data files, a record of the intended change is
          written to a durable log. COMMIT means that log record has been
          flushed to disk (fsynced) — that&apos;s the mechanism behind the
          &quot;durable&quot; guarantee in ACID: even if the server crashes one
          microsecond after COMMIT returns, replaying the log on restart
          recovers the change. ROLLBACK, conversely, simply means those log
          entries are never applied (or an &quot;undo&quot; record reverses
          them), so the data files never reflect the abandoned change at all.
        </Deepdive>
        <Sql
          code={`INSERT INTO customers (name, planet_id, joined_date, loyalty_points)
VALUES ('Nova Ibrahim', 4, '2026-09-12', 0);

UPDATE customers
SET loyalty_points = loyalty_points + 50
WHERE customer_id = 101;

DELETE FROM orders
WHERE status = 'cancelled' AND order_date < '2025-01-01';`}
        />
        <Callout variant="warn">
          <strong>The single most important habit</strong> — always write and
          test the WHERE clause of an UPDATE or DELETE as a SELECT first. Run{' '}
          <code>
            SELECT * FROM orders WHERE status = &apos;cancelled&apos; AND
            order_date &lt; &apos;2025-01-01&apos;
          </code>
          , confirm those are exactly the rows you mean, then swap SELECT * for
          the DELETE. An UPDATE or DELETE with no WHERE clause touches every
          single row in the table.
        </Callout>
        <p>
          A <strong>transaction</strong> groups multiple statements into one
          all-or-nothing unit — either every statement succeeds and is saved (
          <strong>COMMIT</strong>), or something goes wrong and none of it is (
          <strong>ROLLBACK</strong>). This matters the moment an order touches
          more than one table:
        </p>
        <Sql
          code={`BEGIN TRANSACTION;

INSERT INTO orders (customer_id, order_date, status)
VALUES (101, '2026-09-12', 'placed');

INSERT INTO order_items (order_id, pizza_id, quantity)
VALUES (LAST_INSERT_ID(), 3, 2);

UPDATE customers
SET loyalty_points = loyalty_points + 10
WHERE customer_id = 101;

COMMIT;`}
        />
        <p>
          If the server crashed between the two INSERTs with no transaction,
          you&apos;d have an order with no items — a corrupt, half-written
          order. The transaction guarantees that either all three statements
          land, or none do.
        </p>
        <Callout>
          <strong>ACID, briefly</strong> — <strong>A</strong>tomic
          (all-or-nothing), <strong>C</strong>onsistent (never breaks stated
          rules/constraints), <strong>I</strong>solated (concurrent transactions
          don&apos;t see each other&apos;s half-finished work),{' '}
          <strong>D</strong>urable (once committed, survives a crash). It&apos;s
          the guarantee a relational database is really selling you.
        </Callout>
        <Exercise
          id="ans-dml"
          prompt="As a single transaction: mark order 4021 as 'delivered', and add 25 loyalty points to whichever customer placed it."
        >
          <Sql
            code={`BEGIN TRANSACTION;

UPDATE orders SET status = 'delivered' WHERE order_id = 4021;

UPDATE customers
SET loyalty_points = loyalty_points + 25
WHERE customer_id = (SELECT customer_id FROM orders WHERE order_id = 4021);

COMMIT;`}
          />
        </Exercise>
      </Topic>

      <Topic id="isolation" no="18" title="Isolation & locking">
        <p>
          The &quot;I&quot; in ACID, unpacked — what exactly two transactions
          running at the same time are allowed to see of each other.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — The mechanism most modern databases
          (Postgres, MySQL&apos;s InnoDB, Oracle) use to deliver these
          isolation levels without constantly blocking readers behind writers
          is called <strong>MVCC — multi-version concurrency control</strong>.
          Instead of locking a row every time it&apos;s read, the database
          keeps multiple versions of a row around and hands each transaction a
          consistent snapshot as of some point in time, so readers never wait
          on writers and writers never wait on readers — only writer-vs-writer
          conflicts on the same row need actual locks. This is why READ
          COMMITTED is usually cheap: it just means &quot;take a fresh snapshot
          for each statement&quot; rather than &quot;acquire a lock for each
          read.&quot;
        </Deepdive>
        <p>
          Perfect isolation (every transaction behaves as if it ran completely
          alone) is expensive, so databases offer weaker levels that trade
          correctness guarantees for speed. From loosest to strictest:
        </p>
        <Sql
          code={`-- Set for the current transaction
BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- other options: READ UNCOMMITTED, REPEATABLE READ, SERIALIZABLE`}
        />
        <p>
          <strong>READ UNCOMMITTED</strong> can see other transactions&apos;
          uncommitted changes (&quot;dirty reads&quot;) — rare in practice,
          mostly a legacy option. <strong>READ COMMITTED</strong> (the default
          on Postgres, Oracle, SQL Server) only ever sees committed data, but a
          value can change between two reads in the same transaction.{' '}
          <strong>REPEATABLE READ</strong> (MySQL&apos;s default) guarantees the
          same row reads the same value for the whole transaction.{' '}
          <strong>SERIALIZABLE</strong> is the strictest — transactions behave
          as if run one at a time, at the cost of more aborted/retried
          transactions under contention.
        </p>
        <Callout>
          <strong>The classic anomalies</strong> — <strong>dirty read</strong>:
          seeing another transaction&apos;s uncommitted change.{' '}
          <strong>Non-repeatable read</strong>: re-reading the same row twice in
          one transaction and getting different values because someone else
          committed a change in between. <strong>Phantom read</strong>:
          re-running the same WHERE query twice and getting a different set of
          rows because someone else inserted a matching row. Each stricter
          isolation level rules out one more of these.
        </Callout>
        <p>
          <strong>FOR UPDATE</strong> takes an explicit row lock, so other
          transactions have to wait before they can modify (or sometimes even
          read) the same rows — the standard way to safely do &quot;read a
          value, then update it based on what you read&quot; without a race:
        </p>
        <Sql
          code={`BEGIN;
SELECT loyalty_points FROM customers WHERE customer_id = 101 FOR UPDATE;
-- application computes new_points based on the value above
UPDATE customers SET loyalty_points = 990 WHERE customer_id = 101;
COMMIT;`}
        />
        <Callout>
          <strong>Deadlocks</strong> — if transaction A locks row 1 and waits
          for row 2, while transaction B locks row 2 and waits for row 1,
          neither can proceed. The database detects this and kills one of them
          automatically (returning a deadlock error to retry). Locking rows in
          a consistent order across your application is the usual way to avoid
          triggering it in the first place.
        </Callout>
        <Exercise
          id="ans-isolation"
          prompt="You're decrementing pizza stock when an order is placed, and two customers could order the last pizza at the same instant. What should you add to the SELECT that checks current stock, to prevent both orders from succeeding?"
        >
          <Sql code={`SELECT stock FROM pizzas WHERE pizza_id = 3 FOR UPDATE;`} />
          <p className="mt-2 mb-0 text-muted-foreground">
            FOR UPDATE locks that row so the second transaction has to wait
            until the first one commits (and sees the now-updated stock),
            rather than both reading the same stale stock value and both
            proceeding.
          </p>
        </Exercise>
      </Topic>

      <Topic id="json" no="19" title="JSON & semi-structured data">
        <p>
          Sometimes a column&apos;s shape genuinely varies row to row — modern
          SQL databases let you store and query JSON without giving up the
          rest of SQL.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — A JSON/JSONB column trades the
          database&apos;s normal type system for flexibility: instead of a
          fixed set of typed columns the planner can reason about precisely,
          you get a single opaque blob that has to be parsed and traversed at
          query time. Postgres&apos;s JSONB specifically pre-parses the JSON
          into a binary, indexable form at write time (unlike plain JSON, which
          is stored as text and re-parsed on every read), which is why JSONB is
          almost always the better default when the underlying data is
          structured JSON rather than a JSON string you&apos;re just passing
          through unchanged.
        </Deepdive>
        <p>
          Say each pizza has flexible, changing nutritional metadata that
          doesn&apos;t deserve its own rigid columns:
        </p>
        <Sql
          code={`ALTER TABLE pizzas ADD COLUMN metadata JSONB;   -- JSONB on Postgres, JSON on MySQL/SQL Server

UPDATE pizzas
SET metadata = '{"calories": 820, "allergens": ["gluten", "dairy"], "spice_level": 2}'
WHERE pizza_id = 3;`}
        />
        <p>
          Querying inside the JSON uses operators or functions rather than
          plain column names:
        </p>
        <Sql
          code={`-- Postgres: ->> extracts as text, -> extracts as JSON
SELECT name, metadata ->> 'calories' AS calories
FROM pizzas
WHERE (metadata ->> 'spice_level')::INT >= 2;

-- MySQL
SELECT name, JSON_EXTRACT(metadata, '$.calories') AS calories
FROM pizzas
WHERE JSON_EXTRACT(metadata, '$.spice_level') >= 2;`}
        />
        <Callout>
          <strong>When to reach for JSON vs a real column</strong> — JSON is
          great for data whose shape genuinely varies or evolves (metadata,
          user preferences, webhook payloads) or that you rarely filter on.
          Anything you query, join, or index constantly belongs in its own
          typed column — you lose most of SQL&apos;s type-checking, constraint
          enforcement, and query-planner efficiency once data is buried inside
          JSON.
        </Callout>
        <p>
          Most engines also support indexing into JSON for the fields you do
          query often (a GIN index on JSONB in Postgres, for example), so
          &quot;JSON means slow&quot; isn&apos;t automatically true — it&apos;s
          a genuine, deliberate trade-off rather than an anti-pattern to avoid
          entirely.
        </p>
        <Exercise
          id="ans-json"
          prompt='Write a query returning the name and allergens list (as JSON) for every pizza whose metadata lists "dairy" among its allergens (Postgres syntax is fine).'
        >
          <Sql
            code={`SELECT name, metadata -> 'allergens' AS allergens
FROM pizzas
WHERE metadata -> 'allergens' ? 'dairy';`}
          />
        </Exercise>
      </Topic>

      <Topic id="design" no="20" title="Constraints & design">
        <p>
          Rules the database enforces for you, so bad data can&apos;t even get
          written in the first place.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — The relational model underneath all
          of this represents the real world as <strong>entities</strong>{' '}
          (things — customers, pizzas), their <strong>attributes</strong>{' '}
          (columns), and the <strong>relationships</strong> between them
          (foreign keys). A foreign key isn&apos;t just documentation either —
          it&apos;s an enforced constraint: the database physically checks, on
          every insert or update, that the referenced row actually exists, and
          by default refuses to let you delete a parent row (like a customer)
          while child rows (their orders) still point at it, unless
          you&apos;ve explicitly configured a cascade or set-null behavior for
          that foreign key.
        </Deepdive>
        <Sql
          code={`CREATE TABLE pizzas (
  pizza_id     INTEGER PRIMARY KEY,
  name         TEXT NOT NULL UNIQUE,
  base_price   DECIMAL(5,2) NOT NULL CHECK (base_price > 0),
  is_vegetarian BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE orders (
  order_id    INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(customer_id),
  order_date  DATE NOT NULL,
  status      TEXT NOT NULL DEFAULT 'placed'
);`}
        />
        <p>
          Reading that schema: <strong>PRIMARY KEY</strong> uniquely identifies
          each row and can&apos;t be NULL. <strong>FOREIGN KEY</strong> (the{' '}
          <code>REFERENCES</code> part) guarantees an order&apos;s customer_id
          actually exists in the customers table — the database rejects the
          insert otherwise. <strong>UNIQUE</strong> forbids duplicates;{' '}
          <strong>CHECK</strong> enforces a custom rule;{' '}
          <strong>NOT NULL</strong> makes a column mandatory;{' '}
          <strong>DEFAULT</strong> fills a value in when none is given.
        </p>
        <Callout>
          <strong>Why split orders and order_items at all?</strong> — this is{' '}
          <strong>normalization</strong>: structuring tables so each fact is
          stored exactly once. If you crammed pizza names directly into the
          orders table, ordering three pizzas would mean three near-duplicate
          rows, and renaming a pizza would mean updating every order that ever
          included it. Splitting them out means the pizza&apos;s name lives in
          exactly one place.
        </Callout>
        <p>
          The classic normalization ladder, briefly: <strong>1NF</strong> —
          every column holds a single value, no comma-separated lists.{' '}
          <strong>2NF</strong> — every non-key column depends on the{' '}
          <em>whole</em> primary key. <strong>3NF</strong> — every non-key
          column depends on the key and nothing else. In practice, &quot;does
          each fact live in exactly one place?&quot; gets you 90% of the way
          there without memorizing the formal rules.
        </p>
        <p>
          orders-to-order_items is a <strong>one-to-many</strong> relationship
          (one order, many items). Some relationships are{' '}
          <strong>many-to-many</strong> — say, letting each pizza carry several
          tags (&quot;spicy&quot;, &quot;vegan&quot;, &quot;bestseller&quot;)
          while each tag applies to many pizzas. Neither table can hold the
          other&apos;s key directly, so the fix is a third table in between, a{' '}
          <strong>junction table</strong>:
        </p>
        <Sql
          code={`CREATE TABLE tags (
  tag_id INTEGER PRIMARY KEY,
  label  TEXT NOT NULL UNIQUE
);

CREATE TABLE pizza_tags (
  pizza_id INTEGER NOT NULL REFERENCES pizzas(pizza_id),
  tag_id   INTEGER NOT NULL REFERENCES tags(tag_id),
  PRIMARY KEY (pizza_id, tag_id)
);`}
        />
        <p>
          Querying it just chains two joins through the middle table — the same
          pattern you already used for orders and order_items:
        </p>
        <Sql
          code={`SELECT p.name, t.label
FROM pizzas p
JOIN pizza_tags pt ON pt.pizza_id = p.pizza_id
JOIN tags t ON t.tag_id = pt.tag_id;`}
        />
        <Exercise
          id="ans-design"
          prompt="Write a CREATE TABLE for order_items with a composite-feeling design: it needs order_id (FK to orders), pizza_id (FK to pizzas), and quantity, which must be at least 1."
        >
          <Sql
            code={`CREATE TABLE order_items (
  order_item_id INTEGER PRIMARY KEY,
  order_id      INTEGER NOT NULL REFERENCES orders(order_id),
  pizza_id      INTEGER NOT NULL REFERENCES pizzas(pizza_id),
  quantity      INTEGER NOT NULL CHECK (quantity >= 1)
);`}
          />
        </Exercise>
      </Topic>

      <Topic id="index" no="21" title="Indexes & performance">
        <p>
          Why the same query can take 400ms on one table and 4ms on another.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Most indexes are implemented as a{' '}
          <strong>B-tree</strong> — a sorted, balanced tree structure where
          every lookup, insert, or range scan touches roughly log(n) nodes
          instead of all n rows, which is the difference between a full table
          scan being O(n) and an index lookup being close to O(log n).
          That&apos;s why an index dramatically speeds up equality and range
          lookups (WHERE, JOIN ON, ORDER BY on the indexed column) but does
          nothing for a query that has to inspect every row regardless, like an
          aggregate over the whole table with no filter — there&apos;s nothing
          to skip past in that case.
        </Deepdive>
        <p>
          Without an index, WHERE forces a <strong>full table scan</strong> —
          the database checks every single row. An <strong>index</strong> is a
          separate, sorted structure (usually a B-tree) that lets it jump
          straight to matching rows instead:
        </p>
        <Sql
          code={`CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_customers_planet ON customers(planet_id);`}
        />
        <p>
          Good candidates for an index: columns used constantly in{' '}
          <strong>WHERE</strong>, <strong>JOIN ON</strong>, and{' '}
          <strong>ORDER BY</strong>. Primary keys and (usually) foreign keys are
          indexed automatically or should be indexed by convention — that{' '}
          <code>orders.customer_id</code> column above is exactly the kind of
          foreign key that gets hit by every join to customers, so it earns its
          index.
        </p>
        <Callout variant="warn">
          <strong>Indexes aren&apos;t free</strong> — every INSERT/UPDATE/DELETE
          has to update every index on that table too, so more indexes means
          slower writes and more disk space. This is a genuine trade-off, not a
          &quot;just add more indexes&quot; situation. Index the columns your
          queries actually filter or join on; don&apos;t index everything.
        </Callout>
        <p>
          <strong>EXPLAIN</strong> (or <strong>EXPLAIN ANALYZE</strong>) shows
          you the plan the database actually intends to run — whether it&apos;s
          using an index or scanning the whole table:
        </p>
        <Sql
          code={`EXPLAIN SELECT * FROM orders WHERE customer_id = 101;
-- look for "Index Scan" (good) vs "Seq Scan" / "Table Scan" (full scan)`}
        />
        <Callout>
          <strong>Fun fact</strong> — a composite index on (planet_id,
          joined_date) can speed up a query filtering on planet_id alone, or on
          planet_id AND joined_date together, but generally can&apos;t help a
          query that filters on joined_date alone. Column order in a composite
          index matters — it&apos;s usually described as &quot;leftmost
          prefix&quot; matching.
        </Callout>
        <Exercise
          id="ans-index"
          prompt={
            <>
              You keep running{' '}
              <code>SELECT * FROM order_items WHERE pizza_id = ?</code> to build
              a &quot;who ordered this pizza&quot; report, and it&apos;s slow.
              What index would you add?
            </>
          }
        >
          <Sql
            code={`CREATE INDEX idx_order_items_pizza ON order_items(pizza_id);`}
          />
          <p className="mt-2 mb-0 text-muted-foreground">
            This is exactly the pattern from earlier — pizza_id is a foreign key
            that&apos;s constantly filtered on, so it&apos;s a natural index
            candidate.
          </p>
        </Exercise>
      </Topic>

      <Topic id="procs" no="22" title="Procedures, functions & triggers">
        <p>
          Server-side code that lives inside the database itself — the syntax
          below varies more by vendor than anything else in this tutorial, so
          treat it as the shape of the idea rather than something to copy
          verbatim.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — The core distinction here is{' '}
          <strong>procedural vs declarative</strong>: everything earlier in
          this tutorial (SELECT, JOIN, GROUP BY) is declarative — you describe
          the result, the database figures out how. A stored procedure or
          function is procedural: you write step-by-step logic, with
          variables, IF branches, and loops, that runs inside the database
          engine itself rather than in your application. Many databases also
          cache a procedure&apos;s compiled execution plan the first time it
          runs, so repeated calls skip the parsing/planning overhead a fresh
          ad-hoc query would pay each time — part of why hot, frequently-called
          operations are sometimes moved into a procedure.
        </Deepdive>
        <p>
          A <strong>stored procedure</strong> is a named, reusable routine that
          runs on the database server — handy for a multi-step operation you
          call often, like placing an order:
        </p>
        <Sql
          code={`-- Postgres/plpgsql style
CREATE PROCEDURE place_order(p_customer_id INT, p_pizza_id INT, p_qty INT)
LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO orders (customer_id, order_date, status)
  VALUES (p_customer_id, CURRENT_DATE, 'placed');

  INSERT INTO order_items (order_id, pizza_id, quantity)
  VALUES (currval('orders_order_id_seq'), p_pizza_id, p_qty);
END;
$$;

CALL place_order(101, 3, 2);`}
        />
        <p>
          A <strong>function</strong> is similar but returns a value, so it can
          be used directly inside a SELECT — like a mini calculation you want to
          reuse across many queries:
        </p>
        <Sql
          code={`CREATE FUNCTION order_total(p_order_id INT) RETURNS DECIMAL
LANGUAGE plpgsql AS $$
DECLARE total DECIMAL;
BEGIN
  SELECT SUM(oi.quantity * p.base_price) INTO total
  FROM order_items oi JOIN pizzas p ON p.pizza_id = oi.pizza_id
  WHERE oi.order_id = p_order_id;
  RETURN total;
END;
$$;

SELECT order_id, order_total(order_id) FROM orders;`}
        />
        <p>
          A <strong>trigger</strong> fires automatically whenever a table
          changes — no one has to remember to call it. A common use: keeping a
          denormalized count in sync whenever an order is placed:
        </p>
        <Sql
          code={`CREATE TRIGGER after_order_insert
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION bump_customer_order_count();`}
        />
        <Callout variant="warn">
          <strong>Use sparingly</strong> — logic buried in triggers and
          procedures is powerful but easy to lose track of: it doesn&apos;t show
          up when someone greps the application codebase for &quot;where does
          this happen?&quot; Most teams reach for procedures/functions for
          genuinely data-heavy, performance-critical operations, and keep
          ordinary business logic in the application layer where it&apos;s
          easier to test and version.
        </Callout>
        <Exercise
          id="ans-procs"
          prompt="In plain English (no need for exact syntax): describe a trigger that would keep a pizza marked unavailable automatically whenever its last remaining stock is used up in order_items."
        >
          <p className="mt-2 mb-0 text-muted-foreground">
            An AFTER INSERT trigger on order_items that checks the pizza&apos;s
            remaining stock and, if it has just reached zero, runs an UPDATE on
            pizzas setting an <code>is_available</code> flag to false for that
            pizza_id — so the storefront stops showing it without any
            application code having to remember to check.
          </p>
        </Exercise>
      </Topic>

      <Topic id="security" no="23" title="Security & permissions">
        <p>
          Who&apos;s allowed to do what — and the one query-writing habit that
          prevents SQL&apos;s most famous vulnerability.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — Access control here rests on two
          separate questions that are easy to conflate:{' '}
          <strong>authentication</strong> (proving who you are — a username and
          password, a certificate) and <strong>authorization</strong> (what
          that verified identity is actually allowed to do — which GRANT and
          REVOKE control). The guiding principle for authorization is{' '}
          <strong>least privilege</strong>: every account, human or
          application, should hold the smallest set of permissions it needs to
          do its job and nothing more, so that a compromised or buggy component
          can only do limited damage. SQL injection is really an authorization
          failure in disguise — untrusted input is allowed to redefine what SQL
          the database executes, temporarily inheriting whatever privileges the
          connecting account holds.
        </Deepdive>
        <p>
          <strong>GRANT</strong> and <strong>REVOKE</strong> control access at
          the database level — which users or roles can read, write, or
          administer which tables:
        </p>
        <Sql
          code={`CREATE ROLE report_viewer;
GRANT SELECT ON customer_order_summary TO report_viewer;
GRANT SELECT, INSERT, UPDATE ON orders TO app_service;
REVOKE DELETE ON orders FROM app_service;`}
        />
        <p>
          A common pattern: grant broad application accounts only the CRUD
          access they actually need, and grant read-only analysts SELECT on
          views (like the <code>customer_order_summary</code> view from
          earlier) rather than direct table access — so sensitive columns can
          simply be left out of the view.
        </p>
        <Callout variant="warn">
          <strong>SQL injection</strong> — the most well-known SQL security
          issue isn&apos;t a permissions problem at all: it&apos;s building a
          query by directly concatenating user input into a string.{' '}
          <code>
            &quot;SELECT * FROM customers WHERE name = &apos;&quot; + userInput
            + &quot;&apos;&quot;
          </code>{' '}
          lets someone type <code>&apos; OR &apos;1&apos;=&apos;1</code> and
          return every row, or worse. The fix is always{' '}
          <strong>parameterized queries</strong> (placeholders like{' '}
          <code>?</code> or <code>$1</code> that the driver binds safely),
          never manual string-building with untrusted input — this is a rule
          with no exceptions in practice.
        </Callout>
        <Sql
          code={`-- Vulnerable
query = "SELECT * FROM customers WHERE name = '" + userInput + "'"

-- Safe — parameter is bound, never interpreted as SQL
query = "SELECT * FROM customers WHERE name = ?"
execute(query, [userInput])`}
        />
        <p>
          <strong>Row-level security</strong> (Postgres, SQL Server) goes a
          level deeper than table grants — it lets you restrict which
          individual <em>rows</em> a user can see or modify, based on a policy,
          so two customers querying the same orders table each only ever see
          their own rows without the application needing to remember a WHERE
          clause everywhere.
        </p>
        <Exercise
          id="ans-security"
          prompt="A junior developer wants to build a 'find customer by name' feature and writes the query by concatenating the search box's text directly into the SQL string. What's wrong, and what should they do instead?"
        >
          <p className="mt-2 mb-0 text-muted-foreground">
            It&apos;s a SQL injection vulnerability — anything typed into that
            search box becomes part of the executable query. They should use a
            parameterized query instead, e.g.{' '}
            <code>SELECT * FROM customers WHERE name = ?</code> with the search
            text passed as a bound parameter, never inserted into the string
            directly.
          </p>
        </Exercise>
      </Topic>
    </>
  )
}
