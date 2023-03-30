import { ref, provide } from "vue";
import * as provideKeys from "../provideKeys";
import type { RootProps, RootEmits } from "../types";

export function useProvide(rootProps: RootProps, rootEmits: RootEmits) {
  provide(provideKeys.rootPropsKey, rootProps);
  provide(provideKeys.rootEmitsKey, rootEmits);

  // trigger element container reference
  const referenceRef = ref<HTMLElement | null>(null);
  provide(provideKeys.referenceRefKey, {
    referenceRef,
  });

  // floating element reference
  const floatingRef = ref<HTMLElement | null>(null);
  function setFloatingRef(e: HTMLElement) {
    floatingRef.value = e;
  }
  provide(provideKeys.floatingRefKey, {
    floatingRef,
    setFloatingRef,
  });

  // floating element arrow reference
  const floatingArrowRef = ref<HTMLElement | null>(null);
  function setFloatingArrowRef(e: HTMLElement) {
    floatingArrowRef.value = e;
  }
  provide(provideKeys.floatingArrowRefKey, {
    floatingArrowRef,
    setFloatingArrowRef,
  });

  return {
    referenceRef,
    floatingRef,
    floatingArrowRef,
  };
}