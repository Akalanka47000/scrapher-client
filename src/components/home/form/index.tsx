import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormControl, FormField, FormItem, Input } from '@/components';
import { analyseWebpage } from '@/services';
import { useStore } from '@/store';
import { filterAndNotifyError } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { FormSchema } from './schema';

export function AnalysisForm() {
  const openResultDialog = useStore((store) => store.openResultDialog);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange'
  });

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return analyseWebpage({ options: { params: { url: data.target_url } } });
    },
    onSuccess: (result) => {
      if (!result?.error) form.reset({ target_url: '' });
      openResultDialog(result.data);
    },
    onError: (error: any) => {
      if (error?.detail) {
        openResultDialog(null, error.detail);
      } else {
        filterAndNotifyError(error);
      }
    }
  });

  return (
    <Form {...form}>
      <form className="w-full max-w-xl" onSubmit={form.handleSubmit(mutation.mutate as any)}>
        <FormField
          control={form.control}
          name="target_url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter target website url"
                  className="text-base lg:text-lg h-12 font-light"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-4" loading={mutation.isPending} disabled={!form.formState.isValid}>
          See what&apos;s inside
        </Button>
      </form>
    </Form>
  );
}
