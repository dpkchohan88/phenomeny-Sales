import React from 'react';
import { Globe, Smartphone, Monitor, Layout } from 'lucide-react';
import SelectionCard from './SelectionCard';

/* ===============================
   LEVEL 1 DATA
================================ */

const PLATFORM_TYPES = [
  { id: 'web', label: 'Web Application', icon: Globe, description: 'Accessible via any browser' },
  { id: 'mobile', label: 'Mobile App', icon: Smartphone, description: 'iOS & Android native experience' },
  { id: 'both', label: 'Web + Mobile', icon: Layout, description: 'Unified cross-platform system' },
  { id: 'pwa', label: 'Progressive Web App', icon: Monitor, description: 'Installable web experience' },
  { id: 'unsure', label: 'Not sure yet', description: 'Let’s discuss best options' },
];

const ACCESS_MODELS = [
  { id: 'public', label: 'Public access', description: 'Open to everyone without login' },
  { id: 'login', label: 'Login required', description: 'Users must authenticate' },
  { id: 'role_based', label: 'Role-based access', description: 'Admins, Editors, Viewers, etc.' },
  { id: 'multi_tenant', label: 'Multi-tenant', description: 'SaaS style organization isolation' },
  { id: 'unsure', label: 'Not sure / Other', description: 'Needs consultation' },
];

const EXPERIENCE_TYPES = [
  { id: 'customer', label: 'Customer-facing', description: 'Direct to consumer/client' },
  { id: 'internal', label: 'Internal Dashboard', description: 'Employee/Admin tools' },
  { id: 'marketplace', label: 'Marketplace', description: 'Two-sided economy' },
  { id: 'portal', label: 'Client / Vendor Portal', description: 'Secure external access' },
  { id: 'saas', label: 'SaaS Product', description: 'Subscription software' },
  { id: 'other', label: 'Other', description: 'Custom use case' },
];

/* ===============================
   STEP COMPONENT
================================ */

const StepContent = ({ step, formData, updateFormData }) => {

  const handleSingleSelect = (field, value) => {
    updateFormData(field, value);
  };

  const handleMultiSelect = (field, value) => {
    const current = formData[field] || [];
    const exists = current.includes(value);

    updateFormData(
      field,
      exists ? current.filter(v => v !== value) : [...current, value]
    );
  };

  const isSelected = (field, value) => {
    if (Array.isArray(formData[field])) {
      return formData[field].includes(value);
    }
    return formData[field] === value;
  };

  const Grid = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );

  /* ---------------- STEP 1 ---------------- */

  if (step === 1) {
    return (
      <div className="space-y-10">

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Platform Type</h3>
          <Grid>
            {PLATFORM_TYPES.map(item => (
              <SelectionCard
                key={item.id}
                item={item}
                isSelected={isSelected('platform_type', item.id)}
                onClick={() => handleSingleSelect('platform_type', item.id)}
              />
            ))}
          </Grid>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Access Model</h3>
          <Grid>
            {ACCESS_MODELS.map(item => (
              <SelectionCard
                key={item.id}
                item={item}
                isSelected={isSelected('access_model', item.id)}
                onClick={() => handleSingleSelect('access_model', item.id)}
              />
            ))}
          </Grid>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Experience Type</h3>
          <Grid>
            {EXPERIENCE_TYPES.map(item => (
              <SelectionCard
                key={item.id}
                item={item}
                multiSelect
                isSelected={isSelected('experience_type', item.id)}
                onClick={() => handleMultiSelect('experience_type', item.id)}
              />
            ))}
          </Grid>
        </div>

      </div>
    );
  }
/* ---------------- STEP 2 ---------------- */

