import { resolve } from 'path'
import { cwd } from 'process'
import pkg from '../package.json'

const whitelist = ['vue']

function getManualChunks() {
  const manualChunks = {}
  for (const key in pkg.dependencies) {
    if (
      Object.prototype.hasOwnProperty.call(pkg.dependencies, key) &&
      !whitelist.includes(key)
    ) {
      manualChunks[key] = [key]
    }
  }
  return manualChunks
}

export const manualChunks = getManualChunks()

export function getRootPath() {
  return resolve(cwd())
}

export function getEnvDir() {
  const rootPath = getRootPath()
  return resolve(rootPath, 'config')
}

export const envDir = getEnvDir()

export function getSourceDir(sourceDirectory = 'src') {
  const rootPath = getRootPath()
  return resolve(rootPath, sourceDirectory)
}

export const sourceDir = getSourceDir()
