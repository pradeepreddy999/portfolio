import type { NavGroup } from '#/lib/tutorials/shared'
import {
  Callout,
  Code,
  Deepdive,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'

export const webApiNav: Array<NavGroup> = [
  {
    title: 'C# Language Essentials',
    items: [
      { id: 'extmembers', label: 'Extension members' },
      { id: 'fieldkeyword', label: 'Field-backed properties' },
      { id: 'nullcondassign', label: 'Null-conditional assignment' },
      { id: 'spanparams', label: 'Span<T> & params collections' },
      { id: 'filebasedapps', label: 'File-based apps' },
      { id: 'csharp14misc', label: 'Partial members & compound operators' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { id: 'anatomy', label: 'Project anatomy & minimal hosting' },
      { id: 'routing', label: 'Controllers, routing & action results' },
      { id: 'binding', label: 'Model binding' },
      { id: 'validation', label: 'Validation' },
      { id: 'di', label: 'Dependency injection, lifetimes & keyed services' },
      { id: 'config', label: 'Configuration & the options pattern' },
      { id: 'middleware', label: 'The middleware pipeline' },
    ],
  },
  {
    title: 'Data Access',
    items: [
      { id: 'efcore', label: 'EF Core basics' },
      { id: 'efcore10', label: 'JSON columns, named filters & LeftJoin' },
      { id: 'efrelations', label: 'Relationships & migrations' },
      { id: 'dapper', label: 'Dapper: the lightweight alternative' },
      { id: 'repository', label: 'Repository & unit of work pattern' },
    ],
  },
  {
    title: 'API Contracts',
    items: [
      { id: 'dtos', label: 'DTOs & object mapping' },
      { id: 'openapi', label: 'API docs: OpenAPI & Scalar' },
      { id: 'versioning', label: 'API versioning' },
      { id: 'minimalapi', label: 'Minimal APIs, TypedResults & controllers' },
    ],
  },
  {
    title: 'Security',
    items: [
      { id: 'jwt', label: 'Authentication with JWT bearer tokens' },
      { id: 'authz', label: 'Authorization: roles, policies & claims' },
      { id: 'cors', label: 'CORS' },
      { id: 'secrets', label: 'Secrets, data protection & passkeys' },
    ],
  },
  {
    title: 'Production Readiness',
    items: [
      { id: 'logging', label: 'Structured logging with Serilog' },
      { id: 'filters', label: 'Filters, exceptions & ProblemDetails' },
      { id: 'caching', label: 'Caching with HybridCache' },
      { id: 'ratelimit', label: 'Rate limiting' },
      { id: 'health', label: 'Health checks' },
      { id: 'resilience', label: 'Resilience with Polly' },
      { id: 'hostedservices', label: 'Background work & hosted services' },
    ],
  },
  {
    title: 'Runtime & Observability',
    items: [
      { id: 'nativeaot', label: 'Native AOT & trimming' },
      { id: 'observability', label: 'Observability with OpenTelemetry' },
      { id: 'timeprovider', label: 'TimeProvider for testable time' },
    ],
  },
  {
    title: 'Architecture at Scale',
    items: [
      { id: 'mediatr', label: 'CQRS with MediatR' },
      { id: 'cleanarch', label: 'Clean / onion architecture' },
      { id: 'signalr', label: 'Real-time updates with SignalR' },
      { id: 'grpc', label: 'gRPC vs. REST' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { id: 'unittest', label: 'Unit testing with xUnit v3 & Moq' },
      {
        id: 'integrationtest',
        label: 'Integration testing with WebApplicationFactory',
      },
      { id: 'manualtest', label: 'Exploratory & manual testing tools' },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { id: 'iis', label: 'Kestrel, IIS & reverse proxies' },
      { id: 'docker', label: 'Containerizing with Docker' },
    ],
  },
]

const CS_KEYWORDS = [
  'abstract',
  'as',
  'async',
  'await',
  'base',
  'bool',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'checked',
  'class',
  'const',
  'continue',
  'decimal',
  'default',
  'delegate',
  'do',
  'double',
  'else',
  'enum',
  'event',
  'explicit',
  'extension',
  'extern',
  'false',
  'field',
  'finally',
  'fixed',
  'float',
  'for',
  'foreach',
  'get',
  'goto',
  'if',
  'implicit',
  'in',
  'init',
  'int',
  'interface',
  'internal',
  'is',
  'lock',
  'long',
  'namespace',
  'new',
  'not',
  'null',
  'object',
  'on',
  'operator',
  'out',
  'override',
  'params',
  'partial',
  'private',
  'protected',
  'public',
  'readonly',
  'record',
  'ref',
  'required',
  'return',
  'sealed',
  'set',
  'short',
  'sizeof',
  'stackalloc',
  'static',
  'string',
  'struct',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'uint',
  'ulong',
  'unchecked',
  'unsafe',
  'ushort',
  'using',
  'value',
  'var',
  'virtual',
  'void',
  'volatile',
  'when',
  'where',
  'while',
  'with',
  'yield',
]

const CS_TYPES = [
  'WebApplication',
  'WebApplicationBuilder',
  'WebApplicationFactory',
  'Console',
  'Task',
  'ValueTask',
  'CancellationToken',
  'List',
  'IEnumerable',
  'IQueryable',
  'IList',
  'ReadOnlySpan',
  'Span',
  'Dictionary',
  'Func',
  'Action',
  'Guid',
  'Exception',
  'ArgumentException',
  'ArgumentNullException',
  'Stopwatch',
  'HttpContext',
  'HttpClient',
  'HttpRequestMessage',
  'HttpResponseMessage',
  'StatusCodes',
  'ControllerBase',
  'ApiController',
  'Route',
  'HttpGet',
  'HttpPost',
  'HttpPut',
  'HttpDelete',
  'FromQuery',
  'FromBody',
  'FromRoute',
  'FromHeader',
  'FromForm',
  'FromServices',
  'FromKeyedServices',
  'IActionResult',
  'ActionResult',
  'CreatedAtAction',
  'Results',
  'TypedResults',
  'Ok',
  'NotFound',
  'Created',
  'ProblemDetails',
  'Pizza',
  'PizzaDto',
  'Order',
  'OrderDto',
  'CreateOrderDto',
  'Topping',
  'PizzaDbContext',
  'PizzasController',
  'PizzasV2Controller',
  'DbContext',
  'DbSet',
  'DbContextOptions',
  'ModelBuilder',
  'SqlConnection',
  'IPizzaOven',
  'PizzaOven',
  'IOrderCounter',
  'OrderCounter',
  'INapkinDispenser',
  'NapkinDispenser',
  'IServiceScopeFactory',
  'IPaymentGateway',
  'StripeGateway',
  'PayPalGateway',
  'PizzaSettings',
  'IOptions',
  'IOptionsSnapshot',
  'IOptionsMonitor',
  'ILogger',
  'IExceptionHandler',
  'IExceptionFilter',
  'IActionFilter',
  'ActionExecutingContext',
  'ActionExecutedContext',
  'LogTimeFilter',
  'GlobalExceptionHandler',
  'IPizzaRepository',
  'PizzaRepository',
  'AbstractValidator',
  'CreateOrderValidator',
  'RuleFor',
  'MappingProfile',
  'Profile',
  'ApiVersion',
  'JwtBearerDefaults',
  'TokenValidationParameters',
  'SymmetricSecurityKey',
  'Encoding',
  'IAuthorizationHandler',
  'HybridCache',
  'IMemoryCache',
  'IDistributedCache',
  'PizzaService',
  'OrderService',
  'HealthCheckResult',
  'HttpRetryStrategyOptions',
  'HttpCircuitBreakerStrategyOptions',
  'PizzaSupplierClient',
  'BackgroundService',
  'PizzaReminderService',
  'IHostedService',
  'IRequest',
  'IRequestHandler',
  'IMediator',
  'GetPizzaQuery',
  'GetPizzaHandler',
  'IMapper',
  'Hub',
  'OrderHub',
  'Groups',
  'Program',
  'TimeProvider',
  'FakeTimeProvider',
  'DateTimeOffset',
  'DateTime',
  'TimeSpan',
  'Mock',
  'Assert',
  'Fact',
  'Theory',
  'InlineData',
  'PizzaApiTests',
  'IClassFixture',
  'OrderQuantity',
]

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function highlightCsharp(code: string): string {
  const kwPattern = CS_KEYWORDS.join('|')
  const tyPattern = CS_TYPES.join('|')
  const master = new RegExp(
    `(//[^\\n]*)|(\\$)?("(?:\\\\.|[^"\\\\])*")|\\b(${tyPattern})\\b|\\b(${kwPattern})\\b`,
    'g',
  )
  return escapeHtml(code).replace(
    master,
    (match, comment, prefix, quoted, ty, kw) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (quoted) return `${prefix ?? ''}<span class="str">${quoted}</span>`
      if (ty) return `<span class="ty">${match}</span>`
      if (kw) return `<span class="kw">${match}</span>`
      return match
    },
  )
}

function highlightJson(code: string): string {
  return escapeHtml(code).replace(
    /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(\/\/[^\n]*)/g,
    (match, str, colon, lit, comment) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (lit) return `<span class="kw">${match}</span>`
      if (str) {
        const cls = colon ? 'ty' : 'str'
        return `<span class="${cls}">${str}</span>${colon ?? ''}`
      }
      return match
    },
  )
}

function highlightXml(code: string): string {
  return escapeHtml(code).replace(
    /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?[a-zA-Z][\w.-]*)|("[^"]*")/g,
    (match, comment, tag, str) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (str) return `<span class="str">${str}</span>`
      if (tag) return `<span class="ty">${tag}</span>`
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

function Cs({ code }: { code: string }) {
  return <Code html={highlightCsharp(code)} />
}

function Json({ code }: { code: string }) {
  return <Code html={highlightJson(code)} />
}

function Xml({ code }: { code: string }) {
  return <Code html={highlightXml(code)} />
}

function Bash({ code }: { code: string }) {
  return <Code html={highlightBash(code)} />
}

export function WebApiContent() {
  return (
    <>
      <ModuleTitle>C# Language Essentials</ModuleTitle>

      <Topic id="extmembers" no="01" title="Extension Members">
        <p>
          For years, extension methods could only add <em>methods</em> to a type
          you don't own. Extension blocks widen that to properties, static
          members, indexers, and operators.
        </p>
        <Cs
          code={`public static class PizzaExtensions
{
    // extension block: "pizza" is the receiver, like an implicit \`this\`
    extension(Pizza pizza)
    {
        // an extension PROPERTY -- reads like a real property, not a verb
        public bool IsLarge => pizza.SizeInInches >= 16;
        public decimal PriceWithTax => pizza.Price * 1.08m;
    }

    // a second block with a type-only receiver = static extension members
    extension(Pizza)
    {
        public static Pizza Margherita => new() { Name = "Margherita", Price = 9.99m };
    }
}

// Usage -- both read as if they were real members of Pizza:
if (myPizza.IsLarge) Console.WriteLine(myPizza.PriceWithTax);
var starter = Pizza.Margherita;`}
        />
        <p>
          The older <code>this</code>-parameter syntax (
          <code>public static bool IsLarge(this Pizza p)</code>) still compiles
          and works identically — extension members are additive. Reach for the
          block syntax whenever what you're adding conceptually <em>is</em> a
          property or a static factory, not an action.
        </p>
        <Callout>
          Where this shines in a Web API: adding read-only computed properties
          to types from a library you don't own — like <code>IsExpired</code> on
          a token response, or a <code>ToProblemDetails()</code>-style
          conversion — without wrapping every DTO in a new class.
        </Callout>
      </Topic>

      <Topic id="fieldkeyword" no="02" title="Field-Backed Properties">
        <p>
          A middle ground between an auto-property and a fully manual one — add
          validation or clamping logic without declaring a backing field
          yourself.
        </p>
        <Cs
          code={`public class Pizza
{
    public string Name
    {
        get;
        set => field = value?.Trim() ?? throw new ArgumentNullException(nameof(value));
    }

    // clamp spice level into range without a manually-declared _spiceLevel field
    public int SpiceLevel
    {
        get;
        set => field = Math.Clamp(value, 1, 5);
    }
}`}
        />
        <p>
          Adding logic to a setter used to mean giving up the auto-property
          entirely and writing out a private backing field by hand. The{' '}
          <code>field</code> contextual keyword refers to the compiler-generated
          backing field directly inside the accessor, so DTOs and entities can
          enforce simple invariants without the ceremony.
        </p>
      </Topic>

      <Topic id="nullcondassign" no="03" title="Null-Conditional Assignment">
        <p>
          <code>?.</code> has worked on the right-hand side of an expression for
          years. It can now appear on the <em>left</em> side of an assignment
          too.
        </p>
        <Cs
          code={`// Needs an explicit null check to assign safely:
if (order.Customer != null)
{
    order.Customer.LastOrderDate = DateTime.UtcNow;
}

// Equivalent, in one line:
order.Customer?.LastOrderDate = DateTime.UtcNow;
// If order.Customer is null, the assignment (and its right-hand side) is simply skipped.`}
        />
        <p>
          A small feature, but it removes a very common four-line
          null-guard-then-assign pattern that shows up constantly in mapping and
          update logic.
        </p>
      </Topic>

      <Topic id="spanparams" no="04" title="Span<T> & params Collections">
        <p>
          <code>{'Span<T>'}</code> and <code>{'ReadOnlySpan<T>'}</code> convert
          implicitly in more places, and <code>params</code> accepts any
          collection type, not just arrays.
        </p>
        <Cs
          code={`// params works with List<T>, Span<T>, or anything collection-like -- not just T[]
void LogToppings(params IEnumerable<string> toppings) => Console.WriteLine(string.Join(", ", toppings));

LogToppings("Pepperoni", "Mushroom"); // still works exactly like before

// Span<T> converts implicitly in more places, which matters for high-throughput
// API code (serializers, parsers) that avoids heap allocations on hot paths.
void ProcessOrderIds(ReadOnlySpan<int> ids) { /* ... */ }
int[] ids = [101, 102, 103];
ProcessOrderIds(ids); // array-to-span conversion, no extra copy`}
        />
        <p>
          You won't reach for <code>{'Span<T>'}</code> in everyday
          CRUD-controller code, but it's exactly what the runtime itself leans
          on for the throughput gains you'll see in the JIT and EF Core's query
          pipeline.
        </p>
      </Topic>

      <Topic id="filebasedapps" no="05" title="File-Based Apps">
        <p>
          You can run a single <code>.cs</code> file directly — no project file
          required at all.
        </p>
        <Cs
          code={`// PingApi.cs
#:sdk Microsoft.NET.Sdk.Web
#:package Microsoft.AspNetCore.OpenApi@10.*

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
app.MapGet("/ping", () => Results.Ok(new { status = "healthy", time = DateTime.UtcNow }));
app.Run();`}
        />
        <Bash code={`dotnet run PingApi.cs`} />
        <p>
          The <code>#:sdk</code> and <code>#:package</code> directives tell the
          SDK what it needs at the top of the file itself. This isn't meant to
          replace real projects — it's for quick health-check scripts, throwaway
          prototypes, or a tiny internal tool you don't want to scaffold a whole
          solution for. When it outgrows one file,{' '}
          <code>dotnet project convert</code> turns it into a normal project.
        </p>
      </Topic>

      <Topic
        id="csharp14misc"
        no="06"
        title="Partial Members & Compound Operators"
      >
        <p>
          Three smaller refinements that mostly help source-generator authors
          and library code, but are worth recognizing when you see them.
        </p>
        <Cs
          code={`// Partial constructors -- a generator can emit the constructor body
// while your hand-written half declares the signature (mirrors partial methods).
public partial class PizzaOrder
{
    public partial PizzaOrder(int id, string customer);
}

// Partial events -- same idea, for event declarations.
public partial class OrderTracker
{
    public partial event EventHandler<OrderEventArgs> OrderPlaced;
}

// User-defined compound assignment operators -- define += directly,
// instead of the compiler synthesizing it from operator+.
public struct Money
{
    public decimal Amount;
    public void operator +=(Money other) => Amount += other.Amount; // in-place, no new allocation
}`}
        />
        <p>
          You're most likely to encounter these inside source-generated code
          (like EF Core's or a mapping library's generated partials) rather than
          write them yourself day to day — but recognizing the syntax saves
          confusion when you open generated files.
        </p>
      </Topic>

      <ModuleTitle>Foundations</ModuleTitle>

      <Topic
        id="anatomy"
        no="07"
        title="Project Anatomy & the Minimal Hosting Model"
      >
        <p>
          Every ASP.NET Core API starts from one file: <code>Program.cs</code>,
          targeting <code>net10.0</code>. Every example in this guide builds the
          same fictional <strong>Pizza Ordering API</strong> a little further.
        </p>
        <Cs
          code={`var builder = WebApplication.CreateBuilder(args);

// 1. Register services into the DI container
builder.Services.AddControllers();
builder.Services.AddDbContext<PizzaDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("PizzaDb")));
builder.Services.AddOpenApi(); // native OpenAPI document generation

var app = builder.Build();

// 2. Configure the middleware pipeline (order matters!)
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();`}
        />
        <Xml
          code={`<!-- PizzaApi.csproj -->
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>
</Project>`}
        />
        <p>
          Two phases, always: first you <strong>register</strong> everything the
          app needs, then you <strong>configure</strong> how a request flows
          through it. Every concept in this guide plugs into one of those two
          phases. For a quick throwaway endpoint, remember you don't even need
          the <code>.csproj</code> at all — see file-based apps above.
        </p>
      </Topic>

      <Topic id="routing" no="08" title="Controllers, Routing & Action Results">
        <p>
          A controller groups related endpoints; routing decides which method
          handles which URL.
        </p>
        <Cs
          code={`[ApiController]
[Route("api/[controller]")]
public class PizzasController : ControllerBase
{
    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
        if (id <= 0) return BadRequest("Pizza ID must be positive, even for pineapple ones.");
        var pizza = new { Id = id, Topping = "Pepperoni" };
        return Ok(pizza);
    }

    [HttpGet]
    public IActionResult Search([FromQuery] string? topping, [FromQuery] int page = 1)
        => Ok(new { topping, page });

    [HttpPost]
    public IActionResult Create([FromBody] object newPizza)
        => CreatedAtAction(nameof(GetById), new { id = 42 }, newPizza);
}`}
        />
        <ul>
          <li>
            <code>[ApiController]</code> turns on automatic 400 responses for
            invalid models, binding source inference, and problem-details error
            formatting.
          </li>
          <li>
            <code>[Route("api/[controller]")]</code> uses the{' '}
            <code>[controller]</code> token, so <code>PizzasController</code>{' '}
            automatically maps to <code>/api/pizzas</code>.
          </li>
          <li>
            Route constraints like <code>{'{id:int}'}</code> reject non-numeric
            IDs before your code even runs.
          </li>
        </ul>
        <Callout>
          A <code>/api/dad-jokes/random</code> endpoint that returns{' '}
          <code>200 OK</code> with a joke nine times out of ten, and{' '}
          <code>204 No Content</code> the tenth time because it's "out of
          material" is a good way to internalize that an endpoint can
          legitimately return nothing.
        </Callout>
      </Topic>

      <Topic id="binding" no="09" title="Model Binding">
        <p>
          Model binding is the invisible machinery that turns an HTTP request
          into a C# object on your method signature.
        </p>
        <Cs
          code={`public record CreateOrderDto(
    string CustomerName,
    [FromRoute] int StoreId,
    int Quantity);

[HttpPost("{storeId}/orders")]
public IActionResult PlaceOrder([FromBody] CreateOrderDto order, [FromHeader(Name = "X-Client-Id")] string clientId)
{
    return Accepted();
}`}
        />
        <ul>
          <li>
            <strong>Route values</strong> — e.g. <code>{'{id}'}</code> in the
            URL template
          </li>
          <li>
            <strong>Query string</strong> — simple types on GET requests
          </li>
          <li>
            <strong>Request body</strong> — complex types, inferred as JSON via{' '}
            <code>[FromBody]</code>
          </li>
          <li>
            <strong>Headers, form data, services</strong> — opt-in with{' '}
            <code>[FromHeader]</code>, <code>[FromForm]</code>,{' '}
            <code>[FromServices]</code>
          </li>
        </ul>
        <Callout variant="warn">
          Only one <code>[FromBody]</code> parameter is allowed per action — the
          request body stream can only be read once. Wrap multiple pieces of
          data in one DTO.
        </Callout>
      </Topic>

      <Topic
        id="validation"
        no="10"
        title="Validation: DataAnnotations & FluentValidation"
      >
        <p>Reject bad input before it touches your business logic.</p>
        <h4>Built in: DataAnnotations</h4>
        <Cs
          code={`public record CreateOrderDto(
    [Required, MaxLength(80)] string CustomerName,
    [Range(1, 20)] int Quantity,
    [Range(1, 5)] int SpiceLevel);`}
        />
        <p>
          With <code>[ApiController]</code> applied, an invalid model never
          reaches your action method — a <code>400 Bad Request</code> with a
          problem-details body is returned automatically.
        </p>
        <Callout>
          <strong>FluentValidation</strong> is the go-to library once validation
          rules get conditional, cross-field, or reused across DTOs — far more
          expressive than attributes.
        </Callout>
        <Cs
          code={`public class CreateOrderValidator : AbstractValidator<CreateOrderDto>
{
    public CreateOrderValidator()
    {
        RuleFor(x => x.Quantity)
            .GreaterThan(0).WithMessage("You can't order zero pizzas. That's just sad.");

        RuleFor(x => x.SpiceLevel)
            .InclusiveBetween(1, 5)
            .When(x => x.CustomerName != "Gordon Ramsay");
    }
}

builder.Services.AddValidatorsFromAssemblyContaining<CreateOrderValidator>();
builder.Services.AddFluentValidationAutoValidation();`}
        />
      </Topic>

      <Topic
        id="di"
        no="11"
        title="Dependency Injection, Service Lifetimes & Keyed Services"
      >
        <p>
          The built-in DI container is how every class gets its dependencies
          handed to it instead of constructing them itself.
        </p>
        <Cs
          code={`builder.Services.AddScoped<IPizzaOven, PizzaOven>();      // one instance per HTTP request
builder.Services.AddSingleton<IOrderCounter, OrderCounter>(); // one instance for the app's whole lifetime
builder.Services.AddTransient<INapkinDispenser, NapkinDispenser>(); // new instance every time it's injected

public class PizzasController(IPizzaOven oven) : ControllerBase
{
    // primary constructor -- no manual field assignment needed
}`}
        />
        <RefTable
          headers={['Lifetime', 'Created', 'Good for']}
          rows={[
            [
              'Singleton',
              'Once, ever',
              'Caches, config objects, stateless clients',
            ],
            [
              'Scoped',
              'Once per request',
              <>
                <code>DbContext</code>, per-request state
              </>,
            ],
            ['Transient', 'Every injection', 'Lightweight, stateless helpers'],
          ]}
        />
        <Callout variant="warn">
          Injecting a <code>Scoped</code> service (like <code>DbContext</code>)
          into a <code>Singleton</code> throws at runtime. If you must, inject{' '}
          <code>IServiceScopeFactory</code> and create a scope manually.
        </Callout>
        <h4>Keyed services</h4>
        <p>
          Register multiple implementations of the same interface, distinguished
          by a key, and resolve the right one at the injection site — no more
          juggling a factory class just to pick between two flavors of the same
          dependency:
        </p>
        <Cs
          code={`builder.Services.AddKeyedSingleton<IPaymentGateway, StripeGateway>("stripe");
builder.Services.AddKeyedSingleton<IPaymentGateway, PayPalGateway>("paypal");

public class CheckoutController([FromKeyedServices("stripe")] IPaymentGateway gateway) : ControllerBase
{
    // resolves StripeGateway specifically
}`}
        />
      </Topic>

      <Topic id="config" no="12" title="Configuration & the Options Pattern">
        <p>
          Strongly-typed settings beat scattering{' '}
          <code>Configuration["Some:Key"]</code> string lookups everywhere.
        </p>
        <Json
          code={`{
  "PizzaSettings": { "MaxToppings": 10, "AllowPineapple": false }
}`}
        />
        <Cs
          code={`public class PizzaSettings
{
    public int MaxToppings { get; set; }
    public bool AllowPineapple { get; set; }
}

builder.Services.Configure<PizzaSettings>(builder.Configuration.GetSection("PizzaSettings"));

public class PizzaOven(IOptions<PizzaSettings> options)
{
    private readonly PizzaSettings _settings = options.Value;
}`}
        />
        <ul>
          <li>
            <code>{'IOptions<T>'}</code> — read once, cached for the app's
            lifetime
          </li>
          <li>
            <code>{'IOptionsSnapshot<T>'}</code> — re-read per request, useful
            in dev
          </li>
          <li>
            <code>{'IOptionsMonitor<T>'}</code> — live-reloads when config
            changes — ideal for feature flags without a redeploy
          </li>
        </ul>
      </Topic>

      <Topic id="middleware" no="13" title="The Middleware Pipeline">
        <p>
          Middleware is a chain of "onion layers" that every request passes
          through on the way in, and every response passes through on the way
          out.
        </p>
        <Cs
          code={`app.Use(async (context, next) =>
{
    Console.WriteLine($"Incoming: {context.Request.Path}");
    await next();
    Console.WriteLine($"Outgoing: {context.Response.StatusCode}");
});

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();`}
        />
        <p>
          Order is not cosmetic. <code>UseAuthentication</code> must run before{' '}
          <code>UseAuthorization</code>, and exception handling should sit near
          the top so it can catch failures from everything beneath it.
        </p>
      </Topic>

      <ModuleTitle>Data Access</ModuleTitle>

      <Topic id="efcore" no="14" title="Entity Framework Core Basics">
        <p>
          EF Core is Microsoft's ORM — it maps C# classes to database tables and
          turns LINQ into SQL. EF Core 10 targets <code>net10.0</code> and ships
          as an LTS pairing.
        </p>
        <Callout>
          <strong>Microsoft.EntityFrameworkCore.SqlServer</strong> — swap for{' '}
          <code>.Npgsql</code> (Postgres), <code>.Sqlite</code>, or{' '}
          <code>.InMemory</code> (tests) depending on your database.
        </Callout>
        <Cs
          code={`public class Pizza
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
}

public class PizzaDbContext(DbContextOptions<PizzaDbContext> options) : DbContext(options)
{
    public DbSet<Pizza> Pizzas => Set<Pizza>();
}

builder.Services.AddDbContext<PizzaDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("PizzaDb")));`}
        />
        <Cs
          code={`[HttpGet]
public async Task<ActionResult<List<Pizza>>> GetAll()
    => await _db.Pizzas.AsNoTracking().ToListAsync();`}
        />
        <Deepdive>
          Call <code>.AsNoTracking()</code> on any query you're only reading. EF
          Core 10 also does its expression-tree analysis in a single pass, so
          query translation itself is measurably cheaper.
        </Deepdive>
      </Topic>

      <Topic
        id="efcore10"
        no="15"
        title="JSON Columns, Named Filters & LeftJoin"
      >
        <p>
          A handful of EF Core additions solve problems developers have hit for
          years.
        </p>
        <h4>Complex properties mapped to a JSON column</h4>
        <Cs
          code={`modelBuilder.Entity<Pizza>(entity =>
{
    entity.ComplexProperty(p => p.NutritionInfo, c => c.ToJson());
});

// Queryable straight through the JSON column:
var highProtein = await db.Pizzas
    .Where(p => p.NutritionInfo.ProteinGrams > 20)
    .ToListAsync();`}
        />
        <h4>
          Named query filters — multiple filters per entity, toggled
          independently
        </h4>
        <Cs
          code={`modelBuilder.Entity<Pizza>()
    .HasQueryFilter("ActiveOnly", p => !p.IsDiscontinued)
    .HasQueryFilter("RegionFilter", p => p.Region == currentRegion);

// keep the active-only filter, but ignore the region filter for this one query:
var allRegions = db.Pizzas.IgnoreQueryFilters(["RegionFilter"]);`}
        />
        <p>
          A single entity can carry a "soft delete" filter and a "multi-tenant
          region" filter as two independent, named conditions, rather than
          merging both into one expression and losing the ability to toggle just
          one of them off.
        </p>
        <h4>Explicit LEFT/RIGHT JOIN & simpler bulk updates</h4>
        <Cs
          code={`var query = db.Orders
    .LeftJoin(db.Pizzas, o => o.PizzaId, p => p.Id, (o, p) => new { o.Id, p!.Name });

// ExecuteUpdateAsync accepts a plain (non-expression) lambda body,
// so ordinary C# logic can run inside the update:
await db.Pizzas
    .Where(p => p.Category == "Seasonal")
    .ExecuteUpdateAsync(setters => setters.SetProperty(p => p.Price, p => ComputeDiscount(p.Price)));`}
        />
        <Callout>
          EF Core 10 also redacts inline SQL parameter values from logs by
          default, and adds SQL Server <strong>vector search</strong> support (
          <code>EF.Functions.VectorDistance</code>) for embeddings-based
          similarity queries — handy if your API layers in AI-driven
          recommendations.
        </Callout>
      </Topic>

      <Topic id="efrelations" no="16" title="Relationships & Migrations">
        <p>
          Real schemas have foreign keys, and real schemas change over time —
          migrations version both.
        </p>
        <Cs
          code={`public class Order
{
    public int Id { get; set; }
    public int PizzaId { get; set; }
    public Pizza Pizza { get; set; } = null!;
    public List<Topping> ExtraToppings { get; set; } = [];
}

protected override void OnModelCreating(ModelBuilder builder)
{
    builder.Entity<Pizza>().HasIndex(p => p.Name).IsUnique();
    builder.Entity<Order>()
        .HasOne(o => o.Pizza)
        .WithMany()
        .HasForeignKey(o => o.PizzaId);
}`}
        />
        <Bash
          code={`dotnet ef migrations add InitialCreate
dotnet ef database update`}
        />
        <p>
          Eager-load related data explicitly with <code>.Include()</code> to
          avoid the classic "N+1 query" problem:
        </p>
        <Cs
          code={`var orders = await db.Orders.Include(o => o.Pizza).ToListAsync();`}
        />
        <Callout variant="warn">
          Each migration runs inside its own transaction rather than one global
          transaction spanning your entire migration history — review any
          pipeline that assumes an all-or-nothing rollback across multiple
          migrations.
        </Callout>
      </Topic>

      <Topic id="dapper" no="17" title="Dapper: the Lightweight Alternative">
        <p>
          Sometimes a full ORM is more overhead than you need. Dapper maps raw
          SQL results to objects, fast, with none of EF's tracking machinery.
        </p>
        <Callout>
          <strong>Dapper</strong> is common in high-throughput services,
          reporting endpoints, or legacy databases with hand-tuned stored
          procedures.
        </Callout>
        <Cs
          code={`using var connection = new SqlConnection(connectionString);
var pizzas = await connection.QueryAsync<Pizza>(
    "SELECT Id, Name, Price FROM Pizzas WHERE Price < @MaxPrice",
    new { MaxPrice = 15.00m });`}
        />
        <p>
          Rule of thumb: reach for EF Core when you want migrations, change
          tracking, and LINQ; reach for Dapper when you already know exactly
          which query you want to run and just need it fast.
        </p>
      </Topic>

      <Topic id="repository" no="18" title="Repository & Unit of Work Pattern">
        <p>
          A layer of abstraction between your business logic and EF Core —
          useful in some codebases, redundant in others.
        </p>
        <Cs
          code={`public interface IPizzaRepository
{
    Task<Pizza?> GetByIdAsync(int id);
    Task AddAsync(Pizza pizza);
}

public class PizzaRepository(PizzaDbContext db) : IPizzaRepository
{
    public Task<Pizza?> GetByIdAsync(int id) => db.Pizzas.FindAsync(id).AsTask();
    public Task AddAsync(Pizza pizza) { db.Pizzas.Add(pizza); return db.SaveChangesAsync(); }
}`}
        />
        <Callout variant="warn">
          <code>DbContext</code> already implements the repository and
          unit-of-work patterns internally. A custom repository is worth it
          mainly for swapping data sources or mocking in tests — not a mandatory
          layer for every project.
        </Callout>
      </Topic>

      <ModuleTitle>API Contracts</ModuleTitle>

      <Topic id="dtos" no="19" title="DTOs & Object Mapping">
        <p>
          Never return your EF entities directly from an API — a Data Transfer
          Object controls exactly what the outside world sees.
        </p>
        <Cs
          code={`public record PizzaDto(int Id, string Name, decimal Price);`}
        />
        <Callout>
          <strong>Mapster</strong> is a fast, low-ceremony mapper many projects
          prefer: <code>var dto = pizza.Adapt&lt;PizzaDto&gt;();</code> with no
          profile class needed for simple cases.
        </Callout>
        <Callout>
          <strong>AutoMapper</strong> is still widely used, with explicit
          mapping profiles when transformations get more involved.
        </Callout>
        <Cs
          code={`public class MappingProfile : Profile
{
    public MappingProfile() => CreateMap<Pizza, PizzaDto>();
}
// builder.Services.AddAutoMapper(typeof(MappingProfile));
var dto = _mapper.Map<PizzaDto>(pizzaEntity);`}
        />
      </Topic>

      <Topic id="openapi" no="20" title="API Documentation: OpenAPI & Scalar">
        <p>
          ASP.NET Core generates an OpenAPI document natively — no third-party
          package required for the document itself.
        </p>
        <Callout>
          <strong>Microsoft.AspNetCore.OpenApi</strong> generates an OpenAPI 3.1
          document straight from your controllers or minimal endpoints.
        </Callout>
        <Cs
          code={`builder.Services.AddOpenApi();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); // serves the raw OpenAPI JSON at /openapi/v1.json
}`}
        />
        <p>
          The native package produces the <em>document</em>, but ships no
          browsable UI on its own. For an interactive explorer:
        </p>
        <Callout>
          <strong>Scalar.AspNetCore</strong> is a modern, interactive API
          explorer that reads the native OpenAPI document.
        </Callout>
        <Cs
          code={`// dotnet add package Scalar.AspNetCore
using Scalar.AspNetCore;

app.MapOpenApi();
app.MapScalarApiReference(); // browse at /scalar/v1`}
        />
        <p>
          If you'd rather have the classic Swagger UI,{' '}
          <code>Swashbuckle.AspNetCore.SwaggerUI</code> is still maintained and
          works fine against the same OpenAPI document. Either choice documents
          your API for the frontend team without a hand-maintained Postman
          collection.
        </p>
      </Topic>

      <Topic id="versioning" no="21" title="API Versioning">
        <p>
          Once real consumers depend on your contract, you can't just change it
          — you version it.
        </p>
        <Callout>
          <strong>Asp.Versioning.Mvc</strong> is the community-maintained
          successor to Microsoft's original versioning package.
        </Callout>
        <Cs
          code={`builder.Services.AddApiVersioning(opt =>
{
    opt.DefaultApiVersion = new ApiVersion(1, 0);
    opt.AssumeDefaultVersionWhenUnspecified = true;
    opt.ReportApiVersions = true;
});

[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class PizzasV2Controller : ControllerBase { }`}
        />
        <p>
          If a frontend team consumes your API as a stable contract, this is
          what lets you ship breaking changes as <code>/v2/</code> while{' '}
          <code>/v1/</code> keeps working untouched.
        </p>
      </Topic>

      <Topic
        id="minimalapi"
        no="22"
        title="Minimal APIs, TypedResults & Controllers"
      >
        <p>
          You can skip the controller class entirely for small endpoints;{' '}
          <code>TypedResults</code> makes the return type explicit for OpenAPI
          and testing.
        </p>
        <Cs
          code={`app.MapGet("/api/pizzas/{id}", async Task<Results<Ok<Pizza>, NotFound>> (int id, PizzaDbContext db) =>
    await db.Pizzas.FindAsync(id) is { } pizza
        ? TypedResults.Ok(pizza)
        : TypedResults.NotFound());

app.MapPost("/api/pizzas", async Task<Created<Pizza>> (Pizza pizza, PizzaDbContext db) =>
{
    db.Pizzas.Add(pizza);
    await db.SaveChangesAsync();
    return TypedResults.Created($"/api/pizzas/{pizza.Id}", pizza);
});`}
        />
        <p>
          <code>TypedResults</code> (over the plainer{' '}
          <code>Results.Ok(...)</code>) gives the compiler — and the OpenAPI
          generator — a concrete return type to describe, and makes unit-testing
          the handler's return value straightforward without inspecting an{' '}
          <code>IResult</code> at runtime.
        </p>
        <RefTable
          headers={['Choose Controllers when…', 'Choose Minimal APIs when…']}
          rows={[
            [
              'You need filters, model binding conventions, or a large, convention-heavy surface',
              "You're building a small service, a microservice, or want the lowest possible startup overhead — especially paired with Native AOT",
            ],
          ]}
        />
      </Topic>

      <ModuleTitle>Security</ModuleTitle>

      <Topic id="jwt" no="23" title="Authentication with JWT Bearer Tokens">
        <p>
          Authentication answers "who are you?" — JWTs are the most common way a
          stateless API answers that.
        </p>
        <Callout>
          <strong>Microsoft.AspNetCore.Authentication.JwtBearer</strong>{' '}
          validates a signed token on every request without the server needing
          to keep session state.
        </Callout>
        <Cs
          code={`builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = "pizza-api",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKey))
        };
    });`}
        />
        <Callout>
          On Windows / IIS, internal enterprise apps often use{' '}
          <strong>Windows Authentication</strong> (<code>Negotiate</code>{' '}
          scheme) instead of JWTs. Same <code>AddAuthentication</code> pipeline,
          different scheme.
        </Callout>
      </Topic>

      <Topic id="authz" no="24" title="Authorization: Roles, Policies & Claims">
        <p>
          Authorization answers "are you allowed to do this?" — always checked
          after authentication.
        </p>
        <Cs
          code={`builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("PizzaMaster", policy => policy.RequireRole("Chef"));
    options.AddPolicy("CanRefund", policy =>
        policy.RequireClaim("permission", "orders.refund"));
});`}
        />
        <Cs
          code={`[Authorize(Policy = "PizzaMaster")]
[HttpDelete("{id}")]
public IActionResult DeletePizza(int id) => NoContent();`}
        />
        <p>
          Custom, reusable rules go in an <code>IAuthorizationHandler</code> for
          a requirement-based policy — more testable than scattering{' '}
          <code>if</code> statements through controllers.
        </p>
      </Topic>

      <Topic id="cors" no="25" title="CORS">
        <p>
          Browsers block a frontend app on one origin from calling an API on
          another — unless the API explicitly allows it.
        </p>
        <Cs
          code={`builder.Services.AddCors(options =>
    options.AddPolicy("AllowFrontend", policy =>
        policy.WithOrigins("https://myapp.com")
              .AllowAnyMethod()
              .AllowAnyHeader()));

app.UseCors("AllowFrontend"); // must sit before UseAuthorization`}
        />
        <p>
          This is almost certainly the first error you'll ever see in a browser
          console on a new project: <code>blocked by CORS policy</code>. It's a
          browser-side protection — tools like Postman ignore it, which is why
          "it works in Postman but not the browser" is a classic CORS symptom.
        </p>
      </Topic>

      <Topic id="secrets" no="26" title="Secrets, Data Protection & Passkeys">
        <p>
          Connection strings and API keys should never live in source control.
        </p>
        <Bash
          code={`dotnet user-secrets init
dotnet user-secrets set "PizzaDb:ConnectionString" "Server=.;Database=Pizza;..."`}
        />
        <Callout>
          <strong>
            Azure Key Vault (Azure.Extensions.AspNetCore.Configuration.Secrets)
          </strong>{' '}
          — in production, secrets are pulled from a managed vault at startup
          and rotated without a redeploy.
        </Callout>
        <p>
          ASP.NET Core's <strong>Data Protection API</strong> automatically
          encrypts things like authentication cookies. In a multi-server
          deployment, configure a shared key ring (e.g., Redis) so one server
          can decrypt what another encrypted.
        </p>
        <p>
          ASP.NET Core Identity also supports <strong>passkeys</strong>{' '}
          (WebAuthn/FIDO2), letting users authenticate with a device passkey
          instead of, or alongside, a password, without a third-party library.
        </p>
      </Topic>

      <ModuleTitle>Production Readiness</ModuleTitle>

      <Topic id="logging" no="27" title="Structured Logging with Serilog">
        <p>
          <code>Console.WriteLine</code> doesn't scale. Structured logs are
          queryable events, not just strings.
        </p>
        <Callout>
          <strong>Serilog</strong>, paired with sinks:{' '}
          <code>Serilog.Sinks.Console</code>, <code>.File</code>, or{' '}
          <code>.Seq</code> for a searchable log server.
        </Callout>
        <Cs
          code={`builder.Host.UseSerilog((ctx, config) =>
    config.WriteTo.Console()
          .WriteTo.File("logs/pizza-.log", rollingInterval: RollingInterval.Day)
          .Enrich.FromLogContext());

_logger.LogInformation("Order {OrderId} placed by {Customer} for {Amount:C}", order.Id, order.Customer, order.Total);`}
        />
        <p>
          The named placeholders become structured, queryable fields instead of
          raw text you'd have to grep.
        </p>
      </Topic>

      <Topic id="filters" no="28" title="Filters, Exceptions & ProblemDetails">
        <p>
          Filters run cross-cutting logic around actions. For centralizing error
          handling, ASP.NET Core represents every unhandled error in the{' '}
          <strong>ProblemDetails</strong> format (RFC 7807).
        </p>
        <Cs
          code={`public class LogTimeFilter : IActionFilter
{
    private Stopwatch _sw = new();
    public void OnActionExecuting(ActionExecutingContext context) => _sw = Stopwatch.StartNew();
    public void OnActionExecuted(ActionExecutedContext context)
        => Console.WriteLine($"{context.ActionDescriptor.DisplayName} took {_sw.ElapsedMilliseconds}ms");
}`}
        />
        <Cs
          code={`builder.Services.AddProblemDetails(); // RFC 7807 error bodies app-wide

public class GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger) : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext ctx, Exception ex, CancellationToken ct)
    {
        logger.LogError(ex, "Unhandled exception");
        await Results.Problem(title: "Something burned in the kitchen.", statusCode: 500)
                     .ExecuteAsync(ctx);
        return true;
    }
}
// builder.Services.AddExceptionHandler<GlobalExceptionHandler>();`}
        />
        <p>
          A <code>ProblemDetails</code> response gives every consumer of your
          API a predictable JSON shape for errors — <code>title</code>,{' '}
          <code>status</code>, <code>detail</code>, <code>traceId</code> —
          instead of a different ad-hoc error format per endpoint.
        </p>
      </Topic>

      <Topic id="caching" no="29" title="Caching with HybridCache">
        <p>
          Don't ask the database the same question twice in five seconds.{' '}
          <strong>HybridCache</strong> unifies the old split between{' '}
          <code>IMemoryCache</code> and <code>IDistributedCache</code> into one
          API.
        </p>
        <Callout>
          <strong>Microsoft.Extensions.Caching.Hybrid</strong> is a two-tier
          cache (fast in-process L1 + shared L2 like Redis) behind a single
          call, with built-in <strong>cache-stampede protection</strong> —
          concurrent requests for the same missing key are coalesced into one
          fetch instead of hammering the database N times.
        </Callout>
        <Cs
          code={`builder.Services.AddHybridCache();
// optionally also register a distributed L2 backend:
builder.Services.AddStackExchangeRedisCache(opt =>
    opt.Configuration = builder.Configuration.GetConnectionString("Redis"));

public class PizzaService(HybridCache cache, PizzaDbContext db)
{
    public async Task<List<Pizza>> GetAllAsync(CancellationToken ct) =>
        await cache.GetOrCreateAsync(
            "all-pizzas",
            async token => await db.Pizzas.AsNoTracking().ToListAsync(token),
            cancellationToken: ct);
}`}
        />
        <p>
          Under the hood it still uses <code>IMemoryCache</code> for L1 and, if
          registered, any <code>IDistributedCache</code> implementation for L2 —
          so an existing Redis setup plugs straight in.
        </p>
        <h4>Output caching (built into ASP.NET Core)</h4>
        <Cs
          code={`builder.Services.AddOutputCache();
app.UseOutputCache();
app.MapGet("/api/pizzas", GetPizzas).CacheOutput(p => p.Expire(TimeSpan.FromSeconds(30)));`}
        />
        <p>
          Use output caching for whole-response caching at the edge of the
          pipeline; use <code>HybridCache</code> for caching a specific piece of
          data inside your business logic.
        </p>
      </Topic>

      <Topic id="ratelimit" no="30" title="Rate Limiting">
        <p>Built into ASP.NET Core — no extra library required.</p>
        <Cs
          code={`builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("fixed", opt =>
    {
        opt.PermitLimit = 10;
        opt.Window = TimeSpan.FromSeconds(30);
    });
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
});

app.UseRateLimiter();
app.MapGet("/api/pizzas", GetPizzas).RequireRateLimiting("fixed");`}
        />
        <p>
          Other strategies available out of the box: <code>SlidingWindow</code>,{' '}
          <code>TokenBucket</code>, and <code>Concurrency</code> limiters.
        </p>
      </Topic>

      <Topic id="health" no="31" title="Health Checks">
        <p>
          A dedicated endpoint that says "is this instance okay?" — load
          balancers and orchestrators poll it to decide whether to send traffic.
        </p>
        <Cs
          code={`builder.Services.AddHealthChecks()
    .AddSqlServer(connectionString)
    .AddCheck("oven-check", () => HealthCheckResult.Healthy("Oven is hot"));

app.MapHealthChecks("/health");`}
        />
        <p>
          On an IIS deployment with Application Request Routing in front of
          multiple servers, this is exactly what determines whether a given VM
          keeps receiving requests during a rolling deployment.
        </p>
      </Topic>

      <Topic id="resilience" no="32" title="Resilience with Polly">
        <p>
          When your API calls another API, that call <em>will</em> fail
          sometimes. Resilience decides what happens next.
        </p>
        <Callout>
          <strong>Microsoft.Extensions.Http.Resilience (built on Polly)</strong>{' '}
          wraps <code>HttpClient</code> calls with retries, timeouts, and
          circuit breakers declaratively.
        </Callout>
        <Cs
          code={`builder.Services.AddHttpClient<PizzaSupplierClient>()
    .AddResilienceHandler("supplier-pipeline", pipeline =>
    {
        pipeline.AddRetry(new HttpRetryStrategyOptions { MaxRetryAttempts = 3 });
        pipeline.AddCircuitBreaker(new HttpCircuitBreakerStrategyOptions());
        pipeline.AddTimeout(TimeSpan.FromSeconds(5));
    });`}
        />
        <p>
          The retry handles a transient blip; the circuit breaker stops
          hammering a supplier that's genuinely down; the timeout stops one slow
          dependency from stalling your whole request.
        </p>
      </Topic>

      <Topic
        id="hostedservices"
        no="33"
        title="Background Work & Hosted Services"
      >
        <p>Not everything happens in response to an HTTP request.</p>
        <Cs
          code={`public class PizzaReminderService(ILogger<PizzaReminderService> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            logger.LogInformation("Reminder: check the oven!");
            await Task.Delay(TimeSpan.FromMinutes(10), stoppingToken);
        }
    }
}
// builder.Services.AddHostedService<PizzaReminderService>();`}
        />
        <Callout>
          <strong>Hangfire / Quartz.NET</strong> replace hand-rolled{' '}
          <code>BackgroundService</code> loops for anything beyond a simple loop
          — cron-style scheduling, retries, a dashboard of job history.
        </Callout>
      </Topic>

      <ModuleTitle>Runtime & Observability</ModuleTitle>

      <Topic id="nativeaot" no="34" title="Native AOT & Trimming">
        <p>
          Native AOT compiles your API straight to a self-contained native
          executable — no JIT, no .NET runtime installation required on the
          target machine.
        </p>
        <Xml
          code={`<PropertyGroup>
  <PublishAot>true</PublishAot>
</PropertyGroup>`}
        />
        <Bash code={`dotnet publish -c Release -r linux-x64`} />
        <p>
          The payoff: near-instant cold starts and a much smaller memory
          footprint — exactly what matters for containerized microservices that
          scale to zero, or serverless functions. The tradeoff: no runtime
          reflection, so libraries relying on it (some serializers, some mapping
          profiles) need AOT-compatible alternatives, and minimal APIs generally
          fit this model far better than full MVC controllers.
        </p>
        <Callout variant="warn">
          Not every API needs this. It shines for high-density, high-scale
          microservices where startup time and memory directly translate to
          cost. A typical internal enterprise API usually gets little practical
          benefit from the added AOT constraints.
        </Callout>
      </Topic>

      <Topic
        id="observability"
        no="35"
        title="Observability with OpenTelemetry"
      >
        <p>
          .NET has built-in tracing and metrics APIs (
          <code>System.Diagnostics.Activity</code>, <code>Meter</code>);
          OpenTelemetry is the vendor-neutral standard for exporting them.
        </p>
        <Callout>
          <strong>OpenTelemetry.Extensions.Hosting</strong> wires ASP.NET Core,
          HttpClient, and EF Core instrumentation together and exports to any
          backend — Azure Monitor, Grafana, Jaeger, Honeycomb — without changing
          app code when you switch vendors.
        </Callout>
        <Cs
          code={`builder.Services.AddOpenTelemetry()
    .WithTracing(tracing => tracing
        .AddAspNetCoreInstrumentation()
        .AddHttpClientInstrumentation()
        .AddEntityFrameworkCoreInstrumentation()
        .AddOtlpExporter())
    .WithMetrics(metrics => metrics
        .AddAspNetCoreInstrumentation()
        .AddRuntimeInstrumentation());`}
        />
        <p>
          Once wired up, a single request into your Pizza API is traced end to
          end — the HTTP call in, the EF Core query, any outbound call to a
          supplier's API — as one connected timeline, instead of stitching
          together separate logs by hand.
        </p>
      </Topic>

      <Topic id="timeprovider" no="36" title="TimeProvider for Testable Time">
        <p>
          Code that calls <code>DateTime.UtcNow</code> directly is notoriously
          hard to unit test. <code>TimeProvider</code> is the built-in
          abstraction that fixes this.
        </p>
        <Cs
          code={`public class OrderService(TimeProvider timeProvider)
{
    public Order PlaceOrder(string customer) => new()
    {
        Customer = customer,
        PlacedAt = timeProvider.GetUtcNow()
    };
}

// Production: builder.Services.AddSingleton(TimeProvider.System);

// In a test:
var fakeTime = new FakeTimeProvider(DateTimeOffset.Parse("2026-01-01"));
var service = new OrderService(fakeTime);
var order = service.PlaceOrder("Gordon Ramsay");
Assert.Equal(DateTimeOffset.Parse("2026-01-01"), order.PlacedAt);`}
        />
        <p>
          No wrapping <code>DateTime.UtcNow</code> in your own custom interface
          just to make a class testable — it's part of the base class library,
          and output caching and rate limiting already use it internally.
        </p>
      </Topic>

      <ModuleTitle>Architecture at Scale</ModuleTitle>

      <Topic id="mediatr" no="37" title="CQRS with MediatR">
        <p>
          As controllers grow, CQRS separates "read" and "write" operations into
          their own small, testable handler classes.
        </p>
        <Callout>
          <strong>MediatR</strong> dispatches a request object to exactly one
          handler — the controller no longer needs to know how the work gets
          done.
        </Callout>
        <Cs
          code={`public record GetPizzaQuery(int Id) : IRequest<PizzaDto>;

public class GetPizzaHandler(PizzaDbContext db) : IRequestHandler<GetPizzaQuery, PizzaDto>
{
    public async Task<PizzaDto> Handle(GetPizzaQuery request, CancellationToken ct)
        => await db.Pizzas
            .Where(p => p.Id == request.Id)
            .Select(p => new PizzaDto(p.Id, p.Name, p.Price))
            .FirstAsync(ct);
}

[HttpGet("{id}")]
public async Task<PizzaDto> Get(int id) => await _mediator.Send(new GetPizzaQuery(id));`}
        />
        <p>
          Worth adopting once a controller's actions start accumulating business
          logic that's hard to unit test in isolation from HTTP concerns.
        </p>
      </Topic>

      <Topic id="cleanarch" no="38" title="Clean / Onion Architecture">
        <p>
          A way of arranging entire projects so business rules don't depend on
          frameworks, databases, or UI.
        </p>
        <Bash
          code={`PizzaApi.Domain          <- entities, no dependencies on anything
PizzaApi.Application      <- use cases (MediatR handlers), depends only on Domain
PizzaApi.Infrastructure   <- EF Core, external APIs - implements Application's interfaces
PizzaApi.Api              <- controllers, DI wiring - the "outermost" layer`}
        />
        <p>
          The dependency rule: outer layers can reference inner layers, never
          the reverse. This is what lets you swap SQL Server for Postgres, or
          REST for gRPC, without touching business logic.
        </p>
        <Callout variant="warn">
          This pays off on large, long-lived systems with real business
          complexity. For a small CRUD API, a well-organized single project with
          clear folders is not a failure to adopt Clean Architecture — it's the
          right call for the problem's size.
        </Callout>
      </Topic>

      <Topic id="signalr" no="39" title="Real-Time Updates with SignalR">
        <p>
          REST is request/response. When the server needs to push data to
          clients the moment something happens, SignalR is the built-in answer.
        </p>
        <Cs
          code={`public class OrderHub : Hub
{
    public async Task JoinKitchen() => await Groups.AddToGroupAsync(Context.ConnectionId, "kitchen");
}

await _hubContext.Clients.Group("kitchen").SendAsync("NewOrder", orderDto);`}
        />
        <p>
          Perfect for a live "orders coming into the kitchen" screen updating in
          real time, without the frontend polling every few seconds.
        </p>
      </Topic>

      <Topic id="grpc" no="40" title="gRPC vs. REST">
        <p>
          REST isn't the only protocol .NET speaks — gRPC is worth knowing when
          you control both ends of a call.
        </p>
        <RefTable
          headers={['REST + JSON', 'gRPC + Protobuf']}
          rows={[
            [
              'Human-readable, browser-friendly, easy to debug, the default for public/partner APIs',
              'Binary, strongly typed contracts, much faster — ideal for service-to-service calls inside your own infrastructure',
            ],
          ]}
        />
        <p>
          A common real pattern: expose REST to the outside world, use gRPC
          between your own internal microservices.
        </p>
      </Topic>

      <ModuleTitle>Testing</ModuleTitle>

      <Topic id="unittest" no="41" title="Unit Testing with xUnit v3 & Moq">
        <p>Test business logic in isolation, with dependencies faked out.</p>
        <RefTable
          headers={['xUnit v2', 'xUnit v3']}
          rows={[
            [<code>xunit</code>, <code>xunit.v3</code>],
            [
              'Test project is a library',
              <>
                Test project is an executable (
                <code>{'<OutputType>Exe</OutputType>'}</code>) that runs itself
                directly
              </>,
            ],
            [
              'Runs via VSTest',
              'Runs natively via Microsoft.Testing.Platform, with VSTest still supported',
            ],
            [
              <code>IAsyncLifetime.InitializeAsync()</code>,
              <>
                Returns <code>ValueTask</code> instead of <code>Task</code>
              </>,
            ],
          ]}
        />
        <Cs
          code={`public class PizzaServiceTests
{
    [Fact]
    public async Task GetPizza_ReturnsNotFound_WhenMissing()
    {
        var mockRepo = new Mock<IPizzaRepository>();
        mockRepo.Setup(r => r.GetByIdAsync(99)).ReturnsAsync((Pizza?)null);

        var service = new PizzaService(mockRepo.Object);
        var result = await service.GetByIdAsync(99);

        Assert.Null(result);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(-1)]
    public void Order_RejectsNonPositiveQuantity(int qty)
        => Assert.Throws<ArgumentException>(() => new OrderQuantity(qty));
}`}
        />
        <p>
          Migrating an existing suite is mostly mechanical — swap the package
          reference, flip <code>OutputType</code> to <code>Exe</code> — and the
          official migration guide covers the small number of behavioral edge
          cases.
        </p>
      </Topic>

      <Topic
        id="integrationtest"
        no="42"
        title="Integration Testing with WebApplicationFactory"
      >
        <p>
          Spin up your entire API in memory and hit it with real HTTP requests.
        </p>
        <Cs
          code={`public class PizzaApiTests(WebApplicationFactory<Program> factory) : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task GetPizza_ReturnsOk()
    {
        var response = await _client.GetAsync("/api/pizzas/1");
        response.EnsureSuccessStatusCode();
    }
}`}
        />
        <p>
          Swap the real database for an in-memory or test-container database by
          overriding service registration inside a custom{' '}
          <code>WebApplicationFactory</code> subclass.
        </p>
      </Topic>

      <Topic id="manualtest" no="43" title="Exploratory & Manual Testing Tools">
        <p>
          Automated tests don't replace poking at an API by hand while building
          it.
        </p>
        <ul>
          <li>
            <strong>Scalar / Swagger UI</strong> — running straight from the
            OpenAPI document, zero extra setup
          </li>
          <li>
            <strong>Postman / Bruno</strong> — saved request collections,
            environment variables for tokens, shareable with a team
          </li>
          <li>
            <strong>.http files</strong> — plain-text requests committed
            alongside your code, runnable directly from VS Code or Visual
            Studio's Endpoints Explorer
          </li>
        </ul>
        <Bash
          code={`### Get a pizza
GET https://localhost:5001/api/pizzas/1
Authorization: Bearer {{token}}`}
        />
      </Topic>

      <ModuleTitle>Deployment</ModuleTitle>

      <Topic id="iis" no="44" title="Kestrel, IIS & Reverse Proxies">
        <p>
          ASP.NET Core always runs on its own built-in web server, Kestrel — IIS
          just sits in front of it.
        </p>
        <p>
          On Windows, you typically deploy with{' '}
          <strong>IIS as a reverse proxy</strong>, using the{' '}
          <strong>ASP.NET Core Module (ANCM)</strong>, which forwards requests
          from IIS to Kestrel running your app as a background process.
        </p>
        <Xml
          code={`<!-- web.config, generated by \`dotnet publish\` -->
<aspNetCore processPath="dotnet" arguments=".\\PizzaApi.dll"
            stdoutLogEnabled="false" hostingModel="InProcess" />`}
        />
        <p>
          <code>hostingModel="InProcess"</code> runs your app inside the IIS
          worker process (faster); <code>OutOfProcess</code> runs Kestrel
          separately with IIS purely proxying.
        </p>
      </Topic>

      <Topic id="docker" no="45" title="Containerizing with Docker">
        <p>
          Package the app, the runtime, and every dependency into one portable
          image.
        </p>
        <Bash
          code={`FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "PizzaApi.dll"]`}
        />
        <p>
          A multi-stage build like this keeps the final image small — the bulky
          SDK stays in the build stage; only the compiled output ships in the
          final image. Pair this with <code>PublishAot</code> and a{' '}
          <code>chiseled</code> base image for the smallest possible container
          if startup time and image size matter for your deployment.
        </p>
      </Topic>
    </>
  )
}
