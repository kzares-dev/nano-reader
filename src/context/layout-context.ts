import { createContextId } from "@builder.io/qwik";

export const LayoutContext = createContextId<{type: boolean}>("layout-context")