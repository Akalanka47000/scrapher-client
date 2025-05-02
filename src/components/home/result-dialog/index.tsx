import { Dialog } from '@/components/common';
import { useStore } from '@/store';
import ErrorContent from './error';
import SuccessContent from './success';

export function ResultDialog() {
  const { isResultDialogOpen, setIsResultDialogOpen, result } = useStore();
  return (
    <Dialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
      {result?.error ? <ErrorContent error={result.error} /> : <SuccessContent result={result} />}
    </Dialog>
  );
}
