//https://github.com/Elfocrash/.NET-Backend-Developer-Roadmap
//https://github.com/MoienTajik/AspNetCore-Developer-Roadmap

const roadmap = {
  title: ".net dev roadmap combined",
  children: [
    {
      title: "General Development Skills",
      severity: "must",
      children: [
        {
          title: "git",
          children: [
            {
              title: "github",
            },
            {
              title: "azure devops",
            },
            {
              title: "gitlab",
            },
          ],
        },
        {
          title: "http/https protocol, TCP/IP",
        },
        {
          title: "learn to search for solutions",
        },
        {
          title: "dotnet cli",
        },
        {
          title: "terminals"
        },
        {
          title: "data structures and algo",
          severity: "maybe",
        },
      ],
    },
    {
      title: "C#",
      severity: "must",
      children: [
        {
          title: "basics C# 11",
        },
        {
          title: ".net 7",
        },
      ],
    },
    {
      title: "SOLID",
      severity: "must",
      children: [
        {
          title: "Single Responsibility Principle SPR",
          severity: "must",
        },
        {
          title: "Open-Closed Principle OCP",
          severity: "must",
        },
        {
          title: "Liskov Substitution Principle LSP",
          severity: "must",
        },
        {
          title: "Interface Segregation Principle ISP",
          severity: "must",
        },
        {
          title: "Dependency Inversion Principle DIP",
          severity: "must",
        },
        {
          title: "DRY, KISS, YAGNI",
          severity: "must",
        },
      ],
    },
    {
      title: "ASP.NET Core basics",
      severity: "must",
      children: [
        {
          title: "Web Api",
        },
        {
          title: "REST",
        },
        {
          title: "Routing",
        },
        {
          title: "Middleware",
        },
        {
          title: "Filters & Attributes",
        },
        {
          title: "App settings and configurations",
        },
        {
          title: "Authentication and Authorization",
          children: [
            {
              title: "Identity",
            },
            {
              title: "IdentityServer",
            },
            {
              title: "Auth0/OIDC",
            },
            {
              title: "OWASP top 10",
            },
          ],
        },
        {
          title: "Minimal APIs",
        },
        {
          title: "Razor pages, components",
        },
        {
          title: "MVC",
        },
      ],
    },
    {
      title: "SQL fundamentals",
      severity: "must",
      children: [
        {
          title: "fundamentals about db design and sql syntax",
        },
        {
          title: "constraints",
        },
        {
          title: "stored procedures",
          severity: "good to know`",
        },
        {
          title: "triggers",
          severity: "maybe",
        },
      ],
    },
    {
      title: "ORM",
      severity: "must",
      children: [
        {
          title: "Dapper",
          severity: "must",
        },
        {
          title: "Entity Framework Core",
          severity: "must",
          children: [
            {
              title: "basic of EF core",
            },
            {
              title: "code first + migrations",
            },
            {
              title: "change tracker api",
            },
            {
              title: "lazy loading, eager loading, explicit loading",
            },
            {
              title: "TPT, TPH",
            },
          ],
        },
      ],
    },
    {
      title: "Dependency Injection",
      severity: "must",
      children: [
        {
          title: "DI Containers",
          severity: "must",
          children: [
            {
              title: "Microsoft.Extensions.DependencyInjection",
              severity: "must",
            },
            {
              title: "AutoFac",
              severity: "good to know",
            },
          ],
        },
        {
          title: "Scrutor",
          severity: "good to know",
        },
        {
          title: "Lifecycles",
          severity: "must",
          children: [
            {
              title: "Scoped",
              severity: "must",
            },
            {
              title: "Transient",
              severity: "must",
            },
            {
              title: "Singleton",
              severity: "must",
            },
          ],
        },
      ],
    },
    {
      title: "Cashing",
      severity: "must",
      children: [
        {
          title: "Memory Cache",
          severity: "must",
        },
        {
          title: "Distributed Cache",
          severity: "must",
          children: [
            {
              title: "Redis",
              severity: "must",
              children: [
                {
                  title: "StackExchange.Redis",
                  severity: "must",
                },
              ],
            },
          ],
        },
        {
          title: "Entity Framework 2nd Level Cache",
          severity: "maybe",
        },
      ],
    },
    {
      title: "Databases",
      severity: "must",
      children: [
        {
          title: "Relational",
          severity: "must",
          children: [
            {
              title: "SQLite",
              severity: "must",
            },
            {
              title: "PostgreSQL",
              severity: "good to know",
            },
            {
              title: "MariaDB",
              severity: "good to know",
            },
            {
              title: "SQL Server",
              severity: "good to know",
            },
            {
              title: "MySQL",
              severity: "good to know",
            },
          ],
        },
        {
          title: "Search Engines",
          severity: "good to know",
          children: [
            {
              title: "elastic search",
              severity: "must",
            },
          ],
        },
        {
          title: "NoSQL",
          severity: "must",
          children: [
            {
              title: "Azure CosmosDB",
              severity: "must",
            },
            {
              title: "Amazon DynamoDB",
              severity: "must",
            },
            {
              title: "Redis",
              severity: "must",
            },
            {
              title: "MongoDB",
              severity: "maybe",
            },
          ],
        },
      ],
    },
    {
      title: "Log Frameworks",
      severity: "must",
      children: [
        {
          title: "OpenTelemetry",
          severity: "must",
        },
        {
          title: "Serilog",
          severity: "must",
        },
        {
          title: "Log Management System",
          severity: "must",
          children: [
            {
              title: "ELK Stack",
              severity: "must",
            },
            {
              title: "Datadog",
              severity: "good to know",
            },
            {
              title: "loggly.com",
              severity: "good to know",
            },
            {
              title: "Sentry.io",
              severity: "good to know",
            },
          ],
        },
      ],
    },
    {
      title: "Metrics",
      severity: "must",
      children: [
        {
          title: "OpenTelemetry",
          severity: "must",
        },
        {
          title: "Prometheus",
          severity: "good to know",
        },
        {
          title: "Grafana",
          severity: "good to know",
        },
        {
          title: "ELK Stack",
          severity: "good to know",
        },
      ],
    },
    {
      title: "Distributed Tracing",
      severity: "good to know",
      children: [
        {
          title: "OpenTelemetry",
          severity: "must",
        },
        {
          title: "Datadog",
          severity: "good to know",
        },
        {
          title: "Lightstep",
          severity: "good to know",
        },
        {
          title: "Jeager",
          severity: "good to know",
        },
      ],
    },
    {
      title: "API Clients & Communications",
      severity: "must",
      children: [
        {
          title: "REST",
          severity: "must",
          children: [
            {
              title: "OData",
              severity: "good to know",
            },
          ],
        },
        {
          title: "GraphQL",
          severity: "good to know",
          children: [
            {
              title: "HotChocolate",
              severity: "must",
            },
          ],
        },
        {
          title: "gRPC",
          severity: "maybe",
        },
      ],
    },
    {
      title: "Testing",
      severity: "must",
      children: [
        {
          title: "Unit Testing",
          severity: "must",
          children: [
            {
              title: "Frameworks",
              severity: "must",
              children: [
                {
                  title: "xUnit",
                  severity: "must",
                },
              ],
            },
            {
              title: "Mocking",
              severity: "must",
              children: [
                {
                  title: "NSubstitute",
                  severity: "must",
                },
                {
                  title: "Moq",
                  severity: "good to know",
                },
              ],
            },
            {
              title: "Assertion",
              severity: "must",
              children: [
                {
                  title: "FluentAssertions",
                  severity: "must",
                },
              ],
            },
          ],
        },
        {
          title: "Integration Testing",
          severity: "must",
          children: [
            {
              title: "WebApplicationFactory",
              severity: "must",
            },
            {
              title: "TestServer",
              severity: "good to know",
            },
          ],
        },
        {
          title: "E2E testing",
          severity: "good to know",
          children: [
            {
              title: "Playwright",
              severity: "must",
            },
            {
              title: "Selenium",
              severity: "good to know",
            },
          ],
        },
        {
          title: "Behavior Testing",
          severity: "good to know",
          children: [
            {
              title: "SpecFlow",
              severity: "must",
            },
            {
              title: "BDDfy",
              severity: "maybe",
            },
            {
              title: "LightBDD",
              severity: "maybe",
            },
          ],
        },
        {
          title: "Snapshot Testing",
          severity: "maybe",
          children: [
            {
              title: "Verify",
              severity: "maybe",
            },
          ],
        },
      ],
    },
    {
      title: "Real-Time Communication",
      severity: "good to know",
      children: [
        {
          title: "SignalR Core",
        },
        {
          title: "Web Sockets",
        },
      ],
    },
    {
      title: "API Documentation",
      severity: "good to know",
      children: [
        {
          title: "OpenAPI",
          severity: "must",
        },
        {
          title: "AsyncAPI",
          severity: "good to know",
        },
      ],
    },
    {
      title: "Object Mapping",
      severity: "must",
      children: [
        {
          title: "Mapster",
          severity: "good to know",
        },
        {
          title: "AutoMapper",
          severity: "must",
        },
      ],
    },
    {
      title: "API SDK libraries",
      severity: "good to know",
      children: [
        {
          title: "Refit",
          severity: "must",
        },
        {
          title: "RestSharp",
          severity: "good to know",
        },
        {
          title: "NSwag",
          severity: "good to know",
        },
      ],
    },
    {
      title: "Task Scheduling",
      severity: "good to know",
      children: [
        {
          title: "Native BackgroundService",
          severity: "must",
        },
        {
          title: "Hangfire",
          severity: "good to know",
        },
      ],
    },
    {
      title: "Design Patterns",
      severity: "must",
      children: [
        {
          title: "SQRS",
          severity: "good to know",
        },
        {
          title: "Event Sourcing",
          severity: "good to know",
        },
        {
          title: "Strategy",
          severity: "good to know",
        },
        {
          title: "Builder",
          severity: "good to know",
        },
        {
          title: "Singleton",
          severity: "good to know",
        },
        {
          title: "Outbox",
          severity: "good to know",
        },
        {
          title: "Facade",
          severity: "good to know",
        },
      ],
    },
    {
      title: "CI/CD",
      severity: "must",
      children: [
        {
          title: "Github Actions",
          severity: "good to know",
        },
        {
          title: "Azure Pipelines",
          severity: "good to know",
        },
        {
          title: "TeamCity",
          severity: "good to know",
        },
        {
          title: "Octopus",
          severity: "good to know",
        },
        {
          title: "Travis CI",
          severity: "good to know",
        },
        {
          title: "Jenkins",
          severity: "good to know",
        },
        {
          title: "Circle CI",
          severity: "good to know",
        },
        {
          title: "Build Automation Systems",
          severity: "maybe",
          children: [
            {
              title: "Cake",
              severity: "good to know",
            },
            {
              title: "Nuke",
              severity: "good to know",
            },
          ],
        },
      ],
    },
    {
      title: "Microservices",
      severity: "must",
      children: [
        {
          title: "Cloud providers",
          severity: "must",
          children: [
            {
              title: "Azure",
              severity: "good to know",
            },
            {
              title: "GCP",
              severity: "good to know",
            },
            {
              title: "AWS",
              severity: "good to know",
            },
          ],
        },
        {
          title: "Containerization",
          severity: "must",
          children: [
            {
              title: "docker",
              severity: "must",
            },
          ],
        },
        {
          title: "Orchestration",
          severity: "must",
          children: [
            {
              title: "Kubernetes",
              severity: "must",
            },
          ],
        },
        {
          title: "Serverless",
          severity: "must",
          children: [
            {
              title: "AWS Lambda",
              severity: "must",
            },
            {
              title: "Azure Functions",
              severity: "must",
            },
          ],
        },
        {
          title: "Message-Bus",
          severity: "must",
          children: [
            {
              title: "Azure Service Bus",
              severity: "must",
            },
            {
              title: "AWS SQS",
              severity: "must",
            },
            {
              title: "MassTransit",
              severity: "maybe",
            },
          ],
        },
        {
          title: "Message-Broker",
          severity: "must",
          children: [
            {
              title: "Azure Service Bus",
              severity: "must",
            },
            {
              title: "AWS SNS",
              severity: "must",
            },
            {
              title: "RabbitMQ",
              severity: "must",
            },
          ],
        },
        {
          title: "Event-Streaming",
          severity: "good to know",
          children: [
            {
              title: "Apache Kafka",
              severity: "good to know",
            },
            {
              title: "AWS Kinesis",
              severity: "good to know",
            },
            {
              title: "Azure Event Hubs",
              severity: "good to know",
            },
          ],
        },
        {
          title: "API Gateway",
          severity: "good to know",
          children: [
            {
              title: "AWS/Azure/GCP equivalent",
            },
          ],
        },
        {
          title: "Reverse Proxy",
          severity: "good to know",
          children: [
            {
              title: "Traefik",
              severity: "good to know",
            },
          ],
        },
      ],
    },
    {
      title: "Good to know libraries",
      severity: "must",
      children: [
        {
          title: "Polly",
          severity: "must",
        },
        {
          title: "MediatR",
          severity: "must",
        },
        {
          title: "FluentValidation",
          severity: "must",
        },
        {
          title: "Becnhmark.NET",
          severity: "must",
        },
        {
          title: "ErrorOr",
          severity: "must",
        },
        {
          title: "Swashbuckle",
          severity: "maybe",
        },
        {
          title: "NodaTime",
          severity: "maybe",
        },
        {
          title: "Nuke",
          severity: "maybe",
        },
        {
          title: "GenFu",
          severity: "maybe",
        },
      ],
    },
    {
      title: "DevOps",
      severity: "good to know",
      children: [
        {
          title: "Infrastructure as code",
          severity: "good to know",
          children: [
            {
              title: "Terraform",
              severity: "good to know",
            },
            {
              title: "Pulumi",
              severity: "good to know",
            },
          ],
        },
      ],
    },
    {
      title: "Client-Side libraries",
      severity: "maybe",
      children: [
        {
          title: "Blazor",
          severity: "maybe",
        },
      ],
    },
    {
      title: "Template Engines",
      severity: "good to know",
      children: [
        {
          title: "Razor",
          severity: "must",
        },
        {
          title: "Scriban",
          severity: "maybe",
        },
      ],
    },
  ],
};

/*
3-4 h/day better be consistent
80% coding
20% reading, watching etc

2-3 months for 2-3 projects for portfolio

1-3 months looking for job, interviewing

 */