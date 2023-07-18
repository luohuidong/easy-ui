import type { Ref, ComputedRef } from "vue";

export interface RootProps {
  readonly modelValue: Date | null | undefined;
  readonly disabledDate?: (date: Date) => boolean;
}

export interface RootEmit {
  (e: "update:modelValue", value: Date): void;
}

export interface Store {
  rootProps: RootProps;
  rootEmit: RootEmit;
  state: {
    yearOfCurrentDate: Ref<number>;
    monthOfCurrentDate: Ref<number>;
    displayYearOptions: Ref<boolean>;
    displayMonthOptions: Ref<boolean>;
  };
  actions: {
    handleChangeToPreviousMonth: () => void;
    handleChangeToNextMonth: () => void;
  };
}
