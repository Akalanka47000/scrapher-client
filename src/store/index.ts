import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IAnalyseWebpageResult, IAnalyzeWebpageError } from '@/types';

interface Slice {
  isResultDialogOpen: boolean;
  openResultDialog: (result: IAnalyseWebpageResult | null, err?: IAnalyzeWebpageError) => void;
  setIsResultDialogOpen: (arg: boolean) => void;
  result?: IAnalyseWebpageResult | null;
  error?: IAnalyzeWebpageError | null;
}

const createSlice: StateCreator<Slice> = (set) => ({
  isResultDialogOpen: false,
  openResultDialog: (arg, err) => set({ result: arg ?? null, error: err ?? null, isResultDialogOpen: true }),
  setIsResultDialogOpen: (arg) => set({ isResultDialogOpen: arg })
});

export const useStore = create<Slice>()(devtools(createSlice));

const initialState = useStore.getState();

export const resetStore = () => useStore.setState(initialState);
