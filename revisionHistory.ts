export type RevisionHistory = {
  id: number;
  versionNumber: number;
  timestamp: Date;
  updatedBy: string;
  label?: "LATEST" | "PRODUCTION";
};

export const allRevisionHistory: RevisionHistory[] = [
  {
    id: 1,
    versionNumber: 80,
    timestamp: new Date("Dec 14, 2023, 11:04 AM MST"),
    updatedBy:
      "bmcginnis on behalf of Dave Sammel (dsammel@yext.com) (Restored from revision 78)",
    label: "LATEST",
  },
  {
    id: 1,
    versionNumber: 79,
    timestamp: new Date("Sep 25, 2023, 10:43 AM MST"),
    updatedBy:
      "bmcginnis on behalf of Dave Sammel (dsammel@yext.com) (Interactive Editor)",
    label: "LATEST",
  },
];
