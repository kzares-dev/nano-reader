"use client";

import { EdgeStoreRouter } from "@/app/api/edgestore/[...adgestore]/route";
import { createEdgeStoreProvider } from "@edgestore/react";

export const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgeStoreRouter>()

