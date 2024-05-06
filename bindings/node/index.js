/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

const { existsSync, readFileSync } = require('fs')
const { join } = require('path')

const { platform, arch } = process

let nativeBinding = null
let localFileExisted = false
let loadError = null

function isMusl() {
  // For Node 10
  if (!process.report || typeof process.report.getReport !== 'function') {
    try {
      const lddPath = require('child_process').execSync('which ldd').toString().trim()
      return readFileSync(lddPath, 'utf8').includes('musl')
    } catch (e) {
      return true
    }
  } else {
    const { glibcVersionRuntime } = process.report.getReport().header
    return !glibcVersionRuntime
  }
}

switch (platform) {
  case 'android':
    switch (arch) {
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'rookie.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.android-arm64.node')
          } else {
            nativeBinding = require('@rookie-rs/api-android-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'rookie.android-arm-eabi.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.android-arm-eabi.node')
          } else {
            nativeBinding = require('@rookie-rs/api-android-arm-eabi')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Android ${arch}`)
    }
    break
  case 'win32':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(
          join(__dirname, 'rookie.win32-x64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.win32-x64-msvc.node')
          } else {
            nativeBinding = require('@rookie-rs/api-win32-x64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'ia32':
        localFileExisted = existsSync(
          join(__dirname, 'rookie.win32-ia32-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.win32-ia32-msvc.node')
          } else {
            nativeBinding = require('@rookie-rs/api-win32-ia32-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'rookie.win32-arm64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.win32-arm64-msvc.node')
          } else {
            nativeBinding = require('@rookie-rs/api-win32-arm64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Windows: ${arch}`)
    }
    break
  case 'darwin':
    localFileExisted = existsSync(join(__dirname, 'rookie.darwin-universal.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./rookie.darwin-universal.node')
      } else {
        nativeBinding = require('@rookie-rs/api-darwin-universal')
      }
      break
    } catch {}
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'rookie.darwin-x64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.darwin-x64.node')
          } else {
            nativeBinding = require('@rookie-rs/api-darwin-x64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'rookie.darwin-arm64.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.darwin-arm64.node')
          } else {
            nativeBinding = require('@rookie-rs/api-darwin-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on macOS: ${arch}`)
    }
    break
  case 'freebsd':
    if (arch !== 'x64') {
      throw new Error(`Unsupported architecture on FreeBSD: ${arch}`)
    }
    localFileExisted = existsSync(join(__dirname, 'rookie.freebsd-x64.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./rookie.freebsd-x64.node')
      } else {
        nativeBinding = require('@rookie-rs/api-freebsd-x64')
      }
    } catch (e) {
      loadError = e
    }
    break
  case 'linux':
    switch (arch) {
      case 'x64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-x64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-x64-musl.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-x64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-x64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-x64-gnu.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-x64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-arm64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-arm64-musl.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-arm64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-arm64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-arm64-gnu.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-arm64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-arm-musleabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-arm-musleabihf.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-arm-musleabihf')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-arm-gnueabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-arm-gnueabihf.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-arm-gnueabihf')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'riscv64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-riscv64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-riscv64-musl.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-riscv64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'rookie.linux-riscv64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./rookie.linux-riscv64-gnu.node')
            } else {
              nativeBinding = require('@rookie-rs/api-linux-riscv64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 's390x':
        localFileExisted = existsSync(
          join(__dirname, 'rookie.linux-s390x-gnu.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./rookie.linux-s390x-gnu.node')
          } else {
            nativeBinding = require('@rookie-rs/api-linux-s390x-gnu')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Linux: ${arch}`)
    }
    break
  default:
    throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
}

if (!nativeBinding) {
  if (loadError) {
    throw loadError
  }
  throw new Error(`Failed to load native binding`)
}

const { anyBrowser, firefox, librewolf, chrome, brave, edge, opera, operaGx, chromium, vivaldi, firefoxBased, load, safari, chromiumBased } = nativeBinding

module.exports.anyBrowser = anyBrowser
module.exports.firefox = firefox
module.exports.librewolf = librewolf
module.exports.chrome = chrome
module.exports.brave = brave
module.exports.edge = edge
module.exports.opera = opera
module.exports.operaGx = operaGx
module.exports.chromium = chromium
module.exports.vivaldi = vivaldi
module.exports.firefoxBased = firefoxBased
module.exports.load = load
module.exports.safari = safari
module.exports.chromiumBased = chromiumBased
