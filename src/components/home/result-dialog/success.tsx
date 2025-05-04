import {
  BooleanBadge,
  Button,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@/components/common';
import { IAnalyseWebpageResult } from '@/types';
import { DialogDescription } from '@radix-ui/react-dialog';

export default function SuccessContent({ result }: { result?: IAnalyseWebpageResult | null }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-xl md:text-2xl">Woohoo!</DialogTitle>
        <DialogDescription className="text-muted-foreground text-center">
          Your analysis is complete. Here&apos;s what we found:
        </DialogDescription>
      </DialogHeader>
      <Table className="border border-border/60">
        <TableBody>
          <TableRow>
            <TableCell>HTML Version</TableCell>
            <TableCell className="text-center">{result?.html_version}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="truncate">Page Title</TableCell>
            <TableCell className="text-center">{result?.page_title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Heading Counts</TableCell>
            <TableCell className="text-center grid grid-cols-3">
              {Object.entries(result?.heading_counts ?? {}).map(([key, value]) => (
                <div key={key}>
                  {key.toUpperCase()}: {value as any}
                </div>
              ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Internal Links</TableCell>
            <TableCell className="text-center">{result?.internal_link_count}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>External Links</TableCell>
            <TableCell className="text-center">{result?.external_link_count}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Inaccessible Links</TableCell>
            <TableCell className="text-center">{result?.inaccessible_link_count}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contains Login Form</TableCell>
            <TableCell className="text-center">
              <BooleanBadge value={result?.contains_login_form} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <DialogClose asChild>
        <Button>Analyze another URL</Button>
      </DialogClose>
    </DialogContent>
  );
}
