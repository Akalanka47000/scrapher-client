import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IPerformAnalysisResult } from '@/types';

interface Slice {
  isResultDialogOpen: boolean;
  openResultDialog: (arg: IPerformAnalysisResult) => void;
  setIsResultDialogOpen: (arg: boolean) => void;
  result?: IPerformAnalysisResult;
}

const createSlice: StateCreator<Slice> = (set) => ({
  isResultDialogOpen: false,
  openResultDialog: (arg) => set({ result: arg, isResultDialogOpen: true }),
  setIsResultDialogOpen: (arg) => set({ isResultDialogOpen: arg })
});

export const useStore = create<Slice>()(devtools(createSlice));

const initialState = useStore.getState();

export const resetStore = () => useStore.setState(initialState);
