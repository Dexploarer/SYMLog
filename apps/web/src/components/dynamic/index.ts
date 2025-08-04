"use client"

import { createOptimizedDynamicImport, OptimizedLoader } from '@/lib/dynamic-imports'

// Large interactive components that benefit from dynamic loading
export const TreeVisualization = createOptimizedDynamicImport(
  () => import('@/components/chat/tree-visualization').then(mod => mod.TreeVisualization),
  { 
    ssr: false, // Tree visualization is interactive and doesn't need SSR
    loadingSize: 'large',
    preload: true // Preload since it's commonly used
  }
)

export const ChatSettingsModal = createOptimizedDynamicImport(
  () => import('@/components/chat/chat-settings-modal'),
  { ssr: false, loadingSize: 'default' }
)

export const BranchMergeWizard = createOptimizedDynamicImport(
  () => import('@/components/chat/branch-merge-wizard'),
  { ssr: false, loadingSize: 'default' }
)

export const BranchComparisonView = createOptimizedDynamicImport(
  () => import('@/components/chat/branch-comparison-view'),
  { ssr: false, loadingSize: 'default' }
)

export const CodeSandbox = createOptimizedDynamicImport(
  () => import('@/components/artifacts/code-sandbox'),
  { ssr: false, loadingSize: 'default' }
)

export const ArtifactViewer = createOptimizedDynamicImport(
  () => import('@/components/artifacts/artifact-viewer'),
  { ssr: false, loadingSize: 'default' }
)

// Heavy authentication components (client-side only)
export const WebAuthFlow = createOptimizedDynamicImport(
  () => import('@/components/web-auth-flow'),
  { ssr: false, loadingSize: 'default' }
)

export const DesktopAuthFallback = createOptimizedDynamicImport(
  () => import('@/components/desktop-auth-fallback'),
  { ssr: false, loadingSize: 'default' }
)

export const CrossmintWalletAuth = createOptimizedDynamicImport(
  () => import('@/components/crossmint-wallet-auth'),
  { ssr: false, loadingSize: 'default' }
)

// Export the optimized loader for external use
export { OptimizedLoader } from '@/lib/dynamic-imports'