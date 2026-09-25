import type { NavGroup } from '#/lib/tutorials/shared'
import {
  Callout,
  Code,
  Deepdive,
  Exercise,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'

export const sqlNovaPizzaNav: Array<NavGroup> = [
  {
    title: 'Start here',
    items: [{ id: 'schema', label: 'The Maple Street Library schema' }],
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

      <Topic id="schema" no="00" title="The Maple Street Library schema">
        <p>
          Every example in this tutorial runs against one small database: the
          lending system of the Maple Street Library. It starts with a single
          table, <code>books</code>, and the other tables join in only when a
          topic needs them.
        </p>
        <RefTable
          headers={['Table', 'Columns']}
          rows={[
            [
              <code>books</code>,
              <>
                <code>id</code> (pk), title, author_id, genre_id,
                published_year, isbn, copies_total, copies_available,
                replacement_cost_cents
              </>,
            ],
            [
              <code>authors</code>,
              <>
                <code>id</code> (pk), name, born_year
              </>,
            ],
            [
              <code>genres</code>,
              <>
                <code>id</code> (pk), name, parent_id
              </>,
            ],
            [
              <code>members</code>,
              <>
                <code>id</code> (pk), name, email, tier, joined_on, branch_id
              </>,
            ],
            [
              <code>loans</code>,
              <>
                <code>id</code> (pk), book_id, member_id, borrowed_on, due_on,
                returned_on, fine_cents
              </>,
            ],
            [
              <code>reservations</code>,
              <>
                <code>id</code> (pk), book_id, member_id, created_at, status
              </>,
            ],
            [
              <code>branches</code>,
              <>
                <code>id</code> (pk), name
              </>,
            ],
          ]}
        />
        <p>
          The <code>books</code> fixture, which every basic query reads from
          (money is stored as whole cents, so $12.00 is 1200):
        </p>
        <RefTable
          caption="books (with author and genre names filled in)"
          headers={[
            'id',
            'title',
            'author',
            'published_year',
            'genre',
            'copies_total',
            'copies_available',
            'replacement_cost_cents',
          ]}
          rows={[
            [
              '1',
              'Pride and Prejudice',
              'Jane Austen',
              '1813',
              'Classics',
              '3',
              '2',
              '1200',
            ],
            [
              '2',
              'Frankenstein',
              'Mary Shelley',
              '1818',
              'Horror',
              '2',
              '2',
              '1000',
            ],
            [
              '3',
              'Moby-Dick',
              'Herman Melville',
              '1851',
              'Adventure',
              '1',
              '1',
              '1500',
            ],
            [
              '4',
              'Alice’s Adventures in Wonderland',
              'Lewis Carroll',
              '1865',
              'Fantasy',
              '2',
              '1',
              '900',
            ],
            [
              '5',
              'The Time Machine',
              'H. G. Wells',
              '1895',
              'Science Fiction',
              '1',
              '0',
              '800',
            ],
            ['6', 'Dracula', 'Bram Stoker', '1897', 'Horror', '2', '1', '1100'],
          ]}
        />
        <p>
          Loans need someone to borrow the book, so there are four{' '}
          <strong>members</strong>, spread over two branches (Downtown is{' '}
          <code>branch_id</code> 1, Riverside is 2):
        </p>
        <RefTable
          caption="members"
          headers={['id', 'name', 'tier', 'joined_on', 'branch_id']}
          rows={[
            ['1', 'Ada Lovelace', 'premium', '2024-01-15', '1'],
            ['2', 'Grace Hopper', 'standard', '2024-06-03', '1'],
            ['3', 'Alan Turing', 'standard', '2025-02-20', '2'],
            ['4', 'Katherine Johnson', 'standard', '2026-08-01', '2'],
          ]}
        />
        <p>
          <strong>genres</strong> is a tree: <code>parent_id</code> points at
          another genre. Fiction (id 1) is the parent of Classics (3), Horror
          (4), Adventure (5), Fantasy (6) and Science Fiction (7); Non-fiction
          (id 2) is the parent of History (8) and Science (9).
        </p>
        <p>
          And here is the full history of <strong>loans</strong>. A loan with no{' '}
          <code>returned_on</code> is still out. Examples that use{' '}
          <code>CURRENT_DATE</code> assume today is 2026-09-25.
        </p>
        <RefTable
          caption="loans"
          headers={[
            'id',
            'book_id',
            'member_id',
            'borrowed_on',
            'due_on',
            'returned_on',
            'fine_cents',
          ]}
          rows={[
            ['1', '1', '1', '2026-07-02', '2026-07-30', '2026-07-28', '0'],
            ['2', '2', '2', '2026-07-05', '2026-07-19', '2026-07-24', '125'],
            ['3', '3', '3', '2026-07-10', '2026-07-24', '2026-07-22', '0'],
            ['4', '6', '2', '2026-07-20', '2026-08-03', '2026-08-01', '0'],
            ['5', '1', '3', '2026-08-03', '2026-08-17', '2026-08-27', '250'],
            ['6', '5', '1', '2026-08-10', '2026-09-07', '2026-09-05', '0'],
            ['7', '2', '1', '2026-08-12', '2026-09-09', '2026-09-09', '0'],
            ['8', '6', '3', '2026-08-20', '2026-09-03', '2026-09-06', '75'],
            ['9', '1', '2', '2026-09-01', '2026-09-15', 'NULL', '0'],
            ['10', '3', '1', '2026-09-02', '2026-09-30', '2026-09-12', '0'],
            ['11', '5', '3', '2026-09-10', '2026-09-24', 'NULL', '0'],
            ['12', '4', '1', '2026-09-14', '2026-10-12', 'NULL', '0'],
            ['13', '6', '2', '2026-09-18', '2026-10-02', 'NULL', '0'],
          ]}
        />
        <p>The library’s rules, which later queries and constraints enforce:</p>
        <ul>
          <li>
            A loan lasts 14 days, or 28 for premium members (that’s why Ada’s
            loans are due four weeks out).
          </li>
          <li>A member can have at most 5 active loans.</li>
          <li>
            An overdue fine is 25 cents per day, capped at the book’s{' '}
            <code>replacement_cost_cents</code>. Grace returned Frankenstein 5
            days late, so loan 2 carries a 125-cent fine.
          </li>
          <li>
            Borrowing needs <code>copies_available &gt; 0</code>. Borrowing
            decrements it and creates a loan in one transaction.
          </li>
          <li>
            When every copy is out, members can join a reservation queue. On
            return, the first person in the queue gets “your hold is ready.”
          </li>
        </ul>
        <p>
          <code>loans.book_id</code> points at <code>books.id</code>, and{' '}
          <code>loans.member_id</code> points at <code>members.id</code>. Those
          are <strong>foreign keys</strong>, the thing that makes joins
          possible. One book can be borrowed many times, and that one-to-many
          relationship is the most common shape you’ll model in real schemas.
        </p>
        <Callout>
          <strong>Fun fact</strong>: <code>copies_available</code> is
          deliberately redundant. You could always compute it by counting open
          loans, but storing it makes “is it on the shelf?” a single-row read.
          Moby-Dick and The Time Machine have only one copy each, which makes
          them the go-to examples when two members race for the last copy.
        </Callout>
        <p>
          Work through the sidebar in order, or jump straight to whatever you
          need. Each section ends with a hands-on exercise. Try to write the
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
          steps to get it. You never say &quot;loop over rows and check each
          one&quot; — the database&apos;s query planner decides whether to scan
          the table or use an index, in what order, and hands you back a result
          set. Under the hood, every table is a set of rows with typed columns,
          and WHERE is evaluated once per row: the boolean expression runs
          against that row&apos;s values, and only rows where it evaluates to
          true survive.
        </Deepdive>
        <p>
          <code>SELECT</code> picks columns, <code>FROM</code> picks the table,
          and <code>WHERE</code> filters rows. Nothing more mysterious than
          that.
        </p>
        <Sql
          code={`SELECT title, published_year
FROM books
WHERE published_year < 1850;`}
        />
        <RefTable
          caption="result"
          headers={['title', 'published_year']}
          rows={[
            ['Pride and Prejudice', '1813'],
            ['Frankenstein', '1818'],
          ]}
        />
        <p>
          WHERE supports the comparisons you&apos;d expect (<code>=</code>,{' '}
          <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>), plus a few
          SQL-specific ones that come up constantly:
        </p>
        <Sql
          code={`SELECT title FROM books
WHERE published_year BETWEEN 1850 AND 1899
  AND title LIKE '%Machine%';

SELECT title FROM books
WHERE genre_id IN (4, 7);

SELECT title FROM books
WHERE isbn IS NOT NULL;`}
        />
        <Callout variant="warn">
          <strong>The NULL trap</strong> — <code>NULL</code> means
          &quot;unknown,&quot; not &quot;empty.&quot;{' '}
          <code>WHERE isbn = NULL</code> silently matches nothing, ever (and
          donated copies do sometimes arrive without an ISBN). Always use{' '}
          <code>IS NULL</code> / <code>IS NOT NULL</code> to check for it. This
          catches almost everyone at least once.
        </Callout>
        <p>
          Combine conditions with <strong>AND</strong> / <strong>OR</strong>,
          and use parentheses the moment you mix them — SQL evaluates AND before
          OR, just like multiplication before addition:
        </p>
        <Sql
          code={`SELECT title FROM books
WHERE copies_available > 0
  AND (published_year < 1820 OR title LIKE 'Moby%');`}
        />
        <Exercise
          id="ans-select"
          prompt={
            <>
              Write a query that returns the <code>title</code> and{' '}
              <code>published_year</code> of every book in genre_id 4 (Horror),
              ordered by nothing yet — just the filter.
            </>
          }
        >
          <Sql
            code={`SELECT title, published_year
FROM books
WHERE genre_id = 4;`}
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
          step, after all filtering and grouping is done, which is why it&apos;s
          allowed to reference column aliases defined in the SELECT list even
          though WHERE can&apos;t. Sorts are stable within most engines when you
          provide enough sort keys to fully disambiguate ties, and NULLs are
          treated as either the lowest or highest possible value depending on
          the database (NULLS FIRST / NULLS LAST let you control this explicitly
          on Postgres).
        </Deepdive>
        <p>
          <code>ORDER BY</code> sorts the result set; <code>ASC</code> (default)
          or <code>DESC</code> controls direction. <code>LIMIT</code> caps how
          many rows come back, and <code>OFFSET</code> skips a number of rows
          first — the pair that powers every &quot;page 2 of results&quot;
          you&apos;ve ever seen.
        </p>
        <Sql
          code={`SELECT title, published_year
FROM books
ORDER BY published_year DESC
LIMIT 3;`}
        />
        <RefTable
          caption="result — the 3 most recently published books"
          headers={['title', 'published_year']}
          rows={[
            ['Dracula', '1897'],
            ['The Time Machine', '1895'],
            ['Alice’s Adventures in Wonderland', '1865'],
          ]}
        />
        <Sql
          code={`SELECT title, published_year
FROM books
ORDER BY published_year DESC
LIMIT 3 OFFSET 3;   -- the next 3, i.e. "page 2"`}
        />
        <p>
          You can sort by more than one column — later columns break ties in
          earlier ones:
        </p>
        <Sql
          code={`SELECT title, genre_id, published_year
FROM books
ORDER BY genre_id ASC, published_year DESC;`}
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
          prompt="Return the 3 cheapest books to replace, cheapest first."
        >
          <Sql
            code={`SELECT title, replacement_cost_cents
FROM books
ORDER BY replacement_cost_cents ASC
LIMIT 3;`}
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
          code={`SELECT COUNT(*) AS total_books,
       SUM(copies_total) AS total_copies
FROM books;`}
        />
        <RefTable
          headers={['total_books', 'total_copies']}
          rows={[['6', '11']]}
        />
        <p>
          <strong>GROUP BY</strong> is where aggregation gets interesting — it
          buckets rows first, then aggregates within each bucket. Counting
          borrowing needs the <code>loans</code> table, so here it is, grouped
          by member:
        </p>
        <Sql
          code={`SELECT member_id,
       COUNT(*) AS loan_count,
       SUM(fine_cents) AS fines_cents
FROM loans
GROUP BY member_id;`}
        />
        <RefTable
          headers={['member_id', 'loan_count', 'fines_cents']}
          rows={[
            ['1', '5', '0'],
            ['2', '4', '125'],
            ['3', '4', '325'],
          ]}
        />
        <p>
          <strong>HAVING</strong> filters groups <em>after</em> aggregation —
          this is the detail that trips people up. WHERE can&apos;t reference an
          aggregate because it runs before grouping happens; HAVING exists
          specifically to fill that gap:
        </p>
        <Sql
          code={`SELECT member_id, SUM(fine_cents) AS fines_cents
FROM loans
GROUP BY member_id
HAVING SUM(fine_cents) > 200;   -- only Alan Turing (member 3)`}
        />
        <Callout>
          <strong>Order of operations</strong> — a query is written SELECT →
          FROM → WHERE → GROUP BY → HAVING → ORDER BY, but it&apos;s{' '}
          <em>evaluated</em> FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER
          BY. WHERE filters raw rows; HAVING filters finished groups.
        </Callout>
        <Exercise
          id="ans-agg"
          prompt="Find every book that has been borrowed at least 3 times, showing book_id and the count."
        >
          <Sql
            code={`SELECT book_id, COUNT(*) AS loan_count
FROM loans
GROUP BY book_id
HAVING COUNT(*) >= 3;   -- books 1 and 6, with 3 loans each`}
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
          in between. Almost every scalar function is <em>NULL-propagating</em>{' '}
          — if any input is NULL, the result is NULL, on the logic that you
          can&apos;t meaningfully uppercase or round &quot;unknown.&quot;
          COALESCE and NULLIF are two of the few functions built specifically to
          reason about NULL itself rather than propagate it, which is exactly
          why they exist as separate tools instead of ordinary functions.
        </Deepdive>
        <p>
          <strong>String functions</strong> reshape text. Exact names vary
          slightly by database, but the shapes below are near-universal:
        </p>
        <Sql
          code={`SELECT
  UPPER(title) AS shouty_title,
  LOWER(title) AS quiet_title,
  TRIM(title) AS no_stray_spaces,
  title || ' (' || published_year || ')' AS label   -- Postgres/SQLite; use CONCAT(title, ...) on MySQL/SQL Server
FROM books;`}
        />
        <p>
          <strong>Date functions</strong> let you compute ages, deadlines, and
          windows without pulling every row into application code. Here, how
          late each open loan is:
        </p>
        <Sql
          code={`SELECT id, due_on,
  CURRENT_DATE - due_on AS days_overdue   -- Postgres; DATEDIFF(day, due_on, GETDATE()) on SQL Server
FROM loans
WHERE returned_on IS NULL
  AND due_on < CURRENT_DATE;`}
        />
        <RefTable
          caption="result — as of 2026-09-25"
          headers={['id', 'due_on', 'days_overdue']}
          rows={[
            ['9', '2026-09-15', '10'],
            ['11', '2026-09-24', '1'],
          ]}
        />
        <p>
          <strong>Math functions</strong> — ROUND, CEIL/FLOOR, ABS — clean up
          computed numbers for display:
        </p>
        <Sql
          code={`SELECT title, ROUND(replacement_cost_cents / 100.0, 2) AS replacement_cost_dollars
FROM books;`}
        />
        <p>
          For NULLs, two small functions save a lot of CASE statements.{' '}
          <strong>COALESCE</strong> returns the first non-NULL value in a list —
          perfect for defaults:
        </p>
        <Sql
          code={`SELECT title, COALESCE(isbn, 'unknown') AS isbn
FROM books;`}
        />
        <p>
          <strong>NULLIF</strong> does the opposite job: it returns NULL if two
          values are equal, which is the standard guard against divide-by-zero.
          A member whose only loans are still out has returned nothing yet:
        </p>
        <Sql
          code={`SELECT member_id,
  SUM(fine_cents) / NULLIF(COUNT(returned_on), 0) AS avg_fine_per_return
FROM loans
GROUP BY member_id;`}
        />
        <Callout>
          <strong>CAST</strong> converts between types explicitly —{' '}
          <code>CAST(replacement_cost_cents AS DECIMAL)</code> or the shorthand{' '}
          <code>replacement_cost_cents::DECIMAL</code> on Postgres. Reach for it
          whenever an implicit conversion feels risky, like comparing a text
          column to a number.
        </Callout>
        <Exercise
          id="ans-funcs"
          prompt="Return each book's title in uppercase, and its isbn defaulted to 'unknown' if it's currently NULL."
        >
          <Sql
            code={`SELECT UPPER(title) AS title, COALESCE(isbn, 'unknown') AS isbn
FROM books;`}
          />
        </Exercise>
      </Topic>

      <Topic id="datatypes" no="05" title="Data types">
        <p>
          Every column commits to a type up front — it&apos;s what keeps a price
          from silently becoming text and a date from being sorted
          alphabetically.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — A column&apos;s type isn&apos;t just
          documentation — it determines how many bytes each value takes on disk,
          which comparison and sort rules apply, and what an index built on that
          column can do. Fixed-width types (INTEGER, DATE) are cheap to compare
          and index; variable-width types (VARCHAR, TEXT) cost a little more
          bookkeeping. Comparing values across mismatched types usually triggers
          an <em>implicit cast</em>, which can quietly disable an index that
          would otherwise have been used — this is a common, easy-to-miss cause
          of a slow query that &quot;should&quot; be fast, and it&apos;s why
          explicit CAST is worth reaching for the moment a comparison feels
          type-ambiguous.
        </Deepdive>
        <p>
          The families you&apos;ll use constantly, with common names across
          Postgres/MySQL/SQL Server (exact names vary a little):
        </p>
        <Sql
          code={`CREATE TABLE books (
  id                     INTEGER,          -- whole numbers
  title                  VARCHAR(200),     -- text with a length cap
  summary                TEXT,             -- unbounded text
  replacement_cost_cents INTEGER,          -- money as whole cents: exact
  list_price             DECIMAL(5,2),     -- or exact decimal dollars
  is_reference_only      BOOLEAN,          -- true/false
  added_at               TIMESTAMP,        -- date + time
  first_shelved_on       DATE              -- date only, no time
);`}
        />
        <Callout variant="warn">
          <strong>Never use FLOAT for money</strong> — floating-point types
          (FLOAT, REAL, DOUBLE) store approximations, so <code>0.1 + 0.2</code>{' '}
          can come back as <code>0.30000000000000004</code>. Store money either
          as whole cents in an INTEGER (like <code>replacement_cost_cents</code>
          ) or as <strong>DECIMAL(precision, scale)</strong>, which stores exact
          values — <code>list_price</code> above is DECIMAL(5,2): up to 5 total
          digits, 2 after the decimal point.
        </Callout>
        <p>
          Beyond the basics, most databases also offer: <strong>SERIAL</strong>{' '}
          / <strong>AUTO_INCREMENT</strong> / <strong>IDENTITY</strong> for
          self-incrementing primary keys, <strong>ENUM</strong> for a fixed set
          of allowed text values (like a reservation&apos;s status),{' '}
          <strong>UUID</strong> for globally unique identifiers, and array or
          JSON types for structured values inside a single column (more on JSON
          in its own section later).
        </p>
        <Sql
          code={`CREATE TABLE reservations (
  id          SERIAL PRIMARY KEY,               -- Postgres auto-increment
  -- id INT AUTO_INCREMENT PRIMARY KEY,         -- MySQL equivalent
  -- id INT IDENTITY(1,1) PRIMARY KEY,          -- SQL Server equivalent
  status      TEXT NOT NULL DEFAULT 'waiting'
);`}
        />
        <Exercise
          id="ans-datatypes"
          prompt="What type would you pick for a copies_total column that must always be a non-negative whole number, and why not DECIMAL for it?"
        >
          <p className="mt-2 mb-0 text-muted-foreground">
            INTEGER (with a CHECK constraint for non-negative, if you want to
            enforce it at the schema level). You can&apos;t own half a copy of a
            book, so DECIMAL would just add unnecessary storage and comparison
            overhead for a fractional precision you&apos;ll never use.
          </p>
        </Exercise>
      </Topic>

      <ModuleTitle>Intermediate</ModuleTitle>

      <Topic id="joins" no="06" title="Joins">
        <p>
          The single most important concept in SQL: combining rows across tables
          via a shared key.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — The cleanest mental model for a join
          is: compute the full Cartesian product of both tables (every row
          paired with every row), then keep only the pairs where the ON
          condition is true. No real database actually does that — it would be
          catastrophically slow on large tables — but it&apos;s the correct
          logical definition, and it&apos;s exactly what happens if you forget
          the ON clause entirely. In practice the query planner picks a physical
          strategy (a <strong>nested loop</strong> for small tables, a{' '}
          <strong>hash join</strong> that builds a lookup table from one side,
          or a <strong>merge join</strong> when both sides are already sorted on
          the join key) that produces the identical result far more efficiently
          — which one it picks is visible in EXPLAIN output.
        </Deepdive>
        <p>
          <strong>INNER JOIN</strong> keeps only rows that match on both sides.
          Open loans + the member who has them, matched by member_id:
        </p>
        <Sql
          code={`SELECT l.id, m.name, l.borrowed_on
FROM loans l
INNER JOIN members m ON l.member_id = m.id
WHERE l.returned_on IS NULL
ORDER BY l.id;`}
        />
        <RefTable
          headers={['id', 'name', 'borrowed_on']}
          rows={[
            ['9', 'Grace Hopper', '2026-09-01'],
            ['11', 'Alan Turing', '2026-09-10'],
            ['12', 'Ada Lovelace', '2026-09-14'],
            ['13', 'Grace Hopper', '2026-09-18'],
          ]}
        />
        <p>
          <strong>LEFT JOIN</strong> keeps every row from the left table even
          when there&apos;s no match on the right — missing matches come back as
          NULL. This is how you find &quot;members who have never borrowed
          anything&quot;:
        </p>
        <Sql
          code={`SELECT m.name, l.id
FROM members m
LEFT JOIN loans l ON m.id = l.member_id
WHERE l.id IS NULL;`}
        />
        <RefTable
          headers={['name', 'id']}
          rows={[['Katherine Johnson', 'NULL']]}
        />
        <Callout>
          <strong>Mental model</strong> — INNER JOIN answers &quot;what
          matches?&quot;; LEFT JOIN answers &quot;everything on the left, plus
          whatever matches on the right.&quot; RIGHT JOIN is the mirror image
          (rare in practice — people just swap table order and use LEFT). FULL
          JOIN keeps unmatched rows from both sides at once.
        </Callout>
        <p>
          Joining three tables to answer a real question — &quot;which books has
          each member borrowed?&quot; — chains the same pattern:
        </p>
        <Sql
          code={`SELECT m.name, b.title, l.borrowed_on
FROM members m
JOIN loans l ON l.member_id = m.id
JOIN books b ON b.id = l.book_id
WHERE m.name = 'Alan Turing'
ORDER BY l.borrowed_on;`}
        />
        <RefTable
          headers={['name', 'title', 'borrowed_on']}
          rows={[
            ['Alan Turing', 'Moby-Dick', '2026-07-10'],
            ['Alan Turing', 'Pride and Prejudice', '2026-08-03'],
            ['Alan Turing', 'Dracula', '2026-08-20'],
            ['Alan Turing', 'The Time Machine', '2026-09-10'],
          ]}
        />
        <p>
          A <strong>SELF JOIN</strong> is the same trick applied to one table
          twice — say, finding members who use the same branch:
        </p>
        <Sql
          code={`SELECT a.name, b.name, a.branch_id
FROM members a
JOIN members b
  ON a.branch_id = b.branch_id
  AND a.id < b.id;`}
        />
        <RefTable
          headers={['name', 'name', 'branch_id']}
          rows={[
            ['Ada Lovelace', 'Grace Hopper', '1'],
            ['Alan Turing', 'Katherine Johnson', '2'],
          ]}
        />
        <Callout>
          <strong>Fun fact</strong> — that <code>a.id &lt; b.id</code>{' '}
          isn&apos;t arbitrary. Without it you&apos;d get every pair twice (A-B
          and B-A) plus every member paired with themself. It&apos;s the
          standard trick for &quot;unique pairs&quot; self-joins.
        </Callout>
        <Exercise
          id="ans-joins"
          prompt="List every borrowed book title alongside the name of the branch of whoever borrowed it (branch through member through loan)."
        >
          <Sql
            code={`SELECT b.title, br.name AS branch
FROM loans l
JOIN books b ON b.id = l.book_id
JOIN members m ON m.id = l.member_id
JOIN branches br ON br.id = m.branch_id;`}
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
          subquery sits changes what it&apos;s allowed to be: in the SELECT list
          it must return exactly one value per outer row (a scalar); in FROM it
          stands in for an entire table (a derived table) and can return many
          rows and columns; in WHERE it&apos;s evaluated as part of the filter,
          most often with IN, EXISTS, or a scalar comparison.
        </Deepdive>
        <p>
          A <strong>scalar subquery</strong> returns one value and can be used
          almost anywhere a literal would go. The average replacement cost is
          about 1083 cents, so:
        </p>
        <Sql
          code={`SELECT title, replacement_cost_cents
FROM books
WHERE replacement_cost_cents > (SELECT AVG(replacement_cost_cents) FROM books);`}
        />
        <RefTable
          headers={['title', 'replacement_cost_cents']}
          rows={[
            ['Pride and Prejudice', '1200'],
            ['Moby-Dick', '1500'],
            ['Dracula', '1100'],
          ]}
        />
        <p>
          An <strong>IN subquery</strong> checks membership against a list the
          database computes for you — here, everyone who has ever been fined:
        </p>
        <Sql
          code={`SELECT name FROM members
WHERE id IN (
  SELECT member_id FROM loans WHERE fine_cents > 0
);   -- Grace Hopper, Alan Turing`}
        />
        <p>
          A <strong>correlated subquery</strong> re-runs once per outer row,
          referencing a column from outside — powerful, but potentially slow on
          large tables. Members with at least one book still out:
        </p>
        <Sql
          code={`SELECT m.name
FROM members m
WHERE EXISTS (
  SELECT 1 FROM loans l
  WHERE l.member_id = m.id AND l.returned_on IS NULL
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
          code={`SELECT member_id, total_fines
FROM (
  SELECT member_id, SUM(fine_cents) AS total_fines
  FROM loans
  GROUP BY member_id
) member_fines
WHERE total_fines > 100;   -- member 2 (125) and member 3 (325)`}
        />
        <Exercise
          id="ans-subq"
          prompt="Find every book that has never appeared in a loans row (a title nobody has ever borrowed)."
        >
          <Sql
            code={`SELECT title FROM books
WHERE id NOT IN (
  SELECT book_id FROM loans
);
-- or, more safely if book_id can be NULL anywhere:
SELECT title FROM books b
WHERE NOT EXISTS (
  SELECT 1 FROM loans l WHERE l.book_id = b.id
);`}
          />
          <p className="mt-2 mb-0 text-muted-foreground">
            With the fixture data every book has been borrowed at least once, so
            both queries correctly return zero rows.
          </p>
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
          code={`SELECT name FROM members WHERE branch_id = 1
UNION
SELECT m.name FROM members m
JOIN loans l ON l.member_id = m.id
WHERE l.fine_cents > 0;
-- Ada Lovelace, Grace Hopper, Alan Turing (Grace only once)`}
        />
        <p>
          <strong>INTERSECT</strong> keeps only rows appearing in both queries;{' '}
          <strong>EXCEPT</strong> (called MINUS in some databases) keeps rows
          from the first query that don&apos;t appear in the second:
        </p>
        <Sql
          code={`-- members who have borrowed AND are premium
SELECT member_id FROM loans
INTERSECT
SELECT id FROM members WHERE tier = 'premium';   -- 1

-- books with no copy out right now
SELECT id FROM books
EXCEPT
SELECT book_id FROM loans WHERE returned_on IS NULL;   -- 2, 3`}
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
          prompt="Get a single deduplicated list of names of anyone who is either a member of the Riverside branch (branch_id 2) or currently has a book out."
        >
          <Sql
            code={`SELECT name FROM members WHERE branch_id = 2
UNION
SELECT m.name FROM members m
JOIN loans l ON l.member_id = m.id
WHERE l.returned_on IS NULL;`}
          />
        </Exercise>
      </Topic>

      <Topic id="case" no="09" title="CASE & conditionals">
        <p>
          SQL&apos;s if/else — turning raw values into labels, buckets, or
          computed columns.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — CASE is an{' '}
          <strong>expression</strong>, not a control-flow statement — it
          evaluates to a single value and can be dropped in anywhere a column or
          literal could go: in SELECT, WHERE, ORDER BY, or nested inside another
          function call. Like short-circuit evaluation in most programming
          languages, it checks WHEN clauses top to bottom and stops at the first
          one that&apos;s true, so ordering matters when conditions could
          overlap — put the most specific condition first. With no ELSE and no
          branch matching, the whole expression simply evaluates to NULL, which
          is a deliberate design choice, not an error.
        </Deepdive>
        <Sql
          code={`SELECT title,
  CASE
    WHEN copies_available = 0 THEN 'On loan'
    WHEN copies_available = 1 THEN 'Last copy'
    ELSE 'Available'
  END AS shelf_status
FROM books;`}
        />
        <RefTable
          caption="result (first rows)"
          headers={['title', 'shelf_status']}
          rows={[
            ['Pride and Prejudice', 'Available'],
            ['Frankenstein', 'Available'],
            ['Moby-Dick', 'Last copy'],
            ['The Time Machine', 'On loan'],
          ]}
        />
        <p>
          CASE is also how you do &quot;conditional aggregation&quot; — counting
          or summing only rows that meet a condition, all in one pass, which is
          a very common reporting pattern:
        </p>
        <Sql
          code={`SELECT
  COUNT(CASE WHEN returned_on IS NULL THEN 1 END) AS still_out,
  COUNT(CASE WHEN returned_on IS NOT NULL THEN 1 END) AS returned
FROM loans;`}
        />
        <RefTable headers={['still_out', 'returned']} rows={[['4', '9']]} />
        <Callout>
          <strong>Why this works</strong> — <code>COUNT</code> ignores NULLs,
          and a CASE with no matching branch (no ELSE) returns NULL. So{' '}
          <code>COUNT(CASE WHEN x THEN 1 END)</code> quietly becomes &quot;count
          rows where x is true&quot; — a neat, widely-used trick.
        </Callout>
        <Exercise
          id="ans-case"
          prompt="Label every book as 'Budget' (replacement cost under $10), 'Standard' ($10–$13), or 'Premium' (over $13). Remember the column is in cents."
        >
          <Sql
            code={`SELECT title,
  CASE
    WHEN replacement_cost_cents < 1000 THEN 'Budget'
    WHEN replacement_cost_cents <= 1300 THEN 'Standard'
    ELSE 'Premium'
  END AS cost_tier
FROM books;`}
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
          where the query runs once up front and the result is physically stored
          until you explicitly refresh it.
        </Deepdive>
        <Sql
          code={`CREATE VIEW available_books AS
SELECT id, title, copies_available
FROM books
WHERE copies_available > 0;

SELECT * FROM available_books
ORDER BY title;`}
        />
        <p>
          Nothing is duplicated on disk — a plain view just re-runs its
          underlying query every time you select from it. That makes it a way to
          hide complexity (a five-table join becomes one friendly name), and a
          way to restrict access (grant a report-writer access to a view that
          excludes sensitive columns like members&apos; email addresses, instead
          of the whole table).
        </p>
        <Sql
          code={`CREATE VIEW member_loan_summary AS
SELECT m.id, m.name,
       COUNT(l.id) AS total_loans,
       COALESCE(SUM(l.fine_cents), 0) AS lifetime_fines_cents
FROM members m
LEFT JOIN loans l ON l.member_id = m.id
GROUP BY m.id, m.name;`}
        />
        <p>
          Once created, <code>member_loan_summary</code> reads exactly like a
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
              Create a view called <code>popular_books</code> showing each
              book&apos;s title and total number of loans, for books borrowed
              more than twice.
            </>
          }
        >
          <Sql
            code={`CREATE VIEW popular_books AS
SELECT b.title, COUNT(*) AS total_loans
FROM loans l
JOIN books b ON b.id = l.book_id
GROUP BY b.title
HAVING COUNT(*) > 2;`}
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
          code={`ALTER TABLE books ADD COLUMN pages INTEGER;
ALTER TABLE books ALTER COLUMN title SET NOT NULL;   -- Postgres
ALTER TABLE books DROP COLUMN pages;
ALTER TABLE books RENAME COLUMN title TO book_title;
ALTER TABLE books ADD CONSTRAINT chk_cost CHECK (replacement_cost_cents > 0);`}
        />
        <p>
          Three ways to get rid of data, each with a very different blast
          radius:
        </p>
        <Sql
          code={`DELETE FROM reservations WHERE status = 'cancelled';  -- removes matching rows, logged, can be rolled back
TRUNCATE TABLE reservations;                           -- removes ALL rows instantly, minimal logging
DROP TABLE reservations;                               -- removes the rows AND the table structure itself`}
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
              Add a NOT NULL column called <code>condition_notes</code> (type
              TEXT) to the loans table, with an empty string as its default.
            </>
          }
        >
          <Sql
            code={`ALTER TABLE loans
ADD COLUMN condition_notes TEXT NOT NULL DEFAULT '';`}
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
          down to a gap between the read and the write: two connections can both
          run the SELECT, both see no existing row, and both then INSERT — one
          succeeds and the other hits a duplicate-key error, or worse, both
          succeed and you get silent duplicate data if there&apos;s no unique
          constraint at all. An upsert statement pushes the whole
          check-and-write into a single atomic operation handled by the storage
          engine itself, using the row&apos;s own locking mechanism, so
          there&apos;s no window for another transaction to interleave.
        </Deepdive>
        <p>
          <strong>INSERT INTO ... SELECT</strong> writes the results of a query
          straight into a table — no need to pull rows out and reinsert them one
          at a time:
        </p>
        <Sql
          code={`CREATE TABLE archived_loans (LIKE loans INCLUDING ALL);

INSERT INTO archived_loans
SELECT * FROM loans
WHERE returned_on IS NOT NULL AND returned_on < '2026-01-01';`}
        />
        <p>
          An <strong>upsert</strong> means &quot;insert this row, or if it
          already exists, update it instead&quot; — the classic use case is a
          per-member statistics table, where you don&apos;t know ahead of time
          if a row already exists:
        </p>
        <Sql
          code={`-- Postgres / SQLite
INSERT INTO member_stats (member_id, loans_count)
VALUES (1, 1)
ON CONFLICT (member_id)
DO UPDATE SET loans_count = member_stats.loans_count + 1;

-- MySQL
INSERT INTO member_stats (member_id, loans_count)
VALUES (1, 1)
ON DUPLICATE KEY UPDATE loans_count = loans_count + 1;

-- SQL Server / standard SQL
MERGE INTO member_stats AS target
USING (SELECT 1 AS member_id) AS src
ON target.member_id = src.member_id
WHEN MATCHED THEN UPDATE SET loans_count = loans_count + 1
WHEN NOT MATCHED THEN INSERT (member_id, loans_count) VALUES (1, 1);`}
        />
        <Callout>
          <strong>Why not just SELECT-then-INSERT-or-UPDATE?</strong> — checking
          whether a row exists and then deciding what to do is two round trips
          with a race condition in between: another connection could insert the
          same row in the gap. Upsert statements do the check-and-write
          atomically in one round trip, avoiding that race entirely.
        </Callout>
        <Exercise
          id="ans-upsert"
          prompt={
            <>
              Using Postgres-style syntax, upsert a row into a{' '}
              <code>book_of_the_month</code> table keyed by{' '}
              <code>year_month</code>, setting <code>book_id</code> to 3
              (Moby-Dick) for &apos;2026-09&apos; — insert it if the month has
              no row yet, otherwise update the existing one.
            </>
          }
        >
          <Sql
            code={`INSERT INTO book_of_the_month (year_month, book_id)
VALUES ('2026-09', 3)
ON CONFLICT (year_month)
DO UPDATE SET book_id = EXCLUDED.book_id;`}
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
          function is the <strong>frame</strong> — the subset of rows visible to
          the calculation for the &quot;current&quot; row, defined by PARTITION
          BY (which rows are in scope) and an optional ROWS/RANGE BETWEEN clause
          (how much of that partition, relative to the current row, participates
          — e.g. &quot;from the start of the partition to the current row&quot;
          for a running total). This is precisely why window functions
          don&apos;t collapse rows the way GROUP BY does: each row keeps its own
          identity, computed against its own frame, rather than every row in a
          group being reduced to one output row.
        </Deepdive>
        <p>
          The giveaway syntax is <strong>OVER (...)</strong>.{' '}
          <strong>ROW_NUMBER</strong> assigns a unique rank per partition —
          here, each book&apos;s age rank within its genre:
        </p>
        <Sql
          code={`SELECT title, genre_id, published_year,
  ROW_NUMBER() OVER (
    PARTITION BY genre_id
    ORDER BY published_year
  ) AS age_rank_in_genre
FROM books;`}
        />
        <RefTable
          caption="result (first rows)"
          headers={['title', 'genre_id', 'published_year', 'age_rank_in_genre']}
          rows={[
            ['Pride and Prejudice', '3', '1813', '1'],
            ['Frankenstein', '4', '1818', '1'],
            ['Dracula', '4', '1897', '2'],
          ]}
        />
        <p>
          That&apos;s the classic &quot;top N per group&quot; pattern — wrap it
          in a subquery and filter on age_rank_in_genre to get, say, the oldest
          book in every genre, something a plain GROUP BY simply cannot express.
        </p>
        <p>
          <strong>RANK</strong> and <strong>DENSE_RANK</strong> behave like
          ROW_NUMBER but give tied rows the same rank — RANK leaves a gap
          afterward, DENSE_RANK doesn&apos;t. Ranking books by how often
          they&apos;ve been borrowed:
        </p>
        <Sql
          code={`SELECT b.title, COUNT(*) AS loan_count,
  RANK() OVER (ORDER BY COUNT(*) DESC) AS popularity
FROM loans l
JOIN books b ON b.id = l.book_id
GROUP BY b.title;`}
        />
        <RefTable
          headers={['title', 'loan_count', 'popularity']}
          rows={[
            ['Pride and Prejudice', '3', '1'],
            ['Dracula', '3', '1'],
            ['Frankenstein', '2', '3'],
            ['Moby-Dick', '2', '3'],
            ['The Time Machine', '2', '3'],
            ['Alice’s Adventures in Wonderland', '1', '6'],
          ]}
        />
        <p>
          With DENSE_RANK the last two ranks would be 2 and 3 instead of 3 and
          6. Window functions also do running totals and moving calculations,
          without any self-join — here, Alan Turing&apos;s fines adding up over
          time:
        </p>
        <Sql
          code={`SELECT borrowed_on, fine_cents,
  SUM(fine_cents) OVER (
    PARTITION BY member_id
    ORDER BY borrowed_on
  ) AS running_fines_cents
FROM loans
WHERE member_id = 3;`}
        />
        <RefTable
          headers={['borrowed_on', 'fine_cents', 'running_fines_cents']}
          rows={[
            ['2026-07-10', '0', '0'],
            ['2026-08-03', '250', '250'],
            ['2026-08-20', '75', '325'],
            ['2026-09-10', '0', '325'],
          ]}
        />
        <Callout>
          <strong>Fun fact</strong> — window functions run <em>after</em> WHERE,
          GROUP BY and HAVING, but <em>before</em> the final ORDER BY.
          That&apos;s why the RANK above can rank by <code>COUNT(*)</code>, and
          why you can&apos;t filter on a window function&apos;s result directly
          in WHERE — you wrap the whole query in a subquery (or CTE) and filter
          the outer layer instead.
        </Callout>
        <Exercise
          id="ans-window"
          prompt="Find the most-borrowed book (or books, if tied) in each month, using RANK() with PARTITION BY the month."
        >
          <Sql
            code={`SELECT month, title, loan_count
FROM (
  SELECT date_trunc('month', l.borrowed_on) AS month,
         b.title,
         COUNT(*) AS loan_count,
         RANK() OVER (
           PARTITION BY date_trunc('month', l.borrowed_on)
           ORDER BY COUNT(*) DESC
         ) AS rnk
  FROM loans l
  JOIN books b ON b.id = l.book_id
  GROUP BY date_trunc('month', l.borrowed_on), b.title
) ranked
WHERE rnk = 1;`}
          />
          <p className="mt-2 mb-0 text-muted-foreground">
            RANK (not ROW_NUMBER) keeps ties, which matters here: in the fixture
            data no book was borrowed twice in the same month, so every book
            borrowed that month shares rank 1.
          </p>
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
          surrounding query (the way a subquery would) depends on the engine and
          version — Postgres before version 12 always materialized every CTE as
          an <em>optimization fence</em> (compute it fully, once, in isolation),
          which was sometimes a deliberate performance trick and sometimes an
          accidental slowdown; Postgres 12+ inlines CTEs by default like
          ordinary subqueries unless you force materialization with the
          MATERIALIZED keyword. A recursive CTE runs as a fixed-point loop: it
          executes the anchor once, then repeatedly re-runs the recursive part
          against only the rows produced by the previous iteration, stopping
          automatically the moment an iteration produces zero new rows.
        </Deepdive>
        <Sql
          code={`WITH genre_loans AS (
  SELECT b.genre_id, COUNT(*) AS loan_count
  FROM loans l
  JOIN books b ON b.id = l.book_id
  GROUP BY b.genre_id
)
SELECT g.name, gl.loan_count
FROM genre_loans gl
JOIN genres g ON g.id = gl.genre_id
WHERE gl.loan_count > 1;`}
        />
        <RefTable
          headers={['name', 'loan_count']}
          rows={[
            ['Classics', '3'],
            ['Horror', '5'],
            ['Adventure', '2'],
            ['Science Fiction', '2'],
          ]}
        />
        <p>
          Nothing here that a subquery couldn&apos;t do — but CTEs read
          top-to-bottom like a recipe, and you can chain several, each building
          on the last, which keeps complex reporting queries readable. This one
          applies the fine rule (25 cents a day, capped at the replacement cost)
          to every overdue loan, then totals it per member:
        </p>
        <Sql
          code={`WITH overdue AS (
  SELECT l.member_id,
         LEAST((CURRENT_DATE - l.due_on) * 25, b.replacement_cost_cents) AS accrued_cents
  FROM loans l
  JOIN books b ON b.id = l.book_id
  WHERE l.returned_on IS NULL AND l.due_on < CURRENT_DATE
),
member_accrued AS (
  SELECT member_id, SUM(accrued_cents) AS accrued_cents
  FROM overdue
  GROUP BY member_id
)
SELECT m.name, ma.accrued_cents
FROM member_accrued ma
JOIN members m ON m.id = ma.member_id
ORDER BY ma.accrued_cents DESC;`}
        />
        <RefTable
          caption="result — as of 2026-09-25"
          headers={['name', 'accrued_cents']}
          rows={[
            ['Grace Hopper', '250'],
            ['Alan Turing', '25'],
          ]}
        />
        <p>
          A <strong>recursive CTE</strong> refers to itself, which is how SQL
          walks hierarchies — org charts, category trees, or here, the genre
          tree:
        </p>
        <Sql
          code={`WITH RECURSIVE genre_tree AS (
  SELECT id, name, parent_id, 1 AS depth, CAST(name AS TEXT) AS path
  FROM genres
  WHERE name = 'Fiction'          -- anchor: starting point

  UNION ALL

  SELECT g.id, g.name, g.parent_id, gt.depth + 1, gt.path || ' / ' || g.name
  FROM genres g
  JOIN genre_tree gt ON g.parent_id = gt.id
)
SELECT path, depth FROM genre_tree;`}
        />
        <RefTable
          headers={['path', 'depth']}
          rows={[
            ['Fiction', '1'],
            ['Fiction / Classics', '2'],
            ['Fiction / Horror', '2'],
            ['Fiction / Adventure', '2'],
            ['Fiction / Fantasy', '2'],
            ['Fiction / Science Fiction', '2'],
          ]}
        />
        <Callout>
          <strong>How to read a recursive CTE</strong> — the part above UNION
          ALL is the &quot;anchor&quot; (where recursion starts); the part below
          is the &quot;recursive member,&quot; which keeps joining back to its
          own output until no new rows are produced. It always terminates
          because eventually the join finds nothing new to add. Add a sub-genre
          under Horror (say, Gothic) and it shows up at depth 3 with no change
          to the query.
        </Callout>
        <Exercise
          id="ans-cte"
          prompt="Using a CTE, find the single member who has paid the most in fines in total (fine_cents summed across all their loans)."
        >
          <Sql
            code={`WITH member_fines AS (
  SELECT m.id, m.name, SUM(l.fine_cents) AS total_fines
  FROM loans l
  JOIN members m ON m.id = l.member_id
  GROUP BY m.id, m.name
)
SELECT name, total_fines
FROM member_fines
ORDER BY total_fines DESC
LIMIT 1;   -- Alan Turing, 325`}
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
          shorthand for running GROUP BY (a, b), then GROUP BY (a), then a grand
          total GROUP BY (), and UNION ALL-ing the three result sets together —
          the database does this far more efficiently than three separate scans,
          but that&apos;s the logical output you get: one row per grouping
          level, with NULL standing in for &quot;this column isn&apos;t part of
          this particular subtotal.&quot; CUBE generalizes this to every
          possible combination of the grouped columns rather than just the
          nested hierarchy ROLLUP assumes, and GROUPING SETS lets you hand-pick
          exactly which of those combinations you want, skipping ones you
          don&apos;t need.
        </Deepdive>
        <p>
          Plain GROUP BY gives you one row per combination.{' '}
          <strong>ROLLUP</strong> adds subtotal rows going from the most
          detailed grouping up to a grand total — think of a lending report with
          per-branch subtotals and one grand total at the bottom. A loan belongs
          to the branch of the member who took it out:
        </p>
        <Sql
          code={`SELECT br.name AS branch, g.name AS genre, COUNT(*) AS loan_count
FROM loans l
JOIN members m ON m.id = l.member_id
JOIN branches br ON br.id = m.branch_id
JOIN books b ON b.id = l.book_id
JOIN genres g ON g.id = b.genre_id
GROUP BY ROLLUP(br.name, g.name)
ORDER BY br.name, g.name;`}
        />
        <RefTable
          caption="result — subtotal rows have NULL in the rolled-up column"
          headers={['branch', 'genre', 'loan_count']}
          rows={[
            ['Downtown', 'Adventure', '1'],
            ['Downtown', 'Classics', '2'],
            ['Downtown', 'Fantasy', '1'],
            ['Downtown', 'Horror', '4'],
            ['Downtown', 'Science Fiction', '1'],
            ['Downtown', 'NULL', '9'],
            ['Riverside', 'Adventure', '1'],
            ['Riverside', 'Classics', '1'],
            ['Riverside', 'Horror', '1'],
            ['Riverside', 'Science Fiction', '1'],
            ['Riverside', 'NULL', '4'],
            ['NULL', 'NULL', '13'],
          ]}
        />
        <p>
          <strong>CUBE</strong> goes further and computes subtotals for every
          combination of the grouped columns, not just the hierarchical rollup
          order — useful when you want &quot;totals by branch&quot; AND
          &quot;totals by genre&quot; AND the grand total, all at once.
        </p>
        <p>
          <strong>GROUPING SETS</strong> is the most flexible of the three: you
          specify exactly which groupings you want, with no assumed hierarchy:
        </p>
        <Sql
          code={`SELECT br.name AS branch, g.name AS genre, COUNT(*) AS loan_count
FROM loans l
JOIN members m ON m.id = l.member_id
JOIN branches br ON br.id = m.branch_id
JOIN books b ON b.id = l.book_id
JOIN genres g ON g.id = b.genre_id
GROUP BY GROUPING SETS ((br.name), (g.name), ());`}
        />
        <Callout>
          <strong>Telling a subtotal from a real NULL</strong> — the{' '}
          <code>GROUPING()</code> function returns 1 for a column that&apos;s
          been rolled up into a subtotal, and 0 otherwise, which disambiguates a
          rolled-up NULL from a genuine NULL value in the data:{' '}
          <code>GROUPING(g.name)</code> in the SELECT list. Dialect support
          varies — Postgres, SQL Server, and MySQL 8+ support all three; SQLite
          doesn&apos;t, and there you&apos;d fall back to UNION ALL of separate
          GROUP BY queries.
        </Callout>
        <Exercise
          id="ans-grouping"
          prompt="Using ROLLUP, get loan counts per branch, with a grand total row at the end."
        >
          <Sql
            code={`SELECT br.name AS branch, COUNT(*) AS loans_made
FROM loans l
JOIN members m ON m.id = l.member_id
JOIN branches br ON br.id = m.branch_id
GROUP BY ROLLUP(br.name);
-- Downtown 9, Riverside 4, NULL (grand total) 13`}
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
          <code>SUM(CASE WHEN month = 7 THEN 1 ELSE 0 END)</code> is doing
          exactly what a dedicated PIVOT clause does, just spelled out
          explicitly. The underlying trade-off is <strong>long vs wide</strong>{' '}
          data: a long, normalized table (one row per fact) is flexible, easy to
          extend with a new category without touching the schema, and simple to
          constrain and index — a wide, pivoted table is what a human reading a
          report wants to see, but adding a new category means adding a new
          column. Most systems store data long and pivot only at the final
          reporting step, right before it reaches a person.
        </Deepdive>
        <p>
          SQL is naturally &quot;long&quot;: one row per fact. Reports often
          want &quot;wide&quot;: one row per entity, one column per category.
          The universal, portable way to pivot is conditional aggregation — a
          CASE inside an aggregate, one branch per column you want. Loans per
          genre per month:
        </p>
        <Sql
          code={`SELECT
  g.name AS genre,
  SUM(CASE WHEN EXTRACT(MONTH FROM l.borrowed_on) = 7 THEN 1 ELSE 0 END) AS jul,
  SUM(CASE WHEN EXTRACT(MONTH FROM l.borrowed_on) = 8 THEN 1 ELSE 0 END) AS aug,
  SUM(CASE WHEN EXTRACT(MONTH FROM l.borrowed_on) = 9 THEN 1 ELSE 0 END) AS sep
FROM loans l
JOIN books b ON b.id = l.book_id
JOIN genres g ON g.id = b.genre_id
GROUP BY g.name
ORDER BY g.name;`}
        />
        <RefTable
          headers={['genre', 'jul', 'aug', 'sep']}
          rows={[
            ['Adventure', '1', '0', '1'],
            ['Classics', '1', '1', '1'],
            ['Fantasy', '0', '0', '1'],
            ['Horror', '2', '2', '1'],
            ['Science Fiction', '0', '1', '1'],
          ]}
        />
        <p>
          Some databases also offer a dedicated <strong>PIVOT</strong> keyword
          (SQL Server, Oracle) that does the same thing with less typing once
          you already know the column list ahead of time. Postgres has no
          built-in PIVOT — the <code>crosstab()</code> function from the{' '}
          <code>tablefunc</code> extension covers the same ground, but
          conditional aggregation works everywhere with zero setup, which is why
          it&apos;s worth knowing regardless of dialect.
        </p>
        <Callout>
          <strong>UNPIVOT</strong> is the reverse — turning columns back into
          rows — and is far less common in practice than pivoting; it mostly
          shows up when ingesting spreadsheet-shaped source data into a
          normalized table.
        </Callout>
        <Exercise
          id="ans-pivot"
          prompt="Pivot the members table into one row showing counts of premium vs standard members as two columns."
        >
          <Sql
            code={`SELECT
  SUM(CASE WHEN tier = 'premium' THEN 1 ELSE 0 END) AS premium_count,
  SUM(CASE WHEN tier = 'standard' THEN 1 ELSE 0 END) AS standard_count
FROM members;   -- 1 and 3`}
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
          code={`INSERT INTO books (title, author_id, genre_id, published_year,
                   copies_total, copies_available, replacement_cost_cents)
VALUES ('The War of the Worlds', 5, 7, 1898, 1, 1, 850);

UPDATE books
SET copies_total = copies_total + 1,
    copies_available = copies_available + 1
WHERE id = 3;   -- a second copy of Moby-Dick arrives

DELETE FROM reservations
WHERE status = 'cancelled' AND created_at < '2026-01-01';`}
        />
        <Callout variant="warn">
          <strong>The single most important habit</strong> — always write and
          test the WHERE clause of an UPDATE or DELETE as a SELECT first. Run{' '}
          <code>
            SELECT * FROM reservations WHERE status = &apos;cancelled&apos; AND
            created_at &lt; &apos;2026-01-01&apos;
          </code>
          , confirm those are exactly the rows you mean, then swap SELECT * for
          the DELETE. An UPDATE or DELETE with no WHERE clause touches every
          single row in the table.
        </Callout>
        <p>
          A <strong>transaction</strong> groups multiple statements into one
          all-or-nothing unit — either every statement succeeds and is saved (
          <strong>COMMIT</strong>), or something goes wrong and none of it is (
          <strong>ROLLBACK</strong>). This matters the moment an action touches
          more than one table, like Grace borrowing Moby-Dick:
        </p>
        <Sql
          code={`BEGIN TRANSACTION;

UPDATE books
SET copies_available = copies_available - 1
WHERE id = 3 AND copies_available > 0;
-- 0 rows updated? No copies left: ROLLBACK instead of continuing

INSERT INTO loans (book_id, member_id, borrowed_on, due_on)
VALUES (3, 2, CURRENT_DATE, CURRENT_DATE + 14);

COMMIT;`}
        />
        <p>
          If the server crashed between the UPDATE and the INSERT with no
          transaction, a copy would vanish from the shelf with no loan to
          account for it. The transaction guarantees that either both statements
          land, or neither does.
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
          prompt="As a single transaction: mark loan 12 as returned today, and put the copy back on the shelf by incrementing copies_available for whichever book it was."
        >
          <Sql
            code={`BEGIN TRANSACTION;

UPDATE loans SET returned_on = CURRENT_DATE WHERE id = 12;

UPDATE books
SET copies_available = copies_available + 1
WHERE id = (SELECT book_id FROM loans WHERE id = 12);

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
          (Postgres, MySQL&apos;s InnoDB, Oracle) use to deliver these isolation
          levels without constantly blocking readers behind writers is called{' '}
          <strong>MVCC — multi-version concurrency control</strong>. Instead of
          locking a row every time it&apos;s read, the database keeps multiple
          versions of a row around and hands each transaction a consistent
          snapshot as of some point in time, so readers never wait on writers
          and writers never wait on readers — only writer-vs-writer conflicts on
          the same row need actual locks. This is why READ COMMITTED is usually
          cheap: it just means &quot;take a fresh snapshot for each
          statement&quot; rather than &quot;acquire a lock for each read.&quot;
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
          value, then update it based on what you read&quot; without a race.
          Renewing Ada&apos;s loan 12 for another 28 days:
        </p>
        <Sql
          code={`BEGIN;
SELECT due_on FROM loans WHERE id = 12 FOR UPDATE;
-- application computes the new due date from the value above (2026-10-12 + 28 days)
UPDATE loans SET due_on = '2026-11-09' WHERE id = 12;
COMMIT;`}
        />
        <Callout>
          <strong>Deadlocks</strong> — if transaction A locks row 1 and waits
          for row 2, while transaction B locks row 2 and waits for row 1,
          neither can proceed. The database detects this and kills one of them
          automatically (returning a deadlock error to retry). Locking rows in a
          consistent order across your application is the usual way to avoid
          triggering it in the first place.
        </Callout>
        <Exercise
          id="ans-isolation"
          prompt="There is exactly one copy of Moby-Dick (book 3) on the shelf, and Grace and Alan click Borrow at the same instant. Each transaction first checks copies_available, then decrements it. What should you add to the SELECT that checks copies_available, to prevent both loans from succeeding?"
        >
          <Sql
            code={`SELECT copies_available FROM books WHERE id = 3 FOR UPDATE;`}
          />
          <p className="mt-2 mb-0 text-muted-foreground">
            FOR UPDATE locks that row so the second transaction has to wait
            until the first one commits (and then sees copies_available = 0),
            rather than both reading the same stale 1 and both creating a loan.
            The CHECK constraint from Constraints &amp; design is a useful
            backstop too: it stops the count ever going negative.
          </p>
        </Exercise>
      </Topic>

      <Topic id="json" no="19" title="JSON & semi-structured data">
        <p>
          Sometimes a column&apos;s shape genuinely varies row to row — modern
          SQL databases let you store and query JSON without giving up the rest
          of SQL.
        </p>
        <Deepdive>
          <strong>Under the hood</strong> — A JSON/JSONB column trades the
          database&apos;s normal type system for flexibility: instead of a fixed
          set of typed columns the planner can reason about precisely, you get a
          single opaque blob that has to be parsed and traversed at query time.
          Postgres&apos;s JSONB specifically pre-parses the JSON into a binary,
          indexable form at write time (unlike plain JSON, which is stored as
          text and re-parsed on every read), which is why JSONB is almost always
          the better default when the underlying data is structured JSON rather
          than a JSON string you&apos;re just passing through unchanged.
        </Deepdive>
        <p>
          Say each book has flexible edition details (page count, language,
          available formats) that don&apos;t deserve their own rigid columns:
        </p>
        <Sql
          code={`ALTER TABLE books ADD COLUMN details JSONB;   -- JSONB on Postgres, JSON on MySQL/SQL Server

UPDATE books
SET details = '{"pages": 635, "language": "en", "formats": ["hardcover", "audiobook"]}'
WHERE id = 3;`}
        />
        <p>
          Querying inside the JSON uses operators or functions rather than plain
          column names:
        </p>
        <Sql
          code={`-- Postgres: ->> extracts as text, -> extracts as JSON
SELECT title, details ->> 'pages' AS pages
FROM books
WHERE (details ->> 'pages')::INT >= 500;

-- MySQL
SELECT title, JSON_EXTRACT(details, '$.pages') AS pages
FROM books
WHERE JSON_EXTRACT(details, '$.pages') >= 500;`}
        />
        <Callout>
          <strong>When to reach for JSON vs a real column</strong> — JSON is
          great for data whose shape genuinely varies or evolves (metadata, user
          preferences, webhook payloads) or that you rarely filter on. Anything
          you query, join, or index constantly belongs in its own typed column —
          you lose most of SQL&apos;s type-checking, constraint enforcement, and
          query-planner efficiency once data is buried inside JSON.
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
          prompt='Write a query returning the title and formats list (as JSON) for every book whose details list "audiobook" among its formats (Postgres syntax is fine).'
        >
          <Sql
            code={`SELECT title, details -> 'formats' AS formats
FROM books
WHERE details -> 'formats' ? 'audiobook';`}
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
          of this represents the real world as <strong>entities</strong> (things
          — members, books), their <strong>attributes</strong> (columns), and
          the <strong>relationships</strong> between them (foreign keys). A
          foreign key isn&apos;t just documentation either — it&apos;s an
          enforced constraint: the database physically checks, on every insert
          or update, that the referenced row actually exists, and by default
          refuses to let you delete a parent row (like a book) while child rows
          (its loans) still point at it, unless you&apos;ve explicitly
          configured a cascade or set-null behavior for that foreign key.
        </Deepdive>
        <Sql
          code={`CREATE TABLE books (
  id                     INTEGER PRIMARY KEY,
  title                  TEXT NOT NULL,
  isbn                   TEXT UNIQUE,
  copies_total           INTEGER NOT NULL CHECK (copies_total >= 0),
  copies_available       INTEGER NOT NULL,
  replacement_cost_cents INTEGER NOT NULL CHECK (replacement_cost_cents > 0),
  CHECK (copies_available BETWEEN 0 AND copies_total)
);

CREATE TABLE loans (
  id          INTEGER PRIMARY KEY,
  book_id     INTEGER NOT NULL REFERENCES books(id),
  member_id   INTEGER NOT NULL REFERENCES members(id),
  borrowed_on DATE NOT NULL DEFAULT CURRENT_DATE,
  due_on      DATE NOT NULL,
  returned_on DATE,
  fine_cents  INTEGER NOT NULL DEFAULT 0 CHECK (fine_cents >= 0),
  CHECK (due_on > borrowed_on)
);`}
        />
        <p>
          Reading that schema: <strong>PRIMARY KEY</strong> uniquely identifies
          each row and can&apos;t be NULL. <strong>FOREIGN KEY</strong> (the{' '}
          <code>REFERENCES</code> part) guarantees a loan&apos;s book_id
          actually exists in the books table — the database rejects the insert
          otherwise. <strong>UNIQUE</strong> forbids duplicates;{' '}
          <strong>CHECK</strong> enforces a custom rule — the table-level{' '}
          <code>copies_available BETWEEN 0 AND copies_total</code> check means
          no bug can ever lend out a copy the library doesn&apos;t have;{' '}
          <strong>NOT NULL</strong> makes a column mandatory;{' '}
          <strong>DEFAULT</strong> fills a value in when none is given.
        </p>
        <Callout>
          <strong>Why does a loan store book_id instead of the title?</strong> —
          this is <strong>normalization</strong>: structuring tables so each
          fact is stored exactly once. If you copied the title and author onto
          every loan row, fixing a typo in a title would mean updating every
          loan that ever included it, and missing one leaves the data
          contradicting itself. Pointing at <code>books.id</code> means the
          title lives in exactly one place.
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
          books-to-loans is a <strong>one-to-many</strong> relationship (one
          book, many loans). Some relationships are{' '}
          <strong>many-to-many</strong> — every fixture book has a single
          author, so <code>books.author_id</code> is enough, but a co-written
          book like <em>Good Omens</em> has two authors, and each author writes
          many books. Neither table can hold the other&apos;s key directly, so
          the fix is a third table in between, a <strong>junction table</strong>
          :
        </p>
        <Sql
          code={`CREATE TABLE book_authors (
  book_id   INTEGER NOT NULL REFERENCES books(id),
  author_id INTEGER NOT NULL REFERENCES authors(id),
  PRIMARY KEY (book_id, author_id)
);`}
        />
        <p>
          Querying it just chains two joins through the middle table — the same
          pattern you already used for members, loans and books:
        </p>
        <Sql
          code={`SELECT b.title, a.name AS author
FROM books b
JOIN book_authors ba ON ba.book_id = b.id
JOIN authors a ON a.id = ba.author_id;`}
        />
        <Exercise
          id="ans-design"
          prompt="Write a CREATE TABLE for reservations: it needs book_id (FK to books), member_id (FK to members), created_at (defaulting to now), and a status that must be one of 'waiting', 'ready', 'fulfilled' or 'cancelled', defaulting to 'waiting'."
        >
          <Sql
            code={`CREATE TABLE reservations (
  id         INTEGER PRIMARY KEY,
  book_id    INTEGER NOT NULL REFERENCES books(id),
  member_id  INTEGER NOT NULL REFERENCES members(id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  status     TEXT NOT NULL DEFAULT 'waiting'
             CHECK (status IN ('waiting', 'ready', 'fulfilled', 'cancelled'))
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
          code={`CREATE INDEX idx_loans_member ON loans(member_id);
CREATE INDEX idx_members_branch ON members(branch_id);`}
        />
        <p>
          Good candidates for an index: columns used constantly in{' '}
          <strong>WHERE</strong>, <strong>JOIN ON</strong>, and{' '}
          <strong>ORDER BY</strong>. Primary keys and (usually) foreign keys are
          indexed automatically or should be indexed by convention — that{' '}
          <code>loans.member_id</code> column above is exactly the kind of
          foreign key that gets hit by every join to members (and every &quot;my
          loans&quot; page), so it earns its index.
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
          code={`EXPLAIN SELECT * FROM loans WHERE member_id = 1;
-- look for "Index Scan" (good) vs "Seq Scan" / "Table Scan" (full scan)`}
        />
        <Callout>
          <strong>Fun fact</strong> — a composite index on (member_id,
          returned_on) can speed up a query filtering on member_id alone, or on
          member_id AND returned_on together (&quot;this member&apos;s open
          loans&quot;), but generally can&apos;t help a query that filters on
          returned_on alone. Column order in a composite index matters —
          it&apos;s usually described as &quot;leftmost prefix&quot; matching.
        </Callout>
        <Exercise
          id="ans-index"
          prompt={
            <>
              You keep running{' '}
              <code>SELECT * FROM loans WHERE book_id = ?</code> to build a
              &quot;who has borrowed this book&quot; report, and it&apos;s slow.
              What index would you add?
            </>
          }
        >
          <Sql code={`CREATE INDEX idx_loans_book ON loans(book_id);`} />
          <p className="mt-2 mb-0 text-muted-foreground">
            This is exactly the pattern from earlier — book_id is a foreign key
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
          <strong>procedural vs declarative</strong>: everything earlier in this
          tutorial (SELECT, JOIN, GROUP BY) is declarative — you describe the
          result, the database figures out how. A stored procedure or function
          is procedural: you write step-by-step logic, with variables, IF
          branches, and loops, that runs inside the database engine itself
          rather than in your application. Many databases also cache a
          procedure&apos;s compiled execution plan the first time it runs, so
          repeated calls skip the parsing/planning overhead a fresh ad-hoc query
          would pay each time — part of why hot, frequently-called operations
          are sometimes moved into a procedure.
        </Deepdive>
        <p>
          A <strong>stored procedure</strong> is a named, reusable routine that
          runs on the database server — handy for a multi-step operation you
          call often, like borrowing a book (take a copy, work out the loan
          period, record the loan):
        </p>
        <Sql
          code={`-- Postgres/plpgsql style
CREATE PROCEDURE borrow_book(p_member_id INT, p_book_id INT)
LANGUAGE plpgsql AS $$
DECLARE v_days INT;
BEGIN
  UPDATE books SET copies_available = copies_available - 1
  WHERE id = p_book_id AND copies_available > 0;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'No copies of book % left', p_book_id;
  END IF;

  SELECT CASE WHEN tier = 'premium' THEN 28 ELSE 14 END INTO v_days
  FROM members WHERE id = p_member_id;

  INSERT INTO loans (book_id, member_id, borrowed_on, due_on)
  VALUES (p_book_id, p_member_id, CURRENT_DATE, CURRENT_DATE + v_days);
END;
$$;

CALL borrow_book(2, 3);   -- Grace borrows Moby-Dick`}
        />
        <p>
          A <strong>function</strong> is similar but returns a value, so it can
          be used directly inside a SELECT — like a mini calculation you want to
          reuse across many queries. Here, the overdue-fine rule:
        </p>
        <Sql
          code={`CREATE FUNCTION overdue_fine(p_loan_id INT) RETURNS INTEGER
LANGUAGE plpgsql AS $$
DECLARE fine INTEGER;
BEGIN
  SELECT LEAST(GREATEST(COALESCE(l.returned_on, CURRENT_DATE) - l.due_on, 0) * 25,
               b.replacement_cost_cents)
  INTO fine
  FROM loans l JOIN books b ON b.id = l.book_id
  WHERE l.id = p_loan_id;
  RETURN fine;
END;
$$;

SELECT id, overdue_fine(id) FROM loans WHERE returned_on IS NULL;`}
        />
        <p>
          A <strong>trigger</strong> fires automatically whenever a table
          changes — no one has to remember to call it. A common use: writing an
          audit row every time a loan is created:
        </p>
        <Sql
          code={`CREATE TRIGGER after_loan_insert
AFTER INSERT ON loans
FOR EACH ROW
EXECUTE FUNCTION log_loan_audit();`}
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
          prompt="In plain English (no need for exact syntax): describe a trigger that tells the first member in the reservation queue their hold is ready whenever a copy of that book is returned."
        >
          <p className="mt-2 mb-0 text-muted-foreground">
            An AFTER UPDATE trigger on loans that fires when{' '}
            <code>returned_on</code> changes from NULL to a date. It finds the
            oldest reservation for that book_id with status &apos;waiting&apos;
            (ORDER BY created_at, LIMIT 1) and updates it to &apos;ready&apos;,
            so the notification can go out without any application code having
            to remember to check the queue.
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
          password, a certificate) and <strong>authorization</strong> (what that
          verified identity is actually allowed to do — which GRANT and REVOKE
          control). The guiding principle for authorization is{' '}
          <strong>least privilege</strong>: every account, human or application,
          should hold the smallest set of permissions it needs to do its job and
          nothing more, so that a compromised or buggy component can only do
          limited damage. SQL injection is really an authorization failure in
          disguise — untrusted input is allowed to redefine what SQL the
          database executes, temporarily inheriting whatever privileges the
          connecting account holds.
        </Deepdive>
        <p>
          <strong>GRANT</strong> and <strong>REVOKE</strong> control access at
          the database level — which users or roles can read, write, or
          administer which tables. The library has two kinds of people, so two
          roles:
        </p>
        <Sql
          code={`CREATE ROLE librarian;
CREATE ROLE library_member;

GRANT SELECT, INSERT, UPDATE ON books, loans, reservations TO librarian;
REVOKE DELETE ON loans FROM librarian;   -- loan history is never deleted

GRANT SELECT ON available_books TO library_member;`}
        />
        <p>
          A common pattern: grant staff and application accounts only the CRUD
          access they actually need, and grant everyone else SELECT on views
          (like the <code>available_books</code> view from earlier) rather than
          direct table access — so sensitive columns, such as other
          members&apos; email addresses, can simply be left out of the view.
        </p>
        <Callout variant="warn">
          <strong>SQL injection</strong> — the most well-known SQL security
          issue isn&apos;t a permissions problem at all: it&apos;s building a
          query by directly concatenating user input into a string.{' '}
          <code>
            &quot;SELECT * FROM books WHERE title = &apos;&quot; + userInput +
            &quot;&apos;&quot;
          </code>{' '}
          lets someone type <code>&apos; OR &apos;1&apos;=&apos;1</code> and
          return every row, or worse. The fix is always{' '}
          <strong>parameterized queries</strong> (placeholders like{' '}
          <code>?</code> or <code>$1</code> that the driver binds safely), never
          manual string-building with untrusted input — this is a rule with no
          exceptions in practice.
        </Callout>
        <Sql
          code={`-- Vulnerable
query = "SELECT * FROM books WHERE title = '" + userInput + "'"

-- Safe — parameter is bound, never interpreted as SQL
query = "SELECT * FROM books WHERE title = ?"
execute(query, [userInput])`}
        />
        <p>
          <strong>Row-level security</strong> (Postgres, SQL Server) goes a
          level deeper than table grants — it lets you restrict which individual{' '}
          <em>rows</em> a user can see or modify, based on a policy, so two
          members querying the same loans table each only ever see their own
          loans without the application needing to remember a WHERE clause
          everywhere.
        </p>
        <Exercise
          id="ans-security"
          prompt="A junior developer wants to build the catalog's 'search by title' box and writes the query by concatenating the search box's text directly into the SQL string. What's wrong, and what should they do instead?"
        >
          <p className="mt-2 mb-0 text-muted-foreground">
            It&apos;s a SQL injection vulnerability — anything typed into that
            search box becomes part of the executable query. They should use a
            parameterized query instead, e.g.{' '}
            <code>SELECT * FROM books WHERE title = ?</code> with the search
            text passed as a bound parameter, never inserted into the string
            directly.
          </p>
        </Exercise>
      </Topic>
    </>
  )
}
