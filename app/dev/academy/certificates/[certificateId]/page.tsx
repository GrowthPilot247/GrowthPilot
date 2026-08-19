"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import {
  getCertificateById,
} from "../../../../features/academy/services/certificateService";

export default function CertificatePage() {
  const params = useParams();

  const certificateId =
    typeof params.certificateId === "string"
      ? params.certificateId
      : "";

  const certificate =
    getCertificateById(certificateId);

  if (!certificate) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/dev/academy/learner"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Academy
          </Link>

          <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <Award className="h-8 w-8 text-slate-500" />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-slate-950">
              Certificate Not Found
            </h1>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">
              The certificate you are looking for could
              not be found or is no longer available.
            </p>

            <Link
              href="/dev/academy/learner"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Return to Academy
            </Link>
          </section>
        </div>
      </main>
    );
  }

  const isIssued =
    certificate.status === "Issued";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/dev/academy/learner"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Academy
        </Link>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-200 bg-slate-950 px-6 py-12 text-center text-white sm:px-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Award className="h-10 w-10" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              GrowthPilot Academy
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Certificate of Achievement
            </h1>

            <p className="mt-3 text-sm text-white/70">
              {certificate.credentialType}
            </p>
          </div>

          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                This certifies that
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                GrowthPilot Learner
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
                has successfully completed the
                requirements for the GrowthPilot Academy
                course
              </p>

              <h3 className="mx-auto mt-5 max-w-3xl text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                {certificate.courseTitle}
              </h3>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
              <InfoCard
                label="Credential Type"
                value={certificate.credentialType}
              />

              <InfoCard
                label="Certificate Number"
                value={certificate.certificateNumber}
                mono
              />

              <InfoCard
                label="Completion Date"
                value={formatDate(
                  certificate.completedAt,
                )}
              />

              <InfoCard
                label="Issue Date"
                value={formatDate(
                  certificate.issuedAt,
                )}
              />
            </div>

            {certificate.assessmentScore !==
              undefined && (
              <div className="mx-auto mt-4 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Assessment Score
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-950">
                  {certificate.assessmentScore}%
                </p>
              </div>
            )}

            <div
              className={`mx-auto mt-10 flex max-w-3xl items-center gap-4 rounded-xl border p-5 ${
                isIssued
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-amber-200 bg-amber-50"
              }`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                  isIssued
                    ? "bg-emerald-100"
                    : "bg-amber-100"
                }`}
              >
                {isIssued ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                ) : (
                  <ShieldCheck className="h-6 w-6 text-amber-600" />
                )}
              </div>

              <div>
                <p className="font-semibold text-slate-950">
                  {isIssued
                    ? "Certificate Issued"
                    : `Certificate ${certificate.status}`}
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  {isIssued
                    ? "This GrowthPilot Academy credential is currently valid."
                    : "This certificate is not currently valid."}
                </p>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <ShieldCheck className="h-5 w-5 text-slate-700" />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-slate-950">
                    Public Verification Code
                  </p>

                  <p className="mt-2 break-all font-mono text-sm text-slate-600">
                    {certificate.verificationCode}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    This identifier can be used to verify
                    the authenticity of this GrowthPilot
                    Academy credential.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/dev/academy/certificates/verify/${encodeURIComponent(
                  certificate.verificationCode,
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <ShieldCheck className="h-4 w-4" />
                Verify Certificate
              </Link>

              <Link
                href="/dev/academy/learner"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Return to Learner Dashboard
              </Link>
            </div>
          </div>

          <footer className="border-t border-slate-200 bg-slate-50 px-6 py-6 text-center">
            <p className="text-xs text-slate-500">
              GrowthPilot Academy · Professional Learning
              & Certification
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}

interface InfoCardProps {
  label: string;
  value: string;
  mono?: boolean;
}

function InfoCard({
  label,
  value,
  mono = false,
}: InfoCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p
        className={`mt-2 break-words font-medium text-slate-950 ${
          mono ? "font-mono text-sm" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function formatDate(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
