import { z } from 'zod';

export const FormSchema = z.object({
  target_url: z.string().url()
});
