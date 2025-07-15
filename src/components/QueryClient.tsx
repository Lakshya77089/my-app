'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
console.log("QueryClient exists?", queryClient);
export default function QueryClientContextProvider({
	children,
}: {
	children: ReactNode
}) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
