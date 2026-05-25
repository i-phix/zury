#!/bin/bash
set -e

echo "🏗  Creating PropManager structure..."

# ─── CLIENT DIRS ───────────────────────────────────────────────
mkdir -p client/public/assets/images/{branding,illustrations,placeholders}
mkdir -p client/public/assets/icons/{modules,ui}
mkdir -p client/public/assets/fonts/{primary,mono}

mkdir -p client/src/app
mkdir -p client/src/styles/modules
mkdir -p client/src/layouts/{main,auth,portal,print,error}

# Client modules
for module in auth dashboard properties leasing tenants payments maintenance accounting reports screening communications documents owners settings; do
  mkdir -p client/src/modules/$module/{pages,components,hooks,store,services,utils,constants,types}
done

# Auth pages
for page in Login Register ForgotPassword ResetPassword TwoFactor; do
  mkdir -p client/src/modules/auth/pages/$page
done
for comp in LoginForm OAuthButtons SessionTimer; do
  mkdir -p client/src/modules/auth/components/$comp
done

# Dashboard components
for comp in SummaryCards OccupancyChart RevenueChart ActivityFeed AlertsPanel QuickActions WeatherWidget; do
  mkdir -p client/src/modules/dashboard/components/$comp
done
mkdir -p client/src/modules/dashboard/pages/Dashboard

# Properties pages & components
for page in PropertyList PropertyDetail AddProperty EditProperty PropertyUnits UnitDetail PropertyMap; do
  mkdir -p client/src/modules/properties/pages/$page
done
for comp in PropertyCard UnitGrid UnitCard PropertyForm UnitForm FloorPlanViewer OccupancyBadge PropertyFilters AmenitiesList; do
  mkdir -p client/src/modules/properties/components/$comp
done

# Leasing pages & components
for page in LeaseList LeaseDetail NewLease RenewLease TerminateLease Applications ApplicationDetail LeaseTimeline; do
  mkdir -p client/src/modules/leasing/pages/$page
done
for comp in LeaseCard LeaseForm LeaseStatusBadge LeaseTermsPanel ApplicationForm ApplicationStatusStepper RenewalNoticeCard; do
  mkdir -p client/src/modules/leasing/components/$comp
done

# Tenants pages & components
for page in TenantList TenantProfile AddTenant EditTenant TenantHistory TenantDocuments; do
  mkdir -p client/src/modules/tenants/pages/$page
done
for comp in TenantCard TenantForm TenantAvatar TenantStatusBadge TenantNotes EmergencyContacts TenantPaymentSummary; do
  mkdir -p client/src/modules/tenants/components/$comp
done

# Payments pages & components
for page in PaymentDashboard RentCollection Invoices InvoiceDetail CreateInvoice PaymentHistory Receipts LateFeesManager Refunds PaymentGatewaySettings; do
  mkdir -p client/src/modules/payments/pages/$page
done
for comp in PaymentCard PaymentForm InvoiceCard InvoiceTemplate PaymentStatusBadge PaymentMethodSelector LateFeeCalculator ReceiptPrinter; do
  mkdir -p client/src/modules/payments/components/$comp
done

# Maintenance pages & components
for page in MaintenanceDashboard WorkOrders WorkOrderDetail NewWorkOrder Vendors VendorProfile AddVendor Inspections InspectionDetail NewInspection AssetTracker AssetDetail MaintenanceSchedule; do
  mkdir -p client/src/modules/maintenance/pages/$page
done
for comp in WorkOrderCard WorkOrderForm WorkOrderStatusStepper PriorityBadge VendorCard VendorForm InspectionChecklist AssetCard MaintenanceCalendar; do
  mkdir -p client/src/modules/maintenance/components/$comp
done

# Accounting pages & components
for page in AccountingDashboard ChartOfAccounts GeneralLedger JournalEntries NewJournalEntry BankReconciliation Budgets BudgetDetail Expenses ExpenseDetail TaxCenter FinancialStatements; do
  mkdir -p client/src/modules/accounting/pages/$page
done
for comp in AccountCard JournalEntryForm LedgerTable BudgetVsActualChart ReconciliationTable ExpenseForm TaxSummaryCard; do
  mkdir -p client/src/modules/accounting/components/$comp
done

# Reports pages & components
for page in ReportsDashboard FinancialReports OccupancyReports MaintenanceReports TenantReports OwnerReports CustomReportBuilder ReportScheduler; do
  mkdir -p client/src/modules/reports/pages/$page
done
for comp in ReportCard ReportFilters ChartWidget DataTable ExportToolbar ScheduleForm; do
  mkdir -p client/src/modules/reports/components/$comp
done

# Screening pages & components
for page in ScreeningDashboard ScreeningRequests BackgroundCheck CreditCheck EvictionHistory ScreeningReport; do
  mkdir -p client/src/modules/screening/pages/$page
done
for comp in ScreeningRequestCard ScreeningScoreCard ScreeningCriteria; do
  mkdir -p client/src/modules/screening/components/$comp
done

# Communications pages & components
for page in Inbox Compose Announcements EmailTemplates SMSCenter NotificationSettings; do
  mkdir -p client/src/modules/communications/pages/$page
done
for comp in MessageThread MessageBubble ComposeForm AnnouncementCard TemplateEditor NotificationBell; do
  mkdir -p client/src/modules/communications/components/$comp
done

# Documents pages & components
for page in DocumentLibrary DocumentViewer LeaseTemplates TemplateEditor ESignature SigningStatus; do
  mkdir -p client/src/modules/documents/pages/$page
done
for comp in DocumentCard DocumentUploader SignatureCanvas DocumentStatusBadge; do
  mkdir -p client/src/modules/documents/components/$comp
done

