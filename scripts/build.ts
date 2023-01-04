import pkg from '../package.json'

function getManualChunks() {
  const manualChunks = {}
  for (const key in pkg.dependencies) {
    if (Object.prototype.hasOwnProperty.call(pkg.dependencies, key)) {
      manualChunks[key] = [key]
    }
  }
  return manualChunks
}

export const manualChunks = getManualChunks()
