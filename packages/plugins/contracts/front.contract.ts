import React from 'react'

export type FrontPlugin = {
  name: string,
  getRoutes?: () => Array<{path: string, component: React.FC}>,
  getUIElements?: () => Record<string, React.FC>,
}