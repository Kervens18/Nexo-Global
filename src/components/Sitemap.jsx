import React from "react";

export default function Sitemap({ onBack }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{
      background: "radial-gradient(circle at 70% 10%, #ff6600 0%, #d10a8a 60%, #2e08cf 100%)"
    }}>
      <div className="w-full max-w-3xl bg-black/40 rounded-2xl p-8 shadow-xl text-white overflow-y-auto" style={{maxHeight: '90vh'}}>
        <h1 className="text-3xl font-bold mb-6 text-center">Sitemap</h1>
        <div className="text-sm space-y-4" style={{whiteSpace: 'pre-line'}}>
{`
Last Updated: 20/04/2018
Company: Nexo Global

1. ROOT STRUCTURE

/
/home
/platform
/solutions
/products
/pricing
/enterprise
/developers
/resources
/company
/legal
/support
/account
/partners
/affiliates
/investors
/security
/trust-center
/system-status
/roadmap

2. HOME
2.1 Homepage Sections
Hero
Value Proposition
Core Metrics
Social Proof
Integrations Preview
AI Capabilities
Automation Workflows
Case Studies
Testimonials
CTA Blocks
Footer Navigation

3. PLATFORM
3.1 Platform Overview
/platform/overview
/platform/architecture
/platform/infrastructure
/platform/ai-engine
/platform/automation-core
/platform/data-layer
/platform/security
3.2 Core Capabilities
/platform/ai-models
/platform/machine-learning
/platform/nlp-engine
/platform/workflow-automation
/platform/real-time-processing
/platform/data-pipelines
/platform/analytics-dashboard
/platform/reporting-suite
3.3 Integrations Hub
/integrations
/integrations/ecommerce
/integrations/payments
/integrations/marketing
/integrations/crm
/integrations/erp
/integrations/marketplaces
/integrations/social-commerce
/integrations/api

4. PRODUCTS
4.1 AI Products
/products/ai-sales
/products/ai-marketing
/products/ai-operations
/products/ai-support
/products/ai-analytics
/products/ai-assistant
/products/ai-chatbot
/products/ai-lead-generator
/products/ai-forecasting
4.2 Automation Products
/products/workflow-builder
/products/process-automation
/products/rpa
/products/email-automation
/products/crm-automation
/products/ecommerce-automation
/products/inventory-automation
/products/financial-automation
4.3 Data Products
/products/data-warehouse
/products/business-intelligence
/products/data-visualization
/products/predictive-analytics
/products/kpi-tracking

5. SOLUTIONS
5.1 By Industry
/solutions/ecommerce
/solutions/saas
/solutions/fintech
/solutions/logistics
/solutions/retail
/solutions/healthtech
/solutions/real-estate
/solutions/education
/solutions/startups
/solutions/agencies
/solutions/enterprise
5.2 By Role
/solutions/founders
/solutions/ceo
/solutions/cto
/solutions/cmo
/solutions/coo
/solutions/sales-director
/solutions/marketing-director
/solutions/operations-manager
/solutions/data-analyst
/solutions/developers
5.3 By Use Case
/solutions/lead-generation
/solutions/customer-acquisition
/solutions/conversion-optimization
/solutions/customer-retention
/solutions/upselling-cross-selling
/solutions/process-optimization
/solutions/cost-reduction
/solutions/digital-transformation

6. PRICING
/pricing
/pricing/free
/pricing/starter
/pricing/pro
/pricing/business
/pricing/enterprise
/pricing/custom
/pricing/compare
/pricing/faq
/pricing/billing-policy
/pricing/refund-policy

7. ENTERPRISE
/enterprise
/enterprise/overview
/enterprise/security
/enterprise/compliance
/enterprise/dedicated-support
/enterprise/sla
/enterprise/custom-integration
/enterprise/private-cloud
/enterprise/on-premise
/enterprise/procurement

8. DEVELOPERS
8.1 Developer Portal
/developers
/developers/getting-started
/developers/api-docs
/developers/sdk
/developers/webhooks
/developers/authentication
/developers/rate-limits
/developers/errors
/developers/changelog
/developers/sandbox
8.2 Technical Documentation
/docs
/docs/platform
/docs/integrations
/docs/ai-models
/docs/automation
/docs/security
/docs/compliance

9. RESOURCES
9.1 Blog
/blog
/blog/ai
/blog/automation
/blog/ecommerce
/blog/startups
/blog/case-studies
/blog/guides
/blog/announcements
9.2 Knowledge Base
/help-center
/help-center/getting-started
/help-center/account
/help-center/billing
/help-center/integrations
/help-center/troubleshooting
9.3 Media
/webinars
/events
/ebooks
/whitepapers
/videos
/press
/media-kit

10. COMPANY
/company
/company/about
/company/mission
/company/vision
/company/leadership
/company/team
/company/careers
/company/culture
/company/investors
/company/partners
/company/contact

11. LEGAL
/legal
/legal/terms-of-service
/legal/privacy-policy
/legal/cookie-policy
/legal/data-processing-agreement
/legal/gdpr
/legal/ccpa
/legal/security-policy
/legal/acceptable-use-policy
/legal/subprocessors
/legal/intellectual-property
/legal/trademarks
/legal/dmca
/legal/accessibility

12. SECURITY & TRUST
/security
/security/encryption
/security/infrastructure
/security/certifications
/security/audit-reports
/security/vulnerability-disclosure
/security/bug-bounty
/trust-center
/system-status

13. ACCOUNT AREA
/signup
/login
/dashboard
/dashboard/overview
/dashboard/analytics
/dashboard/workflows
/dashboard/integrations
/dashboard/settings
/dashboard/profile
/dashboard/security
/dashboard/api-keys
/dashboard/billing
/dashboard/team
/dashboard/notifications

14. SUPPORT
/support
/support/contact
/support/contact-sales
/support/contact-support
/support/live-chat
/support/submit-ticket
/support/faq
/support/status
/support/sla

15. PARTNERS & AFFILIATES
/partners
/partners/become-a-partner
/partners/technology-partners
/partners/resellers
/partners/integrators
/affiliate
/affiliate/program
/affiliate/login
/affiliate/resources

16. SEO & TECHNICAL PAGES
/sitemap.xml
/robots.txt
/404
/500
/maintenance
/changelog
/release-notes
`}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="btn glass" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}
