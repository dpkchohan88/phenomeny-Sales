/**
 * Utility functions for formatting builder summary data
 */

const VALUE_MAP = {
  // Platform Types
  web: "Web Application",
  mobile: "Mobile Application",
  both: "Web & Mobile Solution",
  pwa: "Progressive Web App (PWA)",

  // Access Models
  public: "Public Open Access",
  login: "Authentication Required",
  role_based: "Role-Based Access Control",
  multi_tenant: "Multi-Tenant Architecture",

  // Experience Types
  customer: "Customer-Facing Portal",
  internal: "Internal Admin Dashboard",
  marketplace: "Two-Sided Marketplace",
  portal: "Client/Vendor Portal",
  saas: "SaaS Product Interface",
  other: "Custom Experience",

  // Commerce
  ecommerce: "E-Commerce Suite",
  subscriptions: "Subscription Management",
  marketplace_trans: "Marketplace Transactions",
  in_app: "In-App Purchases",

  // User Mgmt
  auth: "Secure Authentication",
  profiles: "User Profiles",
  roles: "Granular Permissions",
  logs: "User Activity Logging",

  // Operations
  booking: "Booking & Scheduling",
  workflow: "Workflow Automation",
  approvals: "Approval Flows",
  notifications: "Multi-Channel Notifications",
  files: "File Management",

  // Reporting
  dashboards: "Interactive Dashboards",
  reports: "Exportable Reports",
  realtime: "Real-Time Analytics",
  search: "Advanced Search",

  // Admin
  panel: "Admin Control Panel",
  multi_admin: "Multi-Admin Management",
  restrictions: "Access Restrictions",
  audit: "Audit Logging",

  // Integrations
  crm: "CRM Integration",
  payment: "Payment Gateway Integration",
  marketing: "Marketing Automation",
  erp: "ERP Integration",
  api: "Custom API Connectivity",

  // Automation
  email: "Automated Emails",
  triggers: "Event-Based Triggers",
  routing: "Lead Routing",
  ai: "AI-Ready Architecture",

  // Scale
  early: "Early Stage",
  growing: "Growth Stage",
  scaling: "Scaling Stage",
  enterprise: "Enterprise Scale",

  // Growth
  multilang: "Multi-Language Support",
  multiregion: "Multi-Region Infrastructure",
  security: "Advanced Compliance",
  performance: "Performance Optimization",
  ai_layer: "AI Integration Layer",
  analytics: "Advanced Analytics",

  // Fallback
  unsure: "To Be Determined",
};

/**
 * Format a single value into readable text
 */
export const formatValue = (value) => {
  if (!value) return "";
  if (VALUE_MAP[value]) return VALUE_MAP[value];

  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

/**
 * Format array values
 */
export const formatArray = (array) => {
  if (!Array.isArray(array) || array.length === 0) return [];
  return array.map(formatValue);
};

/**
 * Clean helper – removes parentheses for smoother sentence flow
 */
const cleanText = (text) =>
  text ? text.replace(/\s*\(.*?\)\s*/g, "") : "";

/**
 * Generate executive summary paragraph
 */
export const generateSummary = (data) => {
  const platform = cleanText(formatValue(data.platform_type));
  const access = cleanText(formatValue(data.access_model));
  const scale = cleanText(formatValue(data.scale_level));

  const experienceTypes = formatArray(data.experience_type);

  // Base sentence
  let summary = "This blueprint outlines ";

  if (platform) {
    summary += `a ${platform.toLowerCase()}`;
  } else {
    summary += "a custom digital system";
  }

  if (access && access !== "To Be Determined") {
    summary += ` with ${access.toLowerCase()}`;
  }

  if (scale && scale !== "To Be Determined") {
    summary += ` designed for ${scale.toLowerCase()}`;
  }

  summary += ".";

  // Add experience context
  if (experienceTypes.length > 0) {
    const cleanExperiences = experienceTypes.map((e) =>
      cleanText(e).toLowerCase()
    );

    summary += ` It will support ${cleanExperiences.join(", ")} functionality.`;
  }

  return summary;
};