if (step === 2) {
  return (
    <div className="space-y-10">

      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          Commerce Features
        </h3>

        <Grid>
          {[
            { id: 'ecommerce', label: 'E-Commerce', description: 'Cart & Checkout' },
            { id: 'subscriptions', label: 'Subscriptions', description: 'Recurring billing' },
            { id: 'marketplace_trans', label: 'Marketplace Engine', description: 'Split payments' },
            { id: 'in_app', label: 'In-App Purchases', description: 'Digital goods' },
            { id: 'unsure', label: 'Not sure', description: 'TBD' },
          ].map(item => (
            <SelectionCard
              key={item.id}
              item={item}
              multiSelect
              isSelected={isSelected('commerce_features', item.id)}
              onClick={() => handleMultiSelect('commerce_features', item.id)}
            />
          ))}
        </Grid>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          User Management
        </h3>

        <Grid>
          {[
            { id: 'auth', label: 'Authentication', description: 'Login / Signup' },
            { id: 'profiles', label: 'User Profiles', description: 'Avatars & bio' },
            { id: 'roles', label: 'Role Permissions', description: 'Granular control' },
            { id: 'logs', label: 'Activity Logs', description: 'Track user actions' },
            { id: 'unsure', label: 'Not sure', description: 'TBD' },
          ].map(item => (
            <SelectionCard
              key={item.id}
              item={item}
              multiSelect
              isSelected={isSelected('user_management_features', item.id)}
              onClick={() => handleMultiSelect('user_management_features', item.id)}
            />
          ))}
        </Grid>
      </div>

    </div>
  );
}

  /* ---------------- STEP 3 ---------------- */

  if (step === 3) {
    return (
      <div className="space-y-10">

        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Admin Controls
          </h3>

          <Grid>
            {[
              { id: 'panel', label: 'Admin Panel', description: 'Central management dashboard' },
              { id: 'multi_admin', label: 'Multi-Admin Roles', description: 'Team access levels' },
              { id: 'restrictions', label: 'Access Restrictions', description: 'IP allowlists, security rules' },
              { id: 'audit', label: 'Audit Logs', description: 'Security & change tracking' },
              { id: 'unsure', label: 'Not sure', description: 'TBD' },
            ].map(item => (
              <SelectionCard
                key={item.id}
                item={item}
                multiSelect
                isSelected={isSelected('admin_controls', item.id)}
                onClick={() => handleMultiSelect('admin_controls', item.id)}
              />
            ))}
          </Grid>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Integrations
          </h3>

          <Grid>
            {[
              { id: 'crm', label: 'CRM Integration', description: 'HubSpot, Salesforce' },
              { id: 'payment', label: 'Payment Gateway', description: 'Stripe, Razorpay' },
              { id: 'marketing', label: 'Marketing Tools', description: 'Email & automation tools' },
              { id: 'erp', label: 'ERP Systems', description: 'SAP, Oracle, Zoho' },
              { id: 'api', label: 'Third-Party APIs', description: 'Custom integrations' },
              { id: 'unsure', label: 'Not sure', description: 'TBD' },
            ].map(item => (
              <SelectionCard
                key={item.id}
                item={item}
                multiSelect
                isSelected={isSelected('integrations', item.id)}
                onClick={() => handleMultiSelect('integrations', item.id)}
              />
            ))}
          </Grid>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Automation
          </h3>

          <Grid>
            {[
              { id: 'email', label: 'Automated Emails', description: 'Drip & lifecycle flows' },
              { id: 'triggers', label: 'Event Triggers', description: 'If-this-then-that logic' },
              { id: 'routing', label: 'Lead Routing', description: 'Auto assign to teams' },
              { id: 'ai', label: 'AI Architecture', description: 'LLM-ready data structure' },
              { id: 'unsure', label: 'Not sure', description: 'TBD' },
            ].map(item => (
              <SelectionCard
                key={item.id}
                item={item}
                multiSelect
                isSelected={isSelected('automation_features', item.id)}
                onClick={() => handleMultiSelect('automation_features', item.id)}
              />
            ))}
          </Grid>
        </div>

      </div>
    );
  }


/* ---------------- STEP 4 ---------------- */

if (step === 4) {
  return (
    <div className="space-y-10">

      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          Scale Level
        </h3>

        <Grid>
          {[
            { id: 'early', label: 'Early Stage', description: '< 1k users' },
            { id: 'growing', label: 'Growing', description: '1k – 10k users' },
            { id: 'scaling', label: 'Scaling', description: '10k – 100k users' },
            { id: 'enterprise', label: 'Enterprise', description: '100k+ users' },
            { id: 'unsure', label: 'Not sure', description: 'TBD' },
          ].map(item => (
            <SelectionCard
              key={item.id}
              item={item}
              isSelected={isSelected('scale_level', item.id)}
              onClick={() => handleSingleSelect('scale_level', item.id)}
            />
          ))}
        </Grid>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          Growth Features
        </h3>

        <Grid>
          {[
            { id: 'multilang', label: 'Multi-language', description: 'i18n support' },
            { id: 'multiregion', label: 'Multi-region', description: 'Global CDN' },
            { id: 'security', label: 'Advanced Security', description: 'SOC2 / HIPAA' },
            { id: 'performance', label: 'Performance Optimization', description: 'Caching & speed' },
            { id: 'ai_layer', label: 'AI & Automation Layer', description: 'Smart system enhancements' },
            { id: 'analytics', label: 'Deep Analytics', description: 'User behavior insights' },
            { id: 'unsure', label: 'Not sure', description: 'TBD' },
          ].map(item => (
            <SelectionCard
              key={item.id}
              item={item}
              multiSelect
              isSelected={isSelected('growth_features', item.id)}
              onClick={() => handleMultiSelect('growth_features', item.id)}
            />
          ))}
        </Grid>
      </div>

    </div>
  );
}

  return null;
};

export default StepContent;