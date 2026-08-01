"use client";

import { useState } from "react";

import { Pagination } from "@/app/components/ui/Pagination";
import { Tooltip } from "@/app/components/ui/Tooltip";
import { Toast } from "@/app/components/ui/Toast";
import { Accordion } from "@/app/components/ui/Accordion";
import { Tabs } from "@/app/components/ui/Tabs";
import { Table } from "@/app/components/ui/Table";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { Dropdown } from "@/app/components/ui/Dropdown";
import { Button } from "@/app/components/ui/Button";
import { Modal } from "@/app/components/ui/Modal";
import { Badge } from "@/app/components/ui/Badge";
import { Avatar } from "@/app/components/ui/Avatar";
import { Alert } from "@/app/components/ui/Alert";
import { Card } from "@/app/components/ui/Card";
import { Input } from "@/app/components/ui/Input";

export default function DesignSystemPage() {
    const [openModal, setOpenModal] = useState(false);0
    const [activeTab, setActiveTab] = useState("dashboard");
    const faqItems = [
  {
    id: "1",
    title: "What is GrowthPilot?",
    content:
      "GrowthPilot is an AI-powered Business Operating System that helps businesses manage marketing, CRM, automation, analytics, learning, and growth from one platform.",
  },
  {
    id: "2",
    title: "Who is GrowthPilot built for?",
    content:
      "GrowthPilot is designed for entrepreneurs, startups, agencies, SMEs, and enterprise teams looking to streamline operations and accelerate growth.",
  },
  {
    id: "3",
    title: "Can I use AI inside GrowthPilot?",
    content:
      "Yes. GrowthPilot includes AI assistants for marketing, content creation, customer support, business insights, automation, and more.",
  },
  {
    id: "4",
    title: "Does GrowthPilot integrate with other tools?",
    content:
      "Yes. GrowthPilot is designed to integrate with major third-party services such as email providers, CRMs, payment gateways, analytics platforms, and productivity tools.",
  },
];
    const [toastOpen, setToastOpen] = useState(false);

const [toastVariant, setToastVariant] = useState<
  "success" | "error" | "warning" | "info"
>("success");
const [currentPage, setCurrentPage] = useState(1);
const demoTabs = [
  {
    id: "dashboard",
    label: "Dashboard",
  },
  {
    id: "crm",
    label: "CRM",
  },
  {
    id: "ai",
    label: "AI Workspace",
  },
  {
    id: "analytics",
    label: "Analytics",
  },
];
    const columns = [
  { key: "name", title: "Name" },
  { key: "email", title: "Email" },
  { key: "status", title: "Status" },
];

const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: (
      <Badge variant="success">
        Active
      </Badge>
    ),
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    status: (
      <Badge variant="warning">
        Pending
      </Badge>
    ),
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    status: (
      <Badge variant="error">
        Inactive
      </Badge>
    ),
  },
];
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl space-y-12">

        <header>
          <h1 className="text-4xl font-bold">
            GrowthPilot Design System
          </h1>

          <p className="mt-2 text-slate-600">
            Official GPDS Component Showcase
          </p>
        </header>

        {/* Buttons */}

        <section className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">

            <Button>Primary</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>

            <Button variant="destructive">
              Delete
            </Button>

            <Button loading>
              Saving...
            </Button>

          </div>
        </section>

        {/* Inputs */}

        <section className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">
            Inputs
          </h2>

          <div className="grid gap-6 max-w-lg">

            <Input
              label="Email"
              placeholder="Enter your email"
              helperText="We'll never share your email."
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
            />

            <Input
              label="Error"
              error="Email address is required"
            />

            <Input
              label="Loading"
              loading
            />

          </div>
        </section>
        <section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Cards
  </h2>

  <div className="grid gap-6 md:grid-cols-3">

    <Card
      title="Starter"
      subtitle="Default Card"
    >
      <p>
        This is the default GPDS Card.
      </p>
    </Card>

    <Card
      variant="outlined"
      title="Outlined"
      subtitle="Border Style"
    >
      <p>
        Great for forms and settings.
      </p>
    </Card>

    <Card
      variant="elevated"
      hover
      title="Interactive"
      subtitle="Hover Effect"
      footer={<Button>Open</Button>}
    >
      <p>
        Used for dashboards and AI tools.
      </p>
    </Card>

  </div>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Alerts
  </h2>

  <div className="space-y-4">

    <Alert
      variant="success"
      title="Success"
    >
      Your changes have been saved.
    </Alert>

    <Alert
      variant="info"
      title="Information"
    >
      GrowthPilot v1.0 is now available.
    </Alert>

    <Alert
      variant="warning"
      title="Warning"
    >
      Your subscription expires soon.
    </Alert>

    <Alert
      variant="error"
      title="Error"
      dismissible
    >
      Something went wrong.
    </Alert>

  </div>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Avatars
  </h2>

  <div className="flex flex-wrap items-center gap-8">

    <Avatar
      name="GrowthPilot"
      size="sm"
    />

    <Avatar
      name="GrowthPilot"
      size="md"
    />

    <Avatar
      name="GrowthPilot"
      size="lg"
    />

    <Avatar
      name="GrowthPilot"
      size="xl"
    />

    <Avatar
      name="John Smith"
      status="online"
    />

    <Avatar
      name="Sarah Johnson"
      status="busy"
    />

    <Avatar
      name="Michael Brown"
      status="offline"
    />

  </div>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Badges
  </h2>

  <div className="space-y-8">

    {/* Default Variants */}

    <div>
      <h3 className="mb-3 text-lg font-medium">
        Variants
      </h3>

      <div className="flex flex-wrap gap-4">
        <Badge>Primary</Badge>

        <Badge variant="secondary">
          Secondary
        </Badge>

        <Badge variant="success">
          Success
        </Badge>

        <Badge variant="warning">
          Warning
        </Badge>

        <Badge variant="error">
          Error
        </Badge>

        <Badge variant="neutral">
          Neutral
        </Badge>
      </div>
    </div>
   
    {/* CRM */}

    <div>
      <h3 className="mb-3 text-lg font-medium">
        CRM Status
      </h3>

      <div className="flex gap-3 flex-wrap">
        <Badge>Lead</Badge>
        <Badge variant="secondary">Prospect</Badge>
        <Badge variant="success">Customer</Badge>
        <Badge variant="warning">VIP</Badge>
      </div>
    </div>

    {/* AI */}

    <div>
      <h3 className="mb-3 text-lg font-medium">
        AI Workspace
      </h3>

      <div className="flex gap-3 flex-wrap">
        <Badge>New</Badge>
        <Badge variant="secondary">Beta</Badge>
        <Badge variant="warning">Experimental</Badge>
      </div>
    </div>

    {/* Billing */}

    <div>
      <h3 className="mb-3 text-lg font-medium">
        Billing
      </h3>

      <div className="flex gap-3 flex-wrap">
        <Badge variant="success">Paid</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Overdue</Badge>
      </div>
    </div>

  </div>
</section>
 <section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Modal
  </h2>

  <Button onClick={() => setOpenModal(true)}>
    Open Modal
  </Button>

  <Modal
    open={openModal}
    onClose={() => setOpenModal(false)}
    title="GrowthPilot Modal"
    size="xl"
    footer={
      <div className="flex justify-end gap-3">
        <Button
          variant="ghost"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </Button>

        <Button
          onClick={() => setOpenModal(false)}
        >
          Confirm
        </Button>
      </div>
    }
  >
    <p className="text-slate-600">
      This is the official GrowthPilot Modal component.
    </p>

    <p className="mt-4 text-slate-500">
      It will be used throughout the platform for forms,
      confirmations, settings, AI tools, CRM actions,
      billing, and many other workflows.
    </p>
  </Modal>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Empty States
  </h2>

  <div className="grid gap-8 md:grid-cols-2">

    <EmptyState
      icon="📂"
      title="No Projects Yet"
      description="Create your first project to start managing your business."
      action={
        <Button>
          Create Project
        </Button>
      }
    />

    <EmptyState
      icon="🤖"
      title="No AI Conversations"
      description="Start chatting with GrowthPilot AI to generate ideas, campaigns, and business strategies."
      action={
        <Button variant="secondary">
          Start Chat
        </Button>
      }
    />

  </div>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Dropdowns
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <Dropdown
      label="Country"
      placeholder="Select your country"
      options={[
        { label: "Nigeria", value: "ng" },
        { label: "United States", value: "us" },
        { label: "United Kingdom", value: "uk" },
      ]}
      helperText="Choose your country."
    />

    <Dropdown
      label="Department"
      placeholder="Select department"
      options={[
        { label: "Marketing", value: "marketing" },
        { label: "Sales", value: "sales" },
        { label: "Engineering", value: "engineering" },
      ]}
      error="Department is required."
    />

  </div>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Tables
  </h2>

  <Table
    columns={columns}
    rows={rows}
  />
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Tabs
  </h2>

  <Tabs
    tabs={demoTabs}
    activeTab={activeTab}
    onChange={setActiveTab}
  />

  <div className="mt-8 rounded-xl bg-slate-50 p-6">
    <p className="text-slate-600">
      Active Tab:
    </p>

    <h3 className="mt-2 text-xl font-semibold">
      {activeTab}
    </h3>
  </div>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Accordion
  </h2>

  <Accordion items={faqItems} />
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Toast
  </h2>

  <div className="flex flex-wrap gap-4">
    <button
      className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
      onClick={() => {
        setToastVariant("success");
        setToastOpen(true);
      }}
    >
      Success Toast
    </button>

    <button
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      onClick={() => {
        setToastVariant("error");
        setToastOpen(true);
      }}
    >
      Error Toast
    </button>

    <button
      className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
      onClick={() => {
        setToastVariant("warning");
        setToastOpen(true);
      }}
    >
      Warning Toast
    </button>

    <button
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      onClick={() => {
        setToastVariant("info");
        setToastOpen(true);
      }}
    >
      Info Toast
    </button>
  </div>

  <Toast
    open={toastOpen}
    onClose={() => setToastOpen(false)}
    variant={toastVariant}
    title="Notification"
    description="This is a GrowthPilot toast notification."
  />
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Tooltip
  </h2>

  <div className="flex flex-wrap items-center gap-8">
    <Tooltip
      content="This tooltip appears above."
      placement="top"
    >
      <button className="rounded-lg bg-slate-800 px-4 py-2 text-white">
        Top
      </button>
    </Tooltip>

    <Tooltip
      content="This tooltip appears below."
      placement="bottom"
    >
      <button className="rounded-lg bg-slate-800 px-4 py-2 text-white">
        Bottom
      </button>
    </Tooltip>

    <Tooltip
      content="This tooltip appears on the left."
      placement="left"
    >
      <button className="rounded-lg bg-slate-800 px-4 py-2 text-white">
        Left
      </button>
    </Tooltip>

    <Tooltip
      content="This tooltip appears on the right."
      placement="right"
    >
      <button className="rounded-lg bg-slate-800 px-4 py-2 text-white">
        Right
      </button>
    </Tooltip>
  </div>
</section>
<section className="rounded-2xl bg-white p-8 shadow-lg">
  <h2 className="mb-6 text-2xl font-semibold">
    Pagination
  </h2>

  <Pagination
    currentPage={currentPage}
    totalPages={10}
    onPageChange={setCurrentPage}
  />

  <div className="mt-6 rounded-xl bg-slate-50 p-4">
    <p className="text-slate-600">
      Current Page
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      {currentPage}
    </h3>
  </div>
</section>

      </div>
    </main>
  );
}