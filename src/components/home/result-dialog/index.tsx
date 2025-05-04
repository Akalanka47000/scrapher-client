import { Dialog } from '@/components/common';
import { useStore } from '@/store';
import ErrorContent from './error';
import SuccessContent from './success';

export function ResultDialog() {
  const { isResultDialogOpen, setIsResultDialogOpen, result, error } = useStore();
  return (
    <Dialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
      {error ? <ErrorContent error={error} /> : <SuccessContent result={result} />}
    </Dialog>
  );
}
