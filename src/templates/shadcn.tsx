import * as React from "react";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateRenderProps,
} from "@yext/pages";
import { RevisionHistory, allRevisionHistory } from "../../revisionHistory.js";
import { formatDate } from "@/lib/utils";
import "../shadcn.css";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu.js";
import { Button } from "@/components/shadcn/ui/button.js";
import { MoreHorizontal } from "lucide-react";

export const getPath: GetPath<TemplateRenderProps> = () => {
  return `shadcn.html`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "shadcn",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const columns: ColumnDef<RevisionHistory>[] = [
  {
    accessorKey: "versionNumber",
    header: "Version Number",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => {
      return formatDate(row.getValue("timestamp"));
    },
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const revisionHistory = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(revisionHistory.id.toString())
              }
            >
              View JSON
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Restore to Latest</DropdownMenuItem>
            <DropdownMenuItem>Public to Production</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const Static: Template<TemplateRenderProps> = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={allRevisionHistory} />
    </div>
  );
};

export default Static;
