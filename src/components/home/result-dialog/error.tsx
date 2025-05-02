import { Button, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/common';
import { IPerformAnalysisResult } from '@/types';
import { DialogDescription } from '@radix-ui/react-dialog';

export default function ErrorContent({ error }: { error?: IPerformAnalysisResult['error'] }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-xl md:text-2xl">Oops:(</DialogTitle>
        <DialogDescription className="text-muted-foreground text-center">
          Something went wrong while analyzing the URL. Here&apos;s what happened...
        </DialogDescription>
      </DialogHeader>
      <span className="text-center">
        We received a status code of
        <span className="font-bold text-primary">{error?.code}</span>
        &nbsp; which usually translates to
        <span className="font-bold text-primary">{error?.message}</span>
      </span>
      <DialogClose asChild>
        <Button>Try another URL</Button>
      </DialogClose>
    </DialogContent>
  );
}
