import { Button, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/common';
import { IAnalyzeWebpageError } from '@/types';
import { DialogDescription } from '@radix-ui/react-dialog';

export default function ErrorContent({ error }: { error?: IAnalyzeWebpageError }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-xl md:text-2xl">Oops:(</DialogTitle>
        <DialogDescription className="text-muted-foreground text-center">
          Something went wrong while analyzing the URL. Here&apos;s what happened...
        </DialogDescription>
      </DialogHeader>
      <span className="text-center">
        {error?.target_status ? (
          <>
            We received a status code of <span className="font-bold text-primary">{error?.target_status}</span>
            &nbsp;which usually translates to <span className="font-bold text-primary">{error?.target_detail}</span>
          </>
        ) : (
          <>
            We didn&apos;t receive a proper status code from the server, but we&apos;re positive it translates to{' '}
            <span className="font-bold text-primary">{error?.target_detail}</span>
          </>
        )}
      </span>
      <DialogClose asChild>
        <Button>Try another URL</Button>
      </DialogClose>
    </DialogContent>
  );
}