# Owners pages & components
for page in OwnerList OwnerProfile OwnerDashboard OwnerStatements OwnerPayouts; do
  mkdir -p client/src/modules/owners/pages/$page
done
for comp in OwnerCard OwnerStatementCard PayoutSummary; do
  mkdir -p client/src/modules/owners/components/$comp
done

# Settings pages & components
for page in GeneralSettings UserManagement UserDetail RolesPermissions RoleDetail Integrations BillingSettings EmailSettings SMSSettings AuditLogs SystemHealth; do
  mkdir -p client/src/modules/settings/pages/$page
done
for comp in SettingsNav UserForm RoleForm PermissionMatrix IntegrationCard; do
  mkdir -p client/src/modules/settings/components/$comp
done

# Portals
for portal in tenant vendor owner; do
  mkdir -p client/src/modules/portals/$portal/{pages,components,hooks}
done
for page in TenantPortalHome PayRent SubmitRequest MyDocuments MyLease MyPaymentHistory; do
  mkdir -p client/src/modules/portals/tenant/pages/$page
done
for page in VendorPortalHome MyWorkOrders VendorInvoicing; do
  mkdir -p client/src/modules/portals/vendor/pages/$page
done
for page in OwnerPortalHome MyProperties MyStatements; do
  mkdir -p client/src/modules/portals/owner/pages/$page
done

# Future modules
for mod in insurance crm self-storage affordable-housing hoa-associations manufactured-housing parking utilities-billing concierge ai-insights; do
  mkdir -p client/src/modules/_future_modules/$mod
done

# Shared client
for comp in Button Input Select Textarea Checkbox RadioGroup Toggle DatePicker FileUpload Modal Drawer Tooltip Popover ConfirmDialog Badge Tag Avatar Spinner Skeleton ProgressBar Tabs Accordion Stepper Pagination Table EmptyState ErrorBoundary; do
  mkdir -p client/src/shared/components/ui/$comp
done
for comp in BarChart LineChart PieChart DonutChart AreaChart StatsCard; do
  mkdir -p client/src/shared/components/charts/$comp
done
mkdir -p client/src/shared/components/navigation/{Sidebar,Topbar,Breadcrumbs,ModuleSwitcher}
for comp in Toast AlertBanner InlineError; do
  mkdir -p client/src/shared/components/feedback/$comp
done
mkdir -p client/src/shared/{hooks,utils,constants,types}

# ─── SERVER DIRS ───────────────────────────────────────────────
mkdir -p server/src/config/{database,services,security}

for module in auth users roles properties units tenants leasing payments maintenance accounting reports screening communications documents owners settings; do
  mkdir -p server/src/modules/$module/{routes,controllers,services,validators,tests}
done
mkdir -p server/src/modules/auth/{middleware,utils,constants}
mkdir -p server/src/modules/properties/utils
mkdir -p server/src/modules/properties/constants
mkdir -p server/src/modules/leasing/utils
mkdir -p server/src/modules/payments/{webhooks,utils}
mkdir -p server/src/modules/maintenance/{utils}
mkdir -p server/src/modules/accounting/utils
mkdir -p server/src/modules/reports/templates/{pdfTemplates,excelTemplates}
mkdir -p server/src/modules/communications/sockets
mkdir -p server/src/modules/documents/services
mkdir -p server/src/modules/users/constants

# Database
for model in auth property leasing tenant payments maintenance accounting documents communications owners system; do
  mkdir -p server/src/database/models/$model
done
mkdir -p server/src/database/indexes
mkdir -p server/src/database/aggregations/{dashboard,reports,analytics}
mkdir -p server/src/database/seeders/{dev,production}

# Shared server
mkdir -p server/src/shared/{middleware,utils,validators,constants}

# Jobs
mkdir -p server/src/jobs/{schedulers,queues,workers}

# Integrations
mkdir -p server/src/integrations/payments/{stripe,plaid}
mkdir -p server/src/integrations/communications/{twilio,sendgrid}
mkdir -p server/src/integrations/documents/{docusign,s3}
mkdir -p server/src/integrations/screening/transunion
mkdir -p server/src/integrations/maps/googleMaps

# Sockets
mkdir -p server/src/sockets/{handlers,middleware}

# ─── DATABASE DOCS ─────────────────────────────────────────────
mkdir -p database/schema-docs/{auth,core,leasing,payments,maintenance,accounting,system}
mkdir -p database/{diagrams,scripts}

# ─── DOCS ──────────────────────────────────────────────────────
mkdir -p docs/{architecture,api,modules,decisions}

# ─── TESTS ─────────────────────────────────────────────────────
mkdir -p tests/unit/{server,client}
mkdir -p tests/integration/{api,database}
mkdir -p tests/e2e/flows

# ─── DEVOPS ────────────────────────────────────────────────────
mkdir -p devops/docker/{client,server,nginx}
mkdir -p devops/ci-cd/{github-actions,scripts}
mkdir -p devops/monitoring/{logging,health}
mkdir -p devops/environments

# ─── PLACEHOLDER FILES (keep git-trackable) ────────────────────
find client/src/modules -type d -empty -exec touch {}/.gitkeep \;
find server/src/modules -type d -empty -exec touch {}/.gitkeep \;
find server/src/database -type d -empty -exec touch {}/.gitkeep \;
find server/src/jobs -type d -empty -exec touch {}/.gitkeep \;
find server/src/integrations -type d -empty -exec touch {}/.gitkeep \;
find tests -type d -empty -exec touch {}/.gitkeep \;
find devops -type d -empty -exec touch {}/.gitkeep \;
find docs -type d -empty -exec touch {}/.gitkeep \;
find database -type d -empty -exec touch {}/.gitkeep \;

echo "✅ Done! All folders created."
echo ""
echo "Next: copy your core files in, then run: npm run install:all"