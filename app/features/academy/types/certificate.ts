export type CertificateCredentialType =
  | "Course Certificate"
  | "Professional Certificate"
  | "GrowthPilot Certification";

export type CertificateStatus =
  | "Issued"
  | "Pending"
  | "Revoked";

export interface AcademyCertificate {
  id: string;

  learnerId: string;
  courseId: string;

  courseTitle: string;

  certificateNumber: string;

  credentialType: CertificateCredentialType;

  status: CertificateStatus;

  issuedAt: string;

  /**
   * The assessment score that qualified
   * the learner for certification.
   */
  assessmentScore?: number;

  /**
   * The date on which the learner completed
   * all course requirements.
   */
  completedAt: string;

  /**
   * Public verification identifier.
   *
   * This is intentionally separate from the
   * internal certificate ID and certificate number.
   */
  verificationCode: string;
}
