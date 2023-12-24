import { createContextId } from "@builder.io/qwik";

export type Session = {
    id: string,
    email: string,
}

export const SessionContext = createContextId<Session>('session-context')