export const planData = [
  {
    id: 'month-1',
    title: 'Month 1 — FOUNDATION ENGINEERING MINDSET',
    goal: 'Think like a system engineer, not a coder.',
    weeks: [
      {
        id: 'week-1',
        title: 'Week 1 – System & Backend Fundamentals',
        topics: [
          'What is backend really?',
          'How internet works',
          'Client-Server',
          'Requests lifecycle',
          'Latency vs throughput',
          'Availability',
          'Reliability'
        ],
        tasks: [
          { id: 'w1-t1', text: 'Write a note: “How does a web request work from browser → DNS → server → DB → response?”', type: 'note' }
        ]
      },
      {
        id: 'week-2',
        title: 'Week 2 – Requirement & Thinking Framework',
        topics: [
          'Functional vs Non-functional requirements',
          'Constraints thinking',
          'Problem decomposition',
          'Trade-offs'
        ],
        tasks: [
          { id: 'w2-t1', text: 'Pick ANY app (Instagram / Uber) and define: Use cases, Non functional needs, Constraints, Risks', type: 'exercise' }
        ]
      },
      {
        id: 'week-3',
        title: 'Week 3 – HTTP & REST Deep Dive',
        topics: [
          'HTTP methods',
          'REST principles',
          'Status codes',
          'Cookies / Sessions',
          'Auth basics',
          'CORS',
          'WebSockets'
        ],
        tasks: [
          { id: 'w3-t1', text: 'Explain: “How authentication works in a web app?”', type: 'exercise' }
        ]
      },
      {
        id: 'week-4',
        title: 'Week 4 – Database Foundation',
        topics: [
          'SQL vs NoSQL',
          'Indexing',
          'Primary key vs Composite key',
          'Normalization',
          'Transactions',
          'ACID'
        ],
        tasks: [
          { id: 'w4-t1', text: 'Build a CRUD API', type: 'build' },
          { id: 'w4-t2', text: 'Store in DB', type: 'build' },
          { id: 'w4-t3', text: 'Pagination', type: 'build' },
          { id: 'w4-t4', text: 'Error handling', type: 'build' }
        ]
      }
    ]
  },
  {
    id: 'month-2',
    title: 'Month 2 — BACKEND ENGINEERING CORE',
    goal: 'Become strong backend engineer foundation.',
    weeks: [
      {
        id: 'week-5',
        title: 'Week 5 – SQL Deep',
        topics: [
          'Joins',
          'Indexes internally',
          'Query optimization',
          'Replication intro'
        ],
        tasks: [
          { id: 'w5-t1', text: 'Design database for: Blogging system', type: 'practice' },
          { id: 'w5-t2', text: 'Design database for: E-commerce cart', type: 'practice' }
        ]
      },
      {
        id: 'week-6',
        title: 'Week 6 – NoSQL',
        topics: [
          'When to use?',
          'Types: Document, Key-value, Column',
          'MongoDB basics',
          'CAP theorem introduction'
        ],
        tasks: [
          { id: 'w6-t1', text: 'Create a notes app storing in MongoDB', type: 'project' }
        ]
      },
      {
        id: 'week-7',
        title: 'Week 7 – Backend Architecture',
        topics: [
          'MVC / Layered architecture',
          'DTOs',
          'Service layers',
          'API versioning',
          'Logging',
          'Error strategy'
        ],
        tasks: [
          { id: 'w7-t1', text: 'Refactor your project into good architecture', type: 'task' }
        ]
      },
      {
        id: 'week-8',
        title: 'Week 8 – Production Basics',
        topics: [
          'Rate limiting basics',
          'Pagination strategy',
          'Throttling',
          'Security basics'
        ],
        tasks: [
          { id: 'w8-t1', text: 'Add rate limit + logging into your project', type: 'task' }
        ]
      }
    ]
  },
  {
    id: 'month-3',
    title: 'Month 3 — SYSTEM DESIGN FOUNDATIONS',
    goal: 'Understand real architecture blocks.',
    weeks: [
      {
        id: 'week-9',
        title: 'Week 9 — Scaling Basics',
        topics: [
          'Horizontal vs Vertical scaling',
          'Stateless vs stateful',
          'Load balancer',
          'Reverse proxy'
        ],
        tasks: [
          { id: 'w9-t1', text: 'Explain: “How to scale an API from 1K → 1M users?”', type: 'task' }
        ]
      },
      {
        id: 'week-10',
        title: 'Week 10 — Caching',
        topics: [
          'Why caching',
          'Redis',
          'Cache eviction: LRU / LFU',
          'Cache strategies: write-through, write-back'
        ],
        tasks: [
          { id: 'w10-t1', text: 'Mini Design: YouTube Trending Cache', type: 'design' }
        ]
      },
      {
        id: 'week-11',
        title: 'Week 11 — Storage & CDN',
        topics: [
          'File storage',
          'S3 concept',
          'CDN',
          'Static vs dynamic delivery'
        ],
        tasks: [
          { id: 'w11-t1', text: 'Design Image storage for Instagram', type: 'task' }
        ]
      },
      {
        id: 'week-12',
        title: 'Week 12 — Message Queues',
        topics: [
          'Kafka',
          'RabbitMQ',
          'Async processing',
          'Producer/Consumer'
        ],
        tasks: [
          { id: 'w12-t1', text: 'Design: Email notification system', type: 'design' }
        ]
      }
    ]
  },
  {
    id: 'month-4',
    title: 'Month 4 — ADVANCED SYSTEM DESIGN',
    goal: 'Think enterprise level.',
    weeks: [
      {
        id: 'week-13',
        title: 'Week 13 — CAP + Consistency',
        topics: [
          'CAP theorem deep',
          'Eventual consistency',
          'Strong consistency'
        ],
        tasks: [
          { id: 'w13-t1', text: 'Explain: “Why banks use strong consistency?”', type: 'task' }
        ]
      },
      {
        id: 'week-14',
        title: 'Week 14 — Distributed Systems Concepts',
        topics: [
          'Leader election',
          'Consensus',
          'Partitioning strategies',
          'Sharding keys'
        ],
        tasks: []
      },
      {
        id: 'week-15',
        title: 'Week 15 — Reliability',
        topics: [
          'Retry strategy',
          'Idempotency',
          'Circuit breaker',
          'Failover',
          'Disaster recovery'
        ],
        tasks: []
      },
      {
        id: 'week-16',
        title: 'Week 16 — Observability',
        topics: [
          'Logging strategy',
          'Metrics',
          'Monitoring',
          'Tracing'
        ],
        tasks: [
          { id: 'w16-t1', text: 'Implement structured logging', type: 'tool' }
        ]
      }
    ]
  },
  {
    id: 'month-5',
    title: 'Month 5 — REAL SYSTEM DESIGN PROJECTS',
    goal: 'Apply knowledge to real-world systems. Each week: Design 1 big system deeply',
    weeks: [
      {
        id: 'week-17',
        title: 'Week 17 - Design: URL Shortener',
        topics: [
          'DB schema',
          'Redirection speed',
          'Hash vs ID',
          'Scaling'
        ],
        tasks: [
          { id: 'w17-t1', text: 'Design URL Shortener System', type: 'design' }
        ]
      },
      {
        id: 'week-18',
        title: 'Week 18 - Design: WhatsApp',
        topics: [
          'Message queue',
          'Delivery guarantee',
          'Sync',
          'Online/offline'
        ],
        tasks: [
          { id: 'w18-t1', text: 'Design WhatsApp System', type: 'design' }
        ]
      },
      {
        id: 'week-19',
        title: 'Week 19 - Design: Instagram',
        topics: [
          'Feed generation',
          'Follow graph',
          'Media storage',
          'Caching'
        ],
        tasks: [
          { id: 'w19-t1', text: 'Design Instagram System', type: 'design' }
        ]
      },
      {
        id: 'week-20',
        title: 'Week 20 - Design: Uber',
        topics: [
          'GPS',
          'Matching system',
          'Live tracking',
          'Surge pricing'
        ],
        tasks: [
          { id: 'w20-t1', text: 'Design Uber System', type: 'design' }
        ]
      }
    ]
  },
  {
    id: 'month-6',
    title: 'Month 6 — INTERVIEW & ARCHITECT MINDSET',
    goal: 'Think like architect permanently.',
    weeks: [
      {
        id: 'week-21-22',
        title: 'Week 21–22 - Practice',
        topics: [
          'Twitter',
          'YouTube',
          'Zomato',
          'Flipkart',
          'Focus on: Requirements, Scale estimates, System design framework'
        ],
        tasks: [
          { id: 'w21-t1', text: 'Practice Twitter Design', type: 'practice' },
          { id: 'w21-t2', text: 'Practice YouTube Design', type: 'practice' },
          { id: 'w21-t3', text: 'Practice Zomato Design', type: 'practice' },
          { id: 'w21-t4', text: 'Practice Flipkart Design', type: 'practice' }
        ]
      },
      {
        id: 'week-23-24',
        title: 'Week 23–24 - Final Polishing',
        topics: [
          'Tradeoff discussion',
          'Edge cases',
          'Failure scenarios',
          'Why this design?'
        ],
        tasks: [
          { id: 'w23-t1', text: 'Review Tradeoffs', type: 'review' },
          { id: 'w23-t2', text: 'Review Failure Scenarios', type: 'review' }
        ]
      }
    ]
  }
];
