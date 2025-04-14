import { BlogPost, BlogPostMeta } from '@/types/blog'

// This is a temporary solution until we implement a proper CMS or database
const posts: BlogPost[] = [
  {
    slug: 'welcome',
    title: 'Welcome to Gaelica Finance Blog',
    description: 'An introduction to our blog and what to expect from our financial insights',
    date: '2024-04-12',
    author: 'Gaelica Team',
    image: '/images/logo.png',
    content: `
# Welcome to Gaelica Finance Blog

We're excited to launch our blog, where we'll share insights, analysis, and perspectives on the world of finance.

## What to Expect

Our blog will cover various topics including:

- Investment strategies
- Market analysis
- Financial planning
- Risk management
- ESG investing
- Corporate governance

Stay tuned for regular updates and deep dives into these important topics.
    `
  },
  {
    slug: 'esg-investing-future',
    title: 'ESG Investing: Beyond the Trend',
    description: 'Exploring how Environmental, Social, and Governance factors are reshaping investment strategies and creating long-term value',
    date: '2024-04-11',
    author: 'Gaelica Team',
    image: '/images/logo.png',
    content: `
# ESG Investing: Beyond the Trend

Environmental, Social, and Governance (ESG) investing has moved from a niche approach to a fundamental consideration in modern investment strategies. But what does this shift mean for investors and businesses?

## The Evolution of ESG

ESG investing has evolved from simple exclusionary screening to sophisticated integration strategies that consider:

- Environmental impact and sustainability
- Social responsibility and stakeholder engagement
- Corporate governance and transparency

## Why ESG Matters Now

The importance of ESG factors in investment decisions has grown significantly due to:

1. Increasing regulatory requirements
2. Growing investor demand
3. Clear correlation between ESG performance and financial returns
4. Risk mitigation benefits

## Looking Ahead

As we move forward, ESG considerations will become even more integrated into investment strategies, not as a separate approach, but as a fundamental part of investment analysis and decision-making.
    `
  },
  {
    slug: 'risk-management-strategies',
    title: 'Modern Risk Management Strategies',
    description: 'A comprehensive guide to understanding and implementing effective risk management strategies in today\'s complex financial landscape',
    date: '2024-04-10',
    author: 'Gaelica Team',
    image: '/images/logo.png',
    content: `
# Modern Risk Management Strategies

In today's rapidly evolving financial landscape, effective risk management is more crucial than ever. This guide explores modern approaches to identifying, assessing, and mitigating risks.

## The Changing Face of Risk

Modern risk management must address:

- Market volatility
- Regulatory changes
- Technological disruption
- Environmental risks
- Geopolitical uncertainty

## Key Components of Risk Management

A robust risk management strategy should include:

1. Risk Identification
   - Systematic assessment of potential risks
   - Regular review and updates
   - Stakeholder input

2. Risk Assessment
   - Quantitative and qualitative analysis
   - Impact evaluation
   - Probability assessment

3. Risk Mitigation
   - Strategic planning
   - Implementation of controls
   - Continuous monitoring

## Best Practices

Successful risk management requires:

- Clear communication
- Regular review and updates
- Integration with business strategy
- Technology utilization
- Continuous improvement

Stay tuned for more detailed insights on each of these aspects.
    `
  }
]

export function getAllPosts(): BlogPostMeta[] {
  return posts.map(({ content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug)
} 